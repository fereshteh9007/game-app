/********** ********** ********** **********/
/* @fileoverview App
/* @author Fereshteh Rohani
/* @created 2024-04-03
/* @modified 2024-04-08
/********** ********** ********** **********/

import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";
import GameGrid from "./components/ui/GameGrid";
import GenreList from "./components/ui/GenreList";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import PlatformSelector from "./components/ui/PlatformSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"', // Mobile
        lg: '"nav nav" "aside main"', // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" hideBelow="lg" paddingX={"5"}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
