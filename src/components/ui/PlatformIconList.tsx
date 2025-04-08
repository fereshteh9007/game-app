/********** ********** ********** **********/
/* @fileoverview Platform Icon List
/* @author Fereshteh Rohani
/* @created 2024-04-06
/* @modified 2024-04-06
/********** ********** ********** **********/

import { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaAndroid,
  FaLinux,
  FaApple,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    android: FaAndroid,
    linux: FaLinux,
    mac: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
    xbox: FaXbox,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.600"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
