import {PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer} from "@paypal/react-paypal-js";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import * as cartService from "../service/cartService";
import {getCartFromAPI} from "../provider/actions";

const style = {"layout": "vertical"};
export default function MyPayPalV2(event) {
    const {totalCost, closeModalFn, orderMsg} = event;
    const totalCostInUSD = Math.round(totalCost / 24000);
    const dispatch = useDispatch();

    const createOrder = (data, actions, err) => {
        return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
                {
                    description: "Order from Daisy",
                    amount: {
                        value: totalCostInUSD,
                    },
                },
            ],
        });
    }

    const onApprove = async (data, actions) => {
        const order = await actions.order.capture();
        const res = await cartService.payCart(orderMsg);
        if (res.status === 200) {
            toast("Thanh toán thành công");
            closeModalFn();
            dispatch(getCartFromAPI());
        } else {
            toast("Thanh toán không thành công");
            closeModalFn();
        }
    }

    const onError = (err) => {

    }

    const ButtonWrapper = ({showSpinner}) => {
        const [{isPending}] = usePayPalScriptReducer();
        return (
            <>
                {(showSpinner && isPending) && <div className="spinner"/>}
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[style]}
                    fundingSource={undefined}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={err => onError(err)}
                />
            </>
        );
    }

    const initOption = {
        clientId: "AZq6KHnWdZdcGP-1sJS9IVxzx2BMY5BgksL2jGgbaO5ycRC7X0NAMjlIZyRk-KYkySJfQEYqdo66lOdw",
        components: "div",
        currency: "USD",
    }

    return (
        <div style={{maxWidth: "750px", minHeight: "auto"}}>
            <PayPalScriptProvider options={initOption}>
                <ButtonWrapper showSpinner={true}/>
            </PayPalScriptProvider>
        </div>
    );
}