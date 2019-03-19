import React from 'react'
import { Heading, Slide, Text, Notes } from 'spectacle'
import Face from '../face'

function random(i) {
  var x = Math.sin(i) * 1000
  return x - Math.floor(x)
}

export default (
  <Slide
    transition={['slide']}
    bgColor="white"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>
        Matters: product studio (+100 produits) / startup studio (Teamstarter)
      </p>
      <p>Link: what's teamstarter?</p>
    </Notes>
    {/** Generate your own face here : https://ondras.github.io/primitive.js/ **/}
    <style>
      {/** Replace 194 with the number of triangles you picked. **/}
      {Array.apply(null, Array(194))
        .map(function(x, i) {
          return i
        })
        .map(
          i => `
      .face :nth-child(${i}) {
         position: relative;
         animation: transform${i} 800ms ease-out;
      }
      @keyframes transform${i} {
        0% {
          transform: translateX(${random(i) *
            400 *
            (i % 2 === 0 ? 1 : -1)}px) translateY(${random(i) *
            400 *
            (i % 3 === 0 ? 1 : -1)}px);
        }
        100% {
          transform: translateX(0px) translateY(0px);
        }
      }`
        )}
    </style>
    <Face
      className="fixed"
      style={{
        bottom: '-45%',
        right: '-15%',
        width: '45%'
      }}
    />
    <Heading size={1} caps lineHeight={1} textColor="black">
      I'm Vincent DESMARES
    </Heading>
    <Text textColor="pink" fit style={{ marginTop: 50 }}>
      Working @<b>Matters.tech</b> for 8 years! <br />
      As Dev, Lead Dev and Project Manager.
    </Text>
    <Text textColor="blue" style={{ marginTop: 50 }}>
      Now CTO @ Teamstarter for 1 year.
    </Text>
  </Slide>
)
