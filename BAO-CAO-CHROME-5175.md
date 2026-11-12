# Kiểm tra Chrome bản source mới — 10/11/2026

Đích: http://127.0.0.1:5175/. Ba agent gpt-6-luna, reasoning low; GPT-5.6 Luna không có trong công cụ. Kiểm tra mô phỏng qua Chrome, phân công nhập liệu / kết quả / giao diện. Không sửa website, không lưu dữ liệu thật, không kiểm tra tải xuống. Không thay thế nghiên cứu người dùng thật hoặc đối chứng lịch pháp.

## Kết luận thẳng

Bản mới lập được lá số, có năm vị trí bản đồ và Đại vận có thể chuyển chặng. Chưa đủ căn cứ nghiệm thu toàn bộ. Vấn đề đáng ưu tiên nhất là lời luận cá nhân và lời hứa tài lộc vẫn vượt quá dữ kiện cấu trúc. Cảm giác “AI” là nhận xét về cách viết/thiết kế, không chứng minh tác giả hoặc công nghệ sinh nội dung.

## Phát hiện đã gộp

| ID | Ưu tiên | Quan sát và cách tái hiện | Đề xuất |
|---|---|---|---|
| N01 | Cao | Lập 2000-05-15 12:30 HCM → chi tiết Nhật chủ có “bản tính hiền hòa, nhạy cảm”, gợi ý “tâm lý trị liệu... y dược”. Chọn Mạng Lưới Hợp/Xung → Thìn–Dậu Lục Hợp có “tài lộc hanh thông” và “gặt hái kết quả tài chính tốt nhất” | Rà toàn bộ renderer source; chỉ phát hành quy tắc/nội dung đã duyệt; dẫn dữ kiện cụ thể, bỏ khẳng định nghề/tài chính từ cấu trúc |
| N02 | Vừa | Chi tiết profile có các dấu hỏi/glyph trông như ký tự thay thế trước bullet | Đối chiếu ký tự nguồn/font với ảnh thật; thay bullet/icon rõ nghĩa, không kết luận lỗi encoding khi chưa xác định |
| N03 | Vừa | Ảnh trang chủ desktop khoảng 1516×810 có thanh cuộn ngang | Đo scrollWidth/clientWidth và phần tử vượt khung; xử lý nguyên nhân, không chỉ clip toàn trang |
| N04 | Vừa | Widget zoom cố định che phần bên phải nhãn BẢN THỬ NGHIỆM ở footer biểu mẫu | Dành khoảng trống hoặc di chuyển widget; kiểm tra lại tại các breakpoint |
| N05 | Cần xác minh | Gửi biểu mẫu trống, chưa xác nhận tuổi chỉ hiện lỗi tuổi; chưa xác minh tiếp sau chọn tuổi | Kiểm tra từng trường thiếu/ngày sai và focus/aria tại đúng trường |
| N06 | Cải thiện | Kết luận nói về chặng hiện tại trong khi người dùng đang chọn chặng khác; chưa chứng minh dữ liệu kết luận sai | Ghi rõ “chặng chứa năm hiện tại” và “chặng đang xem” để tránh hiểu nhầm |

## Những hành vi đã xác nhận

