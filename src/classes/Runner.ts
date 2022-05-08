import { HabitantsCluster } from "."

export interface IRunner {
  dimensions: number
  numberOfGenerations: number
  populationSize: number
  method: string
  elitismPercentage: number
  tournamentPercentage: number
}

export class Runner {
  dimensions: number
  numberOfGenerations: number
  populationSize: number
  method: string
  elitismPercentage: number
  tournamentPercentage: number

  constructor({ dimensions, numberOfGenerations, populationSize, method, elitismPercentage, tournamentPercentage }: IRunner) {
    this.dimensions = dimensions
    this.numberOfGenerations = numberOfGenerations
    this.populationSize = populationSize
    this.method = method
    this.elitismPercentage = elitismPercentage
    this.tournamentPercentage = tournamentPercentage
  }

  run() {
    const { dimensions, numberOfGenerations, populationSize, method, elitismPercentage, tournamentPercentage } = this

    if (numberOfGenerations < 1) return { best: null, worst: null, average: null }

    let population = new HabitantsCluster(dimensions, populationSize)

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