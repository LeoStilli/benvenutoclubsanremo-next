export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Aperitivo Night",
    date: "2026-06-14",
    location: "Bar Centrale, Sanremo",
    description: "Join us for a relaxed evening of drinks and conversation.",
    image: "/Event.jpg",
  },
  {
    id: "2",
    title: "Monthly Lunch",
    date: "2026-06-21",
    location: "Ristorante Da Paolo, Sanremo",
    description: "Our beloved monthly lunch. Good food, great company.",
    image: "/Event.jpg",
  },
  {
    id: "3",
    title: "Pickleball Tournament",
    date: "2026-07-05",
    location: "Sports Club Sanremo",
    description: "Friendly pickleball tournament open to all skill levels.",
    image: "/Event.jpg",
  }
];