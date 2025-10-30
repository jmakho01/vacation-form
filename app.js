import express from 'express';

const app = express();

const PORT = 3003;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

const forms = [];

app.get('/', (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Add a route for the form submission
app.post('/submit-form', (req, res) => {
    // Create a JSON object to store the data
    const form = {
        destination: req.body.destination,
        date: req.body.date,
        travelnum: req.body.travelnum
    };
     // Add the order to our orders array
    forms.push(form);
    console.log(forms);

    // Direct the user to the confirmation page
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log('Server is running at http://localhost:${PORT}');
});