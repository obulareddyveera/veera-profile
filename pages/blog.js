import Head from 'next/head';
import Blog from '../src/containers/blog'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Techie | Veera - Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Blog data={props.mediumPostList} />
    </>
  )
}

export async function getServerSideProps(context) {
  const mediumPost = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@obulareddyveera';
  const data = await fetch(mediumPost, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((resp) => resp.json());


  return {
    props: { mediumPostList: data }, // will be passed to the page component as props
  }
}
