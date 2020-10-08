const db = require('mongoose');
db.Promise = global.Promise;

//'mongodb://localhost:27017/telegram'
const connect = async(url) => {
    await db.connect(url, { useNewUrlParser: true })

    console.log('[db] conectada con exito');
}

module.exports=connect