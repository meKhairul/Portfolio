import { FaRunning } from "react-icons/fa";
import Section from "./Section";
import { motion } from "framer-motion";

const activities = [
  "Badminton Tournament Finalist – DU",
  "FIFA Tournament Finalist – DU",
  "Table Tennis Finalist (Doubles) – DU",
  "Volunteer – Independence Cup Programming Contest"
];

export default function Activities({ id }) {
  const colors = [
    { light: "#cdf1cd", dark: "#36524b" },
    { light: "#e5fc80", dark: "#51776d" },
    { light: "#A7F0DD", dark: "#1e302c" },
    { light: "#c1f7bf", dark: "#253525" }
  ];

  return (
    <Section id={id} title="Extracurricular Activities" icon={<FaRunning />} lightColor="bg-[#A7F0DD]" darkColor="bg-[#36524b]">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {activities.map((act, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-xl shadow-lg transition-transform duration-300 text-center"
            style={{ backgroundColor: colors[i % colors.length].light, color: "#000" }}
          >
            {act}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
