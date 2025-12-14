export default function SideNavBar({ onClick }) {
  return (
    <div className="w-1/9 bg-[#01013d] border-r border-[#011D33] flex flex-col items-center py-12">
      <ul className="flex flex-col space-y-6 text-white text-xl font-bold text-center">
        <li className="border-b border-[#F15A2B] pb-8 ms-5 me-5">
          <button
            onClick={() => onClick("all")}
            className="px-4 py-2 bg-[#01013d] cursor-pointer"
          >
            All Tasks
          </button>
        </li>
        <li className="border-b border-[#F15A2B] pb-8 ms-5 me-5">
          <button
            onClick={() => onClick("completed")}
            className="px-4 py-2 bg-[#01013d] cursor-pointer"
          >
            Completed Tasks
          </button>
        </li>
        <li className="border-b border-[#F15A2B] pb-8 ms-5 me-5">
          <button
            onClick={() => onClick("incomplete")}
            className="px-4 py-2 bg-[#01013d] cursor-pointer"
          >
            Incomplete Tasks
          </button>
        </li>
      </ul>
    </div>
  );
}
