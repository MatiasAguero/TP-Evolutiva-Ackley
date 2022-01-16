//
declare enum AppState {
    APP_STATE_FORM_VALUE = 'variablesForm',
    APP_STATE_LOADING_VALUE = 'algorithmLoading',
    APP_STATE_DATA_VALUE = 'dataView'
}

interface AlgorithmParams {
    population: number,
    initializationType: boolean,
    geneCrossing: boolean,
    mutation: number,
    survivalSelection: number,
    fitnessFunction: number,
    cutCondition: number
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

