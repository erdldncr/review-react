import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const[count,setCount]=useState(0)
  const{name,job,image,text}=people[count]

  const nextPerson=()=>{
    
    count<people.length-1? setCount(count+1):setCount(0)
    
  }
  const prevPerson=()=>{
    count===0? setCount(people.length-1):setCount(count-1)
  }
  const randomPerson=()=>{
    let num=Math.floor(Math.random()*people.length)
    
    setCount(num===count?count+1>=people.length?count-1:count+1:num)
  }
  
  
  return <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img"/>
            <span className="quote-icon">
              <FaQuoteRight/>
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
           <div className="button-container">
           <button  className='prev-btn' onClick={prevPerson} >
              <FaChevronLeft/>
            </button>
            <button className='next-btn' onClick={nextPerson} > <FaChevronRight/> </button>
           </div>
           <button onClick={randomPerson} className="random-btn">suprise me</button>
          </article>
  
};

export default Review;
