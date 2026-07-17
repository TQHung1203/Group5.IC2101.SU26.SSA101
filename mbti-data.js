// mbti-data.js - Kho cơ sở dữ liệu chuyên sâu 16 nhóm tính cách dành cho sinh viên
const mbtiChuyenSauDatabase = {
    "INTJ": {
        tagline: "Nhà Chiến Lược Tài Ba",
        group: "Analysts",
        color: "#6b46c1",
        tongQuan: "INTJ là những người có tư duy logic sắc bén, mang tính chiến lược và tư duy hệ thống cực kỳ cao. Họ luôn tìm kiếm bản chất cốt lõi của mọi vấn đề và không chấp nhận các quy chuẩn rập khuôn nếu thiếu tính hiệu quả.",
        manhYeu: "<strong>Điểm mạnh:</strong> Tư duy chiến lược, độc lập, có năng lực tự học phi thường và kiên trì với mục tiêu.<br><strong>Điểm yếu:</strong> Dễ bị coi là lạnh lùng, quá cầu toàn, đôi khi thiếu kiên nhẫn với các quy trình hành chính rườm rà.",
        moiQuanHe: "Trong các mối quan hệ, INTJ đề cao sự chân thành, chiều sâu trí tuệ và sự tôn trọng không gian riêng tư. Họ không thích những buổi xã giao hời hợt.",
        lamSaoDeThan: "Để xây dựng lòng tin với INTJ, hãy thảo luận với họ về các ý tưởng lý thuyết phức tạp, thẳng thắn trong giao tiếp và tôn trọng ranh giới cá nhân của họ.",
        trongDaiHoc: "Tại môi trường đại học, INTJ thường là những 'bóng ma thư viện' hoặc các lập trình viên, nghiên cứu sinh xuất sắc. Họ học tập độc lập tốt nhưng có thể gặp khó khăn khi làm việc nhóm với những thành viên thiếu cam kết.",
        chienLuocHocTap: "• Áp dụng tư duy ngược (Reverse Engineering) để bẻ gãy cấu trúc môn học.<br>• Sử dụng sơ đồ khối kiến trúc hệ thống thay vì học thuộc lòng vẹt.<br>• Thiết lập To-do list dựa trên mục tiêu đầu ra cụ thể.",
        loiKhuyen: "Lời khuyên: Hãy học cách lắng nghe và chấp nhận rằng con người vận hành bằng cả cảm xúc chứ không chỉ bằng logic thuần túy. Hạ thấp tiêu chuẩn cầu toàn với đồng đội khi làm bài tập lớn."
    },
    "INTP": {
        tagline: "Nhà Tư Duy Lập Dị",
        group: "Analysts",
        color: "#6b46c1",
        tongQuan: "INTP là những tư duy giả lập ý tưởng liên tục, họ say mê các lý thuyết khoa học và luôn tìm kiếm các giải pháp đột phá, độc bản.",
        manhYeu: "<strong>Điểm mạnh:</strong> Khách quan, sáng tạo tư duy, khả năng kết nối các dữ kiện rời rạc.<br><strong>Điểm yếu:</strong> Hay trì hoãn do mải mê suy nghĩ, dễ mất tập trung vào chi tiết thực thi thực tế.",
        moiQuanHe: "Họ thích kết nối với những người có chung niềm đam mê tranh luận và chia sẻ kiến thức mới lạ.",
        lamSaoDeThan: "Đặt những câu hỏi mở mang tính giả định (ví dụ: 'Nếu công nghệ này thay đổi thì...') để kích hoạt luồng tư duy của họ.",
        trongDaiHoc: "Họ học theo cảm hứng. Nếu môn học kích thích được sự tò mò (như AI, Thuật toán nâng cao), họ sẽ vô địch. Ngược lại, họ rất dễ chán các môn đại cương.",
        chienLuocHocTap: "• Biến lý thuyết thành các dự án nhỏ (Mini-project) tự chạy thử nghiệm.<br>• Sử dụng kỹ thuật Feynman: Học bằng cách tự giải thích lại kiến thức khó cho người khác hiểu bằng ngôn từ đơn giản nhất.",
        loiKhuyen: "Lời khuyên: Ý tưởng tốt chỉ có giá trị khi nó được hiện thực hóa. Hãy đặt deadline cứng và hoàn thiện sản phẩm thay vì liên tục sửa đổi bản thiết kế ngầm."
    },
    "ENFP": {
        tagline: "Nhà Truyền Phong Cách",
        group: "Diplomats",
        color: "#2f855a",
        tongQuan: "ENFP tràn đầy năng lượng, sáng tạo và luôn tìm kiếm sự kết nối nhân văn sâu sắc trong mọi trải nghiệm cuộc sống học đường.",
        manhYeu: "<strong>Điểm mạnh:</strong> Giao tiếp xuất sắc, tràn đầy ý tưởng đổi mới, khả năng tạo động lực cho tập thể.<br><strong>Điểm yếu:</strong> Cực kỳ nhanh chán, gặp khó khăn với các công việc cần tính lặp đi lặp lại và chi tiết tỉ mỉ.",
        moiQuanHe: "Là người bạn ấm áp, luôn lắng nghe, thấu cảm và ủng hộ hết mình cho sự phát triển của bạn bè.",
        lamSaoDeThan: "Hãy cùng họ tham gia các hoạt động sáng tạo ngẫu hứng, chia sẻ những ước mơ và câu chuyện cuộc sống chân thành.",
        trongDaiHoc: "Thường là thủ lĩnh các câu lạc bộ nghệ thuật, truyền thông hoặc là người gánh vác phần thuyết trình cực kỳ cuốn hút trong các buổi bảo vệ đồ án.",
        chienLuocHocTap: "• Học qua trải nghiệm thực tế và Gamification (biến việc ôn thi thành trò chơi).<br>• Đổi mới không gian học tập liên tục (quán cà phê, co-working space) để kích thích não bộ.",
        loiKhuyen: "Lời khuyên: Tập trung năng lượng là chìa khóa. Đừng ôm đồm đăng ký quá nhiều hoạt động ngoại khóa dẫn đến tình trạng kiệt quệ và bỏ dở tiến độ môn học chính."
    }
    // Ghi chú cho nhóm: Các bạn sinh viên có thể dễ dàng copy-paste nhân bản cấu trúc trên cho 13 tính cách còn lại (INFJ, ENFJ, ISTJ, ISFJ, ESTJ, ESFJ, ISTP, ISFP, ESTP, ESFP, ENTJ, ENTP) vào tệp này cực kỳ nhanh gọn mà không lo làm hỏng hay rối file HTML chính!
};