import React, { useEffect, useRef, useState } from 'react';
import { DataSet, Network } from 'vis-network/standalone';
import { createDemoDocument } from '../services/firebaseService';
import './NetworkTree.css'; // Ensure this path is correct

const NetworkTree = ({ data }) => {
  const networkRef = useRef(null);
  const nodesRef = useRef(new DataSet([])); // Create a mutable ref for nodes
  const networkInstance = useRef(null); // Create a ref for the network instance
  const [selectedNode, setSelectedNode] = useState(null); // To handle modal details
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  useEffect(() => {
    // Function to save data to Firestore
    const saveDataToFirestore = async () => {
      try {
        await createDemoDocument({
          name: data.name,
          BV: data.details.BV,
          coins: data.details.coins,
          children: data.children,
        });
        console.log("Document created successfully");
      } catch (error) {
        console.error("Error creating document:", error);
      }
    };

    saveDataToFirestore();

    // Create nodes and edges for the network visualization
    nodesRef.current = new DataSet([
      { 
        id: 1, 
        label: data.name, 
        title: `BV: ${data.details.BV}, Coins: ${data.details.coins}` 
      },
      ...data.children.map((child, index) => ({
        id: index + 2,
        label: child.name,
        title: child.status, // Assuming child has a 'status' property
      })),
    ]);

    const edges = new DataSet(
      data.children.map((_, index) => ({
        from: 1,
        to: index + 2,
      }))
    );

    const networkData = { nodes: nodesRef.current, edges };

    const options = {
      nodes: {
        shape: 'circle',
        size: 30,
        font: { size: 16 },
        color: {
          highlight: { background: '#ffcc00', border: '#ff9900' }, // Highlight on hover
          hover: { background: '#ffcc00' },
        },
      },
      interaction: {
        hover: true,
        tooltipDelay: 100,
        zoomSpeed: 0.2, // Smooth zoom
        navigationButtons: true, // Add zoom/pan buttons
      },
      physics: {
        stabilization: true,
      },
      manipulation: {
        enabled: true, // Allow user to drag nodes
      },
    };

    // Create network instance
    networkInstance.current = new Network(networkRef.current, networkData, options);

    networkInstance.current.on('click', (params) => {
      if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        const nodeData = nodesRef.current.get(nodeId);
        setSelectedNode(nodeData); // Show modal with node details
      }
    });

    return () => {
      networkInstance.current.destroy(); // Cleanup when component unmounts
    };
  }, [data]);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Search and highlight node based on query
  const searchNode = () => {
    const node = nodesRef.current.get().find((n) => n.label.toLowerCase() === searchQuery.toLowerCase());
    if (node) {
      networkInstance.current.focus(node.id, { scale: 2, animation: { duration: 1000, easingFunction: "easeInOutQuad" } });
    } else {
      alert('Node not found');
    }
  };

  // Add a new node and save to Firestore
  const addNode = async () => {
    const newNodeId = nodesRef.current.length + 1;
    const newNodeLabel = `Node ${newNodeId}`;
    
    // Add the new node to the nodes dataset
    nodesRef.current.add({ id: newNodeId, label: newNodeLabel, title: "New Node" });

    // Prepare data for Firestore (customize as needed)
    const newNodeData = {
      name: newNodeLabel,
      BV: "50000", // Replace with actual BV value
      coins: "2000", // Replace with actual coins value
      children: [] // Assuming it starts with no children
    };

    // Save new node data to Firestore
    try {
      await createDemoDocument(newNodeData); // Function to save to Firestore
      console.log("New node created successfully in Firestore");
    } catch (error) {
      console.error("Error creating node in Firestore:", error);
    }

    networkInstance.current.selectNodes([newNodeId]);
  };

  // Delete selected node
  const deleteNode = () => {
    if (selectedNode) {
      nodesRef.current.remove(selectedNode.id);
      setSelectedNode(null); // Reset selected node
    } else {
      alert("No node selected to delete.");
    }
  };

  return (
    <div>
      {/* Manipulation Bar: Add/Delete buttons */}
      <div id="manipulationBar">
        <button onClick={addNode}>Add Node</button>
        <button onClick={deleteNode}>Delete Node</button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search node"
        style={{ marginBottom: '10px', padding: '5px' }}
      />
      <button onClick={searchNode}>Search</button>

      {/* Network Tree Visualization */}
      <div ref={networkRef} className="network-tree" />

      {/* Modal for Node Details */}
      {selectedNode && (
        <div className="modal">
          <h2>Node Details</h2>
          <p>{selectedNode.label}</p>
          <p>{selectedNode.title}</p>
          <button onClick={() => setSelectedNode(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default React.memo(NetworkTree); // Use memo to optimize rendering
