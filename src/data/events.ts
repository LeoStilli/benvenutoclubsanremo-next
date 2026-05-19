export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  cost?: string;
  coordinators: string;
  description: string;
  image: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Italian Film Night: Aperitivo & Conversation",
    date: "2026-05-29",
    time: "4:00 PM",
    location: "Palazzo Roverizio, Sanremo",
    cost: "€20 (€15 for BCS Italian students)",
    coordinators: "Ann",
    description: "Watch L'incredibile storia dell'isola delle rose (in Italian with English subtitles). An extraordinary true story about freedom, rebellion, and the courage to dream differently, set against the beauty and spirit of 1960s Italy. Afterward, an aperitivo and friendly conversation led by BCS Italian teacher Emanuela.",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    title: "Members Monthly Lunch",
    date: "2026-05-30",
    time: "1:00 PM (optional arrival at 12:30 PM for drinks on the terrace by the pool)",
    location: "Hotel Paradiso, Sanremo",
    cost: "€27",
    coordinators: "Riccardo, Jeryl & Rosemary",
    description: "Join us for our beloved monthly lunch featuring delicious food and wonderful company in a beautiful setting.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    title: "Hands-on Pasta Workshop",
    date: "2026-06-04",
    time: "10:00 AM",
    location: "Sanremo",
    cost: "€55 + €1 for the Club",
    coordinators: "Sibi",
    description: "A cooking course held entirely in Italian. Learn to craft two authentic pasta recipes from scratch, master kitchen vocabulary and Italian hand gestures. Afterward enjoy your self-cooked meal on the sunny terrace.",
    image: "https://images.unsplash.com/photo-1657073513704-ba8891730352?q=80&w=1397&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "4",
    title: "21st Anniversary Aperitivo",
    date: "2026-06-11",
    time: "6:30 PM",
    location: "Hotel Nazionale veranda & terrace, Sanremo",
    cost: "€15 + €1 for the Club",
    coordinators: "Anna & Roberta",
    description: "Celebrate 21 years of fun, socializing, laughing and friendship. Talented Simona will be singing and leading the dancing. Delicious food buffet included.",
    image: "https://images.unsplash.com/photo-1617201460038-6e5555a8a1f5?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "5",
    title: "Tennis Mini Matches & Clinic",
    date: "2026-06-14",
    time: "10:00 AM",
    location: "Circolo Tennis, Corso Matuzia 28, Sanremo",
    coordinators: "Philippe & Amila",
    description: "All levels welcome, beginner through advanced. Join for a doubles mini match or a group clinic with a teacher, followed by a lite lunch à la carte. Could continue as a weekly/summer event.",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80",
  }
];