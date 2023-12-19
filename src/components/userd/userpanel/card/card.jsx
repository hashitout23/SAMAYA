import React from 'react'

function Card() {
  return (
    <div class="bg-blue-50 flex justify-center items-center">
    <div class="bg-white rounded-lg mb-[10px]">
    <div class="grid md:grid-cols-3">
      <div class="border-b md:border-r p-6">
        <div class="text-center">
          <div class="text-2xl bg-purple-100 text-purple-900 w-20 h-20 flex justify-center items-center rounded-full mb-3 mx-auto"><i class="fas fa-battery-three-quarters"></i></div>
          <div class="text-xl font-semibold mb-2">Total Grievances Registered</div>
        </div>
      </div>
      <div class="border-b md:border-r p-6">
        <div class="text-center">
          <div class="text-2xl bg-orange-100 text-orange-900 w-20 h-20 flex justify-center items-center rounded-full mb-3 mx-auto"><i class="fas fa-fingerprint"></i></div>
          <div class="text-xl font-semibold mb-2">Number of Grievances Pending</div>
        </div>
      </div>
      <div class="border-b p-6">
        <div class="text-center">
          <div class="text-2xl bg-blue-100 text-blue-900 w-20 h-20 flex justify-center items-center rounded-full mb-3 mx-auto"><i class="fas fa-medal"></i></div>
          <div class="text-xl font-semibold mb-2">Number of Grievances Closed</div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Card;
