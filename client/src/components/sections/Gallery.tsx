import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

import vidBlocks from "@assets/generated_videos/slow_motion_of_a_child_stacking_blocks.mp4";
import vidRunning from "@assets/generated_videos/slow_motion_of_kids_running_in_grass.mp4";
import vidWriting from "@assets/generated_videos/slow_motion_of_teacher_helping_child_write.mp4";

type MediaItem = {
  src: string;
  caption: string;
  span?: string;
};

const mediaItems: MediaItem[] = [
  { src: vidBlocks, caption: "Focus & Fine Motor Skills", span: "md:col-span-2 md:row-span-2" },
  { src: vidWriting, caption: "Personalized Attention", span: "md:col-span-1 md:row-span-2" },
  { src: vidRunning, caption: "Joyful Outdoor Play", span: "md:col-span-2 md:row-span-1" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4"
          >
            Learning in Action
          </motion.div>
          <h2 className="text-4xl font-heading font-bold mb-4">
            <span className="text-[#4ECDC4]">C</span><span className="text-[#FFB347]">a</span><span className="text-[#81C784]">p</span><span className="text-[#BA68C8]">t</span><span className="text-[#64B5F6]">u</span><span className="text-[#FF8A65]">r</span><span className="text-[#7986CB]">i</span><span className="text-[#E57373]">n</span><span className="text-[#4DB6AC]">g</span>
            <span className="text-[#5D4E6D]"> the </span>
            <span className="text-[#E57373]">M</span><span className="text-[#FFB74D]">a</span><span className="text-[#81C784]">g</span><span className="text-[#64B5F6]">i</span><span className="text-[#BA68C8]">c</span>
          </h2>
          <p className="text-[#6B5B7A] text-lg">
            See how our teaching methods come to life through play, exploration, and hands-on activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
          {mediaItems.map((item, idx) => (
            <GalleryCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item, index }: { item: MediaItem; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative group rounded-[2rem] overflow-hidden shadow-sm border-4 border-white bg-gray-100 ${item.span || ""}`}
    >
      <video
        ref={videoRef}
        src={item.src}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        autoPlay
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <span className="text-white font-heading font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {item.caption}
        </span>
      </div>
    </motion.div>
  );
}
