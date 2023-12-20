import {Modal, Table} from "react-bootstrap";
import * as orderService from "../service/orderService";
import {useEffect, useState} from "react";

function OrderDetailModal(event) {

    const {show, setShow, id, code} = event;
    const [detailList, setDetailList] = useState();
    let totalCost = 0;

    const getDetail = async () => {
        const data = await orderService.getOrderDetails(id);
        await setDetailList(data);
    }

    useEffect(() => {
        getDetail();
    }, [show, id]);

    if (!detailList) {
        return null;
    }

    return (
        <Modal
            backdrop="static"
            size="lg"
            show={show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header className="logout-modal-header" closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Chi tiết đơn hàng {code}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table style={{fontFamily: "Tahoma, 'san-serif"}}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Loại sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Tổng thanh toán ( .đ)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        detailList.map((item, index) => {
                            totalCost += item.totalCost
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.productName}</td>
                                    <td>{item.productTypeName}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        {
                                            new Intl.NumberFormat().format(item.totalCost)
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td colSpan={5}>
                            Tổng thanh toán: <span className="fw-bold">{
                            new Intl.NumberFormat().format(totalCost)
                        } .đ</span>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Modal.Body>
        </Modal>
    )
}

export default OrderDetailModal;