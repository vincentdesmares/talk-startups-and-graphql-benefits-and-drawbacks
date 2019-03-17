import React from 'react'
import { Heading, Slide, Notes, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="blue"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Only on type of entity</p>
    </Notes>
    <Heading size={6} textColor="BLACK" caps fit>
      HEAVY TYPING
    </Heading>
    <Heading size={6} textColor="pink" caps fit>
      Can have unattended benefits
    </Heading>
    <List>
      <ListItem>Fine client side caching mechanism</ListItem>
      <ListItem>Refresh related components on fetch</ListItem>
    </List>
  </Slide>
)
