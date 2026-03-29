import React from 'react'
import Hero from '../../components/hero/Hero'
import Features from '../../components/features/Features'
import TileCollections from '../../components/tile-collections/TileCollections'
import SalesHits from '../../components/sales-hits/SalesHits'
import PopularBrands from '../../components/popular-brands/PopularBrands'
import Posts from '../../components/post/Posts'
import SeoBlock from '../../components/seo-block/SeoBlock'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Features/>
        <TileCollections/>
        <SalesHits/>
        <PopularBrands/>
        <Posts/>
        <SeoBlock/>
    </div>
  )
}

export default Home
