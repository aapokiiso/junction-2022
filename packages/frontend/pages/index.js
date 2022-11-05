import React, {useEffect, useState} from 'react'
import Map from '../components/Map'

const nodes = [
  {type: 'producer', id: 'St1', name: 'St1', mapboxId: 24408439, latitude: 60.18803446, longitude: 24.82800426},
  {type: 'consumer', id: 'Kandikeskus', name: 'Kandikeskus', mapboxId: 4148, latitude: 60.18653275, longitude: 24.82832467},
  {type: 'consumer', id: 'Nanotalo', name: 'Nanotalo', mapboxId: 11159678, latitude: 60.18698854, longitude: 24.82484653},
  {type: 'consumer', id: 'Konetalo', name: 'Konetalo', mapboxId: 156903276, latitude: 60.18723004, longitude: 24.82669374},
  {type: 'consumer', id: 'Sähkötalo', name: 'Sähkötalo', mapboxId: 24342454, latitude: 60.18901735, longitude: 24.83140802},
  {type: 'consumer', id: 'Kvarkki', name: 'Kvarkki', mapboxId: 1402504, latitude: 60.18824527, longitude: 24.8301013},
  {type: 'consumer', id: 'Raksatalo', name: 'Raksatalo', mapboxId: 7579330, latitude: 60.18732835, longitude: 24.8315244},
  {type: 'consumer', id: 'OK20', name: 'OK20', mapboxId: 24334160, latitude: 60.18679975, longitude: 24.83373056},
  {type: 'consumer', id: 'Täffä', name: 'Täffä', mapboxId: 4252953, latitude: 60.18607292, longitude: 24.83297745},
  {type: 'consumer', id: 'Dipoli', name: 'Dipoli', mapboxId: 4252954, latitude: 60.18512581, longitude: 24.83247243},
  {type: 'consumer', id: 'A Blanc', name: 'A Blanc', mapboxId: 7589907, latitude: 60.18468969, longitude: 24.83032829},
  {type: 'consumer', id: 'OK18', name: 'OK18', mapboxId: 4259264, latitude: 60.18809503, longitude: 24.83551164},
  {type: 'consumer', id: 'JMT1', name: 'JMT1', mapboxId: 24334123, latitude: 60.186826276608855, longitude: 24.834755701367953},
  {type: 'consumer', id: 'Teekkarimuseo', name: 'Teekkarimuseo', mapboxId: 24333970, latitude: 60.18732858, longitude: 24.83637993},
  {type: 'consumer', id: 'JMT6', name: 'JMT6', mapboxId: 24334231, latitude: 60.18849146, longitude: 24.8373634},
  {type: 'consumer', id: 'JMT11', name: 'JMT11', mapboxId: 24334286, latitude: 60.18938122, longitude: 24.83902024},
  {type: 'junction', id: '1', name: '1', mapboxId: null, latitude: 60.18780909, longitude: 24.8285705},
  {type: 'junction', id: '2', name: '2', mapboxId: null, latitude: 60.1870675, longitude: 24.82765256},
  {type: 'junction', id: '3', name: '3', mapboxId: null, latitude: 60.18676515, longitude: 24.82717064},
  {type: 'junction', id: '4', name: '4', mapboxId: null, latitude: 60.1873185, longitude: 24.82508232},
  {type: 'junction', id: '5', name: '5', mapboxId: null, latitude: 60.18868758, longitude: 24.82953434},
  {type: 'junction', id: '6', name: '6', mapboxId: null, latitude: 60.18857349, longitude: 24.83054407},
  {type: 'junction', id: '7', name: '7', mapboxId: null, latitude: 60.18856208, longitude: 24.8316915},
  {type: 'junction', id: '8', name: '8', mapboxId: null, latitude: 60.18847081, longitude: 24.83296514},
  {type: 'junction', id: '9', name: '9', mapboxId: null, latitude: 60.18843088, longitude: 24.83372244},
  {type: 'junction', id: '10', name: '10', mapboxId: null, latitude: 60.18770641, longitude: 24.83319462},
  {type: 'junction', id: '11', name: '11', mapboxId: null, latitude: 60.18698763, longitude: 24.83287334},
  {type: 'junction', id: '12', name: '12', mapboxId: null, latitude: 60.18617185, longitude: 24.83229963},
  {type: 'junction', id: '13', name: '13', mapboxId: null, latitude: 60.18532183, longitude: 24.8311063},
  {type: 'junction', id: '14', name: '14', mapboxId: null, latitude: 60.1847228, longitude: 24.83080797},
  {type: 'junction', id: '15', name: '15', mapboxId: null, latitude: 60.18766078, longitude: 24.83527146},
  {type: 'junction', id: '16', name: '16', mapboxId: null, latitude: 60.18764937, longitude: 24.83566158},
  {type: 'junction', id: '17', name: '17', mapboxId: null, latitude: 60.18763796, longitude: 24.83643036},
  {type: 'junction', id: '18', name: '18', mapboxId: null, latitude: 60.18843089, longitude: 24.83794496},
  {type: 'junction', id: '19', name: '19', mapboxId: null, latitude: 60.18948619, longitude: 24.83871373},
]

const edges = [
  ['St1', '1'],
  ['1', '2'],
  ['1', '5'],
  ['2', 'Konetalo'],
  ['2', '3'],
  ['3', 'Kandikeskus'],
  ['3', '4'],
  ['4', 'Nanotalo'],
  ['5', '6'],
  ['6', 'Kvarkki'],
  ['6', '7'],
  ['7', 'Sähkötalo'],
  ['7', '8'],
  ['8', 'Raksatalo'],
  ['8', '9'],
  ['9', '10'],
  ['10', '11'],
  ['10', '15'],
  ['11', 'OK20'],
  ['11', '12'],
  ['12', 'Täffä'],
  ['12', '13'],
  ['13', 'Dipoli'],
  ['13', '14'],
  ['14', 'A Blanc'],
  ['15', 'JMT1'],
  ['15', '16'],
  ['16', 'OK18'],
  ['16', '17'],
  ['17', 'Teekkarimuseo'],
  ['17', '18'],
  ['18', 'JMT6'],
  ['18', '19'],
  ['19', 'JMT11'],
]

function Index () {
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const handleNodeSelect = (nodeId) => {
    setSelectedNodeId(nodeId)
  }

  useEffect(() => {
    if (selectedNodeId) {
      // TODO: open editor
    }
  }, [selectedNodeId]);

  return (
    <main>
        <Map nodes={nodes} edges={edges} selectedNodeId={selectedNodeId} handleNodeSelect={handleNodeSelect} />
    </main>
  )
}

export default Index
