import React, { createContext, useContext, useState, useEffect } from "react";
import { applyNodeChanges, applyEdgeChanges, addEdge } from "react-flow-renderer";

const WorkflowContext = createContext();

export const WorkflowProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    const savedWorkflow = JSON.parse(localStorage.getItem("workflow"));
    if (savedWorkflow) {
      setNodes(savedWorkflow.nodes || []);
      setEdges(savedWorkflow.edges || []);
    }
  }, []);

  const onNodesChange = (changes) => setNodes((nds) => applyNodeChanges(changes, nds));
  const onEdgesChange = (changes) => setEdges((eds) => applyEdgeChanges(changes, eds));
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  const onElementClick = (_, element) => setSelectedNode(element);

  const saveWorkflow = () => {
    localStorage.setItem("workflow", JSON.stringify({ nodes, edges }));
  };

  const loadWorkflow = () => {
    const savedWorkflow = JSON.parse(localStorage.getItem("workflow"));
    if (savedWorkflow) {
      setNodes(savedWorkflow.nodes || []);
      setEdges(savedWorkflow.edges || []);
    }
  };

  const deleteNode = () => {
    if (selectedNode) {
      setNodes((nds) => nds.filter((node) => node.id !== selectedNode.id));
      setEdges((eds) => eds.filter((edge) => edge.source !== selectedNode.id && edge.target !== selectedNode.id));
      setSelectedNode(null);
    }
  };

  return (
    <WorkflowContext.Provider value={{ 
      nodes, edges, setNodes, setEdges, 
      onNodesChange, onEdgesChange, 
      onConnect, onElementClick, 
      saveWorkflow, loadWorkflow, 
      deleteNode, selectedNode, setSelectedNode 
    }}>
      {children}
    </WorkflowContext.Provider>
  );
};

export const useWorkflow = () => useContext(WorkflowContext);
