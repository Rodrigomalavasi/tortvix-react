function Menu({ aberto }) {

    const itensMenu = ["Denunciar", "Devedores", "Regulamento"]

    return (
        <div className={`
            bg-slate-100 shadow-xl w-48 rounded-br-lg duration-300 
            ${aberto ? 'opacity-1 translate-x-0' : 'opacity-0 -translate-x-80'}
        `}>
            <ul className="flex flex-col gap-3 p-3">
                {itensMenu.map(item => (
                    <li key={item}>
                        <a href="#">{item}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Menu
