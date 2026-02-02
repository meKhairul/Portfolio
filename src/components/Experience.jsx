import { FaBriefcase } from "react-icons/fa";
import Section from "./Section";
import { motion } from "framer-motion";

export default function Experience({ id }) {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Samsung R&D Institute Bangladesh",
      duration: "Jan 2024 – Present",
      responsibilities: [
        "Developed Data Information Management Service using React, Spring Boot, MongoDB, and MySQL.",
        "Conducted innovation work and achieved 2 patents."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Samsung R&D Institute Bangladesh",
      duration: "Jan 2023 – Jul 2023",
      responsibilities: [
        "Contributed to backend and frontend development of internal tools."
      ]
    }
  ];

  const colors = [
    { light: "#cdf1cd", dark: "#36524b" },
    { light: "#e5fc80", dark: "#51776d" }
  ];

  return (
    <Section id={id} title="Professional Experience" icon={<FaBriefcase />} lightColor="bg-[#e5fc80]" darkColor="bg-[#51776d]">
      <motion.div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl shadow-xl transition-transform duration-300 w-full"
            style={{ backgroundColor: colors[i % colors.length].light, color: "#000" }}
          >
            <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
            <span className="text-gray-600 dark:text-black-300 mb-4 block">{exp.company} | {exp.duration}</span>

            {exp.responsibilities.map((res, idx) => (
              <div key={idx} className="p-4 bg-white dark:bg-white-700 rounded-lg shadow mb-3">
                {res}
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
