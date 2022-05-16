import Todo from "./components/Todo";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#ea698b] to-[#52096c] h-[100vh] w-[100vw] max-h-[100vh] overflow-y-scroll no-scrollbar flex flex-col justify-center items-center">
      <Todo />
    </div>
  );
}

export default App;
