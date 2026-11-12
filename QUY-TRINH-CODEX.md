# Quy trình Codex sửa Mệnh Quán trên Render

> Cập nhật 10/11/2026: Phần “Lệnh triển khai sau kiểm thử ba agent” cuối tài liệu là sổ việc chuẩn cho đợt tiếp theo. Báo cáo bằng chứng: `BAO-CAO-CHROME-3-AGENT.md`. Tải xuống được loại khỏi đợt này; không xóa tính năng tải hiện có. Các phần trước giữ làm bối cảnh, không phải trạng thái đã nghiệm thu mới.

## Phần 1 — Dành cho chủ website

Mục tiêu là sửa đúng website người dùng đang mở và kiểm tra bằng thao tác thật trên Google Chrome. Quy trình này là tài liệu bàn giao. Việc triển khai từng đợt cần dựa trên yêu cầu của người dùng trong phiên thực hiện.

| Tình huống | Hiện trạng đã quan sát | Kết quả cần đạt |
| --- | --- | --- |
| Mở lá số | Có bản đồ, nhưng bản Render hiện lời giới thiệu trước và có các lời luận chưa khớp với trang nguồn | Năm bản đồ hiện ngay, rồi đến Tổng quan, Chi tiết và một đoạn Kết luận. Mỗi lời giải phân biệt rõ dữ kiện, cách hiểu và gợi ý |
| Chọn Đại vận 54–63 tuổi | Chặng ghi 2054–2063 nhưng các ô Lưu niên vẫn hiện 2022–2031 | Các ô năm thuộc đúng chặng đang xem. Phần chưa đủ dữ liệu có thông báo rõ |
| Đọc trên điện thoại | Bảng Tứ trụ vượt vùng nhìn, lời hướng dẫn còn nói “bên trái/bên phải” | Chỉ bảng cuộn ngang, cột tên hàng giữ nguyên. Điều hướng và nút dễ chạm |
| Xem thông tin chưa đủ | Trụ Giờ ghi “Chưa xác định” nhưng vẫn có thể thấy nhận định mạnh về Dụng thần | Nêu rõ phần chưa xác định, chỉ giải thích phần có căn cứ và không đoán giờ hay dựng chặng giả |

```text
[Thông tin sinh] → [Lập Bát tự]
                         ↓
[Bản đồ] [Tổng quan] [Chi tiết] [Kết luận]
  Tứ trụ → Thiên bàn → Ngũ hành → Thập thần → Đại vận
  Đại vận: [chọn chặng] → [chọn năm trong chặng]
  Tổng quan → Chi tiết → 4. Kết luận (một đoạn)
```

Cách nghiệm thu: nhập dữ liệu sinh giả có giờ rồi xem đủ năm bản đồ. Chọn một chặng ngoài chặng hiện tại, kiểm tra năm đầu và năm cuối có khớp rồi chọn một năm. Làm lại với giờ chưa biết. Cuối cùng, mở ở khung điện thoại 390 px, vuốt bảng đến cột Giờ, chuyển tới Kết luận và thử tải TXT. Không dùng dữ liệu người thật cho bài thử.

## Phần 2 — Chỉ dẫn cho Codex

<details>
<summary>Đọc thứ tự công việc, phạm vi sửa và điều kiện bàn giao</summary>

### 0. Xác định đích sửa trước khi viết mã

1. Đọc `AGENTS.md`, `.agents/PROJECT_MEMORY.md`, `DESIGN.md` và hai tệp trong `graphify-out/`. Dùng `using-agent-skills` để chọn đúng quy trình và `strict-architect-coder` để đi qua DISCOVERY → BLUEPRINT → EXECUTE → VERIFY. Bug dùng tái hiện và tìm nguyên nhân. UI dùng kiểm tra trình duyệt. Chỉ dùng quy trình phát hành khi được giao phát hành.
2. Chạy `git status --short` và `git rev-parse HEAD`. Ghi lại thư mục, commit, URL và cách khởi động. Giữ mọi thay đổi có sẵn. Báo cáo Graphify đang mô tả bản `menh-quan-font-ring`. Đối với Render, kiểm tra import thực tế và không gắn nhãn `EXTRACTED` cho quan hệ chưa có bằng chứng.
3. **Đích của các lỗi Chrome vừa báo là Render** tại `https://darkmagic.onrender.com/`. Tại revision đã quan sát, Render lấy repo gốc, giải nén `menh-quan-ritual-release/ritual-release.tar.gz` và chạy `node --import ./register.mjs ./server.mjs`. `server.mjs` phục vụ `src/atlas/` và `src/styles/ritual-atlas.css`, đồng thời gắn Atlas vào bản dựng qua tên chunk. Xác minh lại nếu cấu hình đã đổi. `menh-quan-font-ring` và `.sites-checkout` có thể dùng để đối chiếu, nhưng sửa chúng riêng lẻ không cập nhật Render. URL ChatGPT Sites là môi trường khác.
4. Trước mỗi lát cắt, ghi giả định, điều kiện nghiệm thu, danh sách tệp được sửa và hành vi cần bảo vệ. Khi gặp xung đột có thể ảnh hưởng kết quả người dùng, chỉ dừng phần phụ thuộc vào quyết định đó và tiếp tục kiểm tra phần độc lập.

