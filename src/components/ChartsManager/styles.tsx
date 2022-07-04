import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 70px);
  overflow: auto;
`

export const SelectRunContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  width: 100%;
`

export const SelectRunButton = styled.button`
  align-items: center;
  background-color: #423F3E;
  border: none;
  border-radius: 14px;
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 1.2rem;
  height: min(36px, 10vw);
  justify-content: center;
  margin: 10px;
  width: min(36px, 10vw);
`
