import { useAckley, useNormalizer } from '../../hooks'
import { MultipleScatterChart } from '../MultipleScatterChart'
import { ScatterChart } from '../ScatterChart'

type RunnerParams = {
  dimensions: number,
  numberOfGenerations: number,
  populationSize: number,
  method: string,
  elitismPercentage: number,
  tournamentPercentage: number,
}
interface IChartManager {
  runs?: number,
  params: RunnerParams,
}

export const ChartsManager = ({ runs = 1, params }: IChartManager) => {
  const [best1, worst1, average1] = useAckley({ active: true, runnerParams: params })
  const [best2, worst2, average2] = useAckley({ active: runs >= 2, runnerParams: params })
  const [best3, worst3, average3] = useAckley({ active: runs >= 3, runnerParams: params })
  const [best4, worst4, average4] = useAckley({ active: runs >= 4, runnerParams: params })
  const [best5, worst5, average5] = useAckley({ active: runs >= 5, runnerParams: params })

  return (
    <div>
      <MultipleScatterChart
        best={best1}
        worst={worst1}
        average={average1}
        id='Run 1'
      />
      {
        runs >= 2 && (
          <MultipleScatterChart
            best={best2}
            worst={worst2}
            average={average2}
            id='Run 2'
          />
        )
      }
      {
        runs >= 3 && (
          <MultipleScatterChart
            best={best3}
            worst={worst3}
            average={average3}
            id='Run 3'
          />
        )
      }
      {
        runs >= 4 && (
          <MultipleScatterChart
            best={best4}
            worst={worst4}
            average={average4}
            id='Run 4'
          />
        )
      }
      {
        runs >= 5 && (
          <MultipleScatterChart
            best={best5}
            worst={worst5}
            average={average5}
            id='Run 5'
          />
        )
      }
    </div>
  )
}