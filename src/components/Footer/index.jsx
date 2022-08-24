import {
  Box,
  Container,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { LockIcon } from "@chakra-ui/icons";
import { SiGmail, SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <Box bg={"#171923"} color={"gray.300"} height={"5rem"} display={"center"}>
      <Container
        as={Stack}
        maxW={"1360px"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={2}
        justify={{ base: "center", md: "space-between" }}
        alignItems={{ base: "center", md: "center", lg: "center" }}
      >
        <Text
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          gap={2}
        >
          <LockIcon /> 2022 Diego Front-end jr. All rights reserved
        </Text>

        <Stack direction={"row"} spacing={6}>
          <Link
            label={"Gmail"}
            href={"mailto:diegofelipesales23@gmail.com"}
            target={"_black"}
          >
            <SiGmail size={"1.5rem"} />
          </Link>
          <Link
            label={"Linkedin"}
            href={"https://www.linkedin.com/in/diego-felipe-js/"}
            target={"_black"}
          >
            <SiLinkedin size={"1.5rem"} />
          </Link>
          <Link
            label={"Github"}
            href={"https://github.com/diegosales30"}
            target={"_black"}
          >
            <SiGithub size={"1.5rem"} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
