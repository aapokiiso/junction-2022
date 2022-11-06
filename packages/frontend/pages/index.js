import React, {useEffect, useState} from 'react'
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import Draggable from 'react-draggable';
import Map from '../components/Map'
import {fetchNodes, fetchEdges, updateDeltaTForBuilding, fetchFinalTemperature} from '../utils/api'
import Head from 'next/head'

export default function Index() {
  const [nodes, setNodes] = useState(null);
  const [edges, setEdges] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [selectedNodeName, setNodeName] = useState(null);
  const [deltaTValue, setDeltaTValue] = useState('');
  const [finalTemperature, setFinalTemperature] = useState(null)
  const [deltaTLog, setDeltaTLog] = useState([])

  const COST_COMBINED = 100000;
  const ENERGY = 20;
  const REDUCED_EMIS = 30;
  const MONEY = 25000;
  const TIME_TO_ROI = COST_COMBINED / MONEY;

  const refreshData = () => {
    fetchNodes()
      .then(nodes => {
        setNodes(nodes)
      })

    fetchEdges()
      .then(edges => {
        setEdges(edges)
      })

    fetchFinalTemperature()
      .then(temperature => {
        setFinalTemperature(temperature)
      })
  }

  const handleNodeSelect = (nodeId) => {
    setSelectedNodeId(nodeId)
  }

  const handleDeltaTChange = (event) => {
    setDeltaTValue(parseInt(event.target.value,10))
  }

  const handleFormSubmit = async (event) => {
    console.log(deltaTValue)
    let prevSystemTemp = finalTemperature;
    updateDeltaTForBuilding(selectedNodeId, deltaTValue).then(
      ()=> {
        setDeltaTLog(oldArray => [...oldArray, [selectedNodeName,deltaTValue,(prevSystemTemp-finalTemperature)]])
        refreshData()
      }
    )

    event.preventDefault();

  }

  useEffect(() => {
    if (selectedNodeId) {
      console.log("click building")
      let currentNode = nodes.find(x => x.id==selectedNodeId);
      setNodeName(currentNode.name);
      setDeltaTValue(currentNode.deltaT);
      // TODO: open editor
    }
  }, [selectedNodeId]);

  useEffect(() => {
    refreshData()
  }, [])


  return (
    <div className="App">
      <div>
        <Head>
          <title>District Heating</title>
          <meta charSet="utf-8" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
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
            <div id="building-parameters" style={{"display": selectedNodeId ? "block" : "none"}}>
              <h2>Set Delta T for {selectedNodeName}</h2>
              <form onSubmit={handleFormSubmit}>
                <input type="number" min="0" max="100" name="deltaT" value={deltaTValue} onChange={handleDeltaTChange} />
                <input type="submit"  />
              </form>
            </div>
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
            <div>
              <h2>Delta T changelog</h2>
              <ol style={{"text-align": "left", "margin": "0 20px"}}>
              {deltaTLog.map((event) => (
                <li>{event[0]} set to {event[1]} <span style={{float: "right", color: (event[2]>0 ? "green" : "red")}}>{event[2]}</span></li>
              ))}
              </ol>
            </div>
          </div>
          <div className="column-right">
            {nodes && edges && finalTemperature !== null && <div className="mapContainer">
              <Map
                nodes={nodes}
                edges={edges}
                selectedNodeId={selectedNodeId}
                finalTemperature={finalTemperature}
                handleNodeSelect={handleNodeSelect}
              />
            </div>}
            <Draggable bounds="body">
              <div className="stats">
                <h3>Grid Statistics</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>Total investment cost:</td>
                      <td></td>
                      <td>{COST_COMBINED} €</td>
                    </tr>
                    <tr>
                      <td>Total energy conservation:</td>
                      <td></td>
                      <td>{ENERGY} MWh / year</td>
                    </tr>
                    <tr>
                      <td>CO² emissions reduced by:</td>
                      <td> </td>
                      <td>{REDUCED_EMIS} tons / year</td>
                    </tr>
                    <tr>
                      <td>Reduction in operating costs:</td>
                      <td></td>
                      <td>{MONEY} € / year</td>
                    </tr>
                    <tr>
                      <td>Return on investment at:</td>
                      <td></td>
                      <td>{TIME_TO_ROI} years</td>
                    </tr>
                  </tbody>
                </table>
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
