import React from 'react'
import { Slide, Notes } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="purple"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Easy to understand at first glance.</p>
      <p>Client side, if you know how to write the query, you're done.</p>
      <p>Server side, it's another story...</p>
    </Notes>

    <img className="pt5" src="assets/images/graphiql.png" alt="graphiql" />
  </Slide>
)
