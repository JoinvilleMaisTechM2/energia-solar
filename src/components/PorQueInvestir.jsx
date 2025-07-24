import './PorQueInvestir.css'

function PorQueInvestir() {
    return (
        <section id="por-que-investir" className="section-por-que-investir">
            <h2>Por que investir em Energia Solar?</h2>
            <div className="container-beneficios">
                <div className="beneficio-card">
                    <span className="beneficio-icon">💰</span>
                    <p>Economia de até 90% na conta de luz</p>
                </div>
                <div className="beneficio-card">
                    <span className="beneficio-icon">⚡</span>
                    <p>Alta eficiência e confiabilidade</p>
                </div>
                <div className="beneficio-card">
                    <span className="beneficio-icon">🌳</span>
                    <p>Redução de CO2</p>
                </div>
                <div className="beneficio-card">
                    <span className="beneficio-icon">🏡</span>
                    <p>Valorização do imóvel</p>
                </div>
                <div className="beneficio-card">
                    <span className="beneficio-icon">💡</span>
                    <p>Investimento longo prazo</p>
                </div>
                <div className="beneficio-card">
                    <span className="beneficio-icon">🔋</span>
                    <p>Baixa manutenção e longa durabilidade dos sistemas</p>
                </div>
            </div>
        </section>

    );
}

export default PorQueInvestir