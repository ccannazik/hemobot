"use client";

import { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import {
  Phone,
  Globe,
  Navigation,
  Clock,
  Shield,
  MapPin,
  AlertCircle,
} from "lucide-react";
import { Button } from "./Button";
import { Card } from "./Card";
import {
  facilityTypeLabels,
  type FacilityFilter,
  type HealthcareFacility,
} from "@/data/facilities";
import { cn, formatDistance, getDirectionsUrl, getTelLink } from "@/lib/utils";

const mapContainerStyle = { width: "100%", height: "100%", minHeight: "400px" };

const markerColors: Record<string, string> = {
  htc: "#0d9488",
  hospital: "#2563eb",
  hematologist: "#7c3aed",
  pediatric_hematology: "#db2777",
  clinic: "#0891b2",
  emergency: "#dc2626",
};

function FacilityCardContent({
  facility,
  onClose,
  compact = false,
}: {
  facility: HealthcareFacility & { distance?: number };
  onClose?: () => void;
  compact?: boolean;
}) {
  const fullAddress = `${facility.address}, ${facility.city}, ${facility.state} ${facility.zip}`;

  return (
    <div className={cn("space-y-3", compact ? "p-1" : "")}>
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-slate-900 leading-tight">{facility.name}</h3>
          <p className="text-sm text-primary-600 font-medium mt-0.5">
            {facilityTypeLabels[facility.type]}
          </p>
        </div>
        {facility.isHTC && (
          <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-teal-100 px-2 py-0.5 text-xs font-semibold text-teal-800">
            <Shield className="h-3 w-3" />
            Official HTC
          </span>
        )}
      </div>

      <div className="space-y-1.5 text-sm text-slate-600">
        <p className="flex items-start gap-2">
          <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-slate-400" />
          {fullAddress}
        </p>
        {facility.distance !== undefined && (
          <p className="text-primary-600 font-medium">{formatDistance(facility.distance)} away</p>
        )}
        {facility.hours && (
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-slate-400" />
            {facility.hours}
          </p>
        )}
        <p className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-slate-400" />
          <a href={getTelLink(facility.phone)} className="hover:text-primary-600">
            {facility.phone}
          </a>
        </p>
      </div>

      {!compact && (
        <p className="text-sm text-slate-500 leading-relaxed">{facility.description}</p>
      )}

      <div className="flex flex-wrap gap-2 pt-1">
        <a
          href={getDirectionsUrl(facility.lat, facility.lng, fullAddress)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary-600 px-3 py-2 text-xs font-semibold text-white hover:bg-primary-700"
        >
          <Navigation className="h-3.5 w-3.5" />
          Get Directions
        </a>
        <a
          href={facility.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
        >
          <Globe className="h-3.5 w-3.5" />
          Website
        </a>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose}>
            Close
          </Button>
        )}
      </div>

      {!facility.verified && (
        <p className="text-xs text-amber-700 flex items-center gap-1">
          <AlertCircle className="h-3.5 w-3.5" />
          Unverified — confirm details before visiting
        </p>
      )}
    </div>
  );
}

function FallbackMap({
  facilities,
}: {
  facilities: (HealthcareFacility & { distance?: number })[];
}) {
  return (
    <div className="relative h-full min-h-[400px] rounded-2xl bg-gradient-to-br from-primary-50 to-teal-50 border border-slate-200 flex flex-col items-center justify-center p-8 text-center">
      <MapPin className="h-12 w-12 text-primary-400 mb-4" />
      <h3 className="text-lg font-semibold text-slate-800">Map Preview Mode</h3>
      <p className="text-sm text-slate-600 mt-2 max-w-md">
        Google Maps API key not configured. Set{" "}
        <code className="text-xs bg-white px-1 rounded">GOOGLE_MAPS_API_KEY</code> in your{" "}
        <code className="text-xs bg-white px-1 rounded">.env</code> file to enable the interactive
        map.
      </p>
      <p className="text-xs text-slate-500 mt-4">
        Showing {facilities.length} facilities in list view.
      </p>
      {/* Production: Google Maps JavaScript API loaded via /api/maps/config */}
    </div>
  );
}

