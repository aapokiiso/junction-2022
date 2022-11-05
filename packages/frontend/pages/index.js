import React, {useEffect, useState} from 'react'
import Map from '../components/Map'
import {fetchNodes, fetchEdges} from '../utils/api'
import styles from './index.module.css'

function App () {
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
        {nodes && edges && <div className={styles.mapContainer}>
          <Map
            nodes={nodes}
            edges={edges}
            selectedNodeId={selectedNodeId}
            handleNodeSelect={handleNodeSelect}
          />
        </div>}
    </main>
  )
}

export default App
