import React from "react";
import { useState } from "react";

function AboutUs() {

    const [contador, setContador] = useState((Math.random()*100).toFixed(0))

    function handleInput(e){
        setContador(+contador + 1)
    }
    
    return(
        <main className="pl-7 pr-11 pt-6 rounded-lg">
            <h1 className="text-[sans-serif] font-medium text-lg pb-5">Sobre Mí</h1>
            <div className="border border-[#dfdeda] rounded-xl bg-white w-[775px] ">
                <div className="flex px-5 py-7 gap-5">
                    <img src="https://i.ibb.co/5jqgpzK/foto-perfil.jpg" alt="Foto de perfil" className="rounded-full size-12" />
                    <div>
                        <h1 className="text-sm font-medium">Orlando Marcelo Conci</h1>
                        <p className="text-xs font-[Arial] text-[#767676]">🚀 ​Desarrollador Web Full Stack</p>
                        <div className="flex text-xs gap-2 font-[Arial] text-[#767676]">
                            <h3>3 semanas</h3>
                            <span>•</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                                <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="object-cover w-full">
                    <section className="px-11 pb-5">
                        <h1 className="font-medium font-xl">Bienvenidos a mi Portfolio!</h1>
                        <p>Felizmente les traigo la colección de mis proyectos más importantes, que me ayudaron a crecer y forjarme en el mundo del desarrollo Web.
                        Desde chico recuerdo explorar curiosamente en el mundo de la computación y la informática, llevándome al camino que transito hoy orgullosamente.
                        Esto recién empieza y tengo mucho que aprender, estoy entusiasmado de seguir creciendo como profesional y como persona.
                        </p>
                    </section>
                </div>
                <div className="flex flex-col h-[75px] justify-between">
                    <div className="flex ml-5">
                        <img className="size-5" class="reactions-icon social-detail-social-counts__count-icon social-detail-social-counts__count-icon--0 reactions-icon__consumption--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light" src="https://static.licdn.com/aero-v1/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="like" data-test-reactions-icon-type="LIKE" data-test-reactions-icon-theme="light"/>
                        <span className="text-sm ml-1">{contador}</span>
                    </div>
                    <div className="border-[#dfdeda] border-1 border-t border-1 mx-5"></div>
                    <button onClick={handleInput} className="flex items-center justify-center h-11 w-40 gap-2 ml-11 hover:scale-125">
                        <img class="reactions-icon artdeco-button__icon reactions-react-button__icon reactions-icon__creation--small data-test-reactions-icon-type-LIKE data-test-reactions-icon-theme-light" src="https://static.licdn.com/aero-v1/sc/h/5zhd32fqi5pxwzsz78iui643e" alt="like" data-test-reactions-icon-type="LIKE" data-test-reactions-icon-theme="light"/>
                        <p className="text-[#378fe9] font-medium">Recomendar</p>
                    </button>
                </div>
            </div>
        </main>
    )
    
}

export default AboutUs;