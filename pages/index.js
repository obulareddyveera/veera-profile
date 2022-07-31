import Head from 'next/head'
import Profile from '../src/containers/profile'

export default function Home() {
  return (
    <>
      <Head>
        <title>Techie | Veera - Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Profile />
    </>
  )
}
