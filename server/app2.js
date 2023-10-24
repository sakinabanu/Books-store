import express from "express";
import config from "config";
import "./utils/db_connect.js";

// Create an Express application
const app = express();
const PORT = config.get("PORT") || 5000;

// Define a simple route
app.get('/', (req, res) => {
    res.send(`SERVER IS RUNNING AT ${PORT}`);
});
// app.get('/req/:id', (req, res) => {
    // HTTP methods:
    // GET === Browser Can Only accesss all GET Methods
    // GET ,POST,PUT,DELETE ===> PostMan 

    // CURD  ==> Create,Update,Read,Delete

    //  GET ===> Fetch ALL Data, Display Data (Browser,PostMan)
    //  POST ===> Add's Data in DB (New Data) (Postman) ==
    // ------------ Body --> Raw ----> JSON ---> Add Your Data in JSON
    //  PUT ===> Update to That Exisiting Data (Postman)
    //  DELETE ==> Delete the Data (Postman)


    /* REQUEST methods: we only console req methods and get it on terminal*/
    // console.log(req.hostname);
    // req.hostname ==> server is running ip
    // 'hostname' means our (server) ip is showed
    // console.log(req.ip);
    // req.ip ===> client ip
    // 'ip' means it gives client ip who used the server
    // console.log(req.method);
    // req.method ==>GET POST,PUT ,DELETE
    // shows which method we are using like get put post.
    // browser can just check on get method other methods to be used by postman.
    //     let ID = req.params.id
    //     res.send(ID);
    // console.log(ID);
    // req.body
// });
    // req.params ==> /class/:id (after class anything is)


    // RESPONSE methods: gives responses
// res.send ==> send requests to users
    // res.download("/home/sakina/Books-store/server/2022-11-14.png"); //==> it download the given files in the path.
        // let obj ={
        //     fname : "sakina",
        //     age : 22,
        // };
        // res.json(obj); // it converts the data to json
        // res.redirect("https://youtube.com")// it redirect to the given URL.
        app.get('/hi', (req, res) => {
            try{
                res.stus(200).send("Hello");
            }catch{
                res.status(500).send("Internal Server Error");
            }
});

// Start the server
app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT ${PORT}`);
}); 