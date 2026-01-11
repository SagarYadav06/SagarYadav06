import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About FoodZone
          </h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            FoodZone is a modern food delivery platform that brings delicious,
            fresh, and affordable meals right to your doorstep. We partner with
            top restaurants to give you the best dining experience.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is simple — fast delivery, quality food, and happy
            customers. Whether you're craving snacks or a full meal, FoodZone
            has you covered.
          </p>

          <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
            Learn More
          </button>
        </div>

    
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Food"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
