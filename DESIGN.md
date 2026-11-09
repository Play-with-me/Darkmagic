# DESIGN.md — Mệnh Quán: Huyền Vũ Chu Sa (Eastern Occult & Classical Bazi Divination System)

## 1. Brand Archetype & Aesthetic Philosophy
- **Archetype**: *Huyền Vũ Chu Sa (Dark Occult Eastern Divination & Classical Astrological Atlas)*.
- **Atmosphere**: Cổ tịch huyền học Á Đông, trang nghiêm, ma mị, sâu lắng như bước vào một mật thất chiêm tinh cổ đại dưới ánh đèn dầu Chu Sa và chữ Vàng Kim khắc trên thẻ tre đen.
- **Core Principle**: **Map-First Visual Divination** — Ngay sau khi khởi lập lá số, toàn bộ **5 Đại Bản Đồ Bát Tự (5-Map Atlas)** xuất hiện trực quan trước mắt người xem, kết hợp tương tác từ trường sống động và lời phán cổ thư.

---

## 2. Color Tokens (Bảng Màu Huyền Học Cổ Phong)
| Token | Giá trị | Ý nghĩa Huyền Học |
| :--- | :--- | :--- |
| `--ritual-bg-abyss` | `#0b0708` | Đêm Huyền Vũ sâu thẳm (Nền chính) |
| `--ritual-bg-altar` | `rgba(22, 11, 13, 0.86)` | Mặt bàn thờ Tứ Trụ (Nền thẻ bản đồ) |
| `--ritual-bg-elevated` | `rgba(36, 15, 18, 0.92)` | Tầng khí nổi bật / Hover state |
| `--ritual-cinnabar` | `#b91c1c` | Chu Sa Ấn Triện (Đỏ thần bí chủ đạo) |
| `--ritual-cinnabar-glow` | `rgba(220, 38, 38, 0.42)` | Hào quang Chu Sa |
| `--ritual-gold` | `#d4af37` | Hoàng Kim Cổ Tự (Điểm nhấn Nhật Chủ & Tinh tú) |
| `--ritual-gold-soft` | `rgba(212, 175, 55, 0.24)` | Viền tơ vàng mảnh |
| `--ritual-jade` | `#10b981` | Thanh Mộc Sinh Khí (Tương sinh / Cát thần) |
| `--ritual-parchment` | `#f5ebe6` | Giấy tuyên cổ ngả kem (Chữ chính độ tương phản > 12:1) |
| `--ritual-muted` | `#b89f97` | Chữ chú giải cổ tịch (WCAG AA compliant >= 4.8:1) |

### Ngũ Hành Linh Sắc (Five Elements Palette)
- **Mộc (木 - Thanh Long)**: `#34d399` (Ngọc Lục Bảo)
- **Hỏa (火 - Chu Tước)**: `#f87171` (Chu Sa Xích Hỏa)
- **Thổ (土 - Câu Trần)**: `#fbbf24` (Hoàng Thổ Kim Sa)
- **Kim (金 - Bạch Hổ)**: `#e2e8f0` (Bạch Ngân Tinh Kim)
- **Thủy (水 - Huyền Vũ)**: `#60a5fa` (Huyền Thủy Minh Châu)

---

## 3. Typography & Hierarchy
- **Display / Tiêu đề Quẻ & Chữ Hán**: `'Noto Serif', 'Playfair Display', Georgia, serif` — Trọng lượng 600–700, giãn chữ nhẹ, tạo cảm giác khắc bia đá cổ.
- **Body / Lời Luận Giải**: `'Noto Sans', system-ui, sans-serif` — Dễ đọc, dòng thoáng (`line-height: 1.65`).
- **Hán Tự Linh Phù**: Hiển thị song ngữ Hán - Việt (`甲子 · Giáp Tý`) giúp giữ trọn thần thái huyền học vừa dễ hiểu cho người Việt.

---

## 4. 6 Hiệu Ứng Huyền Vi Chủ Đạo (60fps Physics & SVG Craft)
1. **Hào Quang Bản Mệnh Nhật Chủ (`day-master-aura`)**: Vầng sáng Hoàng Kim - Chu Sa thở nhịp nhàng tại cột Trụ Ngày.
2. **Mạng Lưới Từ Trường Tương Tác (`Interactive Branch Beam Focus`)**: Rê chuột hoặc chọn thẻ *Lục Hợp, Tam Hợp, Lục Xung, Tương Hình, Tương Hại*, các cột trụ liên quan lập tức phát sáng đồng bộ.
3. **La Kinh Tinh Tú Thiên Bàn (`Celestial Constellation Beam`)**: Chùm tia sao từ tâm Thái Cực phóng thẳng tới cung Địa Chi / Thần Sát đang chọn.
4. **Dòng Khí Tuần Hoàn Ngũ Hành (`Dynamic Qi Generation Stream`)**: Luồng hạt năng lượng chạy dọc vòng tròn tương sinh ngoài và mạng ngôi sao tương khắc bên trong.
5. **Sóng Sinh Khí Tự Vẽ (`Living Life-Wave SVG`)**: Đường cong Trường Sinh & Đại Vận chuyển động mềm mại kèm bong bóng giải nghĩa.
6. **Ấn Triện Chu Sa Năm Hiện Tại (`Stamp Pulse`)**: Dấu ấn Chu Sa khắc chữ Hán đóng tại năm hiện tại (2026 Bính Ngọ) trên bảng Lưu Niên.

---

## 5. Layout Safety & Anti-Slop Rules
- **Thứ tự bắt buộc trong `ChartResult`**:
  1. Thanh điều hướng nhanh 5 Đại Bản Đồ (Sticky Jump Bar)
  2. **Bản đồ 1**: Ma Trận Bát Tự 7 Tầng & Từ Trường Hình Xung Hội Hợp (`BaziMatrixMap`)
  3. **Bản đồ 2 & 3**: La Kinh Bát Tự 24 Sơn Hướng (`CelestialWheel`) & Trận Đồ Radar Ngũ Hành (`FiveElementsRadar`) (Xếp song song 2 cột ở màn hình `>=1100px`, xếp chồng ở mobile)
  4. **Bản đồ 4**: Tinh Đồ Thập Thần & Pháp Quyết Dụng Thần (`TenGodsProfileMap`)
  5. **Bản đồ 5**: Sóng Vận Trình Đại Vận & Bảng Lưu Niên 10 Năm (`LuckTimeline`)
  6. **Lời Phán Tổng Kết Mệnh Cục & Sổ Tay Chiêm Nghiệm**
- **Anti-Overflow**: Bảng ma trận có `overflow-x: auto` và ghim cột nhãn trên màn hình nhỏ (`<=650px`), đảm bảo 0px tràn ngang tài liệu.
