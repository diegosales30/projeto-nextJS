import { LinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { SiMaterialui, SiNodedotjs, SiTypescript } from "react-icons/si";
import { FaSass, FaGulp } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

const techs = [
  {
    name: "NODE-JS",
    icon: <SiNodedotjs color={"#539e43"} />,
  },
  {
    name: "TYPESCRIPT",
    icon: <SiTypescript color={"#017acb"} />,
  },
  {
    name: "MATERIAL-UI",
    icon: <SiMaterialui color={"#29b6f6"} />,
  },
  {
    name: "SASS",
    icon: <FaSass color={" #cc6699"} />,
  },

  {
    name: "GULP",
    icon: <FaGulp color={"#eb4a4b"} />,
  },
];

const NewTechs = () => {
  return (
    <Box
      w={"100%"}
      h={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-around"}
      padding={"10px"}
      bg={"#003140"}
      textAlign={"center"}
    >
      <Heading fontSize={"1.5rem"} color={"white"}>
        Tecnologias que estou aprimorando
      </Heading>
      <UnorderedList
        textAlign={["center", "center", "center", "center"]}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        maxW={"1360px"}
        h={"500px"}
        flexWrap={{ base: "wrap", md: "wrap", lg: "wrap" }}
        overflow={"scroll"}
      >
        {techs.map((tech, index) => (
          <ListItem listStyleType={"none"} key={index}>
            <Box
              w={"350px"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={5}
            >
              <Box fontSize={"5rem"}> {tech.icon} </Box>
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

export default NewTechs;
