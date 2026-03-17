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
       <h2>ami books</h2>
      
        {
            data.map((singleBook)=><Book key={singleBook.bookId} singleBook={singleBook}></Book>)
        }
 
     </div>
   )
 }
 
 export default Books
 