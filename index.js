import express from 'express';
import productRoute from './routes/product.js';
import sellRoute from './routes/sells.js';
import mongoose from 'mongoose';
import cors from 'cors';

const URI = "mongodb+srv://yesid3rincon:I4vsELz77isbBHet@cluster0.mv3bjjn.mongodb.net/Sportfit?retryWrites=true&w=majority";

mongoose.set('strictQuery', false);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(URI, options)
  .then(() => console.log('Connect DB Success'))
  .catch((e) => console.log(e));

const app = express();

app.set('PORT', process.env.PORT || 3000);

app.use(express.json());

// Enable CORS for all routes
app.use(cors());

app.use('/api/product', productRoute);
app.use('/api/sell', sellRoute );

app.listen(app.get('PORT'), () => console.log(`Server Listen to Port ${app.get('PORT')}`));
