export const getAckleyFit = (arrayOfValues: number[]): number => {
  const a: number = 20
  const b: number = 0.2
  const c: number = 2 * Math.PI

  let firstSumatory = 0
  let secondSumatory = 0

  for (const elem of arrayOfValues) {
    firstSumatory += Math.pow(elem, 2)
    secondSumatory += Math.cos(c * elem)
  }

  firstSumatory = -b * Math.sqrt((1/arrayOfValues.length) * firstSumatory)
  secondSumatory = (1/arrayOfValues.length) * secondSumatory

  const result = -a * Math.exp(firstSumatory) - Math.exp(secondSumatory) + a + Math.exp(1)

  return result
}
