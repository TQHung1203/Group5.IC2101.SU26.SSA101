// mbti-data.js
const mbtiChuyenSauDatabase = {
    "INTJ": {
        tagline: "Nhà Chiến Lược Tài Ba",
        group: "Analysts",
        color: "#6b46c1",
        
        // PHẦN TỔNG QUAN ĐƯỢC MỞ RỘNG CHUYÊN SÂU VÀ CHI TIẾT ĐA CHIỀU
        tongQuan: `
            INTJ (Introverted – Intuitive – Thinking – Judging) là một trong những nhóm tính cách hiếm gặp và mang đậm tính độc lập nhất trong hệ thống MBTI, chỉ chiếm khoảng 2% dân số thế giới. Được mệnh danh là "Kiến trúc sư của tâm trí" hay "Nhà chiến lược tài ba", INTJ vận hành cuộc sống như một bàn cờ vĩ mô, nơi mỗi hành động, quyết định đều là kết quả của một quá trình tính toán logic dài hạn và có định hướng rõ ràng. Họ sở hữu một khát khao mãnh liệt trong việc tìm kiếm bản chất cốt lõi của mọi vấn đề và không ngừng cải tiến các hệ thống xung quanh mình. Họ không chấp nhận những quy chuẩn rập khuôn, lỗi thời hay "từ trước đến nay người ta vẫn làm thế" nếu hệ thống đó thiếu đi tính hiệu quả và sự logic.
            <br><br>
            Để thấu hiểu toàn diện lăng kính nhận thức phức tạp của một INTJ, chúng ta cần phân tích sâu cách họ vận hành qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #6b46c1;">• Introverted (I) – Sự định hướng năng lượng Hướng nội:</strong> 
            Nguồn năng lượng cốt lõi của INTJ được hướng hoàn toàn vào thế giới nội tâm của những ý tưởng, khái niệm và tư duy trừu tượng, đối lập với xu hướng tìm kiếm sự kích thích từ môi trường náo nhiệt bên ngoài của nhóm Hướng ngoại (E). INTJ không phải là người nhút nhát, họ chỉ đơn giản là những người cực kỳ chọn lọc trong giao tiếp. Họ tìm thấy trạng thái tập trung cao độ (Flow state) khi được làm việc biệt lập trong không gian tĩnh lặng. Đối với INTJ, việc phải liên tục thảo luận đám đông hay tham gia vào các cuộc tán gẫu hời hợt là một hoạt động tiêu tốn năng lượng khủng khiếp, và họ cần những khoảng thời gian cô độc tuyệt đối để "sạc" lại pin cho não bộ.
            <br><br>
            <strong style="color: #6b46c1;">• Intuitive (N) – Cách thức tiếp nhận thông tin bằng Trực giác:</strong> 
            Đây là siêu năng lực định hình tầm nhìn của INTJ. Thay vì thu thập thông tin dựa trên các chi tiết thực tế, số liệu bề nổi hoặc những gì đang diễn ra ở hiện tại giống như nhóm Cảm giác (S), INTJ (N) có xu hướng quét mắt nhìn toàn cảnh để tìm kiếm các mối liên hệ ẩn, quy luật ngầm và cấu trúc vĩ mô. Trực giác giúp họ có khả năng nhảy vọt về mặt tư duy, nhanh chóng nhìn ra bức tranh tổng thể và dự đoán chính xác các mô hình xu hướng trong tương lai. Lăng kính này khiến họ luôn bị thôi thúc bởi các lý thuyết trừu tượng và liên tục đặt ra câu hỏi mang tính cải cách: "Hệ thống này đang vận hành lỗi ở đâu và làm thế nào để tối ưu hóa nó?".
            <br><br>
            <strong style="color: #6b46c1;">• Thinking (T) – Phương thức ra quyết định bằng Lý trí:</strong> 
            INTJ là những người duy lý thực dụng ở mức độ cao nhất. Khi đứng trước một vấn đề cần giải quyết, họ lập tức gạt bỏ toàn bộ các yếu tố cảm xúc cá nhân, sự thiên vị hay áp lực từ số đông sang một bên để đứng từ góc độ khách quan, phi cá nhân hóa. Họ cân đo đong đếm dựa trên dữ liệu, logic cứng và các lập luận sắc bén để tìm ra giải pháp hiệu quả nhất. Đối lập với nhóm Cảm xúc (F) luôn đặt sự hòa hợp và cảm nhận của tập thể lên hàng đầu, INTJ (T) đặt "sự thật khách quan" và "tính hiệu năng" làm thước đo tối thượng, ngay cả khi quyết định đó có thể bị coi là lạnh lùng, tàn nhẫn hay làm mất lòng người khác.
            <br><br>
            <strong style="color: #6b46c1;">• Judging (J) – Phong cách tổ chức cuộc sống Quyết đoán:</strong> 
            Môi trường sống và học tập của một INTJ luôn được vận hành một cách có tổ chức, kỷ luật và kiểm soát. Họ cực kỳ dị ứng với lối sống tùy cơ ứng biến, "nước đến chân mới nhảy" hay sự mơ hồ của nhóm Linh hoạt (P). Một INTJ điển hình không bao giờ bắt tay vào làm việc một cách mù quáng; họ luôn dành thời gian để thiết lập một lộ trình chi tiết, phân chia các mốc thời gian (deadline) nghiêm ngặt và đặc biệt là luôn chuẩn bị sẵn các phương án dự phòng (Kế hoạch B, C, D) cho mọi rủi ro có thể xảy ra. Họ chỉ thực sự cảm thấy thoải mái và an tâm khi mọi biến số của kế hoạch đã nằm trọn trong tầm kiểm soát của mình.
        `,
        
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Tư duy chiến lược và tầm nhìn vĩ mô:</strong> <span style="color: #4a5568;">Họ có khả năng bóc tách các vấn đề phức tạp, dự đoán trước các rủi ro dài hạn để lập kế hoạch hoàn hảo. Kế hoạch hành động của INTJ luôn đi kèm các phương án dự phòng linh hoạt.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Năng lực tự học phi thường (Autodidact):</strong> <span style="color: #4a5568;">Không cần sự thúc ép hay giám sát bên ngoài, khi INTJ đã hứng thú với một chủ đề, họ có thể tự cày nát tài liệu sâu và làm chủ một kỹ năng mới trong thời gian ngắn.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Độc lập và kiên định với mục tiêu:</strong> <span style="color: #4a5568;">Họ không bị lung lay bởi hiệu ứng đám đông hay dư luận xã hội. Mọi hành động của INTJ đều dựa trên hệ thống dữ liệu và lập luận logic đã qua kiểm chứng cá nhân.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Quá cầu toàn và khắt khe (Perfectionism):</strong> <span style="color: #4a5568;">INTJ thường đặt kỳ vọng lý tưởng hóa vào năng lực bản thân, từ đó vô tình áp đặt tiêu chuẩn áp lực này lên đồng đội, dễ dẫn đến trạng thái thất vọng dai dẳng.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Lạnh lùng, xa cách trong giao tiếp:</strong> <span style="color: #4a5568;">Do quá tập trung vào thế giới ý tưởng và hiệu suất công việc, họ thường bỏ qua các quy tắc xã giao tinh tế thông thường, khiến người xung quanh dễ hiểu lầm là kiêu ngạo.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Thiếu kiên nhẫn với quy trình kém hiệu quả:</strong> <span style="color: #4a5568;">Họ cực kỳ dễ mất bình tĩnh hoặc tỏ thái độ bất hợp tác khi phải đối mặt với các thủ tục rườm rà, mang tính hình thức hoặc các cuộc tranh luận dựa trên cảm xúc thuần túy.</span></li>
                </ol>
            </div>
        `,
        moiQuanHe: "Trong vòng tròn xã hội, INTJ tuân theo nguyên tắc 'chất lượng vượt trội số lượng'. Họ không thích những buổi tiệc tùng xã giao hời hợt. Mối quan hệ lý tưởng của một INTJ phải là nơi có chiều sâu trí tuệ - nơi hai bên có thể phản biện để cùng tiến bộ. Họ tôn trọng tuyệt đối không gian riêng tư của đối phương.",
        lamSaoDeThan: "- <strong>Đi thẳng vào vấn đề:</strong> Giao tiếp thẳng thắn, trung thực, tránh vòng vo hay mập mờ.<br>- <strong>Kích hoạt tư duy vĩ mô:</strong> Mở đầu câu chuyện bằng các giả thuyết khoa học, triết học, công nghệ hoặc giải pháp hệ thống.<br>- <strong>Giữ đúng lời hứa:</strong> Đúng giờ và chịu trách nhiệm với những gì mình đã nói.<br>- <strong>Tôn trọng ranh giới:</strong> Không cố ép họ tham gia hoạt động náo nhiệt khi họ đang cần ở một mình.",
        trongDaiHoc: "Giảng đường đại học là nơi giúp INTJ tỏa sáng học thuật nhưng cũng đem lại không ít phiền toái. Họ thường là những 'bóng ma thư viện' hoặc các coder cắm mặt vào phòng lab dự án. Họ gặp ác mộng khi làm việc nhóm nếu rơi vào tập thể lười biếng, dẫn đến việc họ tự ôm hết phần việc nặng về mình để bảo vệ điểm số tuyệt đối rồi tự ôm cục tức.",
        chienLuocHocTap: "• <strong>Tư duy ngược (Reverse Engineering):</strong> Nhìn vào đề thi mẫu hoặc sản phẩm đầu ra trước, sau đó lội ngược dòng để bẻ gãy khối kiến thức cần nạp vào.<br>• <strong>Sơ đồ khối kiến trúc:</strong> Sử dụng sơ đồ luồng dữ liệu (Data Flow) hoặc sơ đồ khối để liên kết mối quan hệ giữa các khái niệm thay vì học vẹt.<br>• <strong>To-do list định lượng:</strong> Chia nhỏ môn học thành các mốc tiến độ đi kèm số liệu cụ thể (ví dụ: Code xong Module A trong 4 tiếng).",
        loiKhuyen: "Lời khuyên: Hãy học cách lắng nghe và chấp nhận rằng con người vận hành bằng cả cảm xúc chứ không chỉ bằng logic thuần túy. Hạ thấp tiêu chuẩn cầu toàn với đồng đội khi làm bài tập lớn. Điểm 9.5 được nộp đúng hạn và mọi người vui vẻ tốt hơn rất nhiều so với điểm 10 tuyệt đối nhưng đổi lại là sự kiệt quệ của cả tập thể."
    },
"INTP": {
        tagline: "Nhà Tư Duy Lập Dị",
        group: "Analysts",
        color: "#6b46c1",
        
        // 1. TỔNG QUAN NHÓM CHUYÊN SÂU THEO 4 CẶP CHIỀU ĐỐI LẬP
        tongQuan: `
            INTP (Introverted – Intuitive – Thinking – Perceiving) là những người tư duy lý thuyết bẩm sinh, chiếm khoảng 3% dân số thế giới. Được mệnh danh là "Nhà Tư Duy Lập Dị" hay "Triết gia học đường", họ sở hữu một trí tò mò vô hạn đối với các quy luật vũ trụ, hệ thống thuật toán và cấu trúc logic ẩn sau mọi hiện tượng. Một INTP không bao giờ ngừng suy nghĩ; tâm trí họ hoạt động như một phòng thí nghiệm giả lập ý tưởng liên tục, nơi các giả thuyết được sinh ra, thử nghiệm và phân rã mỗi giây. Họ yêu thích kiến thức vì bản thân kiến thức chứ không đơn thuần vì danh vọng hay bằng cấp.
            <br><br>
            Để hiểu được thế giới nội tâm đầy mê hoặc và cách thức vận hành của một INTP, chúng ta bóc tách qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #6b46c1;">• Introverted (I) – Sự định hướng năng lượng Hướng nội:</strong> 
            Năng lượng của INTP hoàn toàn hướng vào bên trong, tập trung vào luồng suy nghĩ, phân tích và hệ thống hóa cá nhân. Họ là những người cực kỳ kín tiếng, có xu hướng rút lui khỏi thế giới náo nhiệt bên ngoài để đắm mình vào các không gian nghiên cứu riêng. Khác với người Hướng ngoại (E) cần sự kích thích từ cộng đồng, INTP (I) thường cảm thấy kiệt quệ nếu phải tham gia các cuộc hội họp xã giao không có mục đích trí tuệ rõ ràng. Họ cần những khoảng lặng dài độc thoại nội tâm để liên kết các luồng tư duy phức tạp.
            <br><br>
            <strong style="color: #6b46c1;">• Intuitive (N) – Cách thức tiếp nhận thông tin bằng Trực giác:</strong> 
            Lăng kính trực giác (N) của INTP hoạt động như một cỗ máy dò tìm các khả năng vĩ mô và mối liên hệ trừu tượng. Thay vì hài lòng với những dữ kiện thực tế hiển nhiên trước mắt giống như nhóm Cảm giác (S), INTP luôn tò mò về những gì "có thể xảy ra" hoặc "nguyên lý cốt lõi ẩn sâu". Họ có khả năng phát hiện các kẽ hở logic trong hệ thống cực nhanh và bị thu hút mạnh mẽ bởi các mô hình lý thuyết vĩ mô, các bài toán mở mang tính giả định hoặc các xu hướng công nghệ tương lai.
            <br><br>
            <strong style="color: #6b46c1;">• Thinking (T) – Phương thức ra quyết định bằng Lý trí:</strong> 
            INTP là những bậc thầy phân tích khách quan. Khi đối diện với một vấn đề, họ mổ xẻ nó như một bác sĩ phẫu thuật: không cảm xúc, không thiên vị, không bị lung lay bởi số đông. Họ đánh giá cao tính chính xác tuyệt đối của ngôn từ và lập luận. Đối lập với nhóm Cảm xúc (F) luôn ưu tiên sự hòa hợp và né tránh xung đột cảm xúc, INTP (T) coi sự thật và logic là mục tiêu tối thượng. Đối với họ, một lỗi sai logic trong bài nghiên cứu đáng sợ hơn nhiều so với một lời nhận xét làm mất lòng ai đó.
            <br><br>
            <strong style="color: #6b46c1;">• Perceiving (P) – Phong cách tổ chức cuộc sống Linh hoạt:</strong> 
            Đây là điểm khác biệt cốt lõi khiến họ đối lập với sự gò bó của INTJ. INTP ghét các kế hoạch đóng khung, các lịch trình rập khuôn cố định hay các quy định thủ tục hành chính ngột ngạt. Họ muốn giữ cho mọi lựa chọn luôn ở trạng thái mở (Open-ended). INTP học tập và làm việc dựa vào cảm hứng đột phát; họ có thể thức trắng đêm để code một tính năng mới vì tò mò, nhưng lại gặp khó khăn lớn trong việc dọn dẹp bàn học hay nộp bài tập đúng hạn. Đối với họ, hành trình khám phá và tìm ra giải pháp luôn thú vị hơn việc hoàn thiện sản phẩm cuối cùng.
        `,
        
        // 2. ĐIỂM MẠNH & ĐIỂM YẾU CẤU TRÚC LUẬN ĐIỂM
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Tư duy phân tích sắc bén và khách quan:</strong> <span style="color: #4a5568;">Họ có năng lực bóc tách thông tin cực tốt, phát hiện ra các lỗ hổng logic hoặc các mâu thuẫn hệ thống mà người khác dễ dàng bỏ qua.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Sáng tạo tư duy và giải quyết vấn đề đột phá:</strong> <span style="color: #4a5568;">Nhờ sự kết hợp giữa logic và trực giác mở, INTP thường nghĩ ra các phương pháp giải đề, các thuật toán hoặc hướng đi độc bản, vượt ra ngoài slide bài giảng.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Trí tò mò vô hạn và tinh thần cởi mở:</strong> <span style="color: #4a5568;">Họ luôn sẵn sàng tiếp nhận các ý tưởng mới mới lạ, không định kiến, miễn là ý tưởng đó có thể chứng minh được bằng lập luận logic chặt chẽ.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Hội chứng trì hoãn và sa lầy vào suy nghĩ (Analysis Paralysis):</strong> <span style="color: #4a5568;">Mải mê đi tìm giải pháp hoàn hảo nhất hoặc bị phân tâm bởi các ý tưởng mới khiến INTP rất dễ trễ deadline nộp bài tập lớn.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Gặp khó khăn trong việc hiện thực hóa ý tưởng:</strong> <span style="color: #4a5568;">Họ cực kỳ hào hứng khi nghĩ ra giải pháp trên giấy, nhưng lại nhanh chóng chán nản khi bước vào giai đoạn thực thi thô sơ hoặc làm báo cáo tài liệu chi tiết.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Dễ ngó lơ khía cạnh cảm xúc (EQ):</strong> <span style="color: #4a5568;">Việc quá thẳng thắn vạch trần lỗi sai của bạn bè khi làm việc nhóm khiến họ đôi khi bị coi là vô tâm, trịch thượng hoặc thiếu kỹ năng đồng cảm.</span></li>
                </ol>
            </div>
        `,
        
        // 3. MỐI QUAN HỆ XÃ HỘI
        moiQuanHe: "Trong đời sống xã hội, INTP là những người hiền hòa, không tranh giành và có xu hướng ẩn mình. Tuy nhiên, họ sở hữu một bộ lọc tình bạn cực kỳ khắt khe. Họ chỉ thực sự cởi mở khi ở cạnh những người bạn có cùng 'tần số trí tuệ' - nơi họ có thể tranh biện không ngừng về các chủ đề chuyên sâu. INTP cực kỳ ghét sự kiểm soát hay sự kịch tính hóa (drama) cảm xúc. Họ là những người bạn trung thực, không bao giờ thảo mai hay nói xấu sau lưng đối phương.",
        
        // 4. LÀM SAO ĐỂ THÂN THIẾT
        lamSaoDeThan: "- <strong>Thử thách họ bằng các câu hỏi khó:</strong> Đặt những câu hỏi mở mang tính giả định (Ví dụ: 'Nếu hệ thống blockchain được ứng dụng vào điểm số đại học thì sẽ thế nào?') để kích hoạt não bộ họ.<br>- <strong>Đừng bắt họ phải đoán cảm xúc:</strong> Nếu bạn buồn hay không hài lòng, hãy nói thẳng bằng lý lẽ rõ ràng, đừng im lặng bắt họ tự suy luận tâm lý.<br>- <strong>Tôn trọng sự độc lập:</strong> Cho họ không gian riêng để biến mất vài ngày trong thế giới ý tưởng mà không trách móc họ xa cách.",
        
        // 5. TRONG ĐẠI HỌC
        trongDaiHoc: "Tại giảng đường đại học, INTP học tập hoàn toàn theo cảm hứng cá nhân. Nếu môn học kích thích được sự tò mò (như AI, Mạng máy tính, Triết học, Toán cao cấp), họ sẽ tự nghiên cứu vượt xa chương trình học để trở thành chuyên gia. Ngược lại, họ rất dễ bỏ bê, trốn tiết hoặc học đối phó các môn đại cương mang tính học thuộc lòng vẹt. Họ thường có góc học tập khá bừa bộn và là những 'chiến thần thức đêm' cày deadline vào 2 tiếng cuối cùng trước khi đóng cổng nộp bài.",
        
        // 6. CHIẾN LƯỢC HỌC TẬP PHÙ HỢP
        chienLuocHocTap: "• <strong>Áp dụng kỹ thuật Feynman:</strong> Để kiểm tra xem mình đã hiểu sâu kiến thức chưa, hãy thử tự giải thích lại định lý hoặc đoạn code khó đó cho một người bạn không chuyên hiểu bằng ngôn từ đơn giản nhất.<br>• <strong>Biến lý thuyết thành Mini-Project:</strong> Đừng chỉ đọc slide lý thuyết suông. Hãy tự tay code thử một ứng dụng nhỏ, tự chạy thử nghiệm các biến số để xem hệ thống hoạt động thực tế như thế nào.<br>• <strong>Thiết lập Quy tắc 'Đủ tốt để nộp':</strong> Thay vì liên tục sửa đổi thuật toán để tìm cách giải hoàn mỹ, hãy cam kết hoàn thiện phiên bản cơ bản (MVP) trước để đảm bảo đúng tiến độ học phần.",
        
        // 7. LỜI KHUYÊN CHO TÍNH CÁCH
        loiKhuyen: "Lời khuyên phát triển: Ý tưởng dù có vĩ đại đến đâu cũng sẽ vô giá trị nếu nó chỉ nằm lại trong đầu bạn. Hãy học cách chuyển dịch từ trạng thái 'Nhà tư duy' sang 'Nhà thực thi'. Đặt các mốc thời gian nhân tạo nghiêm khắc cho bản thân và tập trung hoàn thành trọn vẹn một dự án trước khi nhảy sang một ý tưởng mới thú vị khác. Khi làm nhóm, hãy nhớ rằng một câu khen ngợi ghi nhận nỗ lực của đồng đội có sức mạnh thúc đẩy tiến độ tốt hơn nhiều so với việc chỉ ra 10 lỗi sai của họ."
    },
"ENTJ": {
        tagline: "Nhà Điều Hành Quyết Đoán",
        group: "Analysts",
        color: "#6b46c1",
        
        // 1. TỔNG QUAN NHÓM CHUYÊN SÂU THEO 4 CẶP CHIỀU ĐỐI LẬP
        tongQuan: `
            ENTJ (Extraverted – Intuitive – Thinking – Judging) là một trong những nhóm tính cách có năng lực định hướng mục tiêu và dẫn dắt tập thể mạnh mẽ nhất, chiếm khoảng 3% dân số thế giới. Được mệnh danh là "Nhà Điều Hành Quyết Đoán" hay "Tư lệnh học đường", họ nhìn nhận thế giới như một hệ sinh thái chứa đựng đầy rẫy các thử thách cần được chinh phục, các quy trình vận hành lỗi cần được cải tổ và nguồn nhân lực cần được tối ưu hóa. Khát vọng cốt lõi của một ENTJ là thiết lập trật tự, kiến tạo hiệu năng và thúc đẩy tập thể tiến về phía trước một cách thần tốc. Họ không chỉ mơ mộng về tương lai mà luôn có sẵn những chiến lược sắc bén để biến tầm nhìn vĩ mô thành những kết quả định lượng thực tế.
            <br><br>
            Để thấu hiểu toàn diện cấu trúc tâm lý và cách thức vận hành quyền lực của một ENTJ, chúng ta cần phân tích qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #6b46c1;">• Extraverted (E) – Sự định hướng năng lượng Hướng ngoại:</strong> 
            Dòng năng lượng của ENTJ luôn hướng mạnh mẽ ra môi trường bên ngoài thông qua việc tương tác, kết nối và dẫn dắt con người. Họ không chỉ thích giao tiếp mà luôn chủ động tìm kiếm các vị trí lãnh đạo, sẵn sàng đứng ra chịu trách nhiệm trước đám đông mà không hề e ngại áp lực. Trong khi các nhóm hướng nội (I) nạp năng lượng trong tĩnh lặng, ENTJ (E) lại tìm thấy sự phấn chấn tối đa khi được điều phối các cuộc thảo luận nảy lửa, điều hành dự án lớn và trực tiếp thúc đẩy nhịp độ làm việc của những người xung quanh.
            <br><br>
            <strong style="color: #6b46c1;">• Intuitive (N) – Cách thức tiếp nhận thông tin bằng Trực giác:</strong> 
            Lăng kính trực giác của ENTJ hướng hoàn toàn vào tương lai và tầm nhìn chiến lược. Đối lập với nhóm Cảm giác (S) vốn chỉ tập trung vào các số liệu thực tế ngắn hạn hoặc kinh nghiệm quá khứ, ENTJ (N) có khả năng kết nối các xu hướng vĩ mô, dự đoán trước các chuyển dịch của thị trường hay môi trường học đường để xây dựng lộ trình dài hạn bài bản. Họ bị thu hút bởi các mô hình lý thuyết lớn, các giải pháp mang tính hệ thống và luôn tìm cách đi trước thời đại thay vì chấp nhận những phương pháp cũ kỹ, lỗi thời.
            <br><br>
            <strong style="color: #6b46c1;">• Thinking (T) – Phương thức ra quyết định bằng Lý trí:</strong> 
            ENTJ là những người duy lý thực dụng ở mức độ cực đoan. Khi đối diện với một bài toán khó hay một quyết định mang tính sống còn của dự án, họ lập tức gạt bỏ toàn bộ các yếu tố cảm xúc cá nhân, sự thiên vị hay các mối quan hệ thân quen sang một bên. Bộ não của họ hoạt động dựa trên các tiêu chí: Tính hiệu quả, logic khách quan, dữ liệu thực chứng và kết quả đầu ra. Đối lập với nhóm Cảm xúc (F) luôn ưu tiên sự hòa hợp tập thể, ENTJ (T) đặt "sự thật" và "năng suất" lên hàng đầu, sẵn sàng đưa ra những quyết định khắc nghiệt nhất miễn là nó mang lại kết quả tốt nhất cho tổ chức.
            <br><br>
            <strong style="color: #6b46c1;">• Judging (J) – Phong cách tổ chức cuộc sống Quyết đoán:</strong> 
            Lối sống của ENTJ mang tính kỷ luật thép và cấu trúc vô cùng chặt chẽ. Họ cực kỳ dị ứng với sự mơ hồ, lối sống tùy cơ ứng biến hay thói quen trì hoãn của nhóm Linh hoạt (P). Một ENTJ điển hình luôn quản lý cuộc sống bằng các bảng biểu tiến độ, hệ thống KPI định lượng và các kế hoạch hành động chi tiết đến từng giờ. Họ luôn muốn chốt hạ vấn đề một cách nhanh chóng, đưa mọi biến số vào tầm kiểm soát và đòi hỏi tính cam kết, tính kỷ luật tối cao từ bản thân cũng như từ các thành viên trong đội ngũ.
        `,
        
        // 2. ĐIỂM MẠNH & ĐIỂM YẾU CẤU TRÚC LUẬN ĐIỂM ĐƯỢC MỞ RỘNG CHI TIẾT
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Khả năng lãnh đạo và quản trị vượt trội:</strong> <span style="color: #4a5568;">Họ có tài năng thiên bẩm trong việc nhìn ra thế mạnh của từng người, phân chia công việc hợp lý, truyền cảm hứng mạnh mẽ và thiết lập các quy trình vận hành trơn tru giúp toàn đội đạt hiệu suất tối đa.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Ý chí kiên cường và tinh thần quyết đoán cao độ:</strong> <span style="color: #4a5568;">Áp lực thi cử dồn dập hay khủng hoảng dự án chỉ làm ENTJ thêm phần phấn chấn. Họ không bao giờ lùi bước trước khó khăn, có khả năng giữ cái đầu lạnh để đưa ra các quyết định chuẩn xác dưới áp lực thời gian.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Tư duy chiến lược đỉnh cao:</strong> <span style="color: #4a5568;">Họ không bao giờ làm việc một cách mù quáng mà luôn xây dựng các lộ trình dài hạn bài bản, chủ động nhận diện các rủi ro từ sớm để lập sẵn phương án chữa cháy hiệu quả, giúp tập thể luôn đi đúng hướng.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Độc đoán, độc quyền và quá áp đặt:</strong> <span style="color: #4a5568;">Tin tưởng tuyệt đối vào tư duy của mình khiến ENTJ dễ lấn lướt ý kiến người khác, biến buổi làm việc nhóm thành cuộc độc thoại và tỏ ra thiếu kiên nhẫn một cách gay gắt với những người có nhịp độ làm việc chậm hơn.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Thiếu đồng cảm cảm xúc (Chỉ số EQ thấp):</strong> <span style="color: #4a5568;">Coi việc biểu lộ cảm xúc là sự yếu đuối hoặc lãng phí thời gian, họ thường thẳng tay chỉ trích trực diện lỗi sai của đồng đội bằng ngôn từ khô khan, vô tình tạo ra sự rạn nứt tinh thần nghiêm trọng trong nhóm.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Quá tập trung vào mục tiêu mà bỏ qua chi tiết:</strong> <span style="color: #4a5568;">Mải mê theo đuổi tầm nhìn vĩ mô và tốc độ hoàn thành công việc khiến họ đôi khi ngó lơ các quy định chi tiết kỹ thuật nhỏ nhặt nhưng mang tính cốt lõi, dẫn đến việc hệ thống phát sinh lỗi ngầm.</span></li>
                </ol>
            </div>
        `,
        
        // 3. MỐI QUAN HỆ XÃ HỘI MỞ RỘNG
        moiQuanHe: "Trong đời sống xã hội, ENTJ là những người thẳng thắn, tràn đầy năng lượng và có xu hướng làm chủ các cuộc trò chuyện. Họ xây dựng vòng tròn mối quan hệ xung quanh các khái niệm như 'năng lực' và 'sự phát triển'. ENTJ tìm kiếm những người bạn có tham vọng lớn, tư duy sắc sảo và sẵn sàng cùng họ tham gia vào các hoạt động có tính thử thách cao. Họ cực kỳ dị ứng với sự thảo mai, nói vòng vo hay tư duy dậm chân tại chỗ. Dù có vẻ ngoài uy quyền và đôi khi lấn lướt, nhưng đối với những người được họ công nhận, ENTJ sẽ là một người đồng hành cực kỳ trung thành, luôn thúc đẩy và hỗ trợ bạn bè bứt phá giới hạn để vươn tới thành công.",
        
        // 4. LÀM SAO ĐỂ THÂN THIẾT MỞ RỘNG
        lamSaoDeThan: "- <strong>Chứng minh bằng năng lực thực tế:</strong> Hãy hoàn thành phần việc được giao một cách xuất sắc, đúng giờ và luôn chuẩn bị sẵn số liệu trước khi thảo luận với họ.<br>- <strong>Thẳng thắn phản biện có chiều sâu:</strong> Đừng chỉ gật đầu đồng ý; ENTJ cực kỳ tôn trọng những người dám đứng lên phản bác lại ý kiến của họ bằng lập luận logic chặt chẽ.<br>- <strong>Rõ ràng mục đích và đi thẳng vào vấn đề:</strong> Loại bỏ các câu chuyện phiếm dài dòng khi đang bàn công việc, hãy trình bày giải pháp một cách trực diện và ngắn gọn.",
        
        // 5. TRONG ĐẠI HỌC MỞ RỘNG
        trongDaiHoc: "Tại môi trường đại học, ENTJ là những 'Chiến thần Leader' quyền lực của các bài tập lớn. Họ là người lập group chat, xây dựng file Notion quản lý tiến độ, phân chia task rõ ràng và sẵn sàng gạch tên những thành viên lười biếng ra khỏi danh sách nộp bài mà không chút do dự. Họ rất tích cực phát biểu, tranh luận trực tiếp với giảng viên để làm rõ bản chất vấn đề. Ngoài giờ học, ENTJ thường đảm nhận các vị trí Chủ tịch câu lạc bộ, thủ lĩnh phong trào sinh viên hoặc chủ động đi kết hợp mạng lưới networking với các chuyên gia, doanh nghiệp từ rất sớm để dọn đường cho sự nghiệp tương lai.",
        
        // 6. CHIẾN LƯỢC HỌC TẬP PHÙ HỢP MỞ RỘNG
        chienLuocHocTap: "• <strong>Học qua việc giảng giải và điều phối:</strong> Hãy chủ động đứng ra tổ chức các buổi học nhóm, đảm nhận vai trò hệ thống hóa kiến thức cho cả lớp trước mùa thi. Việc giải thích lại kiến thức cho người khác giúp bạn khắc sâu lý thuyết nhanh nhất.<br>• <strong>Ứng dụng mô hình OKRs và KPI cá nhân:</strong> Biến các học phần khô khan thành các mục tiêu chiến lược cụ thể đi kèm các chỉ số đo lường kết quả rõ ràng (Ví dụ: Đạt 9.0 môn Toán cao cấp bằng cách giải quyết 50 bài tập nâng cao mỗi tuần).<br>• <strong>Phân tích Case-Study thực chiến vĩ mô:</strong> Tìm kiếm và nghiên cứu các bài tập tình huống thực tế từ Harvard Business Review hoặc các trường hợp doanh nghiệp thật để xem lý thuyết trên slide được ứng dụng thế nào.",
        
        // 7. LỜI KHUYÊN CHO TÍNH CÁCH MỞ RỘNG
        loiKhuyen: "Lời khuyên phát triển: Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau. Hãy hiểu rằng không phải ai cũng sở hữu nguồn năng lượng dồi dào và khả năng chịu áp lực cao như bạn. Việc bạn ép buộc tất cả mọi người phải chạy theo nhịp độ của mình chỉ tạo ra sự ức chế tâm lý. Hãy học cách lắng nghe chủ động, thấu hiểu cảm xúc của đồng đội và rèn luyện kỹ năng khen ngợi ghi nhận nỗ lực. Đó không phải là sự yếu đuối, mà chính là đỉnh cao của nghệ thuật đắc nhân tâm và quản trị nhân sự."
    },

    "ENTP": {
        tagline: "Nhà Phát Minh Tầm Nhìn",
        group: "Analysts",
        color: "#6b46c1",
        
        // 1. TỔNG QUAN NHÓM CHUYÊN SÂU THEO 4 CẶP CHIỀU ĐỐI LẬP
        tongQuan: `
            ENTP (Extraverted – Intuitive – Thinking – Perceiving) là những bộ óc đổi mới, sáng tạo và tư duy linh hoạt bậc nhất trong hệ thống MBTI, chiếm khoảng 3-4% dân số thế giới. Được mệnh danh là "Nhà Phát Minh Tầm Nhìn" hay "Kẻ phản biện bẩm sinh", họ sở hữu một niềm đam mê bất tận với việc phá vỡ các giới hạn tư duy cũ kỹ, thách thức các giả thuyết có sẵn để kiến tạo nên những giải pháp độc bản. Bộ não của một ENTP hoạt động như một cỗ máy bão não (Brainstorming) chạy không ngừng nghỉ, nơi các ý tưởng mới liên tục được sinh ra và kết nối với nhau theo những cách thức kỳ lạ nhất. Họ yêu thích quá trình tư duy khám phá bản chất thế giới và coi cuộc sống như một sân chơi trí tuệ đầy phấn khích.
            <br><br>
            Để thấu hiểu toàn diện thế giới quan đa chiều và cách thức vận hành tư duy của một ENTP, chúng ta bóc tách qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #6b46c1;">• Extraverted (E) – Sự định hướng năng lượng Hướng ngoại:</strong> 
            ENTP hấp thụ và nạp lại năng lượng thông qua việc tương tác, tranh luận và va chạm tư duy với thế giới bên ngoài. Họ cực kỳ thích không khí sôi nổi của các cuộc hội thảo, các buổi thảo luận nhóm mở và dùng môi trường xung quanh làm 'bàn cát' để thử nghiệm các ý tưởng độc lạ của mình. ENTP (E) có khả năng hoạt ngôn bẩm sinh, luôn tràn đầy sự hài hước, dí dỏm và dễ dàng làm chủ bầu không khí của bất kỳ cuộc tụ tập nào nhờ khả năng kết nối câu chuyện linh hoạt.
            <br><br>
            <strong style="color: #6b46c1;">• Intuitive (N) – Cách thức tiếp nhận thông tin bằng Trực giác:</strong> 
            Đây chính là cỗ máy sinh ra các sáng kiến đột phá của ENTP. Thay vì hài lòng với những dữ kiện thực tế hiển nhiên trước mắt hoặc tuân thủ các quy trình sẵn có giống như nhóm Cảm giác (S), ENTP (N) luôn nhìn nhận vấn đề qua lăng kính của các khả năng trừu tượng: "Nếu chúng ta làm ngược lại thì sao?" hay "Điều gì ẩn sau quy luật này?". Trực giác mạnh mẽ giúp họ dễ dàng nhìn ra hàng trăm hướng đi mới cho một bài toán và liên kết những khái niệm tưởng chừng như hoàn toàn không liên quan lại với nhau.
            <br><br>
            <strong style="color: #6b46c1;">• Thinking (T) – Phương thức ra quyết định bằng Lý trí:</strong> 
            Mặc dù sở hữu những ý tưởng bay bổng và có phần điên rồ, ENTP lại lọc chúng bằng một bộ lọc logic vô cùng khắt khe và tàn nhẫn. Khi đưa ra quyết định hoặc đánh giá một vấn đề, họ hoàn toàn tách biệt bản thân khỏi các yếu tố cảm xúc cá nhân hay áp lực từ số đông. Họ mổ xẻ các lập luận dựa trên tính chính xác tuyệt đối của dữ liệu và quy luật nhân quả. Đối lập với nhóm Cảm xúc (F) luôn ưu tiên sự hòa hợp, ENTP (T) coi chân lý và logic khách quan là mục tiêu tối thượng, sẵn sàng đóng vai 'kẻ phản biện' để vạch trần các lỗ hổng lập luận của người khác.
            <br><br>
            <strong style="color: #6b46c1;">• Perceiving (P) – Phong cách tổ chức cuộc sống Linh hoạt:</strong> 
            Đây chính là đặc trưng tạo nên sự ngẫu hứng hoàn toàn trong lối sống của ENTP, đối lập với tính kỷ luật gò bó của ENTJ. Họ ghét cay ghét đắng các kế hoạch đóng khung chi tiết, các lịch trình cố định lặp đi lặp lại hay các quy định thủ tục hành chính mang tính hình thức. ENTP muốn giữ cho mọi lựa chọn của mình luôn ở trạng thái mở để sẵn sàng thích ứng với các biến số mới. Họ làm việc dựa vào dòng chảy cảm hứng đột phát: Có thể thức trắng đêm để mày mò một công nghệ mới vì tò mò, nhưng lại gặp khó khăn rất lớn trong việc duy trì sự ngăn nắp hay nộp bài tập đúng hạn.
        `,
        
        // 2. ĐIỂM MẠNH & ĐIỂM YẾU CẤU TRÚC LUẬN ĐIỂM ĐƯỢC MỞ RỘNG CHI TIẾT
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Khả năng ứng biến và tư duy nhạy bén bậc thầy:</strong> <span style="color: #4a5568;">Họ có tốc độ xử lý thông tin cực nhanh, có khả năng xoay chuyển tình thế trong chớp mắt và luôn tìm ra lối thoát độc đáo, sáng tạo khi nhóm rơi vào các tình huống ngặt nghèo, bất ngờ.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Nguồn sáng kiến vô tận và tư duy đổi mới đột phá:</strong> <span style="color: #4a5568;">Không bao giờ bị giới hạn bởi các lối mòn cũ. Trong các buổi họp ý tưởng cho dự án môn học, ENTP là người liên tục đưa ra các góc nhìn độc lạ, giúp bài làm của nhóm nổi bật hoàn toàn so với phần còn lại.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Kỹ năng giao tiếp, hùng biện cực kỳ cuốn hút:</strong> <span style="color: #4a5568;">Sở hữu tài năng sử dụng ngôn từ linh hoạt, lập luận sắc sảo và sự tự tin bẩm sinh, họ có khả năng bảo vệ luận điểm của mình và thuyết phục người nghe một cách vô cùng lôi cuốn.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Hội chứng 'Cả thèm chóng chán' và thiếu kiên trì:</strong> <span style="color: #4a5568;">ENTP cực kỳ hào hứng ở giai đoạn khởi đầu khi nghĩ ra ý tưởng vĩ mô, nhưng họ lại nhanh chóng mất hứng thú và lười biếng khi bước vào giai đoạn thực thi thô sơ, chi tiết hoặc làm báo cáo tài liệu.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Thích tranh luận đến mức gây hấn và mất lòng:</strong> <span style="color: #4a5568;">Vì thói quen phản biện bẩm sinh, họ thường xuyên phản bác ý kiến của người khác chỉ để thử nghiệm tính logic của vấn đề, khiến đồng đội dễ cảm thấy bị tấn công cá nhân và tạo không khí căng thẳng không đáng có.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Sa lầy vào hội chứng trì hoãn (Procrastination):</strong> <span style="color: #4a5568;">Ghét sự gò bó của kỷ luật khiến họ có xu hướng tích tụ toàn bộ bài tập lớn và chỉ bắt tay vào chạy nước rút điên cuồng vào vài tiếng ngắn ngủi cuối cùng trước khi cổng nộp bài đóng lại.</span></li>
                </ol>
            </div>
        `,
        
        // 3. MỐI QUAN HỆ XÃ HỘI MỞ RỘNG
        moiQuanHe: "Trong đời sống xã hội, ENTP là những thỏi nam châm thu hút sự chú ý nhờ tính cách hài hước, thông minh và kho kiến thức rộng lớn. Họ coi các mối quan hệ như một không gian chia sẻ và trao đổi tư duy. ENTP rất thích trêu chọc, thử thách các giới hạn suy nghĩ và phản biện lại quan điểm của bạn bè để kích thích não bộ. Họ trân trọng những người bạn có cái đầu lạnh, cởi mở, không dễ bị tự ái hay tổn thương bởi các lời nhận xét thẳng thắn của họ. Dù đôi khi bị coi là 'kẻ gây rối' trong các cuộc tranh luận, nhưng ENTP lại là những người bạn rất chân thành, không bao giờ thảo mai, nói xấu sau lưng và luôn mang lại nguồn năng lượng mới mẻ, thú vị cho tập thể.",
        
        // 4. LÀM SAO ĐỂ THÂN THIẾT MỞ RỘNG
        lamSaoDeThan: "- <strong>Hăng hái tham gia vào các cuộc chơi tư duy:</strong> Sẵn sàng tung hứng, lắng nghe và phản biện lại các giả thuyết kỳ lạ, điên rồ của họ mà không phán xét.<br>- <strong>Tuyệt đối không tự ái hay kịch tính hóa cảm xúc:</strong> Hãy hiểu rằng khi họ phản bác ý kiến của bạn, họ đang tấn công vào logic của vấn đề chứ hoàn toàn không tấn công con người bạn.<br>- <strong>Đồng hành cùng sự ngẫu hứng:</strong> Sẵn sàng cùng họ trải nghiệm những xu hướng công nghệ mới, những quán cà phê độc lạ hoặc những chuyến đi bất ngờ.",
        
        // 5. TRONG ĐẠI HỌC MỞ RỘNG
        trongDaiHoc: "Tại giảng đường đại học, ENTP tỏa sáng rực rỡ nhất trong các buổi thuyết trình, phản biện trực tiếp hoặc các cuộc thi tranh biện (Debate). Họ có khả năng đứng nói trôi chảy suốt 15 phút dựa trên một slide bài giảng chuẩn bị rất vội vàng nhờ tư duy nhạy bén và lượng kiến thức nền rộng. Họ học tập hoàn toàn theo cảm hứng cá nhân: Nếu môn học kích thích được sự tò mò, họ sẽ tự nghiên cứu sâu vượt chương trình; ngược lại, họ sẽ trốn tiết hoặc học đối phó các môn đại cương mang tính học thuộc lòng vẹt. Góc học tập của họ thường khá bừa bộn và họ luôn là những 'chiến thần thức đêm' khét tiếng.",
        
        // 6. CHIẾN LƯỢC HỌC TẬP PHÙ HỢP MỞ RỘNG
        chienLuocHocTap: "• <strong>Ứng dụng phương pháp Học qua Tranh luận (Debate Learning):</strong> Hãy thảo luận và phản biện trực tiếp các kiến thức khó với bạn bè hoặc giảng viên. Việc tìm cách bảo vệ luận điểm giúp bộ não của bạn khắc sâu bản chất môn học tốt nhất.<br>• <strong>Trò chơi hóa lộ trình học (Gamification):</strong> Biến các bài tập khô khan thành các thử thách giải đề nhanh có tính đối kháng hoặc đặt phần thưởng giải trí ngắn để kích thích sự phấn chấn của não bộ.<br>• <strong>Bắt cặp với đồng đội nhóm Judging (J):</strong> Khi làm bài tập lớn, hãy chọn lập nhóm với một người bạn có tính kỷ luật cao (như nhóm Hộ Vệ) để họ giúp bạn kéo các ý tưởng bay bổng về mặt đất và chốt bài nộp đúng hạn.",
        
        // 7. LỜI KHUYÊN CHO TÍNH CÁCH MỞ RỘNG
        loiKhuyen: "Lời khuyên phát triển: Ý tưởng dù có vĩ đại và đột phá đến đâu cũng sẽ trở nên vô giá trị nếu nó chỉ nằm lại trên giấy hoặc trong đầu bạn. Hãy học cách chuyển dịch năng lượng từ trạng thái 'Nhà phát minh ý tưởng' sang 'Nhà thực thi thực tế'. Tập cho mình kỷ luật tự thân, đặt ra các mốc thời gian nghiêm khắc và cam kết hoàn thiện trọn vẹn phiên bản cơ bản của dự án trước khi nhảy sang một ý tưởng mới thú vị khác. Khi làm việc nhóm, hãy ghi nhớ rằng một lời động viên, khen ngợi chân thành có sức mạnh thúc đẩy tiến độ tốt hơn nhiều so với việc chỉ ra 10 lỗi sai logic của đồng đội."
    },
    // mbti-data.js (Tiếp tục bổ sung phân hệ Diplomats - Nhà Ngoại Giao)
    "INFJ": {
        tagline: "Nhà Bảo Vệ Lý Tưởng",
        group: "Diplomats",
        color: "#2f855a",
        tongQuan: `
            INFJ (Introverted – Intuitive – Feeling – Judging) là nhóm tính cách hiếm gặp nhất trong hệ thống MBTI, chỉ chiếm chưa đầy 1-2% dân số thế giới. Được mệnh danh là "Nhà Bảo Vệ Lý Tưởng" hay "Người thấu thị tâm hồn", họ sở hữu sự kết hợp độc đáo giữa một thế giới nội tâm sâu sắc, lý tưởng nhân văn cao cả và một ý chí kiên định để hiện thực hóa những mục tiêu đó. INFJ không chỉ đơn thuần nhìn thế giới như nó đang là, họ nhìn thấy tiềm năng tốt đẹp nhất của vạn vật và con người. Họ sống có mục đích rõ ràng, luôn hướng tới việc tạo ra các giá trị bền vững, nâng đỡ tinh thần và đem lại sự chữa lành cho cộng đồng xung quanh.
            <br><br>
            Để thấu hiểu toàn diện thế giới quan tinh tế và cách thức vận hành nhận thức của một INFJ, chúng ta bóc tách qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #2f855a;">• Introverted (I) – Sự định hướng năng lượng Hướng nội:</strong> 
            Nguồn năng lượng cốt lõi của INFJ được tích lũy hoàn toàn trong thế giới nội tâm của những suy ngẫm, cảm xúc sâu kín và các giá trị đạo đức cá nhân. Họ cực kỳ kín tiếng, riêng tư và nhạy cảm với các dòng năng lượng, cảm xúc của đám đông xung quanh. INFJ không phải là người ích kỷ xa lánh xã hội, họ chỉ đơn giản là cần những khoảng lặng dài yên tĩnh tuyệt đối để "sạc" lại pin tinh thần và thanh lọc tâm trí sau khi phải tiếp xúc với môi trường náo nhiệt bên ngoài.
            <br><br>
            <strong style="color: #2f855a;">• Intuitive (N) – Cách thức tiếp nhận thông tin bằng Trực giác:</strong> 
            Lăng kính trực giác của INFJ hoạt động như một hệ thống thấu thị tâm lý con người ở mức độ kinh ngạc. Thay vì tập trung vào các chi tiết thực tế bề nổi trước mắt giống như nhóm Cảm giác (S), INFJ (N) có xu hướng nhìn thẳng vào bản chất, thấu suốt các động cơ ẩn giấu, các mối liên hệ trừu tượng và mô hình xu hướng dài hạn. Họ thường có những cảm nhận chính xác về tương lai hoặc tâm trạng thật của người khác ngay cả khi đối phương cố tình che giấu.
            <br><br>
            <strong style="color: #2f855a;">• Feeling (F) – Phương thức ra quyết định bằng Cảm xúc:</strong> 
            INFJ đưa ra quyết định dựa trên một hệ thống giá trị đạo đức nội tại vô cùng nghiêm khắc và lòng trắc ẩn sâu sắc. Đối lập với nhóm Lý trí (T) đặt hiệu suất khách quan lên đầu, INFJ (F) luôn ưu tiên sự hòa hợp, thấu cảm và tác động tinh thần của quyết định đó đối với con người. Họ luôn nỗ lực tìm kiếm các giải pháp vẹn cả đôi đường, bảo vệ hạnh phúc tập thể và cực kỳ dị ứng với những hành vi ích kỷ, lợi dụng lẫn nhau.
            <br><br>
            <strong style="color: #2f855a;">• Judging (J) – Phong cách tổ chức cuộc sống Quyết đoán:</strong> 
            Đây chính là yếu tố biến INFJ từ một kẻ mơ mộng thành một nhà hành động thực tế. Họ có phong cách làm việc vô cùng ngăn nắp, bài bản, thích lập kế hoạch dài hạn và tuân thủ nghiêm túc các mốc thời gian (deadline). Họ ghét sự mơ hồ hay lối sống tùy cơ ứng biến vô định của nhóm Linh hoạt (P). Một INFJ chỉ thực sự cảm thấy bình yên khi lộ trình hành động của mình đã được chốt rõ ràng và các biến số xung quanh nằm trong tầm kiểm soát.
        `,
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Trí tuệ cảm xúc (EQ) và khả năng thấu cảm phi thường:</strong> <span style="color: #4a5568;">Họ có năng lực kết nối tinh thần sâu sắc, dễ dàng thấu hiểu tâm sự, nỗi đau và trở thành chỗ dựa tinh thần bình yên, người xoa dịu tuyệt vời cho bạn bè khi gặp hoạn nạn.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Sống có lý tưởng vững vàng và nguyên tắc đạo đức cao:</strong> <span style="color: #4a5568;">Họ không bao giờ chạy theo trào lưu hay tiền tài vật chất tầm thường mà luôn kiên định bảo vệ lẽ phải, sự công bằng và cống hiến hết mình vì lợi ích cộng đồng.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Tư duy sáng tạo và lập kế hoạch bài bản:</strong> <span style="color: #4a5568;">Kết hợp xuất sắc giữa trực giác tầm xa và phong cách tổ chức kỷ luật giúp họ không chỉ nghĩ ra những ý tưởng mang tính nhân văn vĩ mô mà còn hiện thực hóa chúng thành các dự án thực tế thành công.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Dễ rơi vào trạng thái kiệt quệ cảm xúc (Burnout):</strong> <span style="color: #4a5568;">Do có xu hướng liên tục hấp thụ, gánh vác các tâm trạng tiêu cực của mọi người xung quanh và ôm đồm quá nhiều trách nhiệm tinh thần lên vai mình mà quên chăm sóc bản thân.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Hội chứng 'Cửa sập' lạnh lùng (INFJ Doorslam):</strong> <span style="color: #4a5568;">Khi lòng tin hoặc lòng tốt bị người khác chà đạp vượt quá giới hạn chịu đựng, họ sẽ lập tức đóng sập cánh cửa mối quan hệ, cắt đứt hoàn toàn liên lạc vĩnh viễn mà không đưa ra một lời giải thích nào.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Quá nhạy cảm với những lời chỉ trích trực diện:</strong> <span style="color: #4a5568;">Họ dễ bị tổn thương sâu sắc trước những phản hồi khô khan, mang tính công kích trực tiếp vào hệ giá trị cá nhân, khiến họ thu mình lại và hoài nghi năng lực bản thân.</span></li>
                </ol>
            </div>
        `,
        moiQuanHe: "Trong đời sống xã hội, INFJ là những người vô cùng khép kín và có xu hướng ẩn mình. Họ hoàn toàn dị ứng với những buổi tiệc tùng ồn ào hay các mối quan hệ xã giao hời hợt, thảo mai. INFJ tuân thủ nghiêm ngặt nguyên tắc 'chất lượng vượt trội số lượng', chỉ mở lòng thiết lập tình bạn với một vài người tri kỷ thực sự - nơi đôi bên có sự thấu hiểu sâu sắc về tâm hồn và nhân sinh quan. Họ là người bạn vô cùng trung thành, luôn âm thầm nâng đỡ, động viên bạn bè bứt phá giới hạn và trân trọng tuyệt đối ranh giới riêng tư của đối phương.",
        lamSaoDeThan: "- <strong>Chân thành tuyệt đối và không giả tạo:</strong> Hãy bộc lộ con người thật của bạn; INFJ có bộ radar phát hiện sự thảo mai hay diễn kịch cực kỳ nhạy bén.<br>- <strong>Chia sẻ sâu sắc về thế giới nội tâm:</strong> Chủ động thảo luận với họ về ước mơ, nỗi sợ, các triết lý cuộc sống hoặc nghệ thuật trừu tượng.<br>- <strong>Tôn trọng khoảng lặng riêng:</strong> Đừng trách móc hay dồn ép khi họ đột ngột ngắt kết nối vài ngày để quay về thế giới của riêng mình.",
        trongDaiHoc: "Tại giảng đường đại học, INFJ là những sinh viên âm thầm nhưng có thành tích học thuật xuất sắc. Họ ghi chép bài vở có hệ thống, góc tự học ngăn nắp và luôn chọn các đề tài tiểu luận hướng tới sự phát triển con người, tâm lý học hoặc giáo dục nhân văn. Khi làm việc nhóm, INFJ đóng vai trò là 'chất keo sinh học' tối thượng: Họ lắng nghe mọi ý kiến, khéo léo hòa giải các xung đột nảy lửa và giữ gìn bầu không khí hợp tác ôn hòa cho cả đội ngũ.",
        chienLuocHocTap: "• <strong>Liên kết kiến thức với ý nghĩa nhân văn:</strong> Luôn tìm câu trả lời cho câu hỏi 'Lý thuyết này giúp ích gì cho xã hội?' để khơi dậy động lực học sâu.<br>• <strong>Hệ thống hóa bằng Sơ đồ tư duy trực quan (Mindmap):</strong> Sử dụng hình ảnh và màu sắc để liên kết các luồng kiến thức vĩ mô dựa trên thế mạnh trực giác.<br>• <strong>Thiết lập không gian học tập biệt lập:</strong> Chọn các góc tĩnh lặng trong thư viện để tránh bị phân tâm bởi năng lượng và tiếng ồn của người khác.",
        loiKhuyen: "Lời khuyên phát triển: Bạn không thể chữa lành cho cả thế giới nếu chính bản thân bạn đang rỉ máu. Hãy học cách thiết lập ranh giới cảm xúc rõ ràng để bảo vệ năng lượng cá nhân, học cách nói 'Không' một cách kiên định và chấp nhận rằng xung đột hay sự không hoàn hảo là một phần tất yếu của cuộc sống con người."
    },

    "INFP": {
        tagline: "Nhà Hòa Giải Mơ Mộng",
        group: "Diplomats",
        color: "#2f855a",
        tongQuan: `
            INFP (Introverted – Intuitive – Feeling – Perceiving) chiếm khoảng 4% dân số thế giới. Được mệnh danh là "Nhà Hòa Giải Mơ Mộng" hay "Tâm hồn nghệ sĩ học đường", họ sống trọn vẹn và sâu sắc trong một thế giới nội tâm phong phú, tràn ngập những ý tưởng lý tưởng hóa, lòng trắc ẩn và khát vọng tìm kiếm sự chân thật nguyên bản. Một INFP luôn bị thôi thúc bởi việc thấu hiểu chính bản thân mình và mang lại sự chữa lành, vẻ đẹp nghệ thuật cho cuộc sống. Họ tôn trọng sự độc bản của mỗi cá nhân và luôn tìm kiếm ý nghĩa sâu xa đằng sau mọi sự kiện diễn ra.
            <br><br>
            Để hiểu được thế giới cảm xúc bay bổng và cách thức vận hành tâm lý của một INFP, chúng ta bóc tách qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #2f855a;">• Introverted (I) – Sự định hướng năng lượng Hướng nội:</strong> 
            Năng lượng của INFP hướng hoàn toàn vào bên trong để nuôi dưỡng hệ thống giá trị đạo đức cá nhân sâu sắc. Họ là những người vô cùng khép kín, kín tiếng và có xu hướng ẩn mình khỏi thế giới ồn ào. INFP (I) cần rất nhiều thời gian ở một mình để xử lý, chiêm nghiệm những dòng cảm xúc phức tạp chạy qua tâm trí, và họ chỉ chia sẻ những suy nghĩ thật lòng với một số rất ít những người bạn cực kỳ tin cậy.
            <br><br>
            <strong style="color: #2f855a;">• Intuitive (N) – Cách thức tiếp nhận thông tin bằng Trực giác:</strong> 
            Lăng kính trực giác của INFP hoạt động như một cỗ máy tìm kiếm các khả năng vĩ mô, các phép ẩn dụ và biểu tượng trừu tượng. Thay vì hài lòng với thực tế số liệu thô hay quy trình rập khuôn của nhóm Cảm giác (S), INFP say mê khám phá những điều kỳ diệu ẩn giấu. Họ nhìn thế giới qua lăng kính lãng mạn, yêu thích nghệ thuật, văn học và luôn tìm kiếm các liên kết ý tưởng độc lạ, sáng tạo vượt giới hạn thông thường.
            <br><br>
            <strong style="color: #2f855a;">• Feeling (F) – Phương thức ra quyết định bằng Cảm xúc:</strong> 
            Đây là chiếc la bàn định hướng tối cao trong cuộc đời INFP. Họ đưa ra quyết định dựa trên việc hành động đó có thực sự chân thực với tiếng gọi con tim và hệ giá trị nhân văn cốt lõi của họ hay không, đối lập hoàn toàn với tính duy lý lạnh lùng của nhóm Lý trí (T). Đối với INFP, việc sống thật với bản sắc cá nhân và không thẹn với lòng mình quan trọng hơn nhiều so với việc đạt hiệu suất công việc cao hay chạy theo các quy chuẩn thành công của số đông.
            <br><br>
            <strong style="color: #2f855a;">• Perceiving (P) – Phong cách tổ chức cuộc sống Linh hoạt:</strong> 
            Họ là những người tôn thờ tự do và sự ngẫu hứng. INFP ghét cay ghét đắng các kế hoạch đóng khung chi tiết, các nội quy gò bó cứng nhắc hay các thủ tục hành chính ngột ngạt. Họ muốn giữ cho cuộc sống học tập của mình là một dòng chảy tự nhiên, hoạt động và làm việc hoàn toàn phụ thuộc vào nguồn cảm hứng. Khi có cảm hứng cảm xúc, họ có thể tạo ra những tác phẩm vĩ đại; ngược lại, họ sẽ chật vật nghiêm trọng khi bị ép vào khuôn khổ kỷ luật bài bản.
        `,
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Lòng bao dung và sự trắc ẩn thuần khiết:</strong> <span style="color: #4a5568;">Họ luôn chấp nhận sự khác biệt của mọi người mà không phán xét, luôn lắng nghe bằng cả trái tim và mang lại sự an ủi ấm áp cho đồng đội.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Tư duy sáng tạo độc bản và tính nghệ thuật cao:</strong> <span style="color: #4a5568;">Sở hữu tài năng thiên bẩm trong việc truyền tải cảm xúc sâu sắc qua câu chữ, hình ảnh, slide thuyết trình hoặc thiết kế, tạo ra những sản phẩm mang đậm dấu ấn cá nhân độc đáo.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Sự trung thực tuyệt đối với lý tưởng bản thân:</strong> <span style="color: #4a5568;">Họ luôn kiên định sống thật với bản sắc cá nhân, không thỏa hiệp với những điều giả tạo hay xu nịnh dù trong bất kỳ hoàn cảnh nào.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Dễ lý tưởng hóa thực tế và tự cô lập:</strong> <span style="color: #4a5568;">Khi cuộc sống thực tế phũ phàng không giống như viễn cảnh đẹp đẽ mộng mơ trong đầu, INFP dễ rơi vào trạng thái thất vọng sâu sắc, tổn thương và chọn cách trốn nghĩa vụ, cắt đứt kết nối.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Hội chứng trì hoãn nghiêm trọng (Procrastination):</strong> <span style="color: #4a5568;">Việc phụ thuộc 100% vào nguồn cảm hứng khiến họ cực kỳ chật vật khi đối mặt với các môn học bắt buộc khô khan, dẫn đến tình trạng tích tụ deadline sát nút.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Cá nhân hóa mọi lời góp ý công việc:</strong> <span style="color: #4a5568;">Do quá nhạy cảm, họ dễ coi các lời nhận xét, phê bình mang tính kỹ thuật chuyên môn của nhóm trưởng là một sự tấn công trực diện vào giá trị con người mình.</span></li>
                </ol>
            </div>
        `,
        moiQuanHe: "Trong đời sống tình cảm và bạn bè, INFP là những tâm hồn lãng mạn, trung thành và vô cùng nhạy cảm. Họ tìm kiếm sự kết nối tinh thần chân thực, sâu sắc vượt lên trên những mối quan hệ xã giao thông thường. Họ cực kỳ trân trọng những người bạn biết lắng nghe, không phán xét và chấp nhận con người thật đầy mâu thuẫn của họ. INFP luôn âm thầm chúc phúc, đồng hành và sẵn sàng đứng lên bảo vệ người bạn thân thiết của mình trước mọi sự bất công.",
        lamSaoDeThan: "- <strong>Tôn trọng và ghi nhận thế giới cảm xúc:</strong> Hãy chăm chú lắng nghe khi họ chia sẻ về một bài hát, một cuốn sách hay một giấc mơ ngẫu hứng.<br>- <strong>Tuyệt đối không dùng tư duy thực dụng thô bạo:</strong> Đừng dập tắt các ý tưởng bay bổng của họ bằng những lời nhận xét thực tế phũ phàng.<br>- <strong>Góp ý khéo léo và tinh tế:</strong> Tránh dùng ngôn từ nặng nề hay chỉ trích trực diện, hãy dùng sự động viên trước khi chỉ ra lỗi sai.",
        trongDaiHoc: "Tại môi trường học đường, giảng đường có thể là một nơi gây áp lực nếu INFP phải học quá nhiều môn học tính toán hoặc lập trình khô khan. Họ thường biến góc tự học thành một không gian thẩm mỹ dễ chịu với nến thơm, tranh ảnh. Họ tỏa sáng trong các bài luận độc lập đầy chất thơ nhưng thường chật vật, e dè trước áp lực làm việc nhóm có tính cạnh tranh cao hoặc các buổi tranh luận nảy lửa.",
        chienLuocHocTap: "• <strong>Thiết lập góc học tập khơi nguồn cảm hứng (Aesthetic):</strong> Biến không gian học thành một nơi dễ chịu về mặt thị giác để kích hoạt tâm trạng tốt.<br>• <strong>Học thông qua phương pháp viết ký sự (Journaling):</strong> Tóm tắt kiến thức khô khan bằng cách viết nhật ký học tập, liên kết bài học thành một câu chuyện giả tưởng sáng tạo.<br>• <strong>Tận dụng 'Đỉnh cảm hứng' để chạy deadline:</strong> Khi tâm trạng đạt trạng thái phấn chấn nhất, hãy tập trung giải quyết dứt điểm các bài tập lớn khó.",
        loiKhuyen: "Lời khuyên phát triển: Ý tưởng hay và lý tưởng cao đẹp chỉ thực sự có giá trị khi bạn đưa chúng vào thực tế. Hãy dũng cảm bước ra khỏi thế giới mộng mơ, đối diện với những nhiệm vụ thô sơ bằng sự kiên trì. Hãy học cách tách biệt phản hồi công việc ra khỏi giá trị con người bạn để không bị tổn thương vô căn cứ."
    },

    "ENFJ": {
        tagline: "Nhà Lãnh Đạo Truyền Cảm Hứng",
        group: "Diplomats",
        color: "#2f855a",
        tongQuan: `
            ENFJ (Extraverted – Intuitive – Feeling – Judging) là những nhà ngoại giao thiên bẩm, chiếm khoảng 2-3% dân số thế giới. Được mệnh danh là "Nhà Lãnh Đạo Truyền Cảm Hứng" hay "Thủ lĩnh kết nối", họ sở hữu một sức hút cá nhân mãnh liệt, sự ấm áp bộc lộ ra bên ngoài và một niềm đam mê cháy bỏng trong việc nâng đỡ con người xung quanh khai phá tiềm năng tối đa của họ. ENFJ nhìn thấy những điểm tốt đẹp nhất ở mỗi cá nhân và luôn nỗ lực kiến tạo nên một tập thể đoàn kết, nơi mọi thành viên đều cảm thấy được ghi nhận, tôn trọng và yêu thương.
            <br><br>
            Để thấu hiểu toàn diện năng lượng dẫn dắt và cấu trúc tâm lý của một ENFJ, chúng ta phân tích qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #2f855a;">• Extraverted (E) – Sự định hướng năng lượng Hướng ngoại:</strong> 
            Nguồn năng lượng vô tận của ENFJ đến hoàn toàn từ việc tương tác và kết nối với con người. Họ là những chiến thần xã hội thực thụ, luôn tràn đầy nhiệt huyết và chủ động tỏa ra năng lượng tích cực ấm áp thu hút đám đông. ENFJ (E) tìm thấy sự phấn chấn lớn nhất khi được điều phối các sự kiện tập thể, đứng ra hòa giải các xung đột và trực tiếp thúc đẩy tinh thần của những người xung quanh.
            <br><br>
            <strong style="color: #2f855a;">• Intuitive (N) – Cách thức tiếp nhận thông tin bằng Trực giác:</strong> 
            Lăng kính trực giác giúp ENFJ thấu hiểu sâu sắc tâm lý số đông và nhìn ra các khả năng vĩ mô trong tương lai. Đối lập với nhóm Cảm giác (S) tập trung vào thực trạng hiện tại, ENFJ (N) luôn hướng mắt về một viễn cảnh tương lai tốt đẹp hơn cho tập thể. Họ có khả năng nhận biết nhu cầu, mong muốn thầm kín của đám đông cực kỳ nhanh nhạy để từ đó xây dựng tầm nhìn chung định hướng cho mọi người.
            <br><br>
            <strong style="color: #2f855a;">• Feeling (F) – Phương thức ra quyết định bằng Cảm xúc:</strong> 
            ENFJ dẫn dắt bằng một trái tim bao dung. Khi đưa ra quyết định, họ luôn đặt sự hòa hợp cảm xúc, giá trị đạo đức và lợi ích tinh thần của con người lên làm thước đo tối thượng, đối lập với tính duy lý lạnh lùng của nhóm Lý trí (T). Họ sẵn sàng hy sinh lợi ích cá nhân để giữ gìn sợi dây liên kết khăng khít, bảo vệ bầu không khí ôn hòa cho tập thể.
            <br><br>
            <strong style="color: #2f855a;">• Judging (J) – Phong cách tổ chức cuộc sống Quyết đoán:</strong> 
            Đây chính là yếu tố tạo nên phong cách lãnh đạo bài bản của ENFJ. Họ ghét sự mơ hồ, lối sống vô kỷ luật hay sự tùy cơ ứng biến của nhóm Linh hoạt (P). Một ENFJ điển hình luôn quản lý các dự án tập thể bằng lộ trình rõ ràng, phân chia công việc chi tiết và đòi hỏi tính trách nhiệm, cam kết cao từ toàn đội để đảm bảo dự án về đích đúng hạn mà không ai bị bỏ lại phía sau.
        `,
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Sức hút cá nhân và tài năng hùng biện xuất sắc:</strong> <span style="color: #4a5568;">Có khả năng đứng trước đám đông thuyết trình vô cùng lôi cuốn, truyền lửa nhiệt huyết, làm lay động lòng người và tập hợp lực lượng nhanh chóng hướng tới mục tiêu chung.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Tinh thần cống hiến và trách nhiệm tập thể cực cao:</strong> <span style="color: #4a5568;">Luôn hết mình vì lợi ích của lớp học, câu lạc bộ, sẵn sàng đứng ra gánh vác các công việc nặng nhọc và hy sinh thời gian cá nhân để hỗ trợ đồng đội vượt qua khó khăn.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Khả năng xây dựng đội ngũ và phát triển con người:</strong> <span style="color: #4a5568;">Nhìn ra thế mạnh tiềm ẩn của từng thành viên, khéo léo sắp xếp họ vào vị trí phù hợp nhất để kích thích họ tự tin tỏa sáng năng lực.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Hội chứng ôm đồm việc bao đồng và vị tha quá mức:</strong> <span style="color: #4a5568;">Rất khó khăn trong việc nói lời từ chối trước lời nhờ vả của người khác, thường xuyên tự vơ lấy rắc rối của bạn bè vào mình dẫn đến tình trạng kiệt sức tinh thần thường xuyên.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Quá nhạy cảm trước sự bất hòa hoặc phản đối:</strong> <span style="color: #4a5568;">Họ dễ rơi vào trạng thái suy sụp, thất vọng sâu sắc nếu nỗ lực kết nối cảm xúc của mình bị từ chối hoặc khi nội bộ nhóm xảy ra những mâu thuẫn rạn nứt không thể hòa giải.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Xu hướng kiểm soát tâm lý vô thức:</strong> <span style="color: #4a5568;">Vì quá muốn điều tốt đẹp diễn ra cho mọi người, họ đôi khi vô tình áp đặt, can thiệp quá sâu vào cuộc sống hoặc định hướng bạn bè phải phát triển theo tiêu chuẩn lý tưởng mà họ vạch ra.</span></li>
                </ol>
            </div>
        `,
        moiQuanHe: "Trong vòng tròn xã hội, ENFJ là trung tâm của mọi sự kết nối. Họ chu đáo, tinh tế và luôn chủ động chăm sóc tinh thần cho tất cả mọi người xung quanh. Họ xây dựng tình bạn dựa trên sự tin cậy, thấu hiểu và cùng nhau phát triển. ENFJ cực kỳ trân trọng những người bạn biết trân trọng tình cảm, sống có trách nhiệm và sẵn lòng đồng hành cùng họ trong các hoạt động hướng tới cộng đồng.",
        lamSaoDeThan: "- <strong>Hưởng ứng mạnh mẽ năng lượng của họ:</strong> Chủ động tham gia tích cực vào các phong trào, hoạt động làm việc nhóm do họ dẫn dắt.<br>- <strong>Ghi nhận lời khuyên chân thành:</strong> Cho họ thấy những lời khuyên, sự hỗ trợ của họ đã giúp cuộc sống hoặc điểm số của bạn tiến bộ như thế nào.<br>- <strong>Chủ động chăm sóc ngược lại:</strong> Hãy dành thời gian hỏi thăm sức khỏe và tâm trạng của ENFJ, vì họ thường quá mải lo cho người khác mà quên mất bản thân mình.",
        trongDaiHoc: "Tại giảng đường đại học, ENFJ là những gương mặt vàng xuất hiện trong ban cán sự lớp, chủ nhiệm các câu lạc bộ sinh viên hoặc trưởng nhóm thuyết trình khét tiếng. Họ kết nối cực tốt với các giảng viên, điều phối các buổi thảo luận vô cùng sinh động và hấp dẫn. Họ luôn là người đứng ra truyền lửa, vực dậy tinh thần chiến đấu cho cả tập thể khi bước vào mùa thi cử áp lực cao.",
        chienLuocHocTap: "• <strong>Thành lập Nhóm học tập tương tác (Study Group):</strong> Học tốt nhất thông qua việc thảo luận trực tiếp và giảng giải, hướng dẫn lại bài học cho các thành viên yếu hơn.<br>• <strong>Ứng dụng Kỹ thuật quản lý thời gian Eisenhower:</strong> Phân loại rõ ràng việc quan trọng của bản thân để kiên quyết từ chối những việc bao đồng bên ngoài.<br>• <strong>Lồng ghép lý thuyết vào dự án thực tiễn:</strong> Tham gia các dự án nghiên cứu khoa học hướng đến giải quyết các vấn đề xã hội để khơi dậy đam mê học học.",
        loiKhuyen: "Lời khuyên phát triển: Bạn không thể làm hài lòng tất cả mọi người trên thế giới này, và điều đó hoàn toàn bình thường. Hãy học cách từ chối một cách kiên định, thiết lập ranh giới bảo vệ quỹ thời gian cá nhân và hiểu rằng đôi khi để người khác tự đối mặt với sai lầm và tự đứng lên mới là cách giúp đỡ tốt nhất."
    },

    "ENFP": {
        tagline: "Nhà Truyền Phong Cách Đầy Cảm Hứng",
        group: "Diplomats",
        color: "#2f855a",
        tongQuan: `
            ENFP (Extraverted – Intuitive – Feeling – Perceiving) chiếm khoảng 7-8% dân số thế giới. Được mệnh danh là "Nhà Truyền Phong Cách" hay "Tâm hồn tự do của giảng đường", họ sở hữu nguồn năng lượng sống tràn trề, trí tưởng tượng phong phú vô hạn và một cái nhìn vô cùng lạc quan về những tiềm năng kỳ diệu của cuộc sống. Một ENFP luôn khao khát tìm kiếm sự tự do sáng tạo, bộc lộ cá tính độc bản và thiết lập các kết nối cảm xúc chân thực với con người xung quanh. Họ ghét sự rập khuôn, tẻ nhạt và luôn biến môi trường sống xung quanh thành một không gian đầy màu sắc và cảm hứng.
            <br><br>
            Để thấu hiểu toàn diện năng lượng sáng tạo đổi mới và cấu trúc tâm lý của một ENFP, chúng ta phân tích qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #2f855a;">• Extraverted (E) – Sự định hướng năng lượng Hướng ngoại:</strong> 
            ENFP hấp thụ và tái tạo năng lượng mạnh mẽ từ môi trường con người bên ngoài. Họ cực kỳ thân thiện, hoạt ngôn, có khả năng kết giao bạn mới chỉ trong vài phút tiếp xúc đầu tiên và dễ dàng trở thành tâm điểm của tiếng cười. Họ dùng thế giới xung quanh làm chất xúc tác để liên tục thảo luận và tung hứng các dòng chảy ý tưởng sáng tạo độc lạ của mình.
            <br><br>
            <strong style="color: #2f855a;">• Intuitive (N) – Cách thức tiếp nhận thông tin bằng Trực giác:</strong> 
            Đây chính là cỗ máy sinh ra các sáng kiến không giới hạn của ENFP. Thay vì bằng lòng với những dữ kiện thực tế hiển nhiên hay các quy trình bài bản sẵn có giống như nhóm Cảm giác (S), ENFP (N) nhìn cuộc sống như một tấm bản đồ chứa đựng đầy các bí ẩn cần khám phá. Họ nhạy bén phát hiện ra các mối liên hệ ẩn và liên tục tìm kiếm những hướng đi mới lạ cho mọi vấn đề.
            <br><br>
            <strong style="color: #2f855a;">• Feeling (F) – Phương thức ra quyết định bằng Cảm xúc:</strong> 
            Sống vô cùng tình cảm và đặt tính chân thật lên làm tiêu chuẩn tối cao. ENFP đưa ra quyết định dựa trên việc hành động đó có thực sự phù hợp với tiếng gọi cảm xúc nguyên bản và hệ giá trị cốt lõi của họ hay không, đối lập với tính duy lý lạnh lùng của nhóm Lý trí (T). Họ trân trọng bản sắc cá nhân và luôn cổ vũ người khác sống thật với chính mình.
            <br><br>
            <strong style="color: #2f855a;">• Perceiving (P) – Phong cách tổ chức cuộc sống Linh hoạt:</strong> 
            Họ tôn thờ tự do tự tại và sự ngẫu hứng hoàn toàn. ENFP ghét cay ghét đắng các kế hoạch đóng khung chi tiết, các lịch trình cố định lặp đi lặp lại hay sự gò bó của nội quy bài bản. Họ luôn muốn giữ cho mọi lựa chọn của mình ở trạng thái mở, làm việc và học tập hoàn toàn phụ thuộc vào dòng chảy cảm hứng đột phát, giúp họ luôn giữ được sự tươi mới.
        `,
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Kỹ năng giao tiếp xuất sắc và tạo mạng lưới rộng:</strong> <span style="color: #4a5568;">Có khả năng phá tan bầu không khí ngượng ngùng ở bất kỳ đâu, mang lại tiếng cười, năng lượng tích cực và sự gắn kết tức thì cho tập thể nhóm học tập.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Trí tưởng tượng phong phú và tư duy đổi mới liên tục:</strong> <span style="color: #4a5568;">Không bao giờ bị giới hạn bởi lối mòn tư duy cũ. Trong các buổi brainstorm dự án, ENFP là người liên tục đề xuất những ý tưởng quảng cáo, concept slide vô cùng độc lạ và lôi cuốn.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Khả năng thích ứng nhanh và tràn đầy nhiệt huyết:</strong> <span style="color: #4a5568;">Luôn sẵn sàng đón nhận những thử thách, môn học mới lạ với một tinh thần phấn chấn, lạc quan và có khả năng truyền lửa đam mê đó sang cho mọi người xung quanh.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Thiếu tập trung nghiêm trọng và dễ phân tâm:</strong> <span style="color: #4a5568;">Họ bị thu hút bởi quá nhiều thứ mới mẻ cùng lúc, dẫn đến xu hướng bỏ dở các phần việc cũ đang làm dở dang và thường xuyên trễ deadline nộp bài tập lớn.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Quá tải tâm lý do suy diễn cảm xúc quá mức:</strong> <span style="color: #4a5568;">Do trực giác quá nhạy cảm, họ rất dễ suy diễn quá mức về một ánh nhìn dửng dưng hay một câu nói vô tình của bạn bè, tự rước lấy lo âu và muộn phiền vô căn cứ.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Cực kỳ ghét công việc hành chính và chi tiết nhỏ nhặt:</strong> <span style="color: #4a5568;">Họ có thể nghĩ ra ý tưởng vĩ đại cho đề tài tiểu luận nhưng lại vô cùng chật vật, chán nản khi phải ngồi kiểm tra lỗi chính tả, căn lề văn bản hay xử lý số liệu Excel thô thô sơ.</span></li>
                </ol>
            </div>
        `,
        moiQuanHe: "Trong đời sống tình cảm và bạn bè, ENFP là những người bạn ngọt ngào, vui nhộn và luôn tràn ngập sự bất ngờ thú vị. Họ luôn khuyến khích, truyền động lực để bạn bè dám bộc lộ cá tính riêng của mình. Mối quan hệ với một ENFP luôn tràn ngập năng lượng tích cực, tiếng cười và những cuộc phiêu lưu ngẫu hứng. Họ trân trọng những người bạn chân thành, cởi mở và sẵn lòng lắng nghe những dòng suy nghĩ bay bổng đầy màu sắc của họ.",
        lamSaoDeThan: "- <strong>Sẵn sàng phiêu lưu ngẫu hứng:</strong> Đồng ý tham gia vào những lời rủ rê đi cà phê đổi gió, đi dạo đột xuất không lên lịch trước của họ.<br>- <strong>Lắng nghe các ý tưởng độc lạ:</strong> Đừng dập tắt sự hào hứng của họ bằng những gáo nước lạnh thực dụng hay chê trách phi thực tế.<br>- <strong>Chân thành bộc lộ bản sắc riêng:</strong> ENFP cực kỳ yêu mến và bị thu hút bởi những người dám sống thật với cá tính bản thân.",
        trongDaiHoc: "Tại trường học, ENFP là thỏi nam châm thu hút sự chú ý trong các sự kiện giao lưu văn nghệ, câu lạc bộ. Họ có khả năng biến một buổi thuyết trình môn học khô khan thành một mini-show đầy lôi cuốn nhờ phong cách trình diễn tự nhiên. Tuy nhiên, họ lại có thói quen trì hoãn nghiêm trọng, thường xuyên phải thức trắng đêm để ôn thi hoặc chạy dự án vào 2 tiếng cuối cùng trước khi đóng cổng nộp bài học phần.",
        chienLuocHocTap: "• <strong>Thay đổi không gian và phương pháp học liên tục:</strong> Thường xuyên đổi quán cà phê tự học, sử dụng các flashcard nhiều màu sắc để giữ bộ não luôn được kích thích mới mẻ.<br>• <strong>Ứng dụng kỹ thuật Pomodoro linh hoạt:</strong> Đặt các mốc thời gian ngắn tập trung cao độ xen kẽ các phần thưởng giải trí ngắn để bộ não không bị rơi vào trạng thái nhàm chán.<br>• <strong>Tìm kiếm đồng đội lập nhóm thuộc hệ Judging (J):</strong> Bắt cặp làm việc chung với một người bạn kỷ luật để họ kéo các ý tưởng của bạn về thực tế và nhắc nhở thời hạn nộp bài.",
        loiKhuyen: "Lời khuyên phát triển: Sự sáng tạo chỉ thực sự tỏa sáng khi nó được hoàn thiện trọn vẹn. Hãy tập cho mình thói quen thiết lập kỷ luật tự thân, học cách quản lý dòng chảy tập trung và cam kết đi đến tận cùng của dự án hiện tại trước khi chuyển giao năng lượng sang một ý tưởng mới thú vị khác."
    },
    // mbti-data.js (Tiếp tục bổ sung phân hệ Sentinels - Nhà Hộ Vệ)
    "ISTJ": {
        tagline: "Nhà Logistics Thực Tế",
        group: "Sentinels",
        color: "#3182ce",
        tongQuan: `
            ISTJ (Introverted – Sensing – Thinking – Judging) là một trong những nhóm tính cách phổ biến và có tính kỷ luật cao nhất, chiếm khoảng 11-13% dân số thế giới. Được mệnh danh là "Nhà Logistics Thực Tế" hay "Chiến thần quy trình", họ là định nghĩa của sự tận tụy, lòng trung thành và tính cam kết tuyệt đối. Một ISTJ vận hành cuộc sống dựa trên các sự thật khách quan, quy tắc rõ ràng và những giá trị truyền thống đã được thời gian kiểm chứng. Họ tôn trọng luật lệ, đề cao tính trách nhiệm và luôn là điểm tựa vững chắc nhất cho bất kỳ tổ chức nào nhờ sự kiên định, không bao giờ bỏ cuộc giữa chừng.
            <br><br>
            Để thấu hiểu toàn diện thế giới quan thực tế và cách thức vận hành nhận thức của một ISTJ, chúng ta bóc tách qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #3182ce;">• Introverted (I) – Sự định hướng năng lượng Hướng nội:</strong> 
            Năng lượng của ISTJ hướng sâu vào bên trong, tập trung vào việc xử lý thông tin cá nhân một cách tĩnh lặng. Họ kín tiếng, điềm đạm và không có nhu cầu làm trung tâm của sự chú ý. Khác với người Hướng ngoại (E) thích đám đông sôi nổi, ISTJ (I) tìm thấy trạng thái làm việc hiệu quả nhất khi được tập trung độc lập trong một không gian yên tĩnh. Họ cực kỳ tiết kiệm lời nói và chỉ lên tiếng khi thông tin đó thực sự có giá trị thực chứng.
            <br><br>
            <strong style="color: #3182ce;">• Sensing (S) – Cách thức tiếp nhận thông tin bằng Cảm giác:</strong> 
            Đây là chiếc mỏ neo giữ ISTJ bám chặt vào thực tế đời thực. Đối lập với nhóm Trực giác (N) hay mơ mộng về các lý thuyết vĩ mô, ISTJ (S) thu thập thông tin qua các giác quan, số liệu cụ thể, chi tiết kỹ thuật và những kinh nghiệm thực tế đã qua trải nghiệm. Họ có trí nhớ tuyệt vời đối với các dữ kiện chính xác và luôn đòi hỏi mọi lập luận phải đi kèm với bằng chứng thực tế rõ ràng.
            <br><br>
            <strong style="color: #3182ce;">• Thinking (T) – Phương thức ra quyết định bằng Lý trí:</strong> 
            ISTJ là những người duy lý và khách quan tuyệt đối. Khi cần đưa ra lựa chọn hoặc giải quyết sự cố, họ lập tức đặt cảm xúc cá nhân hay các mối quan hệ sang một bên để đánh giá dựa trên luật lệ, quy định và phân tích nhân quả logic. Đối lập với nhóm Cảm xúc (F), ISTJ (T) đặt "sự thật" và "tính đúng đắn" lên trên sự hài lòng của con người, khiến họ đôi khi bị coi là lạnh lùng nhưng lại cực kỳ công bằng.
            <br><br>
            <strong style="color: #3182ce;">• Judging (J) – Phong cách tổ chức cuộc sống Quyết đoán:</strong> 
            Lối sống của ISTJ là biểu tượng của sự ngăn nắp, cấu trúc và tính kỷ luật. Họ ghét cay ghét đắng sự mơ hồ, lối sống ngẫu hứng tùy cơ ứng biến của nhóm Linh hoạt (P). Một ISTJ luôn có thời khóa biểu chi tiết, danh sách việc cần làm (To-do list) mỗi ngày và luôn chuẩn bị bài vở, tài liệu trước thời hạn một cách kỹ lưỡng để đảm bảo không bao giờ xảy ra sai sót bất ngờ.
        `,
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Độ tin cậy và tính trách nhiệm tối cao:</strong> <span style="color: #4a5568;">Một khi ISTJ đã nhận nhiệm vụ, họ sẽ làm bằng mọi giá với sự cẩn trọng cao nhất. Họ là những người luôn đúng giờ, giữ lời hứa và không bao giờ trốn tránh deadline.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Sự tỉ mỉ và khả năng tập trung vào chi tiết tuyệt vời:</strong> <span style="color: #4a5568;">Họ có thể ngồi hàng giờ để kiểm tra từng con số, định dạng văn bản, phát hiện ra các lỗi kỹ thuật nhỏ nhất mà người khác dễ dàng bỏ qua trong báo cáo nhóm.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Tổ chức cuộc sống có hệ thống và ngăn nắp:</strong> <span style="color: #4a5568;">Bậc thầy của sự ngăn nắp, từ file máy tính đến bàn học đều được phân loại theo thư mục rõ ràng giúp tối ưu hóa thời gian tìm kiếm.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Bảo thủ, cứng nhắc và ngại thay đổi:</strong> <span style="color: #4a5568;">Do quá tin tưởng vào kinh nghiệm quá khứ và quy trình cũ, họ dễ có xu hướng bài xích các phương pháp mới, ý tưởng đột phá của đồng đội vì cho rằng chúng thiếu an toàn.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Thiếu linh hoạt khi kế hoạch bị xáo trộn:</strong> <span style="color: #4a5568;">ISTJ dễ rơi vào trạng thái căng thẳng dữ dội hoặc bực bội nếu lịch trình học tập bị thay đổi đột xuất vào phút chót ngoài tầm kiểm soát của họ.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Dễ vô tình làm tổn thương người khác bằng sự thẳng thắn:</strong> <span style="color: #4a5568;">Khi chỉ trích lỗi sai, họ đi thẳng vào sự thật khách quan mà không cân nhắc đến cảm nhận hay thể diện của bạn bè, tạo cảm giác khô khan, lạnh lùng.</span></li>
                </ol>
            </div>
        `,
        moiQuanHe: "Trong đời sống xã hội, ISTJ không có nhu cầu kết bạn đại trà. Họ xây dựng tình bạn dựa trên sự trung thành, tin cậy dài hạn và chia sẻ trách nhiệm chung. Họ thể hiện sự quan tâm thông qua hành động thực tế (Ví dụ: Giúp bạn sửa máy tính, cho mượn vở chép bài đầy đủ) chứ không dùng những lời nói hoa mỹ, sáo rỗng. Họ trân trọng những người bạn nghiêm túc, tôn trọng thời gian và giữ đúng lời hứa.",
        lamSaoDeThan: "- <strong>Giữ chữ tín tối thượng:</strong> Tuyệt đối không đi muộn vô căn cứ hoặc làm việc hời hợt khi đã hứa với họ.<br>- <strong>Nói chuyện bằng số liệu thực tế:</strong> Đừng đưa ra các giả thuyết mơ hồ, hãy dùng dẫn chứng, dữ liệu cụ thể khi tranh luận.<br>- <strong>Tôn trọng không gian và luật lệ:</strong> Không tự tiện xáo trộn đồ đạc hay thay đổi lịch hẹn với họ vào phút chót.",
        trongDaiHoc: "Tại giảng đường, ISTJ là những sinh viên kiểu mẫu. Họ luôn đi học đúng giờ, ngồi bàn đầu và ghi chép bài vở tỉ mỉ đến từng chi tiết. Họ gặp ác mộng lớn nhất khi làm việc nhóm với những thành viên lười biếng, nước đến chân mới nhảy. Trong nhóm, ISTJ thường đảm nhận phần việc hoàn thiện nội dung báo cáo, kiểm tra lỗi và phân phối tài liệu chuẩn xác theo đúng yêu cầu của giảng viên.",
        chienLuocHocTap: "• <strong>Bám sát đề cương học phần (Syllabus):</strong> Học tuần tự từng chương từ sớm, không học dồn để kích hoạt thế mạnh tư duy cấu trúc.<br>• <strong>Làm bài tập mẫu step-by-step:</strong> Khắc sâu kiến thức bằng cách thực hành nhiều lần các dạng bài tập thực tế thay vì đọc lý thuyết suông.<br>• <strong>Kết hợp với đồng đội Trực giác (N):</strong> Học cách cởi mở lắng nghe góc nhìn vĩ mô của họ để làm phong phú thêm phần mở bài hay kết luận của tiểu luận.",
        loiKhuyen: "Lời khuyên phát triển: Thế giới luôn thay đổi và quy trình cũ không phải lúc nào cũng tối ưu. Hãy học cách thả lỏng bản thân, cởi mở đón nhận các ý tưởng mới mới lạ và hiểu rằng con người vận hành bằng cả cảm xúc - đôi khi một lời động viên khéo léo lại có hiệu quả thúc đẩy công việc tốt hơn một nội quy nghiêm khắc."
    },

    "ISFJ": {
        tagline: "Nhà Nuôi Dưỡng Tận Tụy",
        group: "Sentinels",
        color: "#3182ce",
        tongQuan: `
            ISFJ (Introverted – Sensing – Feeling – Judging) chiếm khoảng 9-12% dân số, được mệnh danh là "Nhà Nuôi Dưỡng Tận Tụy" hay "Người bảo vệ thầm lặng". Họ là những người vô cùng chu đáo, có trách nhiệm cao và sở hữu một trái tim ấm áp luôn hướng về hạnh phúc của những người xung quanh. Một ISFJ sống cống hiến, thích làm việc ở hậu phương để chăm sóc, hỗ trợ đồng đội một cách thực tế nhất. Họ trân trọng các giá trị gia đình, lịch sử và luôn nỗ lực duy trì sự bình yên, trật tự trong tập thể.
            <br><br>
            Để thấu hiểu toàn diện thế giới nội tâm chu đáo và cách thức vận hành nhận thức của một ISFJ, chúng ta bóc tách qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #3182ce;">• Introverted (I) – Sự định hướng năng lượng Hướng nội:</strong> 
            Năng lượng của ISFJ hướng hoàn toàn vào bên trong. Họ điềm đạm, khiêm tốn và cực kỳ kín tiếng về những thành tựu của bản thân. ISFJ (I) không thích ánh hào quang sân khấu mà chọn cách âm thầm làm tốt nhiệm vụ của mình. Họ phục hồi tinh thần tốt nhất trong không gian gia đình hoặc góc riêng tư tĩnh lặng sau những giờ học tập căng thẳng bên ngoài.
            <br><br>
            <strong style="color: #3182ce;">• Sensing (S) – Cách thức tiếp nhận thông tin bằng Cảm giác:</strong> 
            Lăng kính Cảm giác giúp ISFJ ghi nhớ sâu sắc các chi tiết thực tế liên quan đến con người. Họ nhớ rõ sở thích, thói quen, ngày sinh hay những câu chuyện nhỏ của bạn bè. Họ tiếp cận kiến thức học thuật một cách thực dụng, tuần tự, cần những chỉ dẫn rõ ràng và ví dụ cụ thể đời thực thay vì các lý thuyết trừu tượng vĩ mô.
            <br><br>
            <strong style="color: #3182ce;">• Feeling (F) – Phương thức ra quyết định bằng Cảm xúc:</strong> 
            ISFJ đưa ra quyết định dựa trên sự đồng cảm sâu sắc và mong muốn giữ gìn bầu không khí hòa hợp cho tập thể. Đối lập với nhóm Lý trí (T), ISFJ (F) rất nhạy cảm với cảm nhận của người khác. Họ luôn cân nhắc xem hành động của mình có làm tổn thương hay ảnh hưởng đến tâm trạng của bạn bè hay không, luôn chọn cách cư xử tinh tế, nhã nhặn.
            <br><br>
            <strong style="color: #3182ce;">• Judging (J) – Phong cách tổ chức cuộc sống Quyết đoán:</strong> 
            Lối sống của ISFJ mang tính trật tự và cam kết rất cao. Họ quản lý thời gian bằng các kế hoạch bài bản, chuẩn bị bài vở chu đáo từ sớm và ghét sự lộn xộn, mơ hồ của nhóm Linh hoạt (P). Một ISFJ luôn muốn mọi việc được chốt rõ ràng để họ có thể chuẩn bị chu toàn mọi khía cạnh hỗ trợ cho cả nhóm.
        `,
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Sự chu đáo và tinh thần hỗ trợ thực tế tuyệt vời:</strong> <span style="color: #4a5568;">Họ là những người luôn âm thầm chuẩn bị đồ ăn nhẹ cho nhóm, in sẵn tài liệu cho cả đội và chăm sóc từng chi tiết nhỏ để mọi người thoải mái làm việc.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Tính trách nhiệm và cam kết cao độ:</strong> <span style="color: #4a5568;">ISFJ là những người làm việc cực kỳ cẩn thận, tỉ mỉ. Họ coi việc hoàn thành tốt bài tập nhóm là nghĩa vụ đạo đức tối cao và không bao giờ để bài làm bị trễ hạn.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Trí nhớ chi tiết xuất sắc:</strong> <span style="color: #4a5568;">Khả năng lưu trữ dữ liệu thực tế đáng kinh ngạc, đặc biệt là các thông tin, sở thích cá nhân của bạn bè giúp họ xây dựng mối quan hệ rất bền chặt.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Không biết từ chối và dễ bị lợi dụng (People-pleaser):</strong> <span style="color: #4a5568;">Do quá sợ làm mất lòng hoặc sợ tập thể bất hòa, họ thường gánh vác luôn phần việc của các thành viên lười biếng, tự rước lấy sự quá tải nghiêm trọng.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Quá tải tinh thần âm thầm và kìm nén cảm xúc:</strong> <span style="color: #4a5568;">Họ có xu hướng nuốt ngược những ấm ức, bất công vào trong để giữ hòa khí, lâu dần tích tụ thành những quả bom nổ chậm về mặt tâm lý.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Ngại thay đổi và thiếu tư duy đột phá:</strong> <span style="color: #4a5568;">Họ có xu hướng bám chặt vào các phương pháp học cũ an toàn, đôi khi tỏ ra e dè, lo sợ quá mức trước các đề xuất cải tiến mới lạ của đồng đội.</span></li>
                </ol>
            </div>
        `,
        moiQuanHe: "Trong vòng tròn bạn bè, ISFJ là những người bảo hộ thầm lặng ngọt ngào nhất. Họ không thích drama, trung thành tuyệt đối và luôn có mặt khi bạn bè cần giúp đỡ. Tình bạn của họ được xây dựng qua năm tháng bằng sự chân thành, quan tâm tỉ mỉ từ những hành động nhỏ nhặt nhất. Họ trân trọng những người bạn biết ghi nhận lòng tốt của họ và biết cư xử nhã nhặn, lịch sự.",
        lamSaoDeThan: "- <strong>Trân trọng và biết ơn lòng tốt của họ:</strong> Một lời cảm ơn chân thành bằng lời nói hoặc một tin nhắn biết ơn sẽ làm họ vô cùng hạnh phúc.<br>- <strong>Cư xử nhẹ nhàng và tinh tế:</strong> Tránh dùng ngôn từ thô lỗ, to tiếng hay chỉ trích gay gắt trước mặt họ.<br>- <strong>Chủ động chia sẻ gánh nặng:</strong> Đừng để họ ôm hết việc nhóm, hãy chủ động gánh vác phần việc của bạn một cách có trách nhiệm.",
        trongDaiHoc: "Tại trường học, ISFJ là những người ghi chép bài vở ngăn nắp nhất với đầy đủ các màu bút highlight. Họ hiếm khi trốn tiết và luôn nộp bài đúng hạn. Trong làm việc nhóm, họ là 'Hậu phương vững chắc': Dù ít khi xung phong làm Leader thuyết trình trước đám đông, nhưng họ lại là người làm slide chỉn chu, tổng hợp nội dung Word hoàn hảo và âm thầm giải quyết các xung đột nội bộ.",
        chienLuocHocTap: "• <strong>Ghi chép bài vở bằng tay (Handwriting):</strong> Việc viết tay giúp kích hoạt mạnh mẽ trí nhớ Cảm giác (S) của bạn để lưu trữ thông tin sâu sắc.<br>• <strong>Học nhóm nhỏ từ 2-3 người bạn thân:</strong> Môi trường ít áp lực giúp bạn dễ dàng thảo luận và tiếp thu kiến thức hơn.<br>• <strong>Thiết lập ranh giới làm việc (Boundary):</strong> Khi làm bài tập nhóm, hãy phân chia task rõ ràng trên giấy tờ để tránh bị người khác đùn đẩy việc nặng sang cho mình.",
        loiKhuyen: "Lời khuyên phát triển: Bạn không thể chăm sóc người khác nếu chính bạn đang kiệt quệ. Hãy học cách nói 'Không' một cách kiên định khi yêu cầu của người khác vượt quá khả năng của bạn. Hãy thẳng thắn bày tỏ suy nghĩ, ấm ức của mình thay vì kìm nén, và học cách cởi mở hơn với các ý tưởng đổi mới."
    },

    "ESTJ": {
        tagline: "Nhà Quản Lý Hiệu Năng",
        group: "Sentinels",
        color: "#3182ce",
        tongQuan: `
            ESTJ (Extraverted – Sensing – Thinking – Judging) chiếm khoảng 9% dân số thế giới. Được mệnh danh là "Nhà Quản Lý Hiệu Năng" hay "Thủ lĩnh kỷ luật", họ là biểu tượng của trật tự, tính thực tế và năng lực thực thi xuất sắc. ESTJ nhìn nhận môi trường xung quanh qua lăng kính của các quy tắc, chuẩn mực và tính hệ thống. Động lực cốt lõi của một ESTJ là thiết lập sự ngăn nắp từ đống hỗn độn, đảm bảo mọi người tuân thủ đúng quy trình và đưa dự án về đích với kết quả định lượng cao nhất. Họ thẳng thắn, quyết đoán và là những người bảo vệ nghiêm khắc của tính kỷ luật.
            <br><br>
            Để thấu hiểu toàn diện năng lượng quản trị và cấu trúc tâm lý của một ESTJ, chúng ta phân tích qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #3182ce;">• Extraverted (E) – Sự định hướng năng lượng Hướng ngoại:</strong> 
            Năng lượng của ESTJ hướng mạnh mẽ ra bên ngoài thông qua việc giao tiếp trực diện, tổ chức con người và điều hành các hoạt động xã hội. Họ tự tin, quyết đoán và sẵn sàng đứng ra thiết lập luật lệ cho đám đông mà không hề e ngại va chạm. Họ nạp năng lượng tốt nhất khi được trực tiếp chỉ đạo công việc và nhìn thấy mọi người vận hành trơn tru theo kế hoạch của mình.
            <br><br>
            <strong style="color: #3182ce;">• Sensing (S) – Cách thức tiếp nhận thông tin bằng Cảm giác:</strong> 
            Lăng kính tiếp nhận thông tin thực tế tối đa. ESTJ (S) chỉ tin vào những dữ liệu thực tế, số liệu thống kê rõ ràng, luật lệ hiện hành và kinh nghiệm thực chứng. Họ hoàn toàn không có hứng thú với các giả thuyết mơ hồ hay các ý tưởng bay bổng thiếu tính khả thi. Đối với ESTJ, mọi giải pháp đưa ra phải có tính ứng dụng thực tiễn ngay lập tức.
            <br><br>
            <strong style="color: #3182ce;">• Thinking (T) – Phương thức ra quyết định bằng Lý trí:</strong> 
            ESTJ là những người duy lý thực dụng. Khi đưa ra quyết định, họ sử dụng logic khách quan, quy định chung và các tiêu chuẩn hiệu suất để đánh giá, gạt bỏ hoàn toàn các yếu tố cảm xúc cá nhân. Đối lập với nhóm Cảm xúc (F), ESTJ (T) đặt tính đúng sai, sự rõ ràng và hiệu năng công việc lên trên hết, sẵn sàng phê bình thẳng mặt nếu có thành viên làm ảnh hưởng tiến độ chung.
            <br><br>
            <strong style="color: #3182ce;">• Judging (J) – Phong cách tổ chức cuộc sống Quyết đoán:</strong> 
            Kỷ luật thép chính là phong cách sống của ESTJ. Họ quản lý thời gian nghiêm ngặt bằng lịch biểu cố định, các checklist công việc chi tiết và yêu cầu tính cam kết tối cao. Họ cực kỳ dị ứng với sự vô kỷ luật, lối sống ngẫu hứng hay thói quen đi muộn của nhóm Linh hoạt (P). Họ chỉ thoải mái khi mọi thứ diễn ra đúng kế hoạch.
        `,
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Năng lực tổ chức và điều hành dự án xuất sắc:</strong> <span style="color: #4a5568;">Bậc thầy trong việc phân chia công việc, thiết lập timeline chi tiết và giám sát đôn đốc các thành viên chạy deadline một cách vô cùng hiệu quả.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Tính cam kết, trung thực và độ tin cậy tuyệt đối:</strong> <span style="color: #4a5568;">Họ là những người 'nói được làm được', luôn tôn trọng luật lệ học đường, đi học đúng giờ và đảm bảo kết quả công việc đạt chuẩn quy định.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Thực tế và có năng lực triển khai hành động nhanh:</strong> <span style="color: #4a5568;">Không tốn thời gian cho việc mơ mộng hão huyền, họ nhanh chóng đưa ra các giải pháp thực dụng để giải quyết dứt điểm các rắc rối trước mắt của nhóm.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Quá cứng nhắc, bảo thủ và độc đoán:</strong> <span style="color: #4a5568;">Dễ ép buộc người khác phải làm theo cách của mình, bài xích các ý tưởng đổi mới sáng tạo sáng tạo của đồng đội vì cho rằng chúng không chính thống, thiếu an toàn.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Thiếu tinh tế cảm xúc (Thấp EQ):</strong> <span style="color: #4a5568;">Bộc lộ sự chỉ trích gay gắt, thô bạo với những thành viên làm việc yếu kém mà không cân nhắc đến tâm trạng của họ, dễ tạo không khí làm việc căng thẳng, rạn nứt.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Quá căng thẳng khi mọi thứ lệch quỹ đạo:</strong> <span style="color: #4a5568;">Họ dễ nổi giận hoặc mất bình tĩnh nếu đồng đội không tuân thủ quy tắc hoặc khi có các biến số bất ngờ làm đảo lộn lịch trình đã định trước.</span></li>
                </ol>
            </div>
        `,
        moiQuanHe: "Trong các mối quan hệ xã hội, ESTJ là những người thẳng thắn, rõ ràng và đầy trách nhiệm. Họ coi trọng các mối quan hệ dựa trên sự tôn trọng luật lệ và tính cam kết. Họ thể hiện tình bạn qua việc bảo vệ, hỗ trợ thực tế và thúc đẩy bạn bè sống có kỷ luật hơn. Họ cực kỳ ghét sự trốn tránh trách nhiệm, thảo mai hay thất hứa, và sẽ nhanh chóng mất lòng tin nếu đối phương thể hiện sự lười biếng, vô kỷ luật.",
        lamSaoDeThan: "- <strong>Tuyệt đối đúng giờ và giữ lời hứa:</strong> Đây là bài kiểm tra tư cách đầu tiên và quan trọng nhất đối với một ESTJ.<br>- <strong>Làm việc có trách nhiệm:</strong> Hãy hoàn thành xuất sắc task được giao khi làm việc nhóm chung với họ.<br>- <strong>Giao tiếp trực diện, rõ ràng:</strong> Đừng vòng vo hay dùng cảm xúc để ngụy biện, hãy đưa ra lý lẽ và số liệu cụ thể.",
        trongDaiHoc: "Tại giảng đường đại học, ESTJ là những 'Trưởng nhóm kỷ luật' khét tiếng. Họ quản lý bài tập lớn bằng bàn tay sắt: Thiết lập deadline nội bộ sớm, đôn đốc nhắc nhở liên tục và sẵn sàng báo cáo giảng viên gạch tên thành viên vô trách nhiệm. Họ kết nối tốt với ban cán sự lớp, tôn trọng các nội quy của giáo sư và thường có kết quả học tập rất ổn định ở các môn thực hành.",
        chienLuocHocTap: "• <strong>Sử dụng phần mềm quản lý tiến độ (Trello/Notion):</strong> Hệ thống hóa lộ trình học tập thành các task nhỏ có checklist rõ ràng.<br>• <strong>Học qua giải đề thi mẫu liên tục:</strong> Làm quen với cấu trúc đề thi thực tế để rèn luyện tốc độ làm bài chuẩn xác.<br>• <strong>Học cách cởi mở lắng nghe:</strong> Khi làm bài tập lớn, hãy dành thời gian lắng nghe các ý tưởng sáng tạo sáng tạo của nhóm Analysts/Diplomats trước khi chốt phương án.",
        loiKhuyen: "Lời khuyên phát triển: Kỷ luật là tốt, nhưng sự linh hoạt mới giúp bạn sinh tồn trước các biến số. Hãy hiểu rằng mỗi người có một phong cách làm việc và nhịp độ khác nhau. Việc thấu hiểu, nhẹ nhàng động viên đồng đội sẽ mang lại hiệu quả công việc cao hơn nhiều so với việc chỉ trích gay gắt dựa trên nội quy cứng nhắc."
    },

    "ESFJ": {
        tagline: "Nhà Đồng Hành Ấm Áp",
        group: "Sentinels",
        color: "#3182ce",
        tongQuan: `
            ESFJ (Extraverted – Sensing – Feeling – Judging) chiếm khoảng 12% dân số thế giới. Được mệnh danh là "Nhà Đồng Hành Ấm Áp" hay "Sứ giả hòa bình học đường", họ sở hữu nguồn năng lượng xã hội dồi dào, sự chu đáo tuyệt vời và khao khát mãnh liệt trong việc kiến tạo sự hòa hợp, chăm sóc cho tất cả mọi người xung quanh. ESFJ nhìn nhận cuộc sống qua lăng kính của các mối quan hệ con người và các chuẩn mực xã hội đạo đức. Họ là những người cực kỳ nhạy bén với nhu cầu tinh thần của tập thể, luôn nỗ lực hết mình để đảm bảo mọi người đều cảm thấy vui vẻ, được chào đón và gắn kết khăng khít.
            <br><br>
            Để thấu hiểu toàn diện năng lượng kết nối và cấu trúc tâm lý ấm áp của một ESFJ, chúng ta phân tích qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #3182ce;">• Extraverted (E) – Sự định hướng năng lượng Hướng ngoại:</strong> 
            Nguồn sống của ESFJ nằm ở con người. Họ là những thỏi nam châm xã hội thực thụ, cực kỳ hoạt ngôn, thân thiện và nạp lại năng lượng mạnh mẽ khi được trò chuyện, tổ chức các hoạt động giao lưu tập thể. Họ ghét sự cô độc và luôn muốn hòa mình vào các dòng chảy tương tác đám đông để lan tỏa năng lượng tích cực.
            <br><br>
            <strong style="color: #3182ce;">• Sensing (S) – Cách thức tiếp nhận thông tin bằng Cảm giác:</strong> 
            Lăng kính Cảm giác giúp ESFJ ghi nhớ tỉ mỉ các chi tiết thực tế về cuộc sống và con người. Họ nhớ rõ ai thích ăn gì, ai đang gặp chuyện buồn, ai vừa đổi kiểu tóc hay các quy tắc ứng xử tinh tế trong tập thể. Họ tiếp thu bài học tốt nhất qua các hướng dẫn chi tiết, các case-study cụ thể và ứng dụng đời thực thay vì các học thuyết vĩ mô trừu tượng.
            <br><br>
            <strong style="color: #3182ce;">• Feeling (F) – Phương thức ra quyết định bằng Cảm xúc:</strong> 
            ESFJ đưa ra quyết định bằng trái tim nhạy cảm. Họ luôn đặt sự hòa hợp, cảm nhận của con người và các chuẩn mực đạo đức xã hội làm thước đo tối thượng cho mọi lựa chọn, đối lập với tính duy lý lạnh lùng của nhóm Lý trí (T). Họ cực kỳ sợ các cuộc xung đột trực diện và sẵn sàng nhượng bộ để bảo vệ bầu không khí ôn hòa cho nhóm.
            <br><br>
            <strong style="color: #3182ce;">• Judging (J) – Phong cách tổ chức cuộc sống Quyết đoán:</strong> 
            Lối sống của ESFJ mang tính trật tự, kế hoạch và trách nhiệm cao. Họ thích lập kế hoạch cho các buổi tụ tập, tổ chức sinh nhật hay phân chia công việc làm bài tập lớn một cách bài bản rõ ràng. Họ ghét sự lộn xộn, mơ hồ hay lối sống ngẫu hứng tùy tiện của nhóm Linh hoạt (P) vì nó làm xáo trộn bầu không khí bình yên của tập thể.
        `,
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Khả năng kết nối và xây dựng cộng đồng tuyệt vời:</strong> <span style="color: #4a5568;">Họ là những người luôn đứng ra tổ chức các buổi liên hoan lớp, kết nối các thành viên xa lạ lại với nhau và tạo nên một tập thể vô cùng đoàn kết, ấm áp.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Tinh thần trách nhiệm, chu đáo và tận tụy tối cao:</strong> <span style="color: #4a5568;">Khi làm việc nhóm, họ luôn hoàn thành phần việc của mình cực kỳ chỉn chu, đồng thời luôn để mắt chăm sóc tinh thần, hỏi han đôn đốc đồng đội một cách khéo léo.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Nhạy bén tinh tế trước nhu cầu của người khác:</strong> <span style="color: #4a5568;">Có khả năng phát hiện ra sự un-happy hay mệt mỏi của bạn bè rất nhanh để kịp thời đưa ra những hành động hỗ trợ thực tế, ngọt ngào.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Quá nhạy cảm trước sự chỉ trích và khao khát được công nhận:</strong> <span style="color: #4a5568;">Họ dễ bị suy sụp, tổn thương sâu sắc nếu nỗ lực kết nối, chăm sóc của mình không được mọi người ghi nhận hoặc khi gặp phải những phản hồi khô khan của nhóm Lý trí.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Sợ xung đột đến mức né tránh sự thật:</strong> <span style="color: #4a5568;">Vì quá muốn giữ hòa khí, họ thường không dám chỉ ra lỗi sai của đồng đội, chấp nhận thỏa hiệp hoặc tự ôm việc vào mình để tránh tranh luận nảy lửa.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Dễ bị cuốn vào tâm lý đám đông và định kiến:</strong> <span style="color: #4a5568;">Do quá trân trọng các chuẩn mực xã hội đạo đức có sẵn, họ đôi khi trở nên khắt khe, phán xét với những cá nhân có lối sống lập dị, phá cách hoặc đi ngược số đông.</span></li>
                </ol>
            </div>
        `,
        moiQuanHe: "Trong đời sống xã hội, ESFJ là những người bạn ngọt ngào, chu đáo và đáng tin cậy nhất mà bạn có thể tìm thấy. Họ nhớ rõ mọi ngày kỷ niệm, luôn chủ động nhắn tin hỏi thăm và có mặt đầu tiên khi bạn gặp hoạn nạn. Tình bạn của họ vô cùng ấm áp nhưng cũng đòi hỏi sự tương tác hai chiều - họ cần cảm thấy tình cảm của mình được trân trọng và đáp lại một cách chân thành.",
        lamSaoDeThan: "- <strong>Hưởng ứng nhiệt tình các hoạt động tập thể:</strong> Tham gia vui vẻ vào các buổi liên hoan, học nhóm do họ tổ chức.<br>- <strong>Ghi nhận và khen ngợi sự chu đáo của họ:</strong> Đừng coi lòng tốt của họ là hiển nhiên, hãy khen ngợi slide họ làm đẹp hay món quà họ tặng ý nghĩa.<br>- <strong>Bày tỏ tình cảm chân thành:</strong> Hãy quan tâm, hỏi thăm ngược lại họ bằng những lời chúc tinh tế.",
        trongDaiHoc: "Tại trường, ESFJ thường nắm giữ các vị trí Bí thư đoàn, lớp phó đời sống hoặc ban sự kiện câu lạc bộ sinh viên. Họ kết nối cực kỳ mượt mà giữa giảng viên và cả lớp, là người nhắc nhở mọi người nộp bài đúng hạn. Trong làm việc nhóm, họ thuyết trình vô cùng duyên dáng, sinh động và luôn chuẩn bị sẵn nước uống, đồ ăn vặt để giữ tinh thần thoải mái cho cả đội.",
        chienLuocHocTap: "• <strong>Thành lập nhóm học chung (Study Buddy):</strong> Học tập hiệu quả nhất khi được ôn bài cùng 2-3 người bạn thân thiết, vừa học vừa tương tác trao đổi kiến thức.<br>• <strong>Hệ thống hóa bài học theo Checklist hướng dẫn:</strong> Bám sát các yêu cầu, tiêu chí chấm điểm (Rubric) của giảng viên để làm bài chuẩn xác.<br>• <strong>Học cách tách biệt cảm xúc khỏi công việc:</strong> Khi làm bài tập nhóm, hãy dũng cảm góp ý thẳng thắn vào lỗi sai chuyên môn của bạn bè trên tinh thần xây dựng.",
        loiKhuyen: "Lời khuyên phát triển: Bạn không thể làm hài lòng tất cả mọi người, và giá trị con người bạn không phụ thuộc vào lời khen của người khác. Hãy học cách thiết lập ranh giới bảo vệ năng lượng cá nhân, dũng cảm đối diện với các cuộc tranh luận cần thiết để giải quyết tận gốc vấn đề và cởi mở hơn với sự khác biệt cá tính của mỗi người."
    },
    // mbti-data.js (Tiếp tục bổ sung phân hệ Explorers - Nhà Thám Hiểm)
    "ISTP": {
        tagline: "Nhà Kỹ Nghệ Linh Hoạt",
        group: "Explorers",
        color: "#b7791f",
        tongQuan: `
            ISTP (Introverted – Sensing – Thinking – Perceiving) chiếm khoảng 5% dân số thế giới. Được mệnh danh là "Nhà Kỹ Nghệ Linh Hoạt" hay "Chiến thần thực chiến", họ sở hữu trí tò mò cơ học lớn, tư duy thực dụng sắc bén và khả năng làm chủ các công cụ, kỹ thuật cơ cấu cực nhanh. Một ISTP nhìn thế giới như một bài toán cơ học khổng lồ cần được tháo lắp, kiểm chứng và sửa chữa bằng chính đôi tay của mình. Họ sống trọn vẹn ở hiện tại, độc lập, yêu tự do và luôn giữ được cái đầu lạnh đáng kinh ngạc trong mọi tình huống khủng hoảng bất ngờ.
            <br><br>
            Để thấu hiểu toàn diện thế giới quan thực tế và cách thức vận hành nhận thức của một ISTP, chúng ta bóc tách qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #b7791f;">• Introverted (I) – Sự định hướng năng lượng Hướng nội:</strong> 
            Năng lượng của ISTP hướng sâu vào bên trong, tập trung hoàn toàn vào luồng xử lý dữ liệu logic cá nhân. Họ là những người vô cùng kiệm lời, kín tiếng và có phần tách biệt. ISTP (I) không thích những cuộc thảo luận lý thuyết suông hay các buổi tụ tập ồn ào. Họ cần những khoảng không gian riêng tư tĩnh lặng để mày mò các dự án cá nhân hoặc tự tay thực hành một kỹ năng mới mà không cần ai làm phiền.
            <br><br>
            <strong style="color: #b7791f;">• Sensing (S) – Cách thức tiếp nhận thông tin bằng Cảm giác:</strong> 
            Lăng kính Cảm giác giúp ISTP bắt nhịp hoàn hảo với môi trường vật lý xung quanh. Họ quan sát cực kỳ nhạy bén các chuyển động, chi tiết cơ học và số liệu thực tế trước mắt, đối lập với sự mơ mộng vĩ mô của nhóm Trực giác (N). ISTP chỉ tin vào những gì họ có thể nhìn thấy, chạm vào hoặc tự tay trải nghiệm kiểm chứng trực tiếp.
            <br><br>
            <strong style="color: #b7791f;">• Thinking (T) – Phương thức ra quyết định bằng Lý trí:</strong> 
            ISTP là những người duy lý thực tế ở mức độ cao. Khi cần giải quyết một sự cố kỹ thuật hay đưa ra lựa chọn, họ lập tức gạt bỏ toàn bộ yếu tố cảm xúc cá nhân sang một bên để đứng từ góc độ khách quan, dựa trên nguyên lý hoạt động, logic nhân quả và tính hiệu quả tức thì. Đối lập với nhóm Cảm xúc (F), ISTP (T) đặt tính thực dụng và logic lên làm thước đo tối thượng.
            <br><br>
            <strong style="color: #b7791f;">• Perceiving (P) – Phong cách tổ chức cuộc sống Linh hoạt:</strong> 
            Tự do thích ứng là tôn chỉ sống của ISTP. Họ ghét cay ghét đắng các kế hoạch đóng khung chi tiết, các lịch trình cố định lặp đi lặp lại hay sự gò bó của luật lệ hành chính cứng nhắc. ISTP (P) muốn giữ cho mọi lựa chọn của mình luôn ở trạng thái mở để sẵn sàng tùy cơ ứng biến, xử lý rắc rối theo nhịp độ cảm hứng đột phát của bản thân.
        `,
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Khả năng giải quyết khủng hoảng xuất sắc:</strong> <span style="color: #4a5568;">Khi hệ thống bị sập hay dự án gặp sự cố sát giờ nộp, ISTP là người giữ được bình tĩnh nhất, nhanh chóng phân tích lỗ hổng và đưa ra phương án xử lý thực dụng, hiệu quả ngay lập tức.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Năng lực học qua hành động (Hands-on) phi thường:</strong> <span style="color: #4a5568;">Không cần đọc hết sách hướng dẫn dài dòng, họ chỉ cần bắt tay vào gõ code, tháo lắp thiết bị hoặc thực hành trực tiếp là có thể làm chủ kỹ năng mới một cách thần tốc.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Linh hoạt và khả năng thích ứng cao:</strong> <span style="color: #4a5568;">Họ có tinh thần cởi mở, không định kiến và dễ dàng xoay chuyển phương án làm việc để thích nghi với các biến số mới phát sinh trong môi trường học đường.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Hội chứng trì hoãn và cả thèm chóng chán:</strong> <span style="color: #4a5568;">Họ chỉ làm việc khi có thách thức thực tế trước mắt, khi vấn đề đã được giải quyết xong trên giấy, họ nhanh chóng mất hứng thú và lười biếng hoàn thiện phần viết báo cáo chi tiết.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Quá kín tiếng và xa cách trong giao tiếp:</strong> <span style="color: #4a5568;">Việc giữ mọi suy nghĩ cho riêng mình và lười giải thích khiến đồng đội khi làm bài tập nhóm rất khó đoán biết tiến độ công việc của họ, dễ gây hiểu lầm là vô trách nhiệm.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Ghét cam kết dài hạn và quy định gò bó:</strong> <span style="color: #4a5568;">Họ gặp chật vật nghiêm trọng khi phải tuân thủ các nội quy rập khuôn cố định hoặc các kế hoạch quản lý chi tiết của nhóm trưởng hệ Judging.</span></li>
                </ol>
            </div>
        `,
        moiQuanHe: "Trong đời sống xã hội, ISTP là những người bạn hiền hòa, thoải mái, phóng khoáng và 'dễ thở'. Họ không thích sự kịch tính hóa (drama) cảm xúc hay các mối quan hệ xã giao thảo mai. Tình bạn của một ISTP được kết nối thông qua các hoạt động trải nghiệm thực tế chung (Ví dụ: Cùng chơi game, chơi thể thao, đi phượt) chứ không qua các cuộc tâm sự sướt mướt. Họ tôn trọng tuyệt đối sự độc lập của bạn bè và đòi hỏi điều tương tự.",
        lamSaoDeThan: "- <strong>Cùng tham gia hoạt động thực tế:</strong> Rủ họ tham gia các dự án thực hành, chơi thể thao hoặc sửa sang đồ đạc.<br>- <strong>Giao tiếp ngắn gọn và trực diện:</strong> Nói thẳng vào vấn đề cần giải quyết, tránh kể lể dài dòng về mặt cảm xúc.<br>- <strong>Tuyệt đối không kiểm soát:</strong> Đừng dồn ép họ bằng các tin nhắn giục giã liên tục hay bắt họ phải cam kết những việc quá xa xôi.",
        trongDaiHoc: "Tại giảng đường đại học, ISTP thường cắm mặt vào phòng lab dự án hoặc tự mày mò debug lỗi code. Họ học tốt nhất ở các môn thực hành chuyên sâu và cực kỳ uể oải, chán nản với các tiết học lý thuyết vĩ mô suông trên slide. Trong làm việc nhóm, họ đóng vai trò là 'Kỹ sư trưởng': Dù ít khi lên tiếng trong các buổi họp bão não ý tưởng, nhưng khi được giao task kỹ thuật cụ thể, họ sẽ hoàn thành rất nhanh và chuẩn xác.",
        chienLuocHocTap: "• <strong>Học thông qua Debug lỗi trực tiếp:</strong> Đừng chỉ đọc slide lý thuyết, hãy tự tay chạy thử phần mềm, tự làm sai và tự sửa lỗi để ghi nhớ bản chất sâu sắc.<br>• <strong>Chia nhỏ nhiệm vụ thành các Module độc lập:</strong> Giải quyết bài tập lớn theo từng phần kỹ thuật riêng lẻ để giữ được sự phấn chấn tư duy.<br>• <strong>Chủ động cập nhật tiến độ với nhóm:</strong> Tập thói quen nhắn một tin nhắn ngắn báo cáo phần việc đã làm xong để đồng đội không phải lo lắng.",
        loiKhuyen: "Lời khuyên phát triển: Ý tưởng hay và năng lực thực chiến sắc bén sẽ giảm giá trị nếu bạn không thể phối hợp tốt với tập thể. Hãy học cách cởi mở hơn trong giao tiếp, chủ động giải thích hướng làm của mình cho đồng đội hiểu và rèn luyện tính kiên trì để hoàn thiện trọn vẹn phần tài liệu báo cáo thô sơ cuối cùng của dự án."
    },

    "ISFP": {
        tagline: "Nhà Nghệ Sĩ Tài Hoa",
        group: "Explorers",
        color: "#b7791f",
        tongQuan: `
            ISFP (Introverted – Sensing – Feeling – Perceiving) chiếm khoảng 6-8% dân số thế giới. Được mệnh danh là "Nhà Nghệ Sĩ Tài Hoa" hay "Tâm hồn thẩm mỹ học đường", họ sở hữu gu thẩm mỹ nhạy bén, thế giới cảm xúc sâu sắc và khả năng bắt trọn vẻ đẹp của thế giới thực tế xung quanh một cách vô cùng tinh tế. Một ISFP không thích nói nhiều về bản thân mà chọn cách thể hiện cá tính độc bản thông qua nghệ thuật, cách ăn mặc, thiết kế slide thuyết trình hay những hành động tử tế thầm lặng. Họ yêu tự do, sống trọn vẹn ở hiện tại và luôn tìm kiếm sự chân thật cảm xúc trong mọi khía cạnh cuộc sống.
            <br><br>
            Để thấu hiểu toàn diện thế giới thế giới quan tinh tế và cấu trúc tâm lý của một ISFP, chúng ta bóc tách qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #b7791f;">• Introverted (I) – Sự định hướng năng lượng Hướng nội:</strong> 
            Năng lượng của ISFP hướng sâu vào bên trong để nuôi dưỡng các giá trị cảm xúc cá nhân. Họ là những người vô cùng khiêm tốn, khép kín và có xu hướng ẩn mình khỏi sự ồn ào náo nhiệt. ISFP (I) cần rất nhiều khoảng không gian yên tĩnh một mình để thả lỏng tâm trí, vẽ tranh, nghe nhạc hoặc làm những sở thích cá nhân nhằm phục hồi tinh thần sau những giờ học học phần căng thẳng.
            <br><br>
            <strong style="color: #b7791f;">• Sensing (S) – Cách thức tiếp nhận thông tin bằng Cảm giác:</strong> 
            Lăng kính Cảm giác của ISFP cực kỳ nhạy bén với các yếu tố thẩm mỹ: Màu sắc, bố cục hình ảnh, âm thanh và không gian vật lý xung quanh. Thay vì say mê các lý thuyết trừu tượng vĩ mô của nhóm Trực giác (N), ISFP (S) trân trọng các trải nghiệm thực tế đời thực, học tập hiệu quả nhất thông qua hình ảnh trực quan sinh động và các hoạt động thực hành thực tế.
            <br><br>
            <strong style="color: #b7791f;">• Feeling (F) – Phương thức ra quyết định bằng Cảm xúc:</strong> 
            ISFP đưa ra quyết định bằng một trái tim vô cùng nhạy cảm và hệ giá trị đạo đức nội tại sâu sắc. Đối lập với tính duy lý lạnh lùng của nhóm Lý trí (T), ISFP (F) luôn đặt sự chân thật cảm xúc và sự hòa hợp ôn hòa lên làm thước đo tối cao. Họ cực kỳ dị ứng với sự giả tạo, thảo mai và luôn cố gắng tránh xa các cuộc tranh luận, xung đột nảy lửa trong tập thể.
            <br><br>
            <strong style="color: #b7791f;">• Perceiving (P) – Phong cách tổ chức cuộc sống Linh hoạt:</strong> 
            Tự do ngẫu hứng chính là hơi thở cuộc sống của ISFP. Họ ghét cay ghét đắng các kế hoạch đóng khung chi tiết, các thời khóa biểu cứng nhắc hay sự gò bó của nội quy bài bản. ISFP (P) muốn giữ cho cuộc sống học tập của mình luôn ở trạng thái mở để sẵn sàng thay đổi phương án theo dòng chảy cảm hứng cảm xúc đột phát của bản thân.
        `,
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Gu thẩm mỹ và tư duy thiết kế hình ảnh nhạy bén:</strong> <span style="color: #4a5568;">Bậc thầy trong việc biến các slide thuyết trình khô khan thành các tác phẩm nghệ thuật trực quan vô cùng lôi cuốn, mang đậm dấu ấn cá nhân độc độc bản giúp nhóm ghi điểm tuyệt đối.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Sự tử tế, hiền hòa và bao dung thuần khiết:</strong> <span style="color: #4a5568;">Họ luôn chấp nhận sự khác biệt của mọi người xung quanh mà không phán xét, luôn âm thầm lắng nghe và là người xoa dịu tinh thần khéo léo cho đồng đội khi gặp áp lực thi cử.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Sống thực tế và trân trọng hiện tại:</strong> <span style="color: #4a5568;">Không tốn thời gian lo lắng viển vông về tương lai xa vời, họ tập trung giải quyết các phần việc trước mắt một cách nhẹ nhàng, tự nhiên theo dòng chảy công việc.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Hội chứng trì hoãn nghiêm trọng khi cạn nguồn cảm hứng:</strong> <span style="color: #4a5568;">Họ hoàn toàn không thể làm việc nếu thiếu đi tâm trạng thoải mái, dẫn đến thói quen tích tụ bài tập lớn sát nút giờ nộp khiến bản thân rơi vào trạng thái hoảng loạn.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Né tránh xung đột một cách cực đoan:</strong> <span style="color: #4a5568;">Vì quá sợ các cuộc tranh luận căng thẳng, họ thường chọn cách im lặng thu mình lại, chấp nhận chịu thiệt thòi hoặc trốn tránh trách nhiệm họp nhóm thay vì đứng lên đối diện giải quyết rắc rối.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Dễ cá nhân hóa và tổn thương sâu sắc trước phê bình:</strong> <span style="color: #4a5568;">Họ coi các lời nhận xét góp ý chuyên môn của nhóm trưởng duy lý là một sự tấn công cá nhân trực diện vào danh dự con người mình, dễ dẫn đến trạng thái tự ti, buồn bã kéo dài.</span></li>
                </ol>
            </div>
        `,
        moiQuanHe: "Trong đời sống xã hội, ISFP là những người bạn vô cùng ngọt ngào, hiền hòa và tinh tế. Họ không thích khoa trương, ồn ào mà chọn cách quan tâm bạn bè thầm lặng qua những hành động nhỏ nhặt đầy tình cảm (Ví dụ: Tặng một món quà handmade nhỏ đúng gu bạn thích). Họ tìm kiếm những mối quan hệ chân thành, cởi mở và trân trọng tuyệt đối không gian riêng tư của nhau. ISFP cực kỳ trung thành với những người bạn chấp nhận con người thật của họ.",
        lamSaoDeThan: "- <strong>Ghi nhận gu thẩm mỹ độc đáo:</strong> Dành những lời khen ngợi chân thành cho slide thiết kế, gu ăn mặc hay tác phẩm nghệ thuật của họ.<br>- <strong>Tuyệt đối không áp đặt hay phán xét:</strong> Hãy để họ được tự do bộc lộ suy nghĩ bay bổng mà không dùng tư duy thực dụng thô bạo dập tắt đam mê.<br>- <strong>Góp ý khéo léo, nhẹ nhàng:</strong> Tránh dùng ngôn từ nặng nề hay to tiếng trước mặt họ, hãy dùng sự động viên tinh thần làm bàn đạp.",
        trongDaiHoc: "Tại giảng đường đại học, ISFP là những sinh viên âm thầm tỏa sáng cá tính. Họ biến góc tự học thành một không gian nghệ thuật thu nhỏ mang lại sự dễ chịu thị giác. Họ học tốt nhất qua các môn học thiết kế, đồ họa, thực hành hoặc viết luận độc lập sáng tạo. Khi làm việc nhóm, ISFP là 'Chiến thần Design': Dù ít khi xung phong làm trưởng nhóm điều hành tranh luận, họ lại là người chăm chút hình ảnh slide và tổng hợp Word hoàn hảo nhất.",
        chienLuocHocTap: "• <strong>Ứng dụng Tư duy Thiết kế (Design Thinking) vào học thuật:</strong> Sơ đồ hóa các kiến thức khô khan thành sơ đồ tư duy nhiều hình ảnh sinh động để khắc sâu thông tin.<br>• <strong>Bảo vệ tâm trạng tự học thoải mái:</strong> Học bài tại các quán cà phê có không gian đẹp, nhạc nhẹ để khơi nguồn cảm hứng tốt nhất cho bộ não.<br>• <strong>Thiết lập quy tắc chạy deadline cơ bản:</strong> Cam kết hoàn thiện khung nội dung bài tập thô trước khi dành quá nhiều thời gian để trau chuốt phần trang trí hình ảnh.",
        loiKhuyen: "Lời khuyên phát triển: Thế giới thực tế cần hành động kiên trì của bạn để biến ý tưởng thành hiện thực. Hãy học cách dũng cảm đối diện với các cuộc tranh luận cần thiết để bảo vệ quyền lợi cá nhân, đặt các mốc thời gian nhân tạo nghiêm khắc cho bản thân và tập tách biệt phản hồi công việc ra khỏi giá trị cốt lõi con người bạn."
    },

    "ESTP": {
        tagline: "Nhà Doanh Nhân Thực Trường",
        group: "Explorers",
        color: "#b7791f",
        tongQuan: `
            ESTP (Extraverted – Sensing – Thinking – Perceiving) chiếm khoảng 4% dân số thế giới. Được mệnh danh là "Nhà Doanh Nhân Thực Trường" hay "Chiến thần hành động", họ sở hữu nguồn năng lượng sống dồi dào, sự nhạy bén thực tế tối đa và khả năng làm chủ hoàn cảnh ngay tức thì. Một ESTP không có thời gian cho việc ngồi im mơ mộng lý thuyết suông; họ sống trọn vẹn ở hiện tại và tin rằng hành động thực chiến, va chạm trực tiếp mới là cách tốt nhất để làm chủ cuộc chơi. Họ thẳng thắn, quyết đoán, hài hước và luôn sẵn sàng đón nhận những thử thách mạo hiểm đầy phấn khích.
            <br><br>
            Để thấu hiểu toàn diện năng lượng bứt phá và cấu trúc tâm lý của một ESTP, chúng ta phân tích qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #b7791f;">• Extraverted (E) – Sự định hướng năng lượng Hướng ngoại:</strong> 
            Năng lượng của ESTP hướng mạnh mẽ ra môi trường con người bên ngoài. Họ là những chiến thần ngoại giao thực thụ, cực kỳ hoạt ngôn, tự tin và tỏa ra hào quang cuốn hút đám đông xung quanh. ESTP (E) nạp năng lượng tốt nhất khi được trực tiếp tương tác, giao lưu rộng rãi, điều phối các hoạt động náo nhiệt và trực tiếp hành động thực tế cùng đồng đội thay vì phải ngồi yên một chỗ.
            <br><br>
            <strong style="color: #b7791f;">• Sensing (S) – Cách thức tiếp nhận thông tin bằng Cảm giác:</strong> 
            Lăng kính Cảm giác của ESTP hoạt động như một bộ radar bắt trọn từng chi tiết thực tế của môi trường xung quanh một cách thần tốc. Họ cực kỳ nhạy bén trong việc quan sát nét mặt, thái độ của người đối diện hay các biến số số liệu thực tế trước mắt, đối lập với sự mơ hồ của nhóm Trực giác (N). Họ chỉ tin vào những dữ kiện thực tế có thể ứng dụng kiếm tiền hoặc giải quyết vấn đề ngay lập tức.
            <br><br>
            <strong style="color: #b7791f;">• Thinking (T) – Phương thức ra quyết định bằng Lý trí:</strong> 
            ESTP là những người duy lý và thực dụng ở mức độ cao. Khi cần đưa ra lựa chọn hay giải quyết khủng hoảng, họ lập tức gạt bỏ toàn bộ yếu tố cảm xúc chi phối sang một bên để đánh giá khách quan dựa trên quy luật nhân quả, logic nhân quả cứng và tính hiệu năng tức thì. Đối lập với nhóm Cảm xúc (F), ESTP (T) đặt kết quả thực tế và sự thật lên làm thước đo tối thượng.
            <br><br>
            <strong style="color: #b7791f;">• Perceiving (P) – Phong cách tổ chức cuộc sống Linh hoạt:</strong> 
            Tự do hành động ngẫu hứng chính là phong cách sống của ESTP. Họ ghét cay ghét đắng các kế hoạch đóng khung chi tiết cứng nhắc, các thời khóa biểu rập khuôn hay sự gò bó của thủ tục hành chính ngột ngạt. ESTP (P) muốn giữ cho cuộc sống học tập của mình luôn ở trạng thái linh hoạt tối đa để sẵn sàng thích ứng, xoay chuyển tình thế theo biến số thực tế phát sinh.
        `,
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Khả năng ứng biến và giải quyết khủng hoảng thần tốc:</strong> <span style="color: #4a5568;">Khi bài tập nhóm gặp sự cố phút chót hay buổi thuyết trình phát sinh biến số lỗi, ESTP có thể ngay lập tức nhảy lên sân khấu ứng biến vô cùng tự tin, xoay chuyển tình thế ngoạn mục.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Ngoại giao xuất sắc và xây dựng networking nhanh:</strong> <span style="color: #4a5568;">Họ có tài năng thiên bẩm trong việc làm quen bạn mới chỉ trong vài câu chào hỏi, dễ dàng thuyết phục người đối diện và kết nối các nguồn lực xã hội cho nhóm một cách hiệu quả.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Thực tế, quyết đoán và định hướng hành động cao:</strong> <span style="color: #4a5568;">Không tốn thời gian cho việc thảo luận lý thuyết suông dài dòng, họ nhanh chóng đưa ra giải pháp thực dụng và thúc giục cả nhóm bắt tay vào triển khai dự án ngay lập tức.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Hội chứng trì hoãn nghiêm trọng và lười làm chi tiết:</strong> <span style="color: #4a5568;">Họ là những 'chiến thần chạy nước rút' vào đêm cuối cùng trước ngày thi vì thói quen để dồn bài tập. Họ cực kỳ chán nản khi phải ngồi làm báo cáo Word hay căn lề văn bản chi tiết.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Thích mạo hiểm quá mức và thiếu tầm nhìn xa:</strong> <span style="color: #4a5568;">Quá tập trung vào việc giải quyết các rắc rối ngắn hạn trước mắt khiến họ đôi khi bỏ qua các rủi ro chiến lược dài hạn, dễ dẫn đến tình trạng dự án bị hụt hơi ở giai đoạn cuối kỳ.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Thẳng thắn đến mức vô tâm, thiếu tinh tế:</strong> <span style="color: #4a5568;">Khi giao tiếp công việc, họ nói thẳng vào lỗi sai của đồng đội mà không cân nhắc đến cảm xúc hay thể diện của họ, dễ gây hiểu lầm là trịch thượng hoặc thô lỗ.</span></li>
                </ol>
            </div>
        `,
        moiQuanHe: "Trong vòng tròn bạn bè, ESTP là trung tâm của niềm vui và sự náo nhiệt. Họ hài hước, phóng khoáng, thích trêu chọc và luôn nghĩ ra những trò vui bất ngờ cho cả nhóm. Tình bạn với một ESTP luôn tràn ngập năng lượng hành động thực tế. Họ cực kỳ trân trọng những người bạn thẳng thắn, cởi mở, có cái đầu lạnh và sẵn sàng cùng họ tham gia vào các hoạt động trải nghiệm thực chiến thú vị.",
        lamSaoDeThan: "- <strong>Hưởng ứng sự ngẫu hứng náo nhiệt:</strong> Sẵn sàng tham gia vào các buổi đi chơi, tiệc tùng hay các cuộc thi thực chiến ngắn hạn của họ.<br>- <strong>Giao tiếp trực diện và rõ ràng:</strong> Đừng vòng vo hay ngụy biện bằng cảm xúc drama, hãy nói thẳng bằng lý lẽ và giải pháp cụ thể.<br>- <strong>Không ràng buộc hay gò bó:</strong> Đừng cố ép họ phải tuân thủ các quy tắc rập khuôn tẻ nhạt khi không thực sự cần thiết.",
        trongDaiHoc: "Tại giảng đường đại học, ESTP tỏa sáng rực rỡ trong các bài thuyết trình nhóm thực chiến, các cuộc thi giải đề nhanh có tính đối kháng hoặc các dự án khởi nghiệp sinh viên. Họ kết nối mạng lưới quan hệ rất rộng với các anh chị khóa trên và doanh nghiệp bên ngoài. Họ thường học theo kiểu 'nước đến chân mới nhảy' nhưng điểm số vẫn cao nhờ khả năng tiếp thu nhanh từ thực tế cuộc sống.",
        chienLuocHocTap: "• <strong>Học thông qua Tình huống thực tế (Case-Study):</strong> Tìm hiểu cách các doanh nghiệp thật áp dụng lý thuyết trên slide để giải quyết bài toán kinh doanh thực tế nhằm khơi dậy hứng thú học sâu.<br>• <strong>Trò chơi hóa lộ trình học (Gamification):</strong> Biến các bài tập khô khan thành các thử thách chạy đua thời gian để kích hoạt sự phấn chấn của bộ não.<br>• <strong>Bắt cặp với đồng đội hệ Judging (J):</strong> Khi làm bài tập lớn, hãy chọn lập nhóm chung với một người bạn kỷ luật để họ nhắc nhở bạn nộp bài đúng hạn.",
        loiKhuyen: "Lời khuyên phát triển: Tốc độ hành động nhanh là vũ khí của bạn, nhưng tầm nhìn chiến lược dài hạn mới giúp bạn đi xa vững vàng. Hãy học cách dừng lại 3 giây để suy nghĩ về các rủi ro tương lai trước khi đưa ra quyết định mạo hiểm, học cách lắng nghe tinh tế cảm xúc của đồng đội và rèn luyện tính kiên trì để hoàn thiện trọn vẹn dự án."
    },

    "ESFP": {
        tagline: "Nhà Trình Diễn Đầy Năng Lượng",
        group: "Explorers",
        color: "#b7791f",
        tongQuan: `
            ESFP (Extraverted – Sensing – Feeling – Perceiving) chiếm khoảng 7-9% dân số thế giới. Được mệnh danh là "Nhà Trình Diễn Đầy Năng Lượng" hay "Thỏi nam châm học đường", họ sở hữu một nguồn năng lượng sống dồi dào, sự thân thiện bộc lộ ra bên ngoài và niềm khát khao mãnh liệt trong việc biến mỗi khoảnh khắc cuộc sống thành một lễ hội tràn ngập niềm vui, tiếng cười. ESFP nhìn nhận thế giới xung quanh qua lăng kính của các trải nghiệm giác quan sống động và sự gắn kết con người ôn hòa. Họ sống trọn vẹn ở hiện tại, cực kỳ hoạt ngôn, nhạy cảm với cái đẹp thẩm mỹ và luôn nỗ lực lan tỏa năng lượng tích cực ấm áp đến tất cả mọi người xung quanh.
            <br><br>
            Để thấu hiểu toàn diện thế giới thế giới quan sôi nổi và cấu trúc tâm lý của một ESFP, chúng ta phân tích qua 4 cặp chiều đo xu hướng cốt lõi:
            <br><br>
            <strong style="color: #b7791f;">• Extraverted (E) – Sự định hướng năng lượng Hướng ngoại:</strong> 
            Nguồn sống tối cao của ESFP nằm ở con người và đám đông náo nhiệt. Họ là những chiến thần xã hội thực thụ, cực kỳ cởi mở, dễ gần và nạp lại năng lượng mạnh mẽ khi được trò chuyện, giao lưu rộng rãi với mọi người. ESFP (E) ghét sự cô độc tĩnh lặng vô vị; họ luôn muốn hòa mình vào các hoạt động tập thể, lan tỏa tiếng cười và sự náo nhiệt ở bất kỳ nơi nào họ đặt chân đến.
            <br><br>
            <strong style="color: #b7791f;">• Sensing (S) – Cách thức tiếp nhận thông tin bằng Cảm giác:</strong> 
            Lăng kính Cảm giác giúp ESFP bắt trọn từng chi tiết thẩm mỹ, phong cách ăn mặc, âm thanh và chuyển động thực tế xung quanh một cách vô cùng nhạy bén. Đối lập với sự mơ mộng lý thuyết trừu tượng vĩ mô của nhóm Trực giác (N), ESFP (S) trân trọng các trải nghiệm thực tế đời thực, học tập tốt nhất qua hình ảnh trực quan sinh động và các hoạt động thực hành thực tế có tính tương tác cao.
            <br><br>
            <strong style="color: #b7791f;">• Feeling (F) – Phương thức ra quyết định bằng Cảm xúc:</strong> 
            ESFJ đưa ra quyết định bằng một trái tim vô cùng nhạy cảm và giàu tình cảm. Họ luôn đặt sự hòa hợp cảm xúc, lòng trắc ẩn và các mối quan hệ con người lên làm thước đo tối thượng cho mọi lựa chọn, đối lập với tính duy lý lạnh lùng của nhóm Lý trí (T). Họ cực kỳ nhạy cảm trước bầu không khí un-happy và sẵn sàng nhượng bộ để giữ gìn sợi dây liên kết ôn hòa cho tập thể.
            <br><br>
            <strong style="color: #b7791f;">• Perceiving (P) – Phong cách tổ chức cuộc sống Linh hoạt:</strong> 
            Tự do tự tại và ngẫu hứng hoàn toàn chính là lối sống của ESFP. Họ ghét cay ghét đắng các kế hoạch đóng khung chi tiết chi tiết, các lịch trình cố định lặp đi lặp lại hay sự gò bó của nội quy bài bản cứng nhắc. ESFP (P) muốn giữ cho cuộc sống học tập của mình luôn ở trạng thái mở để sẵn sàng thích ứng, làm việc hoàn toàn phụ thuộc vào dòng chảy cảm hứng đột phát để giữ được sự tươi mới.
        `,
        manhYeu: `
            <div style="margin-bottom: 12px;">
                <span style="color: #2b6cb0; font-weight: bold; display: block; margin-bottom: 4px;">💪 CÁC ĐIỂM MẠNH CỐT LÕI:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Kỹ năng giao tiếp, trình diễn xuất sắc trước đám đông:</strong> <span style="color: #4a5568;">Họ có khả năng biến một bài thuyết trình môn học khô khan thành một buổi giao lưu vô cùng lôi cuốn, thu hút toàn bộ sự chú ý của giảng viên và cả lớp bằng phong cách duyên dáng tự nhiên.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Khả năng tạo dựng bầu không khí vui vẻ, gắn kết tập thể:</strong> <span style="color: #4a5568;">Là thỏi nam châm lan tỏa năng lượng tích cực, họ dễ dàng phá tan sự ngượng ngùng ban đầu của nhóm học tập mới, mang lại tiếng cười và tinh thần hợp tác vui tươi cho cả đội.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Nhạy bén tinh tế với cái đẹp thẩm mỹ:</strong> <span style="color: #4a5568;">Có gu thẩm mỹ tốt trong việc phối màu, thiết kế hình ảnh trực quan giúp các slide thuyết trình hay poster dự án của nhóm luôn có diện mạo bắt mắt, sinh động.</span></li>
                </ol>
            </div>
            <div>
                <span style="color: #c53030; font-weight: bold; display: block; margin-bottom: 4px;">⚠️ CÁC ĐIỂM YẾU CẦN KHẮC PHỤC:</span>
                <ol style="margin: 0; padding-left: 20px; color: #2d3748;">
                    <li style="margin-bottom: 6px;"><strong>Hội chứng trì hoãn (Procrastination) nghiêm trọng do ham vui:</strong> <span style="color: #4a5568;">Dễ bị cuốn vào các cuộc vui chơi, cà phê cùng bạn bè mà bỏ quên nhiệm vụ, dẫn đến tình trạng tích tụ toàn bộ bài tập lớn và phải chạy nước rút điên cuồng sát nút giờ đóng cổng nộp bài.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Quá nhạy cảm trước phê bình và né tránh xung đột:</strong> <span style="color: #4a5568;">Dễ bị tổn thương sâu sắc, tụt năng lượng tinh thần nếu bài làm bị nhận xét khô khan, phê bình gay gắt. Họ chọn cách im lặng hoặc thỏa hiệp để giữ hòa khí thay vì đứng lên tranh luận giải quyết vấn đề.</span></li>
                    <li style="margin-bottom: 6px;"><strong>Cực kỳ chán nản công việc lý thuyết và chi tiết nhỏ:</strong> <span style="color: #4a5568;">Họ gặp chật vật nghiêm trọng khi phải ngồi hàng giờ phân tích số liệu thống kê khô khan, đọc tài liệu lý thuyết vĩ mô suông hay rà soát lỗi chính tả, căn lề văn bản báo cáo.</span></li>
                </ol>
            </div>
        `,
        moiQuanHe: "Trong đời sống xã hội, ESFP là những người bạn ngọt ngào, chu đáo và tràn đầy sự nhiệt thành tích cực. Mối quan hệ với một ESFP không bao giờ nhàm chán mà luôn tràn ngập tiếng cười, những bất ngờ ngẫu hứng và các buổi tụ tập náo nhiệt. Họ chu đáo chăm sóc tinh thần bạn bè, sẵn sàng lắng nghe thấu cảm và trân trọng những người bạn cởi mở, biết hưởng ứng năng lượng tích cực của họ và biết cư xử chân thành, ấm áp.",
        lamSaoDeThan: "- <strong>Hưởng ứng sự sôi nổi vui vẻ:</strong> Chủ động tham gia nhiệt tình vào các buổi đi chơi, hoạt động văn nghệ, giao lưu câu lạc bộ cùng họ.<br>- <strong>Ghi nhận và khen ngợi năng lượng tích cực:</strong> Dành những lời khen chân thành cho phong cách trình diễn, khiếu hài hước hoặc slide họ thiết kế đẹp.<br>- <strong>Góp ý khéo léo, nhẹ nhàng:</strong> Tránh chỉ trích gay gắt hay dùng ngôn từ thô bạo trước mặt họ, hãy dùng sự động viên tinh thần làm đòn bẩy.",
        trongDaiHoc: "Tại trường học, ESFP là những gương mặt vàng của ban văn nghệ câu lạc bộ, MC sự kiện hoặc người đại diện thuyết trình của nhóm. Họ kết nối mượt mà mạng lưới bạn bè rộng khắp giảng đường. Tuy nhiên, họ lại có xu hướng ôn thi theo kiểu 'chạy nước rút thần tốc' vào đêm cuối cùng trước ngày thi cử do thói quen ham vui và trì hoãn tích tụ công việc bài tập.",
        chienLuocHocTap: "• <strong>Học thông qua Hình ảnh trực quan sinh động (Visual Learning):</strong> Sử dụng các video bài giảng ngắn, sơ đồ tư duy đa màu sắc để giữ bộ não luôn được kích thích hứng thú học sâu.<br>• <strong>Lập nhóm tự học tương tác vui vẻ (Study Group):</strong> Ôn bài cùng 2-3 người bạn thân thiết, vừa học vừa trao đổi thảo luận kiến thức để không bị rơi vào trạng thái cô độc nhàm chán.<br>• <strong>Bắt cặp với đồng đội nhóm Judging (J):</strong> Chọn lập nhóm chung với một người bạn kỷ luật để họ nhắc nhở, kéo bạn bám sát mặt đất và chốt bài nộp đúng hạn học phần.",
        loiKhuyen: "Lời khuyên phát triển: Niềm vui hiện tại là tốt, nhưng kỷ luật tự thân mới là bệ phóng giúp bạn đạt tới thành công bền vững. Hãy học cách tiết chế mong muốn vui chơi bao đồng bên ngoài khi mùa thi cử đến, tập cho mình thói quen quản lý dòng chảy tập trung và cam kết hoàn thiện trọn vẹn phần nội dung thô sơ của bài tập trước khi dành quá nhiều thời gian trau chuốt phần trang trí hình ảnh."
    }
};
