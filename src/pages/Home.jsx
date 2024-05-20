import React from "react";

function Home() {

    return (
        <div>  
            <div className="h-72">
                <img src="././public/portada-difuminada.jpeg" alt="Portada de programación con contacto" className="rounded-t-lg"/>
                <img src="././public/foto-perfil.jpeg" alt="foto de perfil orlando marcelo conci" className="rounded-full size-36 relative top-[-95px] right-[-20px] border-4 border-white " />
            </div>
            <div className="flex flex-col gap-2 px-6">
                <h1 className="font-bold font-[sans-serif] text-2xl">Orlando Marcelo Conci</h1>
                <p className="font-[Arial]">🚀 ​Desarrollador Web Full Stack </p>
                <p className="font-[Arial] text-[#767676] text-sm">Argentina</p>
                <p className="text-[#126bc4] font-semibold">+500 contactos</p>
                <div className="border rounded-2xl bg-[#dde7f1] p-3 mr-7">
                    <p className="text-sm font-medium">En busca de empleo</p>
                    <p>Cargos de Desarrollador web, Desarrollador full stack, Desarrollador de front-end y Desarrollador de back-end</p>
                </div>
            </div>
        </div>
    )
}

export default Home;