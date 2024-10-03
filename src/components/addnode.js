// Add a new node
const addNode = async () => {
    const newNodeId = nodesRef.current.length + 1;
    const newNodeLabel = `Node ${newNodeId}`;
    
    // Add the new node to the nodes dataset
    nodesRef.current.add({ id: newNodeId, label: newNodeLabel, title: "New Node" });
  
    // Prepare data for Firestore (customize as needed)
    const newNodeData = {
      name: newNodeLabel,
      BV: "Some BV", // Replace with actual BV value
      coins: "Some Coins", // Replace with actual coins value
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
  