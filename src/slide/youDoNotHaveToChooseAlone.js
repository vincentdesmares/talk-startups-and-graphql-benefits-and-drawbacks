import React from 'react'
import { Heading, Slide, Notes, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="pink"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>
        Last point before wrapping up. We did not choose GraphQL just by reading
        blog posts.
      </p>
    </Notes>
    <Heading size={1} caps lineHeight={1} fit textColor="white">
      YOU DO NOT HAVE TO
    </Heading>
    <Heading size={1} caps lineHeight={1} fit textColor="blue">
      CHOOSE ALONE
    </Heading>
    <List>
      <ListItem>"city-o", the CTO club</ListItem>
      <ListItem>Find a startup studio (we're part of Matters)</ListItem>
      <ListItem>Go to meetups! (You got this one already)</ListItem>
    </List>
  </Slide>
)
