import { Box, flexbox } from '@mui/system';
import { ContentContainer } from './Content/contentContainer';
import { Footer } from './Footer/footerComponent';
import { Header } from './Header/headerComponent';

export function MainComponent() {
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
                <ContentContainer />
            </Box>
            <Box component="div">
                <Footer />
            </Box>
        </Box>
      </div>
    );
}