/********** ********** ********** **********/
/* @fileoverview Genres
/* @author Fereshteh Rohani
/* @created 2024-04-06
/* @modified 2024-04-08
/********** ********** ********** **********/

import useGenres from "@/hooks/useGenres";
import {
  HStack,
  Image,
  ListItem,
  ListRoot,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

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
