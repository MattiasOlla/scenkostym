export type Person = {
  name: string;
  email?: string;
  instagram?: string;
  imageUrl?: string;
};

export const people = [
  {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    instagram: "janedoe",
    imageUrl: "/images/Cato.jpeg",
  },
  {
    name: "Mike Smith",
    email: "mike.smith@example.com",
    instagram: "mikesmith",
  },
  {
    name: "Anna Lee",
    email: "anna.lee@example.com",
    instagram: "annalee",
  },
] as const satisfies Person[];
