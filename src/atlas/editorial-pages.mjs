/**
 * Server-rendered AdSense-compliant legal & SEO editorial pages for Mệnh Quán.
 * Uses Huyền Vũ Chu Sa design tokens and responsive mobile-first layout (320px+).
 */
import { MONETIZATION_CONFIG } from './monetization-config.mjs';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function normalizeBaseUrl(baseUrl) {
  const clean = String(baseUrl || 'https://darkmagic.onrender.com').trim();
  return clean.endsWith('/') ? clean.slice(0, -1) : clean;
}

export const LIBRARY_ARTICLES = [
  {
    slug: 'ngu-hanh-trong-bat-tu',
    title: 'Ngũ Hành trong Bát Tự: Hiểu về sự cân bằng thay vì đi tìm "thiếu hay dư"',
    category: 'Nền tảng Bát Tự',
    readingTime: '5 phút đọc',
    publishedAt: '2026-11-10',
    description:
      'Giải mã vai trò của Kim, Mộc, Thủy, Hỏa, Thổ trong lá số Bát Tự dưới góc nhìn điều tiết khí chất và thói quen sống.',
    sections: [
      {
        heading: '1. Ngũ Hành không phải là điểm số để so sánh hơn thua',
        paragraphs: [
          'Nhiều người khi mới tiếp cận Bát Tự thường lo lắng khi thấy biểu đồ của mình có một hành nào đó chiếm tỷ lệ thấp hoặc xuất hiện nhiều hơn mức trung bình. Thực chất, trong học thuật cổ điển phương Đông, năm yếu tố Kim, Mộc, Thủy, Hỏa, Thổ không đại diện cho sự giàu nghèo hay may rủi cố định, mà mô tả cách năng lượng và khí chất vận hành theo mùa sinh.',
          'Một người sinh vào giữa mùa hạ thường mang sắc thái Hỏa khí vượng, giống như khu vườn dưới nắng trưa cần dòng nước mát điều hòa. Ngược lại, lá số sinh vào cuối thu hoặc đầu đông lại mang nhịp Thủy - Kim sâu lắng, cần chút ấm áp để khơi mở sự linh hoạt trong giao tiếp và hành động.',
        ],
      },
      {
        heading: '2. Sinh - Khắc là cơ chế giữ nhịp tự nhiên',
        paragraphs: [
          'Tương sinh (Mộc sinh Hỏa, Hỏa sinh Thổ, Thổ sinh Kim, Kim sinh Thủy, Thủy sinh Mộc) biểu thị dòng chảy hỗ trợ, nuôi dưỡng và chuyển hóa liên tục. Tuy nhiên, nếu chỉ có sinh mà thiếu khắc, hệ thống rất dễ rơi vào trạng thái quá tải hoặc lan man thiếu điểm dừng.',
          'Tương khắc trong Bát Tự vì thế đóng vai trò như đường biên và khuôn khổ. Giống như kim loại giúp tỉa tót cành cây mọc đúng hướng, hay bờ đê giúp dòng sông chảy đúng luồng, cơ chế khắc chế giúp cá nhân nhận diện giới hạn cần thiết để tập trung nguồn lực vào việc thực sự có giá trị.',
        ],
      },
      {
        heading: '3. Đọc sự thiên lệch để tự quan sát nhịp sống hằng ngày',
        paragraphs: [
          'Khi quan sát biểu đồ Ngũ Hành trên Mệnh Quán, câu hỏi hữu ích nhất không phải là "mình thiếu hành nào để mua vật phẩm bổ sung", mà là "xu hướng hành vi nào đang lặp lại quá mạnh trong cách mình làm việc và phản ứng với áp lực".',
          'Chẳng hạn, sắc thái Hỏa mạnh thường đi kèm tốc độ, nhiệt huyết nhưng dễ vội vàng; sắc thái Thổ dày tạo độ tin cậy và bền bỉ nhưng đôi khi ngại thay đổi đột ngột; sắc thái Thủy nổi bật mang lại chiều sâu quan sát nhưng dễ suy nghĩ nhiều. Khi nhận diện rõ điểm mạnh và điểm quá đà của từng khí chất, bạn có thể chủ động sắp xếp môi trường làm việc, lịch nghỉ ngơi và cách phối hợp với người xung quanh một cách hài hòa hơn.',
        ],
      },
      {
        heading: '4. Thực hành chiêm nghiệm cùng lá số cá nhân',
        paragraphs: [
          'Thay vì xem Ngũ Hành như một bản án tĩnh, hãy dùng biểu đồ năm hành như một chiếc gương phản chiếu theo thời gian. Khi bước sang từng năm mới hoặc giai đoạn mới, sự tương tác giữa khí hậu thời vận và cấu trúc nguyên thủy sẽ làm nổi bật những khía cạnh khác nhau để bạn rèn luyện sự điềm tĩnh và cân bằng nội tại.',
        ],
      },
    ],
  },
  {
    slug: 'dai-van-luu-nien',
    title: 'Đại Vận 10 năm và Lưu Niên: Đọc chu kỳ thời gian như bản đồ thời tiết',
    category: 'Chu kỳ thời gian',
    readingTime: '6 phút đọc',
    publishedAt: '2026-11-10',
    description:
      'Tìm hiểu cách phân biệt Nguyên Cục, Đại Vận và Lưu Niên trong Bát Tự để lập kế hoạch dài hạn một cách chủ động.',
    sections: [
      {
        heading: '1. Ba tầng quan sát: Nguyên Cục, Đại Vận và Lưu Niên',
        paragraphs: [
          'Nếu coi lá số Bát Tự (Nguyên Cục) là chiếc thuyền và kết cấu thân vỏ vốn có của mỗi người, thì Đại Vận kéo dài mười năm giống như vùng biển hoặc dòng hải lưu bạn đang đi qua trong một thập kỷ, còn Lưu Niên từng năm là thời tiết nắng mưa cụ thể của mùa đó.',
          'Sự phân tầng này giúp người đọc tránh cái bẫy quy chụp mọi biến động về một nguyên nhân duy nhất. Có những giai đoạn nền tảng cá nhân vững vàng nhưng bối cảnh bên ngoài biến động nhanh, đòi hỏi sự kiên nhẫn tích lũy thay vì mở rộng nóng vội.',
        ],
      },
      {
        heading: '2. Ý nghĩa thực tiễn của chu kỳ Đại Vận 10 năm',
        paragraphs: [
          'Mỗi chu kỳ Đại Vận không tự động mang lại thành công hay trở ngại một cách máy móc. Thay vào đó, cặp Thiên Can và Địa Chi của Đại Vận làm thay đổi trọng tâm ưu tiên trong mười năm: có giai đoạn thuận lợi cho việc học hỏi chuyên môn và xây dựng uy tín, có giai đoạn lại đặt trọng tâm vào quản trị nguồn lực, kết nối đội ngũ hoặc điều chỉnh nhịp sống gia đình.',
          'Hiểu được chủ đề chính của Đại Vận giúp bạn giảm bớt áp lực so sánh bản thân với nhịp độ của người khác. Mỗi người đều có những mùa gieo hạt, mùa chăm bón và mùa thu hoạch diễn ra ở những khung thời gian khác nhau.',
        ],
      },
      {
        heading: '3. Lưu Niên: Nhịp điều chỉnh theo từng năm dương lịch và tiết khí',
        paragraphs: [
          'Trong lịch pháp cổ điển, một năm Lưu Niên mới chuyển giao quanh tiết Lập Xuân (thường vào đầu tháng 2 dương lịch). Khi Lưu Niên đi vào tương tác với Nhật Chủ hoặc các trụ trong lá số, nó thường gợi mở những cơ hội học kỹ năng mới hoặc những bài kiểm tra về tính kỷ luật.',
          'Việc ghi chép lại cảm nhận của bản thân sau mỗi năm vào sổ tay chiêm nghiệm là cách đối chiếu thực tế đáng tin cậy nhất. Qua ba đến năm năm quan sát, bạn sẽ nhận ra quy luật phản ứng của chính mình trước các chu kỳ bận rộn hoặc trầm lắng.',
        ],
      },
      {
        heading: '4. Giữ tâm thế chủ động trước mọi chu kỳ',
        paragraphs: [
          'Bản đồ thời tiết không thay thế tay lái của người cầm vô lăng. Khi thấy dự báo gió lớn, người thủy thủ kinh nghiệm không bỏ cuộc hành trình mà điều chỉnh cánh buồm, kiểm tra lại dây neo và chọn tốc độ an toàn. Đó chính là tinh thần lành mạnh nhất khi tham khảo Đại Vận và Lưu Niên trên Mệnh Quán.',
        ],
      },
    ],
  },
  {
    slug: 'tu-tru-bat-tu-la-gi',
    title: 'Tứ Trụ Bát Tự là gì? Giải mã cấu trúc Năm - Tháng - Ngày - Giờ sinh',
    category: 'Kiến thức nhập môn',
    readingTime: '5 phút đọc',
    publishedAt: '2026-11-11',
    description:
      'Giới thiệu cấu trúc 4 trụ 8 chữ trong hệ thống lịch pháp Can Chi và ý nghĩa biểu tượng của từng trụ cột cuộc đời.',
    sections: [
      {
        heading: '1. Nguồn gốc từ lịch pháp Thiên Can và Địa Chi',
        paragraphs: [
          'Bát Tự (nghĩa đen là tám chữ), còn gọi là Tứ Trụ, là hệ thống biểu diễn thời điểm một cá nhân cất tiếng khóc chào đời bằng bốn cột mốc: Năm, Tháng, Ngày và Giờ theo lịch Can Chi gắn với 24 tiết khí thiên văn. Mỗi trụ gồm một Thiên Can ở trên và một Địa Chi ở dưới, ghép lại thành tám chữ cơ bản.',
          'Điểm đặc biệt của Bát Tự là ranh giới tháng và năm không dựa vào ngày mùng 1 âm lịch thuần túy, mà tính chính xác theo vị trí của Trái Đất trên quỹ đạo quanh Mặt Trời thông qua các tiết khí như Lập Xuân, Kinh Trập hay Thanh Minh.',
        ],
      },
      {
        heading: '2. Vai trò biểu tượng của bốn trụ cột',
        paragraphs: [
          'Trụ Năm thường đại diện cho nền tảng gia đình, môi trường văn hóa thời thơ ấu và ấn tượng xã hội ban đầu. Trụ Tháng giữ vai trò điều phối khí hậu của toàn bộ lá số, phản ánh môi trường trưởng thành, định hướng nghề nghiệp và cách cá nhân tương tác với tập thể.',
          'Trụ Ngày là trung tâm của bản đồ, nơi Thiên Can của Trụ Ngày được gọi là Nhật Chủ (đại diện cho ý thức bản thân), còn Địa Chi bên dưới phản ánh không gian đời sống thân mật và sự đồng hành lâu dài. Trụ Giờ hướng về thế giới nội tâm sâu kín, khát vọng sáng tạo và định hướng ở chặng hậu vận.',
        ],
      },
      {
        heading: '3. Khác biệt giữa xem cho biết và đọc để hiểu mình',
        paragraphs: [
          'Nếu chỉ dừng lại ở việc gán nhãn "mệnh tốt" hay "mệnh xấu", người đọc rất dễ bỏ lỡ giá trị nhân văn của hệ thống Tứ Trụ. Trên thực tế, cùng một bộ Tứ Trụ có thể biểu hiện rất khác nhau tùy thuộc vào nền tảng giáo dục, sự rèn luyện tính cách và lựa chọn môi trường sống của mỗi người.',
          'Khi kết hợp Tứ Trụ với tư duy hiện đại, bạn có thể xem tám chữ ấy như ngôn ngữ biểu tượng giúp gọi tên rõ ràng hơn những nét tính cách tưởng chừng mâu thuẫn bên trong mình.',
        ],
      },
    ],
  },
  {
    slug: 'thap-than-va-dong-luc-hanh-vi',
    title: 'Thập Thần trong Bát Tự: Bản đồ 5 nhóm động lực tâm lý và giao tiếp',
    category: 'Chuyên sâu cấu trúc',
    readingTime: '6 phút đọc',
    publishedAt: '2026-11-11',
    description:
      'Tìm hiểu Tỷ Kiên, Thực Thương, Tài Tinh, Quan Sát và Ấn Tinh như năm trục động lực hành vi trong đời sống hiện đại.',
    sections: [
      {
        heading: '1. Thập Thần ra đời từ mối quan hệ với Nhật Chủ',
        paragraphs: [
          'Trong lá số Bát Tự, toàn bộ các Thiên Can và Tàng Can khác đều được đặt tên theo mối quan hệ Âm Dương và Ngũ Hành với Nhật Chủ. Từ năm cặp sinh khắc và đồng hành chia theo cùng dấu hoặc khác dấu Âm Dương, hệ thống hình thành mười khái niệm gọi chung là Thập Thần.',
          'Thay vì hiểu chữ "Thần" theo nghĩa huyền bí, học thuật cổ điển dùng thuật ngữ này để chỉ các sắc thái động lực tâm lý, cách xử lý thông tin và mô hình tương tác xã hội của con người.',
        ],
      },
      {
        heading: '2. Năm nhóm động lực cốt lõi',
        paragraphs: [
          'Nhóm Tỷ Kiếp (Tỷ Kiên, Kiếp Tài) đại diện cho cái tôi độc lập, tinh thần tự chủ, sức bền cá nhân và cách hợp tác ngang hàng với đồng nghiệp, bạn bè. Nhóm Thực Thương (Thực Thần, Thương Quan) phản ánh nhu cầu biểu đạt, óc thẩm mỹ, khả năng sáng tạo ý tưởng và chia sẻ tri thức ra bên ngoài.',
          'Nhóm Tài Tinh (Chính Tài, Thiên Tài) gắn liền với tư duy thực tế, khả năng tổ chức nguồn lực, đặt mục tiêu cụ thể và đo lường hiệu quả. Nhóm Quan Sát (Chính Quan, Thất Sát) đại diện cho tinh thần trách nhiệm, ý thức kỷ luật, khả năng chịu áp lực và dẫn dắt trong khuôn khổ. Cuối cùng, nhóm Ấn Tinh (Chính Ấn, Thiên Ấn) nuôi dưỡng nhu cầu học hỏi, chiêm nghiệm, tìm kiếm ý nghĩa và phục hồi năng lượng nội tâm.',
        ],
      },
      {
        heading: '3. Ứng dụng vào lựa chọn phong cách làm việc',
        paragraphs: [
          'Một người có xu hướng Thực Thương và Ấn Tinh nổi bật thường cảm thấy tràn đầy sinh lực trong các công việc nghiên cứu, thiết kế, giảng dạy hoặc sáng tạo nội dung độc lập. Trong khi đó, cấu trúc thiên về Quan Sát và Tài Tinh lại thường phát huy tốt ở môi trường đòi hỏi tính hệ thống, quản trị vận hành và ra quyết định dựa trên kết quả rõ ràng.',
          'Không có tổ hợp Thập Thần nào là ưu việt tuyệt đối; giá trị nằm ở việc đặt đúng năng lực tự nhiên vào đúng vai trò và biết rèn luyện các kỹ năng còn lại để giữ sự linh hoạt.',
        ],
      },
    ],
  },
  {
    slug: 'nhat-chu-va-cach-cuc',
    title: 'Nhật Chủ và Cách Cục: Vì sao không thể nhìn một chữ để kết luận cả cuộc đời',
    category: 'Phương pháp luận',
    readingTime: '5 phút đọc',
    publishedAt: '2026-11-12',
    description:
      'Giải thích lý do trong Bát Tự học chính thống, Nhật Chủ luôn phải được đặt trong tổng thể Lệnh Tháng, Cách Cục và hoàn cảnh sống.',
    sections: [
      {
        heading: '1. Nhật Chủ chỉ là điểm xuất phát của câu chuyện',
        paragraphs: [
          'Rất nhiều bài viết đại chúng thường tóm tắt tính cách một người chỉ qua một chữ của Nhật Chủ, chẳng hạn "người Giáp Mộc thẳng thắn" hay "người Quý Thủy nhạy bén". Mô tả đó có phần đúng ở tầng hình tượng sơ khởi, nhưng lại quá đơn giản nếu tách rời khỏi bối cảnh bốn trụ xung quanh.',
          'Giống như một hạt giống cùng loài nhưng được trồng ở vùng đất phù sa ôn hòa sẽ phát triển khác hẳn với hạt giống mọc trên triền núi đá nhiều gió. Trong Bát Tự, Lệnh Tháng (Địa Chi của trụ tháng) chính là khí hậu quyết định điều kiện sinh trưởng của Nhật Chủ.',
        ],
      },
      {
        heading: '2. Cách Cục là bức tranh phối hợp tổng thể',
        paragraphs: [
          'Khi xét Cách Cục, người nghiên cứu quan sát xem khí lực nổi trội nhất trong tháng sinh là gì, nó có thấu lộ lên Thiên Can để tạo thành thế đứng rõ ràng hay không, và các trụ còn lại hỗ trợ hay kiềm chế lẫn nhau ra sao.',
          'Một lá số có cấu trúc cân bằng hài hòa mang lại cảm giác ổn định, dễ thích nghi; trong khi một lá số có cá tính sắc nét hoặc tương tác mạnh mẽ giữa các trụ lại thường thúc đẩy chủ nhân đi tìm con đường chuyên sâu độc đáo qua nhiều trải nghiệm thực tế.',
        ],
      },
      {
        heading: '3. Thái độ đọc bản đồ mang tính xây dựng',
        paragraphs: [
          'Khi đọc phần phân tích Nhật Chủ và Cách Cục trên Mệnh Quán, hãy lưu giữ những gợi ý giúp bạn hiểu rõ hơn nhịp điệu tự nhiên của bản thân, đồng thời giữ khoảng lùi tỉnh táo trước mọi lời khẳng định tuyệt đối hóa. Cuộc sống luôn rộng lớn hơn bất kỳ mô hình biểu tượng nào.',
        ],
      },
    ],
  },
  {
    slug: 'tiet-khi-va-gio-sinh-trong-lich-phap',
    title: 'Tiết khí và Giờ sinh: Vì sao sai lệch vài mươi phút có thể đổi cả lá số?',
    category: 'Lịch pháp & Thiên văn',
    readingTime: '5 phút đọc',
    publishedAt: '2026-11-12',
    description:
      'Tìm hiểu vai trò của 24 tiết khí, ranh giới giờ Tý và kinh độ địa phương trong việc lập lá số Bát Tự chính xác.',
    sections: [
      {
        heading: '1. 24 Tiết khí là trục tọa độ của lá số',
        paragraphs: [
          'Khác với lịch âm thông thường chỉ phản ánh chu kỳ trăng tròn trăng khuyết, hệ thống Bát Tự bám sát 24 tiết khí dựa trên chuyển động biểu kiến của Mặt Trời trên hoàng đạo. Mỗi 15 độ kinh độ mặt trời đánh dấu một tiết khí hoặc trung khí mới.',
          'Chính vì thế, hai em bé sinh cùng ngày âm lịch nhưng cách nhau một thời khắc giao tiết Lập Xuân sẽ có Trụ Năm và Trụ Tháng khác biệt hoàn toàn. Điều này giải thích vì sao các công cụ lập lá số chuẩn mực luôn cần ngày tháng năm sinh dương lịch chính xác đến từng phút.',
        ],
      },
      {
        heading: '2. Giờ sinh và sự chuyển đổi theo canh giờ cổ truyền',
        paragraphs: [
          'Một ngày 24 giờ được chia thành 12 canh giờ địa chi, mỗi canh kéo dài hai tiếng đồng hồ: từ giờ Tý (23h-01h) đến giờ Hợi (21h-23h). Nếu một người sinh sát ranh giới chuyển giờ hoặc quanh thời điểm nửa đêm 23h-00h, việc xác định đúng giờ ghi nhận giúp kết quả Trụ Giờ nhất quán và đáng tin cậy hơn.',
          'Ngoài ra, khi sinh ở những khu vực địa lý có múi giờ hành chính chênh lệch đáng kể so với kinh độ chuẩn của múi giờ đó, người nghiên cứu lịch pháp thường cân nhắc hiệu chỉnh theo giờ Mặt Trời địa phương để giữ đúng nhịp sáng trưa chiều tối tự nhiên.',
        ],
      },
      {
        heading: '3. Khi không nhớ rõ giờ sinh thì nên đọc phần nào?',
        paragraphs: [
          'Nếu bạn chưa có thông tin giờ sinh chính xác, ba trụ Năm - Tháng - Ngày vẫn cung cấp tới ba phần tư bức tranh về khí chất Ngũ Hành, xu hướng Thập Thần và nhịp Đại Vận cơ bản. Bạn hoàn toàn có thể bắt đầu chiêm nghiệm từ ba trụ này trước khi tìm lại tư liệu gia đình nếu có điều kiện.',
        ],
      },
    ],
  },
];

