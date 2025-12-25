import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faLock,
  faSave,
  faPen,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export default function Account() {
  const { data: session }: any = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobileno: "",
    password: "",
  });

  const userid = session?.user?.account?.userdetail?.id;

  /* =======================
     FETCH USER DETAILS
  ======================== */
  const getUserDetails = async () => {
    if (!userid) return;

    try {
      setLoading(true);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/accountdetails/getdetails`,
        { userid }
      );

      if (response.data) {
        setForm((prev) => ({
          ...prev,
          firstname: response.data.firstname || "",
          lastname: response.data.lastname || "",
          email: response.data.email || "",
          mobileno: response.data.mobileno || "",
        }));
      }
    } catch (error) {
      toast.error("Failed to fetch account details", {
        theme: "colored",
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  /* =======================
     UPDATE PROFILE
  ======================== */
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        userid,
        firstname: form.firstname,
        lastname: form.lastname,
        mobileno: form.mobileno,
        ...(form.password && { password: form.password }),
      };

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/accountdetails/update`,
        payload
      );

      if (response.data) {
        toast.success(response.data.message, {
          theme: "colored",
          position: "top-center",
        });
        setIsEditing(false);
        setForm((prev) => ({ ...prev, password: "" }));
        getUserDetails();
      }
    } catch (error) {
      toast.error("Profile update failed", {
        theme: "colored",
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [userid]);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="min-w-0 w-full overflow-x-hidden">
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-indigo-100 flex items-center justify-center p-4 sm:p-6 w-full">
          <div className="w-full max-w-5xl">
            <div className="rounded-3xl bg-white shadow-2xl border border-slate-200 w-full">
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-5 mb-8 sm:mb-10 w-full">
                  <div className="flex items-center gap-4 sm:gap-5 min-w-0 flex-1">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">
                      {form.firstname?.charAt(0) || "U"}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 break-words">
                        Account Settings
                      </h1>
                      <p className="text-sm sm:text-base text-slate-600 break-words">
                        Manage your personal information
                      </p>
                    </div>
                  </div>

                  {!isEditing && (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium hover:bg-indigo-200 transition text-sm sm:text-base flex-shrink-0"
                    >
                      <FontAwesomeIcon icon={faPen} />
                      <span className="hidden sm:inline">Edit Profile</span>
                      <span className="sm:hidden">Edit</span>
                    </button>
                  )}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
                    {/* First Name */}
                    <div className="w-full">
                      <label className="text-slate-700 font-medium text-sm sm:text-base break-words">
                        First Name
                      </label>
                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm sm:text-base"
                        />
                        <input
                          name="firstname"
                          value={form.firstname}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className={`w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl border text-sm sm:text-base ${
                            isEditing
                              ? "border-slate-300 focus:ring-2 focus:ring-indigo-500"
                              : "border-slate-200 bg-slate-100"
                          } outline-none`}
                        />
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="w-full">
                      <label className="text-slate-700 font-medium text-sm sm:text-base break-words">
                        Last Name
                      </label>
                      <input
                        name="lastname"
                        value={form.lastname}
                        onChange={handleChange}
                        disabled={!isEditing}
                        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-sm sm:text-base ${
                          isEditing
                            ? "border-slate-300 focus:ring-2 focus:ring-indigo-500"
                            : "border-slate-200 bg-slate-100"
                        } outline-none`}
                      />
                    </div>

                    {/* Email */}
                    <div className="w-full">
                      <label className="text-slate-700 font-medium text-sm sm:text-base break-words">
                        Email Address
                      </label>
                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm sm:text-base"
                        />
                        <input
                          value={form.email}
                          disabled
                          className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 bg-slate-100 cursor-not-allowed text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="w-full">
                      <label className="text-slate-700 font-medium text-sm sm:text-base break-words">
                        Phone Number
                      </label>
                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm sm:text-base"
                        />
                        <input
                          name="mobileno"
                          value={form.mobileno}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className={`w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl border text-sm sm:text-base ${
                            isEditing
                              ? "border-slate-300 focus:ring-2 focus:ring-indigo-500"
                              : "border-slate-200 bg-slate-100"
                          } outline-none`}
                        />
                      </div>
                    </div>

                    {/* Password */}
                    {isEditing && (
                      <div className="w-full">
                        <label className="text-slate-700 font-medium text-sm sm:text-base break-words">
                          New Password
                        </label>
                        <div className="relative">
                          <FontAwesomeIcon
                            icon={faLock}
                            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm sm:text-base"
                          />
                          <input
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="********"
                            className="w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 outline-none text-sm sm:text-base"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {isEditing && (
                    <div className="flex justify-end pt-4 sm:pt-6 w-full">
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition text-sm sm:text-base"
                      >
                        <FontAwesomeIcon icon={faSave} />
                        {loading ? "Saving..." : "Save Changes"}
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
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