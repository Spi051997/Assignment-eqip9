const express=require('express')
const app=express()
const  port=4000;
const cors = require('cors');
const db=require('./dbConnection')
const bodyParser = require('body-parser');
const apiRoutes=require('./src/BackEndApiAPP/registration');
const loginroutes=require('./src/BackEndApiAPP/login')
const mobileroutes=require('./src/BackEndApiAPP/Getlastname');
const authMiddleware=require('./src/config/authMiddleware');
const userroute=require('./src/crudAPI/crud')

 // using middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Test 
app.get('/',(req,res)=>{
     res.send("HEllo World")    
})

// routes
app.use('/', apiRoutes);
app.use('/api',loginroutes);
app.use('/name',mobileroutes);
// user route for Procedure
app.use('/user',userroute);


app.get('/api/protected', authMiddleware, (req, res) => {

    res.json({ message: 'This is a protected route.' });
  });

// port  
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})