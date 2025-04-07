/********** ********** ********** **********/
/* @fileoverview Critic Score
/* @author Fereshteh Rohani
/* @created 2024-04-06
/* @modified 2024-04-06
/********** ********** ********** **********/

import { Badge } from "@chakra-ui/react";
import { HiStar } from "react-icons/hi";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 95 ? "green" : score > 90 ? "yellow" : "red";
  return (
    <Badge
      variant="solid"
      fontSize={"12px"}
      borderRadius={"5px"}
      colorPalette={color}
    >
      <HiStar />
      {score}
    </Badge>
  );
};

export default CriticScore;
