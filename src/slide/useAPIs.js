import React from 'react'
import { Slide, Heading, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
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
