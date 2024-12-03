import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="robots" content="noindex"></meta>
            <title></title>
            <meta charSet="utf-8" />
            <meta name="rating" content="general" />
            <meta name="author" content="www" />
            <meta name="expires" content="never" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="language" content="english" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta name="distribution" content="global" />
        </Head>
    );
};

Meta.defaultProps = {
    title: "Medic specialist - GUMA CONSTANTIN",
    keywords: "Strada Pantelimon Halipa 14, Iași 700661",
    description: "Strada Pantelimon Halipa 14, Iași 700661",
};

export default Meta;
