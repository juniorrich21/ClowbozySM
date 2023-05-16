import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: "1. Qualquer um pode contratar o serviço, ou só quem tem CNPJ ?",
      answer: "PARA TODOS! Todos que desejam alcançar resultado para seu negócio, com as redes sociais! 😉",
      isOpen: false,
    },
    {
      question: "2. Tem suporte ?",
      answer:
        "Sim. Independente do plano ou serviço contratado existe suporte completo.",
      isOpen: false,
    },
    {
      question: "3. Precisa passar senha do instagram ?",
      answer:
        "Sim. Pois dependendo do plano, nós iremos administrar sua página de forma completa.",
      isOpen: false,
    },
    {
      question: "4. Na mentoria os encontros são presenciais ou virtuais ?",
      answer:
        "Ambas as formas, vai depender da localidade do nosso cliente e da disponibilidade do mesmo.",
      isOpen: false,
    },
  ]);

  function toggleFaq(index) {
    setFaqs((prevState) =>
      prevState.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
      )
    );
  }

  return (
    <section className="bg-tertiary rounded-[20px]">
      <div className="container w-full px-6 py-10 mx-auto">
        <h2 className={`${styles.sectionHeadText} flex text-center justify-center`}
        >
          Perguntas Frequentes
        </h2>

        <div class="mt-12 space-y-8">
          {faqs.map((faq, index) => (
            <div key={index}>
              <div class="rounded-lg bg-[#121211]">
                <button class="flex items-center justify-between w-full p-8"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-bold">
                    {faq.question}
                  </h3>
                {faq.isOpen 
                    ? <span class="text-gray-400 bg-gray-200 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                      </svg>
                    </span> 
                  : <span class="text-white bg-[#efbd32] rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </span>}
                </button>
              </div>
  
              {faq.isOpen && <p className="font-semibold p-8 text-sencodary">
                {faq.answer}
                </p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )

};

export default SectionWrapper(Faq, "faq");