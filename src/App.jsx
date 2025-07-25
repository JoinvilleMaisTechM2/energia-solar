import Navbar from './components/Navbar';
import SobreNos from './components/SobreNos';
import PorQueInvestir from './components/PorQueInvestir';
import Produtos from './components/Produtos';
import Orcamento from './components/Orcamento';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <header className="header">
        <h1>Energia Solar 365</h1>
        <p>Economize com o sol. Invista no seu futuro!</p>
      </header>
      
      <Navbar />
      <SobreNos />
      <PorQueInvestir />
      <Produtos />
      <Orcamento />
      <Footer />
    </>
  );
}

export default App;
