import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  TagLeftIcon,
  Center,
  Divider,
  Image,
  Flex,
  Button,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import {
  ArrowLeftIcon,
  CloseIcon,
  DeleteIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { SubToal } from "../../Redux/action";
import axios from "axios";
import { useNavigate } from "react-router-dom"

// this is cartpage


const CartPage = () => {
  const [TOTAl, setTotal] = useState(0);
  const { subTotal } = useSelector((store) => store.Reducer);
  console.log(subTotal);
  const dispatch = useDispatch();
  const [array, setArray] = useState([]);

  const navigate = useNavigate();
// getdata
  const getData = () => {
    axios.get(`https://mymock-sl72.onrender.com/cart`).then((res) => {
      console.log(res.data);
      setArray(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const total = array.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0);
    setTotal(total);
  }, [array]);

  const handlIncrease = (id) => {
    console.log(id);
    const newArr = array?.map((ele) => {
      if (ele.id === id) {
        return { ...ele, quantity: ele.quantity + 1 };
      }
      if (ele.id === id) {
        array.reduce((acc, curr) => {
          return acc + curr.price;
        }, 0);
      }
      return ele;
    });

    setArray(newArr);
  };

  const handlDecrease = (id) => {
    const newArr2 = array?.map((ele) => {
      if (ele.id === id && ele.quantity > 1) {
        return {
          ...ele,
          quantity: ele.quantity - 1,
        };
      }
      return ele;
    });
    console.log(newArr2);
    setArray(newArr2);
  };


  const handlClick = () => {
    dispatch(SubToal(TOTAl));
    navigate("/payment");
  };

  const handDel = (id) => {
    axios.delete(`https://mymock-sl72.onrender.com/cart/${id}`).then((res) => {
      getData();
    });
  };

  const AllDel = () => {
    setArray([]);
  };

  return (
    <Box m={5} bgColor="gray.50">
      <Box m="auto" w={["100%", "70%", "52%"]}>
        <Flex justifyContent="space-between" p="0px 30px">
          <Center>
            <Icon as={ArrowLeftIcon} w="5" bg={"#bd3b13"} color={"white"} />
          </Center>
          <Box>
            <Heading>MY CART({array.length})</Heading>
          </Box>
          <Flex
            onClick={AllDel}
            w={["100%", "30%", "18%"]}
            justifyContent="center"
            alignItems="center"
          >
            <Text>Clear Cart</Text>
            <TagLeftIcon
              color="black"
              boxSize="12px"
              as={DeleteIcon}
              ml={2}
            />
          </Flex>
        </Flex>
      </Box>
      <Divider
        m="auto"
        w={["100%", "100%", 620]}
        colorScheme="gray"
        orientation="horizontal"
        mt={5}
      />

      <Heading mt={5} m="auto 5" size="md" fontSize={{ base: '10px', md: '15px', lg: '20px' }}>
        YOUR ORDERS QUALIFIES FOR FREE SHIPPING!
      </Heading>

      <Divider
        m="auto"
        mt={5}
        mb={5}
        borderRadius="15"
        w={400}
        h="3"
        bg="#bd3b13"
        orientation="horizontal"
      />

      {/* ...........................MAP through the Array....................... */}
      {array.map((ele, i) => (
        <Box gap="5px" mt={10} m="auto" w={["100%", "70%", 620]} h={40} p={3} boxShadow="md" key={i}>
          <Flex>
            <Box bg="gray.200" p={5} borderRadius="md" w="100px" mt={3}>
              <Image w={100} src={ele.image} alt="" />
            </Box>

            <Box w={500} ml={5}>
              <Box mt={1}>
                <Flex justifyContent="space-between">
                  <Heading size="mid">{ele.title} </Heading>
                  <Center>
                    <Icon onClick={() => handDel(ele.id)} as={CloseIcon} mr="20px" />
                  </Center>
                </Flex>
              </Box>
              <Box mt={2}>
                <Flex>
                  <Button borderRadius="0" bgColor="gray" color="white" _hover={{ backgroundColor: "#bd3b13", color: "white" }} size="xs" variant="outline">
                    {"4"}
                    {" "}
                  </Button>
                  <Button borderRadius="0" bgColor="gray" color="white" _hover={{ backgroundColor: "#bd3b13", color: "white" }} size="xs" variant="outline" ml={2}>
                    {"8"}
                    {" "}
                  </Button>
                </Flex>
              </Box>
              <Box mt={5}>
                <Flex gap={5}>
                  <Button _hover={{ backgroundColor: "green", color: "white" }} onClick={() => handlDecrease(ele.id)}> - </Button>
                  <Center>
                    <Heading size={5}>{ele.quantity}</Heading>
                  </Center>
                  <Button _hover={{ backgroundColor: "green", color: "white" }} onClick={() => handlIncrease(ele.id)}> + </Button>
                  <Center>
                    <Heading size="md" ml={260}>
                      {ele.price * ele.quantity}$
                    </Heading>
                  </Center>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Box>
      ))}

      <Box w={620} m="auto">
        <Flex align="flex-start">
          <Checkbox colorScheme="red" defaultChecked mt={8} mb={5}>
            This order is a gift
            <Icon as={QuestionOutlineIcon} ml={2} />
          </Checkbox>
        </Flex>
      </Box>
      <Divider mt={4} m="auto" w={620} />
      <Box m="auto" w={620} mb={5} mt={3}>
        <Flex justifyContent="space-between">
          <Heading size="mid">SUBTOTAL :</Heading>
          <Heading size="mid" mr={2.5}>
            {TOTAl}$
          </Heading>
        </Flex>
      </Box>

      <Button
        bgColor="black"
        color="white"
        _hover={{ backgroundColor: "green", color: "white" }}
        onClick={handlClick}
        borderRadius="0"
        mt={10}
        m="auto"
        w={["100%", "50%", 630]}
      >
        CHECKOUT
      </Button>
    </Box>
  );
};

export default CartPage;
