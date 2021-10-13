interface IRegion {
    id: number;
    nome: string;
    sigla: string;
}

export interface IState {
    id: number;
    nome: string;
    sigla: string;
    regiao: IRegion;
}

export interface ICity {
    id: number,
    nome: string,
    UF: IStateRequestResult,
}
