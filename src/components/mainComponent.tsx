import { useReducer } from "react";
import { ContentContainer } from './Content/contentContainer';
import { Footer } from './Footer/footerComponent';
import { Header } from './Header/headerComponent';
import { mainReducer } from './mainComponentReducer';
import { FormAckley } from "./FormAckley";
import { MainState, AppState, SURVIVAL_SELECTION_TOURNAMENT } from "../types/interface.d";
import { Container } from "./styles";

const initialState: MainState = {
    appState: AppState.APP_STATE_FORM_VALUE,
    algorithmParams: {
        dimensions: 1,
        runQuantity: 1,
        population: 100,
        survivalSelection: SURVIVAL_SELECTION_TOURNAMENT,
        survivalSelectionBias: 10,
        iterations: 10000
    },
    resultData: {}
}

export function MainComponent() {

    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <div id="MainComponent" className="screen root">
            <Container className="content-container">
                <Header appState={state.appState}/>
                <ContentContainer dispatch={dispatch} algorithmParams={state.algorithmParams} appState={state.appState} resultData={state.resultData}/>
                <Footer dispatch={dispatch} algorithmParams={state.algorithmParams} appState={state.appState}/>
            </Container>
        </div>
    );
}
