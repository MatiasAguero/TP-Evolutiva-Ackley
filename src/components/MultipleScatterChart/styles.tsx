import styled, { css } from "styled-components";

export const Container = styled.section(
  ({ mustShow }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${mustShow ? '20px' : 0};
    height: ${mustShow ? '100%' : '0'};
    justify-content: center;
    opacity: ${mustShow ? 1 : 0};
    padding: ${mustShow ? '20px' : 0};
    width: 100%;

    & * {
      height: ${mustShow ? 'inherit' : '0'};
    }
  `
)

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

export const TitleContainer = styled.header`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const Title = styled.h1`

`

export const DownloadButton = styled.button`
  background-color: #423F3E;
  border: 1px solid;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  min-height: 30px;
  padding: 4px 6px;
`
