import { GlobalStyle } from './styles/GlobalStyle'

import { Greetings } from './components/Greetings'

import { Runner } from './classes'
import { ELITISM } from './const'

const runnerParams = {
  dimension: 1,
  numberOfGenerations: 100000,
  populationSize: 100,
  method: ELITISM,
  elitismPercentage: 10,
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
      <Greetings />
    </>
  )
}