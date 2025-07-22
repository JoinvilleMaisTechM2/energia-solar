import './Navbar.css'

function Navbar() {
    return (
        <nav className="navbar">
            <ul className='navbar-list'>
                <li className='sobre-nos'>
                    <a href="#">Sobre Nós</a>
                </li>
                <li className='porque-investir'>
                    <a href="#">Por que investir?</a>
                </li>
                <li className='produtos'>
                    <a href="#">Produtos</a>
                </li>
                <li className='orcamento'>
                    <a href="#">Orçamento</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;