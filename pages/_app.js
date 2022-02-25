import '../styles/globals.css';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
