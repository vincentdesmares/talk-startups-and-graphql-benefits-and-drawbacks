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
      PERFORMANCES ISSUES
    </Heading>
    <Heading size={6} textColor="WHITE" caps fit>
      ARE GRAPHQL BIGGEST PROBLEM
    </Heading>
    <List textColor="white">
      <ListItem>Yes it avoids overfetch, but...</ListItem>
      <ListItem>"Infinite" query complexity</ListItem>
      <ListItem>Query time issues</ListItem>
      <ListItem>Rights must be "smart"</ListItem>
      <ListItem>Query batching ? Facebook dataloader</ListItem>
      <ListItem>Keep performances in mind at all times</ListItem>
    </List>
  </Slide>
)
