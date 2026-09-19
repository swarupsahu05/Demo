import express from "express";
import sum from "./sum.js";

const app = express();
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

app.get("/home", (req, res) => {
    res.json({ message: "Hello from home page" });
})

app.get("/getSum/:a/:b", (req, res)=> {
    const {a,b} = req.params;

    res.json({
        ans: sum(Number(a), Number(b))
    })

})