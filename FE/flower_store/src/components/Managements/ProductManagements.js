import '../../style/managements/productManagements.css';
import {Table} from "react-bootstrap";
import {useState} from "react";

function ProductManagements() {

    const [typeName, setTypeName] = useState();


    return (
        <>
            <div className="p-management-wrapper row">
               <div className="col-xl-2 p-management-sidebar">
                   <div className="fw-bold fst-italic fs-2 p-management-title">Quản lý</div>
                   <div className="product-type-chose">
                       <label htmlFor="birthday-products">Hoa sinh nhật nè</label>
                       <input type="radio" name="product-type" id="birthday-products"/>
                   </div>
                   <div className="product-type-chose">
                       <label htmlFor="event-products">Hoa sự kiện</label>
                       <input type="radio" name="product-type" id="event-products"/>
                   </div>
                   <div className="product-type-chose">
                       <label htmlFor="plant-products">Hoa và cây</label>
                       <input type="radio" name="product-type" id="plant-products"/>
                   </div>
               </div>

                <div className="col-xl-10">
                    <div className="fw-bold fst-italic fs-2 p-management-title">Tên sản phẩm</div>
                    <hr/>

                    <Table>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên</th>
                            <th>Mã</th>
                            <th>Giá</th>
                            <th>Mô tả</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                        </tbody>

                    </Table>
                </div>
            </div>
        </>
    )
}

export default ProductManagements;