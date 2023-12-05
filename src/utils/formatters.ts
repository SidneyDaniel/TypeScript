import { FormataData } from "../types/formatoData.js";

export function formatarMoeda(valor: number): string {
    return valor.toLocaleString('pt-br', { currency: "BRL", style: "currency"});
}

export function formatarData(data: Date, formato: FormataData = FormataData.PADRAO ): string {
    if (formato === FormataData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString('pt-br', {
            weekday: "long", 
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
        
    } else if(formato === FormataData.DIA_MES) {
        return data.toLocaleDateString("pt-br", {day:"2-digit", month: "2-digit"})
    }

    return data.toLocaleTimeString("pt-br");
}
