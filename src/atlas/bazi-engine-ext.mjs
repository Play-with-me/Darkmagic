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

// Cẩm nang giải mã 4 Trụ cho người mới (Chi tiết 4 chiều đời thường)
export const PILLAR_ROLES_BEGINNER = [
  {
    pillar: 'Trụ Năm',
    theme: 'Gốc Rễ Gia Đình & Niên Thiếu',
    period: 'Từ 1 – 16 tuổi (Thời Niên Thiếu)',
    meaning: 'Đại diện cho phúc ấm tổ tiên, truyền thống gia đình và ấn tượng ban đầu bạn tạo ra với thế giới bên ngoài.',
    question: 'Nền tảng cội nguồn và gia phong gia đình đã đúc kết nên khí chất gì trong bạn?',
    domains: {
      career: 'Thể hiện môi trường xuất phát điểm, mạng lưới quan hệ từ gia đình và xu hướng chọn ngành nghề thuở ban đầu.',
      relationships: 'Mối quan hệ với ông bà, cha mẹ và họ hàng; sự che chở, dạy dỗ nhận được thời thơ ấu.',
      strength: 'Cốt cách tự nhiên, sự vững vàng đến từ gốc rễ tổ tiên và bản năng ứng xử lễ nghĩa khi ra ngoài xã hội.',
      blindspot: 'Dễ bị ảnh hưởng sâu sắc bởi những định kiến hoặc kỳ vọng quá lớn từ phía gia đình từ thuở nhỏ.',
      dailyTip: 'Luôn ghi nhớ cội nguồn, giữ lòng hiếu thảo với đấng sinh thành để củng cố gốc rễ sinh mệnh vững chãi.',
    },
  },
  {
    pillar: 'Trụ Tháng',
    theme: 'Sự Nghiệp & Năng Lực Xã Hội',
    period: 'Từ 17 – 32 tuổi (Thời Lập Nghiệp)',
    meaning: 'Đây là cột trụ quan trọng nhất về phương diện làm ăn: thể hiện năng lực chuyên môn, khả năng thích ứng thương trường và cơ hội thăng tiến.',
    question: 'Môi trường làm việc nào giúp bạn bứt phá và tạo dựng vị thế xã hội tốt nhất?',
    domains: {
      career: 'Định hình ngành nghề mũi nhọn, phong cách lãnh đạo, cách bạn vượt qua áp lực cạnh tranh trong tổ chức.',
      relationships: 'Tương tác với cấp trên, đồng nghiệp, đối tác làm ăn và anh chị em ruột thịt.',
      strength: 'Sức bật kiếm tiền, tài thao lược thực tế, khả năng nắm bắt xu hướng thị trường cực kỳ nhạy bén.',
      blindspot: 'Áp lực công việc dễ khiến bạn cuốn vào guồng quay danh lợi mà quên chăm sóc sức khỏe và các mối quan hệ thân cận.',
      dailyTip: 'Chọn đúng môi trường cho phép bạn tự chủ phát huy sở trường; tránh làm những việc đi ngược lại bản năng tự nhiên.',
    },
  },
  {
    pillar: 'Trụ Ngày',
    theme: 'Bản Ngã Cốt Lõi & Hôn Nhân',
    period: 'Từ 33 – 48 tuổi (Thời Trung Niên)',
    meaning: 'Thiên Can là chính linh hồn bạn (Nhật Chủ), Địa Chi là Cung Phối Ngẫu (người bạn đời). Trụ này chi phối nội tâm sâu kín và hạnh phúc gia đạo.',
    question: 'Khi cởi bỏ mọi vai vế ngoài xã hội, bạn thực sự là ai và ai là người đồng điệu cùng bạn?',
    domains: {
      career: 'Khả năng giữ vững bản lĩnh trong khủng hoảng, phong thái làm chủ cuộc đời và giá trị đạo đức cốt lõi.',
      relationships: 'Chất lượng đời sống hôn nhân, sự thấu hiểu giữa hai vợ chồng và cách bạn giải quyết bất đồng gia đạo.',
      strength: 'Nội lực tự chữa lành, sự kiên định với mục tiêu sống và sự ấm áp dành cho những người bạn yêu thương nhất.',
      blindspot: 'Cái tôi cá nhân quá cao hoặc quá nhạy cảm có thể vô tình làm tổn thương người bạn đời cận kề.',
      dailyTip: 'Lắng nghe bạn đời nhiều hơn; học cách hạ cái tôi xuống trong không gian gia đình để giữ lửa ấm êm.',
    },
  },
  {
    pillar: 'Trụ Giờ',
    theme: 'Tư Duy Sáng Tạo & Hậu Vận',
    period: 'Từ 49 tuổi trở đi (Thời An Vui Hậu Vận)',
    meaning: 'Đại diện cho thế giới nội tâm thầm kín, con cái, học trò, những dự án sáng tạo để đời và sự an nhàn khi về già.',
    question: 'Di sản tinh thần và những giá trị nhân văn nào bạn muốn lưu truyền cho đời sau?',
    domains: {
      career: 'Những thành tựu dài hạn, dự án ấp ủ riêng, năng lực cố vấn chiến lược và khả năng truyền cảm hứng.',
      relationships: 'Mối quan hệ với con cháu, thế hệ trẻ và những người kế thừa lý tưởng của bạn.',
      strength: 'Trực giác nhạy bén, chiều sâu triết lý sống và khả năng nhìn thấy tiềm năng ở những người trẻ tuổi.',
      blindspot: 'Hay lo nghĩ xa xôi cho tương lai hoặc kỳ vọng quá mức vào thế hệ đi sau khiến bản thân căng thẳng.',
      dailyTip: 'Học cách buông bỏ dần quyền kiểm soát; trao cơ hội cho con cháu và tìm niềm vui trong sự tĩnh tại tâm hồn.',
    },
  },
];

