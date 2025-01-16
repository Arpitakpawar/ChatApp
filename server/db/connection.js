const mongoose=require('mongoose')

const url = 'mongodb+srv://chat_app_admin:22122003@cluster0.vwgze.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(url).then(() => {
    console.log('Connected to DB');
}).catch((error) => {
    console.error('Error ', error);
});

