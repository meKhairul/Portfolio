import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import Section from "./Section";
import profileImg from "../assets/profile.png";

export default function Hero({ id }) {
  return (
    <Section id={id} lightColor="bg-[#cdf1cd]" darkColor="bg-gray">
      <motion.img
        src={profileImg}
        alt="Profile"
        className="w-48 h-48 rounded-full mx-auto mb-6 shadow-lg"
        whileHover={{ scale: 1.05 }}
      />
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold mb-3 text-[#000] dark:text-[#cdf1cd]"
      >
        Md. Khairul Alam
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-lg mb-6 text-[#000] dark:text-[#cdf1cd]"
      >
        Software Engineer & Researcher | Samsung R&D | Machine Learning Enthusiast
      </motion.p>

      <motion.div className="flex justify-center gap-6 text-gray-700 dark:text-[#A7F0DD]">
        <a href="mailto:bsse1118@iit.du.ac.bd" className="flex items-center gap-1 hover:text-green-500 dark:hover:text-[#cdf1cd]"><FaEnvelope /> Email</a>
        <a href="tel:01887491143" className="flex items-center gap-1 hover:text-green-500 dark:hover:text-[#cdf1cd]"><FaPhone /> Phone</a>
        <a href="https://www.linkedin.com/in/Khairul82" target="_blank" className="flex items-center gap-1 hover:text-green-500 dark:hover:text-[#cdf1cd]"><FaLinkedin /> LinkedIn</a>
      </motion.div>
    </Section>
  );
}
