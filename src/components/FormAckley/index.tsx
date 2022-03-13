import { Action, AlgorithmParams, SURVIVAL_SELECTION_TOURNAMENT, SURVIVAL_SELECTION_ELITISM } from '../../types/interface.d';
import { ACTION_DIMENSIONS_SLIDER_CHANGE, ACTION_ITERATIONS_CHANGE, ACTION_POPULATION_CHANGE, ACTION_RUNS_SLIDER_CHANGE, ACTION_SURVIVAL_SELECTION_BIAS_CHANGE, ACTION_SURVIVAL_SELECTION_METHOD_CHANGE } from '../mainComponentActions';
import {
  Container,
  Form,
  InputWrapper,
  InputSlider,
  InputString,
  Label,
  MethodLabel,
  Button,
} from './styles'

interface IFormAckleyProps {
  dispatch: React.Dispatch<Action>;
  algorithmParams: AlgorithmParams;
}

export const FormAckley = (props: IFormAckleyProps) => {

  const _onRunSliderChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    props.dispatch({payload: parseInt(ev.currentTarget.value), type: ACTION_RUNS_SLIDER_CHANGE});
  }
  const _onDimensionSliderChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    props.dispatch({payload: parseInt(ev.currentTarget.value), type: ACTION_DIMENSIONS_SLIDER_CHANGE});
  }
  const _onPopulationSliderChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    props.dispatch({payload: parseInt(ev.currentTarget.value), type: ACTION_POPULATION_CHANGE});
  }
  const _onSurvivalMethodChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    props.dispatch({payload: ev.currentTarget.value, type: ACTION_SURVIVAL_SELECTION_METHOD_CHANGE});
  }
  const _onSurvivalMethodBiasChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    props.dispatch({payload: parseInt(ev.currentTarget.value), type: ACTION_SURVIVAL_SELECTION_BIAS_CHANGE});
  }
  const _onIterationsChange = (ev: React.SyntheticEvent<HTMLInputElement>) => {
    props.dispatch({payload: parseInt(ev.currentTarget.value), type: ACTION_ITERATIONS_CHANGE});
  }
  const _onSubmitClick = () => {
    const runnerParams = {
      dimension: props.algorithmParams.dimensions,
      numberOfGenerations: props.algorithmParams.iterations,
      populationSize: props.algorithmParams.population,
      method: props.algorithmParams.survivalSelection,
      elitismPercentage: props.algorithmParams.survivalSelectionBias,
      tournamentPercentage: props.algorithmParams.survivalSelectionBias,
    }
    const myWorker = new Worker(
      new URL('../../workers/main.worker.ts', import.meta.url)
    );
    myWorker.onmessage = ($event) => {
      if ($event && $event.data) {
        console.log($event.data)
      }
    }
    myWorker.postMessage({ runnerParams })
  }

  return (
    <Container>
      <Form>
        <InputWrapper>
          <Label> Número de runs </Label>
          <InputSlider type='range' min={1} max={5} value={props.algorithmParams.runQuantity} onChange={_onRunSliderChange}/>
        </InputWrapper>

        <InputWrapper>
          <Label> Dimensiones (valor y desviación) </Label>
          <InputSlider type='range' min={1} max={10} value={props.algorithmParams.dimensions} onChange={_onDimensionSliderChange}/>
        </InputWrapper>

        <InputWrapper>
          <Label> Tamaño de población </Label>
          <InputString type='number' value={props.algorithmParams.population} onChange={_onPopulationSliderChange}/>
        </InputWrapper>

        <InputWrapper>
          <Label> Selección de supervivientes </Label>

          <MethodLabel>
            <InputString 
              name='selection' 
              type='radio' 
              value='tournament'
              onChange={_onSurvivalMethodChange} 
              checked={props.algorithmParams.survivalSelection === SURVIVAL_SELECTION_TOURNAMENT}
            />
            Torneo  
          </MethodLabel>

          <MethodLabel>
            <InputString 
              name='selection' 
              type='radio'
              value='elitism'
              onChange={_onSurvivalMethodChange}
              checked={props.algorithmParams.survivalSelection === SURVIVAL_SELECTION_ELITISM}
            />
            Elitismo  
          </MethodLabel>          
        </InputWrapper>

        {props.algorithmParams.survivalSelection === SURVIVAL_SELECTION_TOURNAMENT && (
          <InputWrapper>
            <Label> Cantidad de victorias </Label>
            <InputString value={props.algorithmParams.survivalSelectionBias} onChange={_onSurvivalMethodBiasChange}/>
          </InputWrapper>
        )}

        {props.algorithmParams.survivalSelection === SURVIVAL_SELECTION_ELITISM && (
          <InputWrapper>
            <Label> Porcentage de elitismo </Label>
            <InputSlider type='range' min={0} max={100} value={props.algorithmParams.survivalSelectionBias} onChange={_onSurvivalMethodBiasChange}/>
          </InputWrapper>
        )}

        <InputWrapper>
          <Label> Numero de iteraciones </Label>
          <InputString type='number' value={props.algorithmParams.iterations} onChange={_onIterationsChange}/>
        </InputWrapper>

      <Button  onClick={_onSubmitClick}> Submit </Button>
      </Form>
    </Container>
  )
}