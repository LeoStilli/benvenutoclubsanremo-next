export interface Event {
  title: string;
  date?: string;
  description: string;
  image: string;
  imageClassName?: string;
}

const events: Event[] = [
  {
    title: "Aperitivo Night",
    description:
      "Join us for a fun evening of drinks and conversation at the seaside bar.",
    image:
      "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageClassName: "object-[50%_75%]",
  },
  {
    title: "Culture Pop",
    description: "Join us for the chance to learn more about the culture and history of Liguria.",
    image:
      "https://plus.unsplash.com/premium_photo-1661962567804-e4ad10d30d1d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageClassName: "object-[50%_65%]",
  },
  {
    title: "Sports",
    description:
      "Join us for any sporting event, from hiking to padel and tennis.",
    image:
      "https://images.unsplash.com/photo-1737476997205-b3336182f215?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageClassName: "object-[50%_60%]",
  },
  {
    title: "Monthly Lunch Paradiso",
    description:
      "Join us for our monthly BCS lunch and meet up with new and old members!",
    image:
      "https://plus.unsplash.com/premium_photo-1722859296314-b7b7a5ea95c9?q=80&w=3520&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default events;
