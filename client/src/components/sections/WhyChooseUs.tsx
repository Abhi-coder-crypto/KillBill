import { motion } from "framer-motion";
import { CheckCircle2, Play } from "lucide-react";
import vidRunning from "@assets/generated_videos/slow_motion_of_kids_running_in_grass.mp4";

export default function WhyChooseUs() {
  const features = [
    "Holistic Curriculum designed by experts",
    "Low Teacher-Student Ratio (1:10)",
    "Regular Health & Dental Checkups",
    "Safe & Hygienic Campus",
    "Transport Facility Available",
    "Regular Parent-Teacher Meetings",
    "Festival Celebrations & Events",
    "Field Trips & Outdoor Learning"
  ];

  return (
    <section className="py-20 bg-secondary/10 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-4xl font-heading font-bold text-foreground mb-6">
               Why Parents Trust <br/>
               <span className="text-secondary">Kilbil PreSchool</span>
             </h2>
             <p className="text-muted-foreground text-lg mb-8">
               We go beyond traditional teaching to ensure your child gets the best start in life. Our environment is designed to be an extension of your home.
             </p>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {features.map((feature, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.05 }}
                   className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-secondary/20"
                 >
                   <CheckCircle2 className="text-secondary shrink-0" size={20} />
                   <span className="font-medium text-foreground text-sm">{feature}</span>
                 </motion.div>
               ))}
             </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-accent rounded-[3rem] rotate-3 opacity-20 transform translate-x-4 translate-y-4"></div>
            <div className="bg-white p-4 rounded-[3rem] shadow-xl border-4 border-white relative overflow-hidden">
               <div className="aspect-video bg-black rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-inner">
                 <video 
                   src={vidRunning} 
                   className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" 
                   autoPlay 
                   muted 
                   loop 
                   playsInline
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                 <div className="absolute bottom-6 left-6 z-10 text-white">
                   <div className="flex items-center gap-2 mb-1">
                     <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                     <span className="text-xs font-bold uppercase tracking-widest opacity-80">Live Moments</span>
                   </div>
                   <span className="font-heading font-bold text-2xl">Pure Joy & Freedom</span>
                 </div>
               </div>
               
               <div className="mt-6 flex justify-between items-center px-4 pb-4">
                 <div className="text-center">
                   <div className="text-3xl font-heading font-bold text-primary">500+</div>
                   <div className="text-xs text-muted-foreground uppercase tracking-wider">Students</div>
                 </div>
                 <div className="w-px h-10 bg-muted"></div>
                 <div className="text-center">
                   <div className="text-3xl font-heading font-bold text-accent">50+</div>
                   <div className="text-xs text-muted-foreground uppercase tracking-wider">Teachers</div>
                 </div>
                 <div className="w-px h-10 bg-muted"></div>
                 <div className="text-center">
                   <div className="text-3xl font-heading font-bold text-secondary">4.9</div>
                   <div className="text-xs text-muted-foreground uppercase tracking-wider">Rating</div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
