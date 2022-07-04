import { useState, useEffect } from "react"

export function useAckley ({ active, runnerParams }) {
  const [runResult, setRunResult] = useState({
    best: null,
    worst: null,
    average: null,
    bestHabitant: null,
    worstHabitant: null,
    averageAverage: null
  })

  useEffect(() => {
    const myWorker = new Worker(
      new URL('../workers/main.worker.ts', import.meta.url)
    );
    myWorker.onmessage = ($event) => {
      if ($event && $event.data) {
        setRunResult({
          best: $event.data.best,
          worst: $event.data.worst,
          average: $event.data.average,
          bestHabitant: $event.data.bestHabitant,
          worstHabitant: $event.data.worstHabitant,
          averageAverage: $event.data.averageAverage
        })
      }
    }
    myWorker.postMessage({ runnerParams })
  }, [runnerParams])

  return [runResult.best, runResult.worst, runResult.average, runResult.bestHabitant, runResult.worstHabitant, runResult.averageAverage]
}