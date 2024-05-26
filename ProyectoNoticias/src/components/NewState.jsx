import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';


const NewState = () => {
    const {news, getNews} = useContext(GlobalContext);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    
    useEffect(()=> {
        getNews();
    },[])

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const filteredNews = news.filter((item, index) => index >= 10);
    const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);

    
    return (
        <div className="news-container">
          {currentItems.map(item => (
            <div className="news-item" key={item.id}> 
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="author">Author: {item.author}</p>
            </div>
          ))}
          <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={news.length}
        paginate={paginate}
      />
        </div>
      );
    }; 
    const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
        const pageNumbers = [];
      
        for (let i = 2; i <= Math.ceil(totalItems / itemsPerPage); i++) {
          pageNumbers.push(i);
        }
      
        return (
          <ul className="pagination">
            {pageNumbers.map(number => (
              <li key={number}>
                <a onClick={() => paginate(number)}>
                  {number}
                </a>
              </li>
            ))}
          </ul>
        );
      };
      

export default NewState