// NetworkingGroups.js

import React from "react";
import { Link } from "react-router-dom";
import launch from "./images/launch.png";
import cowrywise from "./images/cowrywise.png";
import kudaxerica from "./images/kudaxerica.png";
import genzhack from "./images/genzHack.png";
const NetworkingGroups = () => {
  // Replace the following data with your actual networking groups data
  const networkingGroups = [
    {
      id: 1,
      name: "GENZ-TECHIES",
      description:
        "Connect with young-minded tech enthusiasts and explore the latest trends in the tech industry. Join us for insightful discussions, networking, and opportunities to collaborate on exciting projects.",
      image: launch,
      eventName: "Tech Enthusiast Meetup",
      date: "2024-04-15",
      time: "14:00",
      contactEmail: "genztechies@example.com",
    },
    {
      id: 2,
      name: "Google Developer Student Club (GDSC)",
      description:
        "Passionate about data science? Join GDSC for our Data Science Workshop where you'll dive into the world of data analytics, machine learning, and more. Network with fellow data enthusiasts!",
      image: cowrywise,
      eventName: "Data Science Workshop",
      date: "2024-04-20",
      time: "15:30",
      contactEmail: "gdsc@example.com",
    },
    {
      id: 3,
      name: "Kuda Tech Club",
      description:
        "Kuda Tech Club invites tech enthusiasts to a symposium on tech innovation. Join us for inspiring talks, hands-on workshops, and a chance to connect with professionals in the field.",
      image: kudaxerica,
      eventName: "Tech Innovation Symposium",
      date: "2024-04-18",
      time: "12:00",
      contactEmail: "kuda.tech@example.com",
    },
    {
      id: 4,
      name: "Trakka Tech Club",
      description:
        "Embark on a coding adventure at the Hackathon 2024 hosted by Trakka Tech Club. Bring your coding skills to the table, collaborate with like-minded individuals, and tackle real-world challenges.",
      image: genzhack,
      eventName: "Hackathon 2024",
      date: "2024-04-25",
      time: "10:00",
      contactEmail: "trakka.tech@example.com",
    },
    {
      id: 5,
      name: "Interswitch Tech Club",
      description:
        "Join us for the Fintech Forum hosted by Interswitch Tech Club. Explore the latest trends in financial technology, engage in panel discussions, and network with professionals in the fintech industry.",
      image: launch,
      eventName: "Fintech Forum",
      date: "2024-04-22",
      time: "13:45",
      contactEmail: "interswitch.tech@example.com",
    },
    {
      id: 6,
      name: "Learnly Tech Club",
      description:
        "Ready to level up your coding skills? Learnly Tech Club presents a Coding Bootcamp where you'll enhance your programming abilities, work on projects, and connect with coding enthusiasts.",
      image: cowrywise,
      eventName: "Coding Bootcamp",
      date: "2024-04-17",
      time: "11:30",
      contactEmail: "learnly.tech@example.com",
    },
    {
      id: 7,
      name: "Fintech Club",
      description:
        "Explore the world of blockchain at the Fintech Club's Blockchain Workshop. Dive into decentralized finance, smart contracts, and blockchain applications. Connect with fellow fintech enthusiasts!",
      image: kudaxerica,
      eventName: "Blockchain Workshop",
      date: "2024-04-19",
      time: "14:15",
      contactEmail: "fintech.club@example.com",
    },
    {
      id: 8,
      name: "Techin (Tech Innovators Network)",
      description:
        "Join the Tech Innovators Network for an Innovation Summit. Engage in discussions on the latest tech innovations, attend keynote sessions, and connect with visionaries shaping the future of technology.",
      image: genzhack,
      eventName: "Innovation Summit",
      date: "2024-04-30",
      time: "09:30",
      contactEmail: "techin@example.com",
    },
    // Add more networking groups as needed
  ];
  
  

  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {networkingGroups.map((group) => (
          <div key={group.id} className="bg-white text-center rounded-xl ">
            <img
              src={group.image}
              alt="Group"
              className="w-full h-fit object-cover"
            />
            <Link
              to={`/networking-groups/${group.id}`}
              className=" text-[#3A4FFE]   inline-block"
            >
              <h1 className="p-1 font-bold">View Event</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkingGroups;
