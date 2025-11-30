import Metaseo from "@/components/Metaseo";
import useStore from "@/lib/store";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Blogs({data}:any) {
  const { updateLoading } = useStore();
  const [blogs,setBlogs] = useState([])
  useEffect(() => {
    updateLoading(false);
    if(data?.error){
      setBlogs([])
   }else{
      setBlogs(data?.response)
   }
  },[]);
    return (
      <>
    <Metaseo
     title="Blogs"
     description="See our latest blogs on the smartphone repair services"
     keywords="Latest blogs"
     metadataBase=""
     urlslug={''}
    />
    <section className="bg-white text-gray-900 py-20 px-4">

  {/* HERO SECTION */}
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-medium leading-tight">
      Explore Our Latest <span className="text-pink-600">Blogs & Insights</span>
    </h1>
    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
      Stay updated with expert guides, tech insights, tutorials, news, and trending topics.
    </p>

    {/* Search Bar */}
    <div className="mt-8 flex justify-center">
      <div className="flex w-full max-w-md shadow-lg rounded-full overflow-hidden border border-gray-200">
        <input
          type="text"
          placeholder="Search blogs..."
          className="flex-grow px-4 py-3 text-base focus:outline-none"
        />
        <button className="bg-pink-600 hover:bg-indigo-700 text-white px-6 py-3 text-sm font-semibold transition">
          Search
        </button>
      </div>
    </div>
  </div>

  {/* BLOG LIST */}
  <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {blogs.map((blog: any) => (
      <div
        key={blog._id}
        className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
      >
        <img
          src={blog.cover || "/images.no-preview.png"}
          alt={blog.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                   onError={(e) => {
                    e.currentTarget.src = "/images/no-preview.png";
                }}
        />

        <div className="p-5">
          <h2 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
            {blog.title}
          </h2>
          <p className="text-sm text-gray-600 line-clamp-3 mb-4">
            {blog.summary}
          </p>

          <Link
            onClick={() => updateLoading(true)}
            href={`/blogs/${blog.blogurl}`}
            className="inline-block px-4 py-2 bg-pink-600 text-white rounded-full text-sm font-medium hover:bg-indigo-700 transition"
          >
            Read More →
          </Link>
        </div>
      </div>
    ))}

  </div>


  {/* WHY READ OUR BLOG */}
  <div className="mt-24 bg-gray-50 py-16 px-6 rounded-3xl max-w-6xl mx-auto shadow-inner">

    <h2 className="text-3xl font-bold text-center mb-4">
      Why Read Our Blog?
    </h2>
    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
      We bring you hand-picked knowledge, expert tutorials, and deep insights from multiple industries.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
      
      <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-indigo-700 mb-2">🎯 Expert Knowledge</h3>
        <p className="text-sm text-gray-700">Learn from experts and specialists who share real-world insights.</p>
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-indigo-700 mb-2">📈 Stay Ahead</h3>
        <p className="text-sm text-gray-700">Get the latest updates on tech, business, software, and innovations.</p>
      </div>

      <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition">
        <h3 className="text-xl font-semibold text-indigo-700 mb-2">💡 Practical Tips</h3>
        <p className="text-sm text-gray-700">Step-by-step guides, how-tos, tools, and productivity techniques.</p>
      </div>

    </div>
  </div>


  {/* SMALL CTA SECTION */}
  <div className="max-w-4xl mx-auto mt-20 text-center">
    <h3 className="text-2xl font-bold mb-3">
      Want more insightful content?
    </h3>
    <p className="text-gray-600 mb-6">
      We post weekly updates. Don't miss out on valuable knowledge.
    </p>

    <a
      href="/contact"
      className="inline-block px-8 py-3 bg-pink-600 text-white rounded-full text-lg font-medium hover:bg-indigo-700 transition shadow"
    >
      Contact Us
    </a>
  </div>
</section>
      </>
    )
  }
  export async function getStaticProps() {
    const blogsCall = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs/getblogs`)
    .then((response:any) => {
      if(response.status ===200){
        return {response:response.data.response}
      }else{
        return {error:true}
      }
    }).catch((error:any) => {
       return {error:"Something unexpected happend please try again later"}
    })
    return { props: { data:blogsCall } };
  }