// Cẩm nang giải mã Sao Thần Sát đời thường cho người mới
export const SHENSHA_BEGINNER_MEANINGS = {
  'Thiên Ất Quý Nhân': {
    title: 'Sao Quý Nhân Phù Trợ',
    nature: 'Đại Cát Tinh · Gặp Hung Hóa Cát',
    simpleDesc: 'Trong những thời điểm khó khăn, bế tắc nhất, bạn luôn có người xuất hiện mở đường dẫn lối, gỡ rối kịp thời hoặc chỉ dạy kinh nghiệm quý báu.',
    careerPower: 'Dễ được cấp trên đề bạt, khách hàng tin cậy, đối tác sẵn lòng chia sẻ cơ hội làm ăn lớn.',
    relationshipEffect: 'Gặp gỡ những người bạn chân thành, lương thiện, luôn sẵn lòng ra tay khi bạn cần hỗ trợ.',
    dos: 'Luôn giữ chữ tín, sống chân thành biết ơn; tích cực giúp đỡ người khác để nuôi dưỡng phước báu quý nhân.',
    donts: 'Không ỷ lại vào sự giúp đỡ của người khác mà lười biếng; tránh tự mãn làm mất lòng người nâng đỡ.',
  },
  'Văn Xương Quý Nhân': {
    title: 'Sao Trí Tuệ & Học Vấn',
    nature: 'Cát Tinh · Trí Tuệ Khai Sáng',
    simpleDesc: 'Bạn sở hữu tư duy phân tích nhạy bén, năng khiếu học nhanh hiểu rộng, khéo léo trong văn chương chữ nghĩa và diễn đạt ý tưởng gãy gọn.',
    careerPower: 'Thành công vượt trội trong các ngành nghiên cứu, viết lách, giảng dạy, truyền thông, công nghệ hoặc hoạch định chiến lược.',
    relationshipEffect: 'Thu hút những người bạn tri thức, thích thảo luận sâu về triết lý sống và kiến thức mới mẻ.',
    dos: 'Thường xuyên đọc sách bồi dưỡng chuyên môn; rèn luyện kỹ năng viết và nói trước công chúng.',
    donts: 'Tránh kiêu ngạo học thức hoặc biến các cuộc trò chuyện thân tình thành những buổi tranh luận tri thức khô khan.',
  },
  'Đào Hoa': {
    title: 'Sao Duyên Dáng & Thu Hút',
    nature: 'Trung Tính · Phong Thái Cuốn Hút',
    simpleDesc: 'Bạn có sức hút tự nhiên toát ra từ ánh mắt, nụ cười và giọng nói; dễ tạo thiện cảm từ cái nhìn đầu tiên và thu hút sự chú ý của đám đông.',
    careerPower: 'Rất hợp với các công việc cần ngoại giao, bán hàng, quan hệ công chúng, biểu diễn, nghệ thuật hoặc dịch vụ khách hàng cao cấp.',
    relationshipEffect: 'Duyên số phong phú, nhiều người thầm thương trộm nhớ; cần giữ tâm vững vàng để tình cảm không biến thành rắc rối.',
    dos: 'Tận dụng sự duyên dáng để xây dựng các mối quan hệ xã hội trong sáng, mở rộng vòng kết nối đối tác thiện chí.',
    donts: 'Tránh đa đoan, lập lờ trong tình cảm; không cả nể để bị cuốn vào những mối quan hệ phức tạp, thị phi.',
  },
  'Dịch Mã': {
    title: 'Sao Xê Dịch & Bứt Phá',
    nature: 'Vận Động Cát Tinh · Đi Xa Lập Nghiệp',
    simpleDesc: 'Bạn là người không chịu ngồi yên một chỗ; càng đi xa, công tác, du lịch hay chuyển đổi môi trường sống thì tài lộc và cơ hội càng rộng mở.',
    careerPower: 'Phát triển rực rỡ trong các ngành logistic, xuất nhập khẩu, du lịch, hàng không, kinh doanh trực tuyến toàn cầu hoặc ngoại giao.',
    relationshipEffect: 'Quen biết bạn bè bốn phương, dễ gặp gỡ nhân duyên cách xa quê hương hoặc người ngoại quốc.',
    dos: 'Chủ động nắm bắt cơ hội đi công tác xa, học thêm ngoại ngữ và học hỏi văn hóa các vùng đất mới.',
    donts: 'Tránh đứng núi này trông núi nọ; khi thay đổi công việc cần có sự chuẩn bị kỹ lưỡng về tài chính.',
  },
  'Hoa Cái': {
    title: 'Sao Nghệ Thuật & Chiều Sâu',
    nature: 'Thanh Cao Tinh · Trực Giác Huyền Học',
    simpleDesc: 'Bạn mang tâm hồn nghệ sĩ, chiều sâu triết lý sống và trực giác tâm linh mạnh mẽ; có nhu cầu cao về sự tĩnh lặng nội tâm.',
    careerPower: 'Tỏa sáng trong lĩnh vực nghệ thuật, sáng tác, tâm lý học, huyền học, nghiên cứu độc lập hoặc thiết kế sáng tạo đỉnh cao.',
    relationshipEffect: 'Khá kén chọn bạn bè; chỉ gắn bó sâu sắc với những người thực sự hiểu được thế giới nội tâm của mình.',
    dos: 'Dành cho mình những khoảng lặng một mình mỗi ngày để tĩnh tâm, thiền định hoặc sáng tác tự do.',
    donts: 'Tránh tự cô lập mình quá lâu với thế giới bên ngoài; hãy chủ động mở lòng chia sẻ với người thân.',
  },
  'Lộc Tồn': {
    title: 'Sao Tài Lộc & Tích Lũy',
    nature: 'Phúc Tinh · Nền Tảng Tài Phú Vững Chắc',
    simpleDesc: 'Bạn có năng khiếu tích lũy của cải tự nhiên; làm việc gì cũng nghĩ đến sự an toàn tài chính, ít khi rơi vào cảnh túng thiếu bế tắc.',
    careerPower: 'Thành công trong quản lý tài chính, ngân hàng, kế toán, bất động sản và các mô hình kinh doanh dài hạn ăn chắc mặc bền.',
    relationshipEffect: 'Là chỗ dựa kinh tế an tâm cho gia đình; tính tình chu đáo, lo toan đầy đủ cho người thân.',
    dos: 'Đầu tư vào các tài sản có giá trị thực dài hạn; trích một phần lợi nhuận làm từ thiện để dòng tiền tiếp tục sinh sôi.',
    donts: 'Tránh tính toán quá chi li trong các mối quan hệ tình cảm; tiền bạc là phương tiện, không phải là tất cả.',
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
      desc: 'Lưỡi đao cực vượng: ý chí sắt đá, dám nghĩ dám làm, nhưng cần tiết chế sự nóng nảy và cương cường quá mức.',
    },
  ];

  catalog.forEach(item => {
    const matchedPillars = [];
    allPillars.forEach((p, idx) => {
      if (p.branch && item.targets.includes(p.branch)) {
        matchedPillars.push({ index: idx, label: p.label, branch: p.branch });
      }
    });
    const targetBranch = item.targets[0] || 'Tý';
    const nature = item.type === 'cat' ? 'cát' : (item.type === 'hung' ? 'hung' : 'biến');
    const palace = matchedPillars.length > 0
      ? matchedPillars.map(m => `Trụ ${m.label}`).join(', ')
      : 'Chiếu từ Lưu Niên / Đại Vận';
    stars.push({
      ...item,
      present: matchedPillars.length > 0,
      matchedPillars,
      primaryBranch: targetBranch,
      branch: targetBranch,
      nature,
      palace,
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
    'Tỵ-Thân': 'Vô Ân Chi Hình (Trong hợp có rèn, lấy thành tâm hóa giải)',
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
              name: badge,
              badge,
              nature: (type === 'xung' || type === 'hai' || type === 'hinh') ? 'conflict' : 'harmony',
              pillars: [i, j],
              pillarLabels: [pillars[i].label, pillars[j].label],
              pillarNames: [`Trụ ${pillars[i].label} (${b1})`, `Trụ ${pillars[j].label} (${b2})`],
              pillarText: `Trụ ${pillars[i].label} – Trụ ${pillars[j].label}`,
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
          name: 'Tự Hình · Cẩn trọng',
          badge: 'Tự Hình · Nội tỉnh',
          nature: 'conflict',
          pillars: [i, j],
          pillarLabels: [pillars[i].label, pillars[j].label],
          pillarNames: [`Trụ ${pillars[i].label} (${b1})`, `Trụ ${pillars[j].label} (${b2})`],
          pillarText: `Trụ ${pillars[i].label} – Trụ ${pillars[j].label}`,
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
      name: 'Khí Mạch Nguyệt – Nhật',
      badge: 'Khí Mạch Nguyệt – Nhật',
      nature: 'harmony',
      pillars: [1, 2],
      pillarLabels: [pillars[1]?.label || 'Tháng', pillars[2]?.label || 'Ngày'],
      pillarNames: [`Trụ ${pillars[1]?.label || 'Tháng'} (${pillars[1]?.branch || '—'})`, `Trụ ${pillars[2]?.label || 'Ngày'} (${pillars[2]?.branch || '—'})`],
      pillarText: `Trụ ${pillars[1]?.label || 'Tháng'} – Trụ ${pillars[2]?.label || 'Ngày'}`,
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

  const yongName = isStrong ? 'Thực Thương (Tiết Tú)' : 'Ấn Tinh (Sinh Thân)';
  const xiName = isStrong ? 'Tài Tinh (Khai Lộc)' : 'Tỷ Kiếp (Trợ Thân)';
  const jiName = isStrong ? 'Ấn Tinh (Thái Quá)' : 'Quan Sát (Áp Lực)';
  const pattern = isStrong ? 'Thân Vượng · Thực Thương Tiết Tú' : 'Thân Nhược · Ấn Thụ Sinh Thân';

  const yongReason = isStrong
    ? `Nhật chủ ${dayStem} (${dayElement}) khí lực sung mãn, lấy hành ${yongShen} làm kênh tiết tú tài hoa và mở lối hanh thông.`
    : `Nhật chủ ${dayStem} (${dayElement}) cần nguồn tiếp sức, lấy hành ${yongShen} làm gốc ấn thụ che chở và bồi đắp nội lực.`;
  const xiReason = `Hành ${xiShen} tương trợ trực tiếp cho Dụng Thần ${yongShen}, mang lại cơ hội thuận lợi và quý nhân đồng hành.`;
  const jiReason = `Khi hành ${jiShen} quá vượng dễ làm lệch cán cân mệnh cục; gặp năm/tháng thuộc hành này nên lấy tĩnh thắng động.`;

  return {
    isStrong,
    strengthLabel,
    pattern,
    selfScore: Math.round((selfScore / (selfScore + otherScore)) * 100),
    yongShen: {
      name: yongName,
      element: yongShen,
      role: 'Dụng Thần (Chân Mệnh Cứu Cánh)',
      desc: yongReason,
      reason: yongReason,
    },
    xiShen: {
      name: xiName,
      element: xiShen,
      role: 'Hỷ Thần (Quý Khí Phù Trợ)',
      desc: xiReason,
      reason: xiReason,
    },
    jiShen: {
      name: jiName,
      element: jiShen,
      role: 'Kỵ Thần (Ám Khí Cần Tiết Chế)',
      desc: jiReason,
      reason: jiReason,
    },
  };
}

// Diễn giải Đại vận chỉ là câu hỏi tự đối chiếu. Mốc tuổi và Can Chi phải đến
// từ bộ tính chính; lớp Atlas không tự dựng chặng hoặc năm thay thế.
const TEN_GOD_GUIDANCE = {
    'Tỷ kiên': {
      theme: 'Tự Lập & Củng Cố Bản Lĩnh',
      observe: 'Đối chiếu cách bạn tự quyết và cách bạn phối hợp với người ngang vai.',
      caution: 'Không xem khác biệt là cuộc so sánh hơn thua; làm rõ phần việc của mỗi người.',
      action: 'Chọn một việc bạn tự chịu trách nhiệm và một việc cần thống nhất với người khác.',
    },
    'Kiếp tài': {
      theme: 'Cạnh Tranh & Đột Phá Tốc Độ',
      observe: 'Đối chiếu ranh giới khi góp công, chia chi phí hoặc dùng chung nguồn lực.',
      caution: 'Không nhận lời khi trách nhiệm, giới hạn và cách dừng chưa rõ.',
      action: 'Ghi trước phần việc, giới hạn cam kết và cách đánh giá kết quả.',
    },
    'Thực thần': {
      theme: 'Khơi Nguồn Sáng Tạo & An Nhiên',
      observe: 'Đối chiếu kỹ năng nào bạn muốn rèn đều đặn và ai có thể dùng kết quả đó.',
      caution: 'Không chờ cảm hứng hoặc sự hoàn hảo mới cho người khác xem.',
      action: 'Hoàn thành một sản phẩm nhỏ rồi xin một góp ý cụ thể.',
    },
    'Thương quan': {
      theme: 'Cách Tân & Phá Vỡ Lối Mòn',
      observe: 'Đối chiếu điều gì trong cách làm hiện tại đang gây vướng mắc.',
      caution: 'Tập trung sửa cách làm, không biến phản biện thành phán xét con người.',
      action: 'Thử một thay đổi nhỏ và so sánh kết quả trước, sau.',
    },
    'Thiên tài': {
      theme: 'Cơ Duyên Mở Rộng & Linh Hoạt Tài Lộc',
      observe: 'Đối chiếu cách bạn đánh giá một lời mời hoặc ý tưởng mới.',
      caution: 'Không xem một đề xuất hấp dẫn là cam kết đáng làm khi chưa thử ở quy mô nhỏ.',
      action: 'Đặt giới hạn cho lần thử và điều kiện tiếp tục hoặc dừng.',
    },
    'Chính tài': {
      theme: 'Tích Lũy Bền Vững & Thực Chất',
      observe: 'Đối chiếu việc nào tạo giá trị đều đặn và việc nào đang tiêu tốn nguồn lực.',
      caution: 'Không nhận thêm nghĩa vụ khi chưa tính được thời gian duy trì.',
      action: 'Theo dõi một nguồn lực trong một tháng rồi điều chỉnh theo số liệu tự ghi.',
    },
    'Thất sát': {
      theme: 'Tôi Luyện Bản Lĩnh Trước Sóng Gió',
      observe: 'Đối chiếu cách bạn ưu tiên khi nhiều việc cùng tạo áp lực.',
      caution: 'Không quyết định vội khi còn thiếu thông tin quan trọng.',
      action: 'Chọn bước đầu có thể hoàn thành và xác định lúc cần nhờ hỗ trợ.',
    },
    'Chính quan': {
      theme: 'Danh Vị, Trật Tự & Uy Tín',
      observe: 'Đối chiếu vai trò, tiêu chí hoàn thành và những lời hứa còn mở.',
      caution: 'Không tự ôm kỳ vọng chưa được nói rõ.',
      action: 'Thống nhất một kết quả cần đạt và một mốc kiểm tra với người liên quan.',
    },
    'Thiên ấn': {
      theme: 'Trực Giác Huyền Vi & Chiều Sâu Độc Lập',
      observe: 'Đối chiếu câu hỏi nào khiến bạn muốn tìm hiểu lâu hơn.',
      caution: 'Không chỉ tìm ý kiến đồng tình hoặc đổi hướng trước khi kiểm tra kết quả.',
      action: 'Đối chiếu hai nguồn khác nhau và thử áp dụng một ý vào thực tế.',
    },
    'Chính ấn': {
      theme: 'Quý Nhân Che Chở & Bồi Đắp Đức Độ',
      observe: 'Đối chiếu điều bạn đang học và phần nào cần người hướng dẫn.',
      caution: 'Không đợi biết hết hoặc phụ thuộc mãi vào hướng dẫn mới bắt đầu.',
      action: 'Chọn một nguồn đáng tin, thực hành một phần nhỏ rồi giải thích lại bằng lời mình.',
    },
  };

function parseGanZhi(value = '') {
  const [stem, branch] = String(value).trim().split(/\s+/);
  return {
    stem: STEMS.includes(stem) ? stem : null,
    branch: BRANCHES.includes(branch) ? branch : null,
  };
}

export function buildLuckTimeline(dayStem, pillars, sourceDaYun = [], currentYear = new Date().getFullYear()) {
  if (!Array.isArray(sourceDaYun) || sourceDaYun.length === 0) {
    return {
      available: false,
      reason: 'Bộ tính chính chưa cung cấp đủ mốc Đại vận cho dữ liệu sinh này.',
      cycles: [],
      annuals: [],
    };
  }

  const cycles = sourceDaYun.map((source, sourceIndex) => {
    const { stem, branch } = parseGanZhi(source.ganZhi);
    const tenGod = source.relationWithDay || (stem ? getTenGodRelation(dayStem, stem) : 'Chưa xác định');
    const guidance = TEN_GOD_GUIDANCE[tenGod] || null;
    const startYear = Number(source.startYear);
    const startAge = Number(source.startAge);
    const endAge = Number.isFinite(Number(source.endAge)) ? Number(source.endAge) : startAge + 9;
    const endYear = Number.isFinite(startYear) ? startYear + 9 : null;
    const annuals = Array.isArray(source.liuNian)
      ? source.liuNian.map((annual) => {
          const annualParts = parseGanZhi(annual.ganZhi);
          const annualTenGod = annual.relationWithDay || (annualParts.stem ? getTenGodRelation(dayStem, annualParts.stem) : 'Chưa xác định');
          const annualGuide = TEN_GOD_GUIDANCE[annualTenGod] || null;
          const year = Number(annual.year);
          return {
            year,
            age: Number(annual.age),
            stem: annualParts.stem,
            branch: annualParts.branch,
            han: annualParts.stem && annualParts.branch
              ? `${STEM_META[annualParts.stem].han}${BRANCH_META[annualParts.branch].han}`
              : '—',
            name: annual.ganZhi || 'Chưa xác định',
            element: annual.elements?.[0] || STEM_META[annualParts.stem]?.element || null,
            elements: Array.isArray(annual.elements) ? annual.elements.filter(Boolean) : [],
            tenGod: annualTenGod,
            stage: annualParts.branch ? getLifeStage(dayStem, annualParts.branch) : null,
            naYin: annualParts.stem && annualParts.branch ? getNaYin(annualParts.stem, annualParts.branch) : 'Chưa xác định',
            theme: annualGuide?.theme || 'Chủ đề chưa được duyệt',
            advice: annualGuide?.action || 'Tự ghi nhận điều thực tế đã xảy ra trước khi rút kết luận.',
            isCurrent: year === currentYear,
          };
        })
      : [];

    return {
      index: Number(source.index) || sourceIndex + 1,
      stem,
      branch,
      han: stem && branch ? `${STEM_META[stem].han}${BRANCH_META[branch].han}` : '—',
      name: source.ganZhi || 'Chưa xác định',
      element: source.elements?.[0] || STEM_META[stem]?.element || null,
      branchElement: source.elements?.[1] || BRANCH_META[branch]?.element || null,
      tenGod,
      stage: branch ? getLifeStage(dayStem, branch) : null,
      naYin: stem && branch ? getNaYin(stem, branch) : 'Chưa xác định',
      startAge,
      endAge,
      startYear,
      endYear,
      isCurrent: Number.isFinite(startYear) && currentYear >= startYear && currentYear <= endYear,
      guidance,
      annuals,
    };
  });

  const currentCycle = cycles.find((cycle) => cycle.isCurrent) || cycles[0];
  return {
    available: true,
    cycles,
    annuals: currentCycle?.annuals || [],
  };
}

// Bảng Tàng Can 12 Địa Chi cổ truyền
export const BRANCH_HIDDEN_STEMS = {
  'Tý': ['Quý'],
  'Sửu': ['Kỷ', 'Quý', 'Tân'],
  'Dần': ['Giáp', 'Bính', 'Mậu'],
  'Mão': ['Ất'],
  'Thìn': ['Mậu', 'Ất', 'Quý'],
  'Tỵ': ['Bính', 'Canh', 'Mậu'],
  'Ngọ': ['Đinh', 'Kỷ'],
  'Mùi': ['Kỷ', 'Đinh', 'Ất'],
  'Thân': ['Canh', 'Nhâm', 'Mậu'],
  'Dậu': ['Tân'],
  'Tuất': ['Mậu', 'Tân', 'Đinh'],
  'Hợi': ['Nhâm', 'Giáp'],
};

// Thiên Can Ngũ Hợp
export const STEM_COMBINATIONS = {
  'Giáp-Kỷ': 'Hóa Thổ (Trung Chính Chi Hợp · Trọng tín nghĩa)',
  'Ất-Canh': 'Hóa Kim (Nhân Nghĩa Chi Hợp · Cương nhu tương tế)',
  'Bính-Tân': 'Hóa Thủy (Uy Chế Chi Hợp · Trí tuệ quyền biến)',
  'Đinh-Nhâm': 'Hóa Mộc (Hữu Tình Chi Hợp · Nhân từ sáng tạo)',
  'Mậu-Quý': 'Hóa Hỏa (Đa Lễ Chi Hợp · Lễ tiết rực rỡ)',
};

// Mùa sinh theo Nguyệt Lệnh
const BRANCH_SEASONS = {
  'Dần': { season: 'Đầu Xuân', element: 'Mộc', nature: 'Mộc khí sơ khai, vạn vật nảy chồi' },
  'Mão': { season: 'Giữa Xuân (Xuân Phân)', element: 'Mộc', nature: 'Mộc khí cực thịnh, sinh sôi mãnh liệt' },
  'Thìn': { season: 'Cuối Xuân (Mộ Mộc)', element: 'Thổ', nature: 'Khí xuân chuyển giao, thổ khí dưỡng mộc' },
  'Tỵ': { season: 'Đầu Hạ', element: 'Hỏa', nature: 'Hỏa khí sơ khai, ánh sáng lan tỏa' },
  'Ngọ': { season: 'Giữa Hạ (Hạ Chí)', element: 'Hỏa', nature: 'Hỏa khí cực thịnh, nhiệt huyết bừng sáng' },
  'Mùi': { season: 'Cuối Hạ (Mộ Hỏa)', element: 'Thổ', nature: 'Hỏa thoái thổ vượng, ẩm ấm lắng dịu' },
  'Thân': { season: 'Đầu Thu', element: 'Kim', nature: 'Kim khí sơ sinh, bắt đầu thu liễm' },
  'Dậu': { season: 'Giữa Thu (Thu Phân)', element: 'Kim', nature: 'Kim khí thuần khiết, cương nghị sắc bén' },
  'Tuất': { season: 'Cuối Thu (Mộ Kim)', element: 'Thổ', nature: 'Khô ráo tích tụ, chuẩn bị đón đông' },
  'Hợi': { season: 'Đầu Đông', element: 'Thủy', nature: 'Thủy khí sơ sinh, giá lạnh bắt đầu ngưng tụ' },
  'Tý': { season: 'Giữa Đông (Đông Chí)', element: 'Thủy', nature: 'Thủy khí cực thịnh, sâu thẳm tĩnh lặng' },
  'Sửu': { season: 'Cuối Đông (Mộ Thủy)', element: 'Thổ', nature: 'Hàn thổ tích sương, ấp ủ mầm xuân' },
};

// Sinh lời giải chuyên sâu 4 chiều động cho từng trụ
export function buildDynamicPillarInsight(pillar, chartContext = {}) {
  const { dayStem, dayElement } = chartContext;
  const isDayMaster = pillar.isDayMaster || pillar.label === 'Ngày';
  const stem = pillar.stem;
  const branch = pillar.branch;
  const stemEl = pillar.stemElement || (stem ? STEM_META[stem]?.element : null);
  const branchEl = pillar.branchElement || (branch ? BRANCH_META[branch]?.element : null);
  const naYin = pillar.naYin || 'Chưa xác định';
  const stage = pillar.lifeStage?.name || '—';
  const rel = pillar.stemRelation || (stem && dayStem ? getTenGodRelation(dayStem, stem) : 'Nhật Chủ');

  if (pillar.isUnknown || (!stem && !branch)) {
    return {
      pillar: `Trụ ${pillar.label}`,
      theme: 'Phần Chưa Rõ Giờ Sinh',
      period: 'Thời Hậu Vận & Không Gian Sáng Tạo',
      meaning: 'Chưa có dữ kiện giờ sinh địa phương để tính toán trụ này.',
      question: 'Bạn có thể tự đối chiếu qua nhịp sinh hoạt và dự định cá nhân thay vì chọn một giờ phỏng đoán.',
      domains: {
        career: '75% nền tảng sự nghiệp đã được định hình bởi ba trụ Năm, Tháng, Ngày; phần giờ sinh giữ sự linh hoạt.',
        relationships: 'Mối liên kết thế hệ sau và học trò được bồi đắp tự nhiên qua trải nghiệm sống và sự chia sẻ thiện tâm.',
        strength: 'Khả năng giữ tâm thế tự do, không bị đóng khung trong khuôn mẫu cứng nhắc.',
        blindspot: 'Tránh sốt ruột tìm kiếm một giờ sinh phỏng đoán; hãy tập trung hoàn thiện những gì đang hiển hiện.',
        dailyTip: 'Ghi chép những ý tưởng sáng tạo độc lập vào một cuốn sổ riêng để tự theo dõi mạch phát triển.',
      },
    };
  }

  let theme = '';
  let period = '';
  let meaning = '';
  let question = '';
  let career = '';
  let relationships = '';
  let strength = '';
  let blindspot = '';
  let dailyTip = '';

  if (pillar.label === 'Năm') {
    theme = `Gốc Rễ Niên Thiếu · ${stem || ''} ${branch || ''} (${naYin})`;
    period = 'Từ 1 – 16 tuổi (Thời Niên Thiếu)';
    meaning = `Trụ Năm mang Nạp âm ${naYin}, chi ${branch} (${pillar.animal || ''}) tọa vòng ${stage}. Can ${stem} đóng vai trò ${rel} đối với bản mệnh, phản ánh cội nguồn gia phong và khí chất ban sơ.`;
    question = `Gia phong tổ tiên và môi trường thuở nhỏ đã tôi luyện nên giá trị cốt lõi nào trong con người bạn?`;
    career = `Xu hướng định hình thái độ học tập và nền nếp kỷ luật từ sớm; nạp âm ${naYin} tạo nền móng vững chắc khi bắt đầu bước chân vào đường học thuật.`;
    relationships = `Tương tác với ông bà, cha mẹ chịu ảnh hưởng bởi Can ${stem} (${rel}). Sự tôn trọng cội nguồn giúp củng cố điểm tựa tinh thần.`;
    strength = `Khí chất tự nhiên toát ra vẻ chững chạc; được thừa hưởng phúc đức và nền tảng giáo dưỡng căn bản của gia đình.`;
    blindspot = `Đôi khi những kỳ vọng vô thức thời niên thiếu tạo ra áp lực tâm lý vô hình cần được tự tháo gỡ khi trưởng thành.`;
    dailyTip = `Dành thời gian nhớ về cội nguồn, giữ thái độ hiếu thuận và trân trọng những bài học đầu đời từ gia đình.`;
  } else if (pillar.label === 'Tháng') {
    theme = `Khí Lệnh Lập Nghiệp · ${stem || ''} ${branch || ''} (${naYin})`;
    period = 'Từ 17 – 32 tuổi (Thời Lập Thân Kiến Nghiệp)';
    meaning = `Nguyệt Lệnh chi ${branch} nắm lệnh mùa sinh, là then chốt của toàn cục Tứ Trụ. Can ${stem} lộ ${rel}, kết hợp Nạp âm ${naYin} ở trạng thái ${stage}, định hình phong cách làm việc và sức bật xã hội.`;
    question = `Môi trường nghề nghiệp và thử thách chuyên môn nào giúp bạn phát huy tối đa thế mạnh Nguyệt Lệnh?`;
    career = `Năng lực thực thi mạnh mẽ dưới sự chỉ huy của ${rel}; thích hợp với môi trường coi trọng ${stemEl === 'Hỏa' ? 'tính lan tỏa và sáng tạo' : stemEl === 'Kim' ? 'kỷ luật và tính chính xác cao' : stemEl === 'Thủy' ? 'chiến lược và sự linh hoạt' : stemEl === 'Mộc' ? 'tăng trưởng bền vững và nhân văn' : 'tính thực tế và uy tín bền chặt'}.`;
    relationships = `Giao tiếp với cấp trên, đồng nghiệp và đối tác dựa trên nguyên tắc minh bạch; biết cách xác lập vị thế chuyên môn cá nhân.`;
    strength = `Khả năng chịu tải công việc cao, nắm bắt thời thế nhanh nhạy tại những thời khắc bước ngoặt của dự án.`;
    blindspot = `Áp lực tiến thủ dễ khiến bạn cuốn vào vòng xoáy cạnh tranh; cần phân bổ nhịp nghỉ để không làm cạn kiệt năng lượng.`;
    dailyTip = `Xác định 1 mục tiêu nghề nghiệp trọng tâm trong quý và kiên định hoàn thành thay vì phân tán nhiều mũi nhọn.`;
  } else if (pillar.label === 'Ngày') {
    theme = `Bản Thể Nhật Chủ · ${stem || ''} ${branch || ''} (${naYin})`;
    period = 'Từ 33 – 48 tuổi (Thời Trung Niên & Trưởng Thành)';
    meaning = `Nhật Can ${stem} (${dayElement}) là tâm điểm quán xuyến bản mệnh, chi ${branch} là Bản Cung tọa vòng ${stage}. Nạp âm ${naYin} là bản sắc tâm hồn sâu kín nhất của bạn.`;
    question = `Khi buông bỏ mọi chức danh xã hội, đâu là chân dung con người chân thật nhất mà bạn hướng đến?`;
    career = `Phong cách lãnh đạo cuộc đời tự chủ, có chuẩn mực đạo đức riêng; không dễ bị lung lay bởi ý kiến phán xét từ bên ngoài.`;
    relationships = `Chi Ngày ${branch} đại diện cho không gian hôn nhân và tri kỷ: mong muốn một người đồng hành thấu hiểu chiều sâu, tôn trọng sự độc lập của nhau.`;
    strength = `Nội lực tự phục hồi bền bỉ; tinh thần trách nhiệm cao độ với gia đình nhỏ và những cam kết cá nhân.`;
    blindspot = `Cái tôi nội tâm sâu sắc đôi khi khiến bạn khép kín cảm xúc, làm người bạn đời khó nắm bắt tâm tư.`;
    dailyTip = `Chủ động chia sẻ những cảm nghĩ chân thành với người thân mỗi tuần; học cách thả lỏng khi ở nhà.`;
  } else {
    theme = `Hậu Vận & Sáng Tạo · ${stem || ''} ${branch || ''} (${naYin})`;
    period = 'Từ 49 tuổi trở đi (Hậu Vận & Chiêm Nghiệm)';
    meaning = `Trụ Giờ ${stem} ${branch} đại diện cho thế giới nội tâm thầm kín, con cái, dự án ấp ủ riêng và sự an nhàn về sau. Khí chất ${naYin} ở trạng thái ${stage}.`;
    question = `Di sản tinh thần và những giá trị nhân văn nào bạn muốn lưu giữ và truyền cảm hứng cho thế hệ tiếp nối?`;
    career = `Khả năng cố vấn, truyền đạt tri thức và xây dựng các dự án có tầm nhìn dài hạn; chuyển từ trực tiếp tác chiến sang định hướng chiến lược.`;
    relationships = `Gắn kết hòa ái với thế hệ trẻ, con cái và học trò; đóng vai trò ngọn hải đăng chỉ dẫn bằng trải nghiệm thực chứng.`;
    strength = `Trực giác đúc kết từ thời gian; khả năng nhìn thấu bản chất vấn đề và giữ được sự an nhiên trước biến động.`;
    blindspot = `Cần tránh xu hướng can thiệp quá sâu vào lộ trình tự lập của người trẻ; tôn trọng quyền tự quyết của họ.`;
    dailyTip = `Tập trung vào một sở thích đòi hỏi sự tỉ mỉ tĩnh tâm như đọc sách, làm vườn hoặc viết nhật ký chiêm nghiệm.`;
  }

  return {
    pillar: `Trụ ${pillar.label}`,
    theme,
    period,
    meaning,
    question,
    domains: {
      career,
      relationships,
      strength,
      blindspot,
      dailyTip,
    },
  };
}

// Sinh giải mã động cho từng Ngũ Hành theo quan hệ Lục Thân của Nhật Chủ
export function buildDynamicElementInsight(element, chartContext = {}) {
  const { dayElement, weightedCounts = {} } = chartContext;
  const score = Number(weightedCounts[element] || 0);
  const GEN_ORDER = ['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy'];
  const dIdx = Math.max(0, GEN_ORDER.indexOf(dayElement || 'Thủy'));
  const eIdx = Math.max(0, GEN_ORDER.indexOf(element));

  const relOffset = (eIdx - dIdx + 5) % 5;
  const KINSHIP_ROLES = [
    { role: 'Tỷ Kiếp (Bản Thể Đồng Minh)', desc: 'Tượng trưng cho bản lĩnh tự chủ, ý chí độc lập, bạn bè và người ngang vai.' },
    { role: 'Thực Thương (Tài Hoa Dẫn Xuất)', desc: 'Tượng trưng cho tư duy sáng tạo, năng lực biểu đạt, cống hiến và lan tỏa giá trị.' },
    { role: 'Tài Tinh (Kiểm Soát Thực Tế)', desc: 'Tượng trưng cho năng lực quản lý nguồn lực, sự thực tế, kiên nhẫn và thành quả vật chất.' },
    { role: 'Quan Sát (Kỷ Luật Trật Tự)', desc: 'Tượng trưng cho tinh thần trách nhiệm, danh dự, chuẩn mực và khả năng chịu áp lực.' },
    { role: 'Ấn Tinh (Tri Thức Che Chở)', desc: 'Tượng trưng cho sự học hỏi, trí tuệ tích lũy, sự tĩnh tại và quý nhân bồi đắp căn cơ.' },
  ];
  const kinship = KINSHIP_ROLES[relOffset];

  let stateLabel = '';
  let dynamicAnalysis = '';
  let application = '';

  if (score >= 4.0) {
    stateLabel = 'Đại Vượng (Tỷ trọng áp đảo)';
    dynamicAnalysis = `Hành ${element} mang vai trò ${kinship.role} đạt ${score.toFixed(1)} điểm, giữ thế chủ đạo trong biểu đồ. Năng lượng này thể hiện bạn có thế mạnh vượt trội về ${kinship.desc} Tuy nhiên, khi khí mạch quá dày đặc, cần chủ động tìm kênh dẫn xuất hợp lý để tránh tạo áp lực dư thừa lên các hành khác.`;
    application = `Chuyển hóa năng lượng này vào công việc sáng tạo hoặc các dự án đòi hỏi chiều sâu chuyên môn cao; tránh ôm đồm nhiều việc cùng lúc.`;
  } else if (score >= 2.0) {
    stateLabel = 'Đắc Thế Cân Bằng (Khí lực vững vàng)';
    dynamicAnalysis = `Hành ${element} đạt ${score.toFixed(1)} điểm, giữ thế quân bình lý tưởng. Đóng vai trò ${kinship.role}, đây là chỗ dựa tin cậy giúp bạn duy trì nhịp điệu sinh hoạt và công việc một cách tự nhiên, không thiên lệch.`;
    application = `Duy trì thói quen làm việc có kế hoạch; phát huy năng lực tự nhiên này trong các quyết định hợp tác hàng ngày.`;
  } else if (score >= 0.8) {
    stateLabel = 'Khí Lực Tiềm Ẩn (Có mặt nhưng cần chăm sóc)';
    dynamicAnalysis = `Hành ${element} đạt ${score.toFixed(1)} điểm, xuất hiện vừa phải trong các tàng can hoặc một chi đơn lẻ. Trong vai trò ${kinship.role}, phẩm chất này sẵn sàng phát huy khi có cơ hội hoặc gặp thời điểm tương trợ.`;
    application = `Ý thức rèn luyện thêm tính cách tương ứng; khi cần giải quyết vấn đề thuộc lĩnh vực này, hãy chuẩn bị kỹ lưỡng trước.`;
  } else {
    stateLabel = 'Chưa Lộ Rõ (Khuyết thiếu trong phép đếm)';
    dynamicAnalysis = `Trong phép đếm Can, Chi và tàng can hiện tại, hành ${element} chưa xuất hiện điểm số. Với vai trò ${kinship.role}, điều này không có nghĩa là bạn thiếu năng lực, mà là xu hướng tự nhiên của bạn ít khi bận tâm hoặc bị ràng buộc bởi yếu tố này.`;
    application = `Có thể bù đắp qua môi trường sống, thói quen sinh hoạt hoặc chủ động hợp tác với những người bạn có thế mạnh về hành này.`;
  }

  return {
    element,
    score,
    role: kinship.role,
    roleDesc: kinship.desc,
    stateLabel,
    dynamicAnalysis,
    application,
  };
}

// Sinh giải mã động cho từng Thập Thần
export function buildDynamicTenGodInsight(godName, chartContext = {}) {
  const { tenGodList = [], dayStem = 'Nhâm' } = chartContext;
  const currentGod = tenGodList.find((g) => g.name === godName) || { count: 0, locations: [] };
  const count = Number(currentGod.count || 0);
  const locations = currentGod.locations || [];

  const isExposed = locations.some((loc) => loc.includes('Thiên can'));
  const isHidden = locations.some((loc) => loc.includes('Tàng can'));

  let presenceText = '';
  let strategicAdvice = '';

  if (count === 0) {
    presenceText = 'Khuyết thiếu trong cấu trúc nguyên cục';
    strategicAdvice = `Thập Thần ${godName} không hiện diện ở 4 trụ. Đây là điểm trống tự nhiên: bạn không bị vướng mắc bởi định kiến của năng lượng này, nhưng khi cần đưa ra quyết định liên quan, nên tham vấn thêm góc nhìn từ đối tác hoặc người có sở trường bổ trợ.`;
  } else if (isExposed && isHidden) {
    presenceText = `Lộ Can Chi Đắc Địa (${count.toFixed(1)} điểm: xuất hiện cả ở Thiên can và Tàng can)`;
    strategicAdvice = `Năng lượng ${godName} vừa biểu đạt rõ rệt ra phong thái bên ngoài, vừa có gốc rễ bám rễ sâu bên trong. Đây là một trong những bản sắc chủ đạo của bạn, dễ gây ấn tượng mạnh mẽ với đối tác và cấp trên.`;
  } else if (isExposed) {
    presenceText = `Lộ Thiên Can (${count.toFixed(1)} điểm: hiển thị ở bề mặt giao tiếp)`;
    strategicAdvice = `Tố chất ${godName} phát lộ rõ trong phong cách làm việc và ứng xử xã hội. Người xung quanh dễ dàng nhận ra khí chất này ở bạn; hãy chú ý bồi đắp năng lực thực tế để vẻ ngoài luôn song hành cùng chiều sâu.`;
  } else {
    presenceText = `Ẩn Tàng Chi Khí (${count.toFixed(1)} điểm: tiềm tàng trong tàng can Địa Chi)`;
    strategicAdvice = `Năng lượng ${godName} là viên ngọc ngầm bên trong nội tâm: bạn không phô trương nhưng khi gặp hoàn cảnh thử thách hoặc thời vận thích hợp, nội lực này sẽ bộc phát mang lại kết quả bất ngờ.`;
  }

  return {
    name: godName,
    count,
    locations,
    presenceText,
    strategicAdvice,
  };
}

// Sinh giải mã động cho từng Thần Sát
export function buildDynamicStarInsight(star, chartContext = {}) {
  const baseMeaning = SHENSHA_BEGINNER_MEANINGS[star.name] || {};
  const matchedPillars = star.matchedPillars || [];
  const isPresent = Boolean(star.present || matchedPillars.length > 0);

  const matchedDesc = isPresent
    ? `Tọa vị thực tế tại ${matchedPillars.map((m) => `Trụ ${m.label} (${m.branch})`).join(', ')}`
    : 'Chiếu từ Đại Vận hoặc Lưu Niên khi gặp chi tương ứng';

  let careerPower = baseMeaning.careerPower || 'Gặp thời cơ thuận lợi khi làm việc đúng sở trường.';
  let relationshipEffect = baseMeaning.relationshipEffect || 'Các mối quan hệ xã hội được xây dựng trên sự chân thành.';
  let dos = baseMeaning.dos || 'Giữ chữ tín và trau dồi chuyên môn đều đặn.';
  let donts = baseMeaning.donts || 'Tránh nóng vội hoặc hành động khi chưa cân nhắc kỹ.';

  if (isPresent) {
    const hasMonth = matchedPillars.some((p) => p.label === 'Tháng');
    const hasDay = matchedPillars.some((p) => p.label === 'Ngày');
    if (hasMonth) {
      careerPower = `[Đắc Vị Nguyệt Lệnh] ${careerPower} Năng lực này tác động trực tiếp lên con đường lập nghiệp và chuyên môn chính của bạn.`;
    }
    if (hasDay) {
      relationshipEffect = `[Đắc Vị Nhật Chi] ${relationshipEffect} Năng lượng này chiếu rọi sâu vào đời sống hôn nhân, nội tâm và người bạn đời.`;
    }
  }

  return {
    name: star.name,
    present: isPresent,
    matchedDesc,
    title: baseMeaning.title || star.name,
    nature: baseMeaning.nature || (star.type === 'cat' ? 'Cát Tinh' : 'Nghịch Cảnh Tinh'),
    simpleDesc: baseMeaning.simpleDesc || star.desc,
    careerPower,
    relationshipEffect,
    dos,
    donts,
  };
}

// Thuật toán tổng hợp Chân Dung Con Người Cá Nhân Hóa Đa Tầng
export function synthesizePersonalProfile(chart = {}) {
  const {
    dayStem = 'Nhâm',
    dayBranch = 'Thân',
    dayElement = 'Thủy',
    pillars = [],
    weightedCounts = {},
    shenSha = [],
    interactions = [],
    yongShen = {},
  } = chart;

  const dayPillar = pillars[2] || {};
  const monthPillar = pillars[1] || {};
  const yearPillar = pillars[0] || {};
  const hourPillar = pillars[3] || {};

  const isPartialTime = !hourPillar.stem && !hourPillar.branch;

  // 1. Phân tích Bản thể Cốt cách (Nhật Chủ + Tọa Chi + Nạp Âm Trụ Ngày)
  const archetype = DAY_MASTER_ARCHETYPES[dayStem] || DAY_MASTER_ARCHETYPES['Nhâm'];
  const dayNaYin = dayPillar.naYin || 'Chưa xác định';
  const dayStage = dayPillar.lifeStage?.name || 'Trường Sinh';
  const dayHidden = BRANCH_HIDDEN_STEMS[dayBranch] || [];
  const dayHiddenStemsText = dayHidden.map((s) => `${s} (${STEM_META[s]?.element || ''})`).join(', ');

  const coreEssence = {
    headline: 'Bản Thể Cốt Cách & Nội Tâm Sâu Kín',
    archetypeTitle: `${dayStem} ${dayElement} · ${dayBranch} (${dayNaYin})`,
    naYin: dayNaYin,
    lifeStage: dayStage,
    detail: `Bạn mang hình tượng ${archetype.archetype} (${archetype.tagline}). Can Ngày ${dayStem} tọa chi ${dayBranch} ở trạng thái ${dayStage}, ẩn tàng các khí mạch ${dayHiddenStemsText}. Nạp âm ${dayNaYin} đúc kết nên một bản thể vừa có sự bền bỉ của cốt cách nguyên thủy, vừa có chiều sâu nội tâm tinh tế. ${archetype.personality} Khi đứng trước các bước ngoặt cuộc đời, bạn thường dựa vào trực giác độc lập và tiêu chuẩn đạo đức cá nhân hơn là chạy theo xu hướng đám đông.`,
  };

  // 2. Phân tích Phong cách Hành động & Sự nghiệp (Nguyệt Lệnh + Thập Thần Trụ Tháng)
  const monthBranch = monthPillar.branch || dayBranch;
  const monthSeasonInfo = BRANCH_SEASONS[monthBranch] || { season: 'Tiết mùa cân bằng', nature: 'Khí mạch điều hòa' };
  const monthRel = monthPillar.stemRelation || 'Khí Lệnh Chủ Quản';
  const yongEl = yongShen.yongShen?.element || dayElement;

  const workingStyle = {
    headline: 'Phong Cách Hành Động & Bản Lĩnh Công Việc',
    monthBranch,
    seasonName: monthSeasonInfo.season,
    dominantRole: monthRel,
    detail: `Sinh vào tiết ${monthSeasonInfo.season} (${monthSeasonInfo.nature}), Nguyệt Lệnh trụ Tháng đóng vai trò đề cương dẫn dắt toàn cục. Trụ Tháng nắm lệnh với năng lượng ${monthRel}, cho thấy trong công việc bạn là người ${monthRel.includes('Quan') ? 'coi trọng kỷ luật, trật tự và danh dự nghề nghiệp' : monthRel.includes('Thương') || monthRel.includes('Thực') ? 'giàu óc sáng tạo, luôn muốn cải tiến phương pháp cũ và tạo sản phẩm độc đáo' : monthRel.includes('Tài') ? 'thực tế, nhạy bén với giá trị vật chất và quản lý dòng tiền cẩn trọng' : monthRel.includes('Ấn') ? 'yêu thích sự nghiên cứu bài bản, tiếp thu tri thức có hệ thống và hướng đến sự bền vững' : 'tự lực cánh sinh, dám đương đầu và làm việc độc lập rất tốt'}. Năng lượng điều hòa hướng đến hành ${yongEl}, gợi ý rằng bạn đạt hiệu suất cao nhất khi làm việc trong môi trường minh bạch và có không gian tự chủ phát huy sáng kiến.`,
  };

  // 3. Phân tích Mạng Lưới Xã Hội & Đối Ngoại (Quan Sát vs Tỷ Kiếp + Tương Tác Can Chi)
  const hasHop = interactions.some((it) => it.type === 'hop');
  const hasXung = interactions.some((it) => it.type === 'xung');
  const hasHinh = interactions.some((it) => it.type === 'hinh');

  let interactionNarrative = 'Các trụ bình hòa, mạch khí tương thân, đối nhân xử thế tự nhiên và ít vướng vào các cuộc tranh đua gay gắt.';
  if (hasHop && hasXung) {
    interactionNarrative = 'Lá số có sự đan xen giữa liên kết hòa hợp (Lục Hợp) và động lực bứt phá (Lục Xung): bạn vừa biết cách xây dựng liên minh tin cậy, vừa có dũng khí thay đổi khi mối quan hệ không còn phù hợp giá trị cốt lõi.';
  } else if (hasHop) {
    interactionNarrative = 'Lá số đắc thế Lục Hợp tương trợ: bạn có năng khiếu gắn kết người khác, dễ tạo được sự tin cậy lâu dài và thường gặp quý nhân đồng hành trong các giai đoạn quan trọng.';
  } else if (hasXung || hasHinh) {
    interactionNarrative = 'Lá số chứa mạch khí kích phát (Xung/Hình): tính tình thẳng thắn, không thích sự giả tạo; các mối quan hệ được tôi luyện qua thử thách thực tế, chọn lọc bạn bè rất kỹ.';
  }

  const socialRelation = {
    headline: 'Mạng Lưới Xã Hội & Phong Thái Đối Ngoại',
    summary: interactionNarrative,
    detail: `Trong giao tiếp xã hội, bạn không phải tuýp người dễ dãi làm vừa lòng tất cả mọi người. ${interactionNarrative} Bạn coi trọng sự chân thành và ranh giới rõ ràng; khi đã trao niềm tin cho ai, bạn sẽ là một người đồng hành trung kiên và đáng tin cậy tuyệt đối.`,
  };

  // 4. Điểm Mù Tâm Lý & Hướng Điều Hòa Cân Bằng (Ngũ hành vượng/khuyết + Phản tư an toàn)
  const dominantEntry = Object.entries(weightedCounts).sort((a, b) => b[1] - a[1])[0] || [dayElement, 1];
  const missingElements = Object.entries(weightedCounts).filter(([_, v]) => v === 0).map(([k]) => k);

  let balanceAdvice = '';
  if (dominantEntry[0] === 'Hỏa') {
    balanceAdvice = 'Hỏa khí vượng dễ khiến bạn nóng lòng thấy kết quả ngay; hãy tập thói quen chờ 24 giờ trước khi phản hồi các vấn đề gây bức xúc.';
  } else if (dominantEntry[0] === 'Thủy') {
    balanceAdvice = 'Thủy khí vượng tạo chiều sâu suy ngẫm nhưng dễ sinh lo nghĩ xa xôi; hãy ghi các mục tiêu ra giấy và hành động từng bước nhỏ.';
  } else if (dominantEntry[0] === 'Kim') {
    balanceAdvice = 'Kim khí vượng mang lại tính kỷ luật thép nhưng dễ quá khắt khe; hãy mềm mỏng hơn trong lời nói để không tạo khoảng cách với người thân.';
  } else if (dominantEntry[0] === 'Mộc') {
    balanceAdvice = 'Mộc khí vượng giúp nhiều ý tưởng sinh sôi nhưng dễ phân tán; hãy chọn lọc 1–2 dự án trọng tâm để hoàn thành trọn vẹn.';
  } else {
    balanceAdvice = 'Thổ khí dày dặn giúp giữ chữ tín nhưng dễ ngại thay đổi thói quen cũ; hãy chủ động mở lòng đón nhận những phương pháp tiếp cận mới mẻ.';
  }

  const blindSpotsAndRemedy = {
    headline: 'Điểm Mù Tâm Lý & Hướng Điều Hòa Cân Bằng',
    dominantElement: dominantEntry[0],
    dominantScore: dominantEntry[1].toFixed(1),
    missingElements,
    advice: balanceAdvice,
    detail: `Phép đếm cho thấy hành ${dominantEntry[0]} chiếm tỷ trọng cao nhất (${dominantEntry[1].toFixed(1)} điểm)${missingElements.length > 0 ? `, trong khi hành ${missingElements.join(', ')} chưa xuất hiện điểm số trong các trụ` : ''}. ${balanceAdvice} Việc nhận diện điểm mù này giúp bạn chủ động giữ tâm thế cân bằng, không để áp lực bên ngoài chi phối nhịp sống tự nhiên.`,
  };

  // 5. Xác định 3 Điểm Mạnh Cốt Lõi Tính Toán Thực Tế
  const activeStars = shenSha.filter((s) => s.present);
  const bestStar = activeStars.find((s) => s.name === 'Thiên Ất Quý Nhân' || s.name === 'Văn Xương Quý Nhân' || s.name === 'Lộc Thần') || activeStars[0];

  const strength1 = {
    title: `Bản Lĩnh ${archetype.name} (${dayNaYin})`,
    desc: archetype.superpower,
  };
  const strength2 = {
    title: bestStar ? `Cát Khí ${bestStar.name}` : `Khí Lực Nguyệt Lệnh (${monthSeasonInfo.season})`,
    desc: bestStar ? (bestStar.desc || 'Nhận được sự tương trợ và mở lối từ những cơ duyên thuận lợi.') : `Sức bền thích nghi dẻo dai được nuôi dưỡng từ tiết khí ${monthSeasonInfo.season}.`,
  };
  const strength3 = {
    title: `Chiến Lược ${yongShen.yongShen?.name || 'Tự Lực'}`,
    desc: yongShen.yongShen?.desc || 'Khả năng tập trung vào mục tiêu then chốt để khai thông vận hội.',
  };

  // 6. Mạch Khí Tổng Quát Ngũ Hành
  const flowSummary = `Toàn cục Bát tự của bạn lấy Nhật Can ${dayStem} (${dayElement}) làm trung tâm liên kết. Năng lượng luân chuyển qua Nguyệt Lệnh ${monthBranch} (${monthSeasonInfo.season}) tạo đà vươn lên cho sự nghiệp, trong khi trụ Ngày ${dayStem} ${dayBranch} giữ vai trò điểm neo bình yên cho tâm trí. Đây là cấu trúc có chiều sâu tự lập cao, càng qua trải nghiệm thực tế càng tỏa sáng bản lĩnh.`;

  return {
    title: `Chân Dung Bản Mệnh · ${dayStem} ${dayBranch} (${dayNaYin})`,
    isPartialTime,
    coreEssence,
    workingStyle,
    socialRelation,
    blindSpotsAndRemedy,
    coreStrengths: [strength1, strength2, strength3],
    flowSummary,
  };
}

// Thuật toán Chiêm Nghiệm Con Người Thực Tế & Ranh Giới Sống
// Trả lời 4 câu hỏi cuộc đời cốt lõi: Bản ngã bẩm sinh, Điểm mù/Cạm bẫy ngoại cảnh, Tình duyên, Lời khuyên định tâm
export function synthesizeHumanLifeReading(chart = {}) {
  const {
    dayStem = 'Nhâm',
    dayBranch = 'Thân',
    dayElement = 'Thủy',
    pillars = [],
    weightedCounts = {},
    shenSha = [],
    interactions = [],
    yongShen = {},
    tenGodList = [],
  } = chart;

  const dayPillar = pillars[2] || {};
  const monthPillar = pillars[1] || {};
  const yearPillar = pillars[0] || {};
  const hourPillar = pillars[3] || {};

  const isPartialTime = !hourPillar.stem && !hourPillar.branch;

  const archetype = DAY_MASTER_ARCHETYPES[dayStem] || DAY_MASTER_ARCHETYPES['Nhâm'];
  const dayNaYin = dayPillar.naYin || getNaYin(dayStem, dayBranch);
  const dayStage = dayPillar.lifeStage?.name || getLifeStage(dayStem, dayBranch)?.name || 'Trường Sinh';
  const dayHidden = BRANCH_HIDDEN_STEMS[dayBranch] || [];
  const dayHiddenStemsText = dayHidden.map((s) => `${s} (${STEM_META[s]?.element || ''})`).join(', ');

  const GEN_ORDER = ['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy'];
  const dIdx = Math.max(0, GEN_ORDER.indexOf(dayElement));
  const elComp = dayElement;
  const elOutput = GEN_ORDER[(dIdx + 1) % 5];
  const elWealth = GEN_ORDER[(dIdx + 2) % 5];
  const elPower = GEN_ORDER[(dIdx + 3) % 5];
  const elResource = GEN_ORDER[(dIdx + 4) % 5];

  // 1. Phân tích Thân vượng / Thân nhược / Cân bằng
  const compScore = weightedCounts[elComp] || 0;
  const resScore = weightedCounts[elResource] || 0;
  const selfSupportScore = compScore + resScore;

  const monthBranch = monthPillar.branch || dayBranch;
  const monthSeasonInfo = BRANCH_SEASONS[monthBranch] || { season: 'Tiết mùa điều hòa', nature: 'Khí mạch quân bình' };
  const monthBranchMeta = BRANCH_META[monthBranch] || {};
  const monthElement = monthBranchMeta.element || 'Thổ';

  let dmStrength = 'Cân bằng';
  let dmStrengthReason = 'Khí lực nội tại và áp lực ngoại cảnh giữ thế quân bình động';
  if (selfSupportScore >= 4.0 || monthElement === elComp || monthElement === elResource) {
    dmStrength = 'Vượng';
    dmStrengthReason = 'Được trợ lực mạnh mẽ từ nguyệt lệnh hoặc tỷ kiếp, ấn tinh bồi tụ';
  } else if (selfSupportScore <= 2.2) {
    dmStrength = 'Nhược';
    dmStrengthReason = 'Năng lượng tiêu hao nhiều cho tài tinh, quan sát hoặc thực thương';
  }

  // Ngũ hành vượng nhất và khuyết
  const dominantElementEntry = Object.entries(weightedCounts).sort((a, b) => b[1] - a[1])[0] || [dayElement, 1];
  const missingElements = Object.entries(weightedCounts).filter(([_, v]) => v === 0).map(([k]) => k);

  // Thập thần nổi trội nhất
  const sortedGods = [...tenGodList].sort((a, b) => (b.count || 0) - (a.count || 0));
  const dominantGod = sortedGods[0] || { name: 'Tỷ kiên', group: 'Tỷ Kiếp (Đồng Minh)' };

  // =========================================================================
  // CÂU HỎI 1: BẢN NGÃ BẨM SINH & CỐT CÁCH THỰC SỰ
  // =========================================================================
  const dayBranchElement = BRANCH_META[dayBranch]?.element || 'Kim';
  let stemBranchRelationDesc = '';
  if (dayBranchElement === elResource) {
    stemBranchRelationDesc = `Chi Ngày ${dayBranch} (${dayBranchElement}) tương sinh Can Ngày ${dayStem} (${dayElement}) — hình thành gốc rễ dưỡng mệnh vững chắc, nội tâm có chiều sâu dung nạp và học hỏi bền bỉ.`;
  } else if (dayBranchElement === elOutput) {
    stemBranchRelationDesc = `Can Ngày ${dayStem} (${dayElement}) sinh Chi Ngày ${dayBranch} (${dayBranchElement}) — năng lượng bẩm sinh luôn muốn tỏa sáng, cống hiến giá trị, sáng tạo và biểu đạt cảm xúc chân thành ra bên ngoài.`;
  } else if (dayBranchElement === elComp) {
    stemBranchRelationDesc = `Can Ngày ${dayStem} và Chi Ngày ${dayBranch} cùng mang hành ${dayElement} — cốt cách tự lập rất cao, ý chí độc lập như thép rèn, không dễ bị khuất phục hay phụ thuộc vào người khác.`;
  } else if (dayBranchElement === elWealth) {
    stemBranchRelationDesc = `Can Ngày ${dayStem} (${dayElement}) khắc Chi Ngày ${dayBranch} (${dayBranchElement}) — tư duy thực tế, có đầu óc quản trị nguồn lực nhạy bén và tinh thần trách nhiệm cao với việc cụ thể.`;
  } else {
    stemBranchRelationDesc = `Chi Ngày ${dayBranch} (${dayBranchElement}) khắc Can Ngày ${dayStem} (${dayElement}) — bản mệnh tôi luyện qua thử thách kỷ luật, nghiêm cẩn với chính mình và sở hữu bản lĩnh kiên cường khi đương đầu sóng gió.`;
  }

  const inherentNature = {
    title: '01 · BẢN NGÃ BẨM SINH & CỐT CÁCH THỰC SỰ',
    badge: 'BẢN NGÃ BẨM SINH',
    headline: `${archetype.name} · Hình Tượng ${archetype.archetype}`,
    tagline: archetype.tagline,
    naYin: dayNaYin,
    lifeStage: dayStage,
    dmStrength,
    philosophyQuote: 'Bát tự không phải bản án định sẵn cuộc đời, mà là bản đồ soi chiếu hạt giống tinh thần và khí chất tự nhiên mà bạn sở hữu từ lúc chào đời.',
    narrative: `Bạn mang cốt cách của ${archetype.name} (${archetype.tagline}), biểu trưng bởi hình tượng ${archetype.archetype}. Trong bản thể nguyên thủy, ${archetype.personality} Trụ Ngày ${dayStem} ${dayBranch} tọa ở vòng sinh vượng ${dayStage}, ẩn tàng các khí mạch ${dayHiddenStemsText}. Nạp âm ${dayNaYin} kết hợp cùng khí thế ${dmStrength} (${dmStrengthReason}) định hình nên một con người ${stemBranchRelationDesc} Đây là chiếc neo cốt lõi giúp bạn luôn biết mình là ai khi đứng trước những lựa chọn lớn.`,
    coreGifts: [
      {
        title: `Năng khiếu độc bản (${archetype.name})`,
        desc: archetype.superpower,
      },
      {
        title: `Điểm tựa sinh tồn (${dayNaYin})`,
        desc: `Được bảo bọc bởi nguồn khí Nạp Âm ${dayNaYin} ở trạng thái ${dayStage}, bạn có sức bền nội tâm dẻo dai và khả năng hồi phục sau va vấp vượt trội.`,
      },
      {
        title: 'Trực giác và Tiêu chuẩn sống',
        desc: `Lấy cốt cách ${dayStem} ${dayElement} làm trục, bạn coi trọng sự chân thực và danh dự cá nhân; hiếm khi đánh tráo giá trị sống để thỏa hiệp với những xu hướng hời hợt.`,
      },
    ],
  };

  // =========================================================================
  // CÂU HỎI 2: ĐIỂM MÙ & CẠM BẪY DỄ VẤP TRƯỚC NGOẠI CẢNH
  // =========================================================================
  let dmTrapDetail = '';
  if (dmStrength === 'Vượng') {
    dmTrapDetail = 'Thân Vượng mang lại cho bạn sự tự tin và dũng khí tuyệt vời, nhưng chính cái tôi lớn và sự nghĩa khí dễ biến thành điểm mù khi bước ra đời. Khi gặp bạn bè tâng bốc hoặc bị đối phương "khích tướng", bạn rất dễ nổi máu anh hùng, chi tiền quá tay hoặc vội vàng hùn hạp làm ăn mạo hiểm mà thiếu kiểm tra giấy tờ pháp lý.';
  } else if (dmStrength === 'Nhược') {
    dmTrapDetail = 'Thân Nhược bẩm sinh giàu lòng trắc ẩn, dễ đồng cảm và thấu hiểu lòng người, nhưng điểm mù chí tử của bạn là sự cả nể và sợ làm người khác buồn. Khi ngoại cảnh xuất hiện những kẻ thao túng tâm lý hoặc những mối quan hệ lợi dụng lòng tốt, bạn thường nhận lời gánh vác việc không thuộc trách nhiệm của mình, để rồi tự làm hao tổn sức lực và tài chính.';
  } else {
    dmTrapDetail = 'Cốt cách Thân Cân Bằng giúp bạn giữ được sự tỉnh táo trước nhiều cám dỗ, nhưng điểm mù là thói quen do dự, cân nhắc quá lâu khi thời cơ ập đến. Khi đứng trước những biến động ngoại cảnh phức tạp, bạn dễ bị các luồng ý kiến trái chiều làm phân tán, dẫn đến tình trạng "lắm mối tối nằm không".';
  }

  let dominantElementTrap = '';
  if (dominantElementEntry[0] === 'Hỏa') {
    dominantElementTrap = 'Năng lượng Hỏa áp đảo khiến bạn dễ bị ngoại cảnh kích động cơn nóng vội; khi tức giận bạn dễ đưa ra các quyết định cắt đứt quan hệ hoặc chi tiêu bốc đồng.';
  } else if (dominantElementEntry[0] === 'Thủy') {
    dominantElementTrap = 'Năng lượng Thủy áp đảo khiến tâm trí dễ rơi vào trạng thái suy diễn xa xôi; khi ở một mình lâu bạn dễ bị cảm giác hoài nghi ngoại cảnh bủa vây làm nhụt chí tiến thủ.';
  } else if (dominantElementEntry[0] === 'Kim') {
    dominantElementTrap = 'Năng lượng Kim áp đảo khiến tiêu chuẩn của bạn quá khắt khe; trước sự cẩu thả của người xung quanh bạn dễ phê bình gay gắt làm hẹp đường lui trong quan hệ hợp tác.';
  } else if (dominantElementEntry[0] === 'Mộc') {
    dominantElementTrap = 'Năng lượng Mộc áp đảo khiến bạn có quá nhiều hoài bão cùng lúc; khi thấy xu hướng mới bạn dễ bị cuốn theo dẫn đến tình trạng việc gì cũng biết nhưng khó hoàn tất đến cùng.';
  } else {
    dominantElementTrap = 'Năng lượng Thổ áp đảo khiến bạn rất nặng tình và giữ chữ tín, nhưng lại quá chậm xoay chuyển khi ngoại cảnh đòi hỏi sự linh hoạt; dễ bám víu vào những thói quen cũ đã lỗi thời.';
  }

  const clashes = interactions.filter((it) => it.type === 'xung');
  let clashWarning = 'Các địa chi tương đối bình hòa, ít gặp va chạm bất ngờ với môi trường.';
  if (clashes.length > 0) {
    const clashNames = clashes.map((c) => c.desc || `${c.p1} xung ${c.p2}`).join(', ');
    clashWarning = `Lá số có mạch khí tương xung (${clashNames}): báo hiệu bạn rất dễ vấp phải sự đối đầu trực diện khi làm việc trong môi trường tập thể thiếu minh bạch; cần thận trọng lời ăn tiếng nói khi có tranh luận chuyên môn.`;
  }

  const circumstanceVulnerabilities = {
    title: '02 · ĐIỂM MÙ & CẠM BẪY DỄ VẤP TRƯỚC NGOẠI CẢNH',
    badge: 'ĐIỂM MÙ NGOẠI CẢNH',
    headline: 'Nhận Diện Lực Kéo Ngoại Cảnh Có Thể Làm Sai Lệch Tiềm Năng',
    philosophyQuote: 'Người xưa xem chỉ tay hay Bát tự thường nhắc nhở: Sinh ra mang số giàu sang nhưng nếu ngoại cảnh kết giao bạn xấu, bị lôi kéo vào vòng xoáy đỏ đen thì cả đời cũng khó giữ được tiền của. Bát tự chỉ ra bạn dễ yếu lòng trước cạm bẫy nào để chủ động phòng bị.',
    dmStrength,
    dominantGod: dominantGod.name,
    narrative: `${dmTrapDetail} Thêm vào đó, phép đếm ngũ hành ghi nhận hành ${dominantElementEntry[0]} chiếm tỷ trọng cao nhất (${dominantElementEntry[1].toFixed(1)} điểm). ${dominantElementTrap} ${clashWarning} Nhận biết rõ những cạm bẫy này chính là chiếc khiên bảo vệ tiềm năng của bạn nguyên vẹn.`,
    trapsToAvoid: [
      {
        title: 'Cạm bẫy Bạn bè & Kết giao',
        desc: dmStrength === 'Vượng' 
          ? 'Tránh xa những nhóm bạn chỉ tìm đến bạn khi ăn nhậu, bàn chuyện kiếm tiền mạo hiểm hoặc thích khích bác cái tôi của bạn.'
          : 'Tuyệt đối không đứng ra vay mượn hộ, bảo lãnh tài chính hoặc nhận lời gánh nợ thay cho người khác vì cả nể.',
      },
      {
        title: 'Cạm bẫy Tài chính & Đầu tư',
        desc: `Cẩn trọng trước các lời hứa hẹn "lợi nhuận nhanh, không rủi ro". Với năng lượng ${dominantGod.name} (${dominantGod.group}), bạn chỉ nên đầu tư vào những lĩnh vực mà bản thân có kiến thức kiểm soát thực tế.`,
      },
      {
        title: 'Cạm bẫy Cảm xúc & Phản ứng',
        desc: `${dominantElementTrap} Tập thói quen "dừng lại 24 giờ" trước khi đưa ra quyết định phản hồi các vấn đề gây bức xúc ngoài xã hội.`,
      },
    ],
  };

  // =========================================================================
  // CÂU HỎI 3: TÌNH DUYÊN & DUYÊN NỢ CỦA BẠN
  // =========================================================================
  let spousalRelationHeadline = '';
  let spousalRelationDesc = '';
  let partnerArchetype = '';
  let harmonyAdvice = '';

  if (dayBranchElement === elResource) {
    spousalRelationHeadline = 'Cung Phu Thê Sinh Nhật Can · Duyên Được Che Chở & Yêu Thương';
    spousalRelationDesc = `Chi Ngày ${dayBranch} (${dayBranchElement}) tương sinh Can Ngày ${dayStem} (${dayElement}). Trong hôn nhân, người phối ngẫu đóng vai trò như người bảo hộ tinh thần: chu đáo, biết săn sóc, giỏi lắng nghe và sẵn sàng làm hậu phương vững chãi cho bạn phát triển sự nghiệp.`;
    partnerArchetype = 'Người bạn đời điềm đạm, có chiều sâu bao dung, biết cách chăm lo gia đình và có trách nhiệm cao với mái ấm.';
    harmonyAdvice = 'Bạn dễ sinh tâm lý ỷ lại hoặc xem sự chu đáo của người ấy là điều đương nhiên. Hãy chủ động chia sẻ việc nhà và bày tỏ sự biết ơn để mối quan hệ luôn ấm áp.';
  } else if (dayBranchElement === elOutput) {
    spousalRelationHeadline = 'Nhật Can Sinh Cung Phu Thê · Mẫu Người Hết Lòng Tận Tụy Cho Đi';
    spousalRelationDesc = `Can Ngày ${dayStem} (${dayElement}) sinh Chi Ngày ${dayBranch} (${dayBranchElement}). Trong tình yêu, bạn là người trao đi rất nhiều: từ sự chăm chút tỉ mỉ đến việc lo toan tương lai cho đối phương. Bạn tìm thấy niềm vui khi thấy người mình yêu được hạnh phúc.`;
    partnerArchetype = 'Người bạn đời cởi mở, biết đón nhận tình cảm, đánh giá cao sự sáng tạo và cần sự quan tâm chăm sóc từ bạn.';
    harmonyAdvice = 'Tránh tình trạng cho đi quá nhiều rồi sinh ra mong cầu ngầm đối phương phải hồi đáp tương xứng. Hãy dành không gian riêng cho chính mình và tôn trọng sự tự do của bạn đời.';
  } else if (dayBranchElement === elComp) {
    spousalRelationHeadline = 'Can Chi Đồng Khí Tọa Phu Thê · Tình Yêu Tri Kỷ & Thử Thách Cái Tôi';
    spousalRelationDesc = `Can Ngày ${dayStem} và Chi Ngày ${dayBranch} cùng mang hành ${dayElement} (Tọa Tỷ Kiếp). Mối quan hệ vợ chồng mang màu sắc của hai người bạn thân thiết, bằng vai phải lứa, cùng nhau vượt khó và chia sẻ mọi thăng trầm cuộc sống.`;
    partnerArchetype = 'Người bạn đời có cá tính độc lập, tài năng, có quan điểm rõ ràng và không chịu lép vế.';
    harmonyAdvice = 'Khi xảy ra tranh cãi, cái tôi của cả hai rất dễ bốc hỏa. Cần ghi nhớ nguyên tắc: "Trong gia đình, tình cảm quan trọng hơn lý lẽ". Học cách chủ động làm lành trước sẽ giữ trọn hạnh phúc.';
  } else if (dayBranchElement === elWealth) {
    spousalRelationHeadline = 'Nhật Can Khắc Cung Phu Thê · Trọng Tính Thực Tế & Muốn Làm Chủ Mái Ấm';
    spousalRelationDesc = `Can Ngày ${dayStem} (${dayElement}) khắc Chi Ngày ${dayBranch} (${dayBranchElement}) (Tọa Tài Tinh). Bạn là người có xu hướng định hướng đường lối, quản lý tài chính và muốn gia đình vận hành theo một trật tự ổn định, hiệu quả.`;
    partnerArchetype = 'Người bạn đời hiền hậu, khéo léo vun vén tài chính, biết lắng nghe và tôn trọng sự định hướng của bạn.';
    harmonyAdvice = 'Đừng mang sự tính toán công việc hay nguyên tắc khô khan vào phòng ngủ. Hãy lắng nghe những tâm tư nhỏ nhặt của người ấy mà không phán xét hay vội vàng đưa ra giải pháp.';
  } else {
    spousalRelationHeadline = 'Cung Phu Thê Khắc Nhật Can · Bạn Đời Kỷ Luật & Có Uy Quyền';
    spousalRelationDesc = `Chi Ngày ${dayBranch} (${dayBranchElement}) khắc Can Ngày ${dayStem} (${dayElement}) (Tọa Quan Sát). Người phối ngẫu của bạn là người có nguyên tắc sống vững chãi, cá tính mạnh mẽ, có vị thế xã hội hoặc xuất thân gia phong nghiêm cẩn.`;
    partnerArchetype = 'Người bạn đời chững chạc, cương trực, có khả năng dẫn dắt nhưng đôi khi tạo áp lực kỳ vọng cao lên bạn.';
    harmonyAdvice = 'Lấy sự mềm mỏng, thấu hiểu và chân thành để hóa giải sự cứng rắn của đối phương. Tránh đối đầu trực diện khi cả hai đang có áp lực từ công việc bên ngoài.';
  }

  // Thần sát tình cảm
  const hasDaoHoa = shenSha.some((s) => s.name === 'Đào Hoa' && s.present);
  const hasCoThan = shenSha.some((s) => (s.name === 'Cô Thần' || s.name === 'Quả Tú') && s.present);
  let loveStarNote = '';
  if (hasDaoHoa) {
    loveStarNote = 'Lá số đắc khí Đào Hoa: Bạn có sức hút giao tiếp tự nhiên và duyên ăn nói; cần giữ ranh giới rõ ràng trong các mối quan hệ xã giao để tránh làm người bạn đời bất an.';
  } else if (hasCoThan) {
    loveStarNote = 'Lá số có bóng dáng Cô Thần / Quả Tú: Nội tâm bạn có những góc khuất sâu kín thích một mình; người bạn đời cần tôn trọng những khoảng lặng đó mà không trách cứ bạn lạnh lùng.';
  } else {
    loveStarNote = 'Mạch khí tình cảm hướng đến sự ổn định lâu dài, trân trọng giá trị gia đình truyền thống.';
  }

  const loveAndRelationships = {
    title: '03 · TÌNH DUYÊN & DUYÊN NỢ CỦA BẠN',
    badge: 'TÌNH DUYÊN & PHỐI NGẪU',
    headline: spousalRelationHeadline,
    dayBranch,
    dayBranchElement,
    philosophyQuote: 'Tình duyên trong Bát tự không nói trước người bạn lấy tên gì hay ngày nào cưới, mà phản ánh Cung Phu Thê (Trụ Ngày) — nơi cất giữ kỳ vọng nội tâm sâu kín và cách bạn đối xử với người đồng hành.',
    narrative: `${spousalRelationDesc} ${loveStarNote}`,
    harmonyPoints: [
      {
        title: 'Mẫu người phối ngẫu bù trừ tốt nhất',
        desc: partnerArchetype,
      },
      {
        title: 'Điểm dễ gây cọ xát trong đời sống chung',
        desc: `Cung Phu Thê tại ${dayBranch} đòi hỏi sự thấu hiểu về cách biểu đạt tình cảm. Khác biệt về ngôn ngữ tình yêu nếu không được giãi bày sẽ dễ tích tụ thành sự lạnh nhạt.`,
      },
      {
        title: 'Bí quyết giữ lửa hạnh phúc bền lâu',
        desc: harmonyAdvice,
      },
    ],
  };

  // =========================================================================
  // CÂU HỎI 4: LỜI KHUYÊN ĐỊNH TÂM & THIẾT LẬP RANH GIỚI
  // =========================================================================
  const yongEl = yongShen.yongShen?.element || dayElement;
  const yongName = yongShen.yongShen?.name || 'Tự Lực Cân Bằng';

  let yongShenAdvice = '';
  let dailyHabitAction = '';
  if (yongEl === 'Mộc') {
    yongShenAdvice = 'Dụng Thần hướng về hành Mộc (sinh sôi, nhân từ, học hỏi). Bạn cần nuôi dưỡng tư duy phát triển dài hạn, liên tục trau dồi tri thức mới và mở rộng lòng từ bi.';
    dailyHabitAction = 'Dành 15 phút mỗi sáng đi bộ dưới tán cây xanh hoặc đọc 1 chương sách hay để khởi động trí tuệ.';
  } else if (yongEl === 'Hỏa') {
    yongShenAdvice = 'Dụng Thần hướng về hành Hỏa (nhiệt huyết, minh bạch, lan tỏa). Bạn cần duy trì tinh thần lạc quan, chủ động kết nối xã hội và làm việc với năng lượng cởi mở.';
    dailyHabitAction = 'Đón ánh nắng sớm 10 phút, mỉm cười chào ngày mới và giữ không gian làm việc tràn ngập ánh sáng tự nhiên.';
  } else if (yongEl === 'Thổ') {
    yongShenAdvice = 'Dụng Thần hướng về hành Thổ (trầm tĩnh, chữ tín, tích lũy). Bạn cần xây dựng thói quen làm việc chắc chắn từng bước, coi trọng chữ tín và xây dựng nền tảng tài chính an toàn.';
    dailyHabitAction = 'Ăn uống đúng bữa, ngồi thiền tĩnh lặng 10 phút và ghi chép chi tiêu rõ ràng mỗi tối.';
  } else if (yongEl === 'Kim') {
    yongShenAdvice = 'Dụng Thần hướng về hành Kim (kỷ luật, dứt khoát, thanh lọc). Bạn cần rèn luyện tính kỷ luật thép, dũng cảm cắt tỉa những mối quan hệ vô bổ và kiên định với mục tiêu.';
    dailyHabitAction = 'Giữ bàn làm việc ngăn nắp tối giản, rèn luyện thể thao 20 phút và lập danh sách việc cần làm trước khi bắt đầu.';
  } else {
    yongShenAdvice = 'Dụng Thần hướng về hành Thủy (linh hoạt, trí tuệ, lắng đọng). Bạn cần học cách ứng biến mềm mại trước nghịch cảnh, nuôi dưỡng trực giác và chiều sâu nội tâm.';
    dailyHabitAction = 'Uống đủ nước ấm vào buổi sáng, dành thời gian viết nhật ký phản tư trước khi ngủ.';
  }

  const groundingAdvice = {
    title: '04 · LỜI KHUYÊN ĐỊNH TÂM & THIẾT LẬP RANH GIỚI',
    badge: 'RANH GIỚI & ĐỊNH TÂM',
    headline: `Thiết Lập Bộ Lọc Ngoại Cảnh & Kỷ Luật Để Bảo Vệ Tiềm Năng (${yongName})`,
    philosophyQuote: 'Biết mình là ai chưa đủ; bảo vệ được mình trước sóng gió mới giúp ta chạm đến đỉnh cao của tiềm năng. Dưới đây là 3 chiếc "neo tâm" giúp bạn giữ vững tay chèo giữa biến thiên cuộc đời.',
    yongShenElement: yongEl,
    yongShenName: yongName,
    narrative: `${yongShenAdvice} Khi cuộc sống xô bồ khiến bạn mỏi mệt, việc quay về kết nối với năng lượng hành ${yongEl} sẽ giúp bạn nhanh chóng tái tạo nguyên khí và đưa ra những quyết định sáng suốt nhất.`,
    boundaryPrinciples: [
      {
        title: 'Bộ lọc kết giao & Chọn môi trường',
        desc: `Chủ động thanh lọc vòng tròn bạn bè: chỉ giữ lại những mối quan hệ chân thành, tôn trọng sự phát triển của nhau. Nói "Không" dứt khoát với những môi trường tiêu cực hoặc thích lôi kéo vào việc mờ ám.`,
      },
      {
        title: 'Ranh giới kỷ luật cá nhân',
        desc: 'Thiết lập quy tắc "48 giờ": trước bất kỳ quyết định tài chính, đầu tư hay thay đổi công việc quan trọng nào, hãy cho bản thân 48 giờ tĩnh tâm suy xét độc lập, không để cảm xúc đám đông chi phối.',
      },
      {
        title: 'Thói quen định tâm mỗi ngày',
        desc: dailyHabitAction,
      },
    ],
  };

  return {
    title: `Bản Đọc Chiêm Nghiệm Con Người · ${dayStem} ${dayBranch} (${dayNaYin})`,
    dayStem,
    dayBranch,
    dayElement,
    archetypeTitle: `${archetype.name} · ${archetype.archetype}`,
    isPartialTime,
    partialTimeNotice: isPartialTime
      ? 'Lá số của bạn chưa rõ giờ sinh: 75% cấu trúc căn bản (Niên thiếu, Lập nghiệp, Bản ngã cốt cách & Duyên nợ hôn nhân) đã được phân tích chuẩn xác qua 3 trụ Năm – Tháng – Ngày. 25% hậu vận và năng lượng tiềm ẩn của trụ Giờ được để mở như một khoảng trời tự do để bạn tự tay kiến tạo.'
      : null,
    inherentNature,
    circumstanceVulnerabilities,
    loveAndRelationships,
    groundingAdvice,
  };
}

// Hàm tổng hợp: Làm giàu toàn diện dữ liệu Lá Số cho 5 Đại Bản Đồ
export function enrichBaziChart(chart) {
  let rawPillars = chart?.pillars;
  if (!Array.isArray(rawPillars) || rawPillars.length === 0) {
    if (chart?.bazi) {
      const bz = chart.bazi;
      rawPillars = [
        { label: 'Năm', name: `${bz.year?.stem || ''} ${bz.year?.branch || ''}`.trim(), ...(bz.year || {}) },
        { label: 'Tháng', name: `${bz.month?.stem || ''} ${bz.month?.branch || ''}`.trim(), ...(bz.month || {}) },
        { label: 'Ngày', name: `${bz.day?.stem || ''} ${bz.day?.branch || ''}`.trim(), ...(bz.day || {}) },
        { label: 'Giờ', name: `${bz.hour?.stem || ''} ${bz.hour?.branch || ''}`.trim(), ...(bz.hour || {}) },
      ];
    } else {
      return {
        ...chart,
        dataAvailable: false,
        dataError: 'Bộ tính chính không trả về Tứ trụ. Mệnh Quán không dựng lá số mẫu thay thế.',
        pillars: [],
        weightedCounts: { Mộc: 0, Hỏa: 0, Thổ: 0, Kim: 0, Thủy: 0 },
        shenSha: [],
        interactions: [],
        timeline: { available: false, cycles: [], annuals: [] },
        tenGodList: [],
      };
    }
  }

  // Xác định Nhật Can
  const dayPillarRaw = rawPillars[2] || {};
  let dayStem = dayPillarRaw.stem || chart?.dayMaster;
  let dayBranch = dayPillarRaw.branch;
  if (!dayStem || !STEMS.includes(dayStem)) {
    const parts = (dayPillarRaw.name || '').split(' ');
    dayStem = STEMS.includes(parts[0]) ? parts[0] : null;
    dayBranch = BRANCHES.includes(parts[1]) ? parts[1] : null;
  }
  if (!dayBranch || !BRANCHES.includes(dayBranch)) {
    const parts = (dayPillarRaw.name || '').split(' ');
    dayBranch = BRANCHES.includes(parts[1]) ? parts[1] : null;
  }
  if (!dayStem || !dayBranch) {
    return {
      ...chart,
      dataAvailable: false,
      dataError: 'Trụ Ngày chưa đủ Can Chi để xác định Nhật chủ. Mệnh Quán không dùng giá trị mặc định thay thế.',
      pillars: rawPillars,
      weightedCounts: { Mộc: 0, Hỏa: 0, Thổ: 0, Kim: 0, Thủy: 0 },
      shenSha: [],
      interactions: [],
      timeline: { available: false, cycles: [], annuals: [] },
      tenGodList: [],
    };
  }
  const dayElement = chart?.dayElement || STEM_META[dayStem]?.element || 'Thủy';

  const enrichedPillars = rawPillars.map((p, idx) => {
    const parts = (p.name || '').split(' ');
    const stem = (p.stem && STEMS.includes(p.stem)) ? p.stem : (STEMS.includes(parts[0]) ? parts[0] : null);
    const branch = (p.branch && BRANCHES.includes(p.branch)) ? p.branch : (BRANCHES.includes(parts[1]) ? parts[1] : null);
    const sMeta = stem ? STEM_META[stem] : null;
    const bMeta = branch ? BRANCH_META[branch] : null;
    const lifeStage = (stem && branch) ? getLifeStage(dayStem, branch) : null;
    const naYin = (stem && branch) ? getNaYin(stem, branch) : 'Chưa xác định';
    const kongWang = (stem && branch) ? getKongWang(stem, branch) : [];

    const palaceNames = ['Tổ Nghiệp & Căn Cơ', 'Nguyệt Lệnh & Sự Nghiệp', 'Bản Mệnh & Phối Ngẫu', 'Hậu Vận & Tâm Nguyện'];
    const isUnknown = !stem && !branch;
    const basePillar = {
      ...p,
      index: idx,
      isUnknown,
      palaceTitle: palaceNames[idx] || p.label,
      stem,
      branch,
      stemHan: sMeta?.han || (p.raw ? p.raw[0] : '—'),
      branchHan: bMeta?.han || (p.raw ? p.raw[1] : '—'),
      stemElement: sMeta?.element || (stem ? p.elements?.[0] : null),
      branchElement: bMeta?.animal ? bMeta.element : (branch ? p.elements?.[1] : null),
      polarity: sMeta?.polarity || (stem ? 'Dương' : null),
      animal: bMeta?.animal || (branch ? 'Ẩn tàng' : 'Chưa rõ giờ sinh'),
      lifeStage,
      naYin,
      kongWang,
      isDayMaster: idx === 2,
    };
    return {
      ...basePillar,
      dynamicInsight: buildDynamicPillarInsight(basePillar, { dayStem, dayElement }),
    };
  });

  // Đếm ngũ hành toàn cục (Can Chi + Tàng Can có trọng số, không cộng điểm ảo nếu khuyết giờ)
  const counts = { Mộc: 0, Hỏa: 0, Thổ: 0, Kim: 0, Thủy: 0, ...(chart?.counts || {}) };
  const weightedCounts = { Mộc: 0, Hỏa: 0, Thổ: 0, Kim: 0, Thủy: 0 };
  enrichedPillars.forEach((p, idx) => {
    const weight = idx === 1 ? 1.5 : 1.0; // Nguyệt lệnh trọng số cao
    if (p.stem && p.stemElement && weightedCounts[p.stemElement] !== undefined) {
      weightedCounts[p.stemElement] += 1.0;
    }
    if (p.branch && p.branchElement && weightedCounts[p.branchElement] !== undefined) {
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
  const timeline = buildLuckTimeline(dayStem, enrichedPillars, chart?.daYun);

  // Thống kê 10 Thập Thần
  const tenGodStats = {};
  const GEN_ORDER = ['Mộc', 'Hỏa', 'Thổ', 'Kim', 'Thủy'];
  const dIdx = Math.max(0, GEN_ORDER.indexOf(dayElement));
  const elComp = dayElement;
  const elOutput = GEN_ORDER[(dIdx + 1) % 5];
  const elWealth = GEN_ORDER[(dIdx + 2) % 5];
  const elPower = GEN_ORDER[(dIdx + 3) % 5];
  const elResource = GEN_ORDER[(dIdx + 4) % 5];

  const ALL_TEN_GODS = [
    { name: 'Tỷ kiên', group: 'Tỷ Kiếp (Đồng Minh)', element: elComp, desc: 'Bản lĩnh tự chủ, ý chí độc lập, bạn bè đồng chí hướng.' },
    { name: 'Kiếp tài', group: 'Tỷ Kiếp (Đồng Minh)', element: elComp, desc: 'Sức bật cạnh tranh, hành động quyết liệt, dám đương đầu.' },
    { name: 'Thực thần', group: 'Thực Thương (Tài Hoa)', element: elOutput, desc: 'Tư duy nghệ thuật, phúc lộc tự nhiên, tâm hồn rộng mở.' },
    { name: 'Thương quan', group: 'Thực Thương (Tài Hoa)', element: elOutput, desc: 'Trí tuệ sắc bén, phá cách đổi mới, tài hùng biện xuất chúng.' },
    { name: 'Chính tài', group: 'Tài Tinh (Tài Lộc)', element: elWealth, desc: 'Tài chính minh bạch, cần cù tích lũy, trọng chữ tín.' },
    { name: 'Thiên tài', group: 'Tài Tinh (Tài Lộc)', element: elWealth, desc: 'Nhạy bén thương trường, cơ duyên bất ngờ, hào sảng rộng rãi.' },
    { name: 'Chính quan', group: 'Quan Sát (Danh Vị)', element: elPower, desc: 'Kỷ luật, danh dự, trách nhiệm và vị thế chính thống.' },
    { name: 'Thất sát', group: 'Quan Sát (Danh Vị)', element: elPower, desc: 'Uy quyền quyết đoán, bản lĩnh mở đường trong nghịch cảnh.' },
    { name: 'Chính ấn', group: 'Ấn Tinh (Tri Thức)', element: elResource, desc: 'Lòng nhân hậu, học vấn chính thống, quý nhân che chở.' },
    { name: 'Thiên ấn', group: 'Ấn Tinh (Tri Thức)', element: elResource, desc: 'Trực giác huyền học, tư duy độc bản, thấu suốt ẩn vi.' },
  ];

  function normalizeGodName(str) {
    if (!str) return '';
    const clean = str.includes('·') ? str.split('·')[1].trim() : str.trim();
    return clean.toLowerCase();
  }

  ALL_TEN_GODS.forEach(g => {
    tenGodStats[g.name] = { ...g, count: 0, locations: [] };
  });

  enrichedPillars.forEach(p => {
    if (p.stemRelation) {
      const match = ALL_TEN_GODS.find(g => g.name.toLowerCase() === normalizeGodName(p.stemRelation));
      if (match && tenGodStats[match.name]) {
        tenGodStats[match.name].count += 1;
        tenGodStats[match.name].locations.push(`Thiên can Trụ ${p.label}`);
      }
    }
    (p.hiddenRelations || []).forEach((rel, idx) => {
      const match = ALL_TEN_GODS.find(g => g.name.toLowerCase() === normalizeGodName(rel));
      if (match && tenGodStats[match.name]) {
        tenGodStats[match.name].count += idx === 0 ? 0.8 : 0.4;
        tenGodStats[match.name].locations.push(`Tàng can ${p.hiddenStems?.[idx] || ''} (Trụ ${p.label})`);
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
        label: 'Dữ kiện Nhật chủ',
        title: `${dayStem} · ${dayElement}`,
        subtitle: 'Tên Can và hành của trụ Ngày',
        detail: 'Đây là dữ kiện dùng làm mốc so sánh các quan hệ Can Chi; không phải nhãn tính cách cố định.',
      },
      {
        id: 'dominant',
        label: 'Ngũ Khí Nổi Trội Nhất',
        title: `Hành ${dominantElementEntry[0]} (${dominantElementEntry[1].toFixed(1)} điểm)`,
        subtitle: 'Tỷ trọng trong phép đếm đang dùng',
        detail: `Hành ${dominantElementEntry[0]} có tỷ trọng cao nhất trong phép đếm Can, Chi và tàng can; con số này không tự suy ra tính cách, sức khỏe hay vận hạn.`,
      },
      {
        id: 'remedy',
        label: 'Khí Mạch Cần Lưu Tâm',
        title: missingElements.length > 0 ? `Chưa thấy trong phép đếm: ${missingElements.join(', ')}` : 'Năm hành đều xuất hiện trong phép đếm',
        subtitle: missingElements.length > 0 ? 'Phép đếm ghi nhận điểm 0 ở can chi' : 'Năm hành đều có mặt trong bốn trụ',
        detail: missingElements.length > 0 
          ? `Trong bốn trụ và tàng can hiện chưa thấy xuất hiện hành ${missingElements.join(', ')}. Đây là dữ kiện đếm số lượng, không dùng để chẩn đoán sức khỏe hay vận hạn.`
          : `Lá số ghi nhận đủ 5 ngũ hành trong Can, Chi và tàng can. Bạn có thể tự đối chiếu nhịp điệu sinh hoạt qua biểu đồ Ngũ hành.`,
      },
    ],
    shenShaMeanings: SHENSHA_BEGINNER_MEANINGS,
  };

  const personalProfile = synthesizePersonalProfile({
    dayStem,
    dayBranch,
    dayElement,
    pillars: enrichedPillars,
    weightedCounts,
    shenSha,
    interactions,
    yongShen,
    timeline,
    tenGodList: Object.values(tenGodStats),
  });

  const humanReading = synthesizeHumanLifeReading({
    dayStem,
    dayBranch,
    dayElement,
    pillars: enrichedPillars,
    weightedCounts,
    shenSha,
    interactions,
    yongShen,
    timeline,
    tenGodList: Object.values(tenGodStats),
  });

  const dynamicElementInsights = {};
  GEN_ORDER.forEach((el) => {
    dynamicElementInsights[el] = buildDynamicElementInsight(el, { dayElement, weightedCounts });
  });

  const dynamicTenGodInsights = {};
  ALL_TEN_GODS.forEach((g) => {
    dynamicTenGodInsights[g.name] = buildDynamicTenGodInsight(g.name, { tenGodList: Object.values(tenGodStats), dayStem });
  });

  const dynamicStarInsights = {};
  shenSha.forEach((s) => {
    dynamicStarInsights[s.name] = buildDynamicStarInsight(s, { dayStem, dayBranch, pillars: enrichedPillars });
  });

  return {
    ...chart,
    dataAvailable: true,
    dayStem,
    dayBranch,
    dayElement,
    dayMasterMeta: STEM_META[dayStem] || STEM_META['Nhâm'],
    pillars: enrichedPillars,
    counts,
    weightedCounts,
    shenSha,
    interactions,
    yongShen,
    timeline,
    tenGodList: Object.values(tenGodStats),
    beginnerGuide,
    personalProfile,
    humanReading,
    dynamicElementInsights,
    dynamicTenGodInsights,
    dynamicStarInsights,
  };
}
