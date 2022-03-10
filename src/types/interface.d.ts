//
declare const SURVIVAL_SELECTION_TOURNAMENT = 'tournament';
declare const SURVIVAL_SELECTION_ELITISM = 'elitism';

export enum AppState {
    APP_STATE_FORM_VALUE = 'variablesForm',
    APP_STATE_LOADING_VALUE = 'algorithmLoading',
    APP_STATE_DATA_VALUE = 'dataView'
}

interface AlgorithmParams {
    runQuantity: number,
    dimensions: number,   
    population: number,
    survivalSelection: string,
    survivalSelectionBias: number,
    iterations: number
}

interface ResultData {
    // Veremos que onda
}

interface MainState {
    appState: AppState,
    algorithmParams: AlgorithmParams,
    resultData: ResultData
}

interface Action {
    payload: any,
    type: string
}

