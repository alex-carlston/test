const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/enroll', (req, res) => {
    const { name, email, password } = req.body;

    // Here you would typically add code to save the membership information to a database
    // For now, we'll just log the data and send a success response

    console.log('Received enrollment:', { name, email, password });
    res.status(200).send('Enrollment successful');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
