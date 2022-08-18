import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import img1 from "../src/assets/imagens/do-it.png";
import img2 from "../src/assets/imagens/tic.png";
import img3 from "../src/assets/imagens/easymovie.png";
import img4 from "../src/assets/imagens/organizze.png";
import img5 from "../src/assets/imagens/refri.png";
import img6 from "../src/assets/imagens/bv.png";
import Link from "next/link";
import { ViewIcon } from "@chakra-ui/icons";

const Data = [
  { img: img1, title: "Do It", url: "https://do-it-react.vercel.app/" },
  {
    img: img2,
    title: "Tiao Carreiro",
    url: "https://tiao-carreiro.vercel.app/",
  },
  {
    img: img3,
    title: "EasyMovie",
    url: "https://capstone-easy-movie.vercel.app/",
  },

  {
    img: img4,
    title: "OrganEasy",
    url: "https://organ-easy.vercel.app/",
  },
  {
    img: img5,
    title: "RefriBek",
    url: "https://refribek.vercel.app/",
  },
  {
    img: img6,
    title: "Em Breve...",
    url: "#",
  },
];

export default function Projetos() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    let abortController = new AbortController();

    function getGitHubAPI() {
      fetch("https://api.github.com/users/diegosales30/repos")
        .then(async (res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
          let data = await res.json();
          setRepo(data);
        })
        .catch((e) => console.log(e));
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);

  return (
    <Box
      bg={"#003140"}
      margin={{ base: "initial", sm: " initial", md: "auto", lg: "auto" }}
      //h={"100vh"}
      minH={"1000px"}
      minW={"324px"}
    >
      <Flex
        h={"100%"}
        maxW={"1360px"}
        margin={{ base: "initial", md: "auto" }}
        align={"center"}
        justify={"space-around"}
        flexDirection={"column"}
        bg={"#003140"}
        gap={5}
      >
        <Heading as="h1" size="xl" color="white" fontWeight="bold" mt={"10px"}>
          Projetos
        </Heading>
        <Flex
          w={"80%"}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          flexWrap={{ base: "wrap", sm: "wrap", md: "wrap" }}
        >
          {Data.map((item, index) => (
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              key={index}
              w={"300px"}
              textAlign={"center"}
              padding={"10px"}
            >
              <Box
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.01)",
                }}
                borderRadius={"10px"}
                padding={0}
                bg={"#00000096"}
                boxShadow={"0px 0px 10px rgba(95, 94, 94, 0.596)"}
              >
                <Image src={item.img} alt={item.title} />
              </Box>
              <Link href={item.url} target={"_blank"}>
                <Text fontSize={"1.2rem"} color={"white"} cursor={"pointer"}>
                  Vercel: {item.title}
                </Text>
              </Link>
            </Box>
          ))}
        </Flex>
        <Box
          maxW={"1360px"}
          margin={"auto"}
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          mb={"10px"}
        >
          <Link href={"https://github.com/diegosales30"} target={"_blank"}>
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
              ir para Github <ViewIcon fontSize={"1.3rem"} />
            </Box>
          </Link>
        </Box>
        <Box w={"100%"}>
          <Heading
            as="h2"
            size="xl"
            textAlign="center"
            color={"gray.200"}
            mt={"30px"}
          >
            API GitHub
          </Heading>

          <Box overflowY={"scroll"} maxW={"1360px"}>
            <UnorderedList
              maxW={"700px"}
              h={"400px"}
              color={"white"}
              boxShadow={`0px 0px 10px #080707bc`}
              overflow={"scroll"}
              margin={"auto"}
              mb={"10px"}
            >
              {repo.map((item) => (
                <ListItem
                  key={item.id}
                  boxShadow={`0px 0px 10px #080707bc`}
                  borderRadius={"5px"}
                  mt={"15px"}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Text fontWeight="bold">{item.name.toUpperCase()}</Text>
                  <Text textAlign={"center"}> {item.url}</Text>
                  <Text>
                    Data Criação:
                    {Intl.DateTimeFormat("pt-BR").format(
                      new Date(item.created_at)
                    )}
                  </Text>
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
