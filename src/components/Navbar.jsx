import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className='navbar-list'>
                <li className='sobre-nos'>
                    <a href="#sobre-nos">Sobre Nós</a>
                </li>
                <li className='porque-investir'>
                    <a href="#por-que-investir">Por que investir?</a>
                </li>
                <li className='produtos'>
                    <a href="#produtos">Produtos</a>
                </li>
                <li className='orcamento'>
                    <a href="#orcamento">Orçamento</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
