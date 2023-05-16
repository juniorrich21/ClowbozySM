import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, image}) => {
  return (
    <motion.div /* variants={fadeIn("up", "spring", index * 0.5, 0.75)} */>
      <Tilt
        options={{
            max: 45,
            scale: 6,
            speed: 450
        }}
        className="bg-tertiary p-3 rounded-2xl
        sm:w-[350px] w-full"
      > 
        <div className="relative w-full h-[230px]">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

        </div>

        <div className="mt-5">
          <h3 className="text-center font-bold text-[21px]">{name}</h3>
          <p className="text-center p-2 text-[18px]">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div /* variants={textVariant()} */>
        <h2 className={`${styles.sectionHeadText} text-center`}>
        SUA REDE SOCIAL É SEU NOVO ESCRITÓRIO!
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
        PARA QUEM PODE SER ÚTIL UM SOCIAL MEDIA
        </p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-12 justify-center">
        {projects.map((projects, index) => (
          <ProjectCard 
            key={`projects-${index}`} 
            index={index}
            {...projects}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works")