const SITE_NAV_LINKS = [
  { href: '/', label: 'Lập lá số' },
  { href: '/thu-vien', label: 'Thư viện Bát Tự' },
  { href: '/co-so-luan-giai', label: 'Cơ sở luận giải' },
  { href: '/ve-menh-quan', label: 'Về Mệnh Quán' },
];

const LEGAL_NAV_LINKS = [
  { href: '/quyen-rieng-tu', label: 'Quyền riêng tư' },
  { href: '/dieu-khoan', label: 'Điều khoản sử dụng' },
  { href: '/thu-vien', label: 'Thư viện' },
  { href: '/co-so-luan-giai', label: 'Nguồn tham khảo' },
];

function renderShell({ title, description, canonicalUrl, baseUrl, bodyHtml, activePath }) {
  const safeTitle = escapeHtml(title);
  const safeDesc = escapeHtml(description);
  const safeCanonical = escapeHtml(canonicalUrl);
  const safeBase = escapeHtml(baseUrl);

  const headerLinks = SITE_NAV_LINKS.map((item) => {
    const isActive = activePath === item.href || (item.href === '/thu-vien' && activePath.startsWith('/thu-vien/'));
    return `<a href="${escapeHtml(item.href)}" class="mq-nav-link${isActive ? ' is-active' : ''}">${escapeHtml(item.label)}</a>`;
  }).join('');

  const footerLinks = LEGAL_NAV_LINKS.map(
    (item) => `<a href="${escapeHtml(item.href)}" class="mq-footer-link">${escapeHtml(item.label)}</a>`
  ).join('');

  const adsenseHeadTag =
    MONETIZATION_CONFIG.adsense?.enabled && MONETIZATION_CONFIG.adsense?.publisherId
      ? `\n  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(MONETIZATION_CONFIG.adsense.publisherId)}" crossorigin="anonymous"></script>`
      : '';

  return `<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="theme-color" content="#0b100e" />
  <title>${safeTitle}</title>
  <meta name="description" content="${safeDesc}" />
  <link rel="canonical" href="${safeCanonical}" />
  <meta property="og:title" content="${safeTitle}" />
  <meta property="og:description" content="${safeDesc}" />
  <meta property="og:url" content="${safeCanonical}" />
  <meta property="og:type" content="article" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=Noto+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Noto+Serif:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg-void: #0b100e;
      --bg-surface: #141b18;
      --bg-card: #18201d;
      --text-primary: #eee3d8;
      --text-secondary: #cbbdb0;
      --text-muted: #d69a88;
      --accent-cinnabar: #772b32;
      --accent-bright: #bf4b45;
      --border-soft: rgba(214, 154, 136, 0.22);
      --border-strong: rgba(191, 75, 69, 0.48);
    }
    *, *::before, *::after { box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      background-color: var(--bg-void);
      color: var(--text-primary);
      font-family: "Noto Sans", system-ui, -apple-system, sans-serif;
      line-height: 1.72;
      overflow-x: clip;
      -webkit-text-size-adjust: 100%;
    }
    a { color: inherit; }
    .mq-shell {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background:
        radial-gradient(circle at top center, rgba(119, 43, 50, 0.22), transparent 48%),
        var(--bg-void);
    }
    .mq-header {
      position: sticky;
      top: 0;
      z-index: 20;
      background: rgba(11, 16, 14, 0.92);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border-soft);
      padding-top: env(safe-area-inset-top, 0px);
    }
    .mq-header-inner {
      max-width: 960px;
      margin: 0 auto;
      padding: 0.75rem 1rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      min-width: 0;
    }
    .mq-brand {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      text-decoration: none;
      font-family: "Noto Serif", serif;
      font-weight: 700;
      font-size: 1.15rem;
      letter-spacing: 0.03em;
      min-height: 44px;
    }
    .mq-brand-seal {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 6px;
      background: var(--accent-cinnabar);
      border: 1px solid var(--border-strong);
      color: #fff5ee;
      font-family: "Ma Shan Zheng", "Noto Serif", serif;
      font-size: 1.1rem;
    }
    .mq-nav {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.45rem;
      min-width: 0;
    }
    .mq-nav-link {
      display: inline-flex;
      align-items: center;
      min-height: 44px;
      padding: 0.4rem 0.8rem;
      border-radius: 999px;
      text-decoration: none;
      font-size: 0.9rem;
      color: var(--text-secondary);
      border: 1px solid transparent;
      transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease;
    }
    .mq-nav-link:hover,
    .mq-nav-link.is-active {
      color: var(--text-primary);
      border-color: var(--border-strong);
      background: rgba(119, 43, 50, 0.25);
    }
    .mq-main {
      flex: 1 0 auto;
      width: 100%;
      max-width: 920px;
      margin: 0 auto;
      padding: 1.75rem 1rem 3rem;
      min-width: 0;
    }
    .mq-breadcrumb {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      font-size: 0.88rem;
      color: var(--text-muted);
      margin-bottom: 1rem;
    }
    .mq-breadcrumb a {
      color: var(--text-muted);
      text-decoration: none;
    }
    .mq-breadcrumb a:hover {
      text-decoration: underline;
    }
    .mq-hero {
      background: linear-gradient(155deg, rgba(24, 32, 29, 0.96), rgba(16, 22, 19, 0.96));
      border: 1px solid var(--border-soft);
      border-radius: 14px;
      padding: 1.5rem 1.35rem;
      margin-bottom: 1.5rem;
    }
    .mq-badge {
      display: inline-block;
      font-size: 0.78rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--text-muted);
      border: 1px solid var(--border-soft);
      border-radius: 999px;
      padding: 0.2rem 0.65rem;
      margin-bottom: 0.75rem;
    }
    h1, h2, h3 {
      font-family: "Noto Serif", serif;
      color: var(--text-primary);
      line-height: 1.35;
      margin-top: 0;
    }
    h1 { font-size: clamp(1.45rem, 3vw, 2.05rem); margin-bottom: 0.7rem; }
    h2 { font-size: clamp(1.15rem, 2.2vw, 1.4rem); margin-bottom: 0.6rem; color: #f3e8dd; }
    .mq-lead {
      margin: 0;
      color: var(--text-secondary);
      font-size: 1rem;
    }
    .mq-meta {
      margin-top: 0.85rem;
      font-size: 0.85rem;
      color: var(--text-muted);
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .mq-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 1rem;
    }
    .mq-card {
      background: var(--bg-card);
      border: 1px solid var(--border-soft);
      border-radius: 12px;
      padding: 1.2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 0.9rem;
      min-width: 0;
    }
    .mq-card-title {
      font-size: 1.08rem;
      margin-bottom: 0.45rem;
    }
    .mq-card-desc {
      margin: 0;
      color: var(--text-secondary);
      font-size: 0.94rem;
    }
    .mq-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 44px;
      padding: 0.55rem 1.05rem;
      border-radius: 999px;
      background: var(--accent-cinnabar);
      border: 1px solid var(--border-strong);
      color: #fff6f0;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.92rem;
      align-self: flex-start;
      transition: transform 160ms ease, background-color 160ms ease;
    }
    .mq-btn:hover {
      background: var(--accent-bright);
      transform: translateY(-1px);
    }
    .mq-btn--ghost {
      background: transparent;
      border-color: var(--border-soft);
      color: var(--text-primary);
    }
    .mq-article {
      background: var(--bg-surface);
      border: 1px solid var(--border-soft);
      border-radius: 14px;
      padding: 1.45rem 1.35rem;
    }
    .mq-article section + section {
      margin-top: 1.5rem;
      padding-top: 1.25rem;
      border-top: 1px solid rgba(214, 154, 136, 0.14);
    }
    .mq-article p {
      margin: 0 0 0.85rem;
      color: var(--text-secondary);
      overflow-wrap: anywhere;
    }
    .mq-article ul {
      margin: 0.4rem 0 0.9rem;
      padding-left: 1.25rem;
      color: var(--text-secondary);
    }
    .mq-article li + li {
      margin-top: 0.4rem;
    }
    .mq-cta-box {
      margin-top: 1.65rem;
      background: linear-gradient(135deg, rgba(119, 43, 50, 0.25), rgba(24, 32, 29, 0.92));
      border: 1px solid var(--border-strong);
      border-radius: 12px;
      padding: 1.25rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
    .mq-footer {
      border-top: 1px solid var(--border-soft);
      background: rgba(10, 14, 12, 0.96);
      padding: 1.35rem 1rem calc(1.35rem + env(safe-area-inset-bottom, 0px));
    }
    .mq-footer-inner {
      max-width: 960px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 0.9rem;
      font-size: 0.86rem;
      color: var(--text-muted);
    }
    .mq-footer-nav {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem 0.95rem;
    }
    .mq-footer-link {
      display: inline-flex;
      align-items: center;
      min-height: 44px;
      text-decoration: none;
      color: var(--text-secondary);
    }
    .mq-footer-link:hover {
      color: var(--text-primary);
      text-decoration: underline;
    }
    @media (max-width: 640px) {
      .mq-header-inner { padding: 0.65rem 0.8rem; }
      .mq-nav { width: 100%; justify-content: flex-start; }
      .mq-nav-link { padding: 0.35rem 0.7rem; font-size: 0.86rem; }
      .mq-main { padding: 1.15rem 0.85rem 2.25rem; }
      .mq-hero, .mq-article { padding: 1.15rem 1rem; }
      .mq-grid { grid-template-columns: 1fr; }
    }
  </style>
  <meta name="x-site-base" content="${safeBase}" />${adsenseHeadTag}
</head>
<body>
  <div class="mq-shell">
    <header class="mq-header">
      <div class="mq-header-inner">
        <a href="/" class="mq-brand">
          <span class="mq-brand-seal" aria-hidden="true">命</span>
          <span>Mệnh Quán</span>
        </a>
        <nav class="mq-nav" aria-label="Điều hướng chính">
          ${headerLinks}
        </nav>
      </div>
    </header>
    <main class="mq-main">
      ${bodyHtml}
    </main>
    <footer class="mq-footer">
      <div class="mq-footer-inner">
        <span>Mệnh Quán — Không gian tra cứu Bát Tự và chiêm nghiệm văn hóa phương Đông</span>
        <nav class="mq-footer-nav" aria-label="Thông tin pháp lý và thư viện">
          ${footerLinks}
        </nav>
      </div>
    </footer>
  </div>
</body>
</html>`;
}

