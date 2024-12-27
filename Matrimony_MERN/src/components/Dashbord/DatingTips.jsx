import React from 'react';

const datingTips = [
  {
    imgSrc: "https://i.pinimg.com/564x/0e/d9/d9/0ed9d9a5dfb6b171da7c0a35372e13d0.jpg",
    quote: "Marriage is not about finding the right person, but being the right person."
  },
  {
    imgSrc: "https://i.pinimg.com/564x/b8/ac/64/b8ac6471a21ba69954ddfb0f496a8f3a.jpg",
    quote: "A successful marriage requires falling in love many times, always with the same person."
  },
  {
    imgSrc: "https://i.pinimg.com/236x/1a/0d/a4/1a0da49954ca8602662fc76f9ed61be1.jpg",
    quote: "Love is not about possession. Love is about appreciation."
  },
  {
    imgSrc: "https://i.pinimg.com/236x/15/7a/cd/157acde5fd0a7016861afb0ed2c8406b.jpg",
    quote: "Together is a wonderful place to be."
  },
  {
    imgSrc: "https://i.pinimg.com/474x/b5/ba/f7/b5baf71841df97a1e9bd2b62a55c949b.jpg",
    quote: "The best thing to hold onto in life is each other."
  },
  {
    imgSrc: "https://i.pinimg.com/474x/49/64/53/496453f8607bbd9af5412249aaf60187.jpg",
    quote: "Love is composed of a single soul inhabiting two bodies."
  },
  {
    imgSrc: "https://i.pinimg.com/474x/b5/ba/f7/b5baf71841df97a1e9bd2b62a55c949b.jpg",
    quote: "The best thing to hold onto in life is each other."
  },
  {
    imgSrc: "https://i.pinimg.com/564x/0e/d9/d9/0ed9d9a5dfb6b171da7c0a35372e13d0.jpg",
    quote: "Marriage is not about finding the right person, but being the right person."
  },
  {
    imgSrc: "https://i.pinimg.com/564x/b8/ac/64/b8ac6471a21ba69954ddfb0f496a8f3a.jpg",
    quote: "A successful marriage requires falling in love many times, always with the same person."
  },
  {
    imgSrc: "https://i.pinimg.com/474x/49/64/53/496453f8607bbd9af5412249aaf60187.jpg",
    quote: "Love is not about possession. Love is about appreciation."
  },
  {
    imgSrc: "https://i.pinimg.com/474x/b5/ba/f7/b5baf71841df97a1e9bd2b62a55c949b.jpg",
    quote: "The best thing to hold onto in life is each other."
  },
  {
    imgSrc: "https://i.pinimg.com/474x/49/64/53/496453f8607bbd9af5412249aaf60187.jpg",
    quote: "Love is composed of a single soul inhabiting two bodies."
  },
  {
    imgSrc: "https://i.pinimg.com/474x/b5/ba/f7/b5baf71841df97a1e9bd2b62a55c949b.jpg",
    quote: "The best thing to hold onto in life is each other."
  },
];

const DatingTipsGallery = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-400 p-4">
      <h2 className="text-4xl font-bold text-center text-white mb-8">Dating Tips</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {datingTips.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-200 transform hover:scale-105 ${index % 1 === 1 ? "row-span-2" : "row-span-1"}`}
          >
            <img
              src={item.imgSrc}
              alt={`Dating Tip ${index + 1}`}
              className="w-full bg-contain"
            />
            <blockquote className="p-4 text-center italic text-gray-700">
              {item.quote}
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatingTipsGallery;
