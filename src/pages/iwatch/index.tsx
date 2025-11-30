"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

type Watch = {
  name: string;
  slug: string;
  description: string;
  highlights: string[];
  chip: string;
};


export default function IWatchModels({ data }: any) {
  const [search, setSearch] = useState("");
  const [iwatches,setIwatches] = useState([]);

  const filtered = iwatches.filter((w:any) =>
    w.modelname.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
   if(data?.response?.length > 0) {
     setIwatches(data?.response);
   }
  },[data])

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-orange-100 via-white to-slate-100 py-24">
        <div className="container mx-auto px-6">

          <h1 className="text-5xl font-medium text-slate-900 mb-4">
            Explore the Apple Watch Lineup
          </h1>

          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            Find the perfect Apple Watch to track your fitness, stay connected, 
            and achieve more — right from your wrist.
          </p>

          {/* SEARCH */}
          <div className="mt-8 max-w-md">
            <input
              type="text"
              placeholder="Search Apple Watch models..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-xl border border-slate-300 
                         shadow-sm focus:ring-2 focus:ring-orange-500 outline-none transition"
            />
          </div>
        </div>
      </section>

      {/* WATCH LISTING GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((watch:any) => (
              <div
                key={watch.modelname}
                className="bg-white rounded-3xl border border-slate-200 shadow-lg 
                           p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-full flex justify-center mb-6">
                  <img
  src={watch.smallimagelink || "/images/no-preview.png"}
  width={220}
  height={220}
  alt={watch.modelname}
  className="rounded-xl object-cover transition-transform duration-300 hover:scale-105"
  onError={(e) => {
    e.currentTarget.src = "/images/no-preview.png";
  }}
/>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {watch.modelname}
                </h3>
          
                <Link
                  href={`/product/${watch._id}`}
                  className="block text-center bg-pink-600 hover:bg-orange-700 text-white 
                             font-semibold py-3 rounded-xl transition shadow-md"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>

          {/* EMPTY STATE */}
          {filtered.length === 0 && (
            <div className="text-center mt-20">
              <p className="text-xl text-slate-600">No Apple Watches found.</p>
            </div>
          )}
        </div>
      </section>

    </>
  );
}
export async function getStaticProps() {
    const modelsPayload = {
      brand:"apple",
      type:"watch"
    }
    const modelsCall = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/models/getmodels`,modelsPayload)
    .then((response) => {
      if(response.status === 201){
        return {response:response.data.models}
      }else{
        return {error:"Something unexpected happend please try again later"}
      }
    }).catch((error) => {
       return {error:error.message ? error.message : "Something unexpected happend please try again later"}
    })
    return { props: { data:modelsCall } };
 }