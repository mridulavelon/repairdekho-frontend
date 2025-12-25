import Metaseo from "@/components/Metaseo";
import useStore from "@/lib/store";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Blogs({data}: any) {
  const { updateLoading } = useStore();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    updateLoading(false);
    if (data?.error) {
      setBlogs([]);
    } else {
      setBlogs(data?.response);
    }
  }, []);

  return (
    <>
      <Metaseo
        title="Blogs"
        description="See our latest blogs on the smartphone repair services"
        keywords="Latest blogs"
        metadataBase=""
        urlslug={''}
      />

      <div className="min-w-0 w-full overflow-x-hidden">
        <section className="bg-white text-gray-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 w-full overflow-hidden">

          {/* HERO SECTION */}
          <div className="max-w-4xl mx-auto text-center w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight break-words px-2">
              Explore Our Latest <span className="text-pink-600">Blogs & Insights</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto break-words px-4">
              Stay updated with expert guides, tech insights, tutorials, news, and trending topics.
            </p>

            {/* Search Bar */}
            <div className="mt-6 sm:mt-8 flex justify-center w-full px-4">
              <div className="flex w-full max-w-md shadow-lg rounded-full overflow-hidden border border-gray-200">
                <input
                  type="text"
                  placeholder="Search blogs..."
                  className="flex-grow px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none min-w-0"
                />
                <button className="bg-pink-600 hover:bg-indigo-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition flex-shrink-0">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* BLOG LIST */}
          <div className="max-w-6xl mx-auto mt-12 sm:mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">

            {blogs.map((blog: any) => (
              <div
                key={blog._id}
                className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-xl transition overflow-hidden w-full"
              >
                <div className="w-full h-44 sm:h-48 overflow-hidden">
                  <img
                    src={blog.cover || "/images/no-preview.jpg"}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/images/no-preview.jpg";
                    }}
                  />
                </div>

                <div className="p-4 sm:p-5 w-full min-w-0">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1 line-clamp-2 break-words">
                    {blog.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 mb-3 sm:mb-4 break-words">
                    {blog.summary}
                  </p>

                  <Link
                    onClick={() => updateLoading(true)}
                    href={`/blogs/${blog.blogurl}`}
                    className="inline-block px-4 py-2 bg-pink-600 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-indigo-700 transition"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}

          </div>

          {/* WHY READ OUR BLOG */}
          <div className="mt-16 sm:mt-20 md:mt-24 bg-gray-50 py-12 sm:py-14 md:py-16 px-4 sm:px-6 rounded-3xl max-w-6xl mx-auto shadow-inner w-full overflow-hidden">

            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4 break-words px-2">
              Why Read Our Blog?
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-10 break-words px-4">
              We bring you hand-picked knowledge, expert tutorials, and deep insights from multiple industries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto w-full">
              
              <div className="p-5 sm:p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition w-full">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-2 break-words">
                  🎯 Expert Knowledge
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 break-words">
                  Learn from experts and specialists who share real-world insights.
                </p>
              </div>

              <div className="p-5 sm:p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition w-full">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-2 break-words">
                  📈 Stay Ahead
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 break-words">
                  Get the latest updates on tech, business, software, and innovations.
                </p>
              </div>

              <div className="p-5 sm:p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition w-full">
                <h3 className="text-lg sm:text-xl font-semibold text-indigo-700 mb-2 break-words">
                  💡 Practical Tips
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 break-words">
                  Step-by-step guides, how-tos, tools, and productivity techniques.
                </p>
              </div>

            </div>
          </div>

          {/* SMALL CTA SECTION */}
          <div className="max-w-4xl mx-auto mt-16 sm:mt-20 text-center w-full px-4">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 break-words">
              Want more insightful content?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 break-words">
              We post weekly updates. Don't miss out on valuable knowledge.
            </p>

            <a
              href="/contact"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-pink-600 text-white rounded-full text-base sm:text-lg font-medium hover:bg-indigo-700 transition shadow"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>

      <style jsx global>{`
        body {
          overflow-x: hidden;
          max-width: 100vw;
        }
        
        html {
          overflow-x: hidden;
          max-width: 100vw;
        }

        * {
          box-sizing: border-box;
        }

        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/getblogs`
    );

    return {
      props: {
        data: {
          response: response.data.response
        }
      }
    };
  } catch (error: any) {
    return {
      props: {
        data: {
          error: "Something unexpected happened, please try again later"
        }
      }
    };
  }
}