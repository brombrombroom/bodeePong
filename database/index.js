const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const uri = 'mongodb://project3:project3@ds233218.mlab.com:33218/heroku_dcxmxmbb'

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(uri, { useNewUrlParser: true }).then(
   () => {
       /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
       console.log('Connected to Mongo');

   },
   err => {
        /** handle initial connection error */
        console.log('error connecting to Mongo: ')
        console.log(err);

       }
 );


module.exports = mongoose.connection