### 1. Sửa theo từng lát cắt

| Lát cắt | Điểm vào và hướng sửa | Điều kiện đạt |
| --- | --- | --- |
| **A. Ngăn lời luận quá mức** | Rà renderer Atlas và nội dung phát hành thực tế. Bỏ lời khuyên sức khỏe dựa trên lá số. Viết lời khuyên tài lộc/tính cách ở dạng gợi ý tự đối chiếu. Ẩn nhãn và lời kết về Dụng thần khi quy tắc chưa được duyệt hoặc dữ liệu thiếu. Cập nhật thông tin nguồn theo đúng thứ đang hiển thị. | Màn hình và TXT thống nhất. Lá số thiếu giờ và lá số đủ giờ đều không hiển thị lời khuyên y khoa, kết luận chắc chắn về tài lộc, hoặc mục đang chờ duyệt. |
| **B. Sửa nguồn Đại vận trước khi nối giao diện** | Đọc `buildLuckTimeline`, `enrichBaziChart` và renderer `LuckTimeline` trong `src/atlas/`. Đã thấy tuổi khởi vận cố định 4, mặc định năm sinh 1995, năm hiện tại cố định 2026, gán chặng hiện tại giả và bảng cố định 2022–2031. Lấy chặng từ bộ tính có quy ước và mẫu đối chứng đã xác định, rồi gắn các năm với đúng chặng. Nếu dữ liệu đáng tin cậy chưa có trong gói, hiện trạng thái chưa đủ dữ liệu tại mục này. | Một chặng hợp lệ có khoảng năm, Can Chi và các năm khớp hợp đồng đã xác nhận. Đổi chặng đồng thời đổi danh sách năm và chi tiết. Nếu năm đang chọn nằm ngoài chặng mới, chọn năm hiện tại nếu thuộc chặng, nếu không chọn năm đầu. Không tạo nhãn “Hiện tại” khi không có chặng chứa năm đang xét. |
| **C. Sửa luồng đọc và điện thoại** | Bố cục kết quả trong `src/atlas/AtlasChartResult.mjs`, bảng và điều hướng trong Atlas, CSS trong `src/styles/ritual-atlas.css`. Hiện đủ năm bản đồ mặc định. Giữ ví dụ đọc và giải nghĩa dấu hỏi. Đưa đoạn kết xuống cuối. Làm cuộn ngang cục bộ và giữ tên hàng trên điện thoại. | Ở 320, 390, 768 và 1440 px, trang không cuộn ngang. Bảng có thể kéo tới trụ Giờ và vẫn thấy tên hàng. Điều hướng không che tiêu đề hoặc chặn bàn phím. Thứ tự kết quả khớp mẫu ở Phần 1. |

**Ranh giới dữ liệu:** giữ phép tính Can Chi hiện có nếu chưa có ca kiểm thử chỉ ra sai lệch. Mọi thay đổi quy ước lịch, giờ hoặc khởi vận phải có mẫu đối chứng độc lập và ghi giới hạn. Dữ liệu sinh chỉ phục vụ phiên xem. Không đưa ngày giờ sinh, lá số hay dữ liệu thử vào bản ghi lưu hoặc log. Giữ hợp đồng lưu, đăng nhập và kiểm tra quyền như hiện tại. Không mở rộng sang SEO, quảng cáo hoặc thay nhà cung cấp trong đợt này.

