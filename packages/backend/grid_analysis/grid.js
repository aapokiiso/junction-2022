const mysql = require('mysql2/promise');

(async () => {
    const connection =  await mysql.createConnection({ //TO-DO check the authentication details
        host: 'db',
        user: 'root',
        password: process.env.MYSQL_ROOT_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    });

    const [nodes_results] = await connection.execute(
        'select * from nodes'
    );

    
    const [links_results] = await connection.execute(
        'select * from links'
    );


    const get_return_temperature_flow = (nodes, links, start_node, temperature, flow, total_flow,direction) => {
        
        const share = 0.5;
        // const deltaT = 40;
        // const link = links.find(x => x.source == start_node)[0];

        if (nodes.find(x=> x.name == start_node).type == "consumer") {
            console.log("HERE?")
            console.log(nodes.find(x=> x.name == start_node))
            // nodes.find(x=> x.name == start_node).deltaT
            return [temperature-40, flow]
        }

        // console.log("links")
        console.log(links[0].source);
        console.log("START NODE");
        console.log(start_node);
        // console.log(start_node.name);
        
        

        const next_nodes = links.filter(x => x.source == start_node)

        let temps_and_flows = new Array(); // (temperature, flow)
        // console.log("start node")
        // console.log(start_node)
        console.log("NEXT NODES:")
        console.log(next_nodes);
        console.log("debugging3")
        for (let i = 0; i < next_nodes.length; i++) {
            console.log("debugging4")
            const next_node = next_nodes[i];
            // const node = nodes.find(x=> x.name == start_node)
            console.log(links)
            console.log(next_node)
            const link = links.find(x=> x.source == next_node.source)
            console.log(link)
            temps_and_flows.push(get_return_temperature_flow(nodes, links, next_node.target, temperature, total_flow*(link.diameter/100), total_flow));
        };

        console.log("temps and flows")
        console.log(temps_and_flows)

        const sum_temps_times_flows = temps_and_flows.map(x=>x[0]*x[1]).reduce((partialSum, a) => partialSum + a, 0);
        const sum_flows = temps_and_flows.map(x=>x[1]).reduce((partialSum, a) => partialSum + a, 0);
        console.log("the array is:")
        // console.log(links_temp);
        return [sum_temps_times_flows/sum_flows, sum_flows];


        // console.log(next_nodes)

        // return (999,3456453);
    }

    const test = get_return_temperature_flow(nodes_results, links_results, nodes_results[0].name, 100, 1000, 1000,"out");
    console.log("the final answer is:");
    console.log(test);



})()

// const get_return_temperature = async () => {

//     // nodes_results, links_results, start_node
//     const direction = "out";
//     // const [temperature, influx] = temperature_and_influx(start_node, nodes_results, direction);
//     const connection =  await mysql.createConnection({ //TO-DO check the authentication details
//         host: 'db',
//         user: 'root',
//         password: process.env.MYSQL_ROOT_PASSWORD,
//         database: process.env.MYSQL_DATABASE,
//     });

    
// console.log("asdasd")



// connection.query(
//     'select * from nodes',
//     function(err, nodes_results_json) {
//         console.log(nodes_results_json)
//         // JSON.parse(nodes_results_json);
//         // console.log(fields)
//     }
// );

// connection.query(
//     'select * from links', //source + target
//     function(err, links_results_json, fields) {
//         console.log(links_results_json)
//         // console.log(fields);
//     }
// );



// const get_children_nodes = (node, nodes) => {

//     const children = nodes.filter(x => x.end_node == node);
//     return children;
// }




// const temperature_and_influx = (start_node, nodes, direction) => {
    

//     if (false) return (temperature, influx);

//     const next_nodes = nodes.filter(x => x.start_node && x.direction == direction).map(x => x.end_node);

//     if (true);//len(next_nodes) == 1 && next_nodes[0].type == 


//     //const ()

    
//     temperature_and_influx();




//     return 0;
// }


    

// } 

// // get_return_temperature(nodes_results, links_results, nodes_results.)

