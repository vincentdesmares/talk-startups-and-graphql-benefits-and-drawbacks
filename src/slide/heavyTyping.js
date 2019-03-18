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
      <p>
        We talked about the problem of heavy typing and how it can adds a few
        minutes to create a new type.
      </p>
      <p>But this will allow to win a few hours later.</p>
      <p>
        As everything is typed, marvelous, cash and refresh mechanism can be
        easily setup (3-4 lines of code).
      </p>
    </Notes>
    <img
      className="absolute z-0"
      alt="react"
      style={{
        width: '20%',
        right: 80,
        bottom: 80
      }}
      src="assets/images/react.svg"
    />
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
