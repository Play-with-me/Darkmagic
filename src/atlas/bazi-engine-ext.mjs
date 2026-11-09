// src/atlas/bazi-engine-ext.mjs
// Classical Eastern Bazi Astrological & Divination Engine Extension

export const STEMS = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
export const STEMS_HAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];

export const BRANCHES = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
export const BRANCHES_HAN = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];

export const STEM_META = {
  'Giáp': { han: '甲', element: 'Mộc', polarity: 'Dương', title: 'Đống Lương Chi Mộc (Gỗ Tùng Bách Đại Ngàn)', direction: 'Đông' },
  'Ất':   { han: '乙', element: 'Mộc', polarity: 'Âm',    title: 'Hoa Thảo Chi Mộc (Cỏ Hoa Mềm Mại Linh Hoạt)', direction: 'Đông' },
  'Bính': { han: '丙', element: 'Hỏa', polarity: 'Dương', title: 'Thái Dương Chi Hỏa (Lửa Mặt Trời Rực Rỡ)', direction: 'Nam' },
  'Đinh': { han: '丁', element: 'Hỏa', polarity: 'Âm',    title: 'Đăng Chúc Chi Hỏa (Ngọn Đèn Đêm Tinh Tế)', direction: 'Nam' },
  'Mậu':  { han: '戊', element: 'Thổ', polarity: 'Dương', title: 'Thành Đầu Chi Thổ (Đất Tường Thành Vững Chãi)', direction: 'Trung Tâm' },
  'Kỷ':   { han: '己', element: 'Thổ', polarity: 'Âm',    title: 'Điền Viên Chi Thổ (Đất Ruộng Vườn Màu Mỡ)', direction: 'Trung Tâm' },
  'Canh': { han: '庚', element: 'Kim', polarity: 'Dương', title: 'Kiếm Kích Chi Kim (Thép Bảo Kiếm Sắc Bén)', direction: 'Tây' },
  'Tân':  { han: '辛', element: 'Kim', polarity: 'Âm',    title: 'Châu Ngọc Chi Kim (Vàng Ngọc Trang Sức Quý)', direction: 'Tây' },
  'Nhâm': { han: '壬', element: 'Thủy', polarity: 'Dương', title: 'Giang Hà Chi Thủy (Nước Sông Biển Mênh Mông)', direction: 'Bắc' },
  'Quý':  { han: '癸', element: 'Thủy', polarity: 'Âm',    title: 'Vũ Lộ Chi Thủy (Sương Mưa Thuần Khiết)', direction: 'Bắc' },
};

export const BRANCH_META = {
  'Tý':   { han: '子', element: 'Thủy', polarity: 'Dương', animal: 'Chuột (Huyền Thử)',   hours: '23:00–01:00', angle: 0,   direction: 'Chính Bắc (Khảm)', season: 'Đông Chí' },
  'Sửu':  { han: '丑', element: 'Thổ',  polarity: 'Âm',    animal: 'Trâu (Kim Ngưu)',     hours: '01:00–03:00', angle: 30,  direction: 'Đông Bắc (Cấn)',   season: 'Cuối Đông' },
  'Dần':  { han: '寅', element: 'Mộc',  polarity: 'Dương', animal: 'Hổ (Sơn Quân)',       hours: '03:00–05:00', angle: 60,  direction: 'Đông Bắc (Cấn)',   season: 'Lập Xuân' },
  'Mão':  { han: '卯', element: 'Mộc',  polarity: 'Âm',    animal: 'Mèo/Thỏ (Ngọc Thố)',  hours: '05:00–07:00', angle: 90,  direction: 'Chính Đông (Chấn)', season: 'Xuân Phân' },
  'Thìn': { han: '辰', element: 'Thổ',  polarity: 'Dương', animal: 'Rồng (Thiên Long)',   hours: '07:00–09:00', angle: 120, direction: 'Đông Nam (Tốn)',   season: 'Cuối Xuân' },
  'Tỵ':   { han: '巳', element: 'Hỏa',  polarity: 'Âm',    animal: 'Rắn (Hỏa Xà)',        hours: '09:00–11:00', angle: 150, direction: 'Đông Nam (Tốn)',   season: 'Lập Hạ' },
  'Ngọ':  { han: '午', element: 'Hỏa',  polarity: 'Dương', animal: 'Ngựa (Xích Mã)',      hours: '11:00–13:00', angle: 180, direction: 'Chính Nam (Ly)',    season: 'Hạ Chí' },
  'Mùi':  { han: '未', element: 'Thổ',  polarity: 'Âm',    animal: 'Dê (Linh Dương)',     hours: '13:00–15:00', angle: 210, direction: 'Tây Nam (Khôn)',   season: 'Cuối Hạ' },
  'Thân': { han: '申', element: 'Kim',  polarity: 'Dương', animal: 'Khỉ (Linh Hầu)',      hours: '15:00–17:00', angle: 240, direction: 'Tây Nam (Khôn)',   season: 'Lập Thu' },
  'Dậu':  { han: '酉', element: 'Kim',  polarity: 'Âm',    animal: 'Gà (Kim Kê)',         hours: '17:00–19:00', angle: 270, direction: 'Chính Tây (Đoài)', season: 'Thu Phân' },
  'Tuất': { han: '戌', element: 'Thổ',  polarity: 'Dương', animal: 'Chó (Thiên Khuyển)',  hours: '19:00–21:00', angle: 300, direction: 'Tây Bắc (Càn)',    season: 'Cuối Thu' },
  'Hợi':  { han: '亥', element: 'Thủy', polarity: 'Âm',    animal: 'Hơi/Lợn (Huyền Trư)', hours: '21:00–23:00', angle: 330, direction: 'Tây Bắc (Càn)',    season: 'Lập Đông' },
};

export const ELEMENT_THEME = {
  'Mộc':  { color: '#789e82', glow: 'rgba(120, 158, 130, 0.22)', bg: 'rgba(120, 158, 130, 0.12)', border: 'rgba(120, 158, 130, 0.35)', han: '木', guardian: 'Thanh Long (Đông Phương)', trait: 'Nhân từ, sinh sôi, vươn lên, sáng tạo' },
  'Hỏa':  { color: '#c9655b', glow: 'rgba(201, 101, 91, 0.24)', bg: 'rgba(201, 101, 91, 0.12)', border: 'rgba(201, 101, 91, 0.35)', han: '火', guardian: 'Chu Tước (Nam Phương)',    trait: 'Nhiệt huyết, lễ nghĩa, rực rỡ, minh triết' },
  'Thổ':  { color: '#c2966d', glow: 'rgba(194, 150, 109, 0.22)', bg: 'rgba(194, 150, 109, 0.12)', border: 'rgba(194, 150, 109, 0.35)', han: '土', guardian: 'Câu Trần (Trung Cung)',    trait: 'Bao dung, chữ tín, vững chãi, hậu đức' },
  'Kim':  { color: '#c7bfb8', glow: 'rgba(199, 191, 184, 0.20)', bg: 'rgba(199, 191, 184, 0.12)', border: 'rgba(199, 191, 184, 0.35)', han: '金', guardian: 'Bạch Hổ (Tây Phương)',     trait: 'Quyết đoán, trọng nghĩa, sắc bén, kỷ luật' },
  'Thủy': { color: '#6d88a3', glow: 'rgba(109, 136, 163, 0.22)', bg: 'rgba(109, 136, 163, 0.12)', border: 'rgba(109, 136, 163, 0.35)', han: '水', guardian: 'Huyền Vũ (Bắc Phương)',    trait: 'Trí tuệ, thâm trầm, linh hoạt, uyển chuyển' },
};

