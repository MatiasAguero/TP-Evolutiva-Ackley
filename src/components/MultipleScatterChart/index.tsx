import { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
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
import { ChartImage, LibraryChartWrapper, Container, LoadingMessage, ChartAndTextWrapper, RunTextWrapper, RunText, TitleContainer, Title, DownloadButton } from './styles';
import { Printer } from '../../classes/Printer'
ChartJS.register(CategoryScale, BarElement, LinearScale, PointElement, LineElement, Tooltip, Legend);

const printer = new Printer()

export const MultipleScatterChart = ({ best, average, worst, bestHabitant, worstHabitant, averageAverage, id, mustShow, params }) => {
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

  const formatParamsToDownload = (params) => {
    const { dimensions, numberOfGenerations, populationSize, method, elitismPercentage, tournamentPercentage} = params
    const METHODS_NAME = {
      elitism: 'Elitismo',
      tournament: 'Torneo'
    }
    const METHOD_DESCRIPTION = {
      elitism: (percentage) => `Porcentaje de elitismo: ${percentage}`,
      tournament: (victories) => `Cantidad de victorias: ${victories}`
    }
    
    const stringFormated = `
Dimensiones: ${dimensions}
Número de generaciones: ${numberOfGenerations}
Tamaño de población: ${populationSize}
Método de selección: ${METHODS_NAME[method] || '-'}
${METHOD_DESCRIPTION[method](method === 'elitism' ? elitismPercentage : tournamentPercentage)}
    `

    return stringFormated
  }

  const handleDownloadData = () => {
    var FileSaver = require('file-saver');
    var blob = new Blob([
      id,
      '\n',
      '\n',
      'Parametros de la run:',
      '\n',
      formatParamsToDownload(params),
      '\n',
      'Resultados de la run:',
      '\n',
      '\n',
      '### Mejores resultados: ###',
      '\n',
      '\n',
      printer.printBetter(bestHabitant, 'Mejor fitness de los mejores valores de la run'),
      '\n',
      printer.printWorst(bestHabitant, 'Peor fitness de los mejores valores de la run'),
      '\n',
      printer.printAverage(bestHabitant, 'Promedio de los promedios de los mejores valores de la run'),
      '\n',
      '\n',
      '### Peores resultados: ###',
      '\n',
      '\n',
      printer.printBetter(worstHabitant, 'Mejor fitness de los peores valores de la run'),
      '\n',
      printer.printWorst(worstHabitant, 'Peor fitness de los peores valores de la run'),
      '\n',
      printer.printAverage(worstHabitant, 'Promedio de los promedios de los peores valores de la run'),
      '\n',
      '\n',
      '### Resultado promedio: ###',
      '\n',
      '\n',
      `Fitness promedio de la run: ${averageAverage}`
    ], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, `Datos de ${id}_${String(new Date()).split('GMT')[0]}.txt`);
  }

  if (!best || !best.length) return <LoadingMessage> Creando gráficos de {id}... </LoadingMessage>
  if (!average || !average.length) return <LoadingMessage> Creando gráficos de {id}... </LoadingMessage>
  if (!worst || !best.length) return <LoadingMessage> Creando gráficos de {id}... </LoadingMessage>

  return (
    <Container mustShow={mustShow}>
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

      {sources.srcBest && sources.srcWorst && sources.srcAverage && (
        <TitleContainer>
          <Title> Datos de {id} </Title>
          <DownloadButton onClick={handleDownloadData}> Descargar datos </DownloadButton> 
        </TitleContainer>
      )}

      {sources.srcBest && (
        <ChartAndTextWrapper>
          <ChartImage src={sources.srcBest} alt={`best-chart-${id.split(' ').join('-')}`} />
          <RunTextWrapper>
            <RunText>{printer.printBetter(bestHabitant, 'Mejor fitness de los mejores valores de la run')}</RunText>
            <RunText>{printer.printWorst(bestHabitant, 'Peor fitness de los mejores valores de la run')}</RunText>
            <RunText>{printer.printAverage(bestHabitant, 'Promedio de los promedios de los mejores valores de la run')}</RunText>
          </RunTextWrapper>
        </ChartAndTextWrapper>
      )}
      {sources.srcWorst && (
        <ChartAndTextWrapper>
          <ChartImage src={sources.srcWorst} alt={`worst-chart-${id.split(' ').join('-')}`} />
          <RunTextWrapper>
            <RunText>{printer.printBetter(worstHabitant, 'Mejor fitness de los peores valores de la run')}</RunText>
            <RunText>{printer.printWorst(worstHabitant, 'Peor fitness de los peores valores de la run')}</RunText>
            <RunText>{printer.printAverage(worstHabitant, 'Promedio de los promedios de los peores valores de la run')}</RunText>
          </RunTextWrapper>
        </ChartAndTextWrapper>
      )}
      {sources.srcAverage && (
        <ChartAndTextWrapper>
          <ChartImage src={sources.srcAverage} alt={`average-chart-${id.split(' ').join('-')}`} />
          <RunTextWrapper>
            <RunText>Fitness promedio de la run: {averageAverage}</RunText>
          </RunTextWrapper>
        </ChartAndTextWrapper>
      )}
    </Container>
  )
}
