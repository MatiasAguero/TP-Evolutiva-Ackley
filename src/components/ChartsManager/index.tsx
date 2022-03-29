import { useAckley, useNormalizer } from '../../hooks'
import { MultipleScatterChart } from '../MultipleScatterChart'

type RunnerParams = {
  dimensions: number,
  numberOfGenerations: number,
  populationSize: number,
  method: string,
  elitismPercentage: number,
  tournamentPercentage: number,
}
interface IChartManager {
  id?: number,
  params: RunnerParams,
}

export const ChartsManager = ({ id, params }: IChartManager) => {
  const { best, worst, average } = useAckley({ runnerParams: params })
  const [ normalizedBest, normalizedWorst, normalizedAverage ] = useNormalizer({ best, worst, average })

  console.log({ best })
  console.log({ worst })
  console.log({ average })
  console.log({ normalizedBest })
  console.log({ normalizedWorst })
  console.log({ normalizedAverage })
  return (
    <div>
      <MultipleScatterChart
        best={best}
        worst={worst}
        average={average}
      />
      <MultipleScatterChart
        best={normalizedBest}
        worst={normalizedWorst}
        average={normalizedAverage}
      />
    </div>
  )
}