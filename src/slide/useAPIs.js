import React from 'react'
import { Slide, Heading, List, ListItem } from 'spectacle'

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
