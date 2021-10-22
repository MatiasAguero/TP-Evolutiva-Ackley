import { getAckleyFit } from '../helpers/getAckleyFit'

export class Habitant {
  values: number[]
  deviations: number[]
  fitness: number

  constructor(values: number[], deviations: number[]) {
    this.values = values
    this.deviations = deviations
    this.fitness = getAckleyFit(values)
  }

  getChildren() {
    const ALPHA = 0.2
    const generalDeviator = Math.random()
    const values = []
    const deviations = []
    for (let i = 0; i < this.values.length; i++) {
      const mutatedDeviation = this.deviations[i] * (1 + ALPHA * (generalDeviator))
      const mutatedValue = this.values[i] + mutatedDeviation * Math.random()

      values.push(mutatedValue)
      deviations.push(mutatedDeviation)
    }

    // the fitness values is self-assigned by the class
    return new Habitant(values, deviations)
  }
}
