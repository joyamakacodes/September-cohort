import { useAllContext } from "../context/AllContext";
function ReuseContext() {
  const {count, name} = useAllContext()
  return (
    <div>
    <p>count is {count}</p>
      <p>My name is {name}</p>
    </div>
  );
}

export default ReuseContext;