function renderPrivacyPage(baseUrl) {
  const canonicalUrl = `${baseUrl}/quyen-rieng-tu`;
  const bodyHtml = `
    <div class="mq-breadcrumb"><a href="/">Trang chủ</a> <span>/</span> <span>Quyền riêng tư</span></div>
    <section class="mq-hero">
      <span class="mq-badge">Chính sách minh bạch</span>
      <h1>Chính sách Quyền Riêng Tư — Mệnh Quán</h1>
      <p class="mq-lead">Cập nhật lần cuối: 12/11/2026. Mệnh Quán tôn trọng quyền riêng tư và dữ liệu ngày giờ sinh của bạn khi trải nghiệm tra cứu Bát Tự trực tuyến.</p>
    </section>
    <article class="mq-article">
      <section>
        <h2>1. Dữ liệu bạn nhập để lập lá số</h2>
        <p>Khi bạn nhập ngày sinh, giờ sinh, giới tính hoặc tên gọi tùy chọn để xem lá số Bát Tự trên Mệnh Quán, các thông số này chỉ được dùng để tính toán lịch pháp Can Chi, biểu đồ Ngũ Hành, Thập Thần và chu kỳ Đại Vận cho phiên truy cập của bạn.</p>
        <p>Ghi chú cá nhân trong mục Sổ Chiêm Nghiệm được lưu trữ cục bộ ngay trên trình duyệt thiết bị của bạn (LocalStorage) nhằm phục vụ việc tự theo dõi. Bạn có thể xóa bất cứ lúc nào thông qua thao tác xóa dữ liệu trình duyệt.</p>
      </section>
      <section>
        <h2>2. Cookie, nhật ký kỹ thuật và bên thứ ba</h2>
        <p>Hệ thống máy chủ có thể ghi nhận nhật ký kỹ thuật tiêu chuẩn (loại trình duyệt, mã phản hồi HTTP, thời điểm truy cập) nhằm duy trì độ ổn định và ngăn chặn lưu lượng truy cập bất thường.</p>
        <p>Khi nền tảng bật hiển thị quảng cáo từ các đối tác như Google AdSense, các nhà cung cấp bên thứ ba (bao gồm Google) có thể sử dụng cookie hoặc công nghệ định danh tương đương để phân phối quảng cáo phù hợp dựa trên lượt truy cập trang web này hoặc các trang web khác trên Internet.</p>
        <ul>
          <li>Người dùng có thể quản lý hoặc tắt quảng cáo cá nhân hóa thông qua trang Cài đặt quảng cáo của Google (My Ad Center / Ads Settings).</li>
          <li>Bạn cũng có thể cấu hình trình duyệt từ chối hoặc xóa cookie bất cứ lúc nào; các tính năng lập lá số cốt lõi vẫn hoạt động bình thường.</li>
        </ul>
      </section>
      <section>
        <h2>3. Bảo mật và liên hệ</h2>
        <p>Mệnh Quán không bán dữ liệu cá nhân cho bên thứ ba, không yêu cầu cung cấp số căn cước, thông tin ngân hàng hay mật khẩu nhạy cảm để sử dụng chức năng tra cứu.</p>
        <p>Mọi thắc mắc liên quan đến chính sách quyền riêng tư hoặc yêu cầu gỡ bỏ dữ liệu hiển thị, vui lòng gửi phản hồi qua trang <a href="/ve-menh-quan">Về Mệnh Quán</a>.</p>
      </section>
    </article>
  `;
  return renderShell({
    title: 'Chính sách Quyền Riêng Tư | Mệnh Quán',
    description:
      'Chính sách bảo vệ dữ liệu cá nhân, cookie và minh bạch hoạt động quảng cáo trên ứng dụng tra cứu Bát Tự Mệnh Quán.',
    canonicalUrl,
    baseUrl,
    bodyHtml,
    activePath: '/quyen-rieng-tu',
  });
}

