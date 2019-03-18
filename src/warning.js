import React from 'react'

export default function Warning() {
  return (
    <div>
      <style>{`
  @keyframes resetPosition {
  0% {
    transform: translateX(100px) translateY(100px);
  }
  100% {
    transform: translateX(0px) translateY(0px);
  }
}
  `}</style>
      <img
        className="absolute z-0 o-20"
        alt="warning"
        style={{
          width: 600,
          right: -100,
          bottom: -60,
          animation: 'resetPosition 1s ease-out'
        }}
        src="assets/images/warning.svg"
      />
    </div>
  )
}
