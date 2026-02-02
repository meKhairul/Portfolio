import { FaFlask } from "react-icons/fa";
import Section from "./Section";
import { motion } from "framer-motion";

export default function Research({ id }) {
  const research = [
    {
      title: "Accepted Patents",
      items: [
        {
          name: "[Smartphone] An Efficient Method for Motion Freeze Photography",
          desc: "Predicts motion from buffer frames and adjusts exposure to freeze moment.",
          link: "https://drive.google.com/file/d/1FbmAbKyfrL90pmLX1qD3UHuWuVByKGVM/view?usp=drive_link"
        },
        {
          name: "[Smartphone] A Method to Reduce Light Flickering While Videography",
          desc: "Adaptive shutter synchronization method to mitigate flicker.",
          link: "https://drive.google.com/file/d/1HgRNmOGsYpFcLL-NXCyba_SVge_iyjv-/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Disclosure of Invention (DOI)",
      items: [
        { name: "A Method to Better Keyboard Typing in XR Devices", desc: "Improves typing responsiveness and spatial accuracy in XR interfaces." },
        { name: "A Method of Improving Typing Accuracy", desc: "AI-assisted predictive typing correction in virtual input systems." }
      ]
    }
  ];

  const colors = [
    { light: "#cdf1cd", dark: "#36524b" },
    { light: "#e5fc80", dark: "#51776d" },
    { light: "#A7F0DD", dark: "#1e302c" }
  ];

  return (
    <Section id={id} title="Research & Innovation" icon={<FaFlask />} lightColor="bg-[#A7F0DD]" darkColor="bg-[#36524b]">
      <motion.div className="grid grid-cols-1 md:grid-cols-1 gap-6 w-full" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        {research.map((r, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl shadow-xl transition-transform duration-300 w-full"
            style={{
              backgroundColor: colors[i % colors.length].light,
              color: "#000"
            }}
          >
            <h3 className="text-2xl font-bold mb-4">{r.title}</h3>
            {r.items.map((item, idx) => (
              <div key={idx} className="p-4 bg-white dark:text-gray-300 dark:bg-gray-700 rounded-lg shadow mb-3">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                {item.link && (
                  <a href={item.link} target="_blank" className="text-blue-500 hover:underline">
                    View Document
                  </a>
                )}
              </div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
