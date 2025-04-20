"use client";
import { Image } from "@unpic/react";
import oneCard from "@/assets/oneCard.avif";
import twoCard from "@/assets/twoCard.avif";
import threeCard from "@/assets/threeCard.avif";
import fourCard from "@/assets/fourCard.avif";
import fiveCard from "@/assets/fiveCard.avif";
import sixCard from "@/assets/sixCard.avif";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper function to replace the cn utility from Next.js
const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function ImageCarouselWithThumbnails() {
  // Sample images - replace with your actual images
  const images = [
    {
      id: 1,
      src: oneCard,
      alt: "Product image 1",
      thumbnail: "Wikis",
    },
    {
      id: 2,
      src: twoCard,
      alt: "Product image 2",
      thumbnail: "Docs",
    },
    {
      id: 3,
      src: threeCard,
      alt: "Product image 3",
      thumbnail: "Projects",
    },
    {
      id: 4,
      src: fourCard,
      alt: "Product image 4",
      thumbnail: "AI",
    },
    {
      id: 5,
      src: fiveCard,
      alt: "Product image 5",
      thumbnail: "Calendar",
    },
    {
      id: 6,
      src: sixCard,
      alt: "Product image 6",
      thumbnail: "Sites",
    },
  ];

  // Array of different SVG icons for each button
  const buttonIcons = [
    // Standard photo icon
    <svg
      width="22"
      height="22"
      fill="inherit"
      className="bookOpen"
      display="block"
      viewBox="0 0 48 48"
    >
      <path
        fill="currentColor"
        d="M21 40.86H6.09c-1.08 0-1.98-.9-1.98-1.98V20.22c0-1.17.6-1.83 1.74-1.83h.9v-3.36H4.89c-2.49 0-4.5 2.01-4.5 4.5v20.25c0 2.49 2.01 4.5 4.5 4.5H21zM43.14 15h-1.86v3.36h.99c1.08 0 1.62.63 1.62 1.62v18.93c0 1.08-.87 1.98-1.98 1.98H27v3.36h16.14c2.49 0 4.5-2.01 4.5-4.5V19.5c0-2.49-2.01-4.5-4.5-4.5"
      ></path>
      <path
        fill="currentColor"
        d="M39.39 4.5c-5.19.69-11.4 2.73-15.36 5.16-3.99-2.43-10.2-4.47-15.36-5.16v30.75c4.26.51 8.67 1.5 13.14 3.24l2.25.99 2.25-.99c4.47-1.74 8.88-2.76 13.14-3.24V4.5zM13.14 31.89V9.69c3.21.57 6.93 2.01 8.64 3.39v21.24c-2.49-1.02-5.97-1.95-8.64-2.43m21.75 0c-2.64.48-6.15 1.41-8.64 2.43V13.08c1.68-1.41 5.43-2.82 8.64-3.39z"
      ></path>
    </svg>,

    // Landscape/scenery icon
    <svg
      width="22"
      height="22"
      fill="inherit"
      className="doc"
      display="block"
      viewBox="0 0 49 49"
    >
      <path
        fill="currentColor"
        d="m40.22 14.512-12.33-9.99c-.72-.6-1.65-.93-2.61-.93H11.36c-2.28 0-4.11 1.83-4.11 4.11v33.78c0 2.28 1.86 4.11 4.11 4.11h26.28c2.28 0 4.11-1.83 4.11-4.11v-23.76c0-1.23-.57-2.43-1.53-3.21m-13.11-6.81 10.38 9.06c.42.36.18 1.05-.39 1.05h-8.88c-.6 0-1.11-.48-1.11-1.11zm8.85 33.75H13.01c-.69 0-1.26-.57-1.26-1.29v-31.2c0-.69.57-1.26 1.26-1.26h10.35v10.14c0 2.07 1.68 3.75 3.75 3.75h10.11v18.6c0 .69-.57 1.26-1.26 1.26"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.824"
        d="M17.75 27.232h13.5m-13.5 7.17h13.5"
      ></path>
    </svg>,

    // 360-degree view icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      className="NotionIconSvgWrapper_icon__In1uC"
      viewBox="0 0 64 64"
    >
      <path
        fill="currentColor"
        d="M36 32c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4m20 0c0 13.25-10.75 24-24 24S8 45.25 8 32 18.75 8 32 8s24 10.75 24 24m-6 0c0-9.94-8.06-18-18-18s-18 8.06-18 18 8.06 18 18 18 18-8.06 18-18m-4 0c0 7.73-6.27 14-14 14s-14-6.27-14-14 6.27-14 14-14 14 6.27 14 14m-6 0c0-4.42-3.58-8-8-8s-8 3.58-8 8 3.58 8 8 8 8-3.58 8-8"
      ></path>
    </svg>,

    // Detail/zoom icon
    <svg
      width="22"
      height="22"
      fill="inherit"
      className="assistantFace"
      display="block"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        d="M13.91 8.861a.75.75 0 1 1-1.48-.24.75.75 0 0 1 1.48.24ZM7.321 7.793a.75.75 0 1 1-1.48-.24.75.75 0 0 1 1.48.24Z"
      ></path>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.233 5.656a3.493 3.493 0 0 0-6.012-.031L4.99 16.027l5.412.877M9.47 3.935a3.494 3.494 0 0 0-4.969-.317"
      ></path>
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      className="NotionIconSvgWrapper_icon__In1uC"
      viewBox="0 0 64 64"
    >
      <path
        fill="currentColor"
        d="M48 12V6h-6v6H22V6h-6v6H8v40h48V12zm2 35H14V28h36z"
      ></path>
    </svg>,
    // Gallery icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 64 64"
    >
      <path
        fill="currentColor"
        d="M32 8C18.75 8 8 18.75 8 32s10.75 24 24 24 24-10.75 24-24S45.25 8 32 8m14.96 14h-4.98c-.47-2.21-1.11-4.27-1.91-6.07 2.78 1.4 5.16 3.49 6.88 6.07ZM36.1 22h-8.21c1.9-8.86 6.31-8.86 8.21 0M14.46 36c-.29-1.29-.46-2.62-.46-4s.17-2.71.46-4h6.7c-.1 1.32-.16 2.66-.16 4s.05 2.68.16 4zm2.57 6h4.98c.47 2.21 1.11 4.27 1.91 6.07-2.78-1.4-5.16-3.49-6.88-6.07Zm4.98-20h-4.98c1.72-2.57 4.1-4.66 6.88-6.07-.8 1.8-1.43 3.86-1.91 6.07Zm5.88 20h8.21c-1.9 8.86-6.31 8.86-8.21 0m8.99-6h-9.76c-.08-1.24-.12-2.57-.12-4s.04-2.76.12-4h9.76c.08 1.24.12 2.57.12 4s-.04 2.76-.12 4m3.2 12.07c.8-1.8 1.43-3.86 1.91-6.07h4.98c-1.72 2.57-4.1 4.66-6.88 6.07ZM42.84 36c.1-1.32.16-2.66.16-4s-.05-2.68-.16-4h6.7c.29 1.29.46 2.62.46 4s-.17 2.71-.46 4z"
      ></path>
    </svg>,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const autoplayIntervalRef = useRef(null);
  const autoplayDuration = 3000; // 1 second between transitions

  // Function to go to a specific image
  const goToImage = (index, userInitiated = false) => {
    if (index === currentImageIndex || isAnimating) return;

    setIsAnimating(true);
    setCurrentImageIndex(index);

    // If user clicked a thumbnail, disable autoplay
    if (userInitiated) {
      setAutoplayEnabled(false);
    }
  };

  // Set up autoplay
  useEffect(() => {
    if (autoplayEnabled) {
      autoplayIntervalRef.current = setInterval(() => {
        // Use a function to get the latest state value
        setCurrentImageIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % images.length;
          // Only set isAnimating here, not in a separate function
          setIsAnimating(true);
          return nextIndex;
        });
      }, autoplayDuration);
    }

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
        autoplayIntervalRef.current = null;
      }
    };
  }, [autoplayEnabled, images.length]); // Only depend on autoplayEnabled and images.length, not currentImageIndex

  // Reset animation state after transition completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match this with the animation duration

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <div className="flex flex-col max-w-[1198px] mx-auto px-5 w-full -mt-14 md:mt-0">
      <div className="relative h-auto w-full overflow-hidden bg-white shadow-md rounded-lg">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-[37vw] w-full min-h-[200px] max-h-fit"
          >
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="size-full object-cover block"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex justify-center">
        <div className="overflow-x-auto pb-2 max-w-full">
          <div className="flex gap-2 flex-wrap justify-center">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToImage(index, true)} // Pass true to indicate user initiated
                disabled={isAnimating}
                className={classNames(
                  "flex items-center gap-3 px-3 py-1 rounded-md transition-all duration-300",
                  index === currentImageIndex
                    ? "bg-[#0000000d] text-black"
                    : " hover:bg-[#0000001a] text-gray-800"
                )}
                aria-label={`View ${image.alt}`}
              >
                {/* Different SVG icon for each button */}
                {buttonIcons[index % buttonIcons.length]}

                {/* Text - using the image number */}
                <span>{image.thumbnail}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
