import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

interface SearchProps {
  searchTerm: string;
  sortBy: string;
  tags: string[];
}

export default function SearchBar({searchTerm, sortBy, tags} : SearchProps) {
  return (
   <>
      <InputGroup borderRadius={8} size="md">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input type="text" placeholder="Search..." border="1px solid #949494" />
      </InputGroup>
    </>
  
  );

}
