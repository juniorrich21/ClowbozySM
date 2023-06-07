import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
    return (
        <footer className="bg-primary py-4">
         <div className="flex justify-center space-x-6 ">
            <a href="" target="_blank">
                    <img src="./logo.png" alt="Email" className="w-21 h-16"/>
                </a>
                </div>
            <div className="flex justify-center space-x-6 py-4 ">
                <a href="https://api.whatsapp.com/send/?phone=5571991080676&text&type=phone_number&app_absent=0" target="_blank">
                <img src="/src/assets/whatsapp.png" alt="WhatsApp" className="w-8 h-8 cursor-pointer hover:bg-[#1d1d1d] rounded-lg"/>
                </a>
                <a href="https://www.instagram.com/clowbozy/" target="_blank">
                    <img src="/src/assets/instagram.png" alt="Instagram" className="w-8 h-8 cursor-pointer hover:bg-[#1d1d1d] rounded-lg"/>
                </a>
                <a href="https://www.facebook.com/people/Clowbozy/100087894585028/" target="_blank">
                    <img src="/src/assets/facebook.png" alt="Facebook" className="w-8 h-8 cursor-pointer hover:bg-[#1d1d1d] rounded-lg"/>
                </a>
                <a href="https://web.telegram.org/k/#@ClowBozy" target="_blank">
                    <img src="/src/assets/telegram.png" alt="Telegram" className="w-8 h-8 cursor-pointer hover:bg-[#1d1d1d] rounded-lg"/>
                </a>
                <a href="mailto:clowbozy@gmail.com" target="_blank">
                    <img src="/src/assets/mail.png" alt="Email" className="w-8 h-8 cursor-pointer hover:bg-[#1d1d1d] rounded-lg"/>
                </a>
            </div>
            <div className="container mx-auto text-white text-center py-4">
                <div>
                    Desenvolvida pela | © 2023 <strong>Agência</strong> <strong>DJM</strong>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
