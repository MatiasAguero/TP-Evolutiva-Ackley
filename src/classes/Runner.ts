import { HabitantsCluster } from "."

interface IRunner {
  dimension: number
  numberOfGenerations: number
  populationSize: number
  method: string
  elitismPercentage: number
  tournamentPercentage: number
}

export class Runner {
  dimension: number
  numberOfGenerations: number
  populationSize: number
  method: string
  elitismPercentage: number
  tournamentPercentage: number

  constructor({ dimension, numberOfGenerations, populationSize, method, elitismPercentage, tournamentPercentage }: IRunner) {
    this.dimension = dimension
    this.numberOfGenerations = numberOfGenerations
    this.populationSize = populationSize
    this.method = method
    this.elitismPercentage = elitismPercentage
    this.tournamentPercentage = tournamentPercentage
  }

  run() {
    const { dimension, numberOfGenerations, populationSize, method, elitismPercentage, tournamentPercentage } = this

    if (numberOfGenerations < 1) return { best: null, worst: null, average: null }

    let population = new HabitantsCluster(dimension, populationSize)

    const firstStatistics = population.getStatistics()

    let listOfBest = [firstStatistics.best]
    let listOfWorst = [firstStatistics.worst]
    let listOfAverage = [firstStatistics.average]


    for (let i = 1; i < numberOfGenerations; i++) {
      population = population.getNextGeneration(method)

      const { best, worst, average } = population.getStatistics()

      listOfBest.push(best)
      listOfWorst.push(worst)
      listOfAverage.push(average)
    }

    return {
      best: listOfBest,
      worst: listOfWorst,
      average: listOfAverage
    }
  }
}