const nodemailer = require("nodemailer");

exports.invoiceEmail=async(email,hoadon,hotel,room)=>{
    try{

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.USERMAIL,
            pass: process.env.PASSMAIL
        },
    });
    transporter.sendMail({
        from: process.env.USERMAIL, 
        to: `${email}`, 
        subject: "Booking Hotel: Hóa đơn", 
        text: "Hóa đơn", 
        html: `<h2>Booking Hotel xin kính chào quý khách!</h2>
        <h3>Cảm ơn quý khách đã đặt phòng tại Booking Hotel!</h3>
        <h3>Booking Hotel thông báo hóa đơn đặt phòng của quý khách như sau: </h3>
        <table style="margin-left: 30px;">
            <tr>
                <th style="text-align:left">Mã đơn:</th>
                <td>${hoadon.mahd}</td>
            </tr>
            <tr>
                <th style="text-align:left">Tên khách sạn: </th>
                <td>${hotel.tenht}</td>
            </tr>
            <tr>
                <th style="text-align:left">Tên phòng: </th>
                <td>${room.tenphong}</td>
            </tr>
            <tr>
                <th style="text-align:left">Tên khách hàng:</th>
                <td>${hoadon.tenkh}</td>
            </tr>
            <tr>
                <th style="text-align:left">Số điện thoại:</th>
                <td>${hoadon.sdt}</td>
            </tr>
            <tr>
                <th style="text-align:left">Hình thức đặt phòng:</th>
                <td>${hoadon.ptdatphong}</td>
            </tr>
            <tr>
                <th style="text-align:left">Ngày đặt: </th>
                <td>${hoadon.ngayhd}</td>
            </tr>
            <tr>
                <th style="text-align:left">Ngày nhận phòng: </th>
                <td>${hoadon.ngaynhan}</td>
            </tr>
            <tr>
                <th style="text-align:left">Ngày trả phòng: </th>
                <td>${hoadon.ngaytra}</td>
            </tr>
             <tr>
                <th style="text-align:left">Giờ nhận phòng: </th>
                <td>${hoadon.gionhan}</td>
            </tr>
            <tr>
                <th style="text-align:left">Giờ trả phòng: </th>
                <td>${hoadon.giotra}</td>
            </tr>
            <tr>
                <th style="text-align:left">Số lượng người lớn: </th>
                <td>${hoadon.slnguoilon}</td>
            </tr>
            <tr>
                <th style="text-align:left">Số lượng trẻ em: </th>
                <td>${hoadon.sltreem}</td>
            </tr>
            <tr>
                <th style="text-align:left">Số lượng phòng: </th>
                <td>${hoadon.slphong}</td>
            </tr>
            <tr>
                <th style="text-align:left">Đơn giá: </th>
                <td>${hoadon.gia.toLocaleString()} VNĐ</td>
            </tr>
            <tr>
                <th style="text-align:left">Giảm giá: </th>
                <td>giảm ${hotel.giamgia}% VNĐ</td>
            </tr>
            <tr>
                <th style="text-align:left">Hình thức thanh toán: </th>
                <td>${hoadon.phuongthuc}</td>
            </tr>
            <tr>
                <th style="text-align:left">Ngân hàng thanh toán: </th>
                <td>${hoadon.nganhang}</td>
            </tr>
        </table>
        <h4 style="color: #0b3c86;">Tổng tiền: ${hoadon.trigia.toLocaleString()} VNĐ</h4>
        <h4 style="color: #035e21;">Vui lòng liên hệ Hotline 0943415138 nếu quý khách có thắc mắc về hóa đơn.</h4>
        <h3>Cảm ơn quý khách đã tin tưởng và sử dụng dịch vụ của Booking Hotel!</h3>`
        });
        return true
    }catch(e){
        throw new Error(e.message)
    }
    
}