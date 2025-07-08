import fs from "node:fs";
import path from "path";
import { generateSchema } from "./generateSchema";
// import jsonServer from "json-server";
const jsonServer = require("json-server");
const pathToSwaggerUi = require("swagger-ui-dist").absolutePath();
import jwt from "jsonwebtoken";

const dbPath = "db.json";
const usersPath = "users.json";
const port = 3010;
const JWT_SECRET = "secret_JWT_$#@%$#";

const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));

const server = jsonServer.create();
const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults({ noCors: false, static: pathToSwaggerUi, });

let withDelay = false;
let withAuth = false;

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
server.get("/bootstrap.css", (req: any, res: any) => {
    res.sendFile(
        __dirname + "/node_modules/bootstrap/dist/css/bootstrap.min.css"
    );
});



server.use(middlewares);
server.use(jsonServer.bodyParser);

server.get("/swagger.json", (req: any, res: any) => {
    const schema = generateSchema();
    res.json(schema);
});

server.get("/config/delay", (req, res) => {
    res.json({ withDelay });
});

server.post("/config/delay", (req, res) => {
    withDelay = !withDelay;
    res.json({ withDelay });
});

server.get("/config/auth", (req, res) => {
    res.json({ withAuth });
});

server.post("/config/auth", (req, res) => {
    withAuth = !withAuth;
    res.json({ withAuth });
});

server.post("/auth/register", (req, res) => {
    const user = { email: req.body.email, password: req.body.password };

    if (users.find((u) => u.email === user.email)) {
        res.status(403).json({ error: "User already exists" });
        return;
    }

    users.push(user);
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: "30d" });
    res.json({ token });
});

server.post("/auth/login", (req, res) => {
    const user = { email: req.body.email, password: req.body.password };
    const registeredUser = users.find((u) => u.email === user.email);

    if (!registeredUser) {
        res.status(404).json({ error: "User not found" });
        return;
    }

    if (registeredUser.password !== user.password) {
        res.status(401).json({ error: "Wrong password" });
        return;
    }

    const token = jwt.sign({ email: registeredUser.email }, JWT_SECRET, { expiresIn: "30d" });
    res.json({ token });
});

const delay = (req: any, res: any, next: any) => {
    if (!withDelay) return next();

    const delayMs = 500 + Math.random() * 2000;
    setTimeout(() => {
        res.setHeader("DELAY", delayMs.toString());
        next();
    }, delayMs);
};

const authorize = (req: any, res: any, next: any) => {
    if (!withAuth) return next();

    const token = req.headers["token"];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        res.setHeader("X-USER", decoded.email);
        next();
    } catch (err) {
        res.status(401).send(err);
    }
};



server.use(delay);
server.use(authorize);
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server is running at http://localhost:${port}`);
});