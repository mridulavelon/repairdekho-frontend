import Head from 'next/head';
import { Metadata } from 'next';
import moment from 'moment';


interface MetaseoProps {
    title: string;
    description: string;
    keywords: string;
    urlslug?:string;
    schemaid?:string;
    datepublished?:string;
    dateupdated?:string;
    datecreated?:string;
    metadataBase?:string;
}


interface pageschema{
  "@context":string;
  "@type": string;
   headline: string;
   author: {
     "@type": string;
      name: string;
   },
   description?: string;
   datePublished?: string;
   dateModified?: string;
   dateCreated?:string;
} 

const Metaseo:any = ({ title,description,keywords,urlslug,schemaid,datepublished,dateupdated,datecreated,metadataBase } :MetaseoProps) =>  {
    const metadata: Metadata = {
        title: title,
        description: description,
        keywords: keywords,
      };
    const schemaJson : pageschema =  {
      "@context": "https://schema.org/",
      "@type": "Mobile repair service",
      "headline": title,
      "author": {
        "@type": "Person",
        "name": "Repair Dekho"
      },
       "description": description,
      "datePublished": moment(datepublished).format("YYYY-MM-DD"),
      "dateModified": moment(dateupdated).format("YYYY-MM-DD"),
      "dateCreated":moment(datecreated).format("YYYY-MM-DD")
    }  

  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="Keywords" content={keywords} />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}${urlslug}`} />
        <meta property="og:title" content={title}/>
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Trip To Temples" />
        <meta property="og:image" content={metadataBase}/>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content="undefined" />
        <meta property="article:modified_time" content="undefined" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description}/>
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@repairdekho" />
        <meta name="twitter:image" content={metadataBase} />
        <meta name="twitter:creator" content="@repairdekho" />
        <meta property="fb:app_id" content="" />
        <meta httpEquiv="Expires" content="30" />
        <meta name="theme-color" content="#fe5246" />
        <meta name="msapplication-TileColor" content="#8cc641" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Cache-control" content="public" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="classification" content="Ecommerce" />
        <meta name="GoogleBot" content="Index, Follow" />
        <meta name="YahooSeeker" content="Index, Follow" />
        <meta name="MSNBOT" content="Index, Follow" />
        <meta name="author" content="Repair Dekho" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="" />
        <meta name="language" content="English" />
        <meta name="country" content="India" />
        <meta name="distribution" content="Global" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.png"/>
        <meta name="google-site-verification" content="2sdhb13MYKTv-0bcepAVo1N8782u4mid2DlzqybzXT8" />
        <meta name="google-site-verification" content="WGBfKb3jha_r-d4ajJL7z5FbSLBcYjrB3eJQxh5S5ok" />
        <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
        <script 
         id={schemaid}
         type="application/ld+json"
         dangerouslySetInnerHTML={{
           __html: JSON.stringify(schemaJson),
         }}
        />
    </Head>
  )
}



export default Metaseo;