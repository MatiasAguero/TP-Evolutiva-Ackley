import { useAckley, useNormalizer } from '../../hooks'
import { MultipleScatterChart } from '../MultipleScatterChart'
import { ScatterChart } from '../ScatterChart'
import {Container} from './styles'

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
  const [best1, worst1, average1, bestHabitant1, worstHabitant1, averageAverage1] = useAckley({ active: true, runnerParams: params })
  const [best2, worst2, average2, bestHabitant2, worstHabitant2, averageAverage2] = useAckley({ active: runs >= 2, runnerParams: params })
  const [best3, worst3, average3, bestHabitant3, worstHabitant3, averageAverage3] = useAckley({ active: runs >= 3, runnerParams: params })
  const [best4, worst4, average4, bestHabitant4, worstHabitant4, averageAverage4] = useAckley({ active: runs >= 4, runnerParams: params })
  const [best5, worst5, average5, bestHabitant5, worstHabitant5, averageAverage5] = useAckley({ active: runs >= 5, runnerParams: params })

  return (
    <Container>
      <MultipleScatterChart
        best={best1}
        worst={worst1}
        average={average1}
        bestHabitant={bestHabitant1}
        worstHabitant={worstHabitant1}
        averageAverage={averageAverage1}
        id='Run 1'
      />
      {
        runs >= 2 && (
          <MultipleScatterChart
            best={best2}
            worst={worst2}
            average={average2}
            bestHabitant={bestHabitant2}
            worstHabitant={worstHabitant2}
            averageAverage={averageAverage2}
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
            bestHabitant={bestHabitant3}
            worstHabitant={worstHabitant3}
            averageAverage={averageAverage3}
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
            bestHabitant={bestHabitant4}
            worstHabitant={worstHabitant4}
            averageAverage={averageAverage4}
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
            bestHabitant={bestHabitant5}
            worstHabitant={worstHabitant5}
            averageAverage={averageAverage5}
            id='Run 5'
          />
        )
      }
    </Container>
  )
}