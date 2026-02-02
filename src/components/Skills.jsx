import { FaPython, FaJava, FaReact, FaAngular, FaDatabase, FaCode } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiMongodb, SiLeetcode, SiCodechef } from "react-icons/si";
import Section from "./Section";
import { motion } from "framer-motion";

export default function Skills({ id }) {
  const skillGroups = [
    {
      title: "Languages & Frameworks",
      items: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript (React, Angular)", icon: <FaReact /> },
        { name: "C/C++", icon: <FaCode /> },
        { name: "Spring Boot", icon: <SiSpringboot /> }
      ]
    },
    {
      title: "Databases & Tools",
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> }
      ]
    },
    {
      title: "Concepts",
      items: [
        { name: "OOP Concepts", icon: null },
        { name: "Data Structures", icon: null },
        { name: "REST API", icon: null }
      ]
    },
    {
      title: "Problem Solving",
      items: [
        { name: "Solved 1000+ problems", icon: null },
        { name: "Participated in 60+ contests", icon: null }
      ]
    },
    {
      title: "Online Judges",
      items: [
        { name: "LeetCode (1561)", icon: <SiLeetcode /> },
        { name: "CodeChef (1529)", icon: <SiCodechef /> }
      ]
    }
  ];

  const colors = [
    { light: "#cdf1cd", dark: "#36524b" },
    { light: "#e5fc80", dark: "#51776d" },
    { light: "#A7F0DD", dark: "#1e302c" }
  ];

  return (
    <Section id={id} title="Programming Skills" icon="💻" lightColor="bg-[#cdf1cd]" darkColor="bg-[#36524b]">
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {skillGroups.map((group, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl shadow-xl transition-transform duration-300 w-full"
            style={{
              backgroundColor: colors[i % colors.length].light,
              color: "#000"
            }}
          >
            <h3 className="text-xl font-bold mb-4">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 px-3 py-1 bg-white dark:bg-white-700 rounded-full text-sm font-medium shadow"
                >
                  {skill.icon && skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
