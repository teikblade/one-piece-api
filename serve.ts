import express from "express";
const app = express();
const port = process.env.PORT || 60;
import { routeNakamas } from "./route/nakamas";
import { routeTripulation } from "./route/tripulation";
import path from "path";

app.use(express.json());

//BACKEND
app.use("/api/v1", routeNakamas);
app.use("/api/v1", routeTripulation);
/*


//VIEWS
app.set('views', path.join(__dirname,'public'));
app.set('view engine', 'ejs'); 
app.engine('html', require('ejs').renderFile);

*/

//FRONTEND
app.use(express.static(path.join(__dirname, "/public")));


//INIT SERVER
app.listen(port, () => {
  console.log("SERVER RUNNING IN PORT " + port);
});
