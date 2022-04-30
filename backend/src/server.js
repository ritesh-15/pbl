const express = require("express")
const cors = require("cors")
const connection = require("./db/connection")

const PORT = process.env.PORT || 9000

const app = express()

connection()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// routes
app.use("/api/v1/auth",require("./routes/auth-routes"))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})