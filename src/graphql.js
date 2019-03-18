import React from 'react'

export default function Graphql({ style, className = '' }) {
  return (
    <div>
      <style>{`
    .graphqlLogo .outerPath {
      opacity: 0;
      stroke-dashoffset: 450;
      stroke-dasharray: 450;
      animation: appearOuterPath 1.2s 200ms ease-out forwards;
    }
    .graphqlLogo .innerPath {
      opacity: 0;
      stroke-dashoffset: 390;
      stroke-dasharray: 390;
      animation: appearInnerPath 400ms 1200ms ease-out forwards;
    }
    .dot1, .dot2, .dot3, .dot4, .dot5, .dot6 {
      opacity: 0;
    }
    .dot1 {
      animation: appearDots 400ms 200ms ease-out forwards;
    }
    .dot2 {
      animation: appearDots 400ms 400ms ease-out forwards;
    }
    .dot3 {
      animation: appearDots 400ms 600ms ease-out forwards;
    }
    .dot4 {
      animation: appearDots 400ms 800ms ease-out forwards;
    }
    .dot5 {
      animation: appearDots 400ms 1000ms ease-out forwards;
    }
    .dot6 {
      animation: appearDots 400ms 1200ms ease-out forwards;
    }

  @keyframes appearDots {
    0% {
      opacity: 0;
      transform: scale(0.3) rotateX(50deg) rotateY(100deg) rotateZ(100deg);
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
  }

  @keyframes appearOuterPath {
    0% {
      stroke-dashoffset: 445;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  @keyframes appearInnerPath {
    0% {
      stroke-dashoffset: 390;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }

  `}</style>
      <svg
        className={`graphqlLogo ${className}`}
        style={{ width: '100%', ...style }}
        viewBox="0 0 310 266"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="310" height="266" fill="white" />
        <path
          className="outerPath"
          d="M215 86.5L150 50L85.5 86.5V163.5L150 199.5L215 163.5V86.5Z"
          stroke="#E10098"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="innerPath"
          d="M85.5 163.5L150 50L215 163.5H85.5Z"
          stroke="#E10098"
          strokeWidth="10"
        />
        <circle className="dot1" cx="85" cy="88" r="16" fill="#E10098" />
        <circle className="dot2" cx="85" cy="164" r="16" fill="#E10098" />
        <circle className="dot3" cx="150" cy="202" r="16" fill="#E10098" />
        <circle className="dot4" cx="216" cy="164" r="16" fill="#E10098" />
        <circle className="dot5" cx="216" cy="88" r="16" fill="#E10098" />
        <circle className="dot6" cx="150" cy="50" r="16" fill="#E10098" />
      </svg>
    </div>
  )
}
