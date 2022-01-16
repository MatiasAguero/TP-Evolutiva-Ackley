import { useReducer } from "react";
import { Box } from '@mui/system';
import { ContentContainer } from './Content/contentContainer';
import { Footer } from './Footer/footerComponent';
import { Header } from './Header/headerComponent';
import { mainReducer } from './mainComponentReducer';

const initialState = {
    appState: AppState.APP_STATE_FORM_VALUE,
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
                    <ContentContainer dispatch={dispatch} appState={state.appState} />
                </Box>
                <Box component="div">
                    <Footer />
                </Box>
            </Box>
        </div>
    );
}
