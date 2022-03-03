import { getAckleyFit, randomFloatFromInterval } from '../helpers'

const MIN_VALUE = -32768
const MAX_VALUE = 32768

export class Habitant {
  values: number[]
  deviations: number[]
  fitness: number

  constructor(dimension: number) {
    let values: number[] = []
    let deviations: number[] = []
    for (let i = 0; i < dimension; i++) {
      values.push(randomFloatFromInterval(MIN_VALUE, MAX_VALUE))
      deviations.push(randomFloatFromInterval(1, 5))
    }

    this.values = values
    this.deviations = deviations
    this.fitness = getAckleyFit(values)
  }

  getFitness() {
    return this.fitness
  }

  getChildren() {
    const ALPHA = 0.2
    const generalDeviator = Math.random()
    let values: number[] = []
    let deviations: number[] = []

    for (let i = 0; i < this.values.length; i++) {
      const mutatedDeviation = this.deviations[i] * (1 + ALPHA * (generalDeviator))
      const mutatedValue = this.values[i] + mutatedDeviation * Math.random()

      values.push(mutatedValue)
      deviations.push(mutatedDeviation)
    }

    const dimensionBasedInTheCurrentHabitants = this.values.length
    return new Habitant(dimensionBasedInTheCurrentHabitants)
  }
}
