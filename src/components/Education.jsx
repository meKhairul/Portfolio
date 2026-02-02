import { FaGraduationCap } from "react-icons/fa";
import Section from "./Section";
import { motion } from "framer-motion";

export default function Education({ id }) {
  const educations = [
    {
      degree: "B.Sc. in Software Engineering",
      university: "University of Dhaka",
      duration: "Jul 2019 – Feb 2024",
      cgpa: "3.69 / 4.00"
    }
  ];

  const colors = [
    { light: "#cdf1cd", dark: "#36524b" },
    { light: "#e5fc80", dark: "#51776d" }
  ];

  return (
    <Section id={id} title="Education" icon={<FaGraduationCap />} lightColor="bg-[#cdf1cd]" darkColor="bg-[#36524b]">
      <motion.div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {educations.map((edu, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="p-6 rounded-xl shadow-xl transition-transform duration-300 w-full"
            style={{
              backgroundColor: colors[i % colors.length].light,
              color: "#000"
            }}
          >
            <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
            <span className="text-gray-600 dark:text-black-300 mb-4 block">{edu.university} | {edu.duration}</span>

            <div className="p-4 bg-white dark:bg-light-700 rounded-lg shadow">
              <h4 className="font-semibold mb-2">CGPA</h4>
              <p>{edu.cgpa}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
