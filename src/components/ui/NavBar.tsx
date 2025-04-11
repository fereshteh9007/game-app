/********** ********** ********** **********/
/* @author Fereshteh Rohani
/* @created 2024-04-04
/* @modified 2024-04-04
/********** ********** ********** **********/

import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/mushroom.png";
import Demo from "../../components/ui/Demo";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} marginTop={4} marginBottom={3}>
      <Image src={logo} boxSize="50px" />
      <SearchInput onSearch={onSearch} />
      <Demo />
    </HStack>
  );
};

export default NavBar;
