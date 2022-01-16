//
declare enum AppState {
    APP_STATE_FORM_VALUE = 'variablesForm',
    APP_STATE_LOADING_VALUE = 'algorithmLoading',
    APP_STATE_DATA_VALUE = 'dataView'
}

interface MainState {
    appState: AppState
}

interface Action {
    payload: any,
    type: string
}

