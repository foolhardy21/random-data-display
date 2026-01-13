import express from 'express'
import cors from 'cors'
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.SERVER_PORT

app.use(cors())
app.use(express.json())

const sampleData = [
    {
        "type": "metric",
        "data": {
            "value": 1247,
            "label": "Active Users",
            "change": "+12.5%",
            "trend": "up"
        }
    },
    {
        "type": "chart",
        "data": {
            "title": "Weekly Sales",
            "points": [
                { "label": "Mon", "value": 45 },
                { "label": "Tue", "value": 52 },
                { "label": "Wed", "value": 48 },
                { "label": "Thu", "value": 61 },
                { "label": "Fri", "value": 58 }
            ]
        }
    },
    {
        "type": "list",
        "data": {
            "title": "Recent Orders",
            "items": [
                { "id": "1", "text": "Order from John Doe", "status": "completed", "time": "2 min ago" },
                { "id": "2", "text": "Order from Jane Smith", "status": "pending", "time": "5 min ago" },
                { "id": "3", "text": "Order from Bob Wilson", "status": "completed", "time": "12 min ago" }
            ]
        }
    },
    {
        "type": "progress",
        "data": {
            "title": "Monthly Goal",
            "current": 7250,
            "target": 10000,
            "unit": "sales"
        }
    }
]

app.get('/api/random-data', (req, res) => {
    const randomIndex = Math.floor(Math.random() * sampleData.length)
    const randomData = sampleData[randomIndex]
    res.status(200).json({ success: true, data: randomData })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})