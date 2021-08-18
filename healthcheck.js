var http = require("http")

var options = {
    host : "localhost",
    path: "/hls/live.stream.m3u8",
    port : "8080",
    timeout : 2000
}

var request = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`)
    if (res.statusCode == 200) {
        process.exit(0)
    }
    process.exit(1)
})

request.on('error', function(err) {
    console.log('ERROR')
    process.exit(1)
})

request.end()