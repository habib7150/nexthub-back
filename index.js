const express = require('express');
const userRoutes = require('./Routes/UserRoutes');
const reviewRoutes = require('./Routes/ReviewRoutes');
const productRoutes = require('./Routes/ProductRoutes');
const orderRoutes = require('./Routes/OrderRoutes');
const paymentRoutes = require('./Routes/PaymentRoutes');
const categoryRoutes = require('./Routes/CategoryRoutes');
const orderDetailsRoutes = require('./Routes/OrderDetailsRoutes');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());

app.get('/hello',(request, response) => {
    response.send('Server is running! ��������');
});

app.use('/users', userRoutes);

app.use('/reviews', reviewRoutes);

app.use('/products', productRoutes);

app.use('/orders', orderRoutes);

app.use('/orderdetails', orderDetailsRoutes);

app.use('/payments', paymentRoutes);

app.use('/categories', categoryRoutes);

app.listen(port, () => {
    console.log("Votre Serveur est lancé sur http://127.0.0.1:"+port);
});