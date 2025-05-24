// // function abc(call)
// // {
// //     call(12,34)
// // }

// // abc(function(a,i) {
// //     console.log(a,i)
// // })

// // var temp = require('./temp')

// // console.log(temp.newFunction())
// // console.log(temp.s)

// // temp()

// // var http = require('http');

// // http.createServer(function (req, res) {
// //   res.writeHead(200, {'Content-Type': 'text/html'});
// //   res.write("The date and time are currently: " + new Date().toLocaleString());

// //   const responseObject = {name : 'hello'}
// //   res.end(JSON.stringify(responseObject));
// // }).listen(8080, () => {
// //   console.log("Server is running on http://localhost:8080");
// // });
// setTimeout(() => {
//         console.log('first')
//     });

// const promises = new Promise((resolve, reject) => {

//     // let success = false

//     // if (success) {
//     //     resolve('suucess')
//     // }
//     // else {
//     //     reject('Not success')
//     // }

//     setTimeout(() => {
//         reject('second')
//     });

// })

// promises.then((resolve) => {
//     console.log(resolve)
//     return 'hellllll'
// }).then((resolve) => {
//     console.log(resolve)
//     return '990'
// }).catch((reject) => {
//     console.log(reject)
// })

// // async function temp() {
// //     try {
// //         // promises
// //         let res = await promises
// //         console.log(res)
// //         console.log('print')
// //     }
// //     catch(e)
// //     {
// //         console.log(e,'error')
// //     }
// // }

// // temp()

// console.log('third')a

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.get('/users',(req,res) => {

    
    res.json({message : 'Returning list of users'})
});

app.post('/users',(req,res)=>{

    const newUser = req.body;
    
    res.json({message:'user created' ,user : newUser})
})

app.put('/users/:id',(req,res) => {

    const userId = req.params.id
    const updateUser = req.body
    res.json({message : `User with ID ${userId} updated`,updateUser})
})

app.delete('/users/:id',(req,res) =>{
    const userId = req.params.id
    res.json({message : `User with Id ${userId} updated`})
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

