import { Habitant } from '../classes'

export const getTournamentScore = (a: Habitant, b: Habitant) => {
  return a.fitness > b.fitness ? 1 : 0
}