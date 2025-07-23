import './SobreNos.css'
import photoSolar from '../assets/photo-solar.jpg'

function SobreNos() {
    return (
        <section id="sobre-nos" className="section-sobre-nos">
            <h2>Sobre Nós</h2>
            <div className="container-sobre-nos">
                <img
                    src={photoSolar}
                    alt="Painel solar em telhado"
                    className="sobre-nos-imagem"
                />

                <p className="sobre-nos-texto">
                    Somos a <strong>Energia Solar 365</strong>, referência em projetos sustentáveis.
                    Instalamos e gerenciamos sistemas residenciais, comerciais e rurais com alta eficiência e confiabilidade.
                </p>

                <div className="dados-mercado">
                    <h3>Dados do Mercado Brasileiro (até 2025)</h3>
                    <ul>
                        <li><strong>Economia na conta de luz:</strong> até 90%</li>
                        <li><strong>Payback médio:</strong> 4 a 6 anos</li>
                        <li><strong>Redução de CO₂:</strong> ~1,5 tCO₂ por sistema/ano</li>
                        <li><strong>Sistemas conectados:</strong> mais de 400.000 (fonte: ANEEL, abril/2025)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SobreNos