**Trạng thái cần kiểm tra:** nhập ban đầu có nhãn rõ, nhập thiếu/lỗi giữ phần đã điền, đang tính có phản hồi thực, kết quả đủ dữ liệu hiển thị bình thường, thiếu giờ hoặc thiếu chặng có thông báo đúng vị trí. Lỗi tải hoặc đăng nhập phải có cách quay lại kết quả.

### 2. Kiểm chứng bằng hai lớp

- **Kiểm tra kỹ thuật:** chạy `git diff --check` và `node --check <tệp .mjs đã sửa>`. Chạy bộ kiểm thử của đúng nơi vừa sửa. Nếu dùng bộ kiểm thử của checkout Next/Vinext để đối chiếu, ghi rõ nó không kiểm tra lớp Atlas được Render gắn vào. Với Đại vận, cần ca kiểm thử cho chặng không chứa năm hiện tại, dữ liệu thiếu và chuyển chặng khi năm cũ không còn hợp lệ.
- **Kiểm tra như người dùng:** chạy thử pipeline repo gốc bằng `node --import ./register.mjs ./server.mjs` trên một cổng local trống do Codex sở hữu, mặc định bind loopback. Mở URL đó bằng Google Chrome và thao tác qua giao diện, không dùng kết quả của script thay cho nghiệm thu Chrome. Dừng tiến trình thử sau khi xong. Nếu có sửa đóng gói, kiểm tra với bản giải nén sạch để tránh dùng `dist` cũ.
- **Ca hồi quy bắt buộc:** dùng mẫu giả **15/05/2000, 12:30, Asia/Ho_Chi_Minh** để chọn một chặng không chứa năm hiện tại và đối chiếu tiêu đề, năm đầu, năm cuối cùng lời giải năm. Dùng **âm lịch Trung Hoa ngày 12/04/2000, không biết giờ** để kiểm tra trụ Giờ chưa xác định. Kiểm tra đủ năm bản đồ, hướng dẫn thuật ngữ, kết luận, xuất và mở TXT, xem trước lưu và thoát phiên. Chỉ báo đã kiểm tra lưu hoặc quyền hai tài khoản nếu thực sự có phiên thử phù hợp và đã chạy.

### 3. Bàn giao hoặc phát hành

1. Báo rõ ba trạng thái **đã sửa local**, **đã đưa vào bản phát hành** và **đã kiểm tra trên URL Render**. Ghi bằng chứng gồm tệp sửa, kết quả kiểm tra, URL và commit. Kiểm tra diff lần cuối và cập nhật `.agents/PROJECT_MEMORY.md`.
2. Khi được giao phát hành, xác nhận đúng dịch vụ Darkmagic, branch và commit. Kiểm tra nguồn đang tải trên Render là phiên bản vừa duyệt. Giữ cấu hình `HOST=0.0.0.0`, dùng `PORT` Render cung cấp. Chờ trạng thái deploy thành công, rồi thao tác lại trên URL công khai bằng Chrome. Nếu hỏng, dùng bản Render đã xác minh gần nhất để khôi phục.
3. Việc bỏ cơ chế sửa chunk theo tên để gom về một nguồn chính là đợt riêng. Chỉ thực hiện khi đã có quy trình dựng và đóng gói tái lập được, dữ liệu mẫu đối chứng và phương án quay lại bản trước.

</details>

## Lệnh triển khai sau kiểm thử ba agent

### Phần 1 — Dành cho chủ website

**Mức sẵn sàng:** có thể bắt đầu kiểm tra và sửa theo lát cắt. Việc dựng lại gói chạy, tính đúng Đại vận và nghiệm thu điện thoại cần bằng chứng mới. Đây là kế hoạch, chưa phải chứng nhận đã sửa.

Mục tiêu là website có lời giải cụ thể, chức năng nhất quán và dễ dùng trên điện thoại. Không đặt tiêu chí “không ai nhận ra AI” vì không đo được khách quan; thay bằng khả năng người mới đọc hiểu, tìm căn cứ và thao tác được.

| Hiện tại | Sau đợt sửa |
|---|---|
| Lời giải và trạng thái duyệt mâu thuẫn | Chỉ hiện nội dung có căn cứ và trạng thái phát hành hợp lệ |
| Đại vận thiếu dữ liệu trong gói chạy | Có dữ liệu đã đối chứng hoặc giới hạn được nói đúng |
| Bản đồ xen lời giải dài | Năm vị trí bản đồ → tổng quan → chi tiết → một đoạn kết luận |
| Ngày nhập có thể nhầm theo ngôn ngữ Chrome | Ngày hệ thống đã hiểu được viết rõ trước khi tính |
| Một số kiểm tra điện thoại còn bỏ trống | Có bằng chứng Chrome ở kích thước xác định |

