import React from "react";
import Fotos from "../components/Fotos";
import { useState } from "react";
import Publication from "../components/Publication";

function Proyects() {
    
    const system = ["https://i.ibb.co/Jd1JncT/clientes-Online-ecommerce.png", "https://i.ibb.co/7VdjFBQ/clientes-Store-ecommerce.png", "https://i.ibb.co/kGRKShr/compras-ecommerce.png", "https://i.ibb.co/DPB4ChR/new-Client-ecommerce.png",
        "https://i.ibb.co/C9hBcH4/proveedores-ecommerce.png", "https://i.ibb.co/ctmfKsj/new-Provider-ecommerce.png", "https://i.ibb.co/x6X5Kjn/productos-ecommerce.png", "https://i.ibb.co/TmQjnDq/empleados-ecommerce.png", "https://i.ibb.co/y8MGRym/ventas-ecommerce.png"
    ]
    const petshome = ["https://i.ibb.co/cy8rCbq/home-petshome.png", "https://i.ibb.co/9r4jQ5v/home2-petshome.png", "https://i.ibb.co/c8XL5Fw/home3-petshome.png", "https://i.ibb.co/QcCCLqB/shop-petshome.png", "https://i.ibb.co/84B4fRx/carrito-petshome.png",
        "https://i.ibb.co/TBZssPN/checkout-petshome.png", "https://i.ibb.co/9pHV786/contact-petshome.png"
    ]
    const moviestack = ["https://i.ibb.co/VYTLyx5/home-moviestack.png", "https://i.ibb.co/Pj29Q6H/movies-moviestack.png", "https://i.ibb.co/WBzwpx6/more-Details-moviestack.png", "https://i.ibb.co/NYDDvmr/favorites-moviestack.png"]
    const htmlpage = ["https://i.ibb.co/sKhFHHK/home.png"]
    const homebanking = ["https://i.ibb.co/pWTtkmQ/home-homebanking.png", "https://i.ibb.co/qJNqLb1/login-homebanking.png", "https://i.ibb.co/h2DGrQt/register-homebanking.png", "https://i.ibb.co/4MT9mZ0/new-Account-homebanking.png", "https://i.ibb.co/jggmkwh/cards-homebanking.png",
     "https://i.ibb.co/pKJXhXg/new-Cards-homebanking.png", "https://i.ibb.co/mJdhTJP/new-Loan-homebanking.png", "https://i.ibb.co/FB8PXZR/new-Transaction-homebanking.png"
    ]
    const firstpage = ["https://i.ibb.co/VQfKXxC/home-firstpage.png", "https://i.ibb.co/6sjkzTV/contact-firstpage.png", "https://i.ibb.co/02BHxf3/rules-firstpage.png", "https://i.ibb.co/jw7Zc2x/calendary.png", "https://i.ibb.co/DrbQkYq/calendary2-firstpage.png", 
        "https://i.ibb.co/SN9KK16/register-firstpage.png"
    ]
    const ecommerce = ["https://i.ibb.co/dK61b39/home-ecommerce.png", "https://i.ibb.co/r6nZtHk/home2-ecommerce.png", "https://i.ibb.co/YD1fGB7/login-ecommerce.png", "https://i.ibb.co/MnC9VLm/register-ecommerce.png",
        "https://i.ibb.co/wN02vrG/tienda-ecommerce.png", "https://i.ibb.co/z5D7RtG/carrito-ecommerce.png", "https://i.ibb.co/S7znjRQ/mi-Perfil-ecommerce.png", "https://i.ibb.co/dcYZF9x/about-ecommerce.png"
    ]

    return (
        <main className="pl-7 pr-11 pt-6">
            <h1 className="text-[sans-serif] font-medium text-lg">Proyectos</h1>
            <div className="flex flex-col justify-center gap-5 pt-5">
                <Publication array={ecommerce}
                title='Ecommerce "HLM - Acuarios y Peces"' 
                body1="Digitalización de un negocio de peces y peceras abriendo la posibildad de realizar compras online y envíos." 
                body2="Desarrollo del proyecto utilizando metodologías agile (Scrum). Con organización a través de Trello, comunicación por Discord y control de versiones a través de GitHub"
                body3="Tecnologías: JavaScript, React, Java, Spring Boot, Redux, Axios, PostgreSQL, Tailwind, entre otras."
                font="https://github.com/LUFEC4T0/AcuariosYPecesHLM-Front/tree/dev"
                back="https://github.com/niico995/hlm-la-dorada/tree/dev"/>
                <Publication array={system}
                title="Sistema de Gestión de Ecommerce y Administrativo."
                body1="En paralelo del Ecommerce HLM se desarrolla un panel administrativo con los permisos para la gestión tanto del ecommerce como de procesos que se ralizaban en el local presencial de manera manual."
                body2="Desarrollo del proyecto utilizando metodologías agile (Scrum). Con organización a través de Trello, comunicación por Discord y control de versiones a través de GitHub"
                body3="Tecnologías: JavaScript, React, Java, Spring Boot, Redux, Axios, PostgreSQL, Tailwind, entre otras."
                font="https://github.com/LUFEC4T0/AcuariosYPecesHLM-Front/tree/dev"
                back="https://github.com/niico995/hlm-la-dorada/tree/dev"/>
                <Publication array={homebanking}
                title="Homebanking"
                body1="Sistema de gestión bancario. Registros de usuarios con seguridad Token, administración de cuentas, tarjetas y transacciones."
                body2="Proyecto personal utilizando metodologías agile (Scrum). Avance a través de sprints y objetivos semanales."
                body3="Tecnologías: JavaScript, React, Java, Spring Boot, Redux, Axios, PostgreSQL, Tailwind, entre otras."
                font="https://github.com/OrlandoConci/FrontHomebanking-OrlandoConci/tree/sprint13"
                back="https://github.com/OrlandoConci/homebanking-OrlandoConci/tree/sprint12"/>
                <Publication array={petshome}
                title='Ecommerce "Petshome".'
                body1="Intefaz Ecommerce para tienda de mascotas"
                body2="Desarrollo del proyecto utilizando metodologías agile (Scrum). Comunicación por Discord y control de versiones a través de GitHub"
                body3="Tecnologías: Javascript, HTML, CSS, Tailwind, LocalStorage Navegador, Consumo de apis."
                font="https://github.com/OrlandoConci/PetShop-Grupo2/tree/dev"
                back=""/>
                <Publication array={moviestack}
                title="Moviestack"
                body1="Interfaz página de películas."
                body2="Proyecto personal utilizando metodologías agile (Scrum). Avance a través de sprints y objetivos semanales."
                body3="Tecnologías: Javascript, HTML, CSS, Tailwind, LocalStorage Navegador, Consumo de apis."
                font="https://github.com/OrlandoConci/moviesOrlandoConci/tree/sprint3"
                back=""/>
                <Publication array={firstpage}
                title="Mighty Duks Hockey League"
                body1="Mi primer página web! con cariño la comparto recordando cuánto avancé y el compromiso para llegar hasta acá."
                body2="Proyecto personal utilizando metodologías agile (Scrum). Avance a través de sprints y objetivos semanales."
                body3="Tecnologías: HTML5, CSS3."
                font="https://github.com/OrlandoConci/sprint2"
                back=""/>
                {/* <Publication array={htmlpage}
                title="Hola manola" body1="asdasd" body2="" body3="" font="" back=""/>*/}
            </div> 
        </main>
    )
}

export default Proyects;