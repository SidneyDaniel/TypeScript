import Conta from "../types/Conta.js";
import { FormataData } from "../types/formatoData.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";

const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLHtmlElement;
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

if (elementoDataAcesso !== null) {
    const dataAcesso: Date = new Date();
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormataData.DIA_SEMANA_DIA_MES_ANO);
}

renderizarSaldo();
function renderizarSaldo(): void {
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    } 
}

const SaldoComponent = {
    atualizar(){
        renderizarSaldo()
    }
}

export default SaldoComponent;