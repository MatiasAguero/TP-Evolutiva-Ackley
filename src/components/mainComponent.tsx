import { useReducer } from "react";
import { Box } from '@mui/system';
import { ContentContainer } from './Content/contentContainer';
import { Footer } from './Footer/footerComponent';
import { Header } from './Header/headerComponent';
import { mainReducer } from './mainComponentReducer';

const initialState = {
    appState: AppState.APP_STATE_FORM_VALUE,
    algorithmParams: {
        population: 100,
        initializationType: true,
        geneCrossing: true,
        mutation: 0.5,
        survivalSelection: 50,
        fitnessFunction: 0.8,
        cutCondition: 100000
    },
    resultData: {}
}

export function MainComponent() {

    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <div id="MainComponent" className="screen root">
            <Box
                className=""
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    bgcolor: 'background.paper',
                    overflow: 'hidden',
                    height: '100%',
                    width: '100%',
                    borderRadius: '12px',
                    boxShadow: 1,
                }}
            >
                <Box component="div" >
                    <Header />
                </Box>
                <Box component="div">
                    <ContentContainer 
                        dispatch={dispatch} 
                        appState={state.appState} 
                        algorithmParams={state.algorithmParams} 
                        resultData={state.resultData}
                    />
                </Box>
                <Box component="div">
                    <Footer />
                </Box>
            </Box>
        </div>
    );
}
