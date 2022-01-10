import { Menu } from '../components/Menu';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
