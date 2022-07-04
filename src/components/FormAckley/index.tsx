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
  SliderContainer,
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
  

  return (
    <Container>
      <Form>
        <InputWrapper>
          <Label> Número de runs </Label>
          <SliderContainer>
            <InputSlider type='range' min={1} max={5} value={props.algorithmParams.runQuantity} onChange={_onRunSliderChange} />
            <Label> {props.algorithmParams.runQuantity} </Label>
          </SliderContainer>
        </InputWrapper>

        <InputWrapper>
          <Label> Dimensiones (valor y desviación) </Label>
          <SliderContainer>
            <InputSlider type='range' min={1} max={10} value={props.algorithmParams.dimensions} onChange={_onDimensionSliderChange}/>
            <Label> {props.algorithmParams.dimensions} </Label>
          </SliderContainer>
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
            <InputString type='number' value={props.algorithmParams.survivalSelectionBias} onChange={_onSurvivalMethodBiasChange}/>
          </InputWrapper>
        )}

        {props.algorithmParams.survivalSelection === SURVIVAL_SELECTION_ELITISM && (
          <InputWrapper>
            <Label> Porcentage de elitismo </Label>
            <SliderContainer>
              <InputSlider type='range' min={0} max={100} value={props.algorithmParams.survivalSelectionBias} onChange={_onSurvivalMethodBiasChange}/>
              <Label> {props.algorithmParams.survivalSelectionBias+"%"} </Label>
            </SliderContainer>
          </InputWrapper>
        )}

        <InputWrapper>
          <Label> Numero de iteraciones </Label>
          <InputString type='number' value={props.algorithmParams.iterations} onChange={_onIterationsChange}/>
        </InputWrapper>
      </Form>
    </Container>
  )
}