// 10 Hình Tượng Bản Mệnh Nhật Chủ (Dành riêng cho người mới hiểu trong 10 giây)
export const DAY_MASTER_ARCHETYPES = {
  'Giáp': {
    name: 'Giáp Mộc',
    han: '甲木',
    archetype: 'Cây Cổ Thụ Ngàn Năm',
    tagline: 'Vươn cao ngay thẳng · Trượng nghĩa gánh vác',
    personality: 'Bạn mang khí chất của cây đại thụ giữa đại ngàn: khẳng khái, cương trực, luôn muốn tiến về phía trước và che chở cho người xung quanh.',
    superpower: 'Bản lĩnh trụ cột, không bao giờ chịu khuất phục trước gian nan, đáng tin cậy tuyệt đối.',
    shadow: 'Đôi lúc quá cứng nhắc, khó hạ mình nhận sai; khi gặp bão lớn dễ gãy nếu không học cách mềm dẻo.',
    habitAdvice: 'Học cách lắng nghe lời khuyên mềm mỏng, hòa mình vào thiên nhiên hoặc cây xanh để nuôi dưỡng sinh khí.',
  },
  'Ất': {
    name: 'Ất Mộc',
    han: '乙木',
    archetype: 'Cành Hoa Dây Leo Mềm Mại',
    tagline: 'Uyển chuyển thích nghi · Sức sống tiềm tàng',
    personality: 'Bạn như dây leo hay nhành phong lan uyển chuyển: khéo léo trong giao tiếp, giỏi thích ứng với mọi hoàn cảnh và biết nương tựa đúng chỗ.',
    superpower: 'Khả năng sinh tồn bền bỉ, dễ hòa nhập cộng đồng và kết nối các mối quan hệ quý báu.',
    shadow: 'Dễ do dự, phụ thuộc vào ý kiến người khác, cảm xúc bên trong phức tạp và hay lo nghĩ vu vơ.',
    habitAdvice: 'Xây dựng sự tự tin nội tại, xác lập ranh giới cá nhân rõ ràng trong các mối quan hệ tình cảm.',
  },
  'Bính': {
    name: 'Bính Hỏa',
    han: '丙火',
    archetype: 'Ánh Thái Dương Rực Rỡ',
    tagline: 'Tỏa sáng ấm áp · Nhiệt thành vị tha',
    personality: 'Bạn như vầng thái dương tỏa sáng không màng đền đáp: cởi mở, hào sảng, tràn đầy năng lượng tích cực và luôn mang lại nụ cười cho tập thể.',
    superpower: 'Sức hút tự nhiên, khả năng truyền cảm hứng và thổi bùng nhiệt huyết cho những người xung quanh.',
    shadow: 'Tính khí bốc đồng, mau giận mau quên; đôi khi tiêu tốn quá nhiều năng lượng cho người ngoài mà quên chăm sóc bản thân.',
    habitAdvice: 'Tập thiền định hoặc đi dạo bên mặt nước tĩnh lặng để làm dịu nhiệt lượng nội tâm.',
  },
  'Đinh': {
    name: 'Đinh Hỏa',
    han: '丁火',
    archetype: 'Ngọn Nến Đêm Đông',
    tagline: 'Âm thầm soi sáng · Tinh tế sâu sắc',
    personality: 'Bạn như ngọn nến lung linh trong màn đêm: ấm áp kín đáo, giàu lòng trắc ẩn, suy nghĩ thấu đáo và có đôi mắt nhìn thấu tâm can người khác.',
    superpower: 'Khả năng quan sát cực kỳ nhạy bén, thiên hướng nghiên cứu chuyên sâu hoặc sáng tạo nghệ thuật tinh xảo.',
    shadow: 'Dễ suy nghĩ nhiều sinh ra muộn phiền; cảm xúc nhạy cảm quá mức trước thái độ vô tình của người thân.',
    habitAdvice: 'Giữ môi trường sống ngăn nắp, tiếp xúc với ánh nắng sớm để xua tan cảm giác hoài nghi.',
  },
  'Mậu': {
    name: 'Mậu Thổ',
    han: '戊土',
    archetype: 'Dãy Núi Đá Sừng Sững',
    tagline: 'Vững như bàn thạch · Trầm tĩnh bao dung',
    personality: 'Bạn như dãy núi đá hùng vĩ đứng vững trước bão giông: trầm tĩnh, giữ chữ tín hàng đầu, chậm mà chắc, là chỗ dựa an tâm nhất của bạn bè.',
    superpower: 'Sức chịu đựng phi thường, lòng trung thành và khả năng gìn giữ những bí mật lớn lao.',
    shadow: 'Chậm thay đổi, bảo thủ trước những ý tưởng mới mẻ; khi đã giận thì khó lòng nguôi ngoai.',
    habitAdvice: 'Chủ động đón nhận những luồng gió mới, luyện tập thể dục đều đặn để cơ thể không bị đình trệ.',
  },
  'Kỷ': {
    name: 'Kỷ Thổ',
    han: '己土',
    archetype: 'Mảnh Đất Phù Sa Màu Mỡ',
    tagline: 'Bao dung dưỡng dục · Thấu hiểu đa chiều',
    personality: 'Bạn như mảnh đất phù sa phì nhiêu: hiền hòa, bao dung, có năng khiếu chăm sóc và ươm mầm tài năng cho người khác phát triển.',
    superpower: 'Đa tài đa nghệ, thấu tình đạt lý, biết cách hòa giải xung đột một cách êm đẹp.',
    shadow: 'Hay ôm đồm chuyện thiên hạ, dễ bị người khác lợi dụng lòng tốt hoặc không biết cách từ chối.',
    habitAdvice: 'Học cách nói "Không" một cách dứt khoát; dành thời gian riêng để tự bồi đắp tri thức cho chính mình.',
  },
  'Canh': {
    name: 'Canh Kim',
    han: '庚金',
    archetype: 'Thanh Bảo Kiếm Thép',
    tagline: 'Cương trực dứt khoát · Trọng nghĩa khinh tài',
    personality: 'Bạn như thanh kiếm báu rèn trong lửa đỏ: thẳng thắn, công bằng, ghét sự giả dối, có ý chí sắt đá và tác phong dứt khoát như sấm chớp.',
    superpower: 'Khả năng giải quyết dứt điểm các khủng hoảng phức tạp, đi đầu mở đường trong gian khó.',
    shadow: 'Lời nói đôi khi quá thẳng thắn khiến người khác tổn thương; tính tình có phần nóng nảy và hiếu thắng.',
    habitAdvice: 'Học cách mài giũa lời nói mềm mại hơn; tập pha trà hoặc nghe nhạc cổ điển để làm dịu chất thép.',
  },
  'Tân': {
    name: 'Tân Kim',
    han: '辛金',
    archetype: 'Viên Ngọc Quý Tinh Xảo',
    tagline: 'Thanh cao tinh khiết · Tự tôn hoàn mỹ',
    personality: 'Bạn như viên ngọc quý được mài giũa tỉ mỉ: thanh lịch, có gu thẩm mỹ cao, cầu toàn, coi trọng danh dự và luôn muốn xuất hiện chỉnh chu nhất.',
    superpower: 'Trực giác thẩm mỹ tuyệt vời, sự tinh tế trong tiểu tiết và khả năng tỏa sáng rực rỡ khi được đặt đúng vị trí.',
    shadow: 'Dễ tự ái, khó chịu trước sự cẩu thả của người khác; đôi khi quá khắt khe với chính bản thân mình.',
    habitAdvice: 'Học cách chấp nhận những điều chưa hoàn hảo trong cuộc sống để tâm hồn được thanh thản.',
  },
  'Nhâm': {
    name: 'Nhâm Thủy',
    han: '壬水',
    archetype: 'Đại Dương Sóng Cuộn',
    tagline: 'Phóng khoáng tự do · Trí tuệ mênh mông',
    personality: 'Bạn như dòng nước đại dương mênh mông: thông minh, phóng khoáng, tầm nhìn xa rộng, không thích bị gò bó trong những khuôn khổ chật hẹp.',
    superpower: 'Khả năng thích ứng siêu phàm, tư duy chiến lược và sự dũng cảm đối diện với sóng lớn cuộc đời.',
    shadow: 'Dễ thay đổi ý định, thiếu kiên nhẫn với các việc lặp đi lặp lại tỉ mỉ; khi xúc động dễ như sóng thần quét qua.',
    habitAdvice: 'Xây dựng kỷ luật thời gian cụ thể; ghi chép mục tiêu ra giấy để dòng nước có bờ kè định hướng.',
  },
  'Quý': {
    name: 'Quý Thủy',
    han: '癸水',
    archetype: 'Cơn Mưa Xuân Dịu Dàng',
    tagline: 'Thanh thuần lắng đọng · Trực giác tâm linh',
    personality: 'Bạn như hạt sương ban mai hay cơn mưa phùn mùa xuân: thâm trầm, nhẹ nhàng, giàu cảm xúc, có trực giác tâm linh và sự nhạy cảm tuyệt vời.',
    superpower: 'Khả năng thẩm thấu tri thức ngầm, đồng cảm sâu sắc với nỗi đau của người khác và sự kiên nhẫn vô hạn.',
    shadow: 'Dễ chìm vào cảm giác u sầu nội tâm; hay suy nghĩ tiêu cực hoặc hoài nghi bản thân khi ở một mình lâu.',
    habitAdvice: 'Tập thể dục ngoài trời, tiếp xúc với ánh nắng ban mai và chia sẻ tâm sự với bạn bè thân thiết.',
  },
};

