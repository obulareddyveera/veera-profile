import Blog from '../src/containers/blog'

export default function Home(props) {
  return (
    <div>
      <Blog data={props.mediumPostList} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const mediumPost = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@obulareddyveera';
  const data = await fetch(mediumPost, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((resp) => resp.json());


  return {
    props: {mediumPostList: data}, // will be passed to the page component as props
  }
}
