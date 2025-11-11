import Metaseo from "@/components/Metaseo";
import useStore from "@/lib/store";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

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
<section className="bg-gradient-to-br from-black via-purple-900 to-black text-white py-20 px-4 relative overflow-hidden">

  {/* Header */}
  <div className="text-center mb-6">
    <h1 className="text-4xl font-bold">
      {blogs.length > 0 ? "📝 Latest Blog Posts" : "🚫 No blogs found"}
    </h1>

    {/* Search Bar */}
    <div className="mt-6 flex justify-center py-4">
      <div className="flex w-full max-w-md">
        <input
          type="text"
          placeholder="Search blogs..."
          className="flex-grow px-4 py-2 rounded-l-full text-gray-800 focus:outline-none"
        />
        <button className="bg-pink-700 hover:bg-indigo-700 px-4 py-2 rounded-r-full transition-colors">
          Submit
        </button>
      </div>
    </div>
  </div>

  {/* Blog List */}
  <div className="container mx-auto grid grid-cols-1 gap-6">
    {blogs.map((blog: any) => (
      <div
        key={blog._id}
        className="flex bg-white text-gray-900 rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
      >
        <img
          src={blog.cover}
          alt={blog.title}
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-indigo-800 mb-1 truncate">{blog.title}</h2>
          <p className="text-sm text-gray-600 line-clamp-3">{blog.summary}</p>
          <Link
            onClick={() => updateLoading(true)}
            href={`/blogs/${blog.blogurl}`}
            className="inline-block mt-3 bg-pink-700 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-700 transition"
          >
            Read More →
          </Link>
        </div>
      </div>
    ))}
  </div>


  <div className="mt-20 bg-white text-gray-800 py-12 px-4 rounded-xl shadow-inner container mx-auto">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
    Why Read Our Blog?
  </h2>
  <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
    Stay ahead with curated insights, practical tips, and deep dives into topics that matter. Whether you're a curious learner or a seasoned pro, we have something valuable for you.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <div className="p-6 bg-indigo-50 rounded-lg shadow hover:shadow-md transition duration-300">
      <h3 className="text-xl font-semibold text-indigo-700 mb-2">🧠 Expert Insights</h3>
      <p className="text-sm text-gray-700">Get knowledge and advice from industry professionals across multiple fields.</p>
    </div>
    <div className="p-6 bg-purple-50 rounded-lg shadow hover:shadow-md transition duration-300">
      <h3 className="text-xl font-semibold text-purple-700 mb-2">🚀 Stay Updated</h3>
      <p className="text-sm text-gray-700">Learn about the latest trends, technologies, and updates in your interest areas.</p>
    </div>
    <div className="p-6 bg-yellow-50 rounded-lg shadow hover:shadow-md transition duration-300">
      <h3 className="text-xl font-semibold text-yellow-700 mb-2">💡 Actionable Ideas</h3>
      <p className="text-sm text-gray-700">Get inspired by real use cases, how-to guides, and creative solutions.</p>
    </div>
  </div>
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