// Cẩm nang giải mã 4 Trụ cho người mới
export const PILLAR_ROLES_BEGINNER = [
  {
    pillar: 'Trụ Năm',
    theme: 'Gốc Rễ Gia Đình & Niên Thiếu',
    period: 'Từ 1 – 16 tuổi',
    meaning: 'Đại diện cho phúc ấm của ông bà cha mẹ, môi trường bạn lớn lên và hình ảnh đầu tiên người lạ cảm nhận về bạn.',
    question: 'Nền tảng cội nguồn nào đã hình thành nên con người bạn hôm nay?',
  },
  {
    pillar: 'Trụ Tháng',
    theme: 'Sự Nghiệp & Năng Lực Xã Hội',
    period: 'Từ 17 – 32 tuổi',
    meaning: 'Cột trụ quan trọng nhất về mặt sự nghiệp: thể hiện tài năng kiếm tiền, môi trường làm việc lý tưởng và năng lực ứng biến.',
    question: 'Môi trường làm việc nào giúp bạn phát huy tối đa sức mạnh bản thân?',
  },
  {
    pillar: 'Trụ Ngày',
    theme: 'Bản Ngã Cốt Lõi & Hôn Nhân',
    period: 'Từ 33 – 48 tuổi',
    meaning: 'Thiên Can là chính bạn, Địa Chi là người bạn đời. Trụ này tiết lộ nội tâm thầm kín nhất và mẫu người tương hợp bền lâu.',
    question: 'Bạn thực sự là ai khi rũ bỏ mọi chức danh, và bạn cần ai bên cạnh?',
  },
  {
    pillar: 'Trụ Giờ',
    theme: 'Tư Duy Sáng Tạo & Hậu Vận',
    period: 'Từ 49 tuổi trở đi',
    meaning: 'Đại diện cho con cái, học trò, những dự án tâm huyết của cuộc đời và sự an yên trong tâm hồn khi về già.',
    question: 'Di sản và giá trị tinh thần nào bạn muốn để lại cho đời?',
  },
];

// Cẩm nang giải mã Sao Thần Sát đời thường cho người mới
export const SHENSHA_BEGINNER_MEANINGS = {
  'Thiên Ất Quý Nhân': {
    title: 'Sao Quý Nhân Phù Trợ',
    nature: 'Đại Cát',
    simpleDesc: 'Trong những thời điểm khó khăn bế tắc nhất, bạn luôn có người xuất hiện mở đường dẫn lối hoặc gỡ rối kịp thời.',
    advice: 'Hãy sống chân thành và giữ chữ tín, phước lành từ quý nhân sẽ luôn bên bạn.',
  },
  'Văn Xương Quý Nhân': {
    title: 'Sao Trí Tuệ & Thi Cử',
    nature: 'Cát Tinh',
    simpleDesc: 'Bạn có khiếu học nhanh hiểu rộng, khéo léo trong văn chương chữ nghĩa, làm việc liên quan đến tài liệu, ý tưởng rất sắc bén.',
    advice: 'Nên đọc sách thường xuyên và trau chuốt kỹ năng viết lách, truyền đạt.',
  },
  'Đào Hoa': {
    title: 'Sao Duyên Dáng & Thu Hút',
    nature: 'Trung Tính / Duyên Vận',
    simpleDesc: 'Bạn có sức hút tự nhiên trong ánh mắt, nụ cười và giọng nói; dễ tạo thiện cảm và được người khác phái chú ý.',
    advice: 'Biết chọn lọc mối quan hệ chân thành, tránh cả nể để không vướng vào thị phi tình cảm.',
  },
  'Dịch Mã': {
    title: 'Sao Xê Dịch & Bứt Phá',
    nature: 'Vận Động Cát Tinh',
    simpleDesc: 'Bạn là người không chịu ngồi yên một chỗ, càng đi xa, công tác hoặc làm việc quốc tế thì cơ hội càng rộng mở.',
    advice: 'Dám bước ra khỏi vùng an toàn, phát triển sự nghiệp ở các thành phố lớn hoặc môi trường đa quốc gia.',
  },
  'Hoa Cái': {
    title: 'Sao Nghệ Thuật & Chiều Sâu',
    nature: 'Thanh Cao Tinh',
    simpleDesc: 'Bạn có tâm hồn nghệ sĩ, chiều sâu triết học và trực giác tâm linh mạnh mẽ; thích những khoảnh khắc tĩnh lặng một mình.',
    advice: 'Dành không gian riêng cho sở thích sáng tạo, thiền định hoặc nghiên cứu chuyên môn độc lập.',
  },
  'Lộc Tồn': {
    title: 'Sao Tài Lộc Trời Ban',
    nature: 'Phúc Tinh',
    simpleDesc: 'Khả năng tích lũy tài chính tự thân vững chắc; biết cách giữ tiền và ít khi rơi vào cảnh túng thiếu hoàn toàn.',
    advice: 'Tích lũy tài sản dài hạn, đầu tư an toàn và chia sẻ một phần may mắn cho cộng đồng.',
  },
  'Kình Dương': {
    title: 'Sao Bản Lĩnh Thép',
    nature: 'Nghịch Cảnh Tinh',
    simpleDesc: 'Tính khí cương liệt, không ngại va chạm, có sức bền phi thường để vượt qua nghịch cảnh và lội ngược dòng.',
    advice: 'Học cách tiết chế sự nóng vội; chuyển hóa năng lượng chiến đấu vào các mục tiêu thể thao hoặc công việc cạnh tranh cao.',
  },
  'Không Vong': {
    title: 'Vùng Trống Siêu Thoát',
    nature: 'Triết Học Tinh',
    simpleDesc: 'Tâm hồn không quá bám chấp vào danh lợi vật chất vụn vặt; dễ ngộ ra chân lý cuộc đời và có cái nhìn nhẹ nhõm hơn người thường.',
    advice: 'Đừng quá cưỡng cầu những điều đã qua; thuận theo tự nhiên sẽ thấy lòng thanh thản.',
  },
};

// 12 Vòng Trường Sinh
export const LIFE_STAGES = [
  { name: 'Trường Sinh', han: '長生', score: 82,omen: 'Khởi nguyên sinh khí, như mầm non gặp mưa xuân, cát vận mở đường.' },
  { name: 'Mộc Dục',     han: '沐浴', score: 55, omen: 'Gột rửa bụi trần, nhiều biến động cảm xúc và đào hoa thử thách.' },
  { name: 'Quan Đới',    han: '冠帶', score: 74, omen: 'Đội mũ trưởng thành, danh vị và trí lực bắt đầu định hình vững vàng.' },
  { name: 'Lâm Quan',    han: '臨官', score: 89, omen: 'Lộc vị hưng vượng, tự lực gầy dựng cơ đồ, tài năng phát lộ.' },
  { name: 'Đế Vượng',    han: '帝旺', score: 98, omen: 'Đỉnh cao khí thế, uy quyền cực thịnh, cần giữ đạo khiêm cung.' },
  { name: 'Suy',         han: '衰',   score: 64, omen: 'Khí thế lắng dịu, chín chắn nội tâm, lấy tĩnh chế động mới bền.' },
  { name: 'Bệnh',        han: '病',   score: 46, omen: 'Nhạy cảm sâu sắc, giàu lòng trắc ẩn, nên dưỡng tâm và tránh lao lực.' },
  { name: 'Tử',          han: '死',   score: 36, omen: 'Tĩnh lặng hướng nội, trực giác tâm linh nhạy bén, buông bỏ cũ kỹ.' },
  { name: 'Mộ',          han: '墓',   score: 52, omen: 'Kho tàng ẩn giấu, giỏi tích lũy bí mật và tài nguyên nội tại.' },
  { name: 'Tuyệt',       han: '絕',   score: 30, omen: 'Tuyệt xứ逢sinh (trong tĩnh cực nảy mầm mới), xoay chuyển bất ngờ.' },
  { name: 'Thai',        han: '胎',   score: 60, omen: 'Thai nghén ý niệm mới, tâm hồn hiếu kỳ, khởi đầu dự định tương lai.' },
  { name: 'Dưỡng',       han: '養',   score: 70, omen: 'Bồi hoàn nguyên khí, được quý nhân âm thầm nâng đỡ và nuôi dưỡng.' },
];

