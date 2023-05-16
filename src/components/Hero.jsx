import { motion } from 'framer-motion';

import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 
      top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#efbd32]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <p className={`${styles.heroSubText} mt-5 text-white-100`}>
            TRANSFORME SUA PRESENÇA DIGITAL
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Use suas redes sociais para
          <span className="text-[#efbd32]">
            &nbsp;decolar seu negócio !
          </span>
          </h1>
          <p className={`${styles.heroSubText} mt-5 text-white-100`}>
            <strong className="text-[#efbd32]">Nossa agência</strong> ajuda a aumentar a conscientização <strong className="text-[#efbd32]">da sua marca, gerar leads qualificados e as conversões.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero