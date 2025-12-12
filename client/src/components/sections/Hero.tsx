import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/minimal_pastel_kids_learning.png";
import kidWithSlate from "@assets/generated_images/kid_holding_blank_slate.png";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-blue-50">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Floating Elements (CSS Animation) */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">
        🎈
      </div>
      <div className="absolute bottom-20 right-10 text-6xl opacity-20 animate-float-delayed">
        ☁️
      </div>
      <div className="absolute top-40 right-20 text-4xl opacity-20 animate-wiggle">
        🌟
      </div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-secondary font-bold text-sm mb-6 border border-secondary/20 shadow-sm transform -rotate-2">
            ✨ Admissions Open for 2025-26
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-tight">
            <span className="text-[#5D4E6D]">Where </span>
            <span className="text-[#E57373]">L</span>
            <span className="text-[#FFB74D]">e</span>
            <span className="text-[#81C784]">a</span>
            <span className="text-[#64B5F6]">r</span>
            <span className="text-[#BA68C8]">n</span>
            <span className="text-[#4DB6AC]">i</span>
            <span className="text-[#FF8A65]">n</span>
            <span className="text-[#7986CB]">g</span>
            <span className="text-[#5D4E6D]"> Begins with </span>
            <span className="text-[#FF6B6B] inline-block animate-bounce">
              Joy!
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0 font-medium leading-relaxed">
            Welcome to Kilbil PreSchool, 
            a safe and magical place where your
            little ones grow,explore, 
            and create memories that last a lifetime.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full h-[500px]">
            {/* Decorative blob shapes behind image */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/30 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>

            {/* Main Hero Image */}
            <img
              src={heroBg}
              alt="Happy Kids"
              className="w-full h-full object-cover rounded-[3rem] shadow-2xl border-8 border-white transform hover:rotate-2 transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>

      {/* Kid with Slate popping from bottom - text on the white slate */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.4 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="relative">
          {/* Kid Image */}
          <img
            src={kidWithSlate}
            alt="Happy kid holding slate"
            className="w-48 h-48 object-contain drop-shadow-xl"
          />
          {/* Text on the white slate the child is holding */}
          <div className="absolute top-[15%] left-1/2 transform -translate-x-1/2 text-center w-[55%]">
            <span className="block text-2xl font-bold font-heading text-[#2D2D2D] drop-shadow-sm">
              15+
            </span>
            <span className="text-[10px] font-bold text-[#5D4E6D] leading-tight block">
              Years
            </span>
            <span className="text-[10px] font-bold text-[#5D4E6D] leading-tight block">
              Experience
            </span>
          </div>
        </div>
      </motion.div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 60L48 68.3C96 76.7 192 93.3 288 90C384 86.7 480 63.3 576 56.7C672 50 768 60 864 71.7C960 83.3 1056 96.7 1152 96.7C1248 96.7 1344 83.3 1392 76.7L1440 70V120.5H1392C1344 120.5 1248 120.5 1152 120.5C1056 120.5 960 120.5 864 120.5C768 120.5 672 120.5 576 120.5C480 120.5 384 120.5 288 120.5C192 120.5 96 120.5 48 120.5H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
