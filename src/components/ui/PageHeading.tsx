/********** ********** ********** **********/
/* @author Fereshteh Rohani
/* @created 2024-04-10
/* @modified 2024-04-10
/********** ********** ********** **********/

import { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}

const PageHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="3xl">
      {heading}
    </Heading>
  );
};

export default PageHeading;
