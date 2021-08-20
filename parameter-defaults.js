//* Parameter Defaults

// function add(a, b = 0) {
//   return a + b
// }

// //* Is the same as
// const add = (a, b = 0) => a + b

//* Is the same as
// function add(a, b) {
//   b = b === undefined ? 0 : b
//   return a + b
// }

// console.log(add(5, 2))

//* In React
function useLocalStorageState({
  key,
  initialValue,
  serialize = v => v,
  deserialize = v => v,
}) {
  const [state, setState] = React.useState(
    () => deserialize(window.localStorage.getItem(key)) || initialValue
  )

  const serializedState = serialize(state)
  React.useEffect(() => {
    window.localStorage.setItem(key, serializedState)
  }, [key, serializedState])

  return [state, setState] 
}