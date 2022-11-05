const mysql = require('mysql2/promise');

module.exports = async () => {
    const connection =  await mysql.createConnection({ //TO-DO check the authentication details
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || process.env.MYSQL_ROOT_PASSWORD,
        database: process.env.DB_NAME || process.env.MYSQL_DATABASE,
        socketPath: process.env.DB_SOCKET_PATH,
        charset: "utf8"
    });

    const [nodes_results] = await connection.execute(
        'select * from nodes'
    );

    
    const [links_results] = await connection.execute(
        'select * from links'
    );


    const get_return_temperature_flow = (nodes, links, start_node, temperature, flow, total_flow,direction) => {
        
        if (nodes.find(x=> x.name == start_node).type == "consumer") {
            // console.log("HERE?")
            // console.log(nodes.find(x=> x.name == start_node))
            return [temperature- nodes.find(x=> x.name == start_node).deltaT, flow]
        }

        

        const next_nodes = links.filter(x => x.source == start_node)

        let temps_and_flows = new Array(); // (temperature, flow)
        for (let i = 0; i < next_nodes.length; i++) {
            // console.log("debugging4")
            const next_node = next_nodes[i];
            // const node = nodes.find(x=> x.name == start_node)
            // console.log(links)
            // console.log(next_node)
            const link = links.find(x=> x.source == next_node.source)
            // console.log(link)
            temps_and_flows.push(get_return_temperature_flow(nodes, links, next_node.target, temperature, total_flow*(link.diameter/100), total_flow));
        };

        // console.log("temps and flows")
        // console.log(temps_and_flows)

        const sum_temps_times_flows = temps_and_flows.map(x=>x[0]*x[1]).reduce((partialSum, a) => partialSum + a, 0);
        const sum_flows = temps_and_flows.map(x=>x[1]).reduce((partialSum, a) => partialSum + a, 0);
        // console.log("the array is:")
        // console.log(links_temp);
        return [sum_temps_times_flows/sum_flows, sum_flows];


        // console.log(next_nodes)

        // return (999,3456453);
    }

    const [temperature, flow] = get_return_temperature_flow(nodes_results, links_results, nodes_results[0].name, 100, 1000, 1000,"out");
    // console.log("the final answer is:");
    // console.log(test);
    console.log("temperature is:", temperature);
    return temperature;



}
