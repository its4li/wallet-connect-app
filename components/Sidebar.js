const investmentCategories = [
  {
    title: "سرمایه‌گذاری ریالی",
    sub: ["سپرده بانکی", "صندوق درآمد ثابت"],
  },
  {
    title: "سرمایه‌گذاری دلاری",
    sub: ["استیک ارز", "ییلدفارمینگ"],
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#1a1a1a] p-4 rounded-xl shadow-xl h-full">
      <h2 className="text-primary text-lg font-bold mb-4">دسته‌بندی‌ها</h2>
      {investmentCategories.map((cat) => (
        <div key={cat.title} className="mb-6">
          <p className="font-semibold text-white mb-2">{cat.title}</p>
          <ul className="ml-4 space-y-1 text-muted text-sm">
            {cat.sub.map((item) => (
              <li key={item} className="hover:text-primary cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
