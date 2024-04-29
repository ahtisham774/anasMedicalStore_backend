
const mongoose = require('mongoose')

const dotenv = require('dotenv');
dotenv.config();


DATABASE =  "mongodb+srv://ahtishamrajpoot774:BAgBgOMCsVvrOuKI@cluster0.66srrat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(DATABASE).then(() => {

    console.log('connected to database');
}
).catch((err) => {
    console.log('error connecting to database',err);
});
module.exports = mongoose