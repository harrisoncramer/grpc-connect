import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file math/v1/math.proto.
 */
export declare const file_math_v1_math: GenFile;
/**
 * @generated from message math.v1.AddRequest
 */
export type AddRequest = Message<"math.v1.AddRequest"> & {
    /**
     * @generated from field: int32 first = 1;
     */
    first: number;
    /**
     * @generated from field: int32 second = 2;
     */
    second: number;
};
/**
 * Describes the message math.v1.AddRequest.
 * Use `create(AddRequestSchema)` to create a new message.
 */
export declare const AddRequestSchema: GenMessage<AddRequest>;
/**
 * @generated from message math.v1.AddResponse
 */
export type AddResponse = Message<"math.v1.AddResponse"> & {
    /**
     * @generated from field: int32 result = 1;
     */
    result: number;
};
/**
 * Describes the message math.v1.AddResponse.
 * Use `create(AddResponseSchema)` to create a new message.
 */
export declare const AddResponseSchema: GenMessage<AddResponse>;
/**
 * @generated from message math.v1.MultiplyRequest
 */
export type MultiplyRequest = Message<"math.v1.MultiplyRequest"> & {
    /**
     * @generated from field: int32 first = 1;
     */
    first: number;
    /**
     * @generated from field: int32 second = 2;
     */
    second: number;
};
/**
 * Describes the message math.v1.MultiplyRequest.
 * Use `create(MultiplyRequestSchema)` to create a new message.
 */
export declare const MultiplyRequestSchema: GenMessage<MultiplyRequest>;
/**
 * @generated from message math.v1.MultiplyResponse
 */
export type MultiplyResponse = Message<"math.v1.MultiplyResponse"> & {
    /**
     * @generated from field: int32 result = 1;
     */
    result: number;
};
/**
 * Describes the message math.v1.MultiplyResponse.
 * Use `create(MultiplyResponseSchema)` to create a new message.
 */
export declare const MultiplyResponseSchema: GenMessage<MultiplyResponse>;
/**
 * @generated from service math.v1.MathService
 */
export declare const MathService: GenService<{
    /**
     * @generated from rpc math.v1.MathService.Add
     */
    add: {
        methodKind: "unary";
        input: typeof AddRequestSchema;
        output: typeof AddResponseSchema;
    };
    /**
     * @generated from rpc math.v1.MathService.Multiply
     */
    multiply: {
        methodKind: "unary";
        input: typeof MultiplyRequestSchema;
        output: typeof MultiplyResponseSchema;
    };
}>;
