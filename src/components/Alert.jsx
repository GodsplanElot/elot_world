import {motion, AnimatePresence} from "motion/react";
const Alert = ({ type, text}) => {
    const alertVariants = {
        hidden: {opacity: 0, y: 50, scale: 0.8},
        visible: {opacity: 1, y: 0, scale: 1},
        exit: {opacity: 0, y: -50, scale: 0.6},
    };
  const isDanger = type === "danger";
  return (
    <AnimatePresence>
        <motion.div className="fixed z-50 flex items-center justify-center bottom-5 right-5" initial="hidden" animate="visible" exit="exit" variants={alertVariants} transition={{duration: 0.3, ease: "easeInOut"}}>
        <div className={`p-5 ${isDanger ? "bg-red-500": "bg-royal"} items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex rounded-md gap-3`} >
            <p className={`flex rounded-full px-3 py-1 ${isDanger ? "bg-red-600" : "bg-lavender"}`}>{isDanger ? "Failed" : "Success"}</p>
            <p className="mr-2 text-left" > {text}</p>
        </div>
        </motion.div>
    </AnimatePresence>
  );
};

export default Alert
