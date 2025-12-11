import { motion } from "framer-motion";
import img1 from "@assets/generated_images/happy_kids_playing_in_a_colorful_classroom.png";
import img2 from "@assets/generated_images/preschool_art_and_craft_activity.png";
import img3 from "@assets/generated_images/outdoor_playground_with_pastel_equipment.png";

const images = [img1, img2, img3, img1, img2, img3];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Little Moments, Big Smiles</h2>
          <p className="text-muted-foreground">A glimpse into the daily joy at Kilbil PreSchool.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid"
            >
              <div className="relative group rounded-2xl overflow-hidden border-8 border-white shadow-lg">
                <img 
                  src={src} 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white px-4 py-2 rounded-full font-heading font-bold text-primary shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
