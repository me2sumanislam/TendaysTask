 import React, { Suspense,} from 'react'
import Book from '../Book/Book'
 
 const Books = ({data}) => {
    // const[allBooks, setAllbooks] = useState([])
    // Dataload-method-1
    // useEffect(()=>{},[])
    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res => res.json())
    //     .then(data =>{
    //        setAllbooks(data)
    //     })
    // },[])

    // const bookPromise = fetch('./booksData.json').then(res => res.json())
 
   
 


   return (
     <div>
      
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
             
        {
            data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
        }
 
        </div>
     </div>
   )
 }
 
 export default Books
 