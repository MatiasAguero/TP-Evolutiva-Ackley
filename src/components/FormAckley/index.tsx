import {
  Container,
  Form,
  InputWrapper,
  InputSlider,
  InputString,
  Label,
  MethodLabel,
} from './styles'

export const FormAckley = () => {
  const selectionMethod = 'tournament'
  return (
    <Container>
      <Form>
        <InputWrapper>
          <Label> Número de runs </Label>
          <InputSlider type='range' min={1} max={5}/>
        </InputWrapper>

        <InputWrapper>
          <Label> Dimensiones (valor y desviación) </Label>
          <InputSlider type='range' min={1} max={10}/>
        </InputWrapper>

        <InputWrapper>
          <Label> Tamaño de población </Label>
          <InputString type='number'/>
        </InputWrapper>

        <InputWrapper>
          <Label> Selección de supervivientes </Label>

          <MethodLabel>
            <InputString defaultChecked name='selection' type='radio'/>
            Torneo  
          </MethodLabel>

          <MethodLabel>
            <InputString name='selection' type='radio'/>
            Elitismo  
          </MethodLabel>          
        </InputWrapper>

        {selectionMethod === 'tournament' && (
          <InputWrapper>
            <Label> Cantidad de victorias </Label>
            <InputString />
          </InputWrapper>
        )}

        {selectionMethod === 'elitism' && (
          <InputWrapper>
            <Label> Porcentage de elitismo </Label>
            <InputSlider type='range' defaultValue={10} min={0} max={100}/>
          </InputWrapper>
        )}

        <InputWrapper>
          <Label> Numero de iteraciones </Label>
          <InputString type='number'/>
        </InputWrapper>
      </Form>
    </Container>
  )
}