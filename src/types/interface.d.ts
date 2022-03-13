//
export const SURVIVAL_SELECTION_TOURNAMENT = 'tournament';
export const SURVIVAL_SELECTION_ELITISM = 'elitism';

export enum AppState {
    APP_STATE_FORM_VALUE = 'variablesForm',
    APP_STATE_LOADING_VALUE = 'algorithmLoading',
    APP_STATE_DATA_VALUE = 'dataView'
}

export interface AlgorithmParams {
    runQuantity: number,
    dimensions: number,   
    population: number,
    survivalSelection: string,
    survivalSelectionBias: number,
    iterations: number
}

export interface ResultData {
    // Veremos que onda
}

export interface MainState {
    appState: AppState,
    algorithmParams: AlgorithmParams,
    resultData: ResultData
}

export interface Action {
    payload: any,
    type: string
}

