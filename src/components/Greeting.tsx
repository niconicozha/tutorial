import type { FC } from 'preact/compat'
import { useState } from 'preact/hooks'

interface Props {
  messages: string[]
}

const Greeting: FC<Props> = ({messages}) => {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))]

  const [greeting, setGreeting] = useState(messages[0])

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>New Greeting</button>
    </div>
  )
}

export default Greeting
