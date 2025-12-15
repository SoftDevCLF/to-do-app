"use client";

export default function SearchBar({ value, onChange}) {
  return (
    <div className="ml-0 mb-5 space-y-6">
    <input
      type="text" 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search tasks..."
      className="flex-1 px-4 py-3 rounded-xl bg-[#000024] text-[#F1FAF5]
          border border-[#F15A2B] placeholder:text-[#92dad7]
          focus:outline-none focus:ring-2 focus:ring-[#92dad7]"
    />
    </div>
  );
}