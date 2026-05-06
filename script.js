function mostrarDica(tipo) {
    const painel = document.getElementById('painel-detalhes');
    painel.classList.remove('hidden');
    
    if(tipo === 'kit') {
        painel.innerHTML = `
            <div style="background: #1e293b; padding: 20px; border-radius: 12px; margin-top: 20px; border-left: 5px solid #10b981;">
                <h3><i class="fa-solid fa-box-archive"></i> Protocolo de Kit de Emergência Completo</h3>
                <p>Itens essenciais para subsistência por até 72 horas:</p>
                <ul style="color: #94a3b8; line-height: 1.8;">
                    <li><strong>Alimentação:</strong> Água potável (3L por pessoa), barras de cereal e alimentos enlatados.</li>
                    <li><strong>Saúde/Higiene:</strong> Medicamentos de uso contínuo, álcool em gel, sabonete e curativos.</li>
                    <li><strong>Segurança:</strong> Lanterna com pilhas reservas, rádio AM/FM (para ouvir alertas sem internet) e apito.</li>
                    <li><strong>Documentação:</strong> Cópias de RG/CPF e escrituras em sacos plásticos herméticos (ZipLock).</li>
                </ul>
            </div>
        `;
    }
}

function carregarAreasRisco() {
    const painel = document.getElementById('painel-detalhes');
    painel.classList.remove('hidden');
    painel.innerHTML = `
        <div style="background: #1e293b; padding: 20px; border-radius: 12px; margin-top: 20px; border-left: 5px solid #dc2626;">
            <h3><i class="fa-solid fa-triangle-exclamation"></i> Áreas de Risco em Novo Hamburgo</h3>
            <p>Zonas com histórico de alagamento e monitoramento prioritário:</p>
            <table style="width: 100%; color: #94a3b8; border-collapse: collapse; margin-top: 10px;">
                <tr style="border-bottom: 1px solid #334155;">
                    <td style="padding: 8px;"><strong>Bairro Canudos</strong></td>
                    <td style="padding: 8px;">Proximidade com arroios e valas.</td>
                </tr>
                <tr style="border-bottom: 1px solid #334155;">
                    <td style="padding: 8px;"><strong>Bairro Santo Afonso</strong></td>
                    <td style="padding: 8px;">Áreas baixas próximas à Vila Palmeira.</td>
                </tr>
                <tr style="border-bottom: 1px solid #334155;">
                    <td style="padding: 8px;"><strong>Bairro Lomba Grande</strong></td>
                    <td style="padding: 8px;">Zonas rurais próximas ao leito do Rio.</td>
                </tr>
            </table>
            <p style="font-size: 0.8rem; margin-top: 10px; color: #ef4444;">* Dados baseados no histórico da Defesa Civil Municipal.</p>
        </div>
    `;
}
function atualizarSistema() {
    const log = document.getElementById('log-sistema');
    const nivelRio = document.getElementById('nivel-rio');
    
    // Efeito de carregamento
    log.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Sincronizando com a Defesa Civil...`;
    nivelRio.innerText = "Consultando...";

    setTimeout(() => {
        // Simulação de valor real
        const nivelAleatorio = (Math.random() * (4.5 - 2.0) + 2.0).toFixed(2);
        
        nivelRio.innerText = `${nivelAleatorio} m`;
        log.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #10b981;"></i> Dados sincronizados com sucesso!`;
    }, 2000);
}
document.addEventListener('DOMContentLoaded', () => {
    const dataElement = document.getElementById('data-atual');
    if (dataElement) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        dataElement.innerText = new Date().toLocaleDateString('pt-BR', options);
    }
});
function fecharPainel() {
    const painel = document.getElementById('painel-detalhes');
    painel.classList.add('hidden');
}

// Exemplo de como pode ficar o início da função mostrarDica ou carregarAreasRisco:
// (Adicione o botão no topo do seu innerHTML)
// <button onclick="fecharPainel()" style="float: right; background: none; border: none; color: white; cursor: pointer;">X</button>