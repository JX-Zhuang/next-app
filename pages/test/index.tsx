import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Test({ serverSideProps, staticProps, stars }) {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const handlerClick = () => {
    router.push('/posts');
  };
  return (
    <div>
      <div>count:{count}</div>
      <div>{serverSideProps}</div>
      <div>{staticProps}</div>
      <div>{stars}</div>
      <button onClick={handlerClick}>click</button>
      <Link href="/posts">
        this page!
      </Link>
    </div>
  )
}
const getData = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const serverSideProps = await res.json();
  return JSON.stringify(serverSideProps, null, 2);
}
// export async function getServerSideProps() {
//   const data = await getData();
//   return { props: { serverSideProps: data } };
// };
export async function getStaticProps() {
  const data = await getData();
  return { props: { staticProps: data } }
}

// Test.getInitialProps = async (ctx) => {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const json = await res.json()
//   return { stars: json.stargazers_count }
// }