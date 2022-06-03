import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  width: 100%;
`

export const LibraryChartWrapper = styled.div`
  left: -1000px;
  height: 300px;
  width: 600px;
  position: absolute;
  top: -1000px;
`

export const ChartAndTextWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: flex-start;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
`

export const ChartImage = styled.img`
  border: solid 2px black;
  max-width: 600px;
  width: 100%;
`

export const LoadingMessage = styled.h2`
  padding: 10px;
  text-align: center;
  width: 100%;
`

export const RunTextWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const RunText = styled.li`
  margin: 0;
`
