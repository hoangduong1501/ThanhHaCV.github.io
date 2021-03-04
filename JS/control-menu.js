
$(document).ready(function(){
    $("#cv-content").html(ThongTin());
});

$('#btn_ThongTin').click(function(){
    $('.item-menu').removeClass('active');
    $(this).addClass('active');
    $("#cv-content").html(ThongTin());
});
$('#btn_KinhNghiem').click(function(){
    $('.item-menu').removeClass('active');
    $(this).addClass('active');
    $("#cv-content").html(KinhNghiem());
});
$('#btn_KyNang').click(function(){
    $('.item-menu').removeClass('active');
    $(this).addClass('active');
    $("#cv-content").html(KyNang());
});
$('#btn_LienHe').click(function(){
    $('.item-menu').removeClass('active');
    $(this).addClass('active');
    $('#cv-content').html(LienHe());
});

function ThongTin(){
    return '<div id="muc_tieu">'
            +'<h4 class="head-content">'
            +'<img class="icon-custom" src="Images/dart.svg" alt="">Mục tiêu nghề nghiệp'
            +'</h4>'
            +'<ul id="ul-custom">'
            +'<li class="sub-content">Mong muốn được tham gia thực tập tại Công ty.</li>'
            +'<li class="sub-content">Rèn luyện kỹ năng và học hỏi kinh nghiệm trong thời gian tới.</li>'
            +'<li class="sub-content">Cố gắng phấn đấu hết mình để có cơ hội trở thành nhân viên chính thức của công ty.</li>'
            +'</ul>'
            +'</div>'
            +'<div id="hoc_van">'
            +'<h4 class="head-content">'
            +'<img class="icon-custom" src="Images/mortarboard.svg" alt="">Học vấn'
            +'</h4>'
            +'<h5 class="school-name">'
            +'<a style="color: #28a745; text-decoration: none;" href="https://utc2.edu.vn/">Trường Đại học Giao Thông Vận Tải cở sở II</a>'
            +'</h5>'
            +'<p style="color: #000;" class="school-name">(08/2017 - Hiện tại)</p>'
            +'<ul id="ul-custom">'
            +'<li class="sub-content">Chuyên ngành Công Nghệ Thông Tin.</li>'
            +'</ul>'
            +'</div>'
            +'<div id="so_thich">'
            +'<h4 class="head-content">'
            +'<img class="icon-custom" src="Images/rubik.svg" alt="">Sở thích'
            +'</h4>'
            +'<ul id="ul-custom">'
            +'<li class="sub-content">Tìm hiểu công nghệ mới.</li>'
            +'<li class="sub-content">Du lịch.</li>'
            +'<li class="sub-content">Chơi game.</li>'
            +'</ul>'
            +'</div>';
}

function KinhNghiem(){
    return '<h4 class="head-content">' 
            + '<img class="icon-custom" src="Images/flask.svg" alt="">Sản phẩm'
            +'</h4>'
            +'<ul class="timeline">'
            +'<li>'
            +'<a target="_blank" href="#">Phần mềm quản lý thông tin Học Sinh</a>'
            +'<p class="item-timeline">(07/2020 - 08/2020)</p>'
            +'<p class="item-timeline">Nhiệm vụ: Xây dựng chức năng nhập điểm, tạo hồ sơ học sinh, tạo và phân lớp.</p>'
            +'<p class="item-timeline">Mô tả: Quản lý thông tin học sinh, phân lớp, quản lý điểm học sinh theo từng môn, thống kê học lực theo kì, năm...</p>'
            +'<p class="item-timeline">Công nghệ:</p>'
            +'<ul class="ul-custom">'
            +'<li class="sub-content">WPF</li>'
            +'<li class="sub-content">Microsoft SQL Server</li>'
            +'</ul>'
            +'</li><li>'
            +'<a href="#">Phần mềm quản lý Cửa hàng xe máy</a>'
            +'<p class="item-timeline">08/2020 - 10/2020</p>'
            +'<p class="item-timeline">Nhiệm vụ: Xây dựng toàn bộ chức năng ứng dụng.</p>'
            +'<p class="item-timeline">Mô tả: Quản lý thông tin xe nhập, bán xe. Thống kê số lượng bán, còn lại, xe mua nhiều...</p>'
            +'<ul class="ul-custom">'
            +'<li class="sub-content">Windows Form</li>'
            +'<li class="sub-content">Microsoft SQL Server</li>'
            +'<li class="sub-content">Microsoft Entities Framework</li>'
            +'</ul>'
            +'</li>'
            +'</ul>'
            +'<h4 class="head-content">'
            +'<img class="icon-custom" src="Images/speedometer.svg" alt="">Kinh nghiệm làm việc'
            +'</h4>'
            +'<ul class="timeline">'
            +'<li>'
            +'<a target="_blank" href="https://datvietsoftware.com.vn/">Công ty TNHH Công nghệ & Dịch vụ Đất Việt</a>'
            +'<p class="item-timeline">(1010/2020 - hiện tại)</p>'
            +'<p class="item-timeline">Chức vụ: Nhân viên lập trình phần mềm.</p>'
            +'<p class="item-timeline">Dự án: Phần mềm quản lý UTC2, Phần mềm quản lý công ty TNHH Nhân Văn.</p>'
            +'<p class="item-timeline">Công việc: Bổ sung chức năng mới theo yêu cầu khách hàng, sửa lỗi,...</p> '
            +'</li>'
            +'</ul>';
}

function KyNang(){
    return '<div id="moitruong_phattrien">'
            +'<h4 class="head-content">'
            +'<img class="icon-custom" src="Images/code.svg" alt="">Môi trường phát triển'
            +'</h4>'
            +'<ul>'
            +'<li class="sub-content">Visual Studio.</li>'
            +'<li class="sub-content">Visual Studio Code.</li>'
            +'<li class="sub-content">MS SQL Server.</li>'
            +'<li class="sub-content">Toad.</li>'
            +'</ul>'
            +'</div>'
            +'<div id="cong_nghe">'
            +'<h4 class="head-content">'
            +'<img class="icon-custom" src="Images/projectmanagement.svg" alt="">Công nghệ'
            +'</h4>'
            +'<ul>'
            +'<li class="sub-content">C#.</li>'
            +'<li class="sub-content">SQL Server.</li>'
            +'<li class="sub-content">HTML, CSS, JavaScript.</li>'
            +'<li class="sub-content">Entities Framework.</li>'
            +'</ul>'
            +'<h4 class="head-content">'
            +'<img class="icon-custom" src="Images/piechart.svg" alt="">Kỹ năng làm việc'
            +'</h4>'
            +'<ul>'
            +'<li class="sub-content">LLàm việc nhóm, khả năng tương tác.</li>'
            +'<li class="sub-content">Khả năng tự giải quyết vấn đề.</li>'
            +'<li class="sub-content">Lắng nghe góp ý.</li>'
            +'</ul>'
            +'</div>';
}

function LienHe(){
    return 'lien he';
}
