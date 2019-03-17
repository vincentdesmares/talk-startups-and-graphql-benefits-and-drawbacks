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
      <p>Only on type of entity</p>
    </Notes>
    <Heading size={6} textColor="black" caps fit>
      EVOLUTION READY
    </Heading>
    <Heading size={6} textColor="WHITE" caps fit>
      PIVOT PIVOT PIVOT
    </Heading>
    <List>
      <ListItem>"ask-what-you-need" for each call</ListItem>
      <ListItem>No versioning, field deprecation</ListItem>
      <ListItem>Reduce the needs for custom endpoints</ListItem>
    </List>
  </Slide>
)
