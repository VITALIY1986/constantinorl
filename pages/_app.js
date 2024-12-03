import Router from "next/router";
import NProgress from "nprogress";
import Layout from "../components/Layout";

// Import styles
import "../styles/globals.scss";
import "../styles/globals.css";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default App;
