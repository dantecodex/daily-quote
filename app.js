import express from "express"
import helmet from "helmet"
import rateLimit from "express-rate-limit"
import cookieParser from "cookie-parser"
import sanitize from "express-mongo-sanitize"

import quoteRouter from "./routes/quote_route.js"
import staticRouter from "./routes/static_route.js"
import userRouter from "./routes/user_route.js"
import globalErrorHandler from "./middleware/globalErrorHandler.js"

const app = express()

app.set('trust proxy', 2)
app.get('/ip', (request, response) => response.send(request.ip))

app.use(
    helmet({
        contentSecurityPolicy: {
            directives: {
                ...helmet.contentSecurityPolicy.getDefaultDirectives(),
                "script-src": ["'self'",
                    "'unsafe-inline'",
                    "https://cdn.jsdelivr.net/npm/flatpickr",
                    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"],
            },
        },
    })
);
// testing
const limiter = rateLimit({
    limit: 1000,
    windowMs: 60 * 60 * 1000
})
app.use(limiter)
app.use(cookieParser())
app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '20kb' }))
app.use(sanitize())
app.set('view engine', 'ejs');

app.use('/', staticRouter)
app.use('/api/quote', quoteRouter)
app.use("/api/user", userRouter)
app.use('*', (req, res) => {
    res.render("page404")
})
app.use(globalErrorHandler)

export default app
