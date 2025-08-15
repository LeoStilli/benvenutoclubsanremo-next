export interface Event {
  title: string;
  date?: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    title: "Aperitivo Night",
    description:
      "Join us for a fun evening of drinks and conversation at the seaside bar.",
    image:
      "https://images.unsplash.com/photo-1657364507251-ec5d235eb388?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwZXJpdGl2b3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Culture Pop",
    description: "Join us for the chance to learn more about the culture and history of Liguria.",
    image:
      "https://plus.unsplash.com/premium_photo-1677048148083-99e9f8eb12a5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9yZGlnaGVyYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Sports",
    description:
      "Join us for any sporting event, from hiking to padel and tennis.",
    image:
      "https://images.unsplash.com/photo-1737476997205-b3336182f215?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Monthly Lunch Paradiso",
    description:
      "Join us for our monthly BCS lunch and meet up with new and old members!",
    image:
      "https://images.unsplash.com/photo-1601356616077-695728ae17cb?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default events;
