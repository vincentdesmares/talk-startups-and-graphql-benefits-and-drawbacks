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
    <Notes>Types are often already part of your server code.</Notes>
    <img
      src="assets/images/factory.svg"
      alt="Teamstarter logo"
      className="fixed"
      style={{
        bottom: 100,
        right: 100,
        width: '20%'
      }}
    />
    <Heading size={6} textColor="pink" caps fit>
      GENERATE YOUR SCHEMA
    </Heading>
    <Heading size={6} textColor="black" caps fit>
      CRUD operations are a solved problem
    </Heading>
    <List>
      <ListItem>graphql-sequelize-generator</ListItem>
      <ListItem>graphql-code-generator</ListItem>
      <ListItem>graphql-cli</ListItem>
      <ListItem>json-graphql-server</ListItem>
    </List>
  </Slide>
)
