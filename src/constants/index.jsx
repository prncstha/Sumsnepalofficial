import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import Features from "../components/FlyoutMenu";
import CogknitDrop from "../components/CogknitDrop";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: <Features/>, href: "#" },
  { label: "Industries", href: "#" },
  { label: "IT Services", href: "#" },
  { label: "About", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Cultivating Tech Innovation:",
    description:
      "SUMS develop cutting-edge software to enhance educational experiences and foster creativity among students with immersive learnings.",
  },
  {
    icon: <Fingerprint />,
    text: "Empowering Future Entrepreneurs:",
    description:
      "SUMS provide guidance, resources, workshops, trainings and networks for aspiring entrepreneurs, helping them navigate startup challenges and bring innovations to market.",
  },
  {
    icon: <ShieldHalf />,
    text: "Supporting Tech Entrepreneurship Ecosystems:",
    description:
      "SUMS create platforms for networking and collaboration, connecting entrepreneurs, investors, and experts.",
  },
  {
    icon: <BatteryCharging />,
    text: "Facilitating Tech Skill Development:",
    description:
      "SUMS offer training and learning opportunities to equip learners towards service and product development for  aspiring innovative minds ",
  },
  // {
  //   icon: <PlugZap />,
  //   text: "Driving Tech-Led Innovation in Education:",
  //   description:
  //     "SUMS leverage technology to address educational challenges and empower educators and learners in the digital age.",
  // },
  // {
  //   icon: <GlobeLock />,
  //   text: "Fostering a Culture of Tech Entrepreneurship:",
  //   description:
  //     "SUMS inspire entrepreneurship through success stories, mentorship, and recognition, encouraging innovation and resilience.",
  // },


  
];

export const checklistItems = [
  {
    title: "Pre-Incubation: Ideas to MVP",
    description:
      "Transform ideas into viable product/services through workshops, mentorship, and access to resources.",
  },

  {
    title: "Test Bed: MVP to Customer Case",
    description:
      " Bridge theory and practice with a state-of-the-art environment for experimenting, prototyping, and testing ideas using cutting-edge technology.",
  },
  
  {
    title: "Events/Hackathons: Validation to Investment",
    description:
      "Spark creativity and collaboration through themed hackathons and tech summits, connecting innovators and stake-holder in a single platform with proven tests and validation .",
  },
  {
    title: "Incubation: MVP to Market",
    description:
      "Provide an ecosystem, workshops, trainings, resources supporting  to introduce in the market after TESTBED.  ",
  },
  
];

export const cogknitDesp =
[
{
  icon:<Cloud-Upload />
}
];
  
   
  


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