// Bảng khởi Trường Sinh của 10 Thiên Can (chỉ số Địa Chi khởi Trường Sinh, chiều thuận/nghịch)
const CHANGSHENG_START = {
  'Giáp': { start: 11, dir: 1 },  // Hợi thuận
  'Ất':   { start: 6,  dir: -1 }, // Ngọ nghịch
  'Bính': { start: 2,  dir: 1 },  // Dần thuận
  'Đinh': { start: 9,  dir: -1 }, // Dậu nghịch
  'Mậu':  { start: 2,  dir: 1 },  // Dần thuận
  'Kỷ':   { start: 9,  dir: -1 }, // Dậu nghịch
  'Canh': { start: 5,  dir: 1 },  // Tỵ thuận
  'Tân':  { start: 0,  dir: -1 }, // Tý nghịch
  'Nhâm': { start: 8,  dir: 1 },  // Thân thuận
  'Quý':  { start: 3,  dir: -1 }, // Mão nghịch
};

export function getLifeStage(dayStem, branch) {
  const cfg = CHANGSHENG_START[dayStem];
  const bIdx = BRANCHES.indexOf(branch);
  if (!cfg || bIdx < 0) return LIFE_STAGES[0];
  const offset = ((bIdx - cfg.start) * cfg.dir + 120) % 12;
  return LIFE_STAGES[offset];
}

// 60 Hoa Giáp Nạp Âm (theo đúng thứ tự Lục Thập Hoa Giáp)
const NAYIN_30 = [
  'Hải Trung Kim (Vàng Trong Biển)',
  'Lư Trung Hỏa (Lửa Trong Lò)',
  'Đại Lâm Mộc (Gỗ Rừng Già)',
  'Lộ Bàng Thổ (Đất Ven Đường)',
  'Kiếm Phong Kim (Vàng Mũi Kiếm)',
  'Sơn Đầu Hỏa (Lửa Đỉnh Núi)',
  'Giản Hạ Thủy (Nước Dưới Khe)',
  'Thành Đầu Thổ (Đất Tường Thành)',
  'Bạch Lạp Kim (Vàng Chân Đèn)',
  'Dương Liễu Mộc (Gỗ Dương Liễu)',
  'Tuyền Trung Thủy (Nước Trong Suối)',
  'Ốc Thượng Thổ (Đất Mái Nhà)',
  'Tích Lịch Hỏa (Lửa Sấm Sét)',
  'Tùng Bách Mộc (Gỗ Tùng Bách)',
  'Trường Lưu Thủy (Nước Sông Dài)',
  'Sa Trung Kim (Vàng Trong Cát)',
  'Sơn Hạ Hỏa (Lửa Chân Núi)',
  'Bình Địa Mộc (Gỗ Đồng Bằng)',
  'Bích Thượng Thổ (Đất Trên Vách)',
  'Kim Bạc Kim (Vàng Lá Trang Sức)',
  'Phú Đăng Hỏa (Lửa Đèn Lớn)',
  'Thiên Hà Thủy (Nước Ngân Hà)',
  'Đại Dịch Thổ (Đất Khu Chợ Lớn)',
  'Thoa Xuyến Kim (Vàng Trâm Vòng)',
  'Tang Đố Mộc (Gỗ Cây Dâu)',
  'Đại Khê Thủy (Nước Khe Lớn)',
  'Sa Trung Thổ (Đất Pha Cát)',
  'Thiên Thượng Hỏa (Lửa Trên Trời)',
  'Thạch Lựu Mộc (Gỗ Thạch Lựu)',
  'Đại Hải Thủy (Nước Biển Lớn)',
];

export function getSexagenaryIndex(stem, branch) {
  const sIdx = STEMS.indexOf(stem);
  const bIdx = BRANCHES.indexOf(branch);
  if (sIdx < 0 || bIdx < 0) return -1;
  for (let i = 0; i < 60; i++) {
    if (i % 10 === sIdx && i % 12 === bIdx) return i;
  }
  return -1;
}

export function getNaYin(stem, branch) {
  const idx = getSexagenaryIndex(stem, branch);
  if (idx < 0) return 'Chưa xác định';
  return NAYIN_30[Math.floor(idx / 2)];
}

export function getKongWang(stem, branch) {
  const sIdx = STEMS.indexOf(stem);
  const bIdx = BRANCHES.indexOf(branch);
  if (sIdx < 0 || bIdx < 0) return [];
  const startBranch = (bIdx - sIdx + 12) % 12;
  const kw1 = BRANCHES[(startBranch + 10) % 12];
  const kw2 = BRANCHES[(startBranch + 11) % 12];
  return [kw1, kw2];
}

// Tính Thập Thần giữa Nhật Can và Thiên Can bất kỳ
export function getTenGodRelation(dayStem, targetStem) {
  const r = STEMS.indexOf(dayStem);
  const i = STEMS.indexOf(targetStem);
  if (r < 0 || i < 0) return 'Chưa xác định';
  const a = (Math.floor(i / 2) - Math.floor(r / 2) + 5) % 5;
  const samePol = (r % 2) === (i % 2);
  return [
    samePol ? 'Tỷ kiên' : 'Kiếp tài',
    samePol ? 'Thực thần' : 'Thương quan',
    samePol ? 'Thiên tài' : 'Chính tài',
    samePol ? 'Thất sát' : 'Chính quan',
    samePol ? 'Thiên ấn' : 'Chính ấn',
  ][a];
}

