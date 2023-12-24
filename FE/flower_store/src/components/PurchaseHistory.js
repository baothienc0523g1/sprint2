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

    const [orderCodeForSearch, setOrderCodeForSearch] = useState("");

    const initCurPage = 0;
    const initSizeOfPage = 5;

    const [curPage, setCurPage] = useState(initCurPage);
    const [sizeOfPage, setSizeOfPage] = useState(initSizeOfPage);

    const [orderId, setOrderId] = useState();
    const [orderCode, setOrderCode] = useState();
    const [detailModalShow, setDetailModalShow] = useState(false);

    const [message, setMessage] = useState("");
    const [messageModalShow, setMessageModalShow] = useState(false);

    const initTableHeight = 45; //45 pixel
    const [tableHeight, setTableHeight] = useState(initTableHeight * sizeOfPage);

    const [totalPage, setTotalPage] = useState();
    const [orders, setOrders] = useState([]);

    const isAuthenticated = () => {
        if (!flag) {
            navigate("/login");
        }
    }

    const getOrders = async (curPage, sizeOfPage, orderCodeForSearch) => {
        const data = await orderService.getOrderByUsername(
            curPage,
            sizeOfPage,
            orderCodeForSearch);

        setTotalPage(data.totalPages);
        setOrders(data.content);
    }

    const handleSetSizeOfPage = (event) => {
        setSizeOfPage(event.target.value);
        setCurPage(initCurPage);
        setTableHeight(event.target.value * initTableHeight);
    }


    const handleChangeOrderCode = (event) => {
        setOrderCodeForSearch(event.target.value);
    }

    const handleSearchOrder = (e) => {
        if (e.key === 'Enter') {
            getOrders(curPage,
                sizeOfPage,
                orderCodeForSearch);
        }
    }

    const handleResetSearch = () => {
        setOrderCodeForSearch("");
        getOrders(curPage,
            sizeOfPage,
            "");
    }

    const handleMessageModalClose = () => {
        setMessageModalShow(false);
        setMessage("")
    }

    const handleMessageModalShow = (mes) => {
        setMessage(mes);
        setMessageModalShow(true);
    }

    const getOrderDetail = async (id, code) => {
        await setOrderId(id);
        await setOrderCode(code)
        setDetailModalShow(true);
    }

    const nextPageFn = async () => {
        if (curPage + 1 < totalPage) {
            setCurPage(curPage + 1);
        }
    }

    const prevPageFn = async () => {
        if (curPage > 0) {
            setCurPage(page => page - 1);
        }
    }

    useEffect(() => {
        isAuthenticated();
        getOrders(curPage,
            sizeOfPage,
            orderCodeForSearch);
    }, [curPage, sizeOfPage, totalPage])

    return (
        <>
            <div className="purchase-history-wrapper">
                <div className="ph-title-div">
                    <span className="ph-title-text">Lịch sử mua hàng</span>
                </div>

                <div className="ph-content container mb-5">
                    <div className="mb-3 mt-5 d-flex justify-content-between">
                        <div style={{
                            placeSelf: "center"
                        }}>
                            <label htmlFor="ph-psize">Số hàng mỗi trang: </label>
                            <select name="ph-psize" className="ph-psize" id="ph-psize"
                                    onChange={event => handleSetSizeOfPage(event)}>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                            </select>
                        </div>


                        <div className="d-flex gap-2">
                            <input type="text" className="search-input"
                                   value={orderCodeForSearch}
                                   onChange={(event) => handleChangeOrderCode(event)}
                                   placeholder={"Tìm kiếm mã đơn hàng"}
                                   onKeyDown={handleSearchOrder}/>
                            <button className="btn btn-outline-secondary" onClick={handleResetSearch}>Xóa bộ lọc
                            </button>
                        </div>


                    </div>

                    <div className="table-wrapper" style={{
                        minHeight: `${tableHeight}px`,
                        maxHeight: `${tableHeight}px`
                    }}>
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
                                    !orders && <span className="fst-italic">Chưa có lịch sử nào</span>
                                }

                                {
                                    orders &&
                                    orders.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1 + (curPage * sizeOfPage)}</td>
                                                <td>{item.userFullname}</td>
                                                <td>{item.orderCode}</td>
                                                <td>{dateTimeConverter(item.time)}</td>

                                                {
                                                    item.message.length > 45 ?
                                                        (<td> {msgOutLengthConverter(item.message, 45)}
                                                            <i onClick={() => handleMessageModalShow(item.message)}
                                                               className="fa-solid fa-comment-dots ph-icon-detail"/>
                                                        </td>)
                                                        :
                                                        <td>
                                                            {item.message}
                                                        </td>
                                                }

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

                    <div className="ph-page-area">
                        <div className="ph-page-area-child">
                            <div>
                                <button className="ph-forw-btn" onClick={prevPageFn}>
                                    <i className="fa-solid fa-caret-left"/>
                                </button>
                            </div>

                            <div className="ph-curpage">
                                <span> {curPage + 1} / {totalPage} </span>
                            </div>

                            <div>
                                <button className="ph-forw-btn" onClick={nextPageFn}>
                                    <i className="fa-solid fa-caret-right"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>

            <OrderDetailModal
                show={detailModalShow}
                setShow={setDetailModalShow}
                id={orderId}
                code={orderCode}/>

            <Modal
                show={messageModalShow}
                onHide={handleMessageModalClose}
                backdrop="static">
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

        </>
    )
}

export default PurchaseHistory;