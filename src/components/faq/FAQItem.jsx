import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import plus from "../../assets/svgs/plus.svg";

export default function FAQItem({ item }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={` overflow-hidden flex flex-col gap-4 py-5 border-b border-[#D434FE]
       ${isActive ? `h-auto py-3 ` : `justify-center`}
      `}
      key={item.id}
    >
      <div
        className="flex justify-between font-montserrat"
        onClick={() => setIsActive(!isActive)}
      >
        <h3 className="text-sm ">{item.question}</h3>
        <motion.img
          animate={{ rotate: isActive ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          src={plus}
          alt="plus"
          className='w-4'
        />
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, height: 0 }}
            className={` text-gray-400`}
          >
            {item.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
