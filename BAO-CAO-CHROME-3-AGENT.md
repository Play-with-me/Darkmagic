# Kiểm tra trải nghiệm Mệnh Quán — 10/11/2026

Đích: http://127.0.0.1:5173/. Ba agent gpt-6-luna, reasoning low, mô phỏng người mới, người đọc kết quả và người dùng điện thoại. Kiểm tra bằng Chrome; không sửa mã, không tải xuống, không đăng nhập hoặc lưu dữ liệu thật. Đây là walkthrough mô phỏng, chưa thay thế nghiên cứu người dùng thật. Các phát hiện trùng được gộp.

## Kết luận

Trang có bản sắc Đông phương và hành trình khách hoạt động. Chưa đủ cơ sở nghiệm thu toàn bộ: nội dung diễn giải mâu thuẫn với trạng thái duyệt, Đại vận thiếu dữ liệu, điều hướng dài cần xác nhận sửa. Kiểm tra điện thoại bị giới hạn bởi khả năng điều khiển viewport của phiên công cụ.

## Phát hiện và sửa ưu tiên

| ID | Mức | Bằng chứng / tái hiện | Hệ quả | Đề xuất / nghiệm thu |
|---|---|---|---|---|
| C01 | Cao | Lập lá số → xem Thủy/Chính tài → mở Cơ sở & giới hạn. Kết quả nói về thông minh, trực giác, quản lý tiền và chọn dự án; nguồn đánh dấu REF-01 chờ duyệt, nói luồng chỉ hiển thị cấu trúc/định nghĩa | Không rõ đoạn nào được duyệt; lời giải tạo cảm giác khuôn mẫu và chắc chắn quá mức | Rà toàn bộ nội dung đang phát hành; mỗi đoạn dẫn dữ kiện cụ thể, thuật ngữ, giới hạn; nội dung chưa duyệt không hiện như kết luận cá nhân |
| C02 | Cao | Mẫu 15/05/2000 12:30 → map V báo chưa có đủ mốc Đại vận | Thiếu một phần được giới thiệu trong hành trình năm bản đồ | Nối dữ liệu bộ tính và đối chứng; giữ thông báo thiếu khi chưa có; không dựng chặng giả |
| C03 | Vừa | Trong kết quả chọn Đồ Bản III/IV, agent quan sát màn vẫn ở bảng map I và giải thích Trụ Ngày | Trang dài khó tìm đúng mục | Tái hiện lại chuyển nhanh và vị trí cuối sau chuyển động; sửa target/cuộn/focus nếu xác nhận. Hiện là phát hiện cần kiểm tra lại thời điểm cuộn, chưa có đo tọa độ |
| C04 | Vừa | Mở biểu mẫu trong Chrome hiện tại: ngày trống hiển thị mm/dd/yyyy | Người đọc Việt có thể nhầm ngày/tháng | Hiển thị ngày đã hiểu bằng tiếng Việt trước khi tính, ví dụ “ngày 4 tháng 3 năm 2000”; không chỉ gắn nhãn dd/mm nếu native control vẫn nhập mm/dd |
| C05 | Vừa | Có ngày hợp lệ, không biết giờ, chưa xác nhận 18+ → gửi. Trình duyệt hiện “Please check this box if you want to proceed.” | Phản hồi lỗi thiếu nhất quán ngôn ngữ | Lỗi tiếng Việt cạnh checkbox, gắn nhãn trợ năng và focus đúng trường |
| C06 | Vừa | Bản xem trước lưu gợi ý “Thanh thuần lắng đọng · Trực giác tâm linh” | Câu hoa mỹ thiếu thông tin riêng, tạo ấn tượng văn bản sinh tự động | Để ghi chú cá nhân trống; tóm tắt bằng dữ kiện đã xem; cho người dùng tự giữ ý nghĩa |
| C07 | Cần xác nhận | Agent quan sát thanh cuộn ngang ở màn hình desktop | Có thể còn overflow ngoài bảng | Tái hiện ở kích thước xác định và đo phần tử vượt khung; chưa kết luận nguyên nhân từ ảnh |

