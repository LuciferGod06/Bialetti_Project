import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  useDisclosure,
  Text,
  Link,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import Login from "./Login";
import {useDispatch} from 'react-redux'
import { postNewUser } from "../../Redux/loginsignAction";

const Signup = () => {

  const dispatch = useDispatch();

  // home page 
  const {
    isOpen: isSignupOpen,
    onOpen: onSignupOpen,
    onClose: onSignupClose,
  } = useDisclosure();


  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();

  const handleLoginClick = () => {
    onSignupClose();
    onLoginOpen();
  };

  return (
    <>
    
      {/* <Button onClick={onSignupOpen}>Sign Up</Button> */}

      <Modal isOpen={isSignupOpen} onClose={onSignupClose}>
        <ModalOverlay />
        <ModalContent
          borderRightRadius="0"
          borderLeftRadius="0"
          id="modelsignup"
        >
          <ModalHeader>SIGN UP</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box align="center" justify="center" bg="white" p={1}>
              <Formik
                initialValues={{
                  Fname: "",
                  Lname: "",
                  email: "",
                  password: "",
                  rememberMe: false,
                }}
                onSubmit={(values) => {
                  console.log(values);
                  localStorage.setItem("userInfo",JSON.stringify(values));
                  postNewUser(values,dispatch)
                  onSignupClose();
                  onLoginOpen();
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <Form onSubmit={handleSubmit}>
                    <VStack spacing={2} align="flex-start">
                      <FormControl isInvalid={!!errors.Fname && touched.Fname}>
                        <FormLabel htmlFor="Fname">First Name</FormLabel>
                        <Field
                          as={Input}
                          id="Fname"
                          name="Fname"
                          type="text"
                          variant="filled"
                          validate={(value) => {
                            let error;
                            if (!value) {
                              error = "*Required";
                            }
                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.Fname}</FormErrorMessage>
                      </FormControl>

                      <FormControl isInvalid={!!errors.Lname && touched.Lname}>
                        <FormLabel htmlFor="Lname">Last Name</FormLabel>
                        <Field
                          as={Input}
                          id="Lname"
                          name="Lname"
                          type="text"
                          variant="filled"
                          validate={(value) => {
                            let error;
                            if (!value) {
                              error = "*Required";
                            }
                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.Lname}</FormErrorMessage>
                      </FormControl>

                      <FormControl isInvalid={!!errors.email && touched.email}>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                          variant="filled"
                          validate={(value) => {
                            let error;
                            if (!value) {
                              error = "*Required";
                            } else if (
                              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                                value
                              )
                            ) {
                              error = "Invalid email address";
                            }
                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>

                      <FormControl
                        isInvalid={!!errors.password && touched.password}
                      >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Field
                          as={Input}
                          id="password"
                          name="password"
                          type="password"
                          variant="filled"
                          validate={(value) => {
                            let error;

                            if (!value) {
                              error = "*Required";
                            }
                            else if(value.length < 8){
                                error="Password should have alteast 8 characters"
                            }

                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      </FormControl>

                      <Field
                        as={Checkbox}
                        id="rememberMe"
                        name="rememberMe"
                        colorScheme={"blackAlpha"}
                      >
                        Remember me?
                      </Field>

                      <Button
                        type="submit"
                        bgColor="black"
                        color={"white"}
                        width="full"
                      >
                        Sign Up
                      </Button>
                    </VStack>
                  </Form>
                )}
              </Formik>
              <br />
              <Text fontSize="md">
                Already have an account?{" "}
                <b>
                  <Link onClick={handleLoginClick} cursor="pointer">
                    Login
                  </Link>
                </b>
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      <Login
        onLoginClose={onLoginClose}
        onLoginOpen={onLoginOpen}
        isLoginOpen={isLoginOpen}
      />
    </>
  );
};

export default Signup;
