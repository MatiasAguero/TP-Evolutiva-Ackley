export class Printer {
  printBetter (plainHabitant, initialMessage = 'Mejor fitness de la run') {
    const { fitness, fields } = plainHabitant.best
    const { values, deviations } = fields

    return `${initialMessage}: ${fitness}, con los valores: [${values}], y desviaciones: [${deviations}]`
  }

  printWorst (plainHabitant, initialMessage = 'Peor fitness de la run') {
    const { fitness, fields } = plainHabitant.worst
    const { values, deviations } = fields

    return `${initialMessage}: ${fitness}, con los valores: [${values}], y desviaciones: [${deviations}]`
  }

  printAverage (plainHabitant, initialMessage = 'Fitness promedio') {
    const { fitness } = plainHabitant.average
    return `${initialMessage}: ${fitness}`
  }
}

export default Printer
