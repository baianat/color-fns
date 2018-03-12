export function getCartesianCoords(r, θ) {
  return { x: r * Math.cos(θ * Math.PI * 2), y: r * Math.sin(θ * Math.PI * 2) }
}
