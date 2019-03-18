import React from 'react'
import { Heading, Slide, Notes, List, ListItem } from 'spectacle'
import Warning from '../warning'

export default (
  <Slide
    transition={['zoom']}
    bgColor="red"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Warning />
    <Notes>
      <p>Only on type of entity</p>
    </Notes>
    <Heading size={6} textColor="WHITE" caps fit>
      SOME CHANGES FROM REST
    </Heading>
    <Heading size={6} textColor="WHITE" caps fit>
      ARE HARDER THAN OTHERS
    </Heading>
    <List textColor="white">
      <ListItem>No full use of HTTP (* is a POST)</ListItem>
      <ListItem>Difficult to cache without proper tooling</ListItem>
      <ListItem>Setup your logs correctly (* is a 200)</ListItem>
    </List>
  </Slide>
)
