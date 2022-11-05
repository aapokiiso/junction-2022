import React, {useEffect, useState} from 'react'
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import Draggable from 'react-draggable';
import Map from '../components/Map'
import {fetchNodes, fetchEdges} from '../utils/api'
import Head from 'next/head'

export default function Index() {
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
    <div className="App">

      <div>
        <Head>
          <title>District Heating</title>
          <meta charSet="utf-8" />
          <link rel="icon" href="favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Web app for analysing district heating"
          />
        </Head>
      </div>

      <header className="App-header">
        <h1>District Heating Tool</h1>
      </header>

      <div className="App-body">
        <div className="row">
          <div className="column-left">
            <h2>Set desired parameters</h2>
            <div className="infoText" >Choose an area:</div>
            <Dropdown
              placeholder="Select an option"
              className="dropdownChooser"
              options={['Otaniemi', 'Turku', 'Helsinki']}
              value="none"
              onChange={(value) => console.log('changed!', value)}
              onSelect={(value) => console.log('selected!', value)} // always fires once a selection happens even if there is no change
              onClose={(closedBySelection) => console.log('closedBySelection?:', closedBySelection)}
              onOpen={() => console.log('open!')}
            />
          </div>
          <div className="column-right">
            {nodes && edges && <div className="mapContainer">
              <Map
                nodes={nodes}
                edges={edges}
                selectedNodeId={selectedNodeId}
                handleNodeSelect={handleNodeSelect}
              />
            </div>}
            <Draggable bounds="body">
              <div className="stats">
                <h3>Overall statistics</h3>
                <p>Here we can have text that teels us stuff<br />More stuff<br />{}<br />Even more stuff</p>
              </div>
            </Draggable>
          </div>
        </div>
      </div>

      <footer className="App-footer">
        <p>
          Application created by Junkkaritiimi.
        </p>
      </footer>
    </div>
  );
}
