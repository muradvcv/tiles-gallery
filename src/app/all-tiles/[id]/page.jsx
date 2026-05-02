import DeatilsPage from '@/components/DeatilsPage';
import React from 'react';

const TilesDetailsPage = async({params}) => {
  const res = await fetch("https://tiles-gallery-zeta-one.vercel.app/data.json");
  const tiles = await res.json();
  const {id}=await params;
  const filter = tiles.filter(tile => tile.id == id);
  
  return (
    <div className='w-10/12 mx-auto py-8 min-h-screen'>
      {
        filter.map(til=><DeatilsPage key={til.id} til={til}/>)
      }
    </div>
  );
};

export default TilesDetailsPage;