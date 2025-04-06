import { FocusCards } from "@/components/ui/focus-cards";

export function SpeakersCard() {
  const cards = [
    {
      title: "Mr. Bahaa Farouk",
      sub: "Chief Digital & Data Officer Suez Canal Bank",
      src: "/img/Speackers/1s.jpg",
      bio: "Bahaa Farouk leads digital innovation and data strategies at Suez Canal Bank.",
    },
    {
      title: "Mr. Shehab Moustafa",
      sub: "Country Center of Excellence Director Money Fellows",
      src: "/img/Speackers/2s.jpg",
      bio: "Shehab Moustafa heads the center of excellence at Money Fellows, focused on digital transformation.",
    },
    {
      title: "Mr. Marwan Abouzeid",
      sub: "Principal Solutions Consultant & Customer Value Lead, MEA & APAC Finastra",
      src: "/img/Speackers/3s.jpg",
      bio: "Marwan Abouzeid specializes in customer value across the MEA and APAC regions for Finastra.",
    },
    {
      title: "Mr. Karim El Mourabet",
      sub: "Solution Consulting Director - MEA Finastra",
      src: "/img/Speackers/4s.jpg",
      bio: "Karim El Mourabet leads solution consulting at Finastra for the Middle East and Africa region.",
    },
    {
      title: "Ms. Siobhan Byron",
      sub: "Executive Vice President, Universal Banking Finastra",
      src: "/img/Speackers/5s.jpg",
      bio: "Siobhan Byron is the EVP for Universal Banking at Finastra, focusing on product development.",
    },
    {
      title: "Mr. Narendra Mistry",
      sub: "Chief Product and Technology Officer Universal Banking Finastra",
      src: "/img/Speackers/6s.jpg",
      bio: "Narendra Mistry oversees product and technology strategy for Universal Banking at Finastra.",
    },
    {
      title: "Mr. Ahmed Hamdy Bahey El Din",
      sub: "Head of Information Technology Incolease",
      src: "/img/Speackers/7s.png",
      bio: "Ahmed Hamdy Bahey El Din leads IT initiatives at Incolease, optimizing tech infrastructure.",
    },
    {
      title: "Mr. Emad Shawky Habib Hanna",
      sub: "Chief Data and Analytics Officer Banque Misr",
      src: "/img/Speackers/8s.png",
      bio: "Emad Shawky Habib Hanna drives data and analytics strategies at Banque Misr.",
    },
    {
      title: "Ms. Heba Yehia",
      sub: "Head of Digital Products Arab African International Bank",
      src: "/img/Speackers/9s.jpg",
      bio: "Heba Yehia leads the digital products team at Arab African International Bank.",
    },
    {
      title: "Mr. Hamid Nirouzad",
      sub: "Managing Director - Africa Finastra Universal",
      src: "/img/Speackers/10s.jpg",
      bio: "Hamid Nirouzad oversees Finastra's Universal Banking division in Africa.",
    },
    {
      title: "Mr. Rudy Kawmi",
      sub: "Managing Director - Middle East, Africa & Asia-Pacific Finastra Universal Banking",
      src: "/img/Speackers/11s.jpg",
      bio: "Rudy Kawmi is responsible for Finastra's Universal Banking operations across MEA & APAC.",
    },
    {
      title: "Mr. Matthew Hughes",
      sub: "Global Client Executive Partner, SCB Atos",
      src: "/img/Speackers/icon.jpg",
      bio: "Matthew Hughes is a global executive partner at SCB Atos, focusing on client relations.",
    },
  ];

  return <FocusCards cards={cards} />;
}
