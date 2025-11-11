import AuthProvider from "@/auth/AuthProvider";
import Footer from "@/components/Footer";
import Forgotpassword from "@/components/Forgotpassword";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Login from "@/components/Login";
import Register from "@/components/Register";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import 'react-toastify/dist/ReactToastify.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'react-quill/dist/quill.snow.css';
import { ToastContainer } from 'react-toastify';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
   <Header/> 
   <Loader/>
   <Login/>
   <Register/>
   <Forgotpassword/>
   <Component {...pageProps} />
   <ToastContainer />
   <Footer />
   </AuthProvider>
)
}
