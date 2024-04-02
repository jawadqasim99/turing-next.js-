"use client"
import { useState, useEffect, useRef } from 'react';

export default function DataReport({ number, des1, des2, id, maxLength }) {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the distance of the element from the top of the viewport
      const element = document.getElementById(id);
      if (!element) return;

      const elementPosition = element.getBoundingClientRect().top;

      // Check if the element is in the viewport
      if (elementPosition < window.innerHeight && elementPosition > 0) {
        // Start incrementing count if count is less than maxLength
        if (count < maxLength) {
          // Clear any existing timer
          if (timerRef.current) {
            clearTimeout(timerRef.current);
          }

          // Start a new timer to increment count every 100ms (adjust as needed for speed)
          timerRef.current = setInterval(() => {
            setCount(prevCount => {
              if (prevCount < maxLength) {
                return prevCount + 1;
              } else {
                return prevCount;
              }
            });
          }, 1); // Adjust the interval for desired speed
        }
      } else {
        // Element is out of the viewport, so reset count
        setCount(0);
        // Clear the timer
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
      }
    };

    // Add event listener to listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener and clear timer when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [id, count, maxLength]); // Dependency array includes id, count, and maxLength

  return (
    <div id={id} className='transition-transform duration-1000 text-white text-3xl text-center flex flex-col gap-y-4 nunito hover:-translate-y-6 '>
      <h1>{count}</h1>
      <h2>{des1} <br /> {des2}</h2>
    </div>
  );
}
