import { Box, Container, Grid, Input, Slider, Switch, Typography } from "@mui/material";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

interface IFormContentProps {
    
}

export function FormContent(props: IFormContentProps) {

    /*
    *   Contiene la logica para obtener los valores de configuracion del algoritmo
    *   
    *   Se genera un objeto conteniendo todas las configuraciones y valores necesarios para
    *   la ejecucion del algoritmo
    */

    return (
    <Container className="form-container" maxWidth="md">
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Typography id="pop-input-slider-label" gutterBottom>
                    Población
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <PeopleOutlineIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            value={value}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                            step: 10,
                            min: 0,
                            max: 500,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Typography id="init-switch-label" gutterBottom>
                    Inicializacion
                </Typography>
                <Switch {...label} />
            </Grid>
            <Grid item xs={4}>
                <Typography id="cross-switch-label" gutterBottom>
                    Cruce
                </Typography>
                <Switch {...label} />
            </Grid>
            <Grid item xs={8}>
                <Typography id="mutation-input-label" gutterBottom>
                    Mutacion
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <PeopleOutlineIcon />
                    </Grid>
                    <Grid item>
                        <Input
                            value={value}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                            step: 10,
                            min: 0,
                            max: 500,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8}>
                <Typography id="selection-input-label" gutterBottom>
                    Seleccion de supervivientes
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <PeopleOutlineIcon />
                    </Grid>
                    <Grid item>
                        <Input
                            value={value}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                            step: 10,
                            min: 0,
                            max: 500,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8}>
                <Typography id="selection-input-label" gutterBottom>
                    Funcion de fitness
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <PeopleOutlineIcon />
                    </Grid>
                    <Grid item>
                        <Input
                            value={value}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                            step: 10,
                            min: 0,
                            max: 500,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={8}>
                <Typography id="selection-input-label" gutterBottom>
                    Condicion de corte
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <PeopleOutlineIcon />
                    </Grid>
                    <Grid item>
                        <Input
                            value={value}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                            step: 10,
                            min: 0,
                            max: 500,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Container>
    );
}