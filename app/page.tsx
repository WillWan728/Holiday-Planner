"use client"; // run this page in the browser, so it can use state and clicks
import { useState } from "react";
import type { Trip } from "@/lib/types";

// Example trips shown when the page first loads
const sampleTrips: Trip[] = [
  { id: "1", destination: "Lisbon", startDate: "2026-12-20", endDate: "2026-12-24", notes: "Christmas trip" },
  { id: "2", destination: "Tokyo", startDate: "2027-04-01", endDate: "2027-04-10", notes: "Party" },
  { id: "3", destination: "Paris", startDate: "2026-04-01", endDate: "2026-04-10", notes: "Birthday trip" },
];

export default function Home() {
  // State: values React watches. Changing one (with its setter) redraws the page.
  const [trips, setTrips] = useState(sampleTrips); // the list of trips
  const [destination, setDestination] = useState(""); // what's typed in each form box
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Runs when "Add trip" is clicked
  function addTrip() {
    // Guard: stop if any box is empty (|| means "or")
    if (destination === "" || startDate === "" || endDate === "") return;

    // Build the new trip from what's in the form
    const newTrip: Trip = {
      id: crypto.randomUUID(), // random unique id
      destination: destination,
      startDate: startDate,
      endDate: endDate,
    };

    // Make a new list: all the old trips plus the new one
    setTrips([...trips, newTrip]);

    // Empty the form boxes, ready for the next trip
    setDestination("");
    setStartDate("");
    setEndDate("");
  }

  // What shows on the page
  return (
    <main className="mx-auto w-full max-w-2xl p-6">
      <h1 className="text-3xl font-semibold">My Trips</h1>

      {/* Form: each box shows its state (value) and updates it as you type (onChange) */}
      <p className="mt-4">Destination</p>
      <input
        className="block rounded border p-2"
        placeholder="Where are you going?"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <p className="mt-4">Start date</p>
      <input
        className="block rounded border p-2"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <p className="mt-4">End date</p>
      <input
        className="block rounded border p-2"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <button className="mt-4 rounded border px-4 py-2" onClick={() => addTrip()}>
        Add trip
      </button>

      {/* Trip list: map draws one card per trip */}
      <ul className="mt-6 space-y-3">
        {trips.map((trip) => (
          <li key={trip.id} className="rounded-lg border p-4">
            <h2 className="text-2xl font-extrabold">{trip.destination}</h2>
            <p className="text-sm text-muted-foreground">
              {trip.startDate} → {trip.endDate}
            </p>
            {/* Only show notes if the trip has some */}
            {trip.notes && <p className="mt-2 text-sm">{trip.notes}</p>}
          </li>
        ))}
      </ul>
    </main>
  );
}
