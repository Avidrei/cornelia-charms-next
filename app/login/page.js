"use client";

export default function Login() {
  return (
    <div className="mt-[72px] lg:mt-[116px] xl:mt-[128px] grid grid-cols-1 md:grid-cols-2">
      <div className="items-center justify-center hidden h-screen bg-center bg-cover md:flex">
        Background
      </div>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        
        {/* Login Form */}
        <div className="relative flex flex-col items-center justify-center max-w-md ">

          <div className="flex flex-col items-center justify-center leading-none text-cornelia-jetblack poppins">
            <h1 className="text-[2.25rem] mb-3 font-semibold">Log in your Account</h1>
            <p className="text-[1.3rem] font-normal ">Please sign in your details.</p>

          </div>
          <form>
            <div className="mt-9">
              <label className="text-[1.15rem] mb-2 font-medium poppins text-cornelia-jetblack">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 mb-5 border border-gray-300 rounded-lg poppins focus:outline-none focus:ring-2 focus:ring-cornelia-darkpink"
              />
              <label className="text-[1.15rem] mb-2 font-medium poppins text-cornelia-jetblack">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg poppins focus:outline-none focus:ring-2 focus:ring-cornelia-darkpink"
              />

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center gap-2 text-[0.95rem] font-normal text-cornelia-jetblack poppins">
                  <input type="checkbox" className="accent-cornelia-darkpink poppins" />
                  Remember me
                </label>
                <a href="#" className="text-[0.9rem] font-medium poppins text-cornelia-darkpink hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit" className="w-full p-3 text-white transition-colors duration-300 rounded-lg bg-cornelia-darkpink poppins hover:bg-cornelia-pink">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}