import { Box, Flex } from "@chakra-ui/react";
import MyTechs from "../src/components/MyTechs";
import NewTechs from "../src/components/newTech";

export default function Tecnologias() {
  return (
    <Box>
      <Flex display={"flex"} flexDirection={"column"}>
        <MyTechs />
        <NewTechs />
      </Flex>
    </Box>
  );
}
