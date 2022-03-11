import React,{useState} from 'react'
import {countries} from './countries'

const CountryList = () => {
      const [readMore, setReadMore] = useState(false);
  return (
    <section className=''>
      <div className="section-center tour-main clearfix">
    {
       countries.map((country)=>{
         const {id,name,info ,image,price} = country
         console.log("name",name)
            return (<article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                 <div className="tour-info">
                 <h4>{name}</h4>
                 
                 </div>
                 <p>
                 {readMore ? info : `${info.substring(0, 200)}...`}
                 <button onClick={() => setReadMore(!readMore)}>
                       {readMore ? 'show less' : '  read more'}
                 </button>
                 </p>
           </footer>
           </article> )
       })


    }
    </div>
    </section>
  )
}

export default CountryList

