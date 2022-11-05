export const fetchNodes = async () => {
  const response = await fetch('https://backend-dot-junction-2022-367623.lm.r.appspot.com/nodes');

  const nodes = await response.json()

  return nodes.map(node => {
    node.latitude = Number(node.latitude.replace(',', '.'))
    node.longitude = Number(node.longitude.replace(',', '.'))
    node.mapboxId = node.mapboxid;

    return node
  })
}

export const fetchEdges = async () => {
  const response = await fetch('https://backend-dot-junction-2022-367623.lm.r.appspot.com/edges');

  const edges = await response.json()

  return edges.map(({source, target}) => [source, target])
}
