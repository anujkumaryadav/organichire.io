import React from 'react'

export default function Home() {
  return (
    <div class="text-center">
      <p class="text-4xl md:text-5xl font-bold text-gray-800 mt-12 md:mt-36">
        Welcome to recrutoz<span className='text-blue-800'>.io</span>
      </p>
      <p class="text-base md:text-lg font-semibold text-gray-500 mx-3 md:mx-20 p-5 md:p-10">
        Elevate your recruitment process with recrutoz.io. Post jobs effortlessly, conduct secure proctored exams, and leverage advanced AI for sentiment analysis. Streamline hiring with confidence, ensuring efficiency and accuracy every step of the way.
      </p>

      <div class="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 mt-5">
        <a href="#services">
          <button class="px-6 md:px-7 text-white bg-gray-700 rounded-md p-2 hover:bg-black">Get
            Started
          </button>
        </a>
          <a href="#services">
            <button class="px-4 md:px-5 text-white bg-gray-900 rounded-md p-2 hover:bg-black">Explore
              Services
            </button>
          </a>
      </div>
    </div>
  )
}
