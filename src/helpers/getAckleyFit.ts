const getSums = (xi: Array<number>, c: number) => {
  let sum1 = 0
  let sum2 = 0
  for (const x of xi) {
    sum1 += Math.pow(x, 2)
    sum2 += Math.cos(c * x)
  }

  return [sum1, sum2]
}


export const getAckleyFit = (xi: number[]): number => {
  const a: number = 20
  const b: number = 0.2
  const c: number = 2 * Math.PI
  const d: number = xi.length

  const [sum1, sum2] = getSums(xi, c)

  const term1 = -a * Math.exp(-b * Math.sqrt(sum1/d))
  const term2 = -Math.exp(sum2/d)

  const y = term1 + term2 + a + Math.exp(1)

  return y
}
