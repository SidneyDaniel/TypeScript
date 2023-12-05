import { GrupoTransacao } from "../types/GrupoTransacao.js";
import Conta from "../types/Conta.js";
import { FormataData } from "../types/formatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

renderizarExtrato();
function renderizarExtrato(): void {
    const gruposTransacoes: GrupoTransacao[] = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes: string = "";

    for (const grupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem: string = "";
        for (const transacao of grupoTransacao.transacoes) {
            
            htmlTransacaoItem += `
                <div class="transacao-item">
                        <div class="transacao-info">
                            <span class="tipo">${transacao.tipoTransacao}</span>
                            <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                        </div>
                        <time class="data">${formatarData(transacao.data, FormataData.DIA_MES)}</time>
                </div>
            `
        }

        htmlRegistroTransacoes += `
        <div class="transacoes-group">
            <strong class="mes-group">${grupoTransacao.label}</strong>
            ${htmlTransacaoItem}
         </div>
        `
    }

    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>não há transações registradas.</div>";
    }

    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}

const ExtratoComponent = {
    atualilzar(): void {
        renderizarExtrato()
    }
}

export default ExtratoComponent;