import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          QUEM É A CLOWBOZY
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
          E COMO IRÁ TE AJUDAR ?
        </p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white-100 text-[21px] max-w-7xl 
        leading-[30px] text-center"
      >
        A Clowbozy é uma empresa facilitadora e amiga, uma empresa que vai simplificar e desmitificar questões sobre as rede sociais e fazer com que prospere por outras vertentes.
        <br/><br/>
        A Clowbozy é formada por uma equipe de designer, roteiristas e programadores, junto aos sócios-proprietários João Cedraz e Lucas Abraão que tem como objetivo a grandeza e plenitude no que se envolve.
        <br/><br/>
        <strong className="text-[#efbd32]">De fato a Clowbozy veio para mudar o cenário de forma definitiva e única.</strong>
        <br/><br/>
        A Clowbozy vai te proporcionar algo que é raro para um empreendedor,blogueiro, empresa… TEMPO, iremos te dar mais tempo no seu dia, iremos facilitar questões sobre redes sociais e capitalizar em cima delas, converter clientes usando suas redes sociais através do marketing digital e proporcionando um aumento de engajamento e proporção para sua área/empresa. Nosso objetivo é um só: crescer, transformar em algo grandioso
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")