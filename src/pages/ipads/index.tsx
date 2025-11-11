export default function Ipads() {
    return (
      <div className="relative flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/117602/pexels-photo-117602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Coming Soon" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center">
          <p className="mt-4 text-4xl font-semibold text-white">
            Coming Soon
          </p>
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
    )
}
  