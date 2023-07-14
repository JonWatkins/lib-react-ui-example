import React from "react"
import styles from './page.module.css'
import MainCarousel from '../components/Carousel'

import { 
  Grid, 
  GridRow, 
  GridColumn,
  Button,
} from "lib-react-ui"

const Home: React.FC = () => {
  return (
    <main className={styles.main}>
      <Grid fluid>
        <MainCarousel />
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