function renderTermsPage(baseUrl) {
  const canonicalUrl = `${baseUrl}/dieu-khoan`;
  const bodyHtml = `
    <div class="mq-breadcrumb"><a href="/">Trang chủ</a> <span>/</span> <span>Điều khoản sử dụng</span></div>
    <section class="mq-hero">
      <span class="mq-badge">Quy ước sử dụng</span>
      <h1>Điều Khoản Sử Dụng — Mệnh Quán</h1>
      <p class="mq-lead">Cập nhật lần cuối: 12/11/2026. Vui lòng đọc kỹ phạm vi tham khảo trước khi sử dụng các công cụ và bài viết trên Mệnh Quán.</p>
    </section>
    <article class="mq-article">
      <section>
        <h2>1. Mục đích văn hóa và chiêm nghiệm tự thân</h2>
        <p>Mệnh Quán cung cấp công cụ lập lá số Bát Tự và thư viện bài viết dưới góc độ di sản lịch pháp, triết lý Ngũ Hành phương Đông và chiêm nghiệm tâm lý bản thân. Toàn bộ nội dung mang tính tham khảo, gợi mở góc nhìn và giáo dục văn hóa.</p>
      </section>
      <section>
        <h2>2. Miễn trừ trách nhiệm chuyên môn</h2>
        <p>Các phân tích về Ngũ Hành, Thập Thần, Cách Cục, Đại Vận hay Lưu Niên trên trang web <strong>không phải</strong> là lời khuyên y khoa, chẩn đoán sức khỏe, tư vấn pháp lý hay khuyến nghị đầu tư tài chính. Người dùng hoàn toàn tự chịu trách nhiệm đối với các quyết định trong đời sống, công việc và sức khỏe của mình.</p>
      </section>
      <section>
        <h2>3. Quyền sở hữu trí tuệ và hành vi hợp lệ</h2>
        <ul>
          <li>Giao diện biểu đồ, hệ thống trình bày song ngữ và toàn bộ bài viết biên tập thuộc quyền quản lý nội dung của Mệnh Quán.</li>
          <li>Bạn được phép chia sẻ liên kết bài viết hoặc lưu lá số phục vụ nhu cầu cá nhân phi thương mại khi giữ nguyên nguồn dẫn.</li>
          <li>Nghiêm cấm hành vi khai thác tự động quá tải máy chủ, giả mạo danh nghĩa dịch vụ hoặc sử dụng nội dung trang web vào mục đích gây hiểu nhầm mê tín dị đoan.</li>
        </ul>
      </section>
      <section>
        <h2>4. Cập nhật điều khoản</h2>
        <p>Mệnh Quán có thể cập nhật điều khoản này định kỳ để phù hợp với tính năng mới và tiêu chuẩn vận hành minh bạch. Tiếp tục sử dụng trang web đồng nghĩa với việc bạn đồng ý với phiên bản mới nhất được đăng tải tại đây.</p>
      </section>
    </article>
  `;
  return renderShell({
    title: 'Điều Khoản Sử Dụng | Mệnh Quán',
    description:
      'Điều khoản sử dụng, phạm vi tham khảo văn hóa và tuyên bố miễn trừ trách nhiệm của hệ thống tra cứu Bát Tự Mệnh Quán.',
    canonicalUrl,
    baseUrl,
    bodyHtml,
    activePath: '/dieu-khoan',
  });
}

