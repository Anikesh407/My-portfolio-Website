import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framermotion/variants";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen px-4 md:px-8 lg:px-16 py-8 md:py-16">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full md:w-1/2 space-y-6"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
          Hi, I'm <span className="text-orange">Akshay</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          A passionate Frontend Developer creating beautiful and functional web experiences.
        </p>
        <button className="bg-orange text-white px-6 py-3 rounded-lg hover:bg-orange-dark transition-colors">
          Get in Touch
        </button>
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full md:w-1/2 mt-8 md:mt-0"
      >
        <div className="relative w-full h-[450px]">
          <Image
            src="/hero-image.png"
            alt="Akshay's profile"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
            className="object-contain"
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYvLy0vLzYvLy0vLy0vLy0vLy0vLy0vLy0vLy0vLy0vLy0vLz/2wBDAR0dHR4eHRoaHSQtJSEkLzYvLy0vLy0vLy0vLy0vLy0vLy0vLy0vLy0vLy0vLy0vLy0vLy0vLy0vLy0vLy0vLy0vLz/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            loading="eager"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default React.memo(Hero); 