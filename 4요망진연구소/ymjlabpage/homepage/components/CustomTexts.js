"use client";

import { textContainer, textVariant2 } from "../utils/motion";
import { motion } from "framer-motion";

export const TypingText = ({ title, textStyles }) => (
    <motion.p variants={textContainer}>
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === " " ? "\u00A0" : letter}
                {/* this \u00A0 is a unicode character for no break space */}
            </motion.span>
        ))}
    </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
    <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`mt-[8px] font-bold md:text-[64px] 
    text-[40px] text-white ${textStyles}`}
    >
        {title}
    </motion.h2>
);
