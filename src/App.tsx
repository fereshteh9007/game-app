/********** ********** ********** **********/
/* @fileoverview App
/* @author Fereshteh Rohani
/* @created 2024-04-03
/* @modified 2024-04-04
/********** ********** ********** **********/

import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"', // Mobile
        lg: '"nav nav" "aside main"', // 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" bg="gold" hideBelow="lg">
        Aside
      </GridItem>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
