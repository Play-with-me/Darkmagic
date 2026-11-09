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
