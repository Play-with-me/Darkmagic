/**
 * src/atlas/icons.mjs
 * Bộ sưu tập Icon nét mảnh phong cách Lucide SVG (strokeWidth: 1.5 - 2)
 * Thay thế toàn bộ emoji thô bằng các biểu tượng vector thanh lịch, chuẩn mực.
 */

export function createIcon(svgDef) {
  return function IconComponent({
    React,
    size = 18,
    color = "currentColor",
    strokeWidth = 1.6,
    className = "",
    style = {},
    ...props
  }) {
    const r = React || globalThis.React;
    if (!r || !r.createElement) {
      return null;
    }
    return r.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: color,
        strokeWidth,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: `atlas-icon ${className}`.trim(),
        style: { verticalAlign: "middle", flexShrink: 0, ...style },
        ...props,
      },
      svgDef.map(([tag, attrs], idx) => r.createElement(tag, { key: idx, ...attrs }))
    );
  };
}

// 1. Compass / La Kinh
export const CompassIcon = createIcon([
  ["circle", { cx: 12, cy: 12, r: 10 }],
  ["polygon", { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" }],
]);

// 2. Sparkles / Tinh Hoa / Thần Sát
export const SparklesIcon = createIcon([
  ["path", { d: "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" }],
  ["path", { d: "M5 3v4" }],
  ["path", { d: "M19 17v4" }],
  ["path", { d: "M3 5h4" }],
  ["path", { d: "M17 19h4" }],
]);

// 3. Flame / Hỏa Tinh
export const FlameIcon = createIcon([
  ["path", { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" }],
]);

// 4. Droplets / Thủy Tinh
export const DropletIcon = createIcon([
  ["path", { d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" }],
]);

// 5. Mountain / Thổ Tinh
export const MountainIcon = createIcon([
  ["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z" }],
]);

// 6. Trees / Mộc Tinh
export const TreeIcon = createIcon([
  ["path", { d: "M12 19V5" }],
  ["path", { d: "M5 19h14" }],
  ["path", { d: "m12 5-6 7h4l-3 4h10l-3-4h4l-6-7z" }],
]);

// 7. Shield / Kim Tinh
export const ShieldIcon = createIcon([
  ["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }],
]);

// 8. ScrollText / Sách Gấm / Luận Giải
export const ScrollTextIcon = createIcon([
  ["path", { d: "M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" }],
  ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }],
  ["path", { d: "M15 8h-5" }],
  ["path", { d: "M15 12h-5" }],
]);

// 9. Eye / Soi Sáng / Quan Sát
export const EyeIcon = createIcon([
  ["path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }],
  ["circle", { cx: 12, cy: 12, r: 3 }],
]);

// 10. Layers / Tầng Lớp Tứ Trụ
export const LayersIcon = createIcon([
  ["path", { d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" }],
  ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" }],
  ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" }],
]);

// 11. Scale / Cân Bằng Ngũ Hành
export const ScaleIcon = createIcon([
  ["path", { d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
  ["path", { d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }],
  ["path", { d: "M7 21h10" }],
  ["path", { d: "M12 3v18" }],
  ["path", { d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }],
]);

// 12. Milestone / Cột Mốc Đại Vận
export const MilestoneIcon = createIcon([
  ["path", { d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" }],
  ["path", { d: "M12 13v8" }],
  ["path", { d: "M12 3v3" }],
]);

// 13. BookOpen / Cẩm Nang Người Mới
export const BookOpenIcon = createIcon([
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" }],
]);

// 14. Info / Chú Thích
export const InfoIcon = createIcon([
  ["circle", { cx: 12, cy: 12, r: 10 }],
  ["path", { d: "M12 16v-4" }],
  ["path", { d: "M12 8h.01" }],
]);

// 15. CheckCircle2 / Xác Nhận
export const CheckCircleIcon = createIcon([
  ["circle", { cx: 12, cy: 12, r: 10 }],
  ["path", { d: "m9 12 2 2 4-4" }],
]);

// 16. AlertCircle / Lưu Ý Cổ Học
export const AlertCircleIcon = createIcon([
  ["circle", { cx: 12, cy: 12, r: 10 }],
  ["line", { x1: 12, y1: 8, x2: 12, y2: 12 }],
  ["line", { x1: 12, y1: 16, x2: 12.01, y2: 16 }],
]);

// 17. ArrowUpRight / Mở Rộng
export const ArrowUpRightIcon = createIcon([
  ["path", { d: "M7 7h10v10" }],
  ["path", { d: "M7 17 17 7" }],
]);

// 18. Award / Dụng Thần Pháp Quyết
export const AwardIcon = createIcon([
  ["circle", { cx: 12, cy: 8, r: 6 }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" }],
]);
