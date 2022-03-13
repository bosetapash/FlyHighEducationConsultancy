import React,{useState,useEffect} from 'react'
import {countries} from './countries'
import Country from './Country';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from './Loader';

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;



const CountryList = () => {
  const perPage = 4;
  const [lastObjectPosition , setLastObjectPosition ] = useState(0);
  const [loadedCountries,setLoadedCountries] = useState([])
  const [hasMore,setHasMore] = useState(true)


  const fetchMore =() =>{ 
    setTimeout(() => {
    setLastObjectPosition(currentValue => {
      const lastVal= currentValue+perPage
      console.log("lastVal:",lastVal)

      if(lastVal>=countries.length && hasMore)
      {
        setHasMore(false)
        return countries.length 
      }
      else
         return lastVal
    })},1000);

   }

     
  useEffect(()=>{
    console.log("useEffect called")
      if(!hasMore)
      setLoadedCountries(countries)
    else{
         setLoadedCountries([...loadedCountries,...countries.slice(lastObjectPosition-perPage,lastObjectPosition)])}
    },
    [lastObjectPosition])



  return (
    <InfiniteScroll
            dataLength={loadedCountries.length}
            next={()=>fetchMore()}
            hasMore={hasMore}
            loader={<Loader/>}
        >
          <section className=''>
            <div className="section-center tour-main clearfix">
          {
            loadedCountries.map((country)=>{
              return <Country key={country.id} {...country} />
            })
          }
          </div>
          </section>
    </InfiniteScroll>  )
}

export default CountryList

