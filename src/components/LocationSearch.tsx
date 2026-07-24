"use client";

import { useState } from "react";
import { Search, LocateFixed, Loader2 } from "lucide-react";
import { Button } from "./Button";

interface LocationSearchProps {
  onLocationChange: (lat: number, lng: number, label: string) => void;
  defaultValue?: string;
  className?: string;
}

export function LocationSearch({
  onLocationChange,
  defaultValue = "Palo Alto, CA",
  className = "",
}: LocationSearchProps) {
  const [query, setQuery] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function geocode(address: string) {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`/api/geocode?address=${encodeURIComponent(address)}`);
      const data = await res.json();
      if (data.lat && data.lng) {
        onLocationChange(data.lat, data.lng, data.formattedAddress || address);
      } else {
        setError("Location not found. Try a city, ZIP code, or address.");
      }
    } catch {
      setError("Unable to search location. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) geocode(query.trim());
  }

  function handleCurrentLocation() {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    setLoading(true);
    setError("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        onLocationChange(pos.coords.latitude, pos.coords.longitude, "Your location");
        setQuery("Your location");
        setLoading(false);
      },
      () => {
        setError("Unable to access your location. Please enter an address manually.");
        setLoading(false);
      }
    );
  }

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter city, ZIP code, or address"
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
            aria-label="Search location"
          />
        </div>
        <div className="flex gap-2">
          <Button type="submit" disabled={loading}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
          </Button>
          <Button type="button" variant="outline" onClick={handleCurrentLocation} disabled={loading}>
            <LocateFixed className="h-4 w-4" />
            <span className="hidden sm:inline">Use My Location</span>
          </Button>
        </div>
      </form>
      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
