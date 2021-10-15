let MYSQL_CONFIG = {};
MYSQL_CONFIG = {
    host: "localhost",
    port: "端口",
    user: "数据库用户",
    password: '你的数据库密码',
    database: "数据库"
}
module.exports = { MYSQL_CONFIG }
    ///Users/luche/htlm_cesium_css/my/nodeJS/mmExpress/src/database/mysql.js:21
    // throw err; // server variable configures this)  
    // ^

// Error: Packets out of order. Got: 0 Expected: 3
// at Parser._tryReadPacketHeader (/Users/luche/htlm_cesium_css/my/nodeJS/mmExpress/node_modules/_mysql@2.18.1@mysql/lib/protocol/Parser.js:470:15)
// at Parser.write (/Users/luche/htlm_cesium_css/my/nodeJS/mmExpress/node_modules/_mysql@2.18.1@mysql/lib/protocol/Parser.js:33:29)
// at Protocol.write (/Users/luche/htlm_cesium_css/my/nodeJS/mmExpress/node_modules/_mysql@2.18.1@mysql/lib/protocol/Protocol.js:38:16)
// at Socket.<anonymous> (/Users/luche/htlm_cesium_css/my/nodeJS/mmExpress/node_modules/_mysql@2.18.1@mysql/lib/Connection.js:88:28)
// at Socket.<anonymous> (/Users/luche/htlm_cesium_css/my/nodeJS/mmExpress/node_modules/_mysql@2.18.1@mysql/lib/Connection.js:526:10)
// at Socket.emit (events.js:376:20)
// at addChunk (internal/streams/readable.js:309:12)
// at readableAddChunk (internal/streams/readable.js:284:9)
// at Socket.Readable.push (internal/streams/readable.js:223:10)
// at TCP.onStreamRead (internal/stream_base_commons.js:188:23) {
// code: 'PROTOCOL_PACKETS_OUT_OF_ORDER',
// fatal: true
// }
// [nodemon] app crashed - waiting for file changes before starting...