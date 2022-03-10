import { Habitant, HabitantsCluster } from "../classes"
import { shuffle, getMultipleRandomIntFromIntervalWithoutDuplicates, getTournamentScore } from "."

const DEFAULT_OPTIONS = {
  elitismPercentage: 10,
  tournamentPercentage: 10,
  tournamentComparisonCount: 5,
}

export const selectByElitism = (parents: Habitant[], childrens: Habitant[], options = DEFAULT_OPTIONS) => {
  const { elitismPercentage } = options
  const populationSize = parents.length

  const allHabitants = [...parents, ...childrens].sort((a, b) => a.fitness - b.fitness)

  const elitismCeil = Math.floor(parents.length * (elitismPercentage / 100))
  const elitismRest = parents.length - elitismCeil

  const elitismHabitants = allHabitants.slice(0, elitismCeil)
  const restOfHabitantsForNextGenerations = shuffle(allHabitants.slice(elitismCeil)).slice(0, elitismRest)

  const nextGeneration = [...elitismHabitants, ...restOfHabitantsForNextGenerations]
  return new HabitantsCluster(0, populationSize, nextGeneration)
}

export const selectByTournament = (parents: Habitant[], childrens: Habitant[], options = DEFAULT_OPTIONS) => {
  const { tournamentComparisonCount, tournamentPercentage } = options
  const populationSize = parents.length
  
  const tournamentCeil = Math.floor(parents.length * (tournamentPercentage / 100))
  const tournamentRest = parents.length - tournamentCeil

  const allHabitants = [...parents, ...childrens]

  const allHabitantsWithScore = allHabitants.map(habitant => {
    const indexes = getMultipleRandomIntFromIntervalWithoutDuplicates(0, allHabitants.length - 1, tournamentComparisonCount)
    let score = 0

    for (const index of indexes) {
      const indexedElem = allHabitants[index]
      score = getTournamentScore(habitant, indexedElem)
    }

    return { habitant, score }
  })

  const habitantsWinnersOfTheTournament = allHabitantsWithScore.sort((a, b) => b.score - a.score).slice(0, tournamentCeil).map(elem => elem.habitant)
  const restOfHabitantsForNextGenerations = shuffle(allHabitantsWithScore.map(elem => elem.habitant).slice(tournamentCeil)).slice(0, tournamentRest)

  const nextGeneration = [...habitantsWinnersOfTheTournament, ...restOfHabitantsForNextGenerations]
  return new HabitantsCluster(0, populationSize, nextGeneration)
}
