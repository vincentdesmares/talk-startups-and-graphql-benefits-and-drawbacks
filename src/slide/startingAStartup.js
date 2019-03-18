import React from 'react'
import { Slide, Heading, Text } from 'spectacle'
import Warning from '../warning'

export default (
  <Slide
    transition={['zoom']}
    bgColor="blue"
    progressColor="black"
    controlColor="black"
  >
    <Warning />
    <Heading fit textColor="black" caps>
      STARTING A STARTUP
    </Heading>
    <Text>NO RESOURCES = NO LACK OF CHALLENGES</Text>
    <Text>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NO PAST = EVERYTHING TO
      SETUP
    </Text>
  </Slide>
)
