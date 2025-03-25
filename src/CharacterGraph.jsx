import React from "react";
import Graph from "react-vis-network-graph";
import "./index.css";

const CharacterGraph = () => {

  const graph = {
    nodes: [
      { id: 1, label: "Achilles", title: "Greek Hero", level: 1 },
      { id: 2, label: "Hector", title: "Prince of Troy", level: 2 },
      { id: 3, label: "Zeus", title: "King of the Gods", level: 0 },
      { id: 4, label: "Agamemnon", title: "Greek Commander", level: 2 },
    ],
    edges: [
      { from: 1, to: 2, label: "Enemy" },
      { from: 3, to: 1, label: "Favored by Zeus" },
      { from: 3, to: 2, label: "Son of Zeus" },
      { from: 4, to: 1, label: "Commander of" },
    ],
  };

  const options = {
    nodes: {
      shape: "dot",
      size: 20,
      font: { size: 16 },
      color: { background: "lightblue" },
    },
    edges: {
      width: 2,
      color: { color: "#000000" },
    },
    physics: {
      enabled: true,
      repulsion: {
        nodeDistance: 8000,
      },
      springLength: 40000, 
      barnesHut: {
        gravitationalConstant: -20000, 
        centralGravity: 0.1, 
      },
      interaction: {
        dragNodes: true, 
        dragView: false,
        hover: true, 
      },
      layout: {
        hierarchical: {
          enabled: true, 
          direction: 'UD', 
          sortMethod: 'directed', 
          nodeSpacing: 200, 
          levelSeparation: 800,
          shakeTowards: 'leaves'
        }
      },
    },
  };


  return(
    <div className="main">
      <h1>The Iliad</h1>
      <Graph graph={graph} options={options} />
    </div>
  );
  
};

export default CharacterGraph;