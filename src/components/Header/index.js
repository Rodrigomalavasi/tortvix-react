import { useState } from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import Menu from '../Menu';

function Header() {

    const [menuAberto, setMenuAberto] = useState(false)

    const abrirMenu = () => {
        setMenuAberto(!menuAberto);
    }

    return (
        <>
            <header className="bg-gradient-to-r from-emerald-400 to-cyan-400 px-12 py-4 text-3xl font-poppins text-slate-200 flex gap-5 items-center">
                <button onClick={() => abrirMenu()}>
                    <CiMenuBurger className={
                        `transform transition-transform duration-300 
                            ${menuAberto ? 'rotate-180' : 'rotate-0'}`
                    }
                    />
                </button>
                <h1>Tortvix</h1>
            </header>
            <Menu aberto={menuAberto} />
        </>
    )
}

export default Header
