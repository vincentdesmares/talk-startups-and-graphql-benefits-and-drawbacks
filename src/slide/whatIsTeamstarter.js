import React from 'react'
import { Heading, Slide, Text, Notes } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="pink"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Organization allow monthly funds</p>
      <p>Each person received it continuously</p>
      <p>Anyone can create and back a project</p>
      <p>
        Arcade box / Christmas decorations / Raclette party / Board games /
        Conferences
      </p>
      <p>Launched last September but started the V1 in the end of 2017.</p>
    </Notes>
    <Heading size={1} caps lineHeight={1} textColor="white" fit>
      What's teamstarter?
    </Heading>
    <Text textColor="black" fit bold>
      It's like kickstarter in your organization.
    </Text>
    <Text textColor="white" bold fit>
      Your budget, your project, your culture.
    </Text>
  </Slide>
)
