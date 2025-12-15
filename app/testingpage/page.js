import TaskCard from "../components/TaskCard";
import TaskList from "../components/TaskList";

//Page
export default function Page() {
  return (
    <main className="space-y-2 text-white">
      <h1 className="text-black text-center text-5xl">All Tasks</h1>
      <TaskList/>
      </main>
  );
}