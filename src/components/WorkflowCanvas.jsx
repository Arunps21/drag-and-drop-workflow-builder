import React from "react";
import ReactFlow, { Background, Controls, MiniMap } from "react-flow-renderer";
import { useWorkflow } from "../context/WorkflowContext";

const WorkflowCanvas = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, onElementClick } = useWorkflow();

  return (
    <div className="flex-grow h-screen">
      <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect} onElementClick={onElementClick}>
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default WorkflowCanvas;
