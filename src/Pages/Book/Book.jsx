 import React, {  } from 'react'
 import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';
 
 
 const Book = ({singleBook}) => {
//  console.log(singleBook);
 const{bookName,bookId, author, image, rating, category,tags,totalpage, yearOfPublishing} =singleBook;
    
   return (
         <Link to={`/bookDetails/${bookId}`}>
         
             <div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
    <img
    className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex justify-between '>
    {
        tags.map(tag => <button>{tag}</button>)
    }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <h1 className='text-2xl'>By:{author}</h1>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className=" flex justify-between card-actions  ">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfStroke /></div>
    </div>
  </div>
</div>
         
         
         </Link>
   )
 }
 
 export default Book
 