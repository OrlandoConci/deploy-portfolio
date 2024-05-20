import React from "react";
import Fotos from "./Fotos";
import { useState } from "react";

function Publication(props) {

    const [contador, setContador] = useState((Math.random()*100).toFixed(0))

    function handleInput(e){
        setContador(+contador + 1)
    }

    return(
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
                    <div className="flex">
                        <h1 className="font-medium font-xl">{props.title}</h1>
                        <a href={props.font} target="_blank" className="pl-5 hover:scale-125 flex  items-center gap-1"><span className="text-center self-center font-medium">Front</span>
                            <svg className="size-5" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" class="octicon octicon-mark-github">
                                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                            </svg>
                        </a>
                        {props.back != "" ? <a href={props.back} target="_blank" className="pl-5 hover:scale-125 flex items-center gap-1"><span className="text-center self-center font-medium">Back</span>
                            <svg className="size-5" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" data-view-component="true" class="octicon octicon-mark-github">
                                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                            </svg>
                        </a> : null}
                    </div>
                    <p>{props.body1}</p>
                    {props.body2 != "" ? <p>{props.body2}</p> : null}
                    {props.body3 != "" ? <p>{props.body3}</p> : null}

                </section>
                <Fotos array={props.array}></Fotos>
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
    )
}

export default Publication;