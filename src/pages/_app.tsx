import type { AppProps } from 'next/app'
import GlobalCSS from '../styles/Global-CSS'
import { Inter } from 'next/font/google'
import Header from '../components/header'
import Footer from '../components/footer'
import { config } from 'dotenv'
config();

const inter = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalCSS />
      <Header />
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
