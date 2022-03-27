import { GlobalStyle } from './styles/GlobalStyle'


import { ELITISM, TOURNAMENT } from './const'
import { ScatterChart } from './components/ScatterChart'
import { useEffect, useState } from 'react'
import { MultipleScatterChart } from './components/MultipleScatterChart'

const runnerParams = {
  dimension: 1,
  numberOfGenerations: 100,
  populationSize: 200,
  method: ELITISM,
  elitismPercentage: 10,
  tournamentPercentage: 10,
}

export function App() {
  const [best, setBest] = useState(null)
  const [average, setAverage] = useState(null)
  const [worst, setWorst] = useState(null)

  useEffect(() => {
    const myWorker = new Worker(
      new URL('./workers/main.worker.ts', import.meta.url)
    );
    myWorker.onmessage = ($event) => {
      if ($event && $event.data) {
        console.log($event.data)
        setBest($event.data.best)
        setAverage($event.data.average)
        setWorst($event.data.worst)
      }
    }
    myWorker.postMessage({ runnerParams })
  }, [])

  return (
    <>
      <GlobalStyle />
      <ScatterChart values={best} color='green' title='Best fitness' id='best' />
      <ScatterChart values={average} color='yellow' title='Average fitness' id='average' />
      <ScatterChart values={worst} color='rgb(255, 99, 132)' title='Worst fitness' id='worst' />
      <MultipleScatterChart best={best} average={average} worst={worst} />
    </>
  )
}