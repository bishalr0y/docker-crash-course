const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())

const books = [
    {
        name: "Think like a monk",
        author: "Jay Shetty"
    },
    {

        name: "Atomic Habits",
        author: "James Clear"
    },
    {
        name: "The subtle art of not giving a f**k",
        author: "Mark Manson"
    }
]

app.get('/', (req, res) => {
    res.status(200).json(books)
})

app.listen(4000, () => {
    console.log("Server running on port 4000")
})