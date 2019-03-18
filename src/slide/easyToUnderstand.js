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
    <img
      className="absolute z-0"
      alt="warning"
      style={{
        width: 300,
        right: 100,
        bottom: 100
      }}
      src="assets/images/learning.svg"
    />
    <Notes>
      <p>
        A technologie can be nice, but if it's too difficult to onboard you can
        have a real problem of turnover.
      </p>
      <p>
        The fastest one learn a new technology, the more value he brings to your
        project before leaving the company.
      </p>
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
