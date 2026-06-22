import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Modern", "Secure", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto text-center rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col items-center hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          HI, I'm ELot
        </motion.h1>
        <div className="flex flex-col items-center">
          <motion.p
            className="text-5xl font-medium text-center text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Full Stack Software Developer
          </motion.p>
          <motion.div
            className="mt-6"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className={"font-black text-white text-8xl"}
            />
          </motion.div>
          <motion.p
            className="max-w-2xl mt-6 text-base font-medium text-center text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Results-driven full stack developer building scalable web and mobile applications with TypeScript, React, Next.js, Node.js, NestJS, and modern cloud deployment workflows.
          </motion.p>
          <motion.p
            className="mt-4 text-base text-center text-neutral-400"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2 }}
          >
            Based in Ikeja, Lagos, Nigeria
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col items-center space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm ELot
        </motion.p>
        <div>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Full Stack
          </motion.p>
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.3 }}
          >
            Software Developer
          </motion.p>
          <motion.div
            className="mt-4"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className={"font-bold text-white text-7xl"}
            />
          </motion.div>
          <motion.p
            className="mt-4 text-base font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Based in Ikeja, Lagos, Nigeria
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
