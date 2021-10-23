export const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomFloatFromInterval = (min: number, max: number) => {
  return Math.random() * (max - min + 1) + min
}

export const getMultipleRandomIntFromIntervalWithoutDuplicates = (min: number, max: number, quantity: number) => {
  let numbers: number[] = []

  for (let i = 0; i < quantity; i++) {
    let number = randomIntFromInterval(min, max)
    while (numbers.includes(number)) {
      number = randomIntFromInterval(min, max)
    }
    numbers.push(number)
  }

  return numbers
}
