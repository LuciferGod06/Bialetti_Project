import { Button } from "@chakra-ui/react";
import { React } from "react"
import CartOrder from "../CartPage/CartOrder";

const OrderReview = ({ setSelectedBox }) => {
    return (
        <div>
            <CartOrder />
            <Button
                colorScheme="green"
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