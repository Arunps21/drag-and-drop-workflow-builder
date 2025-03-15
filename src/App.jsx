import React from "react";
import { WorkflowProvider } from "./context/WorkflowContext"; 
import WorkflowCanvas from "./components/WorkflowCanvas";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <WorkflowProvider>
      <div className="flex">
        <Sidebar />
        <WorkflowCanvas />
      </div>
    </WorkflowProvider>
  );
};

export default App;
