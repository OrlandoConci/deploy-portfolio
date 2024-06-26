import React from "react";

function Skills() {
    const classImg = "size-20"
    const classP = "font-[sans-serif] font-medium text-sm text-center"
    const classDiv = "hover:scale-125"

    return(
        <main className="pl-7 pr-11 pt-6">
            <h1 className="text-[sans-serif] font-medium text-lg">Habilidades</h1>
            <div className="flex justify-center gap-5 pt-5">
                <div className={classDiv}>
                    <img src="https://i.ibb.co/2qt1xLQ/java.png" alt="Logo Java" className={classImg}/>
                    <p className={classP}>Java</p>
                </div>
                <div className={classDiv}>
                    <img src="https://i.ibb.co/vBphwVG/spring.png" alt="Logo spring" className={classImg}/>
                    <p className={classP}>Spring</p>
                </div>
                <div className={classDiv}>
                    <img src="https://i.ibb.co/MRNgPtd/js2.png" alt="Logo JavaScript" className={classImg}/>
                    <p className={classP}>JavaScript</p>
                </div>
                <div className={classDiv}>
                    <img src="https://i.ibb.co/5r07SZP/react.png" alt="Logo react" className={classImg}/>
                    <p className={classP}>React</p>
                </div>
                <div className={classDiv}>
                   <img src="https://i.ibb.co/2yY1Vzc/redux.png" alt="Logo redux" className={classImg}/>
                   <p className={classP}>Redux</p>
                </div>
                <div className={classDiv}>
                    <img src="https://i.ibb.co/NjvKSGh/tailwind.png" alt="Logo tailwind" className={classImg}/>
                    <p className={classP}>Tailwind</p>
                </div>
            </div>
            <div className="flex justify-center gap-5 pt-11">
                <div className={classDiv}>
                    <img src="https://i.ibb.co/1bPCHW5/postman.png" alt="Logo postman" className={classImg}/>
                    <p className={classP}>Postman</p>
                </div>
                <div className={classDiv}>
                    <img src="https://i.ibb.co/yhNdCss/postgresql.png" alt="Logo postgresql" className={classImg}/>
                    <p className={classP}>PostgreSQL</p>
                </div>
                <div className={classDiv}>
                    <img src="https://i.ibb.co/3hSc64M/git2.png" alt="Logo git" className={classImg}/>
                    <p className={classP}>Git</p>
                </div>
                <div className={classDiv}>
                    <img src="https://i.ibb.co/Px48NDb/github.png" alt="Logo github" className={classImg}/>
                    <p className={classP}>GitHub</p>
                </div>
                <div className={classDiv}>
                    <img src="https://i.ibb.co/GTkYTLK/html5.png" alt="Logo html5" className={classImg}/>
                    <p className={classP}>Html5</p>
                </div>
                <div className={classDiv}>
                    <img src="https://i.ibb.co/QX5Y8dh/css3.png" alt="Logo css3" className={classImg}/>
                    <p className={classP}>Css3</p>
                </div>
            </div>
        </main>
    )
}

export default Skills;