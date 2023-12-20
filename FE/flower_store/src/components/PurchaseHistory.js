import {getUsernameByJwt} from "../service/securityService";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import '../style/purchaseHistory.css';
import Footer from "./Footer";
import * as orderService from "../service/orderService";
import OrderDetailModal from "./OrderDetailModal";
import {dateTimeConverter} from "../utilities/DateTimeConverter";
import {msgOutLengthConverter} from "../utilities/MsgOutLengthConverter";
import {Modal} from "react-bootstrap";

function PurchaseHistory() {
    const flag = getUsernameByJwt() != null;
    const navigate = useNavigate();

    const [orders, setOrders] = useState();
    const [orderId, setOrderId] = useState();
    const [orderCode, setOrderCode] = useState();
    const [detailModalShow, setDetailModalShow] = useState(false);

    const [message, setMessage] = useState("");
    const [messageModalShow, setMessageModalShow] = useState(false);

    const handleMessageModalClose = () => {
        setMessageModalShow(false);
        setMessage("")
    }
    const handleMessageModalShow = (mes) => {
        setMessage(mes);
        setMessageModalShow(true);

    }


    const getOrders = async () => {
        const data = await orderService.getOrderByUsername(0, 5);
        await setOrders(data);
    }

    const isAuthenticated = () => {
        if (!flag) {
            navigate("/login");
        }
    }

    const getOrderDetail = async (id, code) => {
        setOrderId(id);
        setOrderCode(code)
        setDetailModalShow(true);
    }


    useEffect(() => {
        isAuthenticated();
        getOrders();
    }, [])

    if (!orders) {
        return null;
    }

    return (
        <>
            <div className="purchase-history-wrapper">
                <div className="ph-title-div">
                    <span className="ph-title-text">Lịch sử mua hàng</span>
                </div>

                <div className="ph-content container">
                    <div className="row">
                        <table className="ph-table col-xl-12">
                            <thead className="ph-thead">
                            <tr>
                                <th>#</th>
                                <th>Người đặt</th>
                                <th>Mã đơn hàng</th>
                                <th>Ngày đặt</th>
                                <th>Tin nhắn</th>
                                <th>Chi tiết</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                orders.length === 0 && <span className="fst-italic">Chưa có sản phẩm nào</span>
                            }
                            {
                                orders.length > 0 &&
                                orders.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.userFullname}</td>
                                            <td>{item.orderCode}</td>
                                            <td>{dateTimeConverter(item.time)}</td>
                                            <td>
                                                {msgOutLengthConverter(item.message, 45)}
                                                <i onClick={() => handleMessageModalShow(item.message)}
                                                   className="fa-solid fa-comment-dots ph-icon-detail"/>
                                            </td>
                                            <td>
                                                <i onClick={() => getOrderDetail(item.id, item.orderCode)}
                                                   className="fa-solid fa-circle-info ph-icon-detail"/>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <OrderDetailModal
                show={detailModalShow}
                setShow={setDetailModalShow}
                id={orderId}
                code={orderCode}/>

            <Modal
                show={messageModalShow}
                onHide={handleMessageModalClose}
                backdrop="static"
            >
                <Modal.Header className="logout-modal-header" closeButton>
                    <Modal.Title>Tin nhắn</Modal.Title>
                </Modal.Header>
                <Modal.Body className="logout-modal-body">
                    {message}
                </Modal.Body>
                <Modal.Footer>
                    <button className="logout-btn-modal-cancel"
                            onClick={handleMessageModalClose}>
                        Đóng
                    </button>
                </Modal.Footer>
            </Modal>

            <Footer/>
        </>
    )
}

export default PurchaseHistory;