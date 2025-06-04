import React from "react";
import ReactFlow, { Background, Controls } from "react-flow-renderer";

const nodes = [
  { id: '1', data: { label: 'Users' }, position: { x: 300, y: 300 }, style: { background: '#ddeeff', padding: 10, borderRadius: 8 } },
  { id: '2', data: { label: 'Projects / Opportunities' }, position: { x: 500, y: 300 }, style: { background: '#ddeeff', padding: 10, borderRadius: 8 } },
  { id: '3', data: { label: 'Organizations' }, position: { x: 500, y: 450 }, style: { background: '#ddeeff', padding: 10, borderRadius: 8 } },
  { id: '4', data: { label: 'Contacts' }, position: { x: 700, y: 450 }, style: { background: '#ddeeff', padding: 10, borderRadius: 8 } },
  { id: '5', data: { label: 'Assignments' }, position: { x: 700, y: 150 }, style: { background: '#ffe4b5', padding: 10, borderRadius: 8 } },
  { id: '6', data: { label: 'Scheduling' }, position: { x: 600, y: 250 }, style: { background: '#ffe4b5', padding: 10, borderRadius: 8 } },
  { id: '7', data: { label: 'Leave requests' }, position: { x: 900, y: 150 }, style: { background: '#ffa07a', padding: 10, borderRadius: 8 } },
];

const edges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e2-6', source: '2', target: '6' },
  { id: 'e6-5', source: '6', target: '5' },
  { id: 'e5-7', source: '5', target: '7' },
];

export default function Flow() {
  return (
    <div style={{ height: '100vh' }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
