import { Habitant } from ".";
import { selectByElitism, selectByTournament } from "../helpers";
import { ELITISM, TOURNAMENT } from "../const";

const BEST_DISCERNIBLE = 40
const WORST_DISCERNIBLE = -40

export class HabitantsCluster {
  listOfHabitants: Habitant[]
  populationSize: number

  constructor(dimension: number, populationSize: number, initializedHabitants: Habitant[] = []) {
    this.populationSize = populationSize

    if (initializedHabitants?.length) {
      this.listOfHabitants = initializedHabitants
    } else {
      let listOfHabitants: Habitant[] = []
      for (let i = 0; i < populationSize; i++) {
        listOfHabitants.push(new Habitant(dimension))
      }
      this.listOfHabitants = listOfHabitants
    }
  }

  getHabitants() {
    return [...this.listOfHabitants]
  }

  getPopulationSize() {
    return this.populationSize
  }

  getChildrens() {
    let childrens: Habitant[] = []
    for (const habitant of this.listOfHabitants) {
      childrens.push(habitant.getChildren())
    }
    return childrens
  }

  getStatistics() {
    let statistics = {
      best: {
        fitness: BEST_DISCERNIBLE,
        habitant: {
          values: [],
          deviations: []
        }
      },
      average: 0,
      worst: {
        fitness: WORST_DISCERNIBLE,
        habitant: {
          values: [],
          deviations: []
        }
      }
    }

    


    for (const habitant of this.listOfHabitants) {
      const currentFitness = habitant.getFitness()

      if (currentFitness < statistics.best.fitness) {
        statistics.best.fitness = currentFitness
        statistics.best.habitant.values = habitant.values
        statistics.best.habitant.deviations = habitant.deviations

      }
      if (currentFitness > statistics.worst.fitness) {
        statistics.worst.fitness = currentFitness
        statistics.worst.habitant.values = habitant.values
        statistics.worst.habitant.deviations = habitant.deviations
      }
      statistics.average += currentFitness
    }
    statistics.average /= this.listOfHabitants.length

    return statistics
  }

  getNextGeneration(method: string): HabitantsCluster {
    const childrens = this.getChildrens()
    switch(method) {
      case ELITISM:
        const selectedNextGenerationByElitism = selectByElitism(this.listOfHabitants, childrens)
        return selectedNextGenerationByElitism

      case TOURNAMENT:
        const selectedNextGenerationByTournament = selectByTournament(this.listOfHabitants, childrens)
        return selectedNextGenerationByTournament

      default:
        return new HabitantsCluster(0, this.populationSize)
    }
  }
}
