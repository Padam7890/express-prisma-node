const express = require("express");

const app = express();
const userRouter =  require("./routes/user.route");
const cors = require("cors");

app.use(express.json());
app.use(cors())

app.use('/', userRouter )

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
