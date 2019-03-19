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
      src="assets/images/box.svg"
      alt="Teamstarter logo"
      className="fixed"
      style={{
        bottom: 100,
        right: 100,
        width: '15%'
      }}
    />
    <Notes>
      <p>My first point is that you are not going to just adopt a new RFC.</p>
      <p>
        GraphQL was matured for 3 years (2012/2015) by Facebook before being
        released.
      </p>
    </Notes>
    <Heading size={6} textColor="pink" caps fit>
      Not just a RFC
    </Heading>
    <Heading size={6} textColor="black" caps fit>
      it comes with a bunch of stuff
    </Heading>
    <List>
      <ListItem>A good documentation</ListItem>
      <ListItem>A server</ListItem>
      <ListItem>A client</ListItem>
      <ListItem>And a debug tool (GraphiQL)</ListItem>
    </List>
  </Slide>
)
