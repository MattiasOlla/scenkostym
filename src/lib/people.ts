export type Person = {
  name: string;
  email?: string;
  instagram?: string;
  imageUrl?: string;
  website?: string;
};

export const people = [
  {
    name: "Klara Lemurell",
    email: "klara.lemurell[at]gmail.com",
    instagram: "lemurelldesign",
    imageUrl: "/images/klara.jpg",
  },
  {
    name: "Hanna Törnqvist",
    email: "hanna.halmstad[at]hotmail.com",
    instagram: "madebytornqvist",
    imageUrl: "/images/hanna.jpg",
  },
  { name: "Lisa Cannatelli", instagram: "la_sarta_lisa", email: "lisa.cannatelli[at]gmail.com" },
  {
    name: "Alice Tångemar",
    email: "Spralicen03[at]gmail.com",
    instagram: "Designbyspralicen",
    imageUrl: "/images/alice.jpg",
  },
  {
    name: "Emilie Rusvik",
    instagram: "emilys_creations",
    email: "asemiru[at]gmail.com",
    imageUrl: "/images/emilie.jpg",
  },
  { name: "S. M.", instagram: "sewnday_morning" },
  {
    name: "Lisa Johansson",
    instagram: "twine_theory",
    email: "lisjoh00[at]gmail.com",
    imageUrl: "/images/lisa_j.jpg",
  },
  {
    name: "Emmaly Beetson",
    email: "Emmalyb[at]live.dk",
    instagram: "Emmalybeetson",
    imageUrl: "/images/emmaly.jpg",
  },
  {
    name: "Marianne Ljungberg",
    email: "marianneljungberg94[at]gmail.com",
    instagram: "m.arianne_ljungberg",
  },
  {
    name: "Cornelia Edman",
    email: "cornelia.edman[at]gmail.com",
    instagram: "madebyedman",
    imageUrl: "/images/cornelia.jpg",
  },
  {
    name: "Sly Wolters",
    instagram: "sly_design_swe",
    website: "https://slywolters.com",
    email: "sly.wolters[at]gmail.com",
    imageUrl: "/images/sly.jpg",
  },
] as const satisfies Person[];
