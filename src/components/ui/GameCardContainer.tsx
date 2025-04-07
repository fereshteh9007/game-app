/********** ********** ********** **********/
/* @fileoverview GameGrid
/* @author Fereshteh Rohani
/* @created 2024-04-06
/* @modified 2024-04-06
/********** ********** ********** **********/

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
