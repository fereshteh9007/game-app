/********** ********** ********** **********/
/* @fileoverview Genres
/* @author Fereshteh Rohani
/* @created 2024-04-06
/* @modified 2024-04-08
/********** ********** ********** **********/

import useGenres from "@/hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  ListItem,
  ListRoot,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url";
import { Genre } from "@/hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
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
            <Button
              key={genre.id}
              fontSize="lg"
              variant="ghost"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </ListRoot>
  );
};

export default GenreList;
