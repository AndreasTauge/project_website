import express from 'express';
import "reflect-metadata";
import { createConnection } from 'typeorm';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


createConnection().then(connection => {
  // Here you can start to work with your entities
}).catch(error => console.log(error));
