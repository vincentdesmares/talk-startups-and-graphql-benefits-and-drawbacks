import React from 'react'
import { Heading, Slide, Notes, Text, Appear } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="yellow"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>
        If you have a good idea, it's only a matters of time until your
        competitors try to race you.
      </p>
    </Notes>
    <Heading size={1} caps lineHeight={1} fit textColor="black">
      LIMITED ... EVERYTHING
    </Heading>
    <Heading size={1} caps lineHeight={1} fit textColor="red">
      TIME, MONEY, SUPPORT, MENTAL SPACE
    </Heading>
    <Appear>
      <Text fit bold textColor="pink">
        Delivering value is priority N1
      </Text>
    </Appear>
  </Slide>
)
