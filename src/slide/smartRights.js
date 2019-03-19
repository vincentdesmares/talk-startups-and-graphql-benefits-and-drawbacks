import React from 'react'
import { Heading, Slide, Notes } from 'spectacle'
import Warning from '../warning'

export default (
  <Slide
    transition={['zoom']}
    bgColor="red"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Warning />
    <Notes>
      <p>Resolvers must take in account the context they are called with.</p>
    </Notes>
    <Heading size={6} textColor="WHITE" caps fit>
      "SMART" RIGHTS
    </Heading>
    <Heading size={6} textColor="WHITE" caps fit>
      YOUR RESOLVER MUST BE CONTEXT DEPENDENT
    </Heading>
    <img
      src="assets/images/rights.svg"
      alt="Smart rights"
      className="w-100 mt5"
    />
  </Slide>
)
