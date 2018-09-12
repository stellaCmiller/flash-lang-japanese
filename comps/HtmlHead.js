import Head from 'next/head';

export default () => (
    <Head>
        <title>FlashLang Japanese</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

        {/*Bootstrap, will eventually be removed and be replaced with React Bootstrap*/}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />

        {/*Google fonts baby*/}
        <link href="https://fonts.googleapis.com/css?family=Fugaz+One|Merriweather+Sans" rel="stylesheet"/>

        {/*Favicon, courtesy of favicon.ico*/}
        <link rel="icon" href="../assets/flashFav.ico" type="image/x-icon" />

        {/*Custom Styles, primarily for media queries*/}
        <link rel="stylesheet" href="../assets/styles/study.css" />
        
    </Head>
)