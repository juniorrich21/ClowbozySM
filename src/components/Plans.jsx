import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const plans = [
  {
    name: 'PLANO SILVER',
    features: [
      'Estruturação cromática',
      'Criação de identidade visual',
      'Entrega de 06 cards semanais',
    ],
  },
  {
    name: 'PLANO GOLD',
    features: [
      'Estruturação cromática',
      'Criação de identidade visual',
      'Entrega de 06 cards semanais',
      'Dicas para copy e gatilhos mentais',
      'Dicas de produção de reels para engajamento',
    ],
  },
  {
    name: 'PLANO DIAMOND',
    features: [
      'Estruturação cromática',
      'Criação de identidade visual',
      'Administração completa da sua página (Postagem, produção, copy, gatilhos)',
      'Treinamento para produção de storys com interação.',
      'Encontro quinzenal para tirar dúvidas e estabelecer estratégias',
    ],
  },
  {
    name: 'PLANO ULTIMATE',
    features: [
      'Todo plano diamond',
      'Criação de site',
      'Fotógrafo (Dicas e Fotos)',
      'Tráfego Pago e Orgânico',
      'Mentoria',
    ],
  },
];

const Plans = () => {
  return (
    <>
      <motion.div>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Planos <strong className='text-[#efbd32]'>Social Media</strong>
        </h2>
        <p className={`${styles.sectionSubText} text-center text-white`}>
          A <strong className='text-[#efbd32]'>ClowBozy</strong> Social Media vai te ajudar a <strong className='text-[#efbd32]'>decolar sua marca !</strong>
        </p>
      </motion.div>
      
      <PlanList plans={plans} />
    </>

  );
};

function Plan({ name, price, features }) {
  return (
    <div className="bg-tertiary py-5 px-12 w-[400px] h-[640px] 
    flex justify-between items-center flex-col hover:shadow-card">
      <h2 className="text-center text-[26px] font-bold p-5">
        {name}
      </h2>
      <ul className="text-center font-semibold p-5 
       text-white-100">
        {features.map((feature, index) => (
          <li key={index}><br/>{feature}</li>
        ))}
      </ul>
      <button className="flex mt-10 mb-10 justify-end py-2 px-4 bg-[#efbd32] 
      text-white font-semibold rounded-lg shadow-md hover:bg-[#e0a500] 
      focus:outline-none focus:ring-2 focus:ring-blue-400 
      focus:ring-opacity-75 hover:border hover:shadow-card">
        Quero contratar
      </button>
    </div>
  );
}

function PlanList({ plans }) {
  return (
    <div className="mt-20 flex flex-wrap gap-12 justify-center mb-20">
      {plans.map((plan, index) => (
        <Plan key={index} {...plan} />
      ))}
    </div>
  );
}

export default SectionWrapper(Plans, 'plans');