## Những việc đã kiểm tra đạt

- Trang chủ mở biểu mẫu; gửi trống bị chặn tại ngày.
- Trang Về Mệnh Quán và Cơ sở luận giải mở được, có hành trình/giới hạn/trạng thái nguồn.
- Lịch âm ghi rõ Trung Hoa UTC+8, cảnh báo khác lịch Việt Nam và có tháng nhuận.
- Danh sách múi giờ có các ID IANA và lời nhắc xác nhận Việt Nam; nơi sinh tùy chọn, giải thích chưa hiệu chỉnh giờ Mặt Trời thực.
- Không biết giờ vô hiệu hóa ô giờ và báo chỉ xem phần đủ cơ sở.
- Quyền riêng tư giải thích dữ liệu phiên, không gửi AI, xóa khi kết thúc/tải lại/tối đa 24 giờ và việc chỉ lưu nội dung đã duyệt khi chọn lưu. Đây là kiểm tra lời hiển thị, không phải kiểm toán hạ tầng.
- Sổ khách giải thích đăng nhập, có đường bắt đầu buổi mới.
- Lưu mở bản xem trước sửa được, consent chưa tích và đường đăng nhập; chưa kiểm tra lưu thật.
- 2000-05-15 12:30: Canh Thìn/Tân Tỵ/Quý Dậu/Mậu Ngọ, Kim 3.9; 1995-11-02 06:15: Nhật can Đinh, Mộc 2.9; 1988-02-29 không biết giờ: giờ chưa xác định, Mộc 6.0. Các mẫu chứng minh giao diện phản ứng theo đầu vào, không chứng minh thuật toán đúng.

## Chất lượng và cảm giác được thiết kế kỹ

Màu trầm, đồ hình và chữ Hán tạo bản sắc. Điểm cần đầu tư là cấu trúc đọc, biên tập lời giải và tính nhất quán lời hứa–chức năng. Thêm chuyển động không giải quyết được sự chung chung của lời giải; tăng độ tối cũng có thể giảm độ đọc. Ưu tiên câu giải thích cụ thể, thuật ngữ mở được bằng nút hỏi, trạng thái chọn rõ và các bản đồ đủ lớn. Đây là đánh giá thiết kế, không phải bằng chứng AI tác giả.

Phương án ít tốn công nhất là chỉnh nội dung và các thông báo thiếu dữ liệu trước. Phương án đầy đủ hơn nối Đại vận và sửa điều hướng, rồi thử với 3–5 người thật. Làm lại toàn bộ giao diện lúc này có chi phí cao và chưa có bằng chứng cần thiết.

## Phần chưa kiểm tra

Mobile 320/390/768 chưa được kiểm tra mới: công cụ agent không đặt được viewport. Chưa xác minh tương phản bằng đo màu, screen reader thực, giảm chuyển động, tất cả tooltip/nút hỏi, tất cả điều khiển bản đồ, công thức lịch pháp bằng mẫu độc lập, đăng nhập/lưu/xóa/quyền hai tài khoản, lỗi mạng và phục hồi. Tải xuống được loại khỏi phạm vi theo yêu cầu.

## Điều kiện kiểm tra lại

1. Đóng C01 bằng đối chiếu nội dung phát hành và trạng thái duyệt.
2. Có dữ liệu Đại vận thật hoặc lời giới thiệu phản ánh giới hạn hiện tại.
3. Xác nhận chuyển nhanh III/IV tới đúng tiêu đề, focus và vị trí cuộn.
4. Ngày hiển thị được hiểu đúng qua ngày/tháng không đối xứng, lỗi tiếng Việt rõ.
5. Chạy Chrome ở các chiều rộng cụ thể; chỉ bảng được cuộn ngang.
6. Người dùng thật giải thích lại ý nghĩa một bản đồ và kết luận bằng lời của họ. Nếu họ hiểu rõ, có thể giảm bớt phần hướng dẫn; nếu không, cần chỉnh chú thích trước hiệu ứng.
