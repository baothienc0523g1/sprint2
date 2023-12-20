import {getUsernameByJwt} from "../service/securityService";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import '../style/purchaseHistory.css';
import {Table} from "react-bootstrap";
import Footer from "./Footer";

function PurchaseHistory() {
    const flag = getUsernameByJwt() != null;
    const navigate = useNavigate();

    const isAuthenticated = () => {
        if (!flag) {
            navigate("/login");
        }
    }

    useEffect(() => {
        isAuthenticated()
    }, [])

    return (
        <>
            <div className="purchase-history-wrapper">
                <div className="ph-title-div">
                    <span className="ph-title-text">Lịch sử mua hàng</span>
                </div>

                <div className="ph-content container">
                    <div className="row">
                        <table className="ph-table col-xl-12">
                            <thead className="mb-3 ph-thead">
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Username</th>
                                <th>Username</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>@fat</td>
                                <td>@fat</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default PurchaseHistory;