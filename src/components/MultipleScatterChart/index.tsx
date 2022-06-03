import { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas';
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { LineChart } from '../LineChart';
import { ChartImage, LibraryChartWrapper, Container } from './styles';
ChartJS.register(CategoryScale, BarElement, LinearScale, PointElement, LineElement, Tooltip, Legend);

export const MultipleScatterChart = ({ best, average, worst, bestHabitant, worstHabitant, averageAverage, id }) => {
  const bestRef = useRef(null)
  const worstRef = useRef(null)
  const averageRef = useRef(null)
  const [sources, setSources] = useState({
    srcBest: null,
    srcWorst: null,
    srcAverage: null,
  })

  useEffect(() => {
    if (!bestRef?.current || !worstRef?.current || !averageRef?.current) return

    const fillSources = async () => {
      const bestElement = bestRef.current
      const worstElement = worstRef.current
      const averageElement = averageRef.current

      const bestCanvas = await html2canvas(bestElement)
      const worstCanvas = await html2canvas(worstElement)
      const averageCanvas = await html2canvas(averageElement)

      const bestData = bestCanvas.toDataURL('image/jpeg')
      const worstData = worstCanvas.toDataURL('image/jpeg')
      const averageData = averageCanvas.toDataURL('image/jpeg')

      bestRef.current.removeChild(bestRef.current.children[0])
      worstRef.current.removeChild(worstRef.current.children[0])
      averageRef.current.removeChild(averageRef.current.children[0])
      setSources({
        srcBest: bestData,
        srcWorst: worstData,
        srcAverage: averageData,
      })
    }

    fillSources()

  }, [best, worst, average])

  if (!best || !best.length) return null
  if (!average || !average.length) return null
  if (!worst || !best.length) return null

  return (
    <Container>
      <LibraryChartWrapper ref={bestRef}>
        <LineChart
          values={best}
          color={'#77dd77'}
          title={`Best: ${id}`}
        />
      </LibraryChartWrapper>

      <LibraryChartWrapper ref={worstRef}>
        <LineChart
          values={worst}
          color={'#ff6385'}
          title={`Worst: ${id}`}
        />
      </LibraryChartWrapper>

      <LibraryChartWrapper ref={averageRef}>
        <LineChart
          values={average}
          color={'#fdfd96'}
          title={`Average: ${id}`}
        />
      </LibraryChartWrapper>

      {sources.srcBest && (
        <>
          <ChartImage src={sources.srcBest} alt={`best-chart-${id.split(' ').join('-')}`} />
          <p>Best fitness: {bestHabitant.fitness}</p>
          <p>Best values: {JSON.stringify(bestHabitant.fields)}</p>
        </>
      )}
      {sources.srcWorst && (
        <>
          <ChartImage src={sources.srcWorst} alt={`worst-chart-${id.split(' ').join('-')}`} />
          <p>Worst fitness: {worstHabitant.fitness}</p>
          <p>Best values: {JSON.stringify(worstHabitant.fields)}</p>
        </>
      )}
      {sources.srcAverage && (
        <>
          <ChartImage src={sources.srcAverage} alt={`average-chart-${id.split(' ').join('-')}`} />
          <p>Average fitness: {averageAverage}</p>
        </>
      )}
    </Container>
  )
}
