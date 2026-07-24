"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2, BookOpen } from "lucide-react";
import { Button } from "./Button";
import { Card } from "./Card";
import { JournalPrivacyNote } from "./Disclaimer";

interface JournalEntry {
  id: string;
  date: string;
  notes?: string | null;
  questionsForDoctor?: string | null;
  symptomsNotes?: string | null;
  appointmentNotes?: string | null;
  treatmentNotes?: string | null;
  emotionalNotes?: string | null;
}

const STORAGE_KEY = "hemobot_journal_user_id";

export function HemophiliaJournal() {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    date: new Date().toISOString().split("T")[0],
    notes: "",
    questionsForDoctor: "",
    symptomsNotes: "",
    appointmentNotes: "",
    treatmentNotes: "",
    emotionalNotes: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUserId(stored);
      loadEntries(stored);
    }
  }, []);

  async function loadEntries(uid: string) {
    const res = await fetch(`/api/journal?userId=${uid}`);
    setEntries(await res.json());
  }

  async function saveEntry(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/journal", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, userId }),
    });
    const data = await res.json();
    if (data.userId) {
      localStorage.setItem(STORAGE_KEY, data.userId);
      setUserId(data.userId);
    }
    setShowForm(false);
    setForm({
      date: new Date().toISOString().split("T")[0],
      notes: "",
      questionsForDoctor: "",
      symptomsNotes: "",
      appointmentNotes: "",
      treatmentNotes: "",
      emotionalNotes: "",
    });
    loadEntries(data.userId || userId!);
  }

  async function deleteEntry(id: string) {
    if (!confirm("Delete this journal entry?")) return;
    await fetch("/api/journal", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (userId) loadEntries(userId);
  }

  const fields = [
    { key: "notes" as const, label: "Personal Notes" },
    { key: "questionsForDoctor" as const, label: "Questions for Healthcare Provider" },
    { key: "symptomsNotes" as const, label: "Experiences to Discuss with a Professional" },
    { key: "appointmentNotes" as const, label: "Appointment Notes" },
    { key: "treatmentNotes" as const, label: "General Treatment-Related Notes" },
    { key: "emotionalNotes" as const, label: "Emotional Wellbeing Notes" },
  ];

  return (
    <div className="space-y-6">
      <JournalPrivacyNote />

      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-600">
          Record personal notes and questions for your healthcare team. This is not a diagnostic tool.
        </p>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4" />
          New Entry
        </Button>
      </div>

      {showForm && (
        <Card>
          <form onSubmit={saveEntry} className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary-600" />
              New Journal Entry
            </h3>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Date</label>
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
              />
            </div>
            {fields.map(({ key, label }) => (
              <div key={key}>
                <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
                <textarea
                  rows={3}
                  value={form[key]}
                  onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  placeholder={`Optional: ${label.toLowerCase()}…`}
                />
              </div>
            ))}
            <div className="flex gap-2">
              <Button type="submit">Save Entry</Button>
              <Button type="button" variant="ghost" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      {entries.length === 0 ? (
        <Card className="text-center py-12">
          <BookOpen className="h-12 w-12 text-slate-300 mx-auto mb-4" />
          <p className="text-slate-500">No journal entries yet. Start recording your journey.</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {entries.map((entry) => (
            <Card key={entry.id}>
              <div className="flex items-start justify-between">
                <h3 className="font-semibold text-slate-900">
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h3>
                <button
                  type="button"
                  onClick={() => deleteEntry(entry.id)}
                  className="text-slate-400 hover:text-red-500 p-1"
                  aria-label="Delete entry"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 space-y-3">
                {fields.map(({ key, label }) =>
                  entry[key] ? (
                    <div key={key}>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {label}
                      </p>
                      <p className="text-sm text-slate-700 mt-1 whitespace-pre-wrap">{entry[key]}</p>
                    </div>
                  ) : null
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
