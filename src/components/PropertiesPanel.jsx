import React from "react";
import { useWorkflow } from "../context/WorkflowContext";

const PropertiesPanel = () => {
  const { selectedNode, setNodes } = useWorkflow();
  if (!selectedNode) return null;

  const updateLabel = (e) => {
    setNodes((nodes) => nodes.map((node) => (node.id === selectedNode.id ? { ...node, data: { ...node.data, label: e.target.value } } : node)));
  };

  return (
    <div className="w-1/4 p-4 bg-gray-300 h-screen">
      <h3 className="text-lg font-bold mb-2">Edit Node</h3>
      <input type="text" className="w-full p-2 border rounded" value={selectedNode.data.label} onChange={updateLabel} />
    </div>
  );
};

export default PropertiesPanel;