function GoogleMapView({
  apiKey,
  center,
  facilities,
  onSelect,
}: {
  apiKey: string;
  center: { lat: number; lng: number };
  facilities: (HealthcareFacility & { distance?: number })[];
  onSelect: (id: string | null) => void;
}) {
  const [infoWindowId, setInfoWindowId] = useState<string | null>(null);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ["places"],
    preventGoogleFontsLoading: true,
  });

  const onMapLoad = useCallback(() => {}, []);

  if (loadError) {
    return <FallbackMap facilities={facilities} />;
  }

  if (!isLoaded) {
    return (
      <div className="h-full min-h-[400px] flex items-center justify-center bg-slate-50 rounded-2xl">
        <p className="text-slate-500 text-sm">Loading map…</p>
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
      onLoad={onMapLoad}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: true,
      }}
    >
      {facilities.map((f) => (
        <Marker
          key={f.id}
          position={{ lat: f.lat, lng: f.lng }}
          onClick={() => {
            onSelect(f.id);
            setInfoWindowId(f.id);
          }}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: f.isHTC ? 12 : 9,
            fillColor: markerColors[f.type] || "#2563eb",
            fillOpacity: 1,
            strokeColor: "#ffffff",
            strokeWeight: 2,
          }}
          title={f.name}
        />
      ))}

      {infoWindowId && (
        <InfoWindow
          position={{
            lat: facilities.find((f) => f.id === infoWindowId)!.lat,
            lng: facilities.find((f) => f.id === infoWindowId)!.lng,
          }}
          onCloseClick={() => setInfoWindowId(null)}
        >
          <div className="max-w-xs p-1">
            <FacilityCardContent
              facility={facilities.find((f) => f.id === infoWindowId)!}
              compact
            />
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

interface CareMapProps {
  facilities: (HealthcareFacility & { distance?: number })[];
  center: { lat: number; lng: number };
  filter: FacilityFilter;
  onFilterChange: (filter: FacilityFilter) => void;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  apiKey: string | null;
  mapsConfigured: boolean;
}

export function CareMap({
  facilities,
  center,
  filter,
  onFilterChange,
  selectedId,
  onSelect,
  apiKey,
  mapsConfigured,
}: CareMapProps) {
  const filteredFacilities =
    filter === "all" ? facilities : facilities.filter((f) => f.type === filter);

  const selected = filteredFacilities.find((f) => f.id === selectedId) || null;
  const showMap = mapsConfigured && apiKey;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["all", "All"],
            ["hospital", "Hospitals"],
            ["htc", "HTCs"],
            ["hematologist", "Hematologists"],
            ["pediatric_hematology", "Pediatric"],
            ["emergency", "Emergency"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => onFilterChange(id)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              filter === id
                ? "bg-primary-600 text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:border-primary-300"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3 h-[400px] lg:h-[520px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
          {showMap ? (
            <GoogleMapView
              apiKey={apiKey}
              center={center}
              facilities={filteredFacilities}
              onSelect={onSelect}
            />
          ) : (
            <FallbackMap facilities={filteredFacilities} />
          )}
        </div>

        <div className="lg:col-span-2 space-y-3 max-h-[520px] overflow-y-auto pr-1">
          <p className="text-sm text-slate-500 font-medium">
            {filteredFacilities.length} facilities found
          </p>
          {filteredFacilities.map((f) => (
            <Card
              key={f.id}
              hover
              className={cn(
                "cursor-pointer p-4 !rounded-xl",
                selectedId === f.id && "ring-2 ring-primary-500 border-primary-200"
              )}
            >
              <button type="button" className="w-full text-left" onClick={() => onSelect(f.id)}>
                <FacilityCardContent facility={f} compact />
              </button>
            </Card>
          ))}
        </div>
      </div>

      {selected && (
        <Card className="lg:hidden">
          <FacilityCardContent facility={selected} onClose={() => onSelect(null)} />
        </Card>
      )}
    </div>
  );
}

export { FacilityCardContent as FacilityCard };
