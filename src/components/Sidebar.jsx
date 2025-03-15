import React from "react";
import { useWorkflow } from "../context/WorkflowContext";

const Sidebar = () => {
  const { setNodes, saveWorkflow, loadWorkflow, deleteNode, selectedNode } = useWorkflow();

  const addNode = (type, color) => {
    setNodes((nds) => [...nds, { 
      id: String(nds.length + 1), 
      type, 
      position: { x: 100, y: 100 }, 
      data: { label: type }, 
      style: { background: color, padding: 10, borderRadius: 5 } 
    }]);
  };

  return (
    <div className="w-1/4 p-4 bg-gray-200 h-screen flex flex-col gap-4">
      <button className="p-2 bg-blue-500 text-white" onClick={() => addNode("Start", "#4CAF50")}>Start Node</button>
      <button className="p-2 bg-green-500 text-white" onClick={() => addNode("Process", "#FF9800")}>Process Node</button>
      <button className="p-2 bg-yellow-500 text-white" onClick={() => addNode("Decision", "#9C27B0")}>Decision Node</button>
      <button className="p-2 bg-red-500 text-white" onClick={deleteNode} disabled={!selectedNode}>Delete Node</button>
      <button className="p-2 bg-gray-700 text-white" onClick={saveWorkflow}>Save Workflow</button>
      <button className="p-2 bg-gray-700 text-white" onClick={loadWorkflow}>Load Workflow</button>
    </div>
  );
};

export default Sidebar;
