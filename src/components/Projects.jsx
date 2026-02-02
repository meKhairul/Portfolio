import { FaProjectDiagram, FaTools } from "react-icons/fa";
import Section from "./Section";
import { motion } from "framer-motion";

export default function Projects({ id }) {
  const projects = [
    {
      name: "Automated Rear Curtain Sync Photo Generation",
      date: "Jul 2025",
      details: "Developed a deep learning pipeline for rear curtain sync photography using motion estimation and semantic segmentation. Utilized SAM and RAFT optical flow to generate realistic motion trails and composite images.",
      tools: ["Python", "React", "Segment Anything Model (SAM)", "RAFT"]
    },
    {
      name: "BiddersDen",
      date: "Jan 2022 – Apr 2022",
      details: "Online auction platform with ML recommendations, chat, and simulated payment gateway.",
      tools: ["Django", "Angular", "MySQL"]
    },
    {
      name: "SmartGPT Web App",
      date: "Sep 2023",
      details: "ChatGPT-style bot integrating speech-to-speech and image-to-text with PDF generation.",
      tools: ["Node.js", "React", "OpenAI API"]
    },
    {
      name: "BanglaScribe",
      date: "Aug 2023 – Nov 2023",
      details: "Bangla OCR and TTS web tool to convert images to Bengali speech.",
      tools: ["Python", "Node.js", "React"]
    },
    {
      name: "Wumpus World Game",
      date: "Jul 2022 – Nov 2022",
      details: "Knowledge-based AI agent for Wumpus World using probabilistic reasoning.",
      tools: ["Angular", "TypeScript"]
    },
  ];

  // Main card colors
  const colors = [
    { light: "#cdf1cd", dark: "#36524b" },
    { light: "#e5fc80", dark: "#51776d" },
    { light: "#68b3ca", dark: "#1e302c" },
    { light: "#c1f7bf", dark: "#253525" },
    { light: "#9CAC54", dark: "#51776d" },
  ];

  return (
    <Section
      id={id}
      title="Projects"
      icon={<FaProjectDiagram />}
      lightColor="bg-[#A7F0DD]"
      darkColor="bg-[#36524b]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-xl shadow-xl transition-transform duration-300 w-full"
            style={{
              backgroundColor: colors[i % colors.length].light,
              color: "#000"
            }}
          >
            {/* Project Name & Date */}
            <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
            <span className="text-gray-600 dark:text-black-300 mb-4 block">{p.date}</span>

            {/* Details Sub-card */}
            <div className="p-4 bg-white dark:bg-light-700 rounded-lg shadow mb-4 text-left">
              <h4 className="font-semibold mb-2">Details</h4>
              <p>{p.details}</p>
            </div>

            {/* Tools Sub-card */}
            <div className="p-4 bg-white dark:bg-light-700 rounded-lg shadow text-left flex flex-wrap gap-2 items-center">
              <FaTools className="mr-2" />
              {p.tools.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-green-200 dark:bg-gray-700 rounded-full text-sm font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
