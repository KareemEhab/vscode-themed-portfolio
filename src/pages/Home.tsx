import {
  Image,
  Text,
  VStack,
  Flex,
  Box,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import myImage from "../assets/my_image.webp";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import HomeItem from "../components/HomeItem";
import { useEffect } from "react";

interface Props {
  setPage: (page: string) => void;
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Home = ({ setPage }: Props) => {
  useEffect(() => {
    setPage("home.js");
  }, []);

  const accentColor = "#0BCEAF";
  const bgGradient = useColorModeValue(
    "linear(to-r, gray.700, gray.900)",
    "linear(to-r, gray.800, gray.900)"
  );

  return (
    <Flex
      minHeight="100%"
      justify="space-around"
      align="center"
      direction={{ base: "column-reverse", md: "row" }}
      px={{ base: 4, md: 8 }}
      py={{ base: 8, md: 0 }}
      gap={{ base: 8, md: 16 }}
    >
      <VStack
        alignItems="flex-start"
        justify="center"
        spacing={4}
        animation={`${fadeIn} 0.5s ease-out`}
      >
        <Box>
          <Text
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            letterSpacing="wide"
          >
            KAREEM HAMOUDA
          </Text>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            color={accentColor}
            marginBottom={{ base: 6, md: 10 }}
          >
            Full Stack Developer | MERN
          </Text>
        </Box>

        <Box
          p={6}
          borderRadius="xl"
          bgGradient={bgGradient}
          boxShadow="xl"
          width="100%"
          transition="transform 0.3s"
        >
          <VStack spacing={4} align="stretch">
            <HomeItem
              Icon={IoMdMail}
              Label="kareem.e.hamouda@gmail.com"
              Link="/contact"
            />
            <HomeItem
              Icon={FaLocationDot}
              Label="Cairo, Egypt"
              Link="https://www.google.com/maps/place/Cairo,+Cairo+Governorate/@30.0594885,31.2584644,13z"
            />
            <HomeItem Icon={FaPhoneAlt} Label="+20 115 111 9085" Link="" />
          </VStack>
        </Box>

        <Box
          p={6}
          borderRadius="xl"
          bgGradient={bgGradient}
          boxShadow="xl"
          width="100%"
          transition="transform 0.3s"
        >
          <VStack spacing={4} align="stretch">
            <HomeItem
              Icon={FaUniversity}
              Label="Ain Shams University"
              Link="https://www.asu.edu.eg/"
            />
            <HomeItem
              Icon={FaGraduationCap}
              Label="Bachelor's Degree in Computer Science"
              Link="https://cis.asu.edu.eg/"
            />
          </VStack>
        </Box>

        <Box
          p={6}
          borderRadius="xl"
          bgGradient={bgGradient}
          boxShadow="xl"
          width="100%"
          transition="transform 0.3s"
        >
          <VStack spacing={4} align="stretch">
            <HomeItem
              Icon={FaGithub}
              Label="GitHub"
              Link="https://github.com/KareemEhab"
            />
            <HomeItem
              Icon={FaLinkedin}
              Label="LinkedIn"
              Link="https://www.linkedin.com/in/kareem-hamouda/"
            />
            <HomeItem
              Icon={FaFacebook}
              Label="Facebook"
              Link="https://www.facebook.com/kareem.ehab.37"
            />
            <HomeItem
              Icon={FaInstagram}
              Label="Instagram"
              Link="https://www.instagram.com/kareem.ehabz/"
            />
          </VStack>
        </Box>
      </VStack>

      <Box position="relative" animation={`${fadeIn} 0.5s ease-out`}>
        <Box
          position="absolute"
          inset="0"
          borderRadius="50%"
          bgGradient={`radial(${accentColor}, transparent 70%)`}
          opacity="0.15"
          filter="blur(15px)"
        />
        <Image
          src={myImage}
          boxSize={{ base: "250px", md: "425px" }}
          borderRadius="50%"
          border="4px solid"
          borderColor={accentColor}
          transition="transform 0.3s"
          _hover={{ transform: "scale(1.02)" }}
        />
      </Box>
    </Flex>
  );
};

export default Home;
