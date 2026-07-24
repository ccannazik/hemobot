"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CareMap } from "@/components/CareMap";
import { LocationSearch } from "@/components/LocationSearch";
import { MedicalDisclaimerBanner } from "@/components/Disclaimer";
import { PALO_ALTO_CENTER, type FacilityFilter, type HealthcareFacility } from "@/data/facilities";

export default function FindCareContent() {
  const searchParams = useSearchParams();
  const initialLat = parseFloat(searchParams.get("lat") || String(PALO_ALTO_CENTER.lat));
  const initialLng = parseFloat(searchParams.get("lng") || String(PALO_ALTO_CENTER.lng));
  const initialLabel = searchParams.get("label") || "Palo Alto, CA";

  const [center, setCenter] = useState({ lat: initialLat, lng: initialLng });
  const [locationLabel, setLocationLabel] = useState(initialLabel);
  const [facilities, setFacilities] = useState<(HealthcareFacility & { distance: number })[]>([]);
  const [filter, setFilter] = useState<FacilityFilter>("all");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [mapsConfigured, setMapsConfigured] = useState(false);

  useEffect(() => {
    fetch("/api/maps/config")
      .then((r) => r.json())
      .then((data) => {
        setMapsConfigured(data.configured);
        if (data.configured) setApiKey(data.apiKey);
      })
      .catch(() => setMapsConfigured(false));
  }, []);

  const loadFacilities = useCallback(async (lat: number, lng: number) => {
    const res = await fetch(`/api/facilities?lat=${lat}&lng=${lng}&sort=distance`);
    const data = await res.json();
    setFacilities(data.facilities);
  }, []);

  useEffect(() => {
    loadFacilities(center.lat, center.lng);
  }, [center, loadFacilities]);

  function handleLocationChange(lat: number, lng: number, label: string) {
    setCenter({ lat, lng });
    setLocationLabel(label);
    loadFacilities(lat, lng);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Find Nearby Hemophilia Care
        </h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Search for hospitals, official Hemophilia Treatment Centers, hematologists, and pediatric
          hematology clinics. Currently focused on Palo Alto and the surrounding Bay Area.
        </p>
      </div>

      <div className="mt-8">
        <LocationSearch onLocationChange={handleLocationChange} defaultValue={locationLabel} />
        <p className="mt-2 text-sm text-slate-500">
          Showing facilities near: <strong>{locationLabel}</strong>
        </p>
      </div>

      <div className="mt-6">
        <MedicalDisclaimerBanner />
      </div>

      <div className="mt-8">
        <CareMap
          facilities={facilities}
          center={center}
          filter={filter}
          onFilterChange={setFilter}
          selectedId={selectedId}
          onSelect={setSelectedId}
          apiKey={apiKey}
          mapsConfigured={mapsConfigured}
        />
      </div>

      <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-6">
        <h2 className="font-semibold text-slate-900">About Our Directory Data</h2>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          Facility information is sourced from the{" "}
          <a
            href="https://dbdgateway.cdc.gov/HTCDirSearch.aspx"
            className="text-primary-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            CDC Hemophilia Treatment Center Directory
          </a>{" "}
          and official facility websites. Official HTCs are clearly marked. Always verify current
          hours, contact information, and services before visiting. HEMOBOT is designed to expand
          to additional regions over time.
        </p>
      </div>
    </div>
  );
}
