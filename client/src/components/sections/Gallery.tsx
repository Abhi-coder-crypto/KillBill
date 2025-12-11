import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState, useRef } from "react";

// Images
import imgPuzzle from "@assets/generated_images/child_solving_a_wooden_puzzle.png";
import imgPainting from "@assets/generated_images/group_of_kids_painting_together.png";
import imgReading from "@assets/generated_images/teacher_reading_a_storybook.png";
import imgPlanting from "@assets/generated_images/kids_planting_a_small_tree.png";

// Videos
import vidBlocks from "@assets/generated_videos/slow_motion_of_a_child_stacking_blocks.mp4";
import vidRunning from "@assets/generated_videos/slow_motion_of_kids_running_in_grass.mp4";
import vidWriting from "@assets/generated_videos/slow_motion_of_teacher_helping_child_write.mp4";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption: string;
  span?: string; // for grid layout
};

const mediaItems: MediaItem[] = [
  { type: "video", src: vidBlocks, caption: "Focus & Fine Motor Skills", span: "md:col-span-2 md:row-span-2" },
  { type: "image", src: imgPuzzle, caption: "Montessori Problem Solving", alt: "Child solving puzzle" },
  { type: "image", src: imgReading, caption: "Imaginative Storytelling", alt: "Teacher reading story" },
  { type: "video", src: vidWriting, caption: "Personalized Attention", span: "md:col-span-1 md:row-span-2" },
  { type: "image", src: imgPainting, caption: "Creative Expression", alt: "Kids painting" },
  { type: "video", src: vidRunning, caption: "Joyful Outdoor Play", span: "md:col-span-2 md:row-span-1" },
  { type: "image", src: imgPlanting, caption: "Nature & Science", alt: "Kids planting tree" },
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
            📸 Learning in Action
          </motion.div>
          <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Capturing the Magic</h2>
          <p className="text-muted-foreground text-lg">
            See how our teaching methods come to life through play, exploration, and hands-on activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-6">
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
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (item.type === "video" && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (item.type === "video" && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative group rounded-[2rem] overflow-hidden shadow-sm border-4 border-white bg-gray-100 ${item.span || ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.type === "image" ? (
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <>
          <video
            ref={videoRef}
            src={item.src}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
          />
          <div className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}>
            <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-lg border border-white/50">
              <Play size={20} className="ml-1 fill-white" />
            </div>
          </div>
        </>
      )}

      {/* Overlay Caption */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <span className="text-white font-heading font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {item.caption}
        </span>
      </div>
    </motion.div>
  );
}
