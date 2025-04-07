/********** ********** ********** **********/
/* @fileoverview Game Card
/* @author Fereshteh Rohani
/* @created 2024-04-06
/* @modified 2024-04-06
/********** ********** ********** **********/

import { Game } from "@/hooks/useGames";
import { Card, CardBody, CardHeader, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={15} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <CardHeader fontSize={"1xl"}>{game.name}</CardHeader>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
