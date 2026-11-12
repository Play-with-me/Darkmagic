# DESIGN.md — Mệnh Quán (Huyền Vũ Chu Sa & Cổ Pháp Bát Tự)

## 1. Triết Lý & Không Khí (Visual Atmosphere)
- **Phong cách:** Đông Phương Huyền Học Cổ Điển — Trầm Mặc, Ma Mị, Thư Pháp Bút Lông & La Kinh Cổ Điển.
- **Nguyên tắc cốt lõi:**
  - Giữ trọn vẹn nền đen rêu huyền bí (`#0b100e`) cùng vòng Bát Quái đỏ xoay ngầm (`.reading-sigil`) và những dòng cổ thi trôi lơ lửng (`.reading-verse`).
  - Toàn bộ khung thẻ đồ bản sử dụng nền kính mờ huyền ảo (`rgba(21, 26, 24, 0.72)` + `backdrop-filter: blur(8px)`), viền chỉ tơ cổ phong (`rgba(214, 154, 136, 0.25)`).
  - Tuyệt đối không dùng icon mặc định hay emoji thô (như ☯, ⛩, 🌊, ✦). Toàn bộ biểu tượng dùng **Lucide SVG nét mảnh (stroke-width: 1.5)** hoặc đồ họa vector khắc chỉ tơ cổ học.

---

## 2. Hệ Thống Màu Chuẩn (Color Palette Tokens)

### Màu Nền & Mực Viết (Base & Ink)
- **Nền Hư Không (Void Base):** `#0b100e` (Đen rêu sâu thẳm nguyên bản của Mệnh Quán)
- **Thẻ Huyền Trúc (Card Surface):** `rgba(21, 26, 24, 0.72)`
- **Thẻ Chu Sa Tối (Deep Accent Surface):** `rgba(33, 27, 27, 0.78)`
- **Chỉ Kẻ Cổ Mặc (Border Line):** `#493532` & `#352422`
- **Mực Trắng Ngà (Primary Text):** `#eee3d8`
- **Mực Mờ Sương Khói (Muted Text):** `#beb0a7`
- **Chỉ Dẫn Mềm (Soft Text):** `#8c7d74`

### Điểm Nhấn Huyền Vũ & Chu Sa (Ritual Accents)
- **Vàng Đồng Hồng (Copper Gold):** `#d69a88`
- **Đỏ Chu Sa Trầm (Deep Cinnabar):** `#772b32`
- **Đỏ Chu Sa Phát Sáng (Glowing Cinnabar):** `#bf4b45`
- **Hồng Ngọc Chu Sa (Soft Cinnabar):** `#edaaa1`

### 5 Sắc Độ Ngũ Hành Trầm Cổ (Antique Muted Five Elements)
*Tuyệt đối không dùng màu xanh đỏ tím vàng sặc sỡ làm vỡ không khí ma mị của web:*
- **Mộc (Thanh Ngọc Tối):**
  - Màu chính: `#789e82`
  - Nền mờ: `rgba(120, 158, 130, 0.12)`
  - Viền: `rgba(120, 158, 130, 0.35)`
- **Hỏa (Chu Sa Trầm):**
  - Màu chính: `#c9655b`
  - Nền mờ: `rgba(201, 101, 91, 0.12)`
  - Viền: `rgba(201, 101, 91, 0.35)`
- **Thổ (Hoàng Thổ Đồng Cổ):**
  - Màu chính: `#c2966d`
  - Nền mờ: `rgba(194, 150, 109, 0.12)`
  - Viền: `rgba(194, 150, 109, 0.35)`
- **Kim (Bạch Kim Mờ):**
  - Màu chính: `#c7bfb8`
  - Nền mờ: `rgba(199, 191, 184, 0.12)`
  - Viền: `rgba(199, 191, 184, 0.35)`
- **Thủy (Huyền Thủy Tối):**
  - Màu chính: `#6d88a3`
  - Nền mờ: `rgba(109, 136, 163, 0.12)`
  - Viền: `rgba(109, 136, 163, 0.35)`

---

## 3. Hệ Thống Kiểu Chữ (Typography Hierarchy)
- **Đại Tự & Ấn Chương Thư Pháp:**
  - Font: `"Ma Shan Zheng", "Zhi Mang Xing", "STKaiti", "KaiTi", serif`
  - Dùng cho: Chữ Hán đại tự Thiên Can, Địa Chi, Quẻ Dịch, Ấn Chu Sa Mệnh Chủ.
- **Chữ Hán La Kinh & Số Liệu Cổ Pháp:**
  - Font: `"Noto Serif TC", "Noto Serif SC", "Songti SC", "SimSun", serif`
  - Dùng cho: 24 Sơn Hướng, 28 Tinh Tú, Tàng Can, Thần Sát.
- **Tiếng Việt & Nội dung Diễn Giải:**
  - Tiêu đề: `"Noto Serif", Georgia, serif`
  - Văn bản đọc: `"Noto Sans", system-ui, sans-serif`

---

## 4. Quy Chuẩn Bố Cục (Layout Architecture)
- **Khung Tổng Thể (Master Frame):**
  - Rộng tối đa 1200px, căn giữa, cách lề linh hoạt (`px-4 sm:px-8`).
  - Chống tràn (`min-w-0`, `min-h-0`, `overflow-hidden` ở các thẻ con).