// Hệ thống Thần Sát Cổ Pháp
export function computeShenSha(dayStem, yearBranch, dayBranch, allPillars) {
  const stars = [];
  const presentBranches = allPillars.map(p => p.branch).filter(Boolean);

  // 1. Thiên Ất Quý Nhân (theo Nhật Can)
  const thienAtMap = {
    'Giáp': ['Sửu', 'Mùi'], 'Mậu': ['Sửu', 'Mùi'], 'Canh': ['Sửu', 'Mùi'],
    'Ất': ['Tý', 'Thân'],   'Kỷ': ['Tý', 'Thân'],
    'Bính': ['Hợi', 'Dậu'], 'Đinh': ['Hợi', 'Dậu'],
    'Nhâm': ['Mão', 'Tỵ'],  'Quý': ['Mão', 'Tỵ'],
    'Tân': ['Dần', 'Ngọ'],
  };
  // 2. Văn Xương Quý Nhân (theo Nhật Can)
  const vanXuongMap = {
    'Giáp': 'Tỵ', 'Ất': 'Ngọ', 'Bính': 'Thân', 'Đinh': 'Dậu', 'Mậu': 'Thân',
    'Kỷ': 'Dậu', 'Canh': 'Hợi', 'Tân': 'Tý', 'Nhâm': 'Dần', 'Quý': 'Mão',
  };
  // 3. Lộc Thần (theo Nhật Can)
  const locThanMap = {
    'Giáp': 'Dần', 'Ất': 'Mão', 'Bính': 'Tỵ', 'Đinh': 'Ngọ', 'Mậu': 'Tỵ',
    'Kỷ': 'Ngọ', 'Canh': 'Thân', 'Tân': 'Dậu', 'Nhâm': 'Hợi', 'Quý': 'Tý',
  };
  // 4. Dương Nhẫn (theo Nhật Can)
  const duongNhanMap = {
    'Giáp': 'Mão', 'Ất': 'Thìn', 'Bính': 'Ngọ', 'Đinh': 'Mùi', 'Mậu': 'Ngọ',
    'Kỷ': 'Mùi', 'Canh': 'Dậu', 'Tân': 'Tuất', 'Nhâm': 'Tý', 'Quý': 'Sửu',
  };
  // 5. Thái Cực Quý Nhân (theo Nhật Can)
  const thaiCucMap = {
    'Giáp': ['Tý', 'Ngọ'], 'Ất': ['Tý', 'Ngọ'],
    'Bính': ['Dậu', 'Mão'], 'Đinh': ['Dậu', 'Mão'],
    'Mậu': ['Thìn', 'Tuất', 'Sửu', 'Mùi'], 'Kỷ': ['Thìn', 'Tuất', 'Sửu', 'Mùi'],
    'Canh': ['Dần', 'Hợi'], 'Tân': ['Dần', 'Hợi'],
    'Nhâm': ['Tỵ', 'Thân'], 'Quý': ['Tỵ', 'Thân'],
  };

  // Theo Địa Chi Ngày hoặc Năm (Tam hợp cục)
  function getTriadGroup(b) {
    if (['Thân', 'Tý', 'Thìn'].includes(b)) return 'Thủy';
    if (['Dần', 'Ngọ', 'Tuất'].includes(b)) return 'Hỏa';
    if (['Tỵ', 'Dậu', 'Sửu'].includes(b)) return 'Kim';
    if (['Hợi', 'Mão', 'Mùi'].includes(b)) return 'Mộc';
    return null;
  }

  const dichMaByGroup = { 'Thủy': 'Dần', 'Hỏa': 'Thân', 'Kim': 'Hợi', 'Mộc': 'Tỵ' };
  const daoHoaByGroup = { 'Thủy': 'Dậu', 'Hỏa': 'Mão', 'Kim': 'Ngọ', 'Mộc': 'Tý' };
  const hoaCaiByGroup = { 'Thủy': 'Thìn', 'Hỏa': 'Tuất', 'Kim': 'Sửu', 'Mộc': 'Mùi' };
  const tuongTinhByGroup = { 'Thủy': 'Tý', 'Hỏa': 'Ngọ', 'Kim': 'Dậu', 'Mộc': 'Mão' };

  const baseBranches = [dayBranch, yearBranch].filter(Boolean);
  const dichMaTargets = new Set(baseBranches.map(b => dichMaByGroup[getTriadGroup(b)]).filter(Boolean));
  const daoHoaTargets = new Set(baseBranches.map(b => daoHoaByGroup[getTriadGroup(b)]).filter(Boolean));
  const hoaCaiTargets = new Set(baseBranches.map(b => hoaCaiByGroup[getTriadGroup(b)]).filter(Boolean));
  const tuongTinhTargets = new Set(baseBranches.map(b => tuongTinhByGroup[getTriadGroup(b)]).filter(Boolean));

  const catalog = [
    {
      id: 'thien-at',
      name: 'Thiên Ất Quý Nhân',
      han: '天乙貴人',
      type: 'cat',
      targets: thienAtMap[dayStem] || [],
      desc: 'Đệ nhất cát thần trong mệnh lý: gặp dữ hóa lành, trí tuệ thanh cao, luôn có người quyền quý hoặc cơ duyên cứu giải lúc ngặt nghèo.',
    },
    {
      id: 'thai-cuc',
      name: 'Thái Cực Quý Nhân',
      han: '太極貴人',
      type: 'cat',
      targets: thaiCucMap[dayStem] || [],
      desc: 'Tinh tú của trực giác tâm linh và học thuật sâu xa: có duyên với huyền học, triết lý, càng đi sâu nghiên cứu càng sáng tỏ chân lý.',
    },
    {
      id: 'van-xuong',
      name: 'Văn Xương Quý Nhân',
      han: '文昌貴人',
      type: 'cat',
      targets: [vanXuongMap[dayStem]].filter(Boolean),
      desc: 'Sao chủ về tài hoa văn chương, tư duy sắc sảo, học rộng hiểu sâu, lời nói và ngòi bút có sức thuyết phục lớn.',
    },
    {
      id: 'loc-than',
      name: 'Thiên Lộc (Lộc Thần)',
      han: '祿神',
      type: 'cat',
      targets: [locThanMap[dayStem]].filter(Boolean),
      desc: 'Căn gốc của phúc lộc tự thân: biểu thị tài lộc vững bền, sức sống dồi dào, làm ăn chân chính ắt hưởng thành quả xứng đáng.',
    },
    {
      id: 'tuong-tinh',
      name: 'Tướng Tinh',
      han: '將星',
      type: 'cat',
      targets: [...tuongTinhTargets],
      desc: 'Khí phách cầm quân, bản lĩnh tự chủ và uy tín lãnh đạo; đứng trước sóng gió vẫn giữ được định lực.',
    },
    {
      id: 'dich-ma',
      name: 'Dịch Mã Tinh',
      han: '驛馬',
      type: 'trung',
      targets: [...dichMaTargets],
      desc: 'Sao của sự dịch chuyển, bôn ba, xuất ngoại hoặc đổi mới không ngừng; càng đi xa và mở rộng tầm nhìn càng dễ lập nghiệp.',
    },
    {
      id: 'dao-hoa',
      name: 'Đào Hoa Tinh (Hàm Trì)',
      han: '桃花',
      type: 'trung',
      targets: [...daoHoaTargets],
      desc: 'Khí chất cuốn hút, thẩm mỹ tinh tế, nhân duyên rộng mở; cần giữ tâm chính định để tình cảm trở thành trợ lực thay vì hệ lụy.',
    },
    {
      id: 'hoa-cai',
      name: 'Hoa Cái Tinh',
      han: '華蓋',
      type: 'trung',
      targets: [...hoaCaiTargets],
      desc: 'Lọng che trên đỉnh: biểu tượng của cốt cách độc lập, tâm hồn nghệ thuật và chiều sâu nội tâm khác biệt với số đông.',
    },
    {
      id: 'duong-nhan',
      name: 'Dương Nhẫn (Kình Dương)',
      han: '羊刃',
      type: 'hung',
      targets: [duongNhanMap[dayStem]].filter(Boolean),
      desc: 'Lưỡi đao cực vượng: ý chí sắt đá, dám nghĩ dám làm, nhưng cần tiết chế sự nóng nảy và剛cường quá mức.',
    },
  ];

  catalog.forEach(item => {
    const matchedPillars = [];
    allPillars.forEach((p, idx) => {
      if (p.branch && item.targets.includes(p.branch)) {
        matchedPillars.push({ index: idx, label: p.label, branch: p.branch });
      }
    });
    stars.push({
      ...item,
      present: matchedPillars.length > 0,
      matchedPillars,
      primaryBranch: item.targets[0] || 'Tý',
    });
  });

  return stars;
}

