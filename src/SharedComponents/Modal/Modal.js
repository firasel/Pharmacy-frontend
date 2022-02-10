import { motion } from "framer-motion";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const gifYouUp = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

const Modal = ({ children, handleClose, type, style }) => {
  return (
    <div
      onClick={handleClose}
      className="absolute top-0 left-0 h-full w-full bg-black/70 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {type === "dropIn" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className={`rounded-xl flex flex-col justify-center bg-white w-full max-w-lg md:-mt-80 mx-6 ${style}`}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default Modal;
