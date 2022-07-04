import styled from 'styled-components'

export const Container = styled.div`
  align-items: flex-end;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding: 10px;
  width: 100%;
`

export const InputWrapper = styled.div`
  margin: 0 auto;
  max-width: 40%;
  width: 100%;
`

export const Label = styled.label`

`

export const InputSlider = styled.input`
  width: 100%;
`

export const InputString = styled.input`

`
export const MethodLabel = styled.label`
  align-items: center;
  display: flex;
  gap: 14px;
  width: 100%;
`

export const Button = styled.button`
  background-color: #423F3E;
  border: 1px solid;
  border-radius: 10px;
  color: white;
  min-height: 30px;
  padding: 4px 6px;

  &:hover {
    cursor: pointer;
  }
`