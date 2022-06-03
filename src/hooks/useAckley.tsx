import { useState, useEffect } from "react"

export function useAckley ({ active, runnerParams }) {
  const [runResult, setRunResult] = useState({
    best: null,
    worst: null,
    average: null,
  })

  useEffect(() => {
    const myWorker = new Worker(
      new URL('../workers/main.worker.ts', import.meta.url)
    );
    myWorker.onmessage = ($event) => {
      if ($event && $event.data) {
        console.log($event.data)
        setRunResult({
          best: $event.data.best,
          worst: $event.data.worst,
          average: $event.data.average,
        })
      }
    }
    myWorker.postMessage({ runnerParams })
  }, [runnerParams])

  return [runResult.best, runResult.worst, runResult.average]
}