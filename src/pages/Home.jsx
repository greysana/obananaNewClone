import React from 'react'
import MainBanner from '../components/home/banners/MainBanner'
import SlideBanner from '../components/home/banners/SlideBanner'
import SubBanners from '../components/home/banners/SubBanners'
import BestSeller from '../components/home/BestSeller'
import Categories from '../components/home/Categories'
import FeaturedProducts from '../components/home/FeaturedProducts'
import LatesProduct from '../components/home/LatesProduct'
import NewArrival from '../components/home/NewArrival'
import ShopSlides from '../components/home/ShopSlides'
import TopCategories from '../components/home/TopCategories'

const Home = () => {
  return (
    <div>
        <MainBanner/>
        <Categories/>
        <SubBanners/>
        <LatesProduct/>
        <SubBanners/>
        <TopCategories/>
        <SubBanners/>
        <FeaturedProducts/>
        <SlideBanner/>
        <BestSeller/>
        <ShopSlides/>
        <NewArrival/>

    </div>
  )
}

export default Home