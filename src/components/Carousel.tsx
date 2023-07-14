'use client'

import React from "react"
import {   
  GridRow, 
  GridColumn,
  Carousel, 
  CarouselItem 
} from "lib-react-ui"

const MainCarousel: React.FC = () => {
  return (
    <GridRow className="mb-6">
      <GridColumn breakPoint="lg" colWidth="12">
        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
        </Carousel>
      </GridColumn>
    </GridRow>
  )
}

export default MainCarousel
