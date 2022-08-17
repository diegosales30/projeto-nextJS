import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import Gif from "../src/assets/prog.gif";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <Box
      bg={"#003140"}
      margin={{ base: "initial", sm: " initial", md: "auto" }}
      h={"100vh"}
      minH={"900px"}
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
          <Text color={"gray.200"} minW={"324px"} w={"70%"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem minima cupiditate accusamus at laudantium beatae
            reiciendis deleniti error sunt aliquam sapiente iusto, aliquid nulla
            dolorem esse provident velit consequatur hic? Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Exercitationem minima cupiditate
            accusamus at laudantium beatae reiciendis deleniti error sunt
            aliquam sapiente iusto, aliquid nulla dolorem esse provident velit
            consequatur hic?
          </Text>
          <Link href={"/projetos"}>
            <Button style={{}}>
              Projetos <ArrowRightIcon />
            </Button>
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
