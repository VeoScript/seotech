import React from 'react'
import NextNprogress from 'nextjs-progressbar'

const NextProgress: React.FC = () => {
  return (
    <NextNprogress
      color="#00BFFE
      linear-gradient(
        to right,
        #00BFFE,
        #01F7F7,
        #00BFFE,
        #01F7F7,
        #00BFFE
      );"
      startPosition={0.3}
      stopDelayMs={200}
      height={5}
      showOnShallow={false}
      options={{ easing: 'ease', speed: 500 }}
    />
  )
}

export default NextProgress