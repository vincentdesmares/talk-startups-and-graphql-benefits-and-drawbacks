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
      <p>One thing that appeared to me after months of dev.</p>
      <p>Is how resilient my app was.</p>
      <p>One element cannot be fetched? You app doesn't entierelly die.</p>
      <p>Yet errors can be tricky in another way.</p>
    </Notes>
    <Heading size={6} textColor="BLACK" caps fit>
      WITH DELIVERING A LOT
    </Heading>
    <Heading size={6} textColor="pink" caps fit>
      COMES A LOT OF BUGS
    </Heading>
    <List>
      <ListItem>Everybody has bugs</ListItem>
      <ListItem>The question is how they impact your app?</ListItem>
      <ListItem>Partial errors are one of my favorite feature</ListItem>
      <ListItem>Only some nodes can be in error</ListItem>
      <ListItem>Allows nice error management</ListItem>
    </List>
  </Slide>
)
