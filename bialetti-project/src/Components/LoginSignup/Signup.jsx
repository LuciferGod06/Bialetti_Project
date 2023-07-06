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
import { Formik, Field } from "formik";
import "./signup.css";

const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Sign Up</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered >
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
                  fname: "",
                  lname: "",
                  email: "",
                  password: "",
                  rememberMe: false,
                }}
                onSubmit={(values) => {
                  alert(JSON.stringify(values, null, 2));
                }}
              >
                {({ handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                      <FormControl>
                        <FormLabel htmlFor="Fname">First Name</FormLabel>
                        <Field
                          as={Input}
                          id="Fname"
                          name="Fname"
                          type="text"
                          variant="filled"
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="Lname">Last Name</FormLabel>
                        <Field
                          as={Input}
                          id="Lname"
                          name="Lname"
                          type="text"
                          variant="filled"
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                          variant="filled"
                        />
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

                            if (value.length < 6) {
                              error =
                                "Password must contain at least 6 characters";
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
                  </form>
                )}
              </Formik>
              <br />
              <Text fontSize="sm">
                Already have an account? <Link>Login</Link>
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter textAlign={"center"}></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Signup;
