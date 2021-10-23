import { Habitant, HabitantsCluster } from "../classes"
import { shuffle } from "."

const DEFAULT_OPTIONS = {
  elitismPercentage: 10,
  tournamentComparison: 5,
}

export const selectByElitism = (parents: Habitant[], childrens: Habitant[], options = DEFAULT_OPTIONS) => {
  const { elitismPercentage } = options
  const allHabitants = [...parents, ...childrens].sort((a, b) => a.fitness - b.fitness)

  const elitismCeil = Math.floor(parents.length * (elitismPercentage / 100))
  const elitismRest = parent.length - elitismCeil

  const elitismHabitants = allHabitants.slice(0, elitismCeil)
  const restOfHabitantsForNextGenerations = shuffle(allHabitants.slice(elitismCeil)).slice(0, elitismRest)

  const nextGeneration = [...elitismHabitants, ...restOfHabitantsForNextGenerations]
  return new HabitantsCluster(0, nextGeneration)
}

export const selectByTournament = (parents: Habitant[], childrens: Habitant[], options = DEFAULT_OPTIONS) => {
  // TODO: tournament by points
}