```text
[Nhập sinh] → Ngày được hiểu: ngày 4 tháng 3 năm 2000
                         [Lập Bát tự]
                              ↓
[Bản đồ] [Tổng quan] [Chi tiết] [Kết luận]
01 Tứ trụ · 02 Thiên bàn · 03 Ngũ hành · 04 Thập thần · 05 Đại vận
     chú thích ngắn + thuật ngữ [?] + [Đọc giải thích]
Tổng quan → Chi tiết → 4. Kết luận (một đoạn)
                       [Xem trước nội dung lưu]
```

Hành trình nghiệm thu: người mới nhập ngày không đối xứng như 04/03, kiểm tra ngày được hiểu, lập lá số, nhìn đủ các vị trí bản đồ, mở giải thích thuật ngữ, chuyển nhanh III/IV, đọc kết luận và mở xem trước lưu. Làm lại khi không biết giờ. Tải xuống không nằm trong đợt nghiệm thu này.

### Phần 2 — Quy trình cho AI triển khai

<details>
<summary>Phạm vi, sổ việc, các cổng kiểm tra và bàn giao</summary>

#### P0. Đọc đúng nguồn và ghi trạng thái

1. Áp dụng strict-architect-coder; lập việc bằng project-master-planner/planning-and-task-breakdown; phản biện bằng ultrathinking. Khi sửa UI đọc ui-ux-design-master; khi kiểm thử đọc playwright-web-tester và tài liệu mobile liên quan. Honest-advisor dùng để phân biệt quan sát và nhận xét. Test-sync-skill chỉ kiểm tra đọc skill, không là cổng QA.
2. Đọc AGENTS, PROJECT_MEMORY, DESIGN, GRAPH_REPORT, graph.json, quy trình này và báo cáo ba agent. Nếu output bị cắt phải đọc tiếp phần còn thiếu; truy vấn graph theo vùng cần sửa thay vì đổ toàn JSON vào ngữ cảnh.
3. Ghi `git status --short`, `git rev-parse HEAD`, URL local/Render, lệnh chạy, manifest của đúng checkout và các thay đổi có sẵn. Revision gốc lần audit là `0e777445945cca2dd167f6c793ba27f1f1903659` cộng diff local; xác minh lại trước làm.
4. Graphify cũ mô tả checkout Next/Vinext, không chứng minh các cạnh của Atlas root. Đối chiếu import thực tế: server → AtlasChartResult → enrichment/five maps/CSS; không tự nhận cạnh EXTRACTED.
5. Sổ việc duy nhất là bảng T20–T28 dưới đây. Cập nhật trạng thái/bằng chứng tại bảng, không tạo tracker hoàn thành song song.

#### Quyết định và giới hạn

- D20: giữ nguồn tính hiện hành, sửa đường truyền dữ liệu trước; không tự viết công thức khởi vận mới từ phỏng đoán. Nếu nguồn hiện hành sai, tạo ca đối chứng rồi mới sửa thuật toán.
- D21: chưa duyệt thì ẩn lời luận tương ứng, vẫn hiển thị dữ kiện hợp lệ. AI không tự đánh dấu reviewed; chủ sản phẩm cung cấp người duyệt độc lập trước mở lời luận đó.
- D22: giữ native date picker nếu phù hợp, thêm xác nhận ngày đã hiểu. Không đổi nhãn thành dd/mm/yyyy trong khi native control thực tế nhập mm/dd/yyyy.
- D23: mobile-first, giữ chủ đề tối/chu sa và đồ hình; ưu tiên chữ rõ trước thêm hiệu ứng. Không WebGL hoặc tăng chuyển động trong đợt này.
- D24: bỏ kiểm thử tải xuống theo yêu cầu, giữ chức năng đang có. Không thêm AI, SEO, quảng cáo, dịch vụ mới, migration hoặc đổi lưu trữ.
- Ranh giới bảo vệ: đăng nhập/quyền sở hữu/giới hạn 12 KB, 30 bản và dữ liệu sinh trong phiên; không ghi dữ liệu sinh vào log hoặc payload lưu. Không chép nguyên lá số vào ghi chú mặc định.

#### Phạm vi tệp và điểm tích hợp

