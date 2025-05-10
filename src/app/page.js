"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const splashVariants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit:    { opacity: 0, scale: 1.2 }
};

const Home = ({ children }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash ? (
        <motion.div
          className="flex flex-col items-center justify-center min-h-screen bg-white"
          variants={splashVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.img
            src="/images/stylish.png"
            className="w-[280px] h-[80px] object-contain"
            variants={splashVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1.2, delay: 0.2 }}
          />
        </motion.div>
      ) : (
        <div>{children}</div>
      )}
    </AnimatePresence>
  );
};

export default Home;
