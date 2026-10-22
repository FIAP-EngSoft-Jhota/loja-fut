import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="flex justify-between items-center py-6 px-[5%] bg-black">
            <h1 className="logo p-2 text-white text-[2rem] font-bold cursor-pointer transition-all">
                LOJA<span className="text-red-600 p-4">FutStore</span></h1>
            <nav>
                <ul className="flex list-none items-center gap-8">
                    <li>
                        <Link to="/" className="text-white text-lg no-underline 
              hover:text-red-600 hover:uppercase transition-all">Home</Link>
                    </li>
                    <li>
                        <Link to="/historia" className="text-white text-lg no-underline 
              hover:text-red-600 hover:uppercase transition-all">História</Link>
                    </li>
                    <li>
                        <Link to="/contato" className="text-white text-lg no-underline 
              hover:text-red-600 hover:uppercase transition-all">Contato</Link>
                    </li>
                    <li>
                        <Link to="/login" className="text-white text-lg no-underline 
              hover:text-red-600 hover:uppercase transition-all">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header