// Dò mạng lưới Hình - Xung - Hội - Hợp giữa 4 trụ
export function computeBranchInteractions(pillars) {
  const interactions = [];
  const LUC_HOP = {
    'Tý-Sửu': 'Lục Hợp Hóa Thổ (Gắn kết thầm lặng, bền chặt)',
    'Dần-Hợi': 'Lục Hợp Hóa Mộc (Tương trợ sinh trưởng, nhân hòa)',
    'Mão-Tuất': 'Lục Hợp Hóa Hỏa (Nồng ấm, đồng lòng hợp sức)',
    'Thìn-Dậu': 'Lục Hợp Hóa Kim (Kết giao sắc bén, trọng tín nghĩa)',
    'Tỵ-Thân': 'Lục Hợp Hóa Thủy (Biến hóa linh hoạt, vừa hợp vừa rèn)',
    'Ngọ-Mùi': 'Lục Hợp Nhật Nguyệt (Hòa hợp âm dương, quý nhân tương trợ)',
  };
  const LUC_XUNG = {
    'Tý-Ngọ': 'Tý Ngọ Tương Xung (Thủy Hỏa giao chiến, tâm tư dậy sóng)',
    'Sửu-Mùi': 'Sửu Mùi Tương Xung (Thổ khí chấn động, thử thách kiên nhẫn)',
    'Dần-Thân': 'Dần Thân Tương Xung (Dịch mã đối đầu, biến động dịch chuyển)',
    'Mão-Dậu': 'Mão Dậu Tương Xung (Kim Mộc giao tranh, thay cũ đổi mới)',
    'Thìn-Tuất': 'Thìn Tuất Tương Xung (Mộ khố khai mở, bước ngoặt lớn)',
    'Tỵ-Hợi': 'Tỵ Hợi Tương Xung (Thủy Hỏa kích phát, đi xa lập nghiệp)',
  };
  const TUONG_HAI = {
    'Tý-Mùi': 'Tý Mùi Tương Hại (Đề phòng hiểu lầm ngầm trong quan hệ gần)',
    'Sửu-Ngọ': 'Sửu Ngọ Tương Hại (Dễ sốt ruột vì kỳ vọng chưa khớp thực tế)',
    'Dần-Tỵ': 'Dần Tỵ Tương Hại (Cẩn trọng lời nói lúc nhiệt tâm quá mức)',
    'Mão-Thìn': 'Mão Thìn Tương Hại (Tránh để tiểu tiết làm hao tổn đại cục)',
    'Thân-Hợi': 'Thân Hợi Tương Hại (Giữ ranh giới rõ ràng khi hợp tác)',
    'Dậu-Tuất': 'Dậu Tuất Tương Hại (Nên lắng nghe để hóa giải bất đồng ngầm)',
  };
  const TUONG_HINH = {
    'Tý-Mão': 'Vô Lễ Chi Hình (Cần giữ lễ độ và sự mềm mỏng trong đối đãi)',
    'Dần-Tỵ': 'Vô Ân Chi Hình (Làm ơn cần chọn người, giữ tâm bình thản)',
    'Tỵ-Thân': 'Vô Ân Chi Hình (Trong hợp có rèn, lấy誠tâm hóa giải)',
    'Dần-Thân': 'Xung Kiêm Hình Khí (Năng lượng bứt phá mạnh, cần kỷ luật)',
    'Sửu-Tuất': 'Trì Thế Chi Hình (Càng thử thách càng rèn bản lĩnh kiên định)',
    'Tuất-Mùi': 'Trì Thế Chi Hình (Nội lực dày, cần mở lòng chia sẻ)',
    'Sửu-Mùi': 'Hình Xung Giao Hội (Động lực cải cách từ bên trong)',
  };

  function pairKey(a, b) {
    for (const k of Object.keys(LUC_HOP)) {
      const [x, y] = k.split('-');
      if ((a === x && b === y) || (a === y && b === x)) return { type: 'hop', badge: 'Lục Hợp', title: LUC_HOP[k] };
    }
    return null;
  }

  for (let i = 0; i < pillars.length; i++) {
    for (let j = i + 1; j < pillars.length; j++) {
      const b1 = pillars[i].branch;
      const b2 = pillars[j].branch;
      if (!b1 || !b2) continue;

      const checkDict = (dict, type, badge) => {
        for (const [k, desc] of Object.entries(dict)) {
          const [x, y] = k.split('-');
          if ((b1 === x && b2 === y) || (b1 === y && b2 === x)) {
            interactions.push({
              id: `${type}-${i}-${j}`,
              type,
              badge,
              pillars: [i, j],
              pillarNames: [`Trụ ${pillars[i].label} (${b1})`, `Trụ ${pillars[j].label} (${b2})`],
              description: desc,
            });
          }
        }
      };

      checkDict(LUC_HOP, 'hop', 'Lục Hợp · Cát');
      checkDict(LUC_XUNG, 'xung', 'Lục Xung · Động');
      checkDict(TUONG_HAI, 'hai', 'Tương Hại · Cảnh giác');
      checkDict(TUONG_HINH, 'hinh', 'Tương Hình · Rèn giũa');

      if (b1 === b2 && ['Thìn', 'Ngọ', 'Dậu', 'Hợi'].includes(b1)) {
        interactions.push({
          id: `tuhinh-${i}-${j}`,
          type: 'hinh',
          badge: 'Tự Hình · Nội省',
          pillars: [i, j],
          pillarNames: [`Trụ ${pillars[i].label} (${b1})`, `Trụ ${pillars[j].label} (${b2})`],
          description: `${b1} – ${b2} Tự Hình: Tự đặt tiêu chuẩn rất cao cho bản thân, cần học cách buông thư tâm trí.`,
        });
      }
    }
  }

  // Nếu lá số bình hòa chưa có cặp xung/hợp trực tiếp, thêm liên kết Khí Mạch Chủ Trụ (Tháng - Ngày)
  if (interactions.length === 0) {
    interactions.push({
      id: 'khi-mach-thang-ngay',
      type: 'hop',
      badge: 'Khí Mạch Nguyệt – Nhật',
      pillars: [1, 2],
      pillarNames: [`Trụ Tháng (${pillars[1]?.branch || '—'})`, `Trụ Ngày (${pillars[2]?.branch || '—'})`],
      description: 'Tứ trụ bình hòa, không phạm xung hình trực diện: Nguyệt Lệnh và Nhật Chi giữ thế ổn định, tĩnh tại tự nhiên.',
    });
  }

  return interactions;
}

// Phân tích Cường Nhược & Dụng Thần / Hỷ Thần / Kỵ Thần
export function analyzeYongShen(dayStem, dayElement, counts, monthBranch) {
  const GEN_ORDER = ['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy'];
  const idx = GEN_ORDER.indexOf(dayElement);
  const resourceEl = GEN_ORDER[(idx + 4) % 5]; // Ấn (Sinh tôi)
  const companionEl = dayElement;              // Tỷ Kiếp (Cùng hành)
  const outputEl = GEN_ORDER[(idx + 1) % 5];   // Thực Thương (Tôi sinh)
  const wealthEl = GEN_ORDER[(idx + 2) % 5];   // Tài (Tôi khắc)
  const powerEl = GEN_ORDER[(idx + 3) % 5];    // Quan Sát (Khắc tôi)

  const monthEl = BRANCH_META[monthBranch]?.element || 'Thổ';
  const monthBoost = (monthEl === companionEl || monthEl === resourceEl) ? 2.5 : 0;
  const selfScore = (counts[companionEl] || 0) * 1.4 + (counts[resourceEl] || 0) * 1.2 + monthBoost;
  const otherScore = (counts[outputEl] || 0) + (counts[wealthEl] || 0) + (counts[powerEl] || 0) + (monthBoost ? 0 : 2.0);

  const isStrong = selfScore >= otherScore;
  const strengthLabel = Math.abs(selfScore - otherScore) < 1.1
    ? 'Trung Hòa Thiên Vượng (Khí mạch cân bằng)'
    : isStrong
      ? 'Thân Vượng (Nội lực dồi dào, cần kênh dẫn xuất)'
      : 'Thân Nhược (Khí chất tinh tế, cần bồi tụ căn nguyên)';

  const yongShen = isStrong ? outputEl : resourceEl;
  const xiShen = isStrong ? wealthEl : companionEl;
  const jiShen = isStrong ? resourceEl : powerEl;

  return {
    isStrong,
    strengthLabel,
    selfScore: Math.round((selfScore / (selfScore + otherScore)) * 100),
    yongShen: {
      element: yongShen,
      role: 'Dụng Thần (Chân Mệnh Cứu Cánh)',
      reason: isStrong
        ? `Nhật chủ ${dayStem} (${dayElement}) khí lực sung mãn, lấy hành ${yongShen} làm kênh tiết tú tài hoa và mở lối hanh thông.`
        : `Nhật chủ ${dayStem} (${dayElement}) cần nguồn tiếp sức, lấy hành ${yongShen} làm gốc ấn thụ che chở và bồi đắp nội lực.`,
    },
    xiShen: {
      element: xiShen,
      role: 'Hỷ Thần (Quý Khí Phù Trợ)',
      reason: `Hành ${xiShen} tương trợ trực tiếp cho Dụng Thần ${yongShen}, mang lại cơ hội thuận lợi và quý nhân đồng hành.`,
    },
    jiShen: {
      element: jiShen,
      role: 'Kỵ Thần (Ám Khí Cần Tiết Chế)',
      reason: `Khi hành ${jiShen} quá vượng dễ làm lệch cán cân mệnh cục; gặp năm/tháng thuộc hành này nên lấy tĩnh thắng động.`,
    },
  };
}

