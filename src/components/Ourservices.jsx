import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, services_description }) => (
  <Tilt className='xs:w-[350px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
        <p className="text-center text-[17px]">
          {services_description}
        </p>
      </div>
    </motion.div>
  </Tilt>
);

const Ourservices = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Nossos Serviços
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
          Podemos te ajudar ?
        </p>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center mb-20">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>

      <motion.p
        variants={("", "", 0.1, 1)}
        className="mt-4 text-white-100 text-[21px] max-w-7xl
        leading-[30px] text-center"
      >
        Nós oferecemos uma ampla gama de serviços de social media, desde 
        estratégias personalizadas até gerenciamento completo de redes 
        sociais. Nossa equipe de especialistas em marketing digital irá 
        trabalhar em estreita colaboração com você para entender <strong className="text-[#efbd32]">seus 
        objetivos</strong> e criar uma <strong className="text-[#efbd32]">estratégia eficaz para alcançá-los.</strong>
      </motion.p>
    </>
  )
}

export default SectionWrapper(Ourservices, "ourservices")