Nhóm Atlas được phép sửa theo nhiệm vụ: `src/atlas/AtlasChartResult.mjs`, `bazi-engine-ext.mjs`, `BaziMatrixMap.mjs`, `CelestialWheel.mjs`, `FiveElementsRadar.mjs`, `TenGodsProfileMap.mjs`, `LuckTimeline.mjs`, `GrandMasterMap.mjs`, `src/styles/ritual-atlas.css`, các test Atlas, DESIGN và memory.

Biểu mẫu/bộ tính/trang nguồn nằm ở checkout nguồn, ví dụ `app/components/BirthForm.tsx`, `lib/bazi.ts`, `lib/contracts.ts`, trang cơ sở và thành phần ghi chú. Phải xác minh đúng checkout được đóng gói trước khi sửa; không đồng loạt đồng bộ các bản sao. Chỉ mở rộng danh sách tệp khi đã ghi lý do và dependency thực tế.

`server.mjs` và archive phát hành chỉ sửa trong T22 khi đã tái lập build. Bảo vệ backend, database, auth, demo và tệp công việc ngoài phạm vi. Không dùng sửa chunk minified theo chuỗi làm cách thêm dữ liệu mới nếu chưa có kiểm thử bảo vệ bản dựng. Không nâng cấp kiến trúc tổng thể cùng đợt.

#### Sổ việc theo thứ tự

Công sức là ước lượng kỹ sư làm việc tập trung, không gồm thời gian chờ duyệt; điều chỉnh sau T20.

| ID | Việc/chủ trì | Phụ thuộc | Nghiệm thu và bằng chứng | Công sức | Trạng thái |
|---|---|---|---|---|---|
| T20 | Tái hiện C01–C07 / kỹ thuật+QA | P0 | Ghi nguồn chạy, screenshot/steps, xác nhận hoặc bác bỏ nút cuộn và overflow; không sửa theo giả thuyết chưa tái hiện | 0,5–1 ngày | Đạt một phần: đã đối chiếu Chrome local và báo cáo ba agent; viewport mobile, auth và overflow gốc còn chưa đo lại |
| T21 | Biên tập và chặn nội dung chưa duyệt / kỹ thuật+nội dung | T20 | Rà cả màn hình/preview; Water/Chính tài/Thần Sát không mâu thuẫn trạng thái nguồn; không dùng disclaimer để hợp thức hóa lời khẳng định; nội dung chờ duyệt có trạng thái rõ | 1–2 ngày + chờ duyệt | Đang làm: bỏ nhãn tính cách cố định, loại năm sinh giả và sửa trạng thái thiếu Đại vận; cần người duyệt nội dung rà toàn bộ câu diễn giải |
| T22 | Tái lập gói chạy và nối daYun / kỹ thuật | T20 | Build sạch tạo ra đúng hợp đồng, adapter chỉ đọc dữ liệu thật; chọn chặng đổi đúng năm; thiếu giờ/giao tiết nêu giới hạn; mẫu đối chứng có xuất xứ | 2–4 ngày | Chưa làm; phụ thuộc nguồn/mẫu |
| T23 | Sắp bản đồ, tóm tắt, chi tiết và điều hướng / frontend | T20,T21 | Mỗi bản đồ dựng một lần; các lựa chọn vẫn đồng bộ; III/IV tới đúng mục sau chuyển động và focus; một đoạn kết cuối; thiếu map V có vùng thông báo | 1–3 ngày | Chưa làm |
| T24 | Chú thích thuật ngữ, giải nghĩa bản đồ, nguồn gọn / frontend+nội dung | T21,T23 | [?] chạm/bàn phím được, giải thích bằng ví dụ ngắn; mỗi hình nói rõ nhìn gì/có nghĩa gì/không suy được gì; nguồn details nhỏ, không che map | 1–2 ngày | Đạt một phần: đã thêm bảng thuật ngữ mở bằng `details/summary` trước các bản đồ; phần giải nghĩa sâu ngay trong từng bản đồ và nguồn gọn cần rà tiếp |
| T25 | Ngày và lỗi theo trường bằng tiếng Việt / frontend | T20 | Thử ngày 04/03 và 13/04, ngày sai, lịch âm/tháng nhuận, tuổi chưa xác nhận; ngày hiểu được hiện bằng tháng viết rõ; lỗi giữ dữ liệu/focus/aria-describedby | 0,5–1,5 ngày | Đạt code + kiểm tra: `pnpm exec tsc --noEmit` và 41 test source đạt; build source đạt. Chrome thực tế chưa hoàn tất vì điều hướng dev bị timeout |
| T26 | Xem trước lưu tự nhiên / frontend | T21 | Ghi chú tự viết mặc định trống; tóm tắt không bịa tính cách, không chép ngày/lá số; không bắt hành động/thời hạn mới; khách vẫn có đường quay lại | 0,5–1 ngày | Đạt code review source: `SummaryEditor` giữ takeaway/note rỗng mặc định cho bản mới, bản Bát tự không ép hành động; payload vẫn cần nghiệm thu trình duyệt/auth |
| T27 | Mobile, tương phản và QA tích hợp / QA+frontend | T22–T26 | Chrome 320/390/768/1101/1440, bàn phím, reduced motion, đo màu thực; lỗi mạng/phiên thiếu dữ liệu; báo rõ test quyền chưa chạy | 1–3 ngày | Chưa đạt; mới có kiểm tra Atlas local, chưa có viewport đầy đủ, contrast đo thực hoặc auth |
| T28 | Bàn giao và phát hành đúng nguồn / kỹ thuật+chủ sản phẩm | T27 | Diff sạch theo phạm vi, tài liệu/bằng chứng/commit/gói duyệt, smoke local; phát hành khi được giao và smoke Render, có rollback | 0,5–1 ngày | Chưa làm; không deploy bản chưa build/kiểm tra |

