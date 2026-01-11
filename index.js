class Server {
    constructor(builder) {
        this.ip = builder.ip;
        this.port = builder.port;
        this.protocol = builder.protocol;
        this.timeout = builder.timeout;
        this.ssl = builder.ssl;
    }

    toString() {
        return `This is my server:/n 
        Ip: ${this.ip}/n
        Port: ${this.port}/n
        Protocol: ${this.protocol}/n
        Timeout: ${this.timeout}/n
        Ssl: ${this.ssl}/n `;
    }
}

class ServerBuilderX {
    constructor() {
        this.protocol = "HTTP";
        this.timeout = 3000;
        this.ssl = false;
    }
    setIp(ip) {
        this.ip = ip;
        return this;
    }
    setPort(port) {
        this.port = port;
        return this;
    }
    setProtocol(protocol) {
        this.protocol = protocol;
        return this;
    }
    setTimeout(timeout) {
        this.timeout = timeout;
        return this;
    }
    setSsl(ssl) {
        this.ssl = ssl;
        return this;
    }
    build() {
        return new Server(this);
    }
}
