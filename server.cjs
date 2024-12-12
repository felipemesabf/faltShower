const jsonServer = require("json-server") 
const server = jsonServer.create();
const router = jsonServer.router('./db.json'); // Your database file
const middlewares = jsonServer.defaults();

// Add custom middleware for CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow any origin
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// const originalRender = router.render;
// router.render = (req, res) => {
//   if (req.path === '/users') {
//     const data = res.locals;
//     const newData = data.data.map((obj)=>{
//       delete obj.psw;
//       return obj
//     })      
//     const transformedData = [...newData];

//     return res.jsonp(transformedData);
//   }
//   return originalRender(req, res);
// };


server.use(router);
server.use(middlewares)
server.listen(4000, () => {
  console.log('JSON Server is running',4000);
});