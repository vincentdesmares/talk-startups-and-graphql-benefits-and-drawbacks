import React from 'react'
import { Slide, Heading, List, ListItem, Notes } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="white"
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
      src="assets/images/blocks.svg"
    />

    <Notes>
      <p>We'll now talking about OTHERS APIs.</p>
      <p>You can compose them with the schema stitching</p>
      <p>
        It "should" be nice but it's difficult to find good ones right now.
        Through it becomes better everyday.
      </p>
    </Notes>
    <Heading fit textColor="pink" caps>
      They said to use APIs
    </Heading>
    <List>
      <ListItem>Schema stitching</ListItem>
      <ListItem>Regroup your microservices APIs</ListItem>
      <ListItem>Include other SaaS APIs in yours</ListItem>
      <ListItem>AWS Appsync</ListItem>
      <ListItem textColor="red" bold>
        Yet, it's a bit early for it
      </ListItem>
    </List>
  </Slide>
)
