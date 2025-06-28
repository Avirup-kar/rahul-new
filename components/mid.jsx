import React, { useState } from 'react';

const cards = [
  { id: 1, title: 'Card 1', image: '/wp.jpg' },
  { id: 2, title: 'Card 2', image: '/wp1.jpg' },
  { id: 3, title: 'Card 3', image: '/wp2.jpg' },
  { id: 4, title: 'Card 4', image: '/wp3.jpg' },
  { id: 5, title: 'Card 5', image: '/wp4.jpg' },
];

const SingleCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : cards.length - 1));
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev < cards.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative w-full flex justify-center items-center my-15 h-[320px]">
      {/* Left Button */}
      <button
        onClick={goLeft}
        className="absolute left-4 bg-white px-3 py-2 shadow rounded z-10"
      >
        ◀
      </button>

      {/* Card with Image */}
      <div className="w-[250px] h-[400px] rounded overflow-hidden shadow transition-all duration-300">
        <img
          src={cards[currentIndex].image}
          alt={cards[currentIndex].title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Button */}
      <button
        onClick={goRight}
        className="absolute right-4 bg-white px-3 py-2 shadow rounded z-10"
      >
        ▶
      </button>
    </div>
  );
};

export default SingleCardCarousel;
