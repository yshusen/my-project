let http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'content-type': 'text/html:charset = utf-8'});
  let allData = '';
  req.on('data', function (chunk) {//Buffer
    allData += chunk;
  });
  req.on('end', function () {
    /* console.log(allData);*/
    let obj = JSON.parse(allData);
    if (obj.user === '小明' && obj.pass === '123456') {
      res.end('1')
    } else {
      res.end('-1')
    }
  });
}).listen(3000, () => {
  console.log('服务器已启动');
});
