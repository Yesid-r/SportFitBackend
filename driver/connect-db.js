import mongoose from 'mongoose'

const URI = "mongodb+srv://yesid3rincon:I4vsELz77isbBHet@cluster0.mv3bjjn.mongodb.net/Sportfit?retryWrites=true&w=majority"

mongoose.set('strictQuery', false)

const options = {
    useNewUrlParser:true, useUnifiedTopology:true
}

mongoose.connect(URI,options)   
    .then(()=>console.log('Connect DB Success'))
    .catch( e => console.log(e))

module.exports = mongoose