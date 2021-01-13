import NavBar from "./Nav";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

const Layout = (props) => (
  <div className='flex flex-col h-screen justify-between bg-white'>
    <Head>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta name='msapplication-TileColor' content='#ffc40d' />
      <meta name='msapplication-config' content='/browserconfig.xml' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
    <NavBar />
    <div className='mb-auto'>{props.children}</div>
    <ToastContainer />
    <Footer />
  </div>
);

export default Layout;
