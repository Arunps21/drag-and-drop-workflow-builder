# Drag-and-Drop Workflow Builder

## Overview
This project is a **Drag-and-Drop Workflow Builder** built using **React** and **React Flow**. It allows users to create, edit, and visualize workflows dynamically by dragging and connecting nodes.

## Features
- **Drag-and-Drop Interface**: Easily add and move nodes within the canvas.
- **Custom Node Types**: Define and register different types of workflow steps.
- **Dynamic Connections**: Connect nodes to define workflow logic.
- **State Management**: Uses Context API to manage nodes and connections.
- **API Integration**: Simulated API for loading and saving workflows.

## Technologies Used
- **React**
- **React Flow**
- **React Context API**
- **Tailwind CSS (for styling)**

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Arunps21/drag-and-drop-workflow-builder.git
   cd workflow-builder
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## File Structure
```
workflow-builder/
│── src/
│   ├── components/
│   │   ├── WorkflowCanvas.jsx
│   │   ├── ProcessNode.jsx
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── README.md
```

## Usage
1. **Adding Nodes**: Click or drag nodes onto the workflow canvas.
2. **Connecting Nodes**: Drag from one node's source handle to another's target handle.
3. **Editing Nodes**: Click on a node to edit its properties.
4. **Saving Workflows**: Workflows can be stored locally or sent to an API.

## Custom Node Example
To define a custom node type, create a component like `ProcessNode.js`:

```jsx
import React from "react";
import { Handle, Position } from "reactflow";

const ProcessNode = ({ data }) => {
  return (
    <div style={{ padding: 10, border: "1px solid black", borderRadius: 5 }}>
      <strong>{data.label}</strong>
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default ProcessNode;
```

## Registering Custom Nodes
In `WorkflowCanvas.jsx`, register the custom node type:

```jsx
import React from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import ProcessNode from "./ProcessNode";

const nodeTypes = {
  Process: ProcessNode,
};

const WorkflowCanvas = ({ nodes, edges }) => {
  return <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} />;
};

export default WorkflowCanvas;
```

## Example Node Data
Define nodes with correct types:

```jsx
const nodes = [
  {
    id: "1",
    type: "Process",
    position: { x: 100, y: 100 },
    data: { label: "Start Process" },
  },
];
```

## License
This project is licensed under the MIT License.