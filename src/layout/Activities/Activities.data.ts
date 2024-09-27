import { IActivityCard } from "@/interfaces/components/ActivityCard/IActivityCard";

export const activities: IActivityCard[] = [
  {
    title: "Village du Père Noel",
    background:
      "https://images.unsplash.com/photo-1560911081-2ed36c817b06?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    guided: true,
    price: 850,
    time: {
      day: 2,
      night: 1,
    },
    animation: {
      rotate: -8,
      rotateEnd: -1.5,
      yEnd: 0,
    },
  },
  {
    title: "Voyages en montagnes",
    background:
      "https://plus.unsplash.com/premium_photo-1675017880411-eee9f1c99351?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    guided: true,
    price: 1800,
    time: {
      day: 4,
      night: 3,
    },
    animation: {
      rotate: -6,
      rotateEnd: 2,
      yEnd: 400,
    },
  },
  {
    title: "Rencontre avec les Husky",
    background:
      "https://images.unsplash.com/photo-1511204295025-66299d0679a2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    guided: true,
    price: 300,
    time: {
      day: 1,
      night: 0,
    },
    animation: {
      rotate: 4,
      rotateEnd: -0.5,
      yEnd: 200,
    },
  },
];
