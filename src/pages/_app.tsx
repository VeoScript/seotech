import React from 'react'
import type { AppProps } from 'next/app'
import NextProgress from '~/lib/NextProgressbar'
import '~/styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <NextProgress />
      <Component {...pageProps} />
    </React.Fragment>
  )
}
export default MyApp