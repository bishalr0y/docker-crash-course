const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())

const books = [
    {
        "id": 1,
        "title": "Think like a Monk"
    },
    {

        "id": 2,
        "title": "Atomic Habits"
    },
    {
        "id": 3,
        "title": "The power of subconscious mind"
    }
]

app.get('/', (req, res) => {
    res.status(200).json(books)
})

app.listen(4000, () => {
    console.log("Server running on port 4000")
})