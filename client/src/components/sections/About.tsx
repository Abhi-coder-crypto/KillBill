import { motion } from "framer-motion";
import { Star, Heart, Smile } from "lucide-react";

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
            className="text-4xl font-heading font-bold text-foreground mb-4"
          >
            Nurturing Curiosity & Creativity
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
              icon: <Heart size={40} className="text-white" />,
              title: "Safe Environment",
              desc: "CCTV monitored premises with child-safe furniture and materials.",
              color: "bg-primary",
              shadow: "shadow-pastel-pink",
            },
            {
              icon: <Smile size={40} className="text-white" />,
              title: "Play-Way Method",
              desc: "Learning concepts through fun activities, music, and storytelling.",
              color: "bg-secondary",
              shadow: "shadow-pastel-blue",
            },
            {
              icon: <Star size={40} className="text-white" />,
              title: "Experienced Staff",
              desc: "Certified and caring teachers who treat every child with love.",
              color: "bg-accent",
              shadow: "shadow-lg", // Yellow shadow
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
              <div className={`w-20 h-20 mx-auto ${item.color} rounded-full flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
              
              {/* Decorative corner doodle */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 ${item.color} opacity-10 rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
