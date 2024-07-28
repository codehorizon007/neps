import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Cloudinary } from 'cloudinary-core';

const cloudinaryCore = new Cloudinary({ cloud_name: 'dlnz7ivbz' });


const gallery =() => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextCursor, setNextCursor] = useState(null); // State to store the cursor

  const fetchImages = async (cursor = '') => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3001/api/images?cursor=${cursor}`);
      const data = response.data;
      setImages(prevImages => [...prevImages, ...data.resources]); // Append new images
      setNextCursor(data.next_cursor); // Update cursor for next request
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(); // Fetch initial set of images
  }, []);

  const handleLoadMore = () => {
    if (nextCursor) {
      fetchImages(nextCursor); // Fetch next set of images using the cursor
    }
  };



  return (
    <>
    <div>
      <Navbar />
      <div className='gallery grid '>
        {images.map((image, index) => (
          <img
            key={index}
            src={`https://res.cloudinary.com/dlnz7ivbz/image/upload/c_scale,w_300/${image.public_id}`}
            alt={`Uploaded ${index}`}
            className='transition duration-300 ease-in-out hover:scale-105 gallery_image ' 
          />
        ))}
      </div>
      {nextCursor && (
        <button onClick={handleLoadMore}>Load More</button> // Load more images
      )}
    </div>
    <Footer /></>
  );
};

export default gallery
