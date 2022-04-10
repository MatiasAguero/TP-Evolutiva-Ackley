import { GlobalStyle } from './styles/GlobalStyle'


import { ELITISM, TOURNAMENT } from './const'
import { ScatterChart } from './components/ScatterChart'
import { useEffect, useState } from 'react'
import { MultipleScatterChart } from './components/MultipleScatterChart'
import { ChartsManager } from './components/ChartsManager'
import { useAckley } from './hooks'

const runnerParams = {
  dimensions: 2,
  numberOfGenerations: 100000,
  populationSize: 100,
  method: TOURNAMENT,
  elitismPercentage: 40,
  tournamentPercentage: 50,
}

export function App() {
  return (
    <>
      <GlobalStyle />
      <ChartsManager runs={3} params={runnerParams} />
    </>
  )
}