import React from 'react'
import { Heading, Slide, Notes, List, ListItem } from 'spectacle'

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
    <Heading size={6} textColor="blue" caps fit>
      Taking the market in account
    </Heading>
    <List>
      <ListItem>A tech is nothing without developers</ListItem>
      <ListItem>Check your local market</ListItem>
    </List>
  </Slide>
)
