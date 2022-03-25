import '../styles/globals.css'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'

const progress = new ProgressBar({
  size:3,
  color:'#C8494D',
  className:'z-50',
  delay:100,
})

// The nextjs router fires off certain events when we change routes, we want our progress bar to start at that time.
Router.events.on('routeChangeStart',progress.start)
Router.events.on('routeChangeComplete',progress.finish)
Router.events.on('routeChangeError',progress.finish)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
