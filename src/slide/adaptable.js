import React from 'react'
import { Heading, Slide, Notes, Text } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="white"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Only on type of entity</p>
    </Notes>
    <Heading size={6} textColor="pink" caps fit>
      ADAPTABLE
    </Heading>
    <Text>File upload, even on GraphQL!</Text>
    <Text>(and it's not that hard)</Text>
  </Slide>
)
