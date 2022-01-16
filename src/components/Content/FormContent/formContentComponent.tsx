import { Box, Container, Grid, Input, Slider, Switch, Typography } from "@mui/material";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

interface IFormContentProps {
    dispatch: React.Dispatch<Action>;
    algorithmParams: AlgorithmParams;
}

const POPULATION_SLIDER_ID = "populationSlider";
const POPULATION_INPUT_ID = "populationInput";
const INITIALIZATION_SWITCH_ID = "initializationSwitch";
const CROSS_SWITCH_ID = "crossSwitch";
const MUTATION_INPUT_ID = "mutationInput";
const SURVIVAL_SEL_INPUT_ID = "survivalSelectionInput";
const FITNESS_FUNC_INPUT_ID = "fitnessFunctionInput";
const CUT_COND_INPUT_ID = "cutConditionInput";

export function FormContent(props: IFormContentProps) {

    /*
    *   Contiene la logica para obtener los valores de configuracion del algoritmo
    *   
    *   Se genera un objeto conteniendo todas las configuraciones y valores necesarios para
    *   la ejecucion del algoritmo
    */

    const handleSliderChange = (event: Event, value: number | number[]) => {

    }

    const handleInputChange = (event: any) => {

    }

    const handleSwitchChange = () => {

    }

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
                            value={props.algorithmParams.population}
                            id={POPULATION_SLIDER_ID}
                            name={POPULATION_SLIDER_ID}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </Grid>
                    <Grid item>
                        <Input
                            value={props.algorithmParams.population}
                            id={POPULATION_INPUT_ID}
                            name={POPULATION_INPUT_ID}
                            size="small"
                            onChange={handleInputChange}
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
                <Switch 
                    id={INITIALIZATION_SWITCH_ID}
                    name={INITIALIZATION_SWITCH_ID}
                    checked={props.algorithmParams.initializationType} 
                    onChange={handleSwitchChange}
                />
            </Grid>
            <Grid item xs={4}>
                <Typography id="cross-switch-label" gutterBottom>
                    Cruce
                </Typography>
                <Switch
                    id={CROSS_SWITCH_ID}
                    name={CROSS_SWITCH_ID}
                    checked={props.algorithmParams.initializationType} 
                    onChange={handleSwitchChange}
                />
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
                            id={MUTATION_INPUT_ID}
                            name={MUTATION_INPUT_ID}
                            value={props.algorithmParams.mutation}
                            onChange={handleInputChange}
                            inputProps={{
                                type: 'number'
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
                            value={props.algorithmParams.survivalSelection}
                            id={SURVIVAL_SEL_INPUT_ID}
                            name={SURVIVAL_SEL_INPUT_ID}
                            onChange={handleInputChange}
                            inputProps={{
                                type: 'number'
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
                            value={props.algorithmParams.fitnessFunction}
                            id={FITNESS_FUNC_INPUT_ID}
                            name={FITNESS_FUNC_INPUT_ID}
                            onChange={handleInputChange}
                            inputProps={{
                                type: 'number',
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
                            value={props.algorithmParams.cutCondition}
                            id={CUT_COND_INPUT_ID}
                            name={CUT_COND_INPUT_ID}
                            onChange={handleInputChange}
                            inputProps={{
                            type: 'number'
                            }}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </Container>
    );
}