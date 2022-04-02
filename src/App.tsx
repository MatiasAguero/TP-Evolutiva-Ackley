import { GlobalStyle } from './styles/GlobalStyle'


import { ELITISM, TOURNAMENT } from './const'
import { ScatterChart } from './components/ScatterChart'
import { useEffect, useState } from 'react'
import { MultipleScatterChart } from './components/MultipleScatterChart'
import { ChartsManager } from './components/ChartsManager'
import { useAckley } from './hooks'

const runnerParams = {
  dimensions: 2,
  numberOfGenerations: 10000,
  populationSize: 200,
  method: ELITISM,
  elitismPercentage: 40,
  tournamentPercentage: 10,
}

export function App() {
  return (
    <>
      <GlobalStyle />
      <ChartsManager runs={1} params={runnerParams} />
      {/*
      <ScatterChart values={best} color='green' title='Best fitness' id='best' />
      <ScatterChart values={average} color='yellow' title='Average fitness' id='average' />
      <ScatterChart values={worst} color='rgb(255, 99, 132)' title='Worst fitness' id='worst' />
      <MultipleScatterChart best={best} average={average} worst={worst} />
      */}
    </>
  )
}