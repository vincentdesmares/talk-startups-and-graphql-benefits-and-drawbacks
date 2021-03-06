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
    <img
      className="absolute z-0"
      alt="warning"
      style={{
        width: '25%',
        right: 150,
        bottom: 100
      }}
      src="assets/images/team.svg"
    />
    <Notes>
      <p>My first of my advice not really related to the tech itself.</p>
    </Notes>
    <Heading size={6} textColor="blue" caps fit>
      Taking the market in account
    </Heading>
    <List style={{ marginBottom: 200 }}>
      <ListItem>A tech is nothing without developers</ListItem>
      <ListItem>Check your local market</ListItem>
    </List>
  </Slide>
)