function renderLibraryIndex(baseUrl) {
  const canonicalUrl = `${baseUrl}/thu-vien`;
  const cardsHtml = LIBRARY_ARTICLES.map(
    (article) => `
      <article class="mq-card">
        <div>
          <span class="mq-badge">${escapeHtml(article.category)} · ${escapeHtml(article.readingTime)}</span>
          <h2 class="mq-card-title">${escapeHtml(article.title)}</h2>
          <p class="mq-card-desc">${escapeHtml(article.description)}</p>
        </div>
        <a href="/thu-vien/${escapeHtml(article.slug)}" class="mq-btn">Đọc bài viết</a>
      </article>
    `
  ).join('');

  const bodyHtml = `
    <div class="mq-breadcrumb"><a href="/">Trang chủ</a> <span>/</span> <span>Thư viện Bát Tự</span></div>
    <section class="mq-hero">
      <span class="mq-badge">Kho tri thức gốc</span>
      <h1>Thư Viện Chiêm Nghiệm &amp; Học Thuật Bát Tự</h1>
      <p class="mq-lead">Hệ thống bài viết nền tảng giúp bạn hiểu rõ Ngũ Hành, Thập Thần, Cách Cục và chu kỳ thời gian bằng ngôn ngữ mạch lạc, điềm tĩnh và thực tế.</p>
    </section>
    <div class="mq-grid">
      ${cardsHtml}
    </div>
    <div class="mq-cta-box">
      <div>
        <h2>Sẵn sàng đối chiếu với lá số của chính bạn?</h2>
        <p class="mq-lead">Nhập ngày giờ sinh dương lịch để xem trọn bộ 5 bản đồ Ngũ Hành, Nhật Chủ và Đại Vận.</p>
      </div>
      <a href="/" class="mq-btn">Lập lá số ngay</a>
    </div>
  `;

  return renderShell({
    title: 'Thư Viện Kiến Thức Bát Tự & Chiêm Nghiệm | Mệnh Quán',
    description:
      'Tuyển tập bài viết giải nghĩa Ngũ Hành, Tứ Trụ, Thập Thần, Cách Cục và chu kỳ Đại Vận dễ hiểu trên Mệnh Quán.',
    canonicalUrl,
    baseUrl,
    bodyHtml,
    activePath: '/thu-vien',
  });
}

