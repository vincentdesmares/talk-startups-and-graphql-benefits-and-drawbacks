import React from 'react'
import { Slide, Heading, Text, Notes } from 'spectacle'
import Warning from '../warning'

export default (
  <Slide
    transition={['zoom']}
    bgColor="blue"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>A lot of challenges</p>
      <p>
        In this talk we will have an overview of those linked to the products.
      </p>
      <p>Launched last September but started the V1 in the end of 2017.</p>
    </Notes>
    <Warning />
    <Heading fit textColor="black" caps>
      STARTING A STARTUP
    </Heading>
    <Text>NO PAST = EVERYTHING TO SETUP</Text>
  </Slide>
)
