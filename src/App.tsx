import ActivityFeed from "@/components/ActivityFeed";

import { activityItems } from "./data";

const App = () => {
  return (
    <main className="flex flex-col gap-8 items-center">
      <header className="w-full h-14 flex justify-center items-center bg-neutral-900 text-white">
        <h2 className="font-bold text-2xl">React Components</h2>
      </header>
      <h2 className="font-semibold text-xl">Activity feed</h2>
      <ActivityFeed
        className="w-11/12 sm:w-2/3"
        items={activityItems}
        itemsSide="alternate"
      />
    </main>
  );
};

export default App;
