import React from "react";
import { motion } from 'framer-motion';


import { styles } from '../styles';
import { BallCanvas } from "./canvas";
import { SectionWrapper } from '../hoc';
import { technologies } from "../constants";
import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technologiy) => (
          <div className="w-28 h-28" key={technologiy.name}>
            <BallCanvas icon={technologiy.icon} />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")