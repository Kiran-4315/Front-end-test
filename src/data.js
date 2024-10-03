const networkData = {
  nodes: [
    { id: 1, label: 'User', title: 'User Node' },
    { id: 2, label: 'Child 1', title: 'Child 1 Node' },
    { id: 3, label: 'Child 2', title: 'Child 2 Node' },
    { id: 4, label: 'Child 3', title: 'Child 3 Node' },
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
  ],
};

export default networkData;