import React, { useEffect, useState } from 'react'
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listOfRestrauts, setListOfRestrauts] = useState([]);

  useEffect(() => { 
  fetchData();
  }, [])
  
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.66500&lng=77.44770&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestrauts(json?.data?.cards[2]?.data?.data?.cards);


  };
  // if (setListOfRestrauts.length === 0) { 
  //   return <Shimmer/>
  // }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline !! Please Check your Internet connection</h1>
    )
  }



  return setListOfRestrauts.length === 0 ? (<Shimmer/>):(<div>Body</div>);
}

export default Body