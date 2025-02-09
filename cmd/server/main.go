package main

import (
	"errors"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"syscall"

	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"

	greetv1 "github.com/harrisoncramer/grpc-connect-http/apis/gen/greet/v1"
	"github.com/harrisoncramer/grpc-connect-http/apis/gen/greet/v1/greetv1connect"
	mathv1 "github.com/harrisoncramer/grpc-connect-http/apis/gen/math/v1"
	greetService "github.com/harrisoncramer/grpc-connect-http/cmd/service/greet"
	mathService "github.com/harrisoncramer/grpc-connect-http/cmd/service/math"
)

func main() {

	// Set up HTTP port and gRPC port, and gRPC service methods
	httpPort := os.Getenv("HTTP_PORT")
	grpcPort := os.Getenv("GRPC_PORT")
	greetSvc := greetService.NewGrpcService()
	mathSvc := mathService.NewGrpcService()

	// Register services with gRPC server...
	// We have two different internal gRPC services, one for math and another for greetings
	// We register both with the gRPC server.
	log.Printf("grpc server listening on port %s...\n", grpcPort)
	srv := grpc.NewServer()
	go func() {
		l, err := net.Listen("tcp", fmt.Sprintf(":%s", grpcPort))
		if err != nil {
			log.Fatalf("could not listen: %v", err)
		}
		defer l.Close()
		greetv1.RegisterGreetServiceServer(srv, greetSvc)
		mathv1.RegisterMathServiceServer(srv, mathSvc)
		reflection.Register(srv)
		if err := srv.Serve(l); err != nil && !errors.Is(err, grpc.ErrServerStopped) {
			log.Fatalf("failed to start server: %v", err)
		}
	}()

	// Create the httpService, which must have a Hello method that satisfies NewGreetServiceHandler from our compiled connect code
	// The generated handler is an http handler that we can
	httpService := greetService.NewHttpGreetService()
	path, handler := greetv1connect.NewGreetServiceHandler(httpService)
	mux := http.NewServeMux()
	mux.Handle(path, handler)

	log.Printf("http server listening on port %s...\n", httpPort)
	go func() {
		err := http.ListenAndServe(fmt.Sprintf("localhost:%s", httpPort), mux)
		if err != nil {
			log.Fatalf("could not start http server: %v", err)
		}
	}()

	// On quit signals, shut down the server...
	quitChan := make(chan os.Signal, 1)
	signal.Notify(quitChan, syscall.SIGINT, syscall.SIGTERM)
	<-quitChan
	srv.Stop()
	os.Exit(0)
}
