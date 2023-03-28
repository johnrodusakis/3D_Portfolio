import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({ index, name, description, tags, image, link_images, source_code_links}) => {
  const links = link_images;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className='absolute inset-0 flex justify-end m-2 card-img_hover'>
            <div>
            
              {link_images.map((link_image, index) => (
                <div style={{ marginBottom: '10px' }}>
                  <div
                    onClick={() => window.open(source_code_links[index], "blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={link_image}
                      alt={name}
                      className='w-1/2 h-1/2 object-contain' />
                  </div>
                </div>

              ))}
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] text-center'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Project.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className = "mt-3 text-secondary text-justify text-[17px] max-w-7xl leading-[30px]"
        >
          I'm excited to tell you about my experience with Unity game engine and the various game 
          projects I've worked on. Unity has been an incredible tool for me to bring my ideas to life, 
          allowing me to create dynamic, immersive environments and gameplay mechanics that I never thought 
          possible. I've experimented with a variety of genres, from platformers to puzzle games, and each 
          project has challenged me to think creatively and push the boundaries of what I can do with Unity. 
          Whether it's scripting complex AI behavior, designing intricate levels, or fine-tuning the game 
          mechanics, I've enjoyed every aspect of the development process. Overall, I'm proud of the games 
          I've created using Unity and I can't wait to see what else I can do with this amazing tool.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")