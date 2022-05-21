// import { useState } from 'react';

// export default function Paignate(props){
//     const [itemsPerPage, setItemsPerPage] = useState(10);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [pageNumberLimit, setPageNumberLimit] = useState(5);
//     const [maxPageNumberLimit, setMaxPageNumberLimit] =useState(5);
//     const [minPageNumberLimit, setMinPageNumberLimit] =useState(0);


//     const handlePageNumClick = (e)=>{
//         setCurrentPage(Number(e.target.id));
//     }

//     const pages=[];
//     for(let i=1; i <= Math.ceil(props.users.length / itemsPerPage ); i++){
//         pages.push(i);
//     }

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = props.users.slice(indexOfFirstItem, indexOfLastItem);

//     const renderPageNumber = pages.map(number=>{

//         if(number < maxPageNumberLimit+1 && number>minPageNumberLimit){
//         return (
//             <li className={`${currentPage == number ? "pageActive" : null} btn btn-outline-primary`} key={number} id={number} onClick={handlePageNumClick}>
//                 {number}
                
//             </li>
//         );}else{
//             return null;
//         }
//     });

//     const handlePrevClick =()=>{
//         setCurrentPage(currentPage - 1)

//         if((currentPage - 1) % pageNumberLimit == 0){
//             setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
//             setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
//         }
//     }

//     const handleNextClick = () =>{
//         setCurrentPage(currentPage + 1)

//         if(currentPage+1> maxPageNumberLimit){
//             setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
//             setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
//         }
//     }

//     let pageIncrementBtn = null;
//     if(pages.length > maxPageNumberLimit){
//         pageIncrementBtn = <li className='btn btn-outline-primary' onClick={handleNextClick}>...</li> 
//     }

//     let pageDecrementBtn = null;
//     if(currentPage > 1){
//         pageDecrementBtn = <li className='btn btn-outline-primary' onClick={handlePrevClick}>...</li> 
//     }
//     return(
//         <div className="text-center">
//              <ul className='pageNumbers d-flex justify-content-center'>
//                  <li>
//                      <button className='btn btn-outline-primary' onClick={handlePrevClick} disabled={currentPage == pages[0]?true:false}>
//                          Prev
//                      </button>
//                  </li>
//                  {pageDecrementBtn}
//                  {renderPageNumber}
//                  {pageIncrementBtn}
//                  <li>
//                      <button className='btn btn-outline-primary' onClick={handleNextClick} disabled={currentPage == pages[pages.length-1]?true:false}>
//                          Next
//                      </button>
//                  </li>
                 
//                  </ul>
//              </div>
//     )
// }