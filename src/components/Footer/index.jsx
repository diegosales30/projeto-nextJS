import {
  Box,
  Container,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { SunIcon, LockIcon } from "@chakra-ui/icons";
import { MdSettings } from "react-icons/md";

export default function Footer() {
  return (
    <Box bg={"#171923"} color={"gray.300"}>
      <Container
        as={Stack}
        maxW={"1280px"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={2}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text textAlign={"center"}>
          © 2022 Diego Front-end jr. All rights reserved
        </Text>

        <Stack direction={"row"} spacing={6}>
          <Link label={"WhatsApp"} href={"#"} target={"_black"}>
            <LockIcon />
          </Link>
          <Link label={"Facebook"} href={"#"} target={"_black"}></Link>
        </Stack>
      </Container>
    </Box>
  );
}
