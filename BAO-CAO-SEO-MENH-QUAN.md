# Báo cáo và kế hoạch SEO Mệnh Quán

Ngày 10/11/2026 · Phạm vi ban đầu là Google Tìm kiếm tại Việt Nam, ưu tiên điện thoại. Các mốc dưới đây tính từ ngày xác nhận bản công khai.

**Cập nhật Search Console ngày 10/11/2026.** Google đã xác minh quyền sở hữu địa chỉ Render, đọc được trang chủ trong kiểm tra trực tiếp và báo **Indexing requested** sau khi gửi yêu cầu. Trước lúc gửi, trang chủ chưa có trong chỉ mục Google. Việc lập chỉ mục và thứ hạng đang chờ dữ liệu mới. Giữ tệp xác minh trên bản phát hành để duy trì quyền sở hữu.

## Phần 1 — Kế hoạch dành cho chủ website

**Mục tiêu đầu tiên là để khách gõ “Mệnh Quán” hoặc “menh quan” và nhận ra đúng website.** Trong thời gian đầu, dùng cụm **“Mệnh Quán Bát tự”** khi giới thiệu để khách có một cách tìm rõ hơn. Sau đó mở rộng sang **“lập lá số Bát tự”**, nhóm có thể đem về khách chưa biết thương hiệu. Trang đầu là mục tiêu theo từng cụm tìm kiếm. Google quyết định vị trí và thời điểm hiển thị. [Hướng dẫn SEO của Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)

### 1. Hiện trạng và mức độ chắc chắn

