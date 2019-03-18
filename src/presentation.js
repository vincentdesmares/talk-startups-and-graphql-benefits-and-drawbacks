import React from 'react'
import { Deck } from 'spectacle'

import createTheme from 'spectacle/lib/themes/default'
import Intro from './slide/intro'
import 'tachyons/css/tachyons.min.css'
import Questions from './slide/questions'
import Me from './slide/me'
import WhatIsTeamstarter from './slide/whatIsTeamstarter'
import startingAStartup from './slide/startingAStartup'
import sectionLimitedTime from './slide/sectionLimitedTime'
import notJustARFC from './slide/notJustARFC'
import easyToUnderstand from './slide/easyToUnderstand'
import graphiql from './slide/graphiql'
import resolversCanBeAPain from './slide/resolversCanBeAPain'
import generatingYourSchema from './slide/generatingYourSchema'
import openSource from './slide/openSource'
import evolutionReady from './slide/evolutionReady'
import adaptable from './slide/adaptable'
import speedAndBugs from './slide/speedAndBugs'
import heavyTyping from './slide/heavyTyping'
import takingInAccountTheMarket from './slide/takingInAccountTheMarket'
import everythingIsAnAPI from './slide/everythingIsAnAPI'
import useAPIs from './slide/useAPIs'
import performances from './slide/performances'
import beConfident from './slide/beConfident'
import someChangesAreHarderThanOthers from './slide/someChangesAreHarderThanOthers'
import youDoNotHaveToChooseAlone from './slide/youDoNotHaveToChooseAlone'

require('normalize.css')

const theme = createTheme(
  {
    white: 'white',
    black: '#1F2022',
    pink: '#ff00ac',
    blue: '#00dade',
    yellow: '#ffe400',
    grey: '#888888',
    red: '#eb5757'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['fade']} transitionDuration={500} theme={theme}>
        {Intro}
        {Me}
        {WhatIsTeamstarter}
        {startingAStartup}
        {sectionLimitedTime}
        {notJustARFC}
        {easyToUnderstand}
        {graphiql}
        {resolversCanBeAPain}
        {generatingYourSchema}
        {openSource}
        {evolutionReady}
        {performances}
        {adaptable}
        {speedAndBugs}
        {someChangesAreHarderThanOthers}
        {heavyTyping}
        {everythingIsAnAPI}
        {useAPIs}
        {takingInAccountTheMarket}
        {beConfident}
        {youDoNotHaveToChooseAlone}
        {Questions}
      </Deck>
    )
  }
}
