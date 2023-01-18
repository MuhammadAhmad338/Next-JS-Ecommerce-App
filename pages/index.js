import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FooterBanner from '../components/FooterBanner';
import Product from '../components/Product';
import { client } from '../lib/client';

const Home = ({ productdata, bannerdata }) => {
 
  return (
    <div>
      <HeroBanner heroBanner={bannerdata?.length && bannerdata[0]} />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of my variations</p>
      </div>

      <div className='products-container'>
        {productdata?.map((product) => <Product product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerdata && bannerdata[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const productquery = '*[_type == "product"]';
  const productdata = await client.fetch(productquery);
  const bannerquery = '*[_type == "banner"]';
  const bannerdata = await client.fetch(bannerquery);

  return {
    props: {
      productdata,
      bannerdata
    }
  }
}

export default Home;

