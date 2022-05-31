const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/notes-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log('Connected to datase');
}).catch(error=> {
    console.log('Unable to connect to database',error);
})