// Khởi tạo 8 Chu Kỳ Đại Vận & 10 Năm Lưu Niên
export function buildLuckTimeline(dayStem, pillars, birthYear = 1995) {
  const monthPillar = pillars[1];
  const yearPillar = pillars[0];
  const mStemIdx = Math.max(0, STEMS.indexOf(monthPillar?.stem || 'Giáp'));
  const mBranchIdx = Math.max(0, BRANCHES.indexOf(monthPillar?.branch || 'Dần'));
  const yStemIdx = Math.max(0, STEMS.indexOf(yearPillar?.stem || 'Giáp'));
  const dir = (yStemIdx % 2 === 0) ? 1 : -1;

  const currentYear = 2026;
  const startAge = 4;
  const cycles = [];

  const TEN_GOD_GUIDANCE = {
    'Tỷ kiên': {
      theme: 'Tự Lập & Củng Cố Bản Lĩnh',
      observe: 'Bạn bè, đồng đạo xuất hiện nhiều; ý thức độc lập và tự chủ tăng cao.',
      caution: 'Tránh bảo thủ hoặc ôm đồm một mình khi có thể hợp tác cùng có lợi.',
      action: 'Rèn luyện kỹ năng cốt lõi và xây dựng liên minh đồng chí hướng.',
    },
    'Kiếp tài': {
      theme: 'Cạnh Tranh & Đột Phá Tốc Độ',
      observe: 'Nhịp sống sôi động, nhiều cơ hội giao tế nhưng cũng dễ phát sinh chi tiêu lớn.',
      caution: 'Quản trị rủi ro tài chính chặt chẽ, không đầu tư theo cảm xúc đám đông.',
      action: 'Chủ động chuyển hóa áp lực cạnh tranh thành động lực nâng cấp bản thân.',
    },
    'Thực thần': {
      theme: 'Khơi Nguồn Sáng Tạo & An Nhiên',
      observe: 'Tư duy thông suốt, tâm hồn thư thái, có lộc ăn uống và nghệ thuật/chuyên môn.',
      caution: 'Đừng vì quá an nhàn mà bỏ lỡ thời điểm vàng để mở rộng sự nghiệp.',
      action: 'Đóng gói tri thức và tài năng thành sản phẩm hoặc giá trị hữu hình.',
    },
    'Thương quan': {
      theme: 'Cách Tân & Phá Vỡ Lối Mòn',
      observe: 'Khát khao đổi mới mãnh liệt, trực giác sắc bén, không chấp nhận sự rập khuôn.',
      caution: 'Giữ lời nói uyển chuyển, tránh phản biện gay gắt làm mất lòng người nâng đỡ.',
      action: 'Dồn năng lượng sắc sảo vào sáng tạo chuyên môn và giải quyết bài toán khó.',
    },
    'Thiên tài': {
      theme: 'Cơ Duyên Mở Rộng & Linh Hoạt Tài Lộc',
      observe: 'Dòng tiền lưu chuyển nhanh, dễ gặp cơ hội ngoài dự tính hoặc nguồn thu phụ.',
      caution: 'Giữ kỷ luật giữ tiền; lộc đến nhanh cũng dễ đi nhanh nếu thiếu kế hoạch.',
      action: 'Đa dạng hóa nguồn lực và mở rộng mạng lưới kết nối thực chất.',
    },
    'Chính tài': {
      theme: 'Tích Lũy Bền Vững & Thực Chất',
      observe: 'Công việc đi vào quỹ đạo ổn định, thành quả tỉ lệ thuận với công sức bỏ ra.',
      caution: 'Tránh quá thận trọng mà khước từ những cải tiến hợp thời.',
      action: 'Xây dựng nền tảng tài chính dài hạn và vun đắp gia đạo vững vàng.',
    },
    'Thất sát': {
      theme: 'Tôi Luyện Bản Lĩnh Trước Sóng Gió',
      observe: 'Trách nhiệm nặng nề hơn, áp lực cao nhưng đi kèm bước nhảy vọt về vị thế.',
      caution: 'Chăm sóc sức khỏe và giấc ngủ; không quyết định vội khi tâm đang căng thẳng.',
      action: 'Đối diện trực diện với thử thách bằng kế hoạch kỷ luật từng bước.',
    },
    'Chính quan': {
      theme: 'Danh Vị, Trật Tự & Uy Tín',
      observe: 'Được giao phó trọng trách, danh tiếng và sự công nhận trong tổ chức tăng lên.',
      caution: 'Đừng tự trói mình trong áp lực hoàn hảo hình thức.',
      action: 'Lấy chữ tín và chuẩn mực đạo đức làm nền tảng thăng tiến lâu dài.',
    },
    'Thiên ấn': {
      theme: 'Trực Giác Huyền Vi & Chiều Sâu Độc Lập',
      observe: 'Tâm trí hướng về chiều sâu triết học, nghiên cứu chuyên biệt hoặc tâm linh.',
      caution: 'Tránh thu mình cô lập hoặc suy diễn quá mức những chuyện nhỏ.',
      action: 'Ghi chép, nghiên cứu chuyên sâu và tìm người tri kỷ để sẻ chia.',
    },
    'Chính ấn': {
      theme: 'Quý Nhân Che Chở & Bồi Đắp Đức Độ',
      observe: 'Gặp thầy hiền, sách quý hoặc người bề trên nâng đỡ; tâm thế bao dung, bình ổn.',
      caution: 'Tránh ỷ lại vào sự an toàn sẵn có mà chậm bước tiến thủ.',
      action: 'Học tập nâng cao trình độ, tích lũy phúc đức và truyền trao giá trị.',
    },
  };

  for (let i = 1; i <= 8; i++) {
    const s = STEMS[(mStemIdx + i * dir + 100) % 10];
    const b = BRANCHES[(mBranchIdx + i * dir + 120) % 12];
    const sYear = birthYear + startAge + (i - 1) * 10;
    const eYear = sYear + 9;
    const stage = getLifeStage(dayStem, b);
    const tenGod = getTenGodRelation(dayStem, s);
    const guide = TEN_GOD_GUIDANCE[tenGod] || TEN_GOD_GUIDANCE['Chính ấn'];
    const isCurrent = currentYear >= sYear && currentYear <= eYear;

    cycles.push({
      index: i,
      stem: s,
      branch: b,
      han: `${STEM_META[s].han}${BRANCH_META[b].han}`,
      name: `${s} ${b}`,
      element: STEM_META[s].element,
      branchElement: BRANCH_META[b].element,
      tenGod,
      stage,
      naYin: getNaYin(s, b),
      startAge: startAge + (i - 1) * 10,
      endAge: startAge + i * 10 - 1,
      startYear: sYear,
      endYear: eYear,
      isCurrent,
      guidance: guide,
    });
  }

  // Nếu không có chu kỳ nào chứa 2026 (do năm sinh giả định), gán chu kỳ 3 là hiện tại
  if (!cycles.some(c => c.isCurrent) && cycles[2]) {
    cycles[2].isCurrent = true;
  }

  // Bảng 10 năm Lưu Niên xung quanh năm hiện tại (2022 - 2031)
  const annuals = [];
  for (let yr = 2022; yr <= 2031; yr++) {
    const offset = (yr - 1984 + 600) % 60; // 1984 là Giáp Tý
    const s = STEMS[offset % 10];
    const b = BRANCHES[offset % 12];
    const tenGod = getTenGodRelation(dayStem, s);
    const stage = getLifeStage(dayStem, b);
    const guide = TEN_GOD_GUIDANCE[tenGod] || TEN_GOD_GUIDANCE['Chính ấn'];
    annuals.push({
      year: yr,
      stem: s,
      branch: b,
      han: `${STEM_META[s].han}${BRANCH_META[b].han}`,
      name: `${s} ${b}`,
      element: STEM_META[s].element,
      tenGod,
      stage,
      naYin: getNaYin(s, b),
      theme: guide.theme,
      advice: guide.action,
      isCurrent: yr === currentYear,
    });
  }

  return { cycles, annuals };
}