Đường găng: T20 → T21/T22 → T23 → T24/T26 → T27 → T28. T25 có thể làm độc lập sau T20. Không giả định có nhiều kỹ sư. Chủ sản phẩm duyệt nội dung, quyết định phát hành và cung cấp tài khoản thử nếu cần; không để AI tự đặt người duyệt.

#### Chu trình bắt buộc cho mỗi nhiệm vụ

1. Ghi điều kiện đạt, tệp sửa và ca tái hiện. Với lỗi dữ liệu, tạo test hành vi thất bại trước; không tạo test chỉ dò chuỗi để thay kiểm chứng hành vi.
2. Sửa lát cắt nhỏ, kiểm tra ngay. Giữ thay đổi người dùng; không reset worktree, không add toàn bộ.
3. Review diff theo độ đúng, dễ hiểu, riêng tư, hiệu năng và hồi quy. Khi có bất thường dừng phần phụ thuộc, chẩn đoán và thêm ca bảo vệ.
4. Lưu bằng chứng; đánh dấu Đạt/Chưa đạt/Chưa kiểm tra, không gộp “không test được” vào đạt. Cập nhật bảng rồi mới chuyển bước.

#### Ma trận năm trạng thái

| Trạng thái | Phải có |
|---|---|
| Ban đầu | Nhãn, định dạng ngày đã hiểu, unknown hour, điều hướng và giới hạn rõ |
| Đang xử lý | Trạng thái thật và hủy hiện có; không chờ giả; giữ đầu vào |
| Chưa đủ | Lỗi đúng trường; thiếu dữ liệu map nằm đúng vị trí, không có giá trị thay thế |
| Lỗi | Giữ kết quả đã có, thử lại/quay lại được; không lộ log/dữ liệu riêng |
| Hoàn tất/giới hạn quyền | Đọc không cần login; preview rõ; khách biết vì sao cần login khi lưu; lỗi quyền không lộ nội dung |

#### Cổng kỹ thuật và Chrome

