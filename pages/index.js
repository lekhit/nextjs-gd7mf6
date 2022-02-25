import Head from 'next/head';
import SimpleAccordion from '../components/Acc';
import Stack from '@mui/material/Stack';

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Stack
        sx={{
          p: 20,
          
        }}
      >
        {articles.map((article, index) => (
          <SimpleAccordion
            key={index}
            id={article.id}
            title={article.title}
            body={article.body}
          />
        ))}
      </Stack>

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
