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
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { postNewUserLogin } from "../../Redux/loginsignAction";
import { useDispatch } from "react-redux";

const Login = ({ onLoginClose, isLoginOpen, onLoginOpen }) => {
  const dispatch = useDispatch()
  return (
    <>
      {/* <Button onClick={onOpenL}>Login</Button> */}

      <Modal onClose={onLoginClose} isOpen={isLoginOpen} isCentered>
        <ModalOverlay />
        <ModalContent borderRightRadius="0" borderLeftRadius="0">
          <ModalHeader>LOGIN</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box align="center" justify="center" bg="white" p={1}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  rememberMe: false,
                }}
                onSubmit={(values) => {
                let data = JSON.parse(localStorage.getItem("userInfo"));

                if(values.email === data.email && values.password === data.password){
                  //Navigate to home page
                  alert("Login Success")
                }
                else{
                  alert("Incorrect Credentials")
                }

                 dispatch( postNewUserLogin(values,dispatch))

                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={2} align="flex-start">
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
                              error = "Please fill your password";
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
                        Login
                      </Button>
                    </VStack>
                  </form>
                )}
              </Formik>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
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
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
// import { postNewUserLogin } from "../../Redux/loginsignAction";
import { useDispatch } from "react-redux";

const Login = ({ onLoginClose, isLoginOpen, onLoginOpen }) => {
  const dispatch = useDispatch()
  return (
    <>
      {/* <Button onClick={onOpenL}>Login</Button> */}

      <Modal onClose={onLoginClose} isOpen={isLoginOpen} isCentered>
        <ModalOverlay />
        <ModalContent borderRightRadius="0" borderLeftRadius="0">
          <ModalHeader>LOGIN</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Box align="center" justify="center" bg="white" p={1}>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  rememberMe: false,
                }}
                onSubmit={(values) => {
                  let data = JSON.parse(localStorage.getItem("userInfo"));

                  if (values.email === data.email && values.password === data.password) {
                    //Navigate to home page
                    alert("Login Success")
                    onLoginClose();
                  }
                  else {
                    alert("Incorrect Credentials")
                  }

                  // dispatch(postNewUserLogin(values, dispatch))

                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={2} align="flex-start">
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
                              error = "Please fill your password";
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
                        Login
                      </Button>
                    </VStack>
                  </form>
                )}
              </Formik>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
