// import App from 'next/app'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style global jsx>{`
        body {
          font-family: "Rubik","Arial",sans-serif;
          font-weight: 300;
          font-size: 16px;
          color: rgb(200, 197, 192); /* light #5e5e5e */
          margin-bottom: 90px;
          position: relative;
          min-height: 100vh;
        }
        h1, h1 a, h2, h2 a, h3, h3 a, h4, h4 a, h5, h5 a, h6, h6 a {
          font-weight: 400;
          color: #191a1d;
        }
        h1, .h1 {
          font-size: 4.5rem;
        }
        a {
          text-decoration: none;
          color: #fff;
        }
        ul {
          list-style: none;
          margin: 0;
        }
        *,*:before,*:after {
          margin: 0;
          padding: 0;
          outline: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          border: 0;
          font-size: 100%;
          line-height: 100%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility
        }
        .grid {
          display: flex;
          flex-wrap: wrap;
        }
        .grid__col {

        }
        .grid__col--1 { width: calc(100%*1/12); }
        .grid__col--2 { width: calc(100%*2/12); }
        .grid__col--3 { width: calc(100%*3/12); }
        .grid__col--4 { width: calc(100%*4/12); }
        .grid__col--5 { width: calc(100%*5/12); }
        .grid__col--6 { width: calc(100%*6/12); }
        .grid__col--7 { width: calc(100%*7/12); }
        .grid__col--8 { width: calc(100%*8/12); }
        .grid__col--9 { width: calc(100%*9/12); }
        .grid__col--10 { width: calc(100%*10/12); }
        .grid__col--11 { width: calc(100%*11/12); }
        .grid__col--12 { width: calc(100%*12/12); }
        .spacing-small-bottom {
          padding-bottom: 60px;
        }
        .anim {
          transition: all ease 0.45s;
        }
        .anim-down {
          position: relative;
          top: -30px;
        }
        .anim-up {
          position: relative;
          top: 30px;
        }
        .anim-fade {
          opacity: 0;
        }
        .anim-up.loaded,
        .anim-down.loaded {
          top: 0px;
        }
        .anim-fade.loaded {
          opacity: 1;
        }
        @media screen and (max-width: 1280px) and (min-width: 671px) {
          h1, .h1 {
            font-size: 3.875rem;
          }
          h2, .h2 {
            font-size: 3rem;
          }
          .spacing-small-bottom {
            padding-bottom: 50px;
          }
        }

        @media screen and (max-width: 670px) {
          .grid__col {
            width: 100%;
          }
          h1, .h1 {
            font-size: 2.5rem;
          }
          h2, .h2 {
            font-size: 1.875rem;
          }
          .spacing-small-bottom {
            padding-bottom: 35px;
          }
        }
        
      `}</style>
    </Layout>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp