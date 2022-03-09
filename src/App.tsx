import { GlobalStyle } from './styles/GlobalStyle'

import { ELITISM, TOURNAMENT } from './const'
import { FormAckley } from './components/FormAckley'

const runnerParams = {
  dimension: 1,
  numberOfGenerations: 10000,
  populationSize: 100,
  method: ELITISM,
  elitismPercentage: 5,
  tournamentPercentage: 10,
}

export function App() {

  const myWorker = new Worker(
    new URL('./workers/main.worker.ts', import.meta.url)
  );
  myWorker.onmessage = ($event) => {
    if ($event && $event.data) {
      console.log($event.data)
    }
  }
  myWorker.postMessage({ runnerParams })
  // const res = runner.run()
  // console.log({ res })

  return (
    <>
      <GlobalStyle />
      <FormAckley />
    </>
  )
}