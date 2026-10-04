import React from "react";

function Card(props){
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
<div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">

    {/* Image */}
    <img
      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600"
      alt="Beautiful nature"
      className="w-full h-52 object-cover"
    />

    {/* Card Content */}
    <div className="p-5">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Beautiful Nature
      </h2>

      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        Explore the beauty of nature with amazing landscapes,
        peaceful mountains, and crystal-clear lakes.
      </p>

      <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
        Read More
      </button>
    </div>

  </div>
</div>
    )
}

export default Card