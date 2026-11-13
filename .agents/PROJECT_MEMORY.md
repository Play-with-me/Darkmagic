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
4. **Master Bazi Engine v2.0 (`bazi-engine-ext.mjs`)**:
   - **Tầng Biểu vs Tầng Lý & Kiểm định Thông Căn**: Tách bạch Can lộ (vẻ ngoài/tài lộc hư phù) và Tàng can ẩn sâu (tâm lý bên trong).
   - **Vector Khí Hậu & Điều Hầu**: Chấm điểm Hàn–Nhiệt–Táo–Thấp có trọng số Chi tháng, ưu tiên Điều Hầu khi khí hậu cực đoan (`|temp| >= 3.5` hoặc `|moisture| >= 3.5`).
   - **10 Thế Cục Giằng Xé Nội Tâm & Lưỡng Khí Tranh Vượng**: Phát hiện các xung đột Thập Thần (`Kiếp Tài Đoạt Tài`, `Thương Quan Kiến Quan`, `Thực Thần Chế Sát`, `Nhất Khí Độc Vượng`, v.v.) và xử lý chênh lệch ngũ hành sát nút (`<= 0.15`).
   - **Ma Trận Giao Thoa Cung Phu Thê Đa Trụ**: Phân tích giao thoa Tháng–Ngày–Giờ, Tranh Hợp, Không Vong / Hoa Cái trong Câu hỏi 3.
   - **Đồng bộ UI & TXT + Kiểm thử**: Hiển thị badge khí hậu, hộp Tầng Biểu/Tầng Lý, tag thế cục trong `AtlasChartResult.mjs` + `ritual-atlas.css`, xuất đầy đủ ra `.txt`, và xác minh 11/11 tests pass (`tests/atlas-data.test.mjs` + `tests/atlas-safety.test.mjs`).
5. **Tối Ưu Giao Diện Điện Thoại Đa Hệ Điều Hành (iOS & Android)**:
   - **`server.mjs`**: Nâng `<meta name="viewport">` hỗ trợ `viewport-fit=cover`, thêm `<meta name="theme-color" content="#0b100e"/>`, nâng cache-bust `?v=atlas12`.
   - **`AtlasChartResult.mjs`**: Đồng bộ `data-nav-id` và tự căn giữa nút điều hướng đang chọn (`scrollIntoView({ inline: 'center' })`) trên thanh cuộn di động.
   - **`ritual-atlas.css`**: Chống tự zoom ô nhập liệu iOS (`font-size: 16px`, `min-height: 44px`), hỗ trợ `env(safe-area-inset-*)` & `100dvh`, tách `:hover` vào `@media (hover: hover)` kèm `:active` cảm ứng, biến thanh 5 nút điều hướng dưới `640px` thành dải `scroll-snap` 1 hàng (`flex-wrap: nowrap`), khóa chống tràn ngang toàn chuỗi phần tử chứa SVG và bảng Tứ trụ 7 tầng.

6. **Hạ Tầng Kiếm Tiền Sạch, Banner Đơn Giản & Monetag**:
   - **`src/atlas/monetization-config.mjs`, `src/atlas/monetag-session.mjs` & `src/atlas/AdSlotBanner.mjs`**: Đặt `mode: 'affiliate'` hiển thị banner đơn giản ở Vị trí 1 (`betweenReadingAndMaps`), Vị trí 3 (`beforeConclusion`) trong `AtlasChartResult.mjs` và `.mq-banner-card` trên `/thu-vien*`. Giữ `adsense` (`ca-pub-1866418681419466`, `/ads.txt`) và kích hoạt `monetag` (`siteId: '3574571'`, `<meta name="monetag" content="17f2098708859e12049841afd66178ac" />`, Zone `12250663` In-Page Push qua `https://nap5k.com/tag.min.js`, giới hạn `oncePerSession: true` qua `sessionStorage` trong `monetag-session.mjs`).
   - **`src/atlas/library-articles.mjs`, `src/atlas/editorial-pages.mjs` & `server.mjs`**: Phục vụ SSR `/quyen-rieng-tu`, `/dieu-khoan`, `/lien-he` (`kyuu449977@gmail.com`), `/thu-vien` + 14 bài viết (JSON-LD `Article`), `/healthz` (giữ ấm Render qua UptimeRobot), nâng cache-bust `?v=atlas18` dùng chung qua `ATLAS_ASSET_VERSION`, nhúng `buildHeadMonetizationTags()` và mở CSP động cho AdSense/Monetag (`https://nap5k.com`).
   - **`tests/atlas-data.test.mjs` & `tests/atlas-safety.test.mjs`**: Kiểm tra đồng bộ `14/14` tests pass.

## 4. Next Priorities
- Đẩy commit lên `origin/main` và xác minh live trên `darkmagic.onrender.com` (bấm Verify site `3574571` trên Monetag khi `<meta name="monetag">` đã live, sau đó tạo/gắn Zone script của `darkmagic.onrender.com` vào `monetag.headScripts`).
- Việc gắn tên miền riêng tạm hoãn xử lý sau khi hoàn tất ổn định trên Render.