function renderLibraryArticle(article, baseUrl) {
  const canonicalUrl = `${baseUrl}/thu-vien/${article.slug}`;
  const sectionsHtml = article.sections
    .map(
      (sec) => `
        <section>
          <h2>${escapeHtml(sec.heading)}</h2>
          ${sec.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join('')}
        </section>
      `
    )
    .join('');

  const related = LIBRARY_ARTICLES.filter((item) => item.slug !== article.slug).slice(0, 2);
  const relatedHtml = related
    .map(
      (item) => `
        <article class="mq-card">
          <div>
            <span class="mq-badge">${escapeHtml(item.category)}</span>
            <h3 class="mq-card-title">${escapeHtml(item.title)}</h3>
            <p class="mq-card-desc">${escapeHtml(item.description)}</p>
          </div>
          <a href="/thu-vien/${escapeHtml(item.slug)}" class="mq-btn mq-btn--ghost">Đọc tiếp</a>
        </article>
      `
    )
    .join('');

  const bodyHtml = `
    <div class="mq-breadcrumb">
      <a href="/">Trang chủ</a> <span>/</span>
      <a href="/thu-vien">Thư viện Bát Tự</a> <span>/</span>
      <span>${escapeHtml(article.category)}</span>
    </div>
    <section class="mq-hero">
      <span class="mq-badge">${escapeHtml(article.category)}</span>
      <h1>${escapeHtml(article.title)}</h1>
      <p class="mq-lead">${escapeHtml(article.description)}</p>
      <div class="mq-meta">
        <span>Thời lượng: ${escapeHtml(article.readingTime)}</span>
        <span>Cập nhật: ${escapeHtml(article.publishedAt)}</span>
      </div>
    </section>
    <article class="mq-article">
      ${sectionsHtml}
    </article>
    <div class="mq-cta-box">
      <div>
        <h2>Đối chiếu trực tiếp trên lá số cá nhân</h2>
        <p class="mq-lead">Quay lại trang lập lá số để quan sát trực quan tỷ lệ Ngũ Hành và các giai đoạn 10 năm.</p>
      </div>
      <a href="/" class="mq-btn">Mở bản đồ Bát Tự</a>
    </div>
    <section style="margin-top: 2rem;">
      <h2>Bài viết liên quan</h2>
      <div class="mq-grid">${relatedHtml}</div>
    </section>
  `;

  return renderShell({
    title: `${article.title} | Thư viện Mệnh Quán`,
    description: article.description,
    canonicalUrl,
    baseUrl,
    bodyHtml,
    activePath: `/thu-vien/${article.slug}`,
  });
}