| Hạng mục | Đã biết | Hệ quả |
|---|---|---|
| Địa chỉ công khai | [Bản Render do bạn cung cấp](https://darkmagic.onrender.com/) trả 200 khi truy cập không đăng nhập. Địa chỉ ChatGPT Sites cũ trả 401 khi kiểm tra từ ngoài. | Dùng địa chỉ Render làm mốc đo. Kiểm tra URL chính xác này trong Search Console. [Điều kiện lập chỉ mục](https://developers.google.com/search/docs/essentials/technical) |
| Tiêu đề | Trang chủ Render đang dùng “Mệnh Quán · Hiểu mình, thuận đường đi”. Mô tả có nhắc Bát tự. Tiêu đề lớn giới thiệu lợi ích chung, còn HTML cũng chứa một tiêu đề trạng thái đang tải. | Đưa cụm “Lập lá số Bát tự” vào tiêu đề trang và tiêu đề chính. Dùng lời hiện tại làm câu giới thiệu. [Cách Google tạo tiêu đề](https://developers.google.com/search/docs/appearance/title-link) |
| Nội dung | Trang Cơ sở luận giải và Về Mệnh Quán trên Render đều trả 200. Mã dự án có năm đồ bản. | Tận dụng đồ bản và lá số mẫu của chính web làm nội dung hướng dẫn. |
| Khám phá trang | `/robots.txt` và `/sitemap.xml` trả 404. Trong HTML trang chủ trả về không thấy canonical, chỉ dẫn noindex hoặc dữ liệu có cấu trúc WebSite. | Xác minh lập chỉ mục trong Search Console trước. Sau đó bổ sung địa chỉ chuẩn và sitemap để thống nhất các trang cần giới thiệu với Google. [Câu hỏi thường gặp về lập chỉ mục](https://developers.google.com/search/help/crawling-index-faq) |
| Cạnh tranh | Mẫu tìm kiếm công khai có công cụ Bazifu và nhiều bài đọc lá số có ví dụ. Mẫu này chỉ cho thấy dạng trang cạnh tranh. | Cụm chung cần nội dung và công cụ có lý do rõ ràng để người dùng chọn. [Bazifu](https://bazifu.net/) · [Ví dụ bài hướng dẫn](https://www.bat-tu.vn/blog/cach-doc-tu-tru-tung-buoc) |
| Dữ liệu hiệu suất | Kiểm tra URL cho thấy trang chủ chưa được lập chỉ mục trước khi gửi yêu cầu. Kiểm tra trực tiếp cho thấy Google đọc được trang. | Theo dõi trạng thái trong Search Console và lấy số liệu nền theo cụm từ khi có lượt hiển thị. |

### 2. Chọn cụm từ ngắn và trang đích

| Ưu tiên | Người dùng có thể gõ | Trang cần xuất hiện | Mục tiêu |
|---|---|---|---|
| 1 | `mệnh quán`, `menh quan` | Trang chủ | Gõ hai từ vẫn nhận ra đúng web. Đo riêng bản có dấu và không dấu nếu có đủ dữ liệu. |
| 1 | `mệnh quán bát tự`, `menh quan bat tu` | Trang chủ | Cụm ngắn có thêm ngữ cảnh. Dùng tên có dấu trên trang và trong bài giới thiệu. |
| 2 | `lập lá số bát tự`, `lá số bát tự`, `lập lá số bát tự miễn phí` | Trang chủ nếu công cụ nằm ở đó và miễn phí đã được xác nhận | Đưa khách thẳng đến thao tác lập lá số. |
| 3 | `cách đọc lá số bát tự`, `cách đọc ngũ hành bát tự` | Bài hướng dẫn cho từng nhu cầu | Cho khách đọc ví dụ cụ thể rồi tự lập lá số. |

Các biến thể có dấu và không dấu dùng chung một trang. Cụm **“bát tự”** rất rộng và có nhiều mục đích tìm kiếm, nên để sau khi có dữ liệu. Tên miền riêng ngắn có lợi cho việc đọc, nhớ và chia sẻ nếu bạn muốn đầu tư sau này. Trước mắt có thể dùng địa chỉ công khai ổn định bạn đã có, giúp tránh một đợt chuyển địa chỉ ngay lúc cần đo. [Hướng dẫn SEO của Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) · [Cách Google chọn URL đại diện](https://developers.google.com/search/docs/crawling-indexing/canonicalization)

### 3. Trải nghiệm trước và sau

| Tình huống | Hiện trạng | Đích của kế hoạch |
|---|---|---|
| Bạn bè nghe tên và muốn tìm web | Chưa đo được kết quả theo cụm ngắn. | Gõ “Mệnh Quán” hoặc “menh quan” và nhận ra trang chủ. |
| Khách chưa biết tên | Đã có công cụ và đồ bản trong dự án. | Có thể tìm thấy công cụ hoặc bài hướng dẫn qua nhu cầu cụ thể. |
| Bấm vào trên điện thoại | Cần thử lại trên bản đang phát hành. | Thấy ngay mình có thể lập lá số hoặc xem một ví dụ. |

```text
Google  [ menh quan bat tu                    ]
        Mệnh Quán – Lập lá số Bát tự miễn phí
        Xem Tứ trụ, Ngũ hành và cách đọc kết quả.
                          ↓
Mệnh Quán
Lập lá số Bát tự
[ Lập lá số ]    [ Xem lá số mẫu ]
Cách đọc năm đồ bản · Cơ sở luận giải
```

Phác thảo minh họa đích trải nghiệm. Dùng chữ “miễn phí” sau khi xác nhận đúng với bản công khai. Tên và mô tả Google thực tế có thể khác bản đề xuất.

1. Khách gõ cụm ngắn trong trình duyệt và nhận ra **Mệnh Quán** qua tên, biểu tượng và mô tả.
2. Khách mở đúng trang. Người muốn tự thử bấm **Lập lá số**. Người cần hiểu trước mở **Xem lá số mẫu**.
3. Nếu thiếu dữ liệu, form hướng dẫn ngay tại trường cần bổ sung. Sau khi lập xong, khách thấy các đồ bản và có đường dẫn đến bài hướng dẫn.

### 4. Lịch triển khai và nghiệm thu

| Thời điểm | Việc cần làm | Cách kiểm tra |
|---|---|---|
| Ngày 1–3 | Dùng `https://darkmagic.onrender.com/` để tạo thuộc tính Tiền tố URL trong Search Console, xác minh quyền sở hữu rồi kiểm tra URL trang chủ. Thử đường đi tới form trên điện thoại. | Báo cáo kiểm tra trực tiếp cho biết Google có thể truy cập. Lưu lại trạng thái đã lập chỉ mục và URL Google chọn nếu có. |
| Tuần 1 | Đồng nhất tên Mệnh Quán, tiêu đề, lời giới thiệu và đường dẫn chính. Gửi danh sách các trang công khai cần Google tìm thấy. Yêu cầu lập chỉ mục trang chủ sau khi kiểm tra. | Google nhìn thấy tên web, đoạn giới thiệu và đường dẫn nội bộ. Trang mẫu công khai chỉ dùng dữ liệu hư cấu. |
| Tuần 2–3 | Làm một bài “Cách đọc lá số Bát tự cho người mới” dùng năm đồ bản của Mệnh Quán. Có ảnh chú thích, thứ tự xem và bước tự thử. Mời 5 người tìm bằng cụm ngắn và thử thao tác trên điện thoại. Chia sẻ ví dụ vào nơi cho phép. | Ghi cụm mỗi người đã gõ, họ có nhận ra đúng trang và có lập được lá số không. Bài hướng dẫn dẫn về công cụ và trang chủ dẫn đến bài. |
| Tuần 4 | Đọc báo cáo 28 ngày theo nhóm thương hiệu, công cụ và hướng dẫn. Nếu dữ liệu ít, lưu làm mốc đầu và kéo dài thời gian quan sát. | Có bảng lượt hiển thị, lượt nhấp, tỷ lệ nhấp và vị trí trung bình cho từng nhóm, kèm URL xuất hiện. |
| Tuần 5–8 | Dựa vào truy vấn thật để sửa tiêu đề, làm rõ trang đích hoặc viết thêm một bài chuyên đề. Ưu tiên câu hỏi đã được người dùng hỏi hoặc đã có hiển thị. | So hai kỳ 28 ngày tương đương khi đủ dữ liệu. Xem mục tiêu tốp 10 cho nhóm thương hiệu theo xu hướng, kèm lượt nhấp và trang xuất hiện. |

[Kiểm tra URL trong Search Console](https://support.google.com/webmasters/answer/9012289) · [Báo cáo hiệu suất](https://support.google.com/webmasters/answer/7576553) · [Nội dung hữu ích cho người đọc](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

### 5. Đọc số liệu và chọn việc tiếp theo

Mỗi tuần ghi lại **kỳ đo, quốc gia, nhóm truy vấn, URL xuất hiện, lượt hiển thị, lượt nhấp, tỷ lệ nhấp, vị trí trung bình và thay đổi đã phát hành**. Nếu có đo hành vi trong web, thêm số người bắt đầu và số lượt lập lá số thành công. Search Console đo lượt đến từ Google. Số lượt lập lá số cần đo riêng ở mức sự kiện tổng hợp, loại trừ thông tin sinh và nội dung lá số.

- **Trang chủ chưa được lập chỉ mục.** Xử lý kết quả kiểm tra URL trước. Xem lỗi truy cập, chỉ dẫn lập chỉ mục hoặc Google đang chọn địa chỉ khác.
- **Trang chủ đã được lập chỉ mục, dữ liệu tên thương hiệu còn ít.** Tiếp tục dùng cách gọi thống nhất “Mệnh Quán Bát tự” khi giới thiệu. Kiểm tra lại sau khi có thêm lượt hiển thị.
- **Có hiển thị nhưng ít lượt nhấp.** Xem tiêu đề Google thực tế, vị trí và trang được trả về. Thử làm rõ lợi ích trong tiêu đề khi kết quả hiện tại mơ hồ.
- **Có lượt nhấp nhưng ít lượt lập lá số.** Kiểm tra đường dẫn đến công cụ và bước nhập liệu trên điện thoại trước khi mở rộng nội dung.
- **Cụm chung có tín hiệu tốt hơn nhóm hướng dẫn.** Ưu tiên hoàn thiện trang công cụ. Nếu bài hướng dẫn có nhiều lượt tìm phù hợp, phát triển thêm từ câu hỏi người dùng đang hỏi.

Vị trí trung bình là số đo qua nhiều lần hiển thị. Một lần tự tìm hoặc vài lượt hiển thị chỉ là tín hiệu ban đầu. [Cách Google tính vị trí](https://support.google.com/webmasters/answer/7042828)

**Khuyến nghị đầu tư.** Bắt đầu bằng trang chủ và một bài hướng dẫn tốt. Lợi ích là người biết tên tìm dễ hơn, đồng thời có đường cho người mới tiếp cận. Chi phí chính là thời gian làm nội dung, kiểm tra bản công khai và chờ đủ dữ liệu. Dành giai đoạn đầu cho tăng trưởng và để thử quảng cáo sang sau khi có số nền. Các gói bán liên kết hoặc nhồi từ khóa có thể vi phạm chính sách Google. [Chính sách chống spam của Google](https://developers.google.com/search/docs/essentials/spam-policies)

## Phần 2 — Chi tiết triển khai

<details>
<summary>Phạm vi kỹ thuật, các trạng thái và cách xác minh</summary>

**Graphify.** Báo cáo hiện có lập cho menh-quan-font-ring, Community 10 “Homepage, Editorial Design & Sources” chứa metadata, SourcesPage và ClientApp. Community 11 chứa ChartResult và các đồ bản. Đây là bản đồ định hướng, cần đối chiếu lại mã nguồn của bản đang phát hành. Hai điểm nối cần kiểm tra là trang chủ gọi ClientApp và trang Cơ sở luận giải gọi InformationPage. Các nút trung tâm cần tránh đụng đến khi làm SEO gồm cn(), Button(), EightChar, calculateChart() và getChatGPTUser().

**Phạm vi file dự kiến.** Sau khi xác nhận checkout dùng để build bản công khai, giới hạn đợt đầu vào app/layout.tsx, app/page.tsx, app/components/ClientApp.tsx, app/robots.ts, app/sitemap.ts và app/cach-doc-la-so-bat-tu/page.tsx nếu cần bài mới. File mô tả quyền riêng tư chỉ bổ sung vào phạm vi nếu triển khai đo hành vi riêng. Nếu Render phục vụ bản dist đóng gói, xác minh và dùng đúng quy trình tạo bản phát hành. Tránh sửa trực tiếp các file sinh ra. Báo cáo này chưa áp dụng thay đổi lên website.

**Việc kỹ thuật theo thứ tự**

1. Xác định nguồn build và URL chuẩn HTTPS. Kiểm tra cả trạng thái HTTP, HTML và chỉ dẫn lập chỉ mục trên bản công khai. Nếu có nhiều địa chỉ công khai cùng nội dung, dùng canonical, liên kết nội bộ và sitemap thống nhất. Chỉ lên kế hoạch chuyển hướng khi có quyền quản lý địa chỉ tương ứng.
2. Đưa tiêu đề, mô tả và tên website nhất quán vào HTML trang chủ. Có thể khai báo WebSite JSON-LD với tên Mệnh Quán và URL chuẩn để Google hiểu tên mong muốn. Giữ một H1 rõ nghĩa. [Tên website trên Google](https://developers.google.com/search/docs/appearance/site-names)
3. Phục vụ robots.txt và sitemap.xml. Sitemap chỉ liệt kê URL công khai chuẩn trả 200. Kiểm tra quyền truy cập kết quả cá nhân và nhật ký độc lập với robots.txt. Không đưa dữ liệu sinh vào URL, sitemap hay hệ thống đo lường.
4. Thêm bài hướng dẫn hiển thị trực tiếp qua URL và các liên kết giữa bài với công cụ. Chỉ tái sử dụng nội dung và lá số minh họa phù hợp công khai.
5. Kiểm tra bản phát hành bằng `curl.exe -I` với URL thật, xem HTML và các URL robots/sitemap. Chạy `npx tsc --noEmit` và lệnh build đã xác nhận trong checkout phát hành. Mở tab ẩn danh trên điện thoại, đi từ trang chủ tới công cụ rồi lập lá số mẫu. Kiểm tra URL trong Search Console sau khi phát hành và ghi kết quả vào PROJECT_MEMORY khi nghiệm thu phần triển khai.

| Trạng thái | Kiểm tra |
|---|---|
| Ban đầu | Trang chủ công khai hiển thị tên và nút lập lá số rõ ràng. |
| Đang tải | Liên kết mở đúng nơi. Nội dung giới thiệu có trong HTML và chỗ tải form có phản hồi. |
| Chưa đủ | Form báo trường thiếu. Người dùng vẫn có thể mở bài hướng dẫn hoặc mẫu. |
| Lỗi | URL sai trả 404. Trang cá nhân cần quyền truy cập phù hợp. Trang công khai không bị chặn nhầm. |
| Hoàn tất | Khách hoàn thành lá số mẫu. Trang chủ và bài hướng dẫn trả 200 và được Google kiểm tra truy cập thành công. |

</details>
