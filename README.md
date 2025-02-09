# grpc-connect

This shows how you can use `.proto` files as the source of truth for APIs across the stack. This includes:

- Building a gRPC server, connecting it to a gRPC client (in Go)
- Building an HTTP server, and an HTTP client (in Typescript)

The advantage of this workflow is that you only write your API schemas in one place (proto files) and then those API definitions can be shared across your entire stack: Between the client and server, and between services. This is made possible by gRPC and the [Connect Protocol](https://connectrpc.com/) which enables type-safe, browser-compatible gRPC APIs.

## Servers

Start the Go servers. This will start the gRPC servers and will also start up the :

This also builds and starts HTTPs from the service implementation. By default, Connect handlers support Connect, gRPC, and gRPC-Web protocols.

```sh
task setup
task gen
task dev
```

Call the HTTP server. You can see the request goes through fine to the `greet` service:

```sh
task call:http-hello
```

This also works, now we are hitting the endpoint via gRPC:

```sh
task call:grpc-hello
```

Finally, you can also call the math service, which is just a different service:

```sh
task call:grpc-add
```

## Client

Make sure the Go servers are running first:

```sh
task setup
task gen
task dev
```

Next, run the HTTP client:

```sh
task start:run
```

This will compile the Typescript code, using the Connect protocol, and send requests to the Go server.
