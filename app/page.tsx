import type { Trip } from "@/lib/types";

const sampleTrips: Trip[] = [
  { id: "1", destination: "Lisbon", startDate: "2026-12-20", endDate: "2026-12-24", notes: "Christmas trip" },
  { id: "2", destination: "Tokyo", startDate: "2027-04-01", endDate: "2027-04-10", notes: "Party" },
  { id: "3", destination: "Paris", startDate: "2026-04-01", endDate: "2026-04-10", notes: "Birthday trip" },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl p-6">
      <h1 className="text-3xl font-semibold">My Trips</h1>

      <ul className="mt-6 space-y-3">
        {sampleTrips.map((trip) => (
          <li key={trip.id} className="rounded-lg border p-4">
            <h2 className="text-2xl font-extrabold">{trip.destination}</h2>
            <p className="text-sm text-muted-foreground">
              {trip.startDate} → {trip.endDate}
            </p>
            {trip.notes && <p className="mt-2 text-sm">{trip.notes}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}