- Root: `git diff --check`, `node --check` từng .mjs đã sửa, `node --test tests/*.test.mjs`. Đọc scripts trước chạy; root hiện không có package.json nên không tuyên bố npm build root đạt.
- Checkout nguồn: chạy typecheck/test/build theo manifest thực tế nếu sửa nguồn hoặc T22. Bộ test checkout không thay cho test lớp Atlas runtime.
- Chạy root runtime ở cổng local trống, loopback. Nếu kiểm tra archive thì dùng thư mục giải nén sạch đã kiểm tra đích; không dùng dist cũ làm bằng chứng build mới.
- Chrome là nghiệm thu người dùng bắt buộc. Dùng role/label, đợi trạng thái thay vì sleep. Đo sau khi font ổn định; kiểm tra thanh cuộn sau animation settle, không từ một ảnh đang chuyển.
- Mẫu giả: 2000-05-15 12:30 HCM; 1995-11-02 06:15 HCM; 1988-02-29 không giờ; ngày không đối xứng; lunar Chinese UTC+8. Không gọi các mẫu khác nhau là đối chứng độ đúng. Mẫu lịch pháp độc lập phải có nguồn, quy ước, độ phân giải và hồ sơ sai khác.
- Đại vận: chọn chặng xa hiện tại → danh sách năm thuộc chặng, năm đang chọn được reset đúng; không có chặng chứa năm hiện tại thì không gắn hiện tại. Thiếu nguồn thì không phát hành phần tính mới.
- Mobile: document không tràn; bảng cuộn cục bộ tới Giờ, tên hàng còn đọc được. Không dùng overflow clip toàn trang để che lỗi mất nội dung; tìm nguyên nhân kích thước. Nút ít nhất 44px theo quy chuẩn dự án.
- Chữ thường tương phản ít nhất 4,5:1, chữ lớn và ranh giới cần nhận biết 3:1, đo cả nền sáng nhất/selected/hover/focus/disabled; không tuyên bố AA/AAA chỉ bằng nhìn ảnh.
- Chú thích hỏi: mở bằng chạm/Enter/Space, Escape đóng, focus không mất; không chỉ hover. Giảm chuyển động tĩnh, không có scroll nhảy bất ngờ.
- Nếu Chrome/viewport lỗi: ghi ca còn thiếu, không thay bằng đọc code rồi nghiệm thu UI. Dừng tuyên bố hoàn thành T27 nhưng tiếp tục các việc độc lập.
- Lưu/đăng nhập: kiểm tra guest preview trong phạm vi; muốn nghiệm thu quyền đọc/xóa phải có tài khoản thử và thực hiện thật. Không lưu dữ liệu người thật vào bài test. Downloads ngoài phạm vi.

#### Phản biện và tiêu chí chất lượng

| Rủi ro | Dấu hiệu sớm | Xử lý |
|---|---|---|
| Đổi một câu nhưng lời cũ vẫn còn renderer khác | Nguồn ghi chờ duyệt, preview vẫn có lời phán | Kiểm tra tất cả consumer nội dung và cùng một bộ quy tắc phát hành |
| Rebuild thay hash làm Atlas không được mount | Local dist cũ chạy tốt, archive sạch hỏng | Smoke build sạch qua root runtime; kiểm tra chunk wiring trước đóng gói |
| Tăng cảnh báo làm mất giá trị đọc | Người thử chỉ nhớ disclaimer | Giải thích dữ kiện cụ thể trước; gộp giới hạn tại chỗ cần thiết |
| “Hết chất AI” thành trang trí dày | Người dùng không hiểu đồ hình | Dùng bài đọc hiểu với 3–5 người thật; hỏi họ diễn đạt lại, không dẫn dắt |
| Báo cáo agent thành nghiên cứu thị trường | Tuyên bố mọi người thích/hiểu | Ghi rõ mô phỏng; chấp nhận phản hồi trái kỳ vọng |

Phương án chọn: sửa tính đúng và sự nhất quán trước, giữ bản sắc hiện tại. Làm lại toàn giao diện được hoãn vì chưa có bằng chứng cần thiết. Thay đổi quyết định nếu kiểm tra người thật cho thấy nội dung đã rõ nhưng bố cục vẫn cản hoàn thành; lúc đó thiết kế lại phần gây cản, không toàn site.

#### Bàn giao và vận hành

Tài liệu bàn giao phải nêu local đã sửa gì, test nào đạt, ca nào chưa kiểm tra, commit/gói nào sẵn sàng và Render đã/chưa cập nhật. Khi được giao phát hành: đúng dịch vụ/branch/commit, giữ HOST 0.0.0.0 và PORT hệ thống, smoke UI sau deploy. Khi lỗi tính hoặc dữ liệu xác nhận: dừng phiên mới theo cơ chế đã có, rollback về bản xác minh gần nhất, giữ quyền đọc/xóa bản lưu. Không giả định công tắc hoạt động nếu chưa diễn tập.

Không có migration trong phạm vi này. Hosting, hỗ trợ, duyệt nội dung và tài khoản QA là đầu vào vận hành; không tự chi tiền hoặc mở dịch vụ. Sau VERIFY cập nhật memory bằng kết quả thật, DESIGN bằng quyết định UI, bảng việc bằng trạng thái thật. Giữ người duyệt độc lập trước thử kín; phát hành local không đồng nghĩa đã sẵn sàng mời người dùng.

</details>
