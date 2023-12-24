import '../style/personalPage.css';
import Footer from "./Footer";
import {useEffect, useState} from "react";
import * as userService from "../service/userService";
import {dateConverter} from "../utilities/DateConverter";

function PersonalPage() {

    const [user, setUser] = useState();

    const getUserInfo = async () => {
        const data = await userService.getUserInformation();
        setUser(data);
    }

    useEffect(() => {
            getUserInfo();
        }
        , [])

    if (!user) {
        return null;
    }

    return (
        <div id="personal-page-wrapper">
            <div className="row">

                <div className="pg-side-bar col-xl-3 col-md-12 col-sm-12">
                    <div className="pg-side-bar-avt">
                        <div className="pg-avt"></div>
                    </div>
                    <div className="pg-side-bar-child"><span>Thống kê chi tiêu</span></div>
                    <div className="pg-side-bar-child"><span>Liên hệ hỗ trợ</span></div>
                    <div className="pg-side-bar-child"><span>Thay đổi mật khẩu</span></div>
                    <div className="pg-side-bar-child"><span>Thay đổi địa chỉ</span></div>
                    <div className="pg-side-bar-child"><span>Thay đổi SDT</span></div>
                </div>
                <div className="pg-content col-xl-9 col-md-12 col-sm-12">
                    <div>
                        <div className="pg-title">Thông tin cá nhân <i className="fa-solid fa-pencil pg-edit-icon"/>
                        </div>

                        <div className="container mt-2">
                            <div className="col-xl-">
                                <div className="pg-info-div">
                                    <div className="pg-info-label">Tài khoản:</div>
                                    <div className="pg-info-content">{user.username}</div>
                                </div>
                                <div className="pg-info-div">
                                    <div className="pg-info-label">Họ và tên:</div>
                                    <div className="pg-info-content">{user.name}</div>
                                </div>
                                <div className="pg-info-div">
                                    <div className="pg-info-label">Địa chỉ:</div>
                                    <div className="pg-info-content"> {user.address}</div>
                                </div>
                                <div className="pg-info-div">
                                    <div className="pg-info-label">Ngày sinh:</div>
                                    <div className="pg-info-content">{dateConverter(user.birthday)}</div>
                                </div>
                                <div className="pg-info-div">
                                    <div className="pg-info-label">Số điện thoại:</div>
                                    <div className="pg-info-content">{user.phoneNumber}</div>
                                </div>
                                <div className="pg-info-div">
                                    <div className="pg-info-label">Thư điện tử:</div>
                                    <div className="pg-info-content">{user.email}</div>
                                </div>
                                <div className="pg-info-div">
                                    <div className="pg-info-label">Tổng chi:</div>
                                    <div
                                        className="pg-info-content">{new Intl.NumberFormat().format(user.totalPay)} .đ
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <Footer/>
        </div>
    )
}

export default PersonalPage;