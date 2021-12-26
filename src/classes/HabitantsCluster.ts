import { Habitant } from ".";
import { selectByElitism, selectByTournament } from "../helpers";
import { ELITISM, TOURNAMENT } from "../const";

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
    let statistics: {
      best: number,
      average: number,
      worst: number
    } = {
      best: 0,
      average: 0,
      worst: 0
    }

    for (const habitant of this.listOfHabitants) {
      if (statistics.best < habitant.getFitness()) {
        statistics.best = habitant.getFitness()
      }
      if (statistics.worst > habitant.getFitness()) {
        statistics.worst = habitant.getFitness()
      }
      statistics.average += habitant.getFitness()
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
