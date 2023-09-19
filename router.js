const express = require("express")
const app = express()
const router = express.Router();
const axios = require("axios");
const Data = require("./model");
const getdata = async () => {
    const url = "https://api.wazirx.com/api/v2/tickers";
    const res = await axios.get(url);
    const data = await res.data;
    const dataarray = Object.entries(data);
    const firstten = dataarray.slice(0, 10);
    // const limitdata = arr.slice(0, 10);

    // for (let i = 0; i < 10; i++) {
    //     arr.push(data [i][1])
    // }
    return firstten;
}
// router.get("/getdata", async (req, res) => {
//     const data = await getdata();
//     res.json(data)
// }
// );
router.get("/getdata", async (req, res) => {
    const data = await getdata();
    const arr = [];
    for (let i = 0; i < 10; i++) {
        const obj = {
            name: data[i][1].name,
            last: data[i][1].last,
            buy: data[i][1].buy,
            volume: data[i][1].volume,
            sell: data[i][1].sell,
            base_unit: data[i][1].base_unit,
        }
        arr.push(obj)
    }
    const result = await Data.insertMany(arr);
    res.json(result);
});
module.exports = router;

