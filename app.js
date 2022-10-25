const http = require("http");
const fs = require("fs");
// import s from '../../index.html'
  
http.createServer(function(request, response){
      
    console.log(`Запрошенный адрес: ${request.url}`);
    // получаем путь после слеша
    const filePath = request.url.substr(1);
    // смотрим, есть ли такой файл
    fs.access('../../workplace/marketplace-main/public/index.html', fs.constants.R_OK, err => {
        // если произошла ошибка - отправляем статусный код 404
        if(err){
            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else{
            fs.createReadStream('../../workplace/marketplace-main/public/index.html').pipe(response);
        }
      });
}).listen(3000, function(){
    console.log("Server started at 3000");
});