import { useEffect, useState } from "react";
import { eventsApi } from "../api/eventsApi";
import { EventCard } from "./EventCard";

interface Event {
  id: string;
  title: string;
  date: string; // "2025-11-09"
  description: string;
  createdAt: string; // ISO string
  verified: boolean;
  imageUrl: string[];

  createdBy: {
    email: string;
    image_url: string;
  };

  category: {
    name: string;
  };
}

export const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    eventsApi.getAll().then(setEvents).catch(console.error);
  }, []);

  return (
    <div className="space-y-6 py-4">
      {events.length === 0 && (
        <p className="text-center text-gray-500">No hay eventos todavía.</p>
      )}

      {events.map((ev) => (
        <EventCard key={ev.id} {...ev} />
      ))}
    </div>
  );
};
