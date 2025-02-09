//go:build tools
// +build tools

package tools

import (
	_ "connectrpc.com/connect/cmd/protoc-gen-connect-go" // Plugin for generating Connect code, used for HTTP endpoints
	_ "github.com/bufbuild/buf/cmd/buf"                  // Main buf CLI tool
	_ "github.com/fullstorydev/grpcurl/cmd/grpcurl"      // CLI Tool for Curling GRPC endpoints
	_ "google.golang.org/protobuf/cmd/protoc-gen-go"     // Tool for generating gRPC endpoints
)
