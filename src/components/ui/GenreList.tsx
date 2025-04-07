/********** ********** ********** **********/
/* @fileoverview Genres
/* @author Fereshteh Rohani
/* @created 2024-04-06
/* @modified 2024-04-07
/********** ********** ********** **********/

import useGenres from "@/hooks/useGenres";
import { HStack, Image, ListItem, ListRoot, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ListRoot>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"10px"}>
          <HStack>
            <Image
              boxSize={"40px"}
              borderRadius={10}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </ListRoot>
  );
};

export default GenreList;
