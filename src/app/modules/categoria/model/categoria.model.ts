export interface ICategoria {
    id: number;
    descricao: string;
    status?: string;
}

export interface ICadastroAtualizacaoCategoria {
    descricao: string;
}