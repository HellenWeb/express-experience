
// Modules

const { Router } = require("express")

// Default Variebles

const router = Router()

// Get Request

router.get("/api/server", (req, res, next) => {
    res.json({
        test: 25,
    })
})

