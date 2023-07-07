import { Button } from "@chakra-ui/react";
import { React } from "react"

const OrderReview = ({ setSelectedBox }) => {
    return (
        <div>
            <Button
                colorScheme="red"
                mx={"5px"}
                my={"5px"}
                size={"md"}
                onClick={() => setSelectedBox(2)}
            >
                Make Payment
            </Button>
        </div>
    )
}

export default OrderReview;