import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file greet/v1/greet.proto.
 */
export declare const file_greet_v1_greet: GenFile;
/**
 * @generated from message greet.v1.HelloRequest
 */
export type HelloRequest = Message<"greet.v1.HelloRequest"> & {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
};
/**
 * Describes the message greet.v1.HelloRequest.
 * Use `create(HelloRequestSchema)` to create a new message.
 */
export declare const HelloRequestSchema: GenMessage<HelloRequest>;
/**
 * @generated from message greet.v1.HelloResponse
 */
export type HelloResponse = Message<"greet.v1.HelloResponse"> & {
    /**
     * @generated from field: string greeting = 1;
     */
    greeting: string;
};
/**
 * Describes the message greet.v1.HelloResponse.
 * Use `create(HelloResponseSchema)` to create a new message.
 */
export declare const HelloResponseSchema: GenMessage<HelloResponse>;
/**
 * @generated from service greet.v1.GreetService
 */
export declare const GreetService: GenService<{
    /**
     * @generated from rpc greet.v1.GreetService.Hello
     */
    hello: {
        methodKind: "unary";
        input: typeof HelloRequestSchema;
        output: typeof HelloResponseSchema;
    };
}>;
