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

    let listOfBest = [firstStatistics.best.fitness]
    let listOfWorst = [firstStatistics.worst.fitness]
    let listOfAverage = [firstStatistics.average]

    let bestHabitant = {
      fitness: 40,
      fields: {
        values: [],
        deviations: []
      }
    }
    let worstHabitant = {
      fitness: -40,
      fields: {
        values: [],
        deviations: []
      }
    }

    let averageAverage = 0

    for (let i = 1; i < numberOfGenerations; i++) {
      population = population.getNextGeneration(method)

      const { best, worst, average } = population.getStatistics()

      if (best.fitness < bestHabitant.fitness) {
        bestHabitant.fields = best.habitant
        bestHabitant.fitness = best.fitness
      }

      if (worst.fitness > worstHabitant.fitness) {
        worstHabitant.fields = worst.habitant
        worstHabitant.fitness = worst.fitness
      }

      averageAverage += average

      listOfBest.push(best.fitness)
      listOfWorst.push(worst.fitness)
      listOfAverage.push(average)
    }

    averageAverage = averageAverage / numberOfGenerations

    return {
      best: listOfBest,
      worst: listOfWorst,
      average: listOfAverage,
      bestHabitant,
      worstHabitant,
      averageAverage
    }
  }
}