export function renderEditorialPage(pathname, baseUrl = 'https://darkmagic.onrender.com') {
  const cleanBase = normalizeBaseUrl(baseUrl);
  if (pathname === '/quyen-rieng-tu') {
    return renderPrivacyPage(cleanBase);
  }
  if (pathname === '/dieu-khoan') {
    return renderTermsPage(cleanBase);
  }
  if (pathname === '/thu-vien') {
    return renderLibraryIndex(cleanBase);
  }
  if (pathname.startsWith('/thu-vien/')) {
    const slug = pathname.slice('/thu-vien/'.length);
    const article = LIBRARY_ARTICLES.find((item) => item.slug === slug);
    if (article) {
      return renderLibraryArticle(article, cleanBase);
    }
  }
  return null;
}

export function buildRobotsTxt(baseUrl = 'https://darkmagic.onrender.com') {
  const cleanBase = normalizeBaseUrl(baseUrl);
  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    '',
    `Sitemap: ${cleanBase}/sitemap.xml`,
    '',
  ].join('\n');
}

export function buildSitemapXml(baseUrl = 'https://darkmagic.onrender.com') {
  const cleanBase = normalizeBaseUrl(baseUrl);
  const staticUrls = [
    { loc: `${cleanBase}/`, changefreq: 'weekly', priority: '1.0' },
    { loc: `${cleanBase}/thu-vien`, changefreq: 'weekly', priority: '0.9' },
    { loc: `${cleanBase}/ve-menh-quan`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${cleanBase}/co-so-luan-giai`, changefreq: 'monthly', priority: '0.7' },
    { loc: `${cleanBase}/quyen-rieng-tu`, changefreq: 'monthly', priority: '0.5' },
    { loc: `${cleanBase}/dieu-khoan`, changefreq: 'monthly', priority: '0.5' },
  ];
  const articleUrls = LIBRARY_ARTICLES.map((article) => ({
    loc: `${cleanBase}/thu-vien/${article.slug}`,
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: article.publishedAt,
  }));

  const entries = [...staticUrls, ...articleUrls]
    .map(
      (entry) => `  <url>
    <loc>${escapeHtml(entry.loc)}</loc>${entry.lastmod ? `\n    <lastmod>${escapeHtml(entry.lastmod)}</lastmod>` : ''}
    <changefreq>${escapeHtml(entry.changefreq)}</changefreq>
    <priority>${escapeHtml(entry.priority)}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

export function buildAdsTxt(config) {
  const adsense = config?.adsense || {};
  const publisherId = String(adsense.publisherId || '').trim().replace(/^ca-/i, '');
  const sellerId = String(adsense.adsTxtSellerId || 'f08c47fec0942fa0').trim();
  if (!adsense.enabled || !publisherId) {
    return '# Google AdSense publisherId is not configured yet.\n';
  }
  return `google.com, ${publisherId}, DIRECT, ${sellerId}\n`;
}
