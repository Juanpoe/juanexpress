require('dotenv').config()
const { response } = require('express')
const  express  = require ('express')// Importar el paquete express
const app = express()
const hbs =require('hbs')
const port = process.env.PORT// definir el puerto 



app.use(express.static('public'));

//Motor de plantilla
hbs.registerPartials(__dirname + '/public/views/partials', function(err){})
app.set('view engine', 'hbs');
app.set('views',__dirname + '/public/views');

app.get('/',(req,res)=>{
//res.send('Hola mundo')
res.render('registrarPedido',{
    nombre: 'Home'
})
})

app.get('/registrarPedido',(req,res)=>{
  res.render('registrarPedido',{
    nombre:'registrarPedido'

  })
    //  res.sendFile(__dirname + '/public/assets/views/registrarPedido.html');
})

app.get('/contacto',(req,res)=>{
    res.send('Contacto')

})
app.get('*',(req,res)=>{
        //res.send('Pagina no encontrada')
    res.sendFile(__dirname + '/public/assets/views/404.html');
})



app.listen(port, ()=>{

    console.log(`Escuchando por el puerto${port}`)
})