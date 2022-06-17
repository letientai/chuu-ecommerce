import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../redux';
import './Pagination.scss';
const Pagination = ({
    cardPerPage,
    totalProducts, 
    currentPage ,
    setLoading,
    data
}) => {

    const [pageNumbers,setPageNumbers] = useState([]);
    const dispatch = useDispatch();
    const getTotalPages = ()=>{
        if((totalProducts / cardPerPage) <= 1 && totalProducts > 0){
            setPageNumbers([1]);
        }else{
            const totalPages = [];
            for (let i = 1; i <= Math.ceil(totalProducts / cardPerPage); i++) {
                totalPages.push(i);
            }
            setPageNumbers(totalPages)
        }
    }
    useEffect(()=>{
        getTotalPages();
    },[data])
    console.log(pageNumbers);
    console.log(data.length);
    const handlePagination =  (page)=> {
        window.scrollTo(0, 200);
        dispatch(setCurrentPage(page));
        setTimeout(()=> {
            setLoading(false);
        },[1200])
    }
    return (
        <nav>
            <ul className="d-flex list__pages" >
                {pageNumbers.map((page, i) => {
                    return (
                        <li
                            onClick={ (e) =>{
                                setLoading(true);
                                handlePagination(page);
                            }}
                            className={
                                i + 1 === currentPage ? 
                                'active list__pages__item' :
                                "list__pages__item"
                            }
                            key={i}
                        >{page}</li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination
