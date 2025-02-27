import React from "react";

const SimilarProductCard = () => {
  return (
    <div className="group px-4 relative rounded-lg overflow-hidden shadow-md bg-white">
      <div className="card w-full h-64">
        <img
          className="object-cover w-full h-full" // Ensures image covers the full area of the card
          src={
            "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxsYXB0b3B8ZW58MHx8MHx8fDA%3D"
          }
          alt="Product"
        />
      </div>

      <div className="details pt-3 space-y-1 group-hover:bg-gray-50 p-4 rounded-md transition-colors duration-300">
        <div className="name">
          <h1 className="text-xl font-semibold text-gray-900">Samsung</h1>
          <p className="text-sm text-gray-600">Electric Fridge</p>
        </div>

        <div className="price flex items-center gap-3">
          <span className="font-sans text-gray-800 text-lg font-bold">₹400</span>
          <span className="thin-line-through text-gray-400 text-sm">₹999</span>
          <span className="text-green-600 font-semibold text-sm">60% Off</span>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
