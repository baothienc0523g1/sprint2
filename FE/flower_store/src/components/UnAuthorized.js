import '../style/unAuthorized.css';
import {Link} from "react-router-dom";

export default function UnAuthorized() {
    return (
        <>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1 className="notfound-h1">Oops!!!</h1>
                    </div>
                    <h2 className="notfound-h2">Hình như có gì đó ...sai sai!!</h2>
                    <Link className="notfound-link" to="/"><span className="arrow"></span> Quay về trang chủ</Link>
                </div>
            </div>
        </>
    )
}