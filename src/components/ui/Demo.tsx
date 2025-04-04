/********** ********** ********** **********/
/* @fileoverview Color Mode
/* @author Fereshteh Rohani
/* @created 2024-04-04
/* @modified 2024-04-04
/********** ********** ********** **********/

import { ColorModeButton } from "@/components/ui/color-mode";
import { HStack } from "@chakra-ui/react";

const Demo = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <ColorModeButton />
    </HStack>
  );
};

export default Demo;
