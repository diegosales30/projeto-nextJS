import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
  ListItem,
  UnorderedList,
  Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function HeaderComponent() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    //w={"100%"} position={"fixed"}
    <Box bg={"#171923"} color={"gray.300"}>
      <Flex
        maxW={"1360px"}
        bg={"#171923"}
        color={"gray.300"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
        margin={"auto"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            _hover={{ color: "gray.100" }}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          w={"100%"}
          display={{ base: "flex", md: "flex" }}
          justify={{ base: "end", md: "space-between" }}
        >
          <Link href={"/"}>
            <Avatar
              cursor={"pointer"}
              size={"sm"}
              src={"https://avatars.githubusercontent.com/u/95250284?v=4"}
            />
          </Link>

          <Flex>
            <UnorderedList
              display={{ base: "none", md: "flex" }}
              ml={10}
              alignItems={"center"}
              listStyleType={"none"}
              gap={5}
            >
              <Link href="/">
                <ListItem
                  cursor={"pointer"}
                  _hover={{
                    textDecoration: "underline",
                  }}
                  marginLeft={"10px"}
                >
                  Home
                </ListItem>
              </Link>

              <Link href="/tecnologias">
                <ListItem
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline" }}
                  marginLeft={"10px"}
                >
                  Tecnologias
                </ListItem>
              </Link>

              <Link href="/projetos">
                <ListItem
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline" }}
                  marginLeft={"10px"}
                >
                  Projetos
                </ListItem>
              </Link>
              <Link href="/contatos">
                <ListItem
                  cursor={"pointer"}
                  _hover={{ textDecoration: "underline" }}
                  marginLeft={"10px"}
                >
                  Contatos
                </ListItem>
              </Link>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Flex bg={"#171923"} color={"gray.300"}>
          <UnorderedList
            padding={0}
            margin={0}
            top={61}
            bg={"#171923"}
            color={"gray.300"}
            p={5}
            display={{ md: "none" }}
            listStyleType={"none"}
          >
            <Link href="/">
              <ListItem
                cursor={"pointer"}
                _hover={{ textDecoration: "underline" }}
                mt={"0px"}
              >
                Home
              </ListItem>
            </Link>

            <Link href="/tecnologias">
              <ListItem
                cursor={"pointer"}
                _hover={{ textDecoration: "underline" }}
                mt={"10px"}
              >
                Tecnologias
              </ListItem>
            </Link>

            <Link href="/projetos">
              <ListItem
                cursor={"pointer"}
                _hover={{ textDecoration: "underline" }}
                mt={"10px"}
              >
                Projetos
              </ListItem>
            </Link>
            <Link href="/contatos">
              <ListItem
                cursor={"pointer"}
                _hover={{ textDecoration: "underline" }}
                mt={"10px"}
              >
                Contatos
              </ListItem>
            </Link>
          </UnorderedList>
        </Flex>
      </Collapse>
    </Box>
  );
}
