import React, { useContext } from "react";
import { WorkflowContext } from "../context/WorkflowContext";

const SaveLoadButtons = () => {
  const { nodes, edges, setNodes, setEdges } = useContext(WorkflowContext);

  const saveWorkflow = () => {
    localStorage.setItem("workflow", JSON.stringify({ nodes, edges }));
    alert("Workflow saved!");
  };

  const loadWorkflow = () => {
    const data = JSON.parse(localStorage.getItem("workflow"));
    if (data) {
      setNodes(data.nodes);
      setEdges(data.edges);
    }
  };

  return (
    <div className="p-4 flex gap-2">
      <button onClick={saveWorkflow} className="bg-blue-500 text-white p-2 rounded">
        Save Workflow
      </button>
      <button onClick={loadWorkflow} className="bg-green-500 text-white p-2 rounded">
        Load Workflow
      </button>
    </div>
  );
};

export default SaveLoadButtons;