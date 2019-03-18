import React from 'react'
import { Heading, Slide, Text, Notes } from 'spectacle'

export default (
  <Slide
    transition={['fade']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <img
      src="assets/images/logo-cut.svg"
      alt="Teamstarter logo"
      className="fixed"
      style={{
        top: 100,
        right: 100,
        width: '30%',
        opacity: '0.2'
      }}
    />
    <Notes>
      <p>WHO ALREADY USE GRAPHQL IN PROD?</p>
      <p>
        In this postmortem we will go through our experience with GraphQL as a
        startup.
      </p>
    </Notes>
    <Heading size={1} caps fit textColor="black">
      STARTUPS
    </Heading>
    <Heading size={1} caps fit textColor="black">
      AND GRAPHQL
    </Heading>
    <div style={{ height: 50 }}> </div>
    <Text textColor="pink" fit bold>
      Benefits & Drawbacks
    </Text>
    <div style={{ height: 50 }}> </div>
    <Text textColor="blue" fit bold>
      A postmortem from teamstarter.co
    </Text>
  </Slide>
)
