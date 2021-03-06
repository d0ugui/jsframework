const a = 'Hello'
const b = 42
const c = {d: [true, false]}
console.log({a, b, c})

// This is the same as:
console.log({a: a, b: b, c: c})

// In React
function Counter({initialCount, step}) {
  const [count, setCount] = useCounter({initialCount, step})
  return <button onClick={setCount}>{count}</button>
}