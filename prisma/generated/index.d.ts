
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TreeNode
 * 
 */
export type TreeNode = $Result.DefaultSelection<Prisma.$TreeNodePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TreeNodes
 * const treeNodes = await prisma.treeNode.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TreeNodes
   * const treeNodes = await prisma.treeNode.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.treeNode`: Exposes CRUD operations for the **TreeNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TreeNodes
    * const treeNodes = await prisma.treeNode.findMany()
    * ```
    */
  get treeNode(): Prisma.TreeNodeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TreeNode: 'TreeNode'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "treeNode"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TreeNode: {
        payload: Prisma.$TreeNodePayload<ExtArgs>
        fields: Prisma.TreeNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreeNodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreeNodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeNodePayload>
          }
          findFirst: {
            args: Prisma.TreeNodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreeNodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeNodePayload>
          }
          findMany: {
            args: Prisma.TreeNodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeNodePayload>[]
          }
          create: {
            args: Prisma.TreeNodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeNodePayload>
          }
          createMany: {
            args: Prisma.TreeNodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreeNodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeNodePayload>[]
          }
          delete: {
            args: Prisma.TreeNodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeNodePayload>
          }
          update: {
            args: Prisma.TreeNodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeNodePayload>
          }
          deleteMany: {
            args: Prisma.TreeNodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreeNodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TreeNodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeNodePayload>[]
          }
          upsert: {
            args: Prisma.TreeNodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreeNodePayload>
          }
          aggregate: {
            args: Prisma.TreeNodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreeNode>
          }
          groupBy: {
            args: Prisma.TreeNodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreeNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreeNodeCountArgs<ExtArgs>
            result: $Utils.Optional<TreeNodeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    treeNode?: TreeNodeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TreeNodeCountOutputType
   */

  export type TreeNodeCountOutputType = {
    children: number
  }

  export type TreeNodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | TreeNodeCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * TreeNodeCountOutputType without action
   */
  export type TreeNodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNodeCountOutputType
     */
    select?: TreeNodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TreeNodeCountOutputType without action
   */
  export type TreeNodeCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeNodeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TreeNode
   */

  export type AggregateTreeNode = {
    _count: TreeNodeCountAggregateOutputType | null
    _min: TreeNodeMinAggregateOutputType | null
    _max: TreeNodeMaxAggregateOutputType | null
  }

  export type TreeNodeMinAggregateOutputType = {
    id: string | null
    key: string | null
    label: string | null
    icon: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TreeNodeMaxAggregateOutputType = {
    id: string | null
    key: string | null
    label: string | null
    icon: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TreeNodeCountAggregateOutputType = {
    id: number
    key: number
    label: number
    icon: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TreeNodeMinAggregateInputType = {
    id?: true
    key?: true
    label?: true
    icon?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TreeNodeMaxAggregateInputType = {
    id?: true
    key?: true
    label?: true
    icon?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TreeNodeCountAggregateInputType = {
    id?: true
    key?: true
    label?: true
    icon?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TreeNodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreeNode to aggregate.
     */
    where?: TreeNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeNodes to fetch.
     */
    orderBy?: TreeNodeOrderByWithRelationInput | TreeNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreeNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TreeNodes
    **/
    _count?: true | TreeNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreeNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreeNodeMaxAggregateInputType
  }

  export type GetTreeNodeAggregateType<T extends TreeNodeAggregateArgs> = {
        [P in keyof T & keyof AggregateTreeNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreeNode[P]>
      : GetScalarType<T[P], AggregateTreeNode[P]>
  }




  export type TreeNodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreeNodeWhereInput
    orderBy?: TreeNodeOrderByWithAggregationInput | TreeNodeOrderByWithAggregationInput[]
    by: TreeNodeScalarFieldEnum[] | TreeNodeScalarFieldEnum
    having?: TreeNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreeNodeCountAggregateInputType | true
    _min?: TreeNodeMinAggregateInputType
    _max?: TreeNodeMaxAggregateInputType
  }

  export type TreeNodeGroupByOutputType = {
    id: string
    key: string
    label: string
    icon: string | null
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TreeNodeCountAggregateOutputType | null
    _min: TreeNodeMinAggregateOutputType | null
    _max: TreeNodeMaxAggregateOutputType | null
  }

  type GetTreeNodeGroupByPayload<T extends TreeNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreeNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreeNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreeNodeGroupByOutputType[P]>
            : GetScalarType<T[P], TreeNodeGroupByOutputType[P]>
        }
      >
    >


  export type TreeNodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    icon?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | TreeNode$parentArgs<ExtArgs>
    children?: boolean | TreeNode$childrenArgs<ExtArgs>
    _count?: boolean | TreeNodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treeNode"]>

  export type TreeNodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    icon?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | TreeNode$parentArgs<ExtArgs>
  }, ExtArgs["result"]["treeNode"]>

  export type TreeNodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    label?: boolean
    icon?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    parent?: boolean | TreeNode$parentArgs<ExtArgs>
  }, ExtArgs["result"]["treeNode"]>

  export type TreeNodeSelectScalar = {
    id?: boolean
    key?: boolean
    label?: boolean
    icon?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TreeNodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "label" | "icon" | "parentId" | "createdAt" | "updatedAt", ExtArgs["result"]["treeNode"]>
  export type TreeNodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | TreeNode$parentArgs<ExtArgs>
    children?: boolean | TreeNode$childrenArgs<ExtArgs>
    _count?: boolean | TreeNodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TreeNodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | TreeNode$parentArgs<ExtArgs>
  }
  export type TreeNodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | TreeNode$parentArgs<ExtArgs>
  }

  export type $TreeNodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TreeNode"
    objects: {
      parent: Prisma.$TreeNodePayload<ExtArgs> | null
      children: Prisma.$TreeNodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      label: string
      icon: string | null
      parentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["treeNode"]>
    composites: {}
  }

  type TreeNodeGetPayload<S extends boolean | null | undefined | TreeNodeDefaultArgs> = $Result.GetResult<Prisma.$TreeNodePayload, S>

  type TreeNodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreeNodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreeNodeCountAggregateInputType | true
    }

  export interface TreeNodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TreeNode'], meta: { name: 'TreeNode' } }
    /**
     * Find zero or one TreeNode that matches the filter.
     * @param {TreeNodeFindUniqueArgs} args - Arguments to find a TreeNode
     * @example
     * // Get one TreeNode
     * const treeNode = await prisma.treeNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreeNodeFindUniqueArgs>(args: SelectSubset<T, TreeNodeFindUniqueArgs<ExtArgs>>): Prisma__TreeNodeClient<$Result.GetResult<Prisma.$TreeNodePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TreeNode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreeNodeFindUniqueOrThrowArgs} args - Arguments to find a TreeNode
     * @example
     * // Get one TreeNode
     * const treeNode = await prisma.treeNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreeNodeFindUniqueOrThrowArgs>(args: SelectSubset<T, TreeNodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreeNodeClient<$Result.GetResult<Prisma.$TreeNodePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TreeNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeNodeFindFirstArgs} args - Arguments to find a TreeNode
     * @example
     * // Get one TreeNode
     * const treeNode = await prisma.treeNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreeNodeFindFirstArgs>(args?: SelectSubset<T, TreeNodeFindFirstArgs<ExtArgs>>): Prisma__TreeNodeClient<$Result.GetResult<Prisma.$TreeNodePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TreeNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeNodeFindFirstOrThrowArgs} args - Arguments to find a TreeNode
     * @example
     * // Get one TreeNode
     * const treeNode = await prisma.treeNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreeNodeFindFirstOrThrowArgs>(args?: SelectSubset<T, TreeNodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreeNodeClient<$Result.GetResult<Prisma.$TreeNodePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TreeNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeNodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TreeNodes
     * const treeNodes = await prisma.treeNode.findMany()
     * 
     * // Get first 10 TreeNodes
     * const treeNodes = await prisma.treeNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treeNodeWithIdOnly = await prisma.treeNode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreeNodeFindManyArgs>(args?: SelectSubset<T, TreeNodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeNodePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TreeNode.
     * @param {TreeNodeCreateArgs} args - Arguments to create a TreeNode.
     * @example
     * // Create one TreeNode
     * const TreeNode = await prisma.treeNode.create({
     *   data: {
     *     // ... data to create a TreeNode
     *   }
     * })
     * 
     */
    create<T extends TreeNodeCreateArgs>(args: SelectSubset<T, TreeNodeCreateArgs<ExtArgs>>): Prisma__TreeNodeClient<$Result.GetResult<Prisma.$TreeNodePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TreeNodes.
     * @param {TreeNodeCreateManyArgs} args - Arguments to create many TreeNodes.
     * @example
     * // Create many TreeNodes
     * const treeNode = await prisma.treeNode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreeNodeCreateManyArgs>(args?: SelectSubset<T, TreeNodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TreeNodes and returns the data saved in the database.
     * @param {TreeNodeCreateManyAndReturnArgs} args - Arguments to create many TreeNodes.
     * @example
     * // Create many TreeNodes
     * const treeNode = await prisma.treeNode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TreeNodes and only return the `id`
     * const treeNodeWithIdOnly = await prisma.treeNode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreeNodeCreateManyAndReturnArgs>(args?: SelectSubset<T, TreeNodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeNodePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TreeNode.
     * @param {TreeNodeDeleteArgs} args - Arguments to delete one TreeNode.
     * @example
     * // Delete one TreeNode
     * const TreeNode = await prisma.treeNode.delete({
     *   where: {
     *     // ... filter to delete one TreeNode
     *   }
     * })
     * 
     */
    delete<T extends TreeNodeDeleteArgs>(args: SelectSubset<T, TreeNodeDeleteArgs<ExtArgs>>): Prisma__TreeNodeClient<$Result.GetResult<Prisma.$TreeNodePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TreeNode.
     * @param {TreeNodeUpdateArgs} args - Arguments to update one TreeNode.
     * @example
     * // Update one TreeNode
     * const treeNode = await prisma.treeNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreeNodeUpdateArgs>(args: SelectSubset<T, TreeNodeUpdateArgs<ExtArgs>>): Prisma__TreeNodeClient<$Result.GetResult<Prisma.$TreeNodePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TreeNodes.
     * @param {TreeNodeDeleteManyArgs} args - Arguments to filter TreeNodes to delete.
     * @example
     * // Delete a few TreeNodes
     * const { count } = await prisma.treeNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreeNodeDeleteManyArgs>(args?: SelectSubset<T, TreeNodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreeNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TreeNodes
     * const treeNode = await prisma.treeNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreeNodeUpdateManyArgs>(args: SelectSubset<T, TreeNodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TreeNodes and returns the data updated in the database.
     * @param {TreeNodeUpdateManyAndReturnArgs} args - Arguments to update many TreeNodes.
     * @example
     * // Update many TreeNodes
     * const treeNode = await prisma.treeNode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TreeNodes and only return the `id`
     * const treeNodeWithIdOnly = await prisma.treeNode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TreeNodeUpdateManyAndReturnArgs>(args: SelectSubset<T, TreeNodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeNodePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TreeNode.
     * @param {TreeNodeUpsertArgs} args - Arguments to update or create a TreeNode.
     * @example
     * // Update or create a TreeNode
     * const treeNode = await prisma.treeNode.upsert({
     *   create: {
     *     // ... data to create a TreeNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TreeNode we want to update
     *   }
     * })
     */
    upsert<T extends TreeNodeUpsertArgs>(args: SelectSubset<T, TreeNodeUpsertArgs<ExtArgs>>): Prisma__TreeNodeClient<$Result.GetResult<Prisma.$TreeNodePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TreeNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeNodeCountArgs} args - Arguments to filter TreeNodes to count.
     * @example
     * // Count the number of TreeNodes
     * const count = await prisma.treeNode.count({
     *   where: {
     *     // ... the filter for the TreeNodes we want to count
     *   }
     * })
    **/
    count<T extends TreeNodeCountArgs>(
      args?: Subset<T, TreeNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreeNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TreeNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TreeNodeAggregateArgs>(args: Subset<T, TreeNodeAggregateArgs>): Prisma.PrismaPromise<GetTreeNodeAggregateType<T>>

    /**
     * Group by TreeNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreeNodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TreeNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreeNodeGroupByArgs['orderBy'] }
        : { orderBy?: TreeNodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TreeNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreeNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TreeNode model
   */
  readonly fields: TreeNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TreeNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreeNodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends TreeNode$parentArgs<ExtArgs> = {}>(args?: Subset<T, TreeNode$parentArgs<ExtArgs>>): Prisma__TreeNodeClient<$Result.GetResult<Prisma.$TreeNodePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    children<T extends TreeNode$childrenArgs<ExtArgs> = {}>(args?: Subset<T, TreeNode$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreeNodePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TreeNode model
   */ 
  interface TreeNodeFieldRefs {
    readonly id: FieldRef<"TreeNode", 'String'>
    readonly key: FieldRef<"TreeNode", 'String'>
    readonly label: FieldRef<"TreeNode", 'String'>
    readonly icon: FieldRef<"TreeNode", 'String'>
    readonly parentId: FieldRef<"TreeNode", 'String'>
    readonly createdAt: FieldRef<"TreeNode", 'DateTime'>
    readonly updatedAt: FieldRef<"TreeNode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TreeNode findUnique
   */
  export type TreeNodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNode
     */
    select?: TreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeNode
     */
    omit?: TreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeNodeInclude<ExtArgs> | null
    /**
     * Filter, which TreeNode to fetch.
     */
    where: TreeNodeWhereUniqueInput
  }

  /**
   * TreeNode findUniqueOrThrow
   */
  export type TreeNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNode
     */
    select?: TreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeNode
     */
    omit?: TreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeNodeInclude<ExtArgs> | null
    /**
     * Filter, which TreeNode to fetch.
     */
    where: TreeNodeWhereUniqueInput
  }

  /**
   * TreeNode findFirst
   */
  export type TreeNodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNode
     */
    select?: TreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeNode
     */
    omit?: TreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeNodeInclude<ExtArgs> | null
    /**
     * Filter, which TreeNode to fetch.
     */
    where?: TreeNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeNodes to fetch.
     */
    orderBy?: TreeNodeOrderByWithRelationInput | TreeNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreeNodes.
     */
    cursor?: TreeNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreeNodes.
     */
    distinct?: TreeNodeScalarFieldEnum | TreeNodeScalarFieldEnum[]
  }

  /**
   * TreeNode findFirstOrThrow
   */
  export type TreeNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNode
     */
    select?: TreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeNode
     */
    omit?: TreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeNodeInclude<ExtArgs> | null
    /**
     * Filter, which TreeNode to fetch.
     */
    where?: TreeNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeNodes to fetch.
     */
    orderBy?: TreeNodeOrderByWithRelationInput | TreeNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TreeNodes.
     */
    cursor?: TreeNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TreeNodes.
     */
    distinct?: TreeNodeScalarFieldEnum | TreeNodeScalarFieldEnum[]
  }

  /**
   * TreeNode findMany
   */
  export type TreeNodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNode
     */
    select?: TreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeNode
     */
    omit?: TreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeNodeInclude<ExtArgs> | null
    /**
     * Filter, which TreeNodes to fetch.
     */
    where?: TreeNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TreeNodes to fetch.
     */
    orderBy?: TreeNodeOrderByWithRelationInput | TreeNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TreeNodes.
     */
    cursor?: TreeNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TreeNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TreeNodes.
     */
    skip?: number
    distinct?: TreeNodeScalarFieldEnum | TreeNodeScalarFieldEnum[]
  }

  /**
   * TreeNode create
   */
  export type TreeNodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNode
     */
    select?: TreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeNode
     */
    omit?: TreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeNodeInclude<ExtArgs> | null
    /**
     * The data needed to create a TreeNode.
     */
    data: XOR<TreeNodeCreateInput, TreeNodeUncheckedCreateInput>
  }

  /**
   * TreeNode createMany
   */
  export type TreeNodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TreeNodes.
     */
    data: TreeNodeCreateManyInput | TreeNodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TreeNode createManyAndReturn
   */
  export type TreeNodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNode
     */
    select?: TreeNodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreeNode
     */
    omit?: TreeNodeOmit<ExtArgs> | null
    /**
     * The data used to create many TreeNodes.
     */
    data: TreeNodeCreateManyInput | TreeNodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeNodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TreeNode update
   */
  export type TreeNodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNode
     */
    select?: TreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeNode
     */
    omit?: TreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeNodeInclude<ExtArgs> | null
    /**
     * The data needed to update a TreeNode.
     */
    data: XOR<TreeNodeUpdateInput, TreeNodeUncheckedUpdateInput>
    /**
     * Choose, which TreeNode to update.
     */
    where: TreeNodeWhereUniqueInput
  }

  /**
   * TreeNode updateMany
   */
  export type TreeNodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TreeNodes.
     */
    data: XOR<TreeNodeUpdateManyMutationInput, TreeNodeUncheckedUpdateManyInput>
    /**
     * Filter which TreeNodes to update
     */
    where?: TreeNodeWhereInput
    /**
     * Limit how many TreeNodes to update.
     */
    limit?: number
  }

  /**
   * TreeNode updateManyAndReturn
   */
  export type TreeNodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNode
     */
    select?: TreeNodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TreeNode
     */
    omit?: TreeNodeOmit<ExtArgs> | null
    /**
     * The data used to update TreeNodes.
     */
    data: XOR<TreeNodeUpdateManyMutationInput, TreeNodeUncheckedUpdateManyInput>
    /**
     * Filter which TreeNodes to update
     */
    where?: TreeNodeWhereInput
    /**
     * Limit how many TreeNodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeNodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TreeNode upsert
   */
  export type TreeNodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNode
     */
    select?: TreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeNode
     */
    omit?: TreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeNodeInclude<ExtArgs> | null
    /**
     * The filter to search for the TreeNode to update in case it exists.
     */
    where: TreeNodeWhereUniqueInput
    /**
     * In case the TreeNode found by the `where` argument doesn't exist, create a new TreeNode with this data.
     */
    create: XOR<TreeNodeCreateInput, TreeNodeUncheckedCreateInput>
    /**
     * In case the TreeNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreeNodeUpdateInput, TreeNodeUncheckedUpdateInput>
  }

  /**
   * TreeNode delete
   */
  export type TreeNodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNode
     */
    select?: TreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeNode
     */
    omit?: TreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeNodeInclude<ExtArgs> | null
    /**
     * Filter which TreeNode to delete.
     */
    where: TreeNodeWhereUniqueInput
  }

  /**
   * TreeNode deleteMany
   */
  export type TreeNodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TreeNodes to delete
     */
    where?: TreeNodeWhereInput
    /**
     * Limit how many TreeNodes to delete.
     */
    limit?: number
  }

  /**
   * TreeNode.parent
   */
  export type TreeNode$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNode
     */
    select?: TreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeNode
     */
    omit?: TreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeNodeInclude<ExtArgs> | null
    where?: TreeNodeWhereInput
  }

  /**
   * TreeNode.children
   */
  export type TreeNode$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNode
     */
    select?: TreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeNode
     */
    omit?: TreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeNodeInclude<ExtArgs> | null
    where?: TreeNodeWhereInput
    orderBy?: TreeNodeOrderByWithRelationInput | TreeNodeOrderByWithRelationInput[]
    cursor?: TreeNodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreeNodeScalarFieldEnum | TreeNodeScalarFieldEnum[]
  }

  /**
   * TreeNode without action
   */
  export type TreeNodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TreeNode
     */
    select?: TreeNodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TreeNode
     */
    omit?: TreeNodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreeNodeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TreeNodeScalarFieldEnum: {
    id: 'id',
    key: 'key',
    label: 'label',
    icon: 'icon',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TreeNodeScalarFieldEnum = (typeof TreeNodeScalarFieldEnum)[keyof typeof TreeNodeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type TreeNodeWhereInput = {
    AND?: TreeNodeWhereInput | TreeNodeWhereInput[]
    OR?: TreeNodeWhereInput[]
    NOT?: TreeNodeWhereInput | TreeNodeWhereInput[]
    id?: StringFilter<"TreeNode"> | string
    key?: StringFilter<"TreeNode"> | string
    label?: StringFilter<"TreeNode"> | string
    icon?: StringNullableFilter<"TreeNode"> | string | null
    parentId?: StringNullableFilter<"TreeNode"> | string | null
    createdAt?: DateTimeFilter<"TreeNode"> | Date | string
    updatedAt?: DateTimeFilter<"TreeNode"> | Date | string
    parent?: XOR<TreeNodeNullableScalarRelationFilter, TreeNodeWhereInput> | null
    children?: TreeNodeListRelationFilter
  }

  export type TreeNodeOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    icon?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    parent?: TreeNodeOrderByWithRelationInput
    children?: TreeNodeOrderByRelationAggregateInput
  }

  export type TreeNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: TreeNodeWhereInput | TreeNodeWhereInput[]
    OR?: TreeNodeWhereInput[]
    NOT?: TreeNodeWhereInput | TreeNodeWhereInput[]
    label?: StringFilter<"TreeNode"> | string
    icon?: StringNullableFilter<"TreeNode"> | string | null
    parentId?: StringNullableFilter<"TreeNode"> | string | null
    createdAt?: DateTimeFilter<"TreeNode"> | Date | string
    updatedAt?: DateTimeFilter<"TreeNode"> | Date | string
    parent?: XOR<TreeNodeNullableScalarRelationFilter, TreeNodeWhereInput> | null
    children?: TreeNodeListRelationFilter
  }, "id" | "key">

  export type TreeNodeOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    icon?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TreeNodeCountOrderByAggregateInput
    _max?: TreeNodeMaxOrderByAggregateInput
    _min?: TreeNodeMinOrderByAggregateInput
  }

  export type TreeNodeScalarWhereWithAggregatesInput = {
    AND?: TreeNodeScalarWhereWithAggregatesInput | TreeNodeScalarWhereWithAggregatesInput[]
    OR?: TreeNodeScalarWhereWithAggregatesInput[]
    NOT?: TreeNodeScalarWhereWithAggregatesInput | TreeNodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TreeNode"> | string
    key?: StringWithAggregatesFilter<"TreeNode"> | string
    label?: StringWithAggregatesFilter<"TreeNode"> | string
    icon?: StringNullableWithAggregatesFilter<"TreeNode"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"TreeNode"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TreeNode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TreeNode"> | Date | string
  }

  export type TreeNodeCreateInput = {
    id?: string
    key: string
    label: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: TreeNodeCreateNestedOneWithoutChildrenInput
    children?: TreeNodeCreateNestedManyWithoutParentInput
  }

  export type TreeNodeUncheckedCreateInput = {
    id?: string
    key: string
    label: string
    icon?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TreeNodeUncheckedCreateNestedManyWithoutParentInput
  }

  export type TreeNodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: TreeNodeUpdateOneWithoutChildrenNestedInput
    children?: TreeNodeUpdateManyWithoutParentNestedInput
  }

  export type TreeNodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TreeNodeUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TreeNodeCreateManyInput = {
    id?: string
    key: string
    label: string
    icon?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreeNodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreeNodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TreeNodeNullableScalarRelationFilter = {
    is?: TreeNodeWhereInput | null
    isNot?: TreeNodeWhereInput | null
  }

  export type TreeNodeListRelationFilter = {
    every?: TreeNodeWhereInput
    some?: TreeNodeWhereInput
    none?: TreeNodeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TreeNodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreeNodeCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    icon?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreeNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    icon?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TreeNodeMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    label?: SortOrder
    icon?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TreeNodeCreateNestedOneWithoutChildrenInput = {
    create?: XOR<TreeNodeCreateWithoutChildrenInput, TreeNodeUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TreeNodeCreateOrConnectWithoutChildrenInput
    connect?: TreeNodeWhereUniqueInput
  }

  export type TreeNodeCreateNestedManyWithoutParentInput = {
    create?: XOR<TreeNodeCreateWithoutParentInput, TreeNodeUncheckedCreateWithoutParentInput> | TreeNodeCreateWithoutParentInput[] | TreeNodeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TreeNodeCreateOrConnectWithoutParentInput | TreeNodeCreateOrConnectWithoutParentInput[]
    createMany?: TreeNodeCreateManyParentInputEnvelope
    connect?: TreeNodeWhereUniqueInput | TreeNodeWhereUniqueInput[]
  }

  export type TreeNodeUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<TreeNodeCreateWithoutParentInput, TreeNodeUncheckedCreateWithoutParentInput> | TreeNodeCreateWithoutParentInput[] | TreeNodeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TreeNodeCreateOrConnectWithoutParentInput | TreeNodeCreateOrConnectWithoutParentInput[]
    createMany?: TreeNodeCreateManyParentInputEnvelope
    connect?: TreeNodeWhereUniqueInput | TreeNodeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TreeNodeUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<TreeNodeCreateWithoutChildrenInput, TreeNodeUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: TreeNodeCreateOrConnectWithoutChildrenInput
    upsert?: TreeNodeUpsertWithoutChildrenInput
    disconnect?: TreeNodeWhereInput | boolean
    delete?: TreeNodeWhereInput | boolean
    connect?: TreeNodeWhereUniqueInput
    update?: XOR<XOR<TreeNodeUpdateToOneWithWhereWithoutChildrenInput, TreeNodeUpdateWithoutChildrenInput>, TreeNodeUncheckedUpdateWithoutChildrenInput>
  }

  export type TreeNodeUpdateManyWithoutParentNestedInput = {
    create?: XOR<TreeNodeCreateWithoutParentInput, TreeNodeUncheckedCreateWithoutParentInput> | TreeNodeCreateWithoutParentInput[] | TreeNodeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TreeNodeCreateOrConnectWithoutParentInput | TreeNodeCreateOrConnectWithoutParentInput[]
    upsert?: TreeNodeUpsertWithWhereUniqueWithoutParentInput | TreeNodeUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TreeNodeCreateManyParentInputEnvelope
    set?: TreeNodeWhereUniqueInput | TreeNodeWhereUniqueInput[]
    disconnect?: TreeNodeWhereUniqueInput | TreeNodeWhereUniqueInput[]
    delete?: TreeNodeWhereUniqueInput | TreeNodeWhereUniqueInput[]
    connect?: TreeNodeWhereUniqueInput | TreeNodeWhereUniqueInput[]
    update?: TreeNodeUpdateWithWhereUniqueWithoutParentInput | TreeNodeUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TreeNodeUpdateManyWithWhereWithoutParentInput | TreeNodeUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TreeNodeScalarWhereInput | TreeNodeScalarWhereInput[]
  }

  export type TreeNodeUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<TreeNodeCreateWithoutParentInput, TreeNodeUncheckedCreateWithoutParentInput> | TreeNodeCreateWithoutParentInput[] | TreeNodeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TreeNodeCreateOrConnectWithoutParentInput | TreeNodeCreateOrConnectWithoutParentInput[]
    upsert?: TreeNodeUpsertWithWhereUniqueWithoutParentInput | TreeNodeUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TreeNodeCreateManyParentInputEnvelope
    set?: TreeNodeWhereUniqueInput | TreeNodeWhereUniqueInput[]
    disconnect?: TreeNodeWhereUniqueInput | TreeNodeWhereUniqueInput[]
    delete?: TreeNodeWhereUniqueInput | TreeNodeWhereUniqueInput[]
    connect?: TreeNodeWhereUniqueInput | TreeNodeWhereUniqueInput[]
    update?: TreeNodeUpdateWithWhereUniqueWithoutParentInput | TreeNodeUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TreeNodeUpdateManyWithWhereWithoutParentInput | TreeNodeUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TreeNodeScalarWhereInput | TreeNodeScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TreeNodeCreateWithoutChildrenInput = {
    id?: string
    key: string
    label: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: TreeNodeCreateNestedOneWithoutChildrenInput
  }

  export type TreeNodeUncheckedCreateWithoutChildrenInput = {
    id?: string
    key: string
    label: string
    icon?: string | null
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreeNodeCreateOrConnectWithoutChildrenInput = {
    where: TreeNodeWhereUniqueInput
    create: XOR<TreeNodeCreateWithoutChildrenInput, TreeNodeUncheckedCreateWithoutChildrenInput>
  }

  export type TreeNodeCreateWithoutParentInput = {
    id?: string
    key: string
    label: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TreeNodeCreateNestedManyWithoutParentInput
  }

  export type TreeNodeUncheckedCreateWithoutParentInput = {
    id?: string
    key: string
    label: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: TreeNodeUncheckedCreateNestedManyWithoutParentInput
  }

  export type TreeNodeCreateOrConnectWithoutParentInput = {
    where: TreeNodeWhereUniqueInput
    create: XOR<TreeNodeCreateWithoutParentInput, TreeNodeUncheckedCreateWithoutParentInput>
  }

  export type TreeNodeCreateManyParentInputEnvelope = {
    data: TreeNodeCreateManyParentInput | TreeNodeCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type TreeNodeUpsertWithoutChildrenInput = {
    update: XOR<TreeNodeUpdateWithoutChildrenInput, TreeNodeUncheckedUpdateWithoutChildrenInput>
    create: XOR<TreeNodeCreateWithoutChildrenInput, TreeNodeUncheckedCreateWithoutChildrenInput>
    where?: TreeNodeWhereInput
  }

  export type TreeNodeUpdateToOneWithWhereWithoutChildrenInput = {
    where?: TreeNodeWhereInput
    data: XOR<TreeNodeUpdateWithoutChildrenInput, TreeNodeUncheckedUpdateWithoutChildrenInput>
  }

  export type TreeNodeUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: TreeNodeUpdateOneWithoutChildrenNestedInput
  }

  export type TreeNodeUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreeNodeUpsertWithWhereUniqueWithoutParentInput = {
    where: TreeNodeWhereUniqueInput
    update: XOR<TreeNodeUpdateWithoutParentInput, TreeNodeUncheckedUpdateWithoutParentInput>
    create: XOR<TreeNodeCreateWithoutParentInput, TreeNodeUncheckedCreateWithoutParentInput>
  }

  export type TreeNodeUpdateWithWhereUniqueWithoutParentInput = {
    where: TreeNodeWhereUniqueInput
    data: XOR<TreeNodeUpdateWithoutParentInput, TreeNodeUncheckedUpdateWithoutParentInput>
  }

  export type TreeNodeUpdateManyWithWhereWithoutParentInput = {
    where: TreeNodeScalarWhereInput
    data: XOR<TreeNodeUpdateManyMutationInput, TreeNodeUncheckedUpdateManyWithoutParentInput>
  }

  export type TreeNodeScalarWhereInput = {
    AND?: TreeNodeScalarWhereInput | TreeNodeScalarWhereInput[]
    OR?: TreeNodeScalarWhereInput[]
    NOT?: TreeNodeScalarWhereInput | TreeNodeScalarWhereInput[]
    id?: StringFilter<"TreeNode"> | string
    key?: StringFilter<"TreeNode"> | string
    label?: StringFilter<"TreeNode"> | string
    icon?: StringNullableFilter<"TreeNode"> | string | null
    parentId?: StringNullableFilter<"TreeNode"> | string | null
    createdAt?: DateTimeFilter<"TreeNode"> | Date | string
    updatedAt?: DateTimeFilter<"TreeNode"> | Date | string
  }

  export type TreeNodeCreateManyParentInput = {
    id?: string
    key: string
    label: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreeNodeUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TreeNodeUpdateManyWithoutParentNestedInput
  }

  export type TreeNodeUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: TreeNodeUncheckedUpdateManyWithoutParentNestedInput
  }

  export type TreeNodeUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}