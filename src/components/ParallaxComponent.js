"use client"; 

import React, { useEffect, useState } from 'react';
import styles from './ParallaxComponent.module.css';
import splitStringUsingRegex from '@/utils/splitStringUsingRegex';
import { motion } from 'framer-motion';
import Image from './image';

const heading = "Hi! I'm James Conte";
const subHeading = "Web Developer";

// Split h3 content into lines
const h3Content = [
  `I am coming off of my first year as a full-time web developer. I’ve reflected on how far I’ve come since I started this journey. Going from my only coding experience being from the class I took in school to a real-world application has been both challenging and rewarding. It’s been an incredible experience growing as a developer.`,
  ``,
  `The 3 biggest lessons I've learned:`,
  ``,
  `1- Right off the bat, I learned the importance of fundamentals:`,
  `The biggest lesson I’ve learned so far is that no matter how experienced or skilled you become in writing HTML, CSS, JavaScript, or any other language, fundamentals will always be your best friend.`,
  ``,
  `2 - Problem Solving:`,
  `"First, solve the problem. Then, write the code." – John Johnson`,
  `There are so many times I thought I had a clear picture in my head of a component or a page that needed to be created or adjusted. However, I quickly realized that coding is 95% learning and 5% writing. Learning to approach challenges methodically and breaking down problems into manageable parts has been crucial to my growth.`,
  ``,
  `3 - Importance of Collaboration:`,
  `Collaboration has been another key takeaway. While working as a developer, I’ve collaborated closely with our content and design team. This experience has taught me that clear communication and teamwork are essential for bringing projects to life, ensuring that the final product aligns with the vision and goals of everyone involved.`,
];

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

function Intro() {
  

  const headingChars = splitStringUsingRegex(heading);
  const subHeadingChars = splitStringUsingRegex(subHeading);



  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <motion.h1
          initial="hidden"
          whileInView="reveal"
          viewport={{ once: true }}
          transition={{ staggerChildren: .05 }}
        >
          {headingChars.map((char, index) => (
            <motion.span key={index} transiton={{ duration: 5 }} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          initial="hidden"
          whileInView="reveal"
          viewport={{ once: true }}
          transition={{ staggerChildren: .05 }}
        >
          {subHeadingChars.map((char, index) => (
            <motion.span key={index} transiton={{ duration: 2.5 }} variants={charVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
        <div className={styles.scrollIndicator}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.imageContainer}></div>
      <div className={styles.otherContainer}>
        
        <h2>My Name is James Conte </h2><br />
        <div className={styles.flex}>
        <motion.h3
          initial="hidden"
          whileInView="reveal"
          viewport={{ once: true }}
          transition={{ staggerChildren: .002 }}
        >
          {h3Content.map((line, lineIndex) => (
            <div key={lineIndex}>
              {splitStringUsingRegex(line).map((char, charIndex) => (
                <motion.span key={charIndex} transiton={{ duration: .2 }} variants={charVariants}>
                  {char}
                </motion.span>
              ))}
              <br /> 
            </div>
          ))}
        </motion.h3>
        {/* <Image /> */}
        </div>
      </div>
    </div>
  );
}

export default Intro;
