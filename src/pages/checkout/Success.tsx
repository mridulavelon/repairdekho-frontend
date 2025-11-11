import Link from "next/link";

export default function Success() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-10 md:p-16 rounded-lg shadow-lg text-center w-full max-w-lg">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQWN-SLzk5eeEuA9zBJKzsM0qbvtLsKDfJ-w&s" 
          className="w-24 h-24 mx-auto mb-4"
          alt="Success Icon"
        />
        <h2 className="text-2xl font-semibold mb-2">Order Placed Successfully!</h2>
        <p className="text-gray-700 mb-4">
          Thank you for your order. We will send you a confirmation email shortly.
        </p>
        <Link href="/">
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go to Homepage
        </button>
        </Link>
      </div>
    </div>
    )
}
  