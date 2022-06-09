import { useState, useEffect } from "react"

interface IArraysOfFitness {
  best: number[],
  worst: number[],
  average: number[],
}

export function useNormalizer ({ best, worst, average }: IArraysOfFitness) {
  const [normalizedResult, setNormalizedResult] = useState({
    best: null,
    worst: null,
    average: null,
  })

  useEffect(() => {
    if (best === null || worst === null || average === null) {
      return null
    }

    const PERCENT_TO_SEPARATE = best.length * 0.01
    const arrayOfBestPercentage: number[] = []
    const arrayOfWorstPercentage: number[] = []
    const arrayOfAveragePercentage: number[] = []
    let acumBest = 0
    let acumWorst = 0
    let acumAverage = 0

    for (let i = 0; i < best.length; i++) {
      acumBest += best[i]
      acumWorst += worst[i]
      acumAverage += average[i]

      if (i > 0 && i % PERCENT_TO_SEPARATE === 0) {
        arrayOfBestPercentage.push(acumBest / PERCENT_TO_SEPARATE)
        arrayOfWorstPercentage.push(acumWorst / PERCENT_TO_SEPARATE)
        arrayOfAveragePercentage.push(acumAverage / PERCENT_TO_SEPARATE)

        acumBest = 0
        acumWorst = 0
        acumAverage = 0
      }
    }
    arrayOfBestPercentage.push(acumBest / PERCENT_TO_SEPARATE)
    arrayOfWorstPercentage.push(acumWorst / PERCENT_TO_SEPARATE)
    arrayOfAveragePercentage.push(acumAverage / PERCENT_TO_SEPARATE)

    setNormalizedResult({
      best: arrayOfBestPercentage,
      worst: arrayOfWorstPercentage,
      average: arrayOfAveragePercentage,
    })
    
  }, [best, worst, average])

  return [
    normalizedResult.best,
    normalizedResult.worst,
    normalizedResult.average,
  ]
}