import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const reviewsPerPage = 2;
  const intervalSeconds = 5000;

  useEffect(() => {
    axios.get('https://cornelia-charms-next.onrender.com/api/reviews') 
      .then(res => setReviews(res.data))
      .catch(err => console.error("Error fetching reviews:", err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => {
        const nextIndex = prevIndex + reviewsPerPage;
        return nextIndex >= reviews.length ? 0 : nextIndex;
      });
    }, intervalSeconds);

    return () => clearInterval(interval); 
  }, [reviews]);

  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  return (
      <div className="px-[50px] sm:px-[90px] md:px-[60px] lg:px-[80px] xl:px-[150px] grid w-full h-40 sm:h-50 md:h-56 grid-cols-1 gap-[60px] min-[570px]:gap-[80px] md:gap-[100px] mx-auto md:grid-cols-2">
        {currentReviews.map((review, index) => 
        (
        <div className="relative" key={index}>
          {/* Main Card */}
          <div className="relative z-10 flex flex-col justify-between h-40 text-white shadow-xl p-7 sm:h-50 md:h-56 bg-gradient-to-r from-cornelia-darkpink to-cornelia-softpink rounded-3xl">
            <p className="mb-3 poppins leading-relaxed text-justify min-[360px]:text-[0.8rem] min-[450px]:text-[0.9rem] min-[570px]:text-[0.95rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.2rem]">
              {review.message}
            </p>
            <p className="font-semibold text-white text-md sm:text-lg md:mt-2 poppins">
              {review.name}
            </p>
          </div>

          {/*Border Card*/}
          <div className="absolute bottom-[-20px] right-[-20px] w-full h-full border-[6px]  border-cornelia-softpink rounded-3xl z-0"></div>
        </div>
        ))}
      </div>  
  );
}
