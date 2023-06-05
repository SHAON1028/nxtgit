import GetProducts from '@/app/components/getProducts/getProducts';
import React from 'react'

const CatPage = ({ params:{catname} }) => {
  console.log(catname);
  return (
    <div className="mt-5">
      <h2 className=" text-uppercase text-center ">{catname}</h2>
      <GetProducts categoryName={catname}></GetProducts>
    </div>
  );
};

export default CatPage