// Hàm tổng hợp: Làm giàu toàn diện dữ liệu Lá Số cho 5 Đại Bản Đồ
export function enrichBaziChart(chart) {
  const rawPillars = chart?.pillars || [];
  // Xác định Nhật Can
  const dayPillarRaw = rawPillars[2] || {};
  const dayNameParts = (dayPillarRaw.name || 'Nhâm Tý').split(' ');
  const dayStem = STEMS.includes(dayNameParts[0]) ? dayNameParts[0] : 'Nhâm';
  const dayBranch = BRANCHES.includes(dayNameParts[1]) ? dayNameParts[1] : 'Tý';
  const dayElement = chart?.dayElement || STEM_META[dayStem]?.element || 'Thủy';

  const enrichedPillars = rawPillars.map((p, idx) => {
    const parts = (p.name || '').split(' ');
    const stem = STEMS.includes(parts[0]) ? parts[0] : null;
    const branch = BRANCHES.includes(parts[1]) ? parts[1] : null;
    const sMeta = stem ? STEM_META[stem] : null;
    const bMeta = branch ? BRANCH_META[branch] : null;
    const lifeStage = (stem && branch) ? getLifeStage(dayStem, branch) : null;
    const naYin = (stem && branch) ? getNaYin(stem, branch) : 'Chưa xác định';
    const kongWang = (stem && branch) ? getKongWang(stem, branch) : [];

    const palaceNames = ['Tổ Nghiệp & Căn Cơ', 'Nguyệt Lệnh & Sự Nghiệp', 'Bản Mệnh & Phối Ngẫu', 'Hậu Vận & Tâm Nguyện'];
    return {
      ...p,
      index: idx,
      palaceTitle: palaceNames[idx] || p.label,
      stem,
      branch,
      stemHan: sMeta?.han || (p.raw ? p.raw[0] : '—'),
      branchHan: bMeta?.han || (p.raw ? p.raw[1] : '—'),
      stemElement: sMeta?.element || p.elements?.[0] || 'Thủy',
      branchElement: bMeta?.animal ? bMeta.element : (p.elements?.[1] || 'Thủy'),
      polarity: sMeta?.polarity || 'Dương',
      animal: bMeta?.animal || 'Ẩn tàng',
      lifeStage,
      naYin,
      kongWang,
      isDayMaster: idx === 2,
    };
  });

  // Tính năm sinh ước lượng từ trụ Năm hoặc _birthInput
  let birthYear = 1995;
  if (chart?._birthInput?.date) {
    const y = parseInt(String(chart._birthInput.date).split('-')[0], 10);
    if (!isNaN(y) && y > 1900) birthYear = y;
  } else if (enrichedPillars[0]?.stem && enrichedPillars[0]?.branch) {
    const sexIdx = getSexagenaryIndex(enrichedPillars[0].stem, enrichedPillars[0].branch);
    if (sexIdx >= 0) {
      let y = 1984 + sexIdx;
      if (y > 2008) y -= 60;
      birthYear = y;
    }
  }

  // Đếm ngũ hành toàn cục (Can Chi + Tàng Can có trọng số)
  const counts = { Mộc: 0, Hỏa: 0, Thổ: 0, Kim: 0, Thủy: 0, ...(chart?.counts || {}) };
  const weightedCounts = { Mộc: 0, Hỏa: 0, Thổ: 0, Kim: 0, Thủy: 0 };
  enrichedPillars.forEach((p, idx) => {
    const weight = idx === 1 ? 1.5 : 1.0; // Nguyệt lệnh trọng số cao
    if (p.stemElement && weightedCounts[p.stemElement] !== undefined) {
      weightedCounts[p.stemElement] += 1.0;
    }
    if (p.branchElement && weightedCounts[p.branchElement] !== undefined) {
      weightedCounts[p.branchElement] += weight;
    }
    (p.hiddenStems || []).forEach((hs, hIdx) => {
      const hEl = STEM_META[hs]?.element;
      if (hEl && weightedCounts[hEl] !== undefined) {
        weightedCounts[hEl] += hIdx === 0 ? 0.6 : 0.3;
      }
    });
  });

  const shenSha = computeShenSha(dayStem, enrichedPillars[0]?.branch, dayBranch, enrichedPillars);
  const interactions = computeBranchInteractions(enrichedPillars);
  const yongShen = analyzeYongShen(dayStem, dayElement, weightedCounts, enrichedPillars[1]?.branch || dayBranch);
  const timeline = buildLuckTimeline(dayStem, enrichedPillars, birthYear);

  // Thống kê 10 Thập Thần
  const tenGodStats = {};
  const ALL_TEN_GODS = [
    { name: 'Tỷ kiên', group: 'Tỷ Kiếp (Đồng Minh)', element: dayElement, desc: 'Bản lĩnh tự chủ, ý chí độc lập, bạn bè đồng chí hướng.' },
    { name: 'Kiếp tài', group: 'Tỷ Kiếp (Đồng Minh)', element: dayElement, desc: 'Sức bật cạnh tranh, hành động quyết liệt, dám đương đầu.' },
    { name: 'Thực thần', group: 'Thực Thương (Tài Hoa)', element: yongShen.isStrong ? yongShen.yongShen.element : 'Hỏa', desc: 'Tư duy nghệ thuật, phúc lộc tự nhiên, tâm hồn rộng mở.' },
    { name: 'Thương quan', group: 'Thực Thương (Tài Hoa)', element: yongShen.isStrong ? yongShen.yongShen.element : 'Hỏa', desc: 'Trí tuệ sắc bén, phá cách đổi mới, tài hùng biện xuất chúng.' },
    { name: 'Chính tài', group: 'Tài Tinh (Tài Lộc)', element: 'Thổ', desc: 'Tài chính minh bạch, cần cù tích lũy, trọng chữ tín.' },
    { name: 'Thiên tài', group: 'Tài Tinh (Tài Lộc)', element: 'Thổ', desc: 'Nhạy bén thương trường, cơ duyên bất ngờ, hào sảng rộng rãi.' },
    { name: 'Chính quan', group: 'Quan Sát (Danh Vị)', element: 'Kim', desc: 'Kỷ luật, danh dự, trách nhiệm và vị thế chính thống.' },
    { name: 'Thất sát', group: 'Quan Sát (Danh Vị)', element: 'Kim', desc: 'Uy quyền quyết đoán, bản lĩnh mở đường trong nghịch cảnh.' },
    { name: 'Chính ấn', group: 'Ấn Tinh (Tri Thức)', element: 'Thủy', desc: 'Lòng nhân hậu, học vấn chính thống, quý nhân che chở.' },
    { name: 'Thiên ấn', group: 'Ấn Tinh (Tri Thức)', element: 'Thủy', desc: 'Trực giác huyền học, tư duy độc bản, thấu suốt ẩn vi.' },
  ];

  ALL_TEN_GODS.forEach(g => {
    tenGodStats[g.name] = { ...g, count: 0, locations: [] };
  });

  enrichedPillars.forEach(p => {
    if (p.stemRelation && tenGodStats[p.stemRelation]) {
      tenGodStats[p.stemRelation].count += 1;
      tenGodStats[p.stemRelation].locations.push(`Thiên can Trụ ${p.label}`);
    }
    (p.hiddenRelations || []).forEach((rel, idx) => {
      if (tenGodStats[rel]) {
        tenGodStats[rel].count += idx === 0 ? 0.8 : 0.4;
        tenGodStats[rel].locations.push(`Tàng can ${p.hiddenStems?.[idx] || ''} (Trụ ${p.label})`);
      }
    });
  });

  const archetype = DAY_MASTER_ARCHETYPES[dayStem] || DAY_MASTER_ARCHETYPES['Nhâm'];

  // Xác định 3 điểm cốt lõi người mới cần biết trong 30 giây đầu tiên
  const dominantElementEntry = Object.entries(weightedCounts).sort((a, b) => b[1] - a[1])[0] || [dayElement, 1];
  const missingElements = Object.entries(weightedCounts).filter(([_, v]) => v === 0).map(([k]) => k);

  const beginnerGuide = {
    archetype,
    pillarsGuide: PILLAR_ROLES_BEGINNER,
    takeaways: [
      {
        id: 'archetype',
        label: 'Hình Tượng Bản Mệnh',
        title: archetype.archetype,
        subtitle: archetype.tagline,
        detail: archetype.personality,
      },
      {
        id: 'dominant',
        label: 'Ngũ Khí Nổi Trội Nhất',
        title: `Hành ${dominantElementEntry[0]} (${dominantElementEntry[1].toFixed(1)} điểm)`,
        subtitle: ELEMENT_THEME[dominantElementEntry[0]]?.trait || 'Khí chất chủ đạo',
        detail: `Hành ${dominantElementEntry[0]} chiếm ưu thế trong lá số, định hình phong cách hành động và tư duy tự nhiên của bạn.`,
      },
      {
        id: 'remedy',
        label: 'Chất Liệu Cần Bổ Dưỡng',
        title: `Bổ trợ Hành ${yongShen.yongShen.element}`,
        subtitle: yongShen.isStrong ? 'Thân Vượng · Tiết khí thư thái' : 'Thân Nhược · Tiếp thêm nguyên khí',
        detail: missingElements.length > 0 
          ? `Lá số hiện khuyết hành ${missingElements.join(', ')}. Hãy chú trọng dung nạp năng lượng hành ${yongShen.yongShen.element} vào lối sống.`
          : `Lá số tương đối hài hòa. Hãy phát huy tối đa năng lực của hành ${yongShen.yongShen.element} trong sự nghiệp.`,
      },
    ],
    shenShaMeanings: SHENSHA_BEGINNER_MEANINGS,
  };

  return {
    ...chart,
    dayStem,
    dayBranch,
    dayElement,
    dayMasterMeta: STEM_META[dayStem] || STEM_META['Nhâm'],
    birthYear,
    pillars: enrichedPillars,
    counts,
    weightedCounts,
    shenSha,
    interactions,
    yongShen,
    timeline,
    tenGodList: Object.values(tenGodStats),
    beginnerGuide,
  };
}
