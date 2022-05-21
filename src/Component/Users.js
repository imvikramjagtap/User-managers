
import { useState } from 'react';
// import Paignate from './Paignate';



export default function Users(props){

    let users = props.users
    // Sorting
    const [sortingMsg, setSortingMsg] = useState(false);

    
    // Age sorting
    const ageAscendingSort = (e) =>{
        e.preventDefault();
        users.sort((a,b) =>{
            return a.age - b.age
        })
        setSortingMsg(true);
        setTimeout(() => {
            setSortingMsg(false)
        }, 2000);
    }

    const ageDescendingSort = (e) =>{
        e.preventDefault();
        users.sort((a,b) =>{
            return b.age - a.age
        })
        setSortingMsg(true);
        setTimeout(() => {
            setSortingMsg(false)
        }, 2000);
    }

    // Sorting by first name

    const firstNameAscendingSort = (e) =>{
        e.preventDefault();
        users.sort((a,b) =>{
            let fa = a.first_name.toLowerCase(),
                fb = b.first_name.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
        setSortingMsg(true);
        setTimeout(() => {
            setSortingMsg(false)
        }, 2000);
    }

    const firstNameDescendingSort = (e) =>{
        e.preventDefault();
        users.sort((a,b) =>{
            let fa = a.first_name.toLowerCase(),
                fb = b.first_name.toLowerCase();

            if (fa < fb) {
                return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
        })
        setSortingMsg(true);
        setTimeout(() => {
            setSortingMsg(false)
        }, 2000);
    }
    // by last name
    const lastNameDescendingSort = (e) =>{
        e.preventDefault();
        users.sort((a,b) =>{
            let fa = a.last_name.toLowerCase(),
                fb = b.last_name.toLowerCase();

            if (fa < fb) {
                return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
        })
        setSortingMsg(true);
        setTimeout(() => {
            setSortingMsg(false)
        }, 2000);
    }

    const lastNameAscendingSort = (e) =>{
        e.preventDefault();
        users.sort((a,b) =>{
            let fa = a.last_name.toLowerCase(),
                fb = b.last_name.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
        setSortingMsg(true);
        setTimeout(() => {
            setSortingMsg(false)
        }, 2000);
    }

    // City

    const cityAscendingSort = (e) =>{
        e.preventDefault();
        users.sort((a,b) =>{
            let fa = a.city.toLowerCase(),
                fb = b.city.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        })
        setSortingMsg(true);
        setTimeout(() => {
            setSortingMsg(false)
        }, 2000);
    }

    const cityDescendingSort = (e) =>{
        e.preventDefault();
        users.sort((a,b) =>{
            let fa = a.city.toLowerCase(),
                fb = b.city.toLowerCase();

            if (fa < fb) {
                return 1;
            }
            if (fa > fb) {
                return -1;
            }
            return 0;
        })
        setSortingMsg(true);
        setTimeout(() => {
            setSortingMsg(false)
        }, 2000);
    }



    // Pagination 

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const pageNumberLimit= 5;
    const [maxPageNumberLimit, setMaxPageNumberLimit] =useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] =useState(0);


    const handlePageNumClick = (e)=>{
        setCurrentPage(Number(e.target.id));
    }

    const pages=[];
    for(let i=1; i <= Math.ceil(users.length / itemsPerPage ); i++){
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumber = pages.map(number=>{

        if(number < maxPageNumberLimit+1 && number>minPageNumberLimit){
        return (
            <>
            <li className={`${currentPage === number ? "pageActive" : null} btn btn-outline-primary`} key={number} id={number} onClick={handlePageNumClick}>
                {number}
                
            </li>
            </>
            
        );}else{
            return null;
        }
    });

    const handlePrevClick =()=>{
        setCurrentPage(currentPage - 1)

        if((currentPage - 1) % pageNumberLimit === 0){
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit)
        }
    }

    const handleNextClick = () =>{
        setCurrentPage(currentPage + 1)

        if(currentPage+1> maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit)
        }
    }

    let pageIncrementBtn = null;
    if(pages.length > maxPageNumberLimit){
        pageIncrementBtn = <li className='btn btn-outline-primary' onClick={handleNextClick}>...</li> 
    }

    let pageDecrementBtn = null;
    if(currentPage > 1){
        pageDecrementBtn = <li className='btn btn-outline-primary' onClick={handlePrevClick}>...</li> 
    }
    //////Pagination code end
   


    // Filter code
      const [filterWithName, setFilterWithName] = useState('');
      const [displayFilteredUser, setFilteredUser] = useState(false);
      const [notFound, setNotFound] = useState(false)
   


      const handleSearchChange = (e)=>{
          setFilterWithName(e.target.value)
      }

      const searchResult = props.users.filter((serchRes)=>{
            return serchRes.first_name === filterWithName ||
            serchRes.last_name === filterWithName ||
            serchRes.first_name.toLowerCase() === filterWithName || 
            serchRes.last_name.toLowerCase() === filterWithName
      })

      const handleSearch =(e)=>{
          e.preventDefault();
          if(filterWithName.length === 0){
            alert("Add keyword to search")
          }else if(searchResult.length === 0){
            setNotFound(true)
              setTimeout(() => {
                setNotFound(false)
              }, 4000);
          }else{
            console.log(searchResult)
            setFilteredUser(true)
          } 
      }

      const handleSearchReset =(e) =>{
          e.preventDefault();
          setFilterWithName('')
          setFilteredUser(false)

      }

    return(
        <>
         <div className="container">
             
             <div className=" mt-3">
    
                    <form className='input-group mb-3' action="" onSubmit={handleSearch}>
                        <input type="text"  className="form-control py-2" value={filterWithName} onChange={handleSearchChange} placeholder="Search User using First name or Last name"/>
                        <button className="btn btn-outline-secondary" onClick={handleSearch}  type="button" >Search</button>
                    </form><br/>
                {notFound && <p className='m-0 p-0 text-center text-danger'>No result found for: {filterWithName} Retry with another First name or Last name</p>}
              
              {/*Sorting   */}
                <div>
                    <div className="d-flex text-center flex-wrap me-4 m-3">

                        <div class="dropdown text-end m-2">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort by First Name
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><button class="dropdown-item" onClick={firstNameAscendingSort}>Ascending order</button></li>
                                <li><button class="dropdown-item" onClick={firstNameDescendingSort}>Descending order</button></li>
                            </ul>
                        </div>

                        <div class="dropdown text-end m-2">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort by Last Name
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><button class="dropdown-item" onClick={lastNameAscendingSort}>Ascending order</button></li>
                                <li><button class="dropdown-item" onClick={lastNameDescendingSort}>Descending order</button></li>
                            </ul>
                        </div>
                        
                        <div class="dropdown text-end m-2">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort by age
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><button class="dropdown-item" onClick={ageAscendingSort}>Ascending order</button></li>
                                <li><button class="dropdown-item" onClick={ageDescendingSort}>Descending order</button></li>
                            </ul>
                        </div>

                        <div class="dropdown text-end m-2">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort by City
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><button class="dropdown-item" onClick={cityAscendingSort}>Ascending order</button></li>
                                <li><button class="dropdown-item" onClick={cityDescendingSort}>Descending order</button></li>
                            </ul>
                        </div>

                       

                    </div>

                    {sortingMsg && <p className='text-center text-success fs-3 fw-bold'>Sorting applied</p>}
                </div>
             </div>
             {displayFilteredUser &&  <div className="d-flex flex-wrap justify-content-center row g-4 p-4">
             <p className='text-center mt-0 pt-0'>Showing Result for: <b className='text-success'>{filterWithName}</b> <button className="ms-3 btn btn-outline-dark" onClick={handleSearchReset}>Reset</button> </p>
                
                 {searchResult.map(user =>(
                 <div className="col-12 col-md-6"  key={user.id}  >
                    <div className="card" > 
                         <div className="card-body" id={user.id}>
                            <h5 className="card-title"><strong>Name: </strong> {user.first_name}  {user.last_name}</h5>
                            <p className='m-0'><strong>Email:</strong> {user.email}</p>
                            <p className='m-0'><strong>Company:</strong> {user.company_name}</p>
                            <p className='m-0'><strong>City:</strong> {user.city}</p>
                            <p className='m-0'><strong>State:</strong> {user.state} {user.zip}</p>
                            <p className='m-0'><strong>Age:</strong> {user.age}</p>
                            <p className="m-0"><strong>Website: </strong> <a href={user.web} target="_blank" rel="noreferrer">{user.web}</a> </p> 
                        </div>
                     </div>
                 </div>
             ))}
             </div>}
             {displayFilteredUser === true ? false : true && <div className="d-flex flex-wrap justify-content-center row g-4 p-4">
                    {currentItems.map(user =>(
                        <div className="col-12 col-md-6" key={user.id} >
                            <div className="card" >
                                <div className="card-body" id={user.id}>
                                    <h5 className="card-title"><strong>Name: </strong>{user.first_name} {user.last_name}</h5>
                                    <p className='m-0'><strong>Email:</strong> {user.email}</p>
                                    <p className='m-0'><strong>Company:</strong> {user.company_name}</p>
                                    <p className='m-0'><strong>City:</strong> {user.city}</p>
                                    <p className='m-0'><strong>State:</strong> {user.state} {user.zip}</p>
                                    <p className='m-0'><strong>Age:</strong> {user.age}</p>
                                    <p className="m-0"><strong>Website: </strong> <a href={user.web} target="_blank" rel="noreferrer">{user.web}</a> </p> 
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* <Paignate users={props.users}/> */}
                    <div className="text-center">
                        <ul className='pageNumbers d-flex justify-content-center'>
                            <li>
                                <button className='btn btn-outline-primary' onClick={handlePrevClick} disabled={currentPage === pages[0]?true:false}>
                                &#60;
                                </button>
                            </li>
                            {pageDecrementBtn}
                            {renderPageNumber}
                            {pageIncrementBtn}
                            <li>
                                <button className='btn btn-outline-primary' onClick={handleNextClick} disabled={currentPage === pages[pages.length-1]?true:false}>
                                &gt;
                                </button>
                            </li>
                        
                        </ul>
                    </div>
                </div>}
             
             {/* <div className="d-flex text-center">
             <Pagination
             onChange={(value) => setPage(value)}
             pageSize={usersPerPage}
             total={total}
             current={page}
             className={'d-flex text-center'}
             />
             </div> */}

        {/* <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
         />
              */}
             
             
         
            {/* <nav className='d-flex d-flex-wrap'>
                <ul className='pagination d-flex-wrap'>
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a href="!#" onClick={()=> setCurrentPage(number)} className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>          */}
        </div>
      
        </>
    )
}