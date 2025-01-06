// Importing necessary hooks and components
import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/NewsBoard";

const App = () => {
  // State to hold the selected news category, defaulting to "general"
  const [category, setCategory] = useState("general");

  return (
    <div>
      {/* Passing setCategory function as a prop to Navbar to allow category selection */}
      <Navbar setCategory={setCategory} />
      
      {/* Passing the selected category as a prop to NewsBoard to display news based on the chosen category */}
      <NewsBoard category={category} />
    </div>
  );
}

export default App;
