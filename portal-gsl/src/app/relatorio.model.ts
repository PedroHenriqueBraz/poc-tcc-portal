 export interface RecebimentoCliente {
    nome_cliente: string;
    valor: number;
}

export interface PagamentoFornecedore {
    nome_fornecedor: string;
    valor: number;
}

export interface Relatorio {
    receita_bruta: number;
    receita_liquida: number;
    recebimento_clientes: RecebimentoCliente[];
    pagamento_fornecedores: PagamentoFornecedore[];
    folha_pagamento_colaboradores: number;
}

