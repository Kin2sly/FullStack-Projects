import { Button } from "../ui/button";
import { TodoPreviewCard } from "./TodoPreviewCard";

const todoItems = [
  {
    id: "1",
    title: "Buy groceries",
    description: "Milk, Bread, Butter, Cheese, Eggs, Bread, Cheeez, Eggs",
  },
  {
    id: "2",
    title: "Workout",
    description:
      "30 minutes of cardio and strength training, Chest Workout is wild",
  },
  {
    id: "3",
    title: "Read a book",
    description: "Finish reading the current novel, on to the next one",
  },
  {
    id: "4",
    title: "Call Mom",
    description: "Catch up and check on her health",
  },
  {
    id: "5",
    title: "Complete project report",
    description: "Summarize findings and conclusions",
  },
  {
    id: "6",
    title: "Plan weekend trip",
    description: "Decide destination and book accommodations",
  },
  {
    id: "7",
    title: "Clean the house",
    description: "Vacuum, dust, mop, and organize rooms",
  },
  {
    id: "8",
    title: "Fix bike",
    description: "Repair flat tire and oil chain",
  },
  {
    id: "9",
    title: "Pay utility bills",
    description: "Electricity, water, and internet",
  },
  {
    id: "10",
    title: "Update resume",
    description: "Add recent work experience and skills",
  },
];
export function HomePage() {
  return (
    <section className="w-screen h-screen relative flex flex-row justify-center items-center">
      <div className="w-3/5 bg-background h-9/12 max-h-9/12 overflow-auto ring-slate-300 rounded-sm shadow-xl p-4">
        {/* heading and button */}
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl">Todo</h1>
          <Button className="cursor-pointer">Create Todo</Button>
        </div>
        {/* Todo Preview Cards */}
        <div className="my-4 flex flex-col gap-4">
          {todoItems.map((item) => (
            <TodoPreviewCard {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
