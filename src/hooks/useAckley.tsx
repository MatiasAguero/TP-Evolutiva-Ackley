import { useState, useEffect } from "react"

export function useAckley ({ runnerParams }) {
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
        setRunResult({
          best: $event.data.best,
          worst: $event.data.worst,
          average: $event.data.average,
        })
      }
    }
    myWorker.postMessage({ runnerParams })
  }, [runnerParams])

  return {
    best: runResult.best,
    worst: runResult.worst,
    average: runResult.average,
  }
}