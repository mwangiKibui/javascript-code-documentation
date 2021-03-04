const express = require('express');

const cors = require('cors');

const app = express();

app.use(cors());

//set the static folder.
app.use('/',express.static('out'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`application started on port ${PORT}`);
});