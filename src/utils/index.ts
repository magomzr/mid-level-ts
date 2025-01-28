// Función pipe, que recibe una lista de funciones como parámetros y luego
// devuelve una nueva función que toma un valor y lo pasa a través de todas
// las funciones proporcionadas en orden.
export const pipe =
  (
    ...fns: Function[] // Lista de funciones
  ) =>
  (
    value: any // Devuelve una nueva función que toma un valor inicial "value"
  ) =>
    // la función reduce() se utiliza para reducir una lista de valores a un solo valor
    // aplicando una función acumulativa. acc es el acumulador (que guarda el
    // valor acumulado de la reducción) y fn es currentValue, el valor actual que se
    // está procesando. Por cada elemento de una lista, el parámetro acc y currentValue
    // se actualizan. Al final de la iteración, el valor final de acc se devuelve.
    fns.reduce((acc: any, fn: any) => fn(acc), value);
