import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import {toast} from "react-toastify";
import {getUsernameByJwt} from "../service/securityService";

function PaypalBtn() {
    const style = {"layout": "vertical"};
    const createOrder = () => {
        // replace this url with your server
        //đoạn này sẽ tạo đơn hàng
        const username = getUsernameByJwt();
        return fetch(`http://localhost:8080/api/member/carts/pay?username=${username}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((order) => {
                //đoạn code này sẽ tạo đơn hàng -> gán giá trị vào init
                return order.id;
            });
    }

    const onApprove = (data) => {
        // replace this url with your server
        //đoạn này sau khi thêm thành công hàng hóa vào order + order detail
        return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID,
            }),
        })
            .then((response) => response.json())
            .then((orderData) => {
                //đoạn code này sẽ call api, gửi dữ liệu và thanh toán bằng số dư tài khoản
                toast("Thanh toán thành kông");
            });
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
                />
            </>
        );
    }

    const initOption = {
        clientId: "AaN1o_ZQlCJCtYoL91VtXvwvaucdi7Le_sW2-fj4-PNXsJLyl-HSyAQq5qExbpqyjKrUe5XY0IC3b1oM",
        components: "buttons",
        currency: "USD",
    }

    return (
        <div style={{maxWidth: "750px", minHeight: "200px"}}>
            <PayPalScriptProvider options={initOption}>
                <ButtonWrapper showSpinner={false}/>
            </PayPalScriptProvider>
        </div>
    )
}

export default PaypalBtn;