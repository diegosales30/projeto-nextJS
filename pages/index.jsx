import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Gif from "../src/assets/prog.gif";
import Image from "next/image";
import Link from "next/link";
import { ViewIcon, ArrowRightIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <Box
      bg={"#003140"}
      margin={{ base: "initial", sm: " initial", md: "auto" }}
      h={"100vh"}
      minH={"1000px"}
      minW={"324px"}
    >
      <Flex
        h={"100%"}
        maxW={"1360px"}
        margin={{ base: "initial", md: "auto" }}
        align={"center"}
        justify={"space-around"}
        flexWrap={{ base: "wrap", sm: "wrap", md: "nowrap" }}
        bg={"#003140"}
        gap={20}
      >
        <Box
          marginTop={"30px"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          w={"100%"}
          gap={5}
        >
          <Heading
            as="h2"
            size="2xl"
            textAlign="center"
            color={"gray.200"}
            w={"80%"}
          >
            Olá, Sou Diego Sales, Dev Front End jr.
          </Heading>
          <Text color={"gray.200"} minW={"324px"} w={"70%"} fontWeight={"bold"}>
            Seja bem-vindo. Me chamo Diego Sales e sou um desenvolvedor
            Front-end. Sou natural de Manaus-AM. Sou Amante da natureza e
            entusiasta da preservação do meio ambiente. Sou apaixonado por
            tecnologia e por programação e estou sempre em busca de novas
            oportunidades para aprimorar meus conhecimentos. Gosto muito de
            aprender novas tecnologias, mas também gosto de fazer um som de
            violão com os amigos. Sou desenvolvedor Front-end React e estou
            estudando Nodejs para me tornar um desenvolvedor Full-stack.
          </Text>
          <Link href={"/projetos"}>
            <Box
              border={"1px solid white"}
              borderRadius={"5px"}
              padding={"10px"}
              bg={"#ffffff"}
              fontWeight={"bold"}
              cursor={"pointer"}
              _hover={{
                bg: "#003140",
                marginLeft: "9px",
                color: "white",
              }}
              transition={"all 0.3s ease-in-out"}
            >
              Projetos <ViewIcon fontSize={"1.3rem"} />
            </Box>
          </Link>
        </Box>
        <Box
          w={"80%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            src={Gif}
            alt="gif"
            style={{
              borderRadius: "100%",
            }}
          />
        </Box>
      </Flex>
    </Box>
  );
};
export default Home;
