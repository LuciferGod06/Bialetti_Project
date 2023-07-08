import React, { useEffect, useState } from "react";
import { Box, Container, Divider, Flex, Text } from "@chakra-ui/react";

import { BsCart, BsCreditCard2Back } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineGift } from "react-icons/ai";
import { SettingsIcon } from "@chakra-ui/icons";
import { MdOutlineFeedback } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";

import PersonalInfo from "./PersonalInfo";

import PaymentCards from "./PaymentCards";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Services from "./Services";
import OrderReview from "./OrderReview";
import FeedBack from "./FeedBack";

const PaymentPage = () => {
    // const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const [selectedBox, setSelectedBox] = useState(0);

    const handleBoxClick = (index) => {
        setSelectedBox(index);
    };



    return (
        <Box bgColor="black" p={5}>
            {/* <Breadcrumbs /> */}
            <Flex mt={"20px"}>
                <Box
                    w="30%"
                    p={4}
                //  border={"1px solid red"}
                >
                    <Text
                        fontSize="4xl"
                        fontWeight="bold"
                        marginBottom={10}
                        color="white"
                    >
                        Payment Page
                    </Text>
                    <Container
                        mt={4}
                        p={2}
                        color="white"
                        fontSize={"xl"}
                        _hover={{ cursor: "pointer" }}
                    >
                        <Box onClick={() => handleBoxClick(0)}>
                            <Flex
                                align="center"
                                color={selectedBox === 0 ? "yellow.500" : "white"}
                            >
                                <RiAccountCircleFill size={24} />
                                <Text ml={1}>PERSONAL INFORMATION</Text>
                            </Flex>
                        </Box>
                        <Divider mt={2} mb={2} />
                        <Box onClick={() => handleBoxClick(1)}>
                            <Flex
                                align="center"
                                color={selectedBox === 1 ? "yellow.500" : "white"}
                            >
                                <BsCart />
                                <Text ml={2}>Order Review</Text>
                            </Flex>
                        </Box>

                        <Divider mt={2} mb={2} />
                        <Box onClick={() => handleBoxClick(2)}>
                            <Flex
                                align="center"
                                color={selectedBox === 2 ? "yellow.500" : "white"}
                            >
                                <BsCreditCard2Back />
                                <Text ml={2}>PAYMENT CARDS</Text>
                            </Flex>
                        </Box>
                        <Divider mt={2} mb={2} />
                        <Box onClick={() => handleBoxClick(3)}>
                            <Flex
                                align="center"
                                color={selectedBox === 3 ? "yellow.500" : "white"}
                            >
                                <SettingsIcon />
                                <Text ml={2}>SERVICE</Text>
                            </Flex>
                        </Box>
                        <Divider mt={2} mb={2} />
                        <Box onClick={() => handleBoxClick(4)}>
                            <Flex
                                align="center"
                                color={selectedBox === 4 ? "yellow.500" : "white"}
                            >
                                <MdOutlineFeedback />
                                <Text ml={2}>FEEDBACKS & QUESTIONS</Text>
                            </Flex>
                        </Box>
                    </Container>
                </Box>
                <Box w="70%">
                    {selectedBox === 0 ? (
                        <PersonalInfo setSelectedBox={setSelectedBox} />
                    ) : selectedBox === 1 ? (
                        <OrderReview setSelectedBox={setSelectedBox} />
                    ) : selectedBox === 2 ? (
                        <PaymentCards />
                    ) : selectedBox === 3 ? (
                        <Services />
                    ) :
                        (<FeedBack />)}
                </Box>
            </Flex>
        </Box>
    );
};

export default PaymentPage;