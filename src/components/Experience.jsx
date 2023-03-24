import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences, educations } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={ experience.date }
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img 
            src={experience.icon}
            alt={experience.company_name}
            className="w-[75%] h-[75%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-bold" style={{ margin: 0 }}>{experience.company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What i have done so far</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>
        
        <motion.p
          variants={fadeIn("up", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] text-justify max-w-7xl leading-[30px]"
        >
          As a recent Computer Science graduate, I don't have a lot of work experience under my belt. 
          However, I am extremely passionate about game development and programming. Even though I may 
          not have a lot of professional experience, my degree has equipped me with the necessary skills 
          and knowledge to excel in the field. I am enthusiastic about game development and programming 
          and I am willing to put in the effort required to succeed in this industry. I believe my passion 
          and dedication, combined with my educational background, will help me make a meaningful contribution 
          to the world of game development and programming.
        </motion.p>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className='mt-40'>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
        
        <motion.p
          variants={fadeIn("up", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] text-justify max-w-7xl leading-[30px]"
        >
          I have recently graduated with a degree in computer science, which was a significant accomplishment. 
          However, I recognize that in the fast-paced and constantly evolving field of technology, self-education 
          is just as important, if not more so, than a formal education. As someone who is deeply passionate about 
          technology, I have made a commitment to continuously teach myself new skills and stay up-to-date with the 
          latest developments in the industry. I believe that this approach has given me a deeper understanding and 
          greater proficiency in specific areas, and I am excited to continue to learn and grow as a self-taught 
          individual in the tech industry.
        </motion.p>

        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {educations.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")