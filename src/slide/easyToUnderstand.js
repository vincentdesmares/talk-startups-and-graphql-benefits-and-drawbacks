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
    <Heading size={6} textColor="pink" caps fit>
      NICE LEARNING CURVE
    </Heading>
    <Heading size={6} textColor="WHITE" caps fit>
      FOR SUCCESSFUL ONBOARDINGS
    </Heading>
    <List>
      <ListItem>Well documented https://graphql.org/learn</ListItem>
      <ListItem>Intuitive</ListItem>
      <ListItem>Visual</ListItem>
      <ListItem>IMHO Being able to grow a team is N2 prio.</ListItem>
    </List>
  </Slide>
)
