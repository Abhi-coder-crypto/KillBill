import { motion } from "framer-motion";
import { Star } from "lucide-react";
import safeEnvImg from "@assets/generated_images/safe_environment_illustration.png";
import playWayImg from "@assets/generated_images/play_way_learning_illustration.png";
import teacherImg from "@assets/generated_images/caring_teacher_illustration.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground font-heading font-bold text-sm mb-4"
          >
            <Star size={16} className="fill-accent-foreground" /> About Kilbil
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-heading font-bold mb-4"
          >
            <span className="text-[#5D4E6D]">Nurturing </span>
            <span className="text-[#FF8A65]">C</span><span className="text-[#FFB74D]">u</span><span className="text-[#81C784]">r</span><span className="text-[#64B5F6]">i</span><span className="text-[#BA68C8]">o</span><span className="text-[#4DB6AC]">s</span><span className="text-[#E57373]">i</span><span className="text-[#7986CB]">t</span><span className="text-[#FF6B6B]">y</span>
            <span className="text-[#5D4E6D]"> & </span>
            <span className="text-[#4ECDC4]">C</span><span className="text-[#FFB347]">r</span><span className="text-[#81C784]">e</span><span className="text-[#BA68C8]">a</span><span className="text-[#64B5F6]">t</span><span className="text-[#FF8A65]">i</span><span className="text-[#7986CB]">v</span><span className="text-[#4DB6AC]">i</span><span className="text-[#E57373]">t</span><span className="text-[#FFB74D]">y</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            We believe every child is unique. Our approach combines structured learning with open-ended play to foster holistic development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              image: safeEnvImg,
              title: "Safe Environment",
              desc: "CCTV monitored premises with child-safe furniture and materials.",
              color: "bg-primary",
            },
            {
              image: playWayImg,
              title: "Play-Way Method",
              desc: "Learning concepts through fun activities, music, and storytelling.",
              color: "bg-secondary",
            },
            {
              image: teacherImg,
              title: "Experienced Staff",
              desc: "Certified and caring teachers who treat every child with love.",
              color: "bg-accent",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2rem] border border-muted shadow-soft text-center group relative overflow-hidden"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-md group-hover:scale-110 transition-transform duration-300">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
              
              <div className={`absolute -top-10 -right-10 w-32 h-32 ${item.color} opacity-10 rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
