import React, {useEffect, useState} from 'react'
import Map from '../components/Map'

const fetchNodes = async () => {
  const response = await fetch('https://backend-dot-junction-2022-367623.lm.r.appspot.com/nodes');

  const nodes = await response.json()

  return nodes.map(node => {
    node.latitude = Number(node.latitude.replace(',', '.'))
    node.longitude = Number(node.longitude.replace(',', '.'))
    node.mapboxId = node.mapboxid;

    return node
  })
}

const fetchEdges = async () => {
  const response = await fetch('https://backend-dot-junction-2022-367623.lm.r.appspot.com/edges');

  const edges = await response.json()

  return edges.map(({source, target}) => [source, target])
}

function Index () {
  const [nodes, setNodes] = useState(null);
  const [edges, setEdges] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const handleNodeSelect = (nodeId) => {
    setSelectedNodeId(nodeId)
  }

  useEffect(() => {
    if (selectedNodeId) {
      // TODO: open editor
    }
  }, [selectedNodeId]);

  useEffect(() => {
    fetchNodes()
      .then(nodes => {
        setNodes(nodes)
      })

    fetchEdges()
      .then(edges => {
        setEdges(edges)
      })
  }, [])

  return (
    <main>
        {nodes && edges && <Map nodes={nodes} edges={edges} selectedNodeId={selectedNodeId} handleNodeSelect={handleNodeSelect} />}
    </main>
  )
}

export default Index
