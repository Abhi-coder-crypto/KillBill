import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import iconPlaygroup from "@assets/generated_images/cute_3d_teddy_bear_icon.png";
import iconNursery from "@assets/generated_images/cute_3d_building_blocks_icon.png";
import iconJrKg from "@assets/generated_images/cute_3d_open_book_icon.png";
import iconSrKg from "@assets/generated_images/cute_3d_graduation_cap_icon.png";

const programs = [
  {
    title: "Playgroup",
    age: "1.5 - 2.5 Years",
    desc: "A fun start to socialization and sensory exploration through play.",
    icon: iconPlaygroup,
    color: "bg-pink-50 border-pink-100",
    text: "text-pink-600",
    delay: 0,
  },
  {
    title: "Nursery",
    age: "2.5 - 3.5 Years",
    desc: "Building foundations in language, numbers, and creative expression.",
    icon: iconNursery,
    color: "bg-blue-50 border-blue-100",
    text: "text-blue-600",
    delay: 0.1,
  },
  {
    title: "Junior KG",
    age: "3.5 - 4.5 Years",
    desc: "Advanced concepts, writing skills, and logical thinking introduction.",
    icon: iconJrKg,
    color: "bg-yellow-50 border-yellow-100",
    text: "text-yellow-600",
    delay: 0.2,
  },
  {
    title: "Senior KG",
    age: "4.5 - 5.5 Years",
    desc: "School readiness program with focus on confidence and independence.",
    icon: iconSrKg,
    color: "bg-green-50 border-green-100",
    text: "text-green-600",
    delay: 0.3,
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-background relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-6 h-6 rounded-full bg-primary animate-bounce delay-700"></div>
        <div className="absolute top-40 right-20 w-8 h-8 rounded-full bg-secondary animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-heading font-bold mb-4">
             <span className="text-[#5D4E6D]">Our </span>
             <span className="text-[#E57373]">L</span><span className="text-[#FFB74D]">e</span><span className="text-[#81C784]">a</span><span className="text-[#64B5F6]">r</span><span className="text-[#BA68C8]">n</span><span className="text-[#4DB6AC]">i</span><span className="text-[#FF8A65]">n</span><span className="text-[#7986CB]">g</span>
             <span className="text-[#5D4E6D]"> </span>
             <span className="text-[#4ECDC4]">P</span><span className="text-[#FFB347]">r</span><span className="text-[#81C784]">o</span><span className="text-[#BA68C8]">g</span><span className="text-[#64B5F6]">r</span><span className="text-[#FF8A65]">a</span><span className="text-[#7986CB]">m</span><span className="text-[#E57373]">s</span>
           </h2>
           <p className="text-muted-foreground text-lg">Designed for every stage of early childhood.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: program.delay }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative p-6 rounded-[2rem] border-2 ${program.color} shadow-sm hover:shadow-lg transition-all duration-300 bg-white group cursor-pointer`}
            >
              <div className="h-40 mb-6 flex items-center justify-center p-4 bg-white rounded-2xl border border-muted/20 shadow-inner overflow-hidden">
                <img src={program.icon} alt={program.title} className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 bg-white border border-current ${program.text}`}>
                {program.age}
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{program.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {program.desc}
              </p>
              
              <div className={`flex items-center font-bold text-sm ${program.text} group-hover:gap-2 transition-all`}>
                Learn More <ArrowRight size={16} className="ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
