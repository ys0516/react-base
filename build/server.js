const path = require('path');
const express = require('express');
const app = express();
// 加载静态文件 打包好的静态文件放在dist下
app.use(express.static(path.join(__dirname, '../dist')));

app.get(`/*`, (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

const port = 8000

//监听端口
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return null;
    }
    return console.log(`${port} port starting`);
});
