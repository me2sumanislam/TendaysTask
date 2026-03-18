 import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
 import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';
 
 
 const ReadList = () => {
  const [ReadList, setReadList] = useState([]);
  // sort ar jonno state declar
  const [sort,setSort] =useState("")
    const data = useLoaderData();
    // console.log(data);

useEffect(()=>{
    const storedBookData = getStoredBook(); 
    const ConvertedStoredBooks = storedBookData.map(id => parseInt(id))
    const myReadList = data.filter(book =>ConvertedStoredBooks.includes(book.bookId));
    setReadList(myReadList)

    // console.log(storedBookData

},[])
  
const handleSort = (type) =>{
  setSort(type)
  if(type=== "rating"){
    const sortedByRating =[...ReadList].sort((a,b)=>a.rating-b.rating);
    setReadList(sortedByRating)
    // console.log(sortedByRating);
  }
 }



   return (
     <div>
    {/* sort ar jonno start */}
 
      <details className="dropdown">
  <summary className="btn m-1">sort by:{sort?sort:""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("pages")}>page</a></li>
    <li><a onClick={()=>handleSort("rating")}>rating</a></li>
  </ul>
</details>
    {/* sort ar jonno end */}

          <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>My Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i read{ReadList.length}</h2>

      {
        ReadList.map(b=><Book key={b.bookId} singleBook={b}></Book>)
      }
    </TabPanel>
    <TabPanel>
      <h2>My Wish List</h2>
    </TabPanel>
  </Tabs>
     </div>
   )
 }
 
 export default ReadList
 