import './notfound.css';
export default function NotFoundPage () {
    return (
       <div >
            <div className='error-component'>
                <div className="error-text">
                    <img
                    src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
                    alt={404}
                    />
                    <span>Error 404</span>
                    <p className="page-a">Không tìm thấy trang! Có vẻ như URL đã đi nghỉ mà không để lại địa chỉ chuyển tiếp</p>
                    <p className="page-b">Bạn sẽ được chuyển hướng đến trang chủ.</p>
                </div>
            </div>
       </div>
    )
}