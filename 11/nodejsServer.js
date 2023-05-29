var http = require('http');

var fs = require('fs');

var mime = require('mime-types');

const PORT = 8080;

async function server(){
    http.createServer(async function(request,response){
    
            let fileData;
            
            //console.log(request.url);
            //console.log(mime.lookup(request.url));

            if(request.url == '/favicon.ico'){
                response.writeHeader(404);
                response.end();
            }else{

            
                if(request.url == '/') {
                    try {
                        let data = fs.readFileSync('./index.html', 'utf8');
                        fileData = data;
                    } catch (err) {
                        console.error(err);
                    }
                    response.writeHeader(200,{'Content-type':'text/html'});
                }else{
                    try {
                        let data = fs.readFileSync('.' + request.url, 'utf8');
                        fileData = data;
                    } catch (err) {
                        console.error(err);
                    }  
                    response.writeHeader(200,{'Content-type':mime.lookup(request.url)});
                }
                
                response.write(fileData);
                response.end();
            }   
    }).listen(PORT);
}

server();



