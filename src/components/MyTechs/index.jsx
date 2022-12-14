import { LinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import {
  SiChakraui,
  SiCss3,
  SiElectron,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiStyledcomponents,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const techs = [
  {
    name: "HTML",
    icon: <SiHtml5 color={"#f5612d"} />,
  },
  {
    name: "CSS",
    icon: <SiCss3 color={"#006bc0"} />,
  },
  {
    name: "JAVASCRIPT",
    icon: <SiJavascript color={"#f8dc3e"} />,
  },
  {
    name: "REACT-JS",
    icon: <SiReact color={"#61dbf9"} />,
  },

  {
    name: "NEXT-JS",
    icon: <TbBrandNextjs color={"#fcfcfc"} />,
  },
  {
    name: "REDUX",
    icon: <SiRedux color={"#764abc"} />,
  },
  {
    name: "CONTEXT-API",
    icon: <SiElectron color={"#61dbf9"} />,
  },
  {
    name: "GIT/GITHUB",
    icon: <SiGithub color={"#fcfcfc"} />,
  },
  {
    name: "CHAKRA-UI",
    icon: <SiChakraui color={"#6ecacf"} />,
  },
  {
    name: "STYLED-C",
    icon: <SiStyledcomponents color={"#e79478"} />,
  },
];

const MyTechs = () => {
  return (
    <Box
      w={"100%"}
      h={"100%"}
      //margin={"auto"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-around"}
      padding={"5px"}
      bg={"#003140"}
    >
      <Heading fontSize={"1.5rem"} color={"white"} padding={5}>
        Ferramentas
      </Heading>
      <UnorderedList
        textAlign={["center", "center", "center", "center"]}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        maxW={"750px"}
        boxShadow={" 4px 3px 16px 3px #0000001f"}
        borderRadius={5}
        h={"20rem"}
        flexWrap={{ base: "wrap", md: "wrap", lg: "wrap" }}
        overflowY={"scroll"}
        css={{
          "::-webkit-scrollbar": {
            background: "#080707bc",
            width: "5px",
          },
        }}
      >
        {techs.map((tech, index) => (
          <ListItem listStyleType={"none"} key={index}>
            <Box
              w={"150px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={5}
              padding={10}
            >
              <Box fontSize={"3rem"}> {tech.icon} </Box>
              <Box fontWeight={"bold"} color={"#ffffff"}>
                {tech.name}{" "}
              </Box>
            </Box>
          </ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default MyTechs;
