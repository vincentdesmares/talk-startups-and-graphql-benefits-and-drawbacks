import React from 'react'
import { Heading, Slide, Notes, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="red"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>Only on type of entity</p>
    </Notes>
    <Heading size={6} textColor="WHITE" caps fit>
      WE'VE SEEN SHORTER
    </Heading>
    <Heading size={6} textColor="WHITE" caps fit>
      "HELLO WORLD"
    </Heading>
    <Heading size={6} textColor="BLACK" caps fit>
      RESOLVERS CAN BE A PAIN
    </Heading>
    <List textColor="white">
      <ListItem>With types comes type definition...</ListItem>
      <ListItem>No more ".get('/foo')"</ListItem>
      <ListItem>Spend time setting up good toolings</ListItem>
      <ListItem>Generate the basics!</ListItem>
    </List>
  </Slide>
)
