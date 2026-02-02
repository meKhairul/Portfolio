import { motion } from "framer-motion";

export default function Section({ id, title, icon, lightColor, darkColor, children }) {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col justify-center items-center ${lightColor} dark:${darkColor} p-10 transition-colors duration-300`}
    >
      <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}>
        <h2 className="text-4xl font-bold mb-6 flex items-center gap-3 text-[#000] dark:text-[#cdf1cd]">
          {icon} {title}
        </h2>
        <div className="text-center">{children}</div>
      </motion.div>
    </section>
  );
}
