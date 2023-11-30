export function calcAngle(a, b, c) {
  a = Array.from(a)
  b = Array.from(b)
  c = Array.from(c)

  const radians =
    Math.atan2(c[1] - b[1], c[0] - b[0]) - Math.atan2(a[1] - b[1], a[0] - b[0])
  let angle = Math.abs(radians * (180.0 / Math.PI))

  if (angle > 180.0) {
    angle = 360 - angle
  }

  return angle
}

export function calcDist(a, b) {
  a = Array.from(a)
  b = Array.from(b)

  if (a !== null && b !== null) {
    return Math.sqrt(
      a.reduce((sum, value, index) => sum + Math.pow(value - b[index], 2), 0)
    )
  }

  return 100000
}

export function getCoords(a, third = false) {
  if (third) {
    return [a.x, a.y, a.z]
  }
  return [a.x, a.y]
}

export function makeSuggest(diffl, diffr, diffsh = 0, diffear = 0) {
  let suggest = ''

  if (diffl >= 0.045 || diffr >= 0.045) {
    suggest = 'Старайтесь не поднимать плечо'
  }

  if (diffear > 0.04) {
    suggest = 'Старайтесь не наклонять голову'
  }

  if (diffsh >= 0.06) {
    suggest = 'Старайтесь не наклоняться'
  }

  return suggest
}
