const http = require('http');
const port = process.env.PORT || 3000;

const requestHandler = (request, response) => {
    const url = new URL(request.URL, `http://${request.headers.port} `);
    const name = url.searchParams.get('name') || ' World';
    response.end(`Hello ${name} from NodeJS `);
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }

    console.log(`server is listening on ${port}`);
})