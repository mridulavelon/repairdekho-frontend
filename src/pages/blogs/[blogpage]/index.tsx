import Metaseo from "@/components/Metaseo";
import useStore from "@/lib/store";
import axios from "axios";
import moment from "moment"
import Link from "next/link"
import { useEffect } from "react";

export default function Blogpage({ data }:any) {
    const { updateLoading } = useStore();
    useEffect(() => {
     updateLoading(false);
    },[])
    return (
        <>
         <Metaseo
           title={data.title}
           description={data.summary}
           keywords={data.title}
           metadataBase=""
           urlslug={data.blogurl}
          />
           <section className="bg-white">
        <div className="w-full">
          <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${data.cover})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full px-8 md:px-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">{data.title}</h2>
              <div className="text-gray-200 text-center">
                <span>{moment(new Date(data.timestamp)).format('MMMM Do YYYY')}</span>
              </div>
            </div>
          </div>
          <div className="relative z-20 px-8 md:px-16 py-8 md:py-16 bg-white mx-auto max-w-screen-lg">
            <div className="mb-8 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.content }}></div>
            <div className="border-t-2 border-gray-200 my-8"></div>
            <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            <img 
             src="/images/company-logo.png" 
             alt="brand-logo" 
             className="w-32 mx-auto md:mx-0" 
             />
            <div className="text-center md:text-left">
              <h5 className="text-lg font-semibold text-gray-800">Repair Dekho Team</h5>
              <p className="text-gray-600">
              The content of this blog has been created and carefully reviewed by the esteemed team at RepairDekho, with the sole purpose of providing valuable guidance and sharing insights on the importance of mobile repair services. Our objective is to assist users in making informed decisions when repairing or maintaining their mobile devices. Our expertly curated information aims to empower our readers with the knowledge they need to protect their valuable assets and ensure the longevity and optimal performance of their devices.</p>
            </div>
          </div>
            <div className="mt-8 text-center">
              <Link href="/blogs" className="inline-block bg-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
                Check more
              </Link>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
export async function getServerSideProps(context : any) {
  const { blogpage } = context.params;
   try{
   const payloadData = {
    'blogid':blogpage
  }
  const blogCall = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/blogs/getblog`,payloadData)
   .then(async(response) => {
     if(response.status === 201){
       return response.data.blog;
     }
   })
   .catch((error) => {
    return { notFound: true };
   })
   return { props: { data: blogCall } };
   }catch(error){
    return { notFound: true };
   }
 }  