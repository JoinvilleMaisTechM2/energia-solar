import './Produtos.css';
import placaSolar from '../assets/placa-solar.jpg';
import estacaoSolar from '../assets/estacao-solar.jpg';
import kitSolar from '../assets/kit-solar.jpg';


function Produtos() {
    return (
        <section id="produtos" className="section-produtos">
            <h2>Nossos Produtos</h2>

            <div className="container-produtos">
                <div className="produto-card">
                    <img 
                        src={placaSolar}
                        alt="Placa de energia solar" 
                        className="produto-imagem"
                    />
                    <h3 className="produto-titulo">Placa Solar - DAH 620W</h3>
                    <p>Alta eficiência, tecnologia bifacial e durabilidade para residências e empresas.</p>
                </div>

                <div className="produto-card">
                    <img 
                        src={estacaoSolar} 
                        alt="Estação energia solar" 
                        className="produto-imagem"
                    />
                    <h3 className="produto-titulo"> Estação de Energia Solar - WHN921Pro</h3>
                    <p>Solução completa para geração e armazenamento de energia solar, ideal para ambientes off-grid.</p>
                </div>

                <div className="produto-card">
                    <img 
                        src={kitSolar}
                        alt="Kit energia solar" 
                        className="produto-imagem"
                    />
                    <h3 className="produto-titulo">Kit Solar Residencial 4kWp</h3>
                    <p>Inclui placas, inversor e suporte. Perfeito para reduzir até 90% da conta de luz.</p>
                </div>

            </div>
        </section>
    );
}

export default Produtos