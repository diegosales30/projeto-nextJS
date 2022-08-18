import { Box, Container, Flex, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import {
  SiGmail,
  SiLinkedin,
  SiGithub,
  SiWhatsapp,
  SiInstagram,
} from "react-icons/si";

const DATA = [
  {
    url: "mailto:diegofelipesales23@gmail.com",
    icon: <SiGmail size={"2.5rem"} color={"#f14336"} />,
  },
  {
    url: "https://www.linkedin.com/in/diego-felipe-js/",
    icon: <SiLinkedin size={"2.5rem"} color={"#0e76a8"} />,
  },
  {
    url: "https://www.instagram.com/dihcode/",
    icon: <SiInstagram size={"2.5rem"} color={"#db316d"} />,
  },
  {
    url: "https://wa.me/5592994748629",
    icon: <SiWhatsapp size={"2.5rem"} color={"#34af23"} />,
  },
  {
    url: "https://github.com/diegosales30",
    icon: <SiGithub size={"2.5rem"} color={"white"} />,
  },
];

import gif from "../../assets/prog.gif";
const FaleComigo = () => {
  return (
    <>
      <Box
        h={"100vh"}
        padding={10}
        bg={"#003140"}
        maxW={"1360px"}
        margin={"0 auto"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        minH={"600px"}
      >
        <Flex
          h={"80vh"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={10}
        >
          <Box>
            <Heading as="h1" size="xl" color="white" fontWeight="bold">
              Fale comigo
            </Heading>
          </Box>
          <Container
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-around"}
            flexWrap={{ base: "wrap", sm: "wrap", md: "nowrap" }}
            gap={20}
          >
            {DATA.map((item, index) => (
              <Stack key={index} direction={"row"} spacing={6}>
                <a href={item.url} target={"_blank"}>
                  {item.icon}
                </a>
              </Stack>
            ))}
          </Container>
          <Box margin={"0 auto"} maxW={"350px"} minW={"200px"}>
            <Image
              src={gif}
              alt="Fale comigo"
              style={{
                borderRadius: "100%",
              }}
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default FaleComigo;
