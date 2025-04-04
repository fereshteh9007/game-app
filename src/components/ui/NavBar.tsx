/********** ********** ********** **********/
/* @fileoverview Nav Bar
/* @author Fereshteh Rohani
/* @created 2024-04-04
/* @modified 2024-04-04
/********** ********** ********** **********/

import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/mushroom.png";
import Demo from "../../components/ui/Demo";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" />
      <Text>Nav Bar</Text>
      <Demo />
    </HStack>
  );
};

export default NavBar;
