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
      A FLEXIBLE API
    </Heading>
    <Heading size={6} textColor="blue" caps fit>
      IS AN EASY TO SELL API
    </Heading>
    <List>
      <ListItem>Avoid customer specific code</ListItem>
      <ListItem>Subscriptions allows for real-time notice</ListItem>
      <ListItem>And kind-of replace WebHooks</ListItem>
    </List>
  </Slide>
)
