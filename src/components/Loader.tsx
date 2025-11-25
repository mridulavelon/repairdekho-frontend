import { HashLoader, MoonLoader } from "react-spinners"
import useStore from "@/lib/store";
export default function Loader() {
    const{ loading } = useStore();
    return (
        <>
        {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
        <HashLoader color="orange"/>
      </div>
        )}
      </>
    )
  }
  