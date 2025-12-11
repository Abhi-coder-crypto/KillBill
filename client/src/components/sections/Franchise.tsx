import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Franchise() {
  return (
    <section id="franchise" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border-4 border-white relative overflow-hidden"
        >
          {/* Confetti Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffd700_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 relative z-10">
            <span className="text-[#5D4E6D]">Join the </span>
            <span className="text-[#E57373]">K</span><span className="text-[#FFB74D]">i</span><span className="text-[#81C784]">l</span><span className="text-[#64B5F6]">b</span><span className="text-[#BA68C8]">i</span><span className="text-[#4DB6AC]">l</span>
            <span className="text-[#5D4E6D]"> </span>
            <span className="text-[#4ECDC4]">F</span><span className="text-[#FFB347]">r</span><span className="text-[#81C784]">a</span><span className="text-[#BA68C8]">n</span><span className="text-[#64B5F6]">c</span><span className="text-[#FF8A65]">h</span><span className="text-[#7986CB]">i</span><span className="text-[#E57373]">s</span><span className="text-[#4DB6AC]">e</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
            Start your own successful preschool with our proven model, curriculum support, and brand recognition. Calculate your potential ROI now!
          </p>

          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#FF6B6B] via-[#FFB347] to-[#4ECDC4] hover:from-[#FF5252] hover:via-[#FFA726] hover:to-[#26A69A] text-white font-heading text-xl px-12 py-8 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all relative z-10 border-2 border-white"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-franchise-contact"
          >
            Get Franchise Info Now
          </Button>

          <p className="mt-8 text-sm text-muted-foreground font-medium relative z-10">
            Join 50+ successful partners across Maharashtra
          </p>
        </motion.div>
      </div>
    </section>
  );
}
