export default function ButtonContent({pokemon}) {
    return (
        <>
            <span className="group-hover:w-full absolute left-0 h-full w-5 border-y border-l border-violet-400 transition-all duration-500"></span>
                <p className="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all duration-200">Capturar</p>
            <span className="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">¡Capturalo!</span>
                <span className="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-violet-400 transition-all duration-500"></span>
        </>
    )
}