- **Mô hình Song Hành (Dual-Column Split-View):**
  - Cột Trái (45-50%): Đồ bản chuyên sâu kỹ thuật số liệu (Tứ Trụ, La Kinh, Ngũ Hành, Thập Thần, Đại Vận).
  - Cột Phải (50-55%): Lời giải đời thường, ấm áp, thực tế cho người mới.
  - Tương tác đồng bộ: Bấm vào đâu bên trái, giải nghĩa lập tức đổi bên phải.

## 5. Quy chuẩn phát hành nội dung Atlas (2026-11-10)

- Bản đồ và dữ kiện tính đứng trước kết luận; không đặt “cẩm nang tính cách” trước năm đồ bản.
- Đại vận và Lưu niên chỉ hiển thị khi bộ tính chính cung cấp `daYun`. Không dùng tuổi khởi vận, năm sinh, năm hiện tại hoặc danh sách năm cố định làm dữ liệu thay thế.
- Vượng suy, Dụng thần và Hỷ thần chưa được phát hành khi quy tắc chưa có duyệt độc lập. Ngũ hành chỉ trình bày phép đếm Can, Chi và tàng can.
- Thần Sát, Nạp Âm, Trường Sinh và Thập Thần phải được ghi là hệ thống tên gọi/diễn giải truyền thống; không gắn nhãn khoa học và không dùng để khẳng định sức khỏe, tài chính, nghề nghiệp hoặc sự kiện tương lai.
- Ở điện thoại, trang không được tràn ngang. Bảng có vùng cuộn ngang riêng, cột tên hàng được giữ ở mép trái và điều khiển chạm có chiều cao tối thiểu 44 px.

## 6. Quy chuẩn giao diện Figma: Mệnh Quán · Tinh chỉnh thủ công (2026-11-11)

- **Màu sắc & Tương phản:**
  - Nền hư không / Xanh mực: `#0b100e`, thẻ bề mặt `rgba(18, 24, 22, 0.85)`.
  - Chu sa trầm: `#772b32` (nền chọn), viền sáng `#bf4b45`.
  - Vàng cũ / Cổ thư: `#c4a365`, `#d69a88`, chữ ngà `#eee3d8`, chữ mờ `#beb0a7`.
  - Trạng thái chọn: Nền chu sa trầm + chữ ngà + viền sáng rõ ràng, độ tương phản WCAG AA >= 4.5:1.
- **Bố cục & Khoảng cách (Layout & Spacing):**
  - Khung desktop tối đa 1200px căn giữa; biểu mẫu nhập tối đa 760px.
  - Mobile 390px: lề 20px; Mobile 320px: lề 16px.
  - Thang khoảng cách chuẩn: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 px.
  - Loại bỏ hoàn toàn thẻ lồng nhau (nested cards) và padding cộng dồn gây tràn ngang.
- **Luồng 4 giai đoạn chuẩn (4-Phase Architecture):**
  - Thanh điều hướng sticky: `[Bản đồ] [Tổng quan] [Chi tiết] [Kết luận]`.
  - `01 · Bản đồ`: Đủ 5 bản đồ (Tứ trụ toàn rộng -> Thiên bàn & Ngũ hành 2 cột trên desktop / xếp dọc trên mobile -> Thập thần toàn rộng -> Đại vận toàn rộng). Bảng Tứ trụ mobile cuộn ngang cục bộ với cột tên hàng cố định mép trái nền đặc `#0b100e`.
  - `02 · Tổng quan`: Tóm tắt nhanh số lượng trụ, sao thần sát, tỷ trọng ngũ hành, thập thần, đại vận và giới hạn tính toán.
  - `03 · Chi tiết`: Giải thích chi tiết từng cấu trúc; thuật ngữ [?] hỗ trợ chuột, bàn phím (Tab/Enter/Escape) và chạm (desktop overlay, mobile bottom sheet); nguồn dữ liệu và thuật toán thu gọn `<details>`.
  - `04 · Kết luận`: Một đoạn văn bản tóm tắt duy nhất, không phán bừa tính cách/y khoa/tài chính; thanh tác vụ tải trọn bộ (.TXT) và lưu Sổ chiêm nghiệm với chiều cao hit target >= 44px.
- **Động học & Chuyển động (Motion Law):**
  - Vòng Bát quái nền: Vòng ngoài thuận 137s, vòng giữa ngược 89s, vòng tâm thuận 113s.
  - 6 dòng cổ thi trôi lơ lửng: 24–46s lệch pha.
  - Điểm sáng tinh tú: Tối đa 8 điểm trên desktop, 4 điểm trên mobile; chuyển động êm dịu, không chớp nháy.
  - Opacity nền: 6–10% ở màn nhập sinh, 8–14% ở màn kết quả và giảm mờ sau lớp chữ để bảo vệ độ đọc.
  - Chuyển màn: `opacity + translateY(8px)` trong 200ms ease-out.
  - Chọn trụ / chặng: 180ms ease-out.
  - Giải nghĩa [?]: 200ms ease-out.
  - `prefers-reduced-motion: reduce`: Tĩnh hoàn toàn (static), loại bỏ mọi chuyển động xoay/trượt.
  - Cơ chế tự dừng: Tạm dừng chuyển động khi tab ẩn (`document.hidden`) hoặc khi phần tử cuộn khỏi tầm nhìn (`IntersectionObserver`).
- **Typography & Hit Target:**
  - Kích thước font nội dung đọc >= 16px.
  - Vùng chạm tương tác (hit target) >= 44px.
