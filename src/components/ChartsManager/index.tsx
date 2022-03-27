import { useAckley } from '../../hooks'

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

  console.log({ best })
  console.log({ worst })
  console.log({ average })
  return (
    <h1>
      Chart manager!
    </h1>
  )
}