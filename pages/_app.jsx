import Layout from '../containers/Layout';
import '../styles/globals.css';
import '../styles/theme.css';
import { ThemeProvider } from '../context/ThemeProvider';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
