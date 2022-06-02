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

export const ChartImage = styled.img`
  border: solid 2px black;
  max-width: 600px;
  width: 100%;
`
