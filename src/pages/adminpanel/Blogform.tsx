import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { PuffLoader } from "react-spinners";
import { toast } from "react-toastify";

export default function Blogform({type,onClose,onSubmit,editdetails} :any) {
    const [showLoading,setShowLoading] = useState(false);

    const convertToThumbnailLink = (driveLink:string) => {
      const fileIdMatch = driveLink.match(/\/d\/(.*?)\//);
      if (!fileIdMatch || fileIdMatch.length < 2) {
        setShowLoading(false);  
        resetForm();
        onClose();
        toast.error("Invalid Google Drive link",{
          theme:"colored",
          position:"top-center"
        })
        throw new Error("Invalid Google Drive link");
      }
      const fileId = fileIdMatch[1];
      const thumbnailLink = `https://drive.google.com/thumbnail?id=${fileId}&sz=w1000`;
      return thumbnailLink;
  }

    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);
    const schema = Yup.object().shape({
        title: Yup.string().required("Title is required").min(2),
        summary: Yup.string().required("Summary is required").min(2),
        cover: Yup.string().required("Cover is required").min(2),
        content: Yup.string().required("Content is required").min(2),
      });

    const formik = useFormik({
        initialValues: {
           title:type === "addblog" ? "" : editdetails?.title,
           summary:type === "addblog" ? "" : editdetails?.summary,
           cover:type === "addblog" ? "" : editdetails?.cover,
           content:type === "addblog" ? "" : editdetails?.content
        },
        validationSchema: schema,
        onSubmit: async ({ title,summary,cover,content }) => {
        setShowLoading(true);      
        const payloadData = {
            ...(type === "editblog" && {"id":editdetails?._id}),
            "title": title,
            "summary":summary,
            "blogurl": title.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-').toLowerCase(),
            "cover":convertToThumbnailLink(cover),
            "content":content,
            "timestamp":new Date()
        }
        await onSubmit(type,payloadData);
        setShowLoading(false);  
        resetForm();
        onClose();
        },
     });
     const { errors, touched, values, handleChange, handleSubmit, resetForm,setFieldValue } = formik;


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 lg:p-10 w-11/12 max-w-lg overflow-auto max-h-screen my-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg md:text-xl font-semibold">{type === "addblog" ? "Add Blog" : "Edit Blog"}</h2>
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none" onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
            <form  onSubmit={handleSubmit} method="POST">
                <div className="mb-4">
                <label className={`block ${errors.title && touched.title ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Blog Title
              </label>
                  <input
                      type="text"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      id="title"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.title && touched.title ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.title && touched.title && typeof errors.title === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.title}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.summary && touched.summary ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Blog Summary
              </label>
                  <input
                      type="text"
                      name="summary"
                      value={values.summary}
                      onChange={handleChange}
                      id="summary"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.summary && touched.summary ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.summary && touched.summary && typeof errors.summary === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.summary}</small></div>}
              </div>
              <div className="mb-4">
                <label className={`block ${errors.cover && touched.cover ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Blog Cover
              </label>
                  <input
                      type="text"
                      name="cover"
                      value={values.cover}
                      onChange={handleChange}
                      id="cover"
                      className={`mt-1 block w-full px-3 py-2 border ${errors.cover && touched.cover ? "border-red-500" : "border-gray-500"} rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
                  />
                     {errors.cover && touched.cover && typeof errors.cover === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.cover}</small></div>}
              </div>   
                  <div className="mb-4">
                <label className={`block ${errors.content && touched.content ? "text-red-700" : "text-gray-700"} font-medium mb-1`}>
                 Blog Content
              </label>
                      <ReactQuill 
                       theme="snow"
                       id="content"  
                       value={values.content} 
                       onChange={(val:any) => setFieldValue("content",val)}
                       />
                     {errors.content && touched.content && typeof errors.content === "string" && <div id="formErrorName1"><small className="text-red-700">{errors.content}</small></div>}
              </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                      {showLoading ? (
                        <div className="flex items-center justify-center">
                        <PuffLoader size={30} color="white"/>
                       </div> 
                    ):(
                      <>Submit</>
                    )}
                </button>
            </form>
        </div>
    </div>
    )
}