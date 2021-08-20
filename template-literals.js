const greeting = 'Hello'
const subject = 'World'
console.log(`${greeting} ${subject}!`)

// This is the sama as:
console.log(greeting + ' ' + subject + '!');

// in React
function Box({className, ...props}) {
  return <div className={`box ${className}`}{...props} />
}