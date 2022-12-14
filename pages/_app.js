import Layout from "../components/Layout";
import "../styles/globals.css";
import "../styles/moviedetail.css";
import Script from 'next/script'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />{" "}
           <Script
		id="bidvertizer-add"
  dangerouslySetInnerHTML={{
    __html: `<!-- Bidvertiser2077281 -->`,
  }}
/>

    </Layout>
   
  );
}

export default MyApp;
