import { FaAward } from "react-icons/fa";
import Section from "./Section";
import { motion } from "framer-motion";

const awards = [
  "Spotlight of the Quarter – Samsung R&D",
  "Icon Engineer Certificate – Samsung",
  "Samsung Professional Test Passed",
  "Top 13 – BUET DL Sprint",
  "Top 20 Finalist – BUET Hackathon",
  "2nd Runner-up – Dept Programming Contest",
  "51st – ICPC Preliminary",
  "6th & 9th – Science Olympiad"
];

export default function Awards({ id }) {
  const colors = [
    { light: "#cdf1cd", dark: "#36524b" },
    { light: "#e5fc80", dark: "#51776d" },
    { light: "#A7F0DD", dark: "#1e302c" }
  ];

  return (
    <Section id={id} title="Awards & Achievements" icon={<FaAward />} lightColor="bg-[#cdf1cd]" darkColor="bg-[#36524b]">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {awards.map((award, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-4 rounded-xl shadow-lg transition-transform duration-300 text-center"
            style={{ backgroundColor: colors[i % colors.length].light, color: "#000" }}
          >
            {award}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
