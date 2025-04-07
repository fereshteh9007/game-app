import useGenres from "@/hooks/useGenres";
import { ListItem, ListRoot } from "@chakra-ui/react";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ListRoot>
      {genres.map((genre) => (
        <ListItem key={genre.id}>{genre.name}</ListItem>
      ))}
    </ListRoot>
  );
};

export default GenreList;