- Trang chủ mở biểu mẫu; Về Mệnh Quán/Cơ sở luận giải mở đúng trang. Sổ khách có trạng thái tải rồi hiện giải thích.
- Native date còn mm/dd/yyyy nhưng ngày 2000-03-04 được xác nhận bằng “4 tháng 3, 2000”.
- Checkbox tuổi chưa chọn; gửi hiện lỗi tiếng Việt. Agent nhập liệu không tiếp tục tick tuổi.
- Lịch âm ghi rõ Trung Hoa UTC+8, có cảnh báo lịch Việt Nam, trường tháng nhuận; unknown hour vô hiệu hóa giờ và nói không dựng giờ giả. Đây chỉ là hành vi biểu mẫu.
- Agent kết quả lập được mẫu giả 2000-05-15 12:30 HCM. Đủ năm vị trí bản đồ, tổng quan/chi tiết/kết luận xuất hiện.
- Shortcut tổng quan/chi tiết/kết luận cuộn tới mục; nút [?] Can Chi mở giải thích và đóng được.
- Chuyển Quý Mùi 2017–2026 sang Giáp Thân 2027–2036 đổi tiêu đề/chủ đề và bảng năm 2027…2036. Điều này chứng minh tương tác, chưa chứng minh mốc khởi vận đúng.
- Ô năm quan sát là văn bản bảng; không đổi chi tiết khi bấm. Chưa có bằng chứng giao diện hứa chọn năm nên chưa ghi là lỗi.
- Mẫu cùng ngày không biết giờ hiện 3/4 trụ, Giờ “Chưa xác định”, các ô phụ thuộc giờ là dấu gạch; phần giới hạn nói không suy giờ còn thiếu. Đại vận vẫn xuất hiện: cần kiểm tra độ chính xác/giới hạn khởi vận khi thiếu giờ bằng ca đối chứng trước nghiệm thu thuật toán.

## Chất lượng sản phẩm và giải pháp

Giữ bảng màu trầm, serif và đồ hình vì đã có bản sắc. Ưu tiên sửa lời giải trước thêm hiệu ứng: câu “hiền hòa/nhạy cảm” áp dụng rộng, lời “tài lộc hanh thông” khó kiểm chứng và làm giảm niềm tin khi người đọc đối chiếu. Mỗi đoạn nên trả lời dữ kiện nào dẫn tới tên quan hệ, ý nghĩa truyền thống nào đang được dẫn và phần nào chưa đủ căn cứ. Không cần biến trang thành cảnh báo dày đặc.

Sau đó xử lý overflow/widget và thử đọc hiểu với 3–5 người thật: họ có nói lại được ý nghĩa biểu đồ, tìm nguồn và nhận ra giới hạn thiếu giờ không? Đây là tiêu chí khả dụng có thể quan sát; không thể cam kết không ai nghi ngờ AI.

## Chưa kiểm tra

### Bổ sung kiểm tra trực tiếp sau vòng ba agent

Parent truy cập được capability viewport qua browser API. Tuy nhiên kích thước yêu cầu bị hệ số thu phóng: yêu cầu 320/390/768/1101/1440 cho innerWidth thực tế 256/312/614/881/1152. Vì vậy không nhận đây là nghiệm thu đúng năm breakpoint. Đo document client/scroll lần lượt 244/277, 300/300, 602/602, 869/869, 1140/1140: tái hiện overflow 33px tại kích thước thực 256px; các kích thước còn lại không vượt document. Khi đo có chuyển trạng thái trang sang biểu mẫu, nên không gán tất cả phép đo cho trang chủ. Đã reset viewport sau kiểm tra.

Lập mẫu 2000-05-15 12:30 và mở Sổ: takeaway rỗng, consent lưu chưa chọn, link đăng nhập disabled; nút Trở lại bản Bát tự có mặt. Nhưng title/reflection mặc định vẫn chứa “Quý Thủy”. Đây là rò rỉ định danh cấu trúc lá số vào văn bản lưu mặc định, mâu thuẫn lời “lá số không được tự đưa vào sổ”; cần sửa native ChartResult, thay đổi root Atlas trước đó không áp dụng cho renderer này. Chưa bấm đăng nhập hoặc gửi request lưu.

320/390/768/1101/1440 px chưa được thử trong vòng này; công cụ agent không điều khiển được viewport. Không có đo tương phản, keyboard-only hoàn chỉnh, screen reader thực, reduced motion, lỗi mạng, payload lưu, authenticated CRUD/hai tài khoản, đối chứng thuật toán độc lập. Ảnh desktop và lời hiển thị không thay thế các kiểm tra đó. Bản Render công khai không nằm trong vòng này. Ảnh đã xem trong phiên CUA; chưa có đường dẫn artifact ảnh để đính kèm báo cáo.
