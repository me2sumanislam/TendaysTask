import React from "react";
import { useLoaderData, useParams } from "react-router";
import { FaStarHalfAlt } from "react-icons/fa";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  // console.log(id)
  //routes.jsx theke data niye aslam
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    image,
    author,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
    tags,
    category,
  } = singleBook;

  console.log(totalPages);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="flex-1 flex justify-center items-center bg-gray-200 p-8 rounded-xl shadow-sm">
          <img
            src={image}
            className="w-200 rounded-lg shadow-2xl "
            alt="Hero Image"
          />
        </div>

        <div className="flex-1 px-4 lg:px-8">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <h3 className="font-bold mt-5">By:{author}</h3>
          <div className="divider"></div>
          <h3>{category}</h3>
          <div className="divider"></div>
          <p className="py-6 text-lg">
            <span className="font-bold">Review</span>:{review}
          </p>
          <div className="flex items-center gap-4 p-4 rounded-md max-w-lg mx-auto bg-gray-100">
       
            <span className="text-xl font-extrabold text-black">Tag</span>

 
            <div className="flex gap-3">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="px-6 py-2 bg-green-50 text-green-600 rounded-full text-lg font-semibold hover:bg-green-100 transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-[180px_1fr] gap-y-2 text-gray-700">
            <p className="font-semibold">Number of Pages:</p>
            <p className="font-bold">{totalPages}</p>

            <p className="font-semibold">Publisher:</p>
            <p className="font-bold">{publisher}</p>

            <p className="font-semibold">Year of Publishing:</p>
            <p className="font-bold">{yearOfPublishing}</p>

            <p className="font-semibold">Rating:</p>
            <p className="font-bold flex items-center"><FaStarHalfAlt />{rating}</p>
          </div>
          <div className=" flex gap-10 mt-10">
            <button className="btn btn-primary">Read</button>
            <button className="btn btn-primary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
