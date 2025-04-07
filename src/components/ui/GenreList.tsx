/********** ********** ********** **********/
/* @fileoverview Genres
/* @author Fereshteh Rohani
/* @created 2024-04-06
/* @modified 2024-04-07
/********** ********** ********** **********/

import useGenres from "@/hooks/useGenres";
import { ListItem, ListRoot } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ListRoot>
      {data.map((genre) => (
        <ListItem key={genre.id}>{genre.name}</ListItem>
      ))}
    </ListRoot>
  );
};

export default GenreList;
