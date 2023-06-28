const express = require('express');
const cors = require('cors');


const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());


const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

const aviRoutes = require('./routes/aviRoutes');
app.use('/avis', aviRoutes);

const categorieRoutes = require('./routes/categorieRoutes');
app.use('/categories', categorieRoutes);

const citieRoutes = require('./routes/citieRoutes');
app.use('/cities', citieRoutes);

const commoditieRoutes = require('./routes/commoditieRoutes');
app.use('/cities', commoditieRoutes);

const linktableRoutes = require('./routes/linktableRoutes');
app.use('/linktables', linktableRoutes);

const pictureRoutes = require('./routes/pictureRoutes');
app.use('/pictures', pictureRoutes);

const regionRoutes = require('./routes/regionRoutes');
app.use('/regions', regionRoutes);

const reservationRoutes = require('./routes/reservationRoutes');
app.use('/reservations', reservationRoutes);

const cottageRoutes = require('./routes/cottageRoutes');
app.use('/cottages', cottageRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});