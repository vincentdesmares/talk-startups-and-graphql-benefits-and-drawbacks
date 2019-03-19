import React from 'react'
import { Heading, Slide, Notes, Text } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="yellow"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Please everyone, lover of hatters, chill.</p>
    </Notes>
    <Heading size={1} caps lineHeight={1} fit textColor="black">
      USE WHAT YOU LIKE
    </Heading>
    <Heading size={1} caps lineHeight={1} fit textColor="pink">
      LET'S TONE DOWN THE RHETORIC{' '}
      <span role="img" aria-label="heart">
        💖
      </span>
    </Heading>
    <Text>
      ‘Great developers — not programming languages — build great
      products.’&nbsp;
      <italic>
        <small>Kevin Dewalt</small>
      </italic>
    </Text>
  </Slide>
)
