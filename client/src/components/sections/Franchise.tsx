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

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 relative z-10">
            Join the Kilbil Franchise
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
            Start your own successful preschool with our proven model, curriculum support, and brand recognition. Calculate your potential ROI now!
          </p>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-heading text-xl px-10 py-8 rounded-full shadow-pastel-pink animate-pulse hover:animate-none hover:scale-105 transition-all relative z-10"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Interested? Contact Us
          </Button>

          <p className="mt-6 text-sm text-muted-foreground font-medium relative z-10">
            Join 50+ successful partners across Maharashtra
          </p>
        </motion.div>
      </div>
    </section>
  );
}
