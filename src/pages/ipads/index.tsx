"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type IPad = {
  name: string;
  slug: string;
  description: string;
  highlights: string[];
  chip: string;
};

const ipadModels: IPad[] = [
  {
    name: "iPad Pro 13-inch (M4)",
    slug: "ipad-pro-13-m4",
    description: "The most advanced iPad ever — unbelievably powerful and thin.",
    highlights: ["Tandem OLED", "Face ID", "Magic Keyboard"],
    chip: "M4",
  },
  {
    name: "iPad Pro 11-inch (M4)",
    slug: "ipad-pro-11-m4",
    description: "Portable performance with stunning visuals.",
    highlights: ["XDR Brightness", "Wi-Fi 6E", "Pencil Pro"],
    chip: "M4",
  },
  {
    name: "iPad Air 13-inch (M2)",
    slug: "ipad-air-13-m2",
    description: "Big screen. Big power. Lightweight performance.",
    highlights: ["Touch ID", "USB-C", "Pencil Pro"],
    chip: "M2",
  },
  {
    name: "iPad Air 11-inch (M2)",
    slug: "ipad-air-11-m2",
    description: "Perfect balance of portability and power.",
    highlights: ["Liquid Retina", "Wi-Fi 6", "5G"],
    chip: "M2",
  },
  {
    name: "iPad 10th Generation",
    slug: "ipad-10th-gen",
    description: "Colorful, fun, and powerful for everyday use.",
    highlights: ["Landscape Camera", "Stereo Speakers"],
    chip: "A14",
  },
  {
    name: "iPad Mini 6",
    slug: "ipad-mini-6",
    description: "Small but mighty — fits in your hand.",
    highlights: ["USB-C", "True Tone", "Touch ID"],
    chip: "A15",
  },
];

export default function IPadModels({ data }: any) {
  const [search, setSearch] = useState("");
  const [ipads ,setIpads] = useState([]);

  const filtered = ipads.filter((i:any) =>
    i.modelname.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
   if(data?.response?.length > 0){
    setIpads(data?.response);
   }
  },[])

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-orange-100 via-white to-slate-100 py-24">
        <div className="container mx-auto px-6">

          <h1 className="text-5xl font-medium  text-slate-900 mb-4">
            Explore the iPad lineup
          </h1>

          <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
            Pick the perfect iPad for creativity, productivity, entertainment, and everything in between.
          </p>

          {/* SEARCH */}
          <div className="mt-8 max-w-md">
            <input
              type="text"
              placeholder="Search iPad models..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-xl border border-slate-300 
                         shadow-sm focus:ring-2 focus:ring-orange-500 outline-none transition"
            />
          </div>
        </div>
      </section>

      {/* LISTING GRID */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((ipad:any) => (
              <div
                key={ipad.modelname}
                className="bg-white rounded-3xl border border-slate-200 shadow-lg 
                           p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-full flex justify-center mb-6">
                  <img
                    src={ipad.smallimagelink || "/images/no-preview.png"}
                    width={250}
                    height={250}
                    alt={ipad.modelname}
                    className="rounded-xl object-cover transition-transform duration-300 hover:scale-105"
                      onError={(e) => {
    e.currentTarget.src = "/images/no-preview.png";
  }}
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {ipad.modelname}
                </h3>


                <Link
                  href={`/product/${ipad._id}`}
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
              <p className="text-xl text-slate-600">No iPad models found.</p>
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
      type:"tablet"
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