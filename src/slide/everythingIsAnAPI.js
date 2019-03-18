import React from 'react'
import { Heading, Slide, Notes, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="pink"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>You will never look at swagger the same way.</p>
      <p>Very good default developer experience.</p>
    </Notes>
    <Heading size={6} textColor="WHITE" caps fit>
      EVERYTHING IS AN API
    </Heading>
    <List>
      <ListItem>Avoid client-specific code</ListItem>
      <ListItem>Subscriptions allows for real-time notice</ListItem>
      <ListItem>Kind-of replace the webhooks</ListItem>
    </List>
  </Slide>
)
