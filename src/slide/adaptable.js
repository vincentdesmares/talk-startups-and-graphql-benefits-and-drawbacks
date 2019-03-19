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
      <p>
        I was scared that I could not do "Everything" like I was doing before
        with GraphQL.
      </p>
      <p>Truth is that I haven't find a use case that could not be met.</p>
      <p>At least at my scale I'm very happy.</p>
    </Notes>
    <Heading size={6} textColor="pink" caps fit>
      HACKABLE
    </Heading>
    <Text>File upload, even on GraphQL!</Text>
    <Text>(and it's not that hard)</Text>
  </Slide>
)
