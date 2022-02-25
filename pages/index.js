import Head from 'next/head';
//import SimpleAccordion from '../components/Accordination';

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
     
      <h1>welcome to next</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=7`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
