'use client'

import React from "react"
import styles from './page.module.css'

import { 
  Grid, 
  GridRow, 
  GridColumn,
  Carousel,
  CarouselItem,
  Button,
} from "lib-react-ui"

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <Grid fluid>
        <GridRow className="mb-6">
          <GridColumn breakPoint="lg" colWidth="12">
            <Carousel>
              <CarouselItem>Item 1</CarouselItem>
              <CarouselItem>Item 2</CarouselItem>
            </Carousel>
          </GridColumn>
        </GridRow>

        <GridRow className="mb-6">
          <GridColumn colWidth="6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</p>
          </GridColumn>
          <GridColumn colWidth="6">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</p>
          </GridColumn>
        </GridRow>
        <GridRow>
          <GridColumn colWidth="3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</p>
            <Button className="mt-6" text="Click Me" />
          </GridColumn>
          <GridColumn colWidth="3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</p>
            <Button className="mt-6" text="Click Me" />
          </GridColumn>
          <GridColumn colWidth="3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</p>
            <Button className="mt-6" text="Click Me" />
          </GridColumn>
          <GridColumn colWidth="3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.</p>
            <Button className="mt-6" text="Click Me" />
          </GridColumn>
        </GridRow>
      </Grid>
    </main>
  )
}

export default Home
