# Project Memory — Mệnh Quán (Bát Tự Chiêm Nghiệm)

## 1. Product Summary & Active UX Rules
- **Brand & Theme**: Phong cách Huyền Vũ Chu Sa (Cổ phong huyền ảo, giấy trầm, mực son, chữ ngà `#eee3d8`, viền đồng `#d69a88`, điểm chu sa `#772b32` / `#bf4b45`).
- **Nền & Hiệu ứng**: Zero-card open editorial (nền trong suốt để lộ Bát quái xoay ngầm và cổ thi), tối đa 8 hạt tàn hương trôi nhẹ nhàng.
- **Rộng mở màn hình**: Khung đọc kết quả mở rộng `max-width: 1560px` (`width: min(94vw, 1560px)`), tận dụng màn hình lớn, không để khoảng trống thừa 2 bên.
- **Không vỡ giao diện (Anti-Overflow CSS)**:
  - Bảng Tứ Trụ 7 tầng: Trên desktop `>= 1280px` phân bổ đều 4 cột (`table-layout: fixed`), không bị thanh cuộn hay cột đầu che mất cột Trụ Năm.
  - La Kinh 24 Sơn & Ngũ Hành Sinh Khắc: Mỗi đồ bản là 1 section độc lập toàn chiều rộng (Trái: Đồ bản SVG ~50%, Phải: Cẩm nang giải mã ~50%), không lồng ghép 2 đồ bản vào 1 hàng để tránh ép thành 4 cột con gây tràn viền.
- **An toàn nội dung & Triết lý**: Không đưa ra chẩn đoán y khoa/nội tạng; không khẳng định số phận tuyệt đối; xem lá số là công cụ tự đối chiếu, phát triển bản thân.

## 2. Architecture & God Nodes
- `src/atlas/AtlasChartResult.mjs`: Bộ điều phối 5 đồ bản + Chân dung con người + Điều hướng + Xuất file TXT.
- `src/atlas/bazi-engine-ext.mjs`: Thuật toán Bát tự lõi (Tứ trụ, Ngũ hành, Thần sát, Thập thần, Đại vận, và Bộ tổng hợp Chân Dung Con Người Cá Nhân Hóa Đa Tầng `synthesizePersonalProfile`).
- `src/atlas/BaziMatrixMap.mjs`: Đồ bản I (Tứ Trụ Huyền Bàn 7 tầng & Mạch Khí Địa Chi).
- `src/atlas/CelestialWheel.mjs`: Đồ bản II (La Kinh 24 Sơn & Thần Sát Chiếu Mệnh).
- `src/atlas/FiveElementsRadar.mjs`: Đồ bản III (Ngũ Hành Sinh Khắc Trận & Lục Thân Nhật Chủ).
- `src/atlas/TenGodsProfileMap.mjs`: Đồ bản IV (Thập Thần Cách Cục & Chiến Lược Đời Sống).
- `src/atlas/LuckTimeline.mjs`: Đồ bản V (Biên Niên Đại Vận 80 Năm & Lưu Niên).
- `src/styles/ritual-atlas.css`: Hệ thống biến CSS, layout responsive và hiệu ứng chuyển động.
- `tests/*.test.mjs`: Bộ test hồi quy bảo vệ an toàn nội dung và tính chính xác của dữ liệu.

## 3. Recent Completed Changes (2026-11-13)
1. **Mở rộng chiều ngang nội dung & Khắc phục lỗi hiển thị**:
   - Nâng `max-width` lên 1560px (`width: min(94vw, 1560px)`), bảng Tứ Trụ 7 tầng sticky 108px không che cột Trụ Năm.
   - Tách La Kinh 24 Sơn và Ngũ Hành Sinh Khắc thành 2 section độc lập toàn chiều rộng (50% SVG - 50% luận giải), giải quyết triệt để lỗi ép 4 cột vỡ viền.
2. **Bản Đọc Chiêm Nghiệm Con Người (Human Life Reading) đặt trang trọng ở Đầu Trang**:
   - Thiết kế theo triết lý "Hạt giống bẩm sinh vs Ngoại cảnh" (như xem chỉ tay): Bát tự soi chiếu cốt cách và điểm yếu tâm lý; ngoại cảnh, sự kết giao và kỷ luật ranh giới mới quyết định thành bại. Tuyệt đối không phán đoán số phận hay đưa ra ngày giờ định mệnh.
   - Trả lời 4 câu hỏi đời sống cốt lõi:
     * 01 · BẢN NGÃ BẨM SINH & CỐT CÁCH THỰC SỰ: Cốt cách nguyên bản, 3 hạt giống bẩm sinh (Nhật chủ, Tọa chi, Nạp âm, Vòng trường sinh).
     * 02 · ĐIỂM MÙ & CẠM BẪY DỄ VẤP TRƯỚC NGOẠI CẢNH: Cảnh báo cạm bẫy bạn bè xấu rủ rê, khích tướng hùn hạp tài chính, cả nể ôm đồm theo Thân vượng/nhược, Thập thần và Ngũ hành vượng/khuyết.
     * 03 · TÌNH DUYÊN & DUYÊN NỢ CỦA BẠN: Phân tích Cung Phu Thê (Trụ Ngày), quan hệ Can-Chi (Chi sinh Can, Can sinh Chi, Tỷ Kiếp, Khắc), mẫu bạn đời bù trừ và lời khuyên giữ lửa.
     * 04 · LỜI KHUYÊN ĐỊNH TÂM & THIẾT LẬP RANH GIỚI: Định hướng Dụng thần điều hòa, 3 nguyên tắc sống (chọn bạn, quy tắc 48h tài chính, thói quen định tâm mỗi ngày).
   - Nút cầu nối mượt mà: *"Khám phá 5 Đồ Bản Chi Tiết để kiểm chứng cơ sở tính toán cổ pháp ↓"* cuộn nhẹ xuống `#atlas-overview`.
   - Cập nhật thanh điều hướng: `['atlas-human-reading', 'Bản đọc'], ['atlas-overview', '5 Đồ bản'], ['atlas-summary', 'Tổng quan'], ['atlas-details', 'Chi tiết'], ['atlas-conclusion', 'Kết luận']`.
   - Xuất trọn vẹn 4 câu hỏi đời sống vào tệp TXT tải về.
3. **Bộ kiểm thử & An toàn nội dung**:
   - Thêm ca test kiểm chứng 4 câu hỏi đời sống và trường hợp khuyết giờ sinh (`isPartialTime`) vào `tests/atlas-data.test.mjs`. Toàn bộ 10/10 tests pass 100%.

## 4. Next Priorities
- Kiểm tra visual trên các kích thước màn hình thực tế (laptop 1366px, desktop 1920px, mobile 375px/390px).
- Thu thập phản hồi từ người dùng về độ sâu và độ chính xác của bản đọc 4 câu hỏi đời sống.
