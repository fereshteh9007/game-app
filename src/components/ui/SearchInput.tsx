/********** ********** ********** **********/
/* @author Fereshteh Rohani
/* @created 2024-04-10
/* @modified 2024-04-10
/********** ********** ********** **********/

import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) onSearch(searchRef.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={searchRef}
          borderRadius={15}
          placeholder={"Search Games"}
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
