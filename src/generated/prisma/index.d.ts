
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Tarea
 * 
 */
export type Tarea = $Result.DefaultSelection<Prisma.$TareaPayload>
/**
 * Model SubTarea
 * 
 */
export type SubTarea = $Result.DefaultSelection<Prisma.$SubTareaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  DONE: 'DONE'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tarea`: Exposes CRUD operations for the **Tarea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tareas
    * const tareas = await prisma.tarea.findMany()
    * ```
    */
  get tarea(): Prisma.TareaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subTarea`: Exposes CRUD operations for the **SubTarea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubTareas
    * const subTareas = await prisma.subTarea.findMany()
    * ```
    */
  get subTarea(): Prisma.SubTareaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Usuario: 'Usuario',
    Categoria: 'Categoria',
    Tarea: 'Tarea',
    SubTarea: 'SubTarea'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "categoria" | "tarea" | "subTarea"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Tarea: {
        payload: Prisma.$TareaPayload<ExtArgs>
        fields: Prisma.TareaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TareaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TareaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          findFirst: {
            args: Prisma.TareaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TareaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          findMany: {
            args: Prisma.TareaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>[]
          }
          create: {
            args: Prisma.TareaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          createMany: {
            args: Prisma.TareaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TareaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>[]
          }
          delete: {
            args: Prisma.TareaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          update: {
            args: Prisma.TareaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          deleteMany: {
            args: Prisma.TareaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TareaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TareaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>[]
          }
          upsert: {
            args: Prisma.TareaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TareaPayload>
          }
          aggregate: {
            args: Prisma.TareaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTarea>
          }
          groupBy: {
            args: Prisma.TareaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TareaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TareaCountArgs<ExtArgs>
            result: $Utils.Optional<TareaCountAggregateOutputType> | number
          }
        }
      }
      SubTarea: {
        payload: Prisma.$SubTareaPayload<ExtArgs>
        fields: Prisma.SubTareaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubTareaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTareaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubTareaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTareaPayload>
          }
          findFirst: {
            args: Prisma.SubTareaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTareaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubTareaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTareaPayload>
          }
          findMany: {
            args: Prisma.SubTareaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTareaPayload>[]
          }
          create: {
            args: Prisma.SubTareaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTareaPayload>
          }
          createMany: {
            args: Prisma.SubTareaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubTareaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTareaPayload>[]
          }
          delete: {
            args: Prisma.SubTareaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTareaPayload>
          }
          update: {
            args: Prisma.SubTareaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTareaPayload>
          }
          deleteMany: {
            args: Prisma.SubTareaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubTareaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubTareaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTareaPayload>[]
          }
          upsert: {
            args: Prisma.SubTareaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubTareaPayload>
          }
          aggregate: {
            args: Prisma.SubTareaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubTarea>
          }
          groupBy: {
            args: Prisma.SubTareaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubTareaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubTareaCountArgs<ExtArgs>
            result: $Utils.Optional<SubTareaCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    categoria?: CategoriaOmit
    tarea?: TareaOmit
    subTarea?: SubTareaOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    tareas: number
    categorias: number
    subtareas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tareas?: boolean | UsuarioCountOutputTypeCountTareasArgs
    categorias?: boolean | UsuarioCountOutputTypeCountCategoriasArgs
    subtareas?: boolean | UsuarioCountOutputTypeCountSubtareasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TareaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountCategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSubtareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubTareaWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    tareas: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tareas?: boolean | CategoriaCountOutputTypeCountTareasArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountTareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TareaWhereInput
  }


  /**
   * Count Type TareaCountOutputType
   */

  export type TareaCountOutputType = {
    subtareas: number
  }

  export type TareaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtareas?: boolean | TareaCountOutputTypeCountSubtareasArgs
  }

  // Custom InputTypes
  /**
   * TareaCountOutputType without action
   */
  export type TareaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TareaCountOutputType
     */
    select?: TareaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TareaCountOutputType without action
   */
  export type TareaCountOutputTypeCountSubtareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubTareaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    timeBeforeNotification: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    timeBeforeNotification: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    sendNotifications: boolean | null
    timeBeforeNotification: number | null
    emailValidated: boolean | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    sendNotifications: boolean | null
    timeBeforeNotification: number | null
    emailValidated: boolean | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    sendNotifications: number
    timeBeforeNotification: number
    emailValidated: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    timeBeforeNotification?: true
  }

  export type UsuarioSumAggregateInputType = {
    timeBeforeNotification?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    sendNotifications?: true
    timeBeforeNotification?: true
    emailValidated?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    sendNotifications?: true
    timeBeforeNotification?: true
    emailValidated?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    sendNotifications?: true
    timeBeforeNotification?: true
    emailValidated?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    createdAt: Date
    sendNotifications: boolean
    timeBeforeNotification: number | null
    emailValidated: boolean
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    sendNotifications?: boolean
    timeBeforeNotification?: boolean
    emailValidated?: boolean
    tareas?: boolean | Usuario$tareasArgs<ExtArgs>
    categorias?: boolean | Usuario$categoriasArgs<ExtArgs>
    subtareas?: boolean | Usuario$subtareasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    sendNotifications?: boolean
    timeBeforeNotification?: boolean
    emailValidated?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    sendNotifications?: boolean
    timeBeforeNotification?: boolean
    emailValidated?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    sendNotifications?: boolean
    timeBeforeNotification?: boolean
    emailValidated?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt" | "sendNotifications" | "timeBeforeNotification" | "emailValidated", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tareas?: boolean | Usuario$tareasArgs<ExtArgs>
    categorias?: boolean | Usuario$categoriasArgs<ExtArgs>
    subtareas?: boolean | Usuario$subtareasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      tareas: Prisma.$TareaPayload<ExtArgs>[]
      categorias: Prisma.$CategoriaPayload<ExtArgs>[]
      subtareas: Prisma.$SubTareaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      createdAt: Date
      sendNotifications: boolean
      timeBeforeNotification: number | null
      emailValidated: boolean
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tareas<T extends Usuario$tareasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$tareasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categorias<T extends Usuario$categoriasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$categoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subtareas<T extends Usuario$subtareasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$subtareasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubTareaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'String'>
    readonly username: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly sendNotifications: FieldRef<"Usuario", 'Boolean'>
    readonly timeBeforeNotification: FieldRef<"Usuario", 'Int'>
    readonly emailValidated: FieldRef<"Usuario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.tareas
   */
  export type Usuario$tareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    where?: TareaWhereInput
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    cursor?: TareaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * Usuario.categorias
   */
  export type Usuario$categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    cursor?: CategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Usuario.subtareas
   */
  export type Usuario$subtareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTarea
     */
    select?: SubTareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTarea
     */
    omit?: SubTareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTareaInclude<ExtArgs> | null
    where?: SubTareaWhereInput
    orderBy?: SubTareaOrderByWithRelationInput | SubTareaOrderByWithRelationInput[]
    cursor?: SubTareaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubTareaScalarFieldEnum | SubTareaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: string | null
    name: string | null
    usuarioId: string | null
    active: boolean | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    usuarioId: string | null
    active: boolean | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    name: number
    usuarioId: number
    active: number
    _all: number
  }


  export type CategoriaMinAggregateInputType = {
    id?: true
    name?: true
    usuarioId?: true
    active?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    name?: true
    usuarioId?: true
    active?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    name?: true
    usuarioId?: true
    active?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: string
    name: string
    usuarioId: string
    active: boolean
    _count: CategoriaCountAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    usuarioId?: boolean
    active?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tareas?: boolean | Categoria$tareasArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    usuarioId?: boolean
    active?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    usuarioId?: boolean
    active?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    name?: boolean
    usuarioId?: boolean
    active?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "usuarioId" | "active", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tareas?: boolean | Categoria$tareasArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      tareas: Prisma.$TareaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      usuarioId: string
      active: boolean
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
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
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tareas<T extends Categoria$tareasArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$tareasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'String'>
    readonly name: FieldRef<"Categoria", 'String'>
    readonly usuarioId: FieldRef<"Categoria", 'String'>
    readonly active: FieldRef<"Categoria", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.tareas
   */
  export type Categoria$tareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    where?: TareaWhereInput
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    cursor?: TareaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Tarea
   */

  export type AggregateTarea = {
    _count: TareaCountAggregateOutputType | null
    _avg: TareaAvgAggregateOutputType | null
    _sum: TareaSumAggregateOutputType | null
    _min: TareaMinAggregateOutputType | null
    _max: TareaMaxAggregateOutputType | null
  }

  export type TareaAvgAggregateOutputType = {
    progress: number | null
  }

  export type TareaSumAggregateOutputType = {
    progress: number | null
  }

  export type TareaMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    active: boolean | null
    status: $Enums.Status | null
    createdAt: Date | null
    lastStatusChanged: Date | null
    progress: number | null
    usuarioId: string | null
    categoriaId: string | null
  }

  export type TareaMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    active: boolean | null
    status: $Enums.Status | null
    createdAt: Date | null
    lastStatusChanged: Date | null
    progress: number | null
    usuarioId: string | null
    categoriaId: string | null
  }

  export type TareaCountAggregateOutputType = {
    id: number
    title: number
    description: number
    active: number
    status: number
    createdAt: number
    lastStatusChanged: number
    progress: number
    usuarioId: number
    categoriaId: number
    _all: number
  }


  export type TareaAvgAggregateInputType = {
    progress?: true
  }

  export type TareaSumAggregateInputType = {
    progress?: true
  }

  export type TareaMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    active?: true
    status?: true
    createdAt?: true
    lastStatusChanged?: true
    progress?: true
    usuarioId?: true
    categoriaId?: true
  }

  export type TareaMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    active?: true
    status?: true
    createdAt?: true
    lastStatusChanged?: true
    progress?: true
    usuarioId?: true
    categoriaId?: true
  }

  export type TareaCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    active?: true
    status?: true
    createdAt?: true
    lastStatusChanged?: true
    progress?: true
    usuarioId?: true
    categoriaId?: true
    _all?: true
  }

  export type TareaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tarea to aggregate.
     */
    where?: TareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tareas to fetch.
     */
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tareas
    **/
    _count?: true | TareaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TareaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TareaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TareaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TareaMaxAggregateInputType
  }

  export type GetTareaAggregateType<T extends TareaAggregateArgs> = {
        [P in keyof T & keyof AggregateTarea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTarea[P]>
      : GetScalarType<T[P], AggregateTarea[P]>
  }




  export type TareaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TareaWhereInput
    orderBy?: TareaOrderByWithAggregationInput | TareaOrderByWithAggregationInput[]
    by: TareaScalarFieldEnum[] | TareaScalarFieldEnum
    having?: TareaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TareaCountAggregateInputType | true
    _avg?: TareaAvgAggregateInputType
    _sum?: TareaSumAggregateInputType
    _min?: TareaMinAggregateInputType
    _max?: TareaMaxAggregateInputType
  }

  export type TareaGroupByOutputType = {
    id: string
    title: string
    description: string | null
    active: boolean
    status: $Enums.Status
    createdAt: Date
    lastStatusChanged: Date
    progress: number
    usuarioId: string
    categoriaId: string
    _count: TareaCountAggregateOutputType | null
    _avg: TareaAvgAggregateOutputType | null
    _sum: TareaSumAggregateOutputType | null
    _min: TareaMinAggregateOutputType | null
    _max: TareaMaxAggregateOutputType | null
  }

  type GetTareaGroupByPayload<T extends TareaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TareaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TareaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TareaGroupByOutputType[P]>
            : GetScalarType<T[P], TareaGroupByOutputType[P]>
        }
      >
    >


  export type TareaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    active?: boolean
    status?: boolean
    createdAt?: boolean
    lastStatusChanged?: boolean
    progress?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
    subtareas?: boolean | Tarea$subtareasArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    _count?: boolean | TareaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarea"]>

  export type TareaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    active?: boolean
    status?: boolean
    createdAt?: boolean
    lastStatusChanged?: boolean
    progress?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarea"]>

  export type TareaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    active?: boolean
    status?: boolean
    createdAt?: boolean
    lastStatusChanged?: boolean
    progress?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tarea"]>

  export type TareaSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    active?: boolean
    status?: boolean
    createdAt?: boolean
    lastStatusChanged?: boolean
    progress?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
  }

  export type TareaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "active" | "status" | "createdAt" | "lastStatusChanged" | "progress" | "usuarioId" | "categoriaId", ExtArgs["result"]["tarea"]>
  export type TareaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtareas?: boolean | Tarea$subtareasArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    _count?: boolean | TareaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TareaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type TareaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $TareaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tarea"
    objects: {
      subtareas: Prisma.$SubTareaPayload<ExtArgs>[]
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      categoria: Prisma.$CategoriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      active: boolean
      status: $Enums.Status
      createdAt: Date
      lastStatusChanged: Date
      progress: number
      usuarioId: string
      categoriaId: string
    }, ExtArgs["result"]["tarea"]>
    composites: {}
  }

  type TareaGetPayload<S extends boolean | null | undefined | TareaDefaultArgs> = $Result.GetResult<Prisma.$TareaPayload, S>

  type TareaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TareaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TareaCountAggregateInputType | true
    }

  export interface TareaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tarea'], meta: { name: 'Tarea' } }
    /**
     * Find zero or one Tarea that matches the filter.
     * @param {TareaFindUniqueArgs} args - Arguments to find a Tarea
     * @example
     * // Get one Tarea
     * const tarea = await prisma.tarea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TareaFindUniqueArgs>(args: SelectSubset<T, TareaFindUniqueArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tarea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TareaFindUniqueOrThrowArgs} args - Arguments to find a Tarea
     * @example
     * // Get one Tarea
     * const tarea = await prisma.tarea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TareaFindUniqueOrThrowArgs>(args: SelectSubset<T, TareaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaFindFirstArgs} args - Arguments to find a Tarea
     * @example
     * // Get one Tarea
     * const tarea = await prisma.tarea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TareaFindFirstArgs>(args?: SelectSubset<T, TareaFindFirstArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tarea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaFindFirstOrThrowArgs} args - Arguments to find a Tarea
     * @example
     * // Get one Tarea
     * const tarea = await prisma.tarea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TareaFindFirstOrThrowArgs>(args?: SelectSubset<T, TareaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tareas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tareas
     * const tareas = await prisma.tarea.findMany()
     * 
     * // Get first 10 Tareas
     * const tareas = await prisma.tarea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tareaWithIdOnly = await prisma.tarea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TareaFindManyArgs>(args?: SelectSubset<T, TareaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tarea.
     * @param {TareaCreateArgs} args - Arguments to create a Tarea.
     * @example
     * // Create one Tarea
     * const Tarea = await prisma.tarea.create({
     *   data: {
     *     // ... data to create a Tarea
     *   }
     * })
     * 
     */
    create<T extends TareaCreateArgs>(args: SelectSubset<T, TareaCreateArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tareas.
     * @param {TareaCreateManyArgs} args - Arguments to create many Tareas.
     * @example
     * // Create many Tareas
     * const tarea = await prisma.tarea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TareaCreateManyArgs>(args?: SelectSubset<T, TareaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tareas and returns the data saved in the database.
     * @param {TareaCreateManyAndReturnArgs} args - Arguments to create many Tareas.
     * @example
     * // Create many Tareas
     * const tarea = await prisma.tarea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tareas and only return the `id`
     * const tareaWithIdOnly = await prisma.tarea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TareaCreateManyAndReturnArgs>(args?: SelectSubset<T, TareaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tarea.
     * @param {TareaDeleteArgs} args - Arguments to delete one Tarea.
     * @example
     * // Delete one Tarea
     * const Tarea = await prisma.tarea.delete({
     *   where: {
     *     // ... filter to delete one Tarea
     *   }
     * })
     * 
     */
    delete<T extends TareaDeleteArgs>(args: SelectSubset<T, TareaDeleteArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tarea.
     * @param {TareaUpdateArgs} args - Arguments to update one Tarea.
     * @example
     * // Update one Tarea
     * const tarea = await prisma.tarea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TareaUpdateArgs>(args: SelectSubset<T, TareaUpdateArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tareas.
     * @param {TareaDeleteManyArgs} args - Arguments to filter Tareas to delete.
     * @example
     * // Delete a few Tareas
     * const { count } = await prisma.tarea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TareaDeleteManyArgs>(args?: SelectSubset<T, TareaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tareas
     * const tarea = await prisma.tarea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TareaUpdateManyArgs>(args: SelectSubset<T, TareaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tareas and returns the data updated in the database.
     * @param {TareaUpdateManyAndReturnArgs} args - Arguments to update many Tareas.
     * @example
     * // Update many Tareas
     * const tarea = await prisma.tarea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tareas and only return the `id`
     * const tareaWithIdOnly = await prisma.tarea.updateManyAndReturn({
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
    updateManyAndReturn<T extends TareaUpdateManyAndReturnArgs>(args: SelectSubset<T, TareaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tarea.
     * @param {TareaUpsertArgs} args - Arguments to update or create a Tarea.
     * @example
     * // Update or create a Tarea
     * const tarea = await prisma.tarea.upsert({
     *   create: {
     *     // ... data to create a Tarea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tarea we want to update
     *   }
     * })
     */
    upsert<T extends TareaUpsertArgs>(args: SelectSubset<T, TareaUpsertArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaCountArgs} args - Arguments to filter Tareas to count.
     * @example
     * // Count the number of Tareas
     * const count = await prisma.tarea.count({
     *   where: {
     *     // ... the filter for the Tareas we want to count
     *   }
     * })
    **/
    count<T extends TareaCountArgs>(
      args?: Subset<T, TareaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TareaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tarea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TareaAggregateArgs>(args: Subset<T, TareaAggregateArgs>): Prisma.PrismaPromise<GetTareaAggregateType<T>>

    /**
     * Group by Tarea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TareaGroupByArgs} args - Group by arguments.
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
      T extends TareaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TareaGroupByArgs['orderBy'] }
        : { orderBy?: TareaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TareaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTareaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tarea model
   */
  readonly fields: TareaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tarea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TareaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subtareas<T extends Tarea$subtareasArgs<ExtArgs> = {}>(args?: Subset<T, Tarea$subtareasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubTareaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tarea model
   */
  interface TareaFieldRefs {
    readonly id: FieldRef<"Tarea", 'String'>
    readonly title: FieldRef<"Tarea", 'String'>
    readonly description: FieldRef<"Tarea", 'String'>
    readonly active: FieldRef<"Tarea", 'Boolean'>
    readonly status: FieldRef<"Tarea", 'Status'>
    readonly createdAt: FieldRef<"Tarea", 'DateTime'>
    readonly lastStatusChanged: FieldRef<"Tarea", 'DateTime'>
    readonly progress: FieldRef<"Tarea", 'Int'>
    readonly usuarioId: FieldRef<"Tarea", 'String'>
    readonly categoriaId: FieldRef<"Tarea", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tarea findUnique
   */
  export type TareaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tarea to fetch.
     */
    where: TareaWhereUniqueInput
  }

  /**
   * Tarea findUniqueOrThrow
   */
  export type TareaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tarea to fetch.
     */
    where: TareaWhereUniqueInput
  }

  /**
   * Tarea findFirst
   */
  export type TareaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tarea to fetch.
     */
    where?: TareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tareas to fetch.
     */
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tareas.
     */
    cursor?: TareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tareas.
     */
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * Tarea findFirstOrThrow
   */
  export type TareaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tarea to fetch.
     */
    where?: TareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tareas to fetch.
     */
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tareas.
     */
    cursor?: TareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tareas.
     */
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * Tarea findMany
   */
  export type TareaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter, which Tareas to fetch.
     */
    where?: TareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tareas to fetch.
     */
    orderBy?: TareaOrderByWithRelationInput | TareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tareas.
     */
    cursor?: TareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tareas.
     */
    skip?: number
    distinct?: TareaScalarFieldEnum | TareaScalarFieldEnum[]
  }

  /**
   * Tarea create
   */
  export type TareaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * The data needed to create a Tarea.
     */
    data: XOR<TareaCreateInput, TareaUncheckedCreateInput>
  }

  /**
   * Tarea createMany
   */
  export type TareaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tareas.
     */
    data: TareaCreateManyInput | TareaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tarea createManyAndReturn
   */
  export type TareaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * The data used to create many Tareas.
     */
    data: TareaCreateManyInput | TareaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarea update
   */
  export type TareaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * The data needed to update a Tarea.
     */
    data: XOR<TareaUpdateInput, TareaUncheckedUpdateInput>
    /**
     * Choose, which Tarea to update.
     */
    where: TareaWhereUniqueInput
  }

  /**
   * Tarea updateMany
   */
  export type TareaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tareas.
     */
    data: XOR<TareaUpdateManyMutationInput, TareaUncheckedUpdateManyInput>
    /**
     * Filter which Tareas to update
     */
    where?: TareaWhereInput
    /**
     * Limit how many Tareas to update.
     */
    limit?: number
  }

  /**
   * Tarea updateManyAndReturn
   */
  export type TareaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * The data used to update Tareas.
     */
    data: XOR<TareaUpdateManyMutationInput, TareaUncheckedUpdateManyInput>
    /**
     * Filter which Tareas to update
     */
    where?: TareaWhereInput
    /**
     * Limit how many Tareas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tarea upsert
   */
  export type TareaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * The filter to search for the Tarea to update in case it exists.
     */
    where: TareaWhereUniqueInput
    /**
     * In case the Tarea found by the `where` argument doesn't exist, create a new Tarea with this data.
     */
    create: XOR<TareaCreateInput, TareaUncheckedCreateInput>
    /**
     * In case the Tarea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TareaUpdateInput, TareaUncheckedUpdateInput>
  }

  /**
   * Tarea delete
   */
  export type TareaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
    /**
     * Filter which Tarea to delete.
     */
    where: TareaWhereUniqueInput
  }

  /**
   * Tarea deleteMany
   */
  export type TareaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tareas to delete
     */
    where?: TareaWhereInput
    /**
     * Limit how many Tareas to delete.
     */
    limit?: number
  }

  /**
   * Tarea.subtareas
   */
  export type Tarea$subtareasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTarea
     */
    select?: SubTareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTarea
     */
    omit?: SubTareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTareaInclude<ExtArgs> | null
    where?: SubTareaWhereInput
    orderBy?: SubTareaOrderByWithRelationInput | SubTareaOrderByWithRelationInput[]
    cursor?: SubTareaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubTareaScalarFieldEnum | SubTareaScalarFieldEnum[]
  }

  /**
   * Tarea without action
   */
  export type TareaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tarea
     */
    select?: TareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tarea
     */
    omit?: TareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TareaInclude<ExtArgs> | null
  }


  /**
   * Model SubTarea
   */

  export type AggregateSubTarea = {
    _count: SubTareaCountAggregateOutputType | null
    _min: SubTareaMinAggregateOutputType | null
    _max: SubTareaMaxAggregateOutputType | null
  }

  export type SubTareaMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    active: boolean | null
    status: $Enums.Status | null
    createdAt: Date | null
    lastStatusChanged: Date | null
    usuarioId: string | null
    tareaId: string | null
  }

  export type SubTareaMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    active: boolean | null
    status: $Enums.Status | null
    createdAt: Date | null
    lastStatusChanged: Date | null
    usuarioId: string | null
    tareaId: string | null
  }

  export type SubTareaCountAggregateOutputType = {
    id: number
    title: number
    description: number
    active: number
    status: number
    createdAt: number
    lastStatusChanged: number
    usuarioId: number
    tareaId: number
    _all: number
  }


  export type SubTareaMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    active?: true
    status?: true
    createdAt?: true
    lastStatusChanged?: true
    usuarioId?: true
    tareaId?: true
  }

  export type SubTareaMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    active?: true
    status?: true
    createdAt?: true
    lastStatusChanged?: true
    usuarioId?: true
    tareaId?: true
  }

  export type SubTareaCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    active?: true
    status?: true
    createdAt?: true
    lastStatusChanged?: true
    usuarioId?: true
    tareaId?: true
    _all?: true
  }

  export type SubTareaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubTarea to aggregate.
     */
    where?: SubTareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubTareas to fetch.
     */
    orderBy?: SubTareaOrderByWithRelationInput | SubTareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubTareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubTareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubTareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubTareas
    **/
    _count?: true | SubTareaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubTareaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubTareaMaxAggregateInputType
  }

  export type GetSubTareaAggregateType<T extends SubTareaAggregateArgs> = {
        [P in keyof T & keyof AggregateSubTarea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubTarea[P]>
      : GetScalarType<T[P], AggregateSubTarea[P]>
  }




  export type SubTareaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubTareaWhereInput
    orderBy?: SubTareaOrderByWithAggregationInput | SubTareaOrderByWithAggregationInput[]
    by: SubTareaScalarFieldEnum[] | SubTareaScalarFieldEnum
    having?: SubTareaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubTareaCountAggregateInputType | true
    _min?: SubTareaMinAggregateInputType
    _max?: SubTareaMaxAggregateInputType
  }

  export type SubTareaGroupByOutputType = {
    id: string
    title: string
    description: string | null
    active: boolean
    status: $Enums.Status
    createdAt: Date
    lastStatusChanged: Date
    usuarioId: string
    tareaId: string
    _count: SubTareaCountAggregateOutputType | null
    _min: SubTareaMinAggregateOutputType | null
    _max: SubTareaMaxAggregateOutputType | null
  }

  type GetSubTareaGroupByPayload<T extends SubTareaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubTareaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubTareaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubTareaGroupByOutputType[P]>
            : GetScalarType<T[P], SubTareaGroupByOutputType[P]>
        }
      >
    >


  export type SubTareaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    active?: boolean
    status?: boolean
    createdAt?: boolean
    lastStatusChanged?: boolean
    usuarioId?: boolean
    tareaId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tarea?: boolean | TareaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subTarea"]>

  export type SubTareaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    active?: boolean
    status?: boolean
    createdAt?: boolean
    lastStatusChanged?: boolean
    usuarioId?: boolean
    tareaId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tarea?: boolean | TareaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subTarea"]>

  export type SubTareaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    active?: boolean
    status?: boolean
    createdAt?: boolean
    lastStatusChanged?: boolean
    usuarioId?: boolean
    tareaId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tarea?: boolean | TareaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subTarea"]>

  export type SubTareaSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    active?: boolean
    status?: boolean
    createdAt?: boolean
    lastStatusChanged?: boolean
    usuarioId?: boolean
    tareaId?: boolean
  }

  export type SubTareaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "active" | "status" | "createdAt" | "lastStatusChanged" | "usuarioId" | "tareaId", ExtArgs["result"]["subTarea"]>
  export type SubTareaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tarea?: boolean | TareaDefaultArgs<ExtArgs>
  }
  export type SubTareaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tarea?: boolean | TareaDefaultArgs<ExtArgs>
  }
  export type SubTareaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    tarea?: boolean | TareaDefaultArgs<ExtArgs>
  }

  export type $SubTareaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubTarea"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      tarea: Prisma.$TareaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      active: boolean
      status: $Enums.Status
      createdAt: Date
      lastStatusChanged: Date
      usuarioId: string
      tareaId: string
    }, ExtArgs["result"]["subTarea"]>
    composites: {}
  }

  type SubTareaGetPayload<S extends boolean | null | undefined | SubTareaDefaultArgs> = $Result.GetResult<Prisma.$SubTareaPayload, S>

  type SubTareaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubTareaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubTareaCountAggregateInputType | true
    }

  export interface SubTareaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubTarea'], meta: { name: 'SubTarea' } }
    /**
     * Find zero or one SubTarea that matches the filter.
     * @param {SubTareaFindUniqueArgs} args - Arguments to find a SubTarea
     * @example
     * // Get one SubTarea
     * const subTarea = await prisma.subTarea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubTareaFindUniqueArgs>(args: SelectSubset<T, SubTareaFindUniqueArgs<ExtArgs>>): Prisma__SubTareaClient<$Result.GetResult<Prisma.$SubTareaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubTarea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubTareaFindUniqueOrThrowArgs} args - Arguments to find a SubTarea
     * @example
     * // Get one SubTarea
     * const subTarea = await prisma.subTarea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubTareaFindUniqueOrThrowArgs>(args: SelectSubset<T, SubTareaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubTareaClient<$Result.GetResult<Prisma.$SubTareaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubTarea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTareaFindFirstArgs} args - Arguments to find a SubTarea
     * @example
     * // Get one SubTarea
     * const subTarea = await prisma.subTarea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubTareaFindFirstArgs>(args?: SelectSubset<T, SubTareaFindFirstArgs<ExtArgs>>): Prisma__SubTareaClient<$Result.GetResult<Prisma.$SubTareaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubTarea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTareaFindFirstOrThrowArgs} args - Arguments to find a SubTarea
     * @example
     * // Get one SubTarea
     * const subTarea = await prisma.subTarea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubTareaFindFirstOrThrowArgs>(args?: SelectSubset<T, SubTareaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubTareaClient<$Result.GetResult<Prisma.$SubTareaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubTareas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTareaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubTareas
     * const subTareas = await prisma.subTarea.findMany()
     * 
     * // Get first 10 SubTareas
     * const subTareas = await prisma.subTarea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subTareaWithIdOnly = await prisma.subTarea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubTareaFindManyArgs>(args?: SelectSubset<T, SubTareaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubTareaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubTarea.
     * @param {SubTareaCreateArgs} args - Arguments to create a SubTarea.
     * @example
     * // Create one SubTarea
     * const SubTarea = await prisma.subTarea.create({
     *   data: {
     *     // ... data to create a SubTarea
     *   }
     * })
     * 
     */
    create<T extends SubTareaCreateArgs>(args: SelectSubset<T, SubTareaCreateArgs<ExtArgs>>): Prisma__SubTareaClient<$Result.GetResult<Prisma.$SubTareaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubTareas.
     * @param {SubTareaCreateManyArgs} args - Arguments to create many SubTareas.
     * @example
     * // Create many SubTareas
     * const subTarea = await prisma.subTarea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubTareaCreateManyArgs>(args?: SelectSubset<T, SubTareaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubTareas and returns the data saved in the database.
     * @param {SubTareaCreateManyAndReturnArgs} args - Arguments to create many SubTareas.
     * @example
     * // Create many SubTareas
     * const subTarea = await prisma.subTarea.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubTareas and only return the `id`
     * const subTareaWithIdOnly = await prisma.subTarea.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubTareaCreateManyAndReturnArgs>(args?: SelectSubset<T, SubTareaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubTareaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubTarea.
     * @param {SubTareaDeleteArgs} args - Arguments to delete one SubTarea.
     * @example
     * // Delete one SubTarea
     * const SubTarea = await prisma.subTarea.delete({
     *   where: {
     *     // ... filter to delete one SubTarea
     *   }
     * })
     * 
     */
    delete<T extends SubTareaDeleteArgs>(args: SelectSubset<T, SubTareaDeleteArgs<ExtArgs>>): Prisma__SubTareaClient<$Result.GetResult<Prisma.$SubTareaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubTarea.
     * @param {SubTareaUpdateArgs} args - Arguments to update one SubTarea.
     * @example
     * // Update one SubTarea
     * const subTarea = await prisma.subTarea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubTareaUpdateArgs>(args: SelectSubset<T, SubTareaUpdateArgs<ExtArgs>>): Prisma__SubTareaClient<$Result.GetResult<Prisma.$SubTareaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubTareas.
     * @param {SubTareaDeleteManyArgs} args - Arguments to filter SubTareas to delete.
     * @example
     * // Delete a few SubTareas
     * const { count } = await prisma.subTarea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubTareaDeleteManyArgs>(args?: SelectSubset<T, SubTareaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubTareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTareaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubTareas
     * const subTarea = await prisma.subTarea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubTareaUpdateManyArgs>(args: SelectSubset<T, SubTareaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubTareas and returns the data updated in the database.
     * @param {SubTareaUpdateManyAndReturnArgs} args - Arguments to update many SubTareas.
     * @example
     * // Update many SubTareas
     * const subTarea = await prisma.subTarea.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubTareas and only return the `id`
     * const subTareaWithIdOnly = await prisma.subTarea.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubTareaUpdateManyAndReturnArgs>(args: SelectSubset<T, SubTareaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubTareaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubTarea.
     * @param {SubTareaUpsertArgs} args - Arguments to update or create a SubTarea.
     * @example
     * // Update or create a SubTarea
     * const subTarea = await prisma.subTarea.upsert({
     *   create: {
     *     // ... data to create a SubTarea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubTarea we want to update
     *   }
     * })
     */
    upsert<T extends SubTareaUpsertArgs>(args: SelectSubset<T, SubTareaUpsertArgs<ExtArgs>>): Prisma__SubTareaClient<$Result.GetResult<Prisma.$SubTareaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubTareas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTareaCountArgs} args - Arguments to filter SubTareas to count.
     * @example
     * // Count the number of SubTareas
     * const count = await prisma.subTarea.count({
     *   where: {
     *     // ... the filter for the SubTareas we want to count
     *   }
     * })
    **/
    count<T extends SubTareaCountArgs>(
      args?: Subset<T, SubTareaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubTareaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubTarea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTareaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubTareaAggregateArgs>(args: Subset<T, SubTareaAggregateArgs>): Prisma.PrismaPromise<GetSubTareaAggregateType<T>>

    /**
     * Group by SubTarea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubTareaGroupByArgs} args - Group by arguments.
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
      T extends SubTareaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubTareaGroupByArgs['orderBy'] }
        : { orderBy?: SubTareaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubTareaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubTareaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubTarea model
   */
  readonly fields: SubTareaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubTarea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubTareaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tarea<T extends TareaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TareaDefaultArgs<ExtArgs>>): Prisma__TareaClient<$Result.GetResult<Prisma.$TareaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SubTarea model
   */
  interface SubTareaFieldRefs {
    readonly id: FieldRef<"SubTarea", 'String'>
    readonly title: FieldRef<"SubTarea", 'String'>
    readonly description: FieldRef<"SubTarea", 'String'>
    readonly active: FieldRef<"SubTarea", 'Boolean'>
    readonly status: FieldRef<"SubTarea", 'Status'>
    readonly createdAt: FieldRef<"SubTarea", 'DateTime'>
    readonly lastStatusChanged: FieldRef<"SubTarea", 'DateTime'>
    readonly usuarioId: FieldRef<"SubTarea", 'String'>
    readonly tareaId: FieldRef<"SubTarea", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubTarea findUnique
   */
  export type SubTareaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTarea
     */
    select?: SubTareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTarea
     */
    omit?: SubTareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTareaInclude<ExtArgs> | null
    /**
     * Filter, which SubTarea to fetch.
     */
    where: SubTareaWhereUniqueInput
  }

  /**
   * SubTarea findUniqueOrThrow
   */
  export type SubTareaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTarea
     */
    select?: SubTareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTarea
     */
    omit?: SubTareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTareaInclude<ExtArgs> | null
    /**
     * Filter, which SubTarea to fetch.
     */
    where: SubTareaWhereUniqueInput
  }

  /**
   * SubTarea findFirst
   */
  export type SubTareaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTarea
     */
    select?: SubTareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTarea
     */
    omit?: SubTareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTareaInclude<ExtArgs> | null
    /**
     * Filter, which SubTarea to fetch.
     */
    where?: SubTareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubTareas to fetch.
     */
    orderBy?: SubTareaOrderByWithRelationInput | SubTareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubTareas.
     */
    cursor?: SubTareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubTareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubTareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubTareas.
     */
    distinct?: SubTareaScalarFieldEnum | SubTareaScalarFieldEnum[]
  }

  /**
   * SubTarea findFirstOrThrow
   */
  export type SubTareaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTarea
     */
    select?: SubTareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTarea
     */
    omit?: SubTareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTareaInclude<ExtArgs> | null
    /**
     * Filter, which SubTarea to fetch.
     */
    where?: SubTareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubTareas to fetch.
     */
    orderBy?: SubTareaOrderByWithRelationInput | SubTareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubTareas.
     */
    cursor?: SubTareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubTareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubTareas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubTareas.
     */
    distinct?: SubTareaScalarFieldEnum | SubTareaScalarFieldEnum[]
  }

  /**
   * SubTarea findMany
   */
  export type SubTareaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTarea
     */
    select?: SubTareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTarea
     */
    omit?: SubTareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTareaInclude<ExtArgs> | null
    /**
     * Filter, which SubTareas to fetch.
     */
    where?: SubTareaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubTareas to fetch.
     */
    orderBy?: SubTareaOrderByWithRelationInput | SubTareaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubTareas.
     */
    cursor?: SubTareaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubTareas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubTareas.
     */
    skip?: number
    distinct?: SubTareaScalarFieldEnum | SubTareaScalarFieldEnum[]
  }

  /**
   * SubTarea create
   */
  export type SubTareaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTarea
     */
    select?: SubTareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTarea
     */
    omit?: SubTareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTareaInclude<ExtArgs> | null
    /**
     * The data needed to create a SubTarea.
     */
    data: XOR<SubTareaCreateInput, SubTareaUncheckedCreateInput>
  }

  /**
   * SubTarea createMany
   */
  export type SubTareaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubTareas.
     */
    data: SubTareaCreateManyInput | SubTareaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubTarea createManyAndReturn
   */
  export type SubTareaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTarea
     */
    select?: SubTareaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubTarea
     */
    omit?: SubTareaOmit<ExtArgs> | null
    /**
     * The data used to create many SubTareas.
     */
    data: SubTareaCreateManyInput | SubTareaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTareaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubTarea update
   */
  export type SubTareaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTarea
     */
    select?: SubTareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTarea
     */
    omit?: SubTareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTareaInclude<ExtArgs> | null
    /**
     * The data needed to update a SubTarea.
     */
    data: XOR<SubTareaUpdateInput, SubTareaUncheckedUpdateInput>
    /**
     * Choose, which SubTarea to update.
     */
    where: SubTareaWhereUniqueInput
  }

  /**
   * SubTarea updateMany
   */
  export type SubTareaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubTareas.
     */
    data: XOR<SubTareaUpdateManyMutationInput, SubTareaUncheckedUpdateManyInput>
    /**
     * Filter which SubTareas to update
     */
    where?: SubTareaWhereInput
    /**
     * Limit how many SubTareas to update.
     */
    limit?: number
  }

  /**
   * SubTarea updateManyAndReturn
   */
  export type SubTareaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTarea
     */
    select?: SubTareaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubTarea
     */
    omit?: SubTareaOmit<ExtArgs> | null
    /**
     * The data used to update SubTareas.
     */
    data: XOR<SubTareaUpdateManyMutationInput, SubTareaUncheckedUpdateManyInput>
    /**
     * Filter which SubTareas to update
     */
    where?: SubTareaWhereInput
    /**
     * Limit how many SubTareas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTareaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubTarea upsert
   */
  export type SubTareaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTarea
     */
    select?: SubTareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTarea
     */
    omit?: SubTareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTareaInclude<ExtArgs> | null
    /**
     * The filter to search for the SubTarea to update in case it exists.
     */
    where: SubTareaWhereUniqueInput
    /**
     * In case the SubTarea found by the `where` argument doesn't exist, create a new SubTarea with this data.
     */
    create: XOR<SubTareaCreateInput, SubTareaUncheckedCreateInput>
    /**
     * In case the SubTarea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubTareaUpdateInput, SubTareaUncheckedUpdateInput>
  }

  /**
   * SubTarea delete
   */
  export type SubTareaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTarea
     */
    select?: SubTareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTarea
     */
    omit?: SubTareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTareaInclude<ExtArgs> | null
    /**
     * Filter which SubTarea to delete.
     */
    where: SubTareaWhereUniqueInput
  }

  /**
   * SubTarea deleteMany
   */
  export type SubTareaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubTareas to delete
     */
    where?: SubTareaWhereInput
    /**
     * Limit how many SubTareas to delete.
     */
    limit?: number
  }

  /**
   * SubTarea without action
   */
  export type SubTareaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubTarea
     */
    select?: SubTareaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubTarea
     */
    omit?: SubTareaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubTareaInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    sendNotifications: 'sendNotifications',
    timeBeforeNotification: 'timeBeforeNotification',
    emailValidated: 'emailValidated'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    usuarioId: 'usuarioId',
    active: 'active'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const TareaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    active: 'active',
    status: 'status',
    createdAt: 'createdAt',
    lastStatusChanged: 'lastStatusChanged',
    progress: 'progress',
    usuarioId: 'usuarioId',
    categoriaId: 'categoriaId'
  };

  export type TareaScalarFieldEnum = (typeof TareaScalarFieldEnum)[keyof typeof TareaScalarFieldEnum]


  export const SubTareaScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    active: 'active',
    status: 'status',
    createdAt: 'createdAt',
    lastStatusChanged: 'lastStatusChanged',
    usuarioId: 'usuarioId',
    tareaId: 'tareaId'
  };

  export type SubTareaScalarFieldEnum = (typeof SubTareaScalarFieldEnum)[keyof typeof SubTareaScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: StringFilter<"Usuario"> | string
    username?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    sendNotifications?: BoolFilter<"Usuario"> | boolean
    timeBeforeNotification?: IntNullableFilter<"Usuario"> | number | null
    emailValidated?: BoolFilter<"Usuario"> | boolean
    tareas?: TareaListRelationFilter
    categorias?: CategoriaListRelationFilter
    subtareas?: SubTareaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    sendNotifications?: SortOrder
    timeBeforeNotification?: SortOrderInput | SortOrder
    emailValidated?: SortOrder
    tareas?: TareaOrderByRelationAggregateInput
    categorias?: CategoriaOrderByRelationAggregateInput
    subtareas?: SubTareaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    username?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    sendNotifications?: BoolFilter<"Usuario"> | boolean
    timeBeforeNotification?: IntNullableFilter<"Usuario"> | number | null
    emailValidated?: BoolFilter<"Usuario"> | boolean
    tareas?: TareaListRelationFilter
    categorias?: CategoriaListRelationFilter
    subtareas?: SubTareaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    sendNotifications?: SortOrder
    timeBeforeNotification?: SortOrderInput | SortOrder
    emailValidated?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Usuario"> | string
    username?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    sendNotifications?: BoolWithAggregatesFilter<"Usuario"> | boolean
    timeBeforeNotification?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
    emailValidated?: BoolWithAggregatesFilter<"Usuario"> | boolean
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: StringFilter<"Categoria"> | string
    name?: StringFilter<"Categoria"> | string
    usuarioId?: StringFilter<"Categoria"> | string
    active?: BoolFilter<"Categoria"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    tareas?: TareaListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    usuarioId?: SortOrder
    active?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    tareas?: TareaOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    name?: StringFilter<"Categoria"> | string
    usuarioId?: StringFilter<"Categoria"> | string
    active?: BoolFilter<"Categoria"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    tareas?: TareaListRelationFilter
  }, "id">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    usuarioId?: SortOrder
    active?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categoria"> | string
    name?: StringWithAggregatesFilter<"Categoria"> | string
    usuarioId?: StringWithAggregatesFilter<"Categoria"> | string
    active?: BoolWithAggregatesFilter<"Categoria"> | boolean
  }

  export type TareaWhereInput = {
    AND?: TareaWhereInput | TareaWhereInput[]
    OR?: TareaWhereInput[]
    NOT?: TareaWhereInput | TareaWhereInput[]
    id?: StringFilter<"Tarea"> | string
    title?: StringFilter<"Tarea"> | string
    description?: StringNullableFilter<"Tarea"> | string | null
    active?: BoolFilter<"Tarea"> | boolean
    status?: EnumStatusFilter<"Tarea"> | $Enums.Status
    createdAt?: DateTimeFilter<"Tarea"> | Date | string
    lastStatusChanged?: DateTimeFilter<"Tarea"> | Date | string
    progress?: IntFilter<"Tarea"> | number
    usuarioId?: StringFilter<"Tarea"> | string
    categoriaId?: StringFilter<"Tarea"> | string
    subtareas?: SubTareaListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
  }

  export type TareaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    lastStatusChanged?: SortOrder
    progress?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
    subtareas?: SubTareaOrderByRelationAggregateInput
    usuario?: UsuarioOrderByWithRelationInput
    categoria?: CategoriaOrderByWithRelationInput
  }

  export type TareaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TareaWhereInput | TareaWhereInput[]
    OR?: TareaWhereInput[]
    NOT?: TareaWhereInput | TareaWhereInput[]
    title?: StringFilter<"Tarea"> | string
    description?: StringNullableFilter<"Tarea"> | string | null
    active?: BoolFilter<"Tarea"> | boolean
    status?: EnumStatusFilter<"Tarea"> | $Enums.Status
    createdAt?: DateTimeFilter<"Tarea"> | Date | string
    lastStatusChanged?: DateTimeFilter<"Tarea"> | Date | string
    progress?: IntFilter<"Tarea"> | number
    usuarioId?: StringFilter<"Tarea"> | string
    categoriaId?: StringFilter<"Tarea"> | string
    subtareas?: SubTareaListRelationFilter
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
  }, "id">

  export type TareaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    lastStatusChanged?: SortOrder
    progress?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
    _count?: TareaCountOrderByAggregateInput
    _avg?: TareaAvgOrderByAggregateInput
    _max?: TareaMaxOrderByAggregateInput
    _min?: TareaMinOrderByAggregateInput
    _sum?: TareaSumOrderByAggregateInput
  }

  export type TareaScalarWhereWithAggregatesInput = {
    AND?: TareaScalarWhereWithAggregatesInput | TareaScalarWhereWithAggregatesInput[]
    OR?: TareaScalarWhereWithAggregatesInput[]
    NOT?: TareaScalarWhereWithAggregatesInput | TareaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tarea"> | string
    title?: StringWithAggregatesFilter<"Tarea"> | string
    description?: StringNullableWithAggregatesFilter<"Tarea"> | string | null
    active?: BoolWithAggregatesFilter<"Tarea"> | boolean
    status?: EnumStatusWithAggregatesFilter<"Tarea"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"Tarea"> | Date | string
    lastStatusChanged?: DateTimeWithAggregatesFilter<"Tarea"> | Date | string
    progress?: IntWithAggregatesFilter<"Tarea"> | number
    usuarioId?: StringWithAggregatesFilter<"Tarea"> | string
    categoriaId?: StringWithAggregatesFilter<"Tarea"> | string
  }

  export type SubTareaWhereInput = {
    AND?: SubTareaWhereInput | SubTareaWhereInput[]
    OR?: SubTareaWhereInput[]
    NOT?: SubTareaWhereInput | SubTareaWhereInput[]
    id?: StringFilter<"SubTarea"> | string
    title?: StringFilter<"SubTarea"> | string
    description?: StringNullableFilter<"SubTarea"> | string | null
    active?: BoolFilter<"SubTarea"> | boolean
    status?: EnumStatusFilter<"SubTarea"> | $Enums.Status
    createdAt?: DateTimeFilter<"SubTarea"> | Date | string
    lastStatusChanged?: DateTimeFilter<"SubTarea"> | Date | string
    usuarioId?: StringFilter<"SubTarea"> | string
    tareaId?: StringFilter<"SubTarea"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    tarea?: XOR<TareaScalarRelationFilter, TareaWhereInput>
  }

  export type SubTareaOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    lastStatusChanged?: SortOrder
    usuarioId?: SortOrder
    tareaId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    tarea?: TareaOrderByWithRelationInput
  }

  export type SubTareaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubTareaWhereInput | SubTareaWhereInput[]
    OR?: SubTareaWhereInput[]
    NOT?: SubTareaWhereInput | SubTareaWhereInput[]
    title?: StringFilter<"SubTarea"> | string
    description?: StringNullableFilter<"SubTarea"> | string | null
    active?: BoolFilter<"SubTarea"> | boolean
    status?: EnumStatusFilter<"SubTarea"> | $Enums.Status
    createdAt?: DateTimeFilter<"SubTarea"> | Date | string
    lastStatusChanged?: DateTimeFilter<"SubTarea"> | Date | string
    usuarioId?: StringFilter<"SubTarea"> | string
    tareaId?: StringFilter<"SubTarea"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    tarea?: XOR<TareaScalarRelationFilter, TareaWhereInput>
  }, "id">

  export type SubTareaOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    lastStatusChanged?: SortOrder
    usuarioId?: SortOrder
    tareaId?: SortOrder
    _count?: SubTareaCountOrderByAggregateInput
    _max?: SubTareaMaxOrderByAggregateInput
    _min?: SubTareaMinOrderByAggregateInput
  }

  export type SubTareaScalarWhereWithAggregatesInput = {
    AND?: SubTareaScalarWhereWithAggregatesInput | SubTareaScalarWhereWithAggregatesInput[]
    OR?: SubTareaScalarWhereWithAggregatesInput[]
    NOT?: SubTareaScalarWhereWithAggregatesInput | SubTareaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubTarea"> | string
    title?: StringWithAggregatesFilter<"SubTarea"> | string
    description?: StringNullableWithAggregatesFilter<"SubTarea"> | string | null
    active?: BoolWithAggregatesFilter<"SubTarea"> | boolean
    status?: EnumStatusWithAggregatesFilter<"SubTarea"> | $Enums.Status
    createdAt?: DateTimeWithAggregatesFilter<"SubTarea"> | Date | string
    lastStatusChanged?: DateTimeWithAggregatesFilter<"SubTarea"> | Date | string
    usuarioId?: StringWithAggregatesFilter<"SubTarea"> | string
    tareaId?: StringWithAggregatesFilter<"SubTarea"> | string
  }

  export type UsuarioCreateInput = {
    id: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    sendNotifications?: boolean
    timeBeforeNotification?: number | null
    emailValidated?: boolean
    tareas?: TareaCreateNestedManyWithoutUsuarioInput
    categorias?: CategoriaCreateNestedManyWithoutUsuarioInput
    subtareas?: SubTareaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    sendNotifications?: boolean
    timeBeforeNotification?: number | null
    emailValidated?: boolean
    tareas?: TareaUncheckedCreateNestedManyWithoutUsuarioInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    subtareas?: SubTareaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendNotifications?: BoolFieldUpdateOperationsInput | boolean
    timeBeforeNotification?: NullableIntFieldUpdateOperationsInput | number | null
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    tareas?: TareaUpdateManyWithoutUsuarioNestedInput
    categorias?: CategoriaUpdateManyWithoutUsuarioNestedInput
    subtareas?: SubTareaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendNotifications?: BoolFieldUpdateOperationsInput | boolean
    timeBeforeNotification?: NullableIntFieldUpdateOperationsInput | number | null
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    tareas?: TareaUncheckedUpdateManyWithoutUsuarioNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    subtareas?: SubTareaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    sendNotifications?: boolean
    timeBeforeNotification?: number | null
    emailValidated?: boolean
  }

  export type UsuarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendNotifications?: BoolFieldUpdateOperationsInput | boolean
    timeBeforeNotification?: NullableIntFieldUpdateOperationsInput | number | null
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendNotifications?: BoolFieldUpdateOperationsInput | boolean
    timeBeforeNotification?: NullableIntFieldUpdateOperationsInput | number | null
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoriaCreateInput = {
    id: string
    name: string
    active?: boolean
    usuario: UsuarioCreateNestedOneWithoutCategoriasInput
    tareas?: TareaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id: string
    name: string
    usuarioId: string
    active?: boolean
    tareas?: TareaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutCategoriasNestedInput
    tareas?: TareaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    tareas?: TareaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id: string
    name: string
    usuarioId: string
    active?: boolean
  }

  export type CategoriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TareaCreateInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    progress?: number
    subtareas?: SubTareaCreateNestedManyWithoutTareaInput
    usuario: UsuarioCreateNestedOneWithoutTareasInput
    categoria: CategoriaCreateNestedOneWithoutTareasInput
  }

  export type TareaUncheckedCreateInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    progress?: number
    usuarioId: string
    categoriaId: string
    subtareas?: SubTareaUncheckedCreateNestedManyWithoutTareaInput
  }

  export type TareaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    subtareas?: SubTareaUpdateManyWithoutTareaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutTareasNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutTareasNestedInput
  }

  export type TareaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
    subtareas?: SubTareaUncheckedUpdateManyWithoutTareaNestedInput
  }

  export type TareaCreateManyInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    progress?: number
    usuarioId: string
    categoriaId: string
  }

  export type TareaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
  }

  export type TareaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type SubTareaCreateInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    usuario: UsuarioCreateNestedOneWithoutSubtareasInput
    tarea: TareaCreateNestedOneWithoutSubtareasInput
  }

  export type SubTareaUncheckedCreateInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    usuarioId: string
    tareaId: string
  }

  export type SubTareaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutSubtareasNestedInput
    tarea?: TareaUpdateOneRequiredWithoutSubtareasNestedInput
  }

  export type SubTareaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tareaId?: StringFieldUpdateOperationsInput | string
  }

  export type SubTareaCreateManyInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    usuarioId: string
    tareaId: string
  }

  export type SubTareaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubTareaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    tareaId?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TareaListRelationFilter = {
    every?: TareaWhereInput
    some?: TareaWhereInput
    none?: TareaWhereInput
  }

  export type CategoriaListRelationFilter = {
    every?: CategoriaWhereInput
    some?: CategoriaWhereInput
    none?: CategoriaWhereInput
  }

  export type SubTareaListRelationFilter = {
    every?: SubTareaWhereInput
    some?: SubTareaWhereInput
    none?: SubTareaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TareaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubTareaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    sendNotifications?: SortOrder
    timeBeforeNotification?: SortOrder
    emailValidated?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    timeBeforeNotification?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    sendNotifications?: SortOrder
    timeBeforeNotification?: SortOrder
    emailValidated?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    sendNotifications?: SortOrder
    timeBeforeNotification?: SortOrder
    emailValidated?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    timeBeforeNotification?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    usuarioId?: SortOrder
    active?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    usuarioId?: SortOrder
    active?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    usuarioId?: SortOrder
    active?: SortOrder
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type TareaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    lastStatusChanged?: SortOrder
    progress?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
  }

  export type TareaAvgOrderByAggregateInput = {
    progress?: SortOrder
  }

  export type TareaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    lastStatusChanged?: SortOrder
    progress?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
  }

  export type TareaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    lastStatusChanged?: SortOrder
    progress?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
  }

  export type TareaSumOrderByAggregateInput = {
    progress?: SortOrder
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

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TareaScalarRelationFilter = {
    is?: TareaWhereInput
    isNot?: TareaWhereInput
  }

  export type SubTareaCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    lastStatusChanged?: SortOrder
    usuarioId?: SortOrder
    tareaId?: SortOrder
  }

  export type SubTareaMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    lastStatusChanged?: SortOrder
    usuarioId?: SortOrder
    tareaId?: SortOrder
  }

  export type SubTareaMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    active?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    lastStatusChanged?: SortOrder
    usuarioId?: SortOrder
    tareaId?: SortOrder
  }

  export type TareaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TareaCreateWithoutUsuarioInput, TareaUncheckedCreateWithoutUsuarioInput> | TareaCreateWithoutUsuarioInput[] | TareaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutUsuarioInput | TareaCreateOrConnectWithoutUsuarioInput[]
    createMany?: TareaCreateManyUsuarioInputEnvelope
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
  }

  export type CategoriaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CategoriaCreateWithoutUsuarioInput, CategoriaUncheckedCreateWithoutUsuarioInput> | CategoriaCreateWithoutUsuarioInput[] | CategoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutUsuarioInput | CategoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CategoriaCreateManyUsuarioInputEnvelope
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type SubTareaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SubTareaCreateWithoutUsuarioInput, SubTareaUncheckedCreateWithoutUsuarioInput> | SubTareaCreateWithoutUsuarioInput[] | SubTareaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SubTareaCreateOrConnectWithoutUsuarioInput | SubTareaCreateOrConnectWithoutUsuarioInput[]
    createMany?: SubTareaCreateManyUsuarioInputEnvelope
    connect?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
  }

  export type TareaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TareaCreateWithoutUsuarioInput, TareaUncheckedCreateWithoutUsuarioInput> | TareaCreateWithoutUsuarioInput[] | TareaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutUsuarioInput | TareaCreateOrConnectWithoutUsuarioInput[]
    createMany?: TareaCreateManyUsuarioInputEnvelope
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
  }

  export type CategoriaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<CategoriaCreateWithoutUsuarioInput, CategoriaUncheckedCreateWithoutUsuarioInput> | CategoriaCreateWithoutUsuarioInput[] | CategoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutUsuarioInput | CategoriaCreateOrConnectWithoutUsuarioInput[]
    createMany?: CategoriaCreateManyUsuarioInputEnvelope
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type SubTareaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<SubTareaCreateWithoutUsuarioInput, SubTareaUncheckedCreateWithoutUsuarioInput> | SubTareaCreateWithoutUsuarioInput[] | SubTareaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SubTareaCreateOrConnectWithoutUsuarioInput | SubTareaCreateOrConnectWithoutUsuarioInput[]
    createMany?: SubTareaCreateManyUsuarioInputEnvelope
    connect?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TareaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TareaCreateWithoutUsuarioInput, TareaUncheckedCreateWithoutUsuarioInput> | TareaCreateWithoutUsuarioInput[] | TareaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutUsuarioInput | TareaCreateOrConnectWithoutUsuarioInput[]
    upsert?: TareaUpsertWithWhereUniqueWithoutUsuarioInput | TareaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TareaCreateManyUsuarioInputEnvelope
    set?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    disconnect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    delete?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    update?: TareaUpdateWithWhereUniqueWithoutUsuarioInput | TareaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TareaUpdateManyWithWhereWithoutUsuarioInput | TareaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TareaScalarWhereInput | TareaScalarWhereInput[]
  }

  export type CategoriaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CategoriaCreateWithoutUsuarioInput, CategoriaUncheckedCreateWithoutUsuarioInput> | CategoriaCreateWithoutUsuarioInput[] | CategoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutUsuarioInput | CategoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutUsuarioInput | CategoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CategoriaCreateManyUsuarioInputEnvelope
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutUsuarioInput | CategoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutUsuarioInput | CategoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type SubTareaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SubTareaCreateWithoutUsuarioInput, SubTareaUncheckedCreateWithoutUsuarioInput> | SubTareaCreateWithoutUsuarioInput[] | SubTareaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SubTareaCreateOrConnectWithoutUsuarioInput | SubTareaCreateOrConnectWithoutUsuarioInput[]
    upsert?: SubTareaUpsertWithWhereUniqueWithoutUsuarioInput | SubTareaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SubTareaCreateManyUsuarioInputEnvelope
    set?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    disconnect?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    delete?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    connect?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    update?: SubTareaUpdateWithWhereUniqueWithoutUsuarioInput | SubTareaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SubTareaUpdateManyWithWhereWithoutUsuarioInput | SubTareaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SubTareaScalarWhereInput | SubTareaScalarWhereInput[]
  }

  export type TareaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TareaCreateWithoutUsuarioInput, TareaUncheckedCreateWithoutUsuarioInput> | TareaCreateWithoutUsuarioInput[] | TareaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutUsuarioInput | TareaCreateOrConnectWithoutUsuarioInput[]
    upsert?: TareaUpsertWithWhereUniqueWithoutUsuarioInput | TareaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TareaCreateManyUsuarioInputEnvelope
    set?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    disconnect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    delete?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    update?: TareaUpdateWithWhereUniqueWithoutUsuarioInput | TareaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TareaUpdateManyWithWhereWithoutUsuarioInput | TareaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TareaScalarWhereInput | TareaScalarWhereInput[]
  }

  export type CategoriaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<CategoriaCreateWithoutUsuarioInput, CategoriaUncheckedCreateWithoutUsuarioInput> | CategoriaCreateWithoutUsuarioInput[] | CategoriaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutUsuarioInput | CategoriaCreateOrConnectWithoutUsuarioInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutUsuarioInput | CategoriaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: CategoriaCreateManyUsuarioInputEnvelope
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutUsuarioInput | CategoriaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutUsuarioInput | CategoriaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type SubTareaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<SubTareaCreateWithoutUsuarioInput, SubTareaUncheckedCreateWithoutUsuarioInput> | SubTareaCreateWithoutUsuarioInput[] | SubTareaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: SubTareaCreateOrConnectWithoutUsuarioInput | SubTareaCreateOrConnectWithoutUsuarioInput[]
    upsert?: SubTareaUpsertWithWhereUniqueWithoutUsuarioInput | SubTareaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: SubTareaCreateManyUsuarioInputEnvelope
    set?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    disconnect?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    delete?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    connect?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    update?: SubTareaUpdateWithWhereUniqueWithoutUsuarioInput | SubTareaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: SubTareaUpdateManyWithWhereWithoutUsuarioInput | SubTareaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: SubTareaScalarWhereInput | SubTareaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutCategoriasInput = {
    create?: XOR<UsuarioCreateWithoutCategoriasInput, UsuarioUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCategoriasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TareaCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<TareaCreateWithoutCategoriaInput, TareaUncheckedCreateWithoutCategoriaInput> | TareaCreateWithoutCategoriaInput[] | TareaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutCategoriaInput | TareaCreateOrConnectWithoutCategoriaInput[]
    createMany?: TareaCreateManyCategoriaInputEnvelope
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
  }

  export type TareaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<TareaCreateWithoutCategoriaInput, TareaUncheckedCreateWithoutCategoriaInput> | TareaCreateWithoutCategoriaInput[] | TareaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutCategoriaInput | TareaCreateOrConnectWithoutCategoriaInput[]
    createMany?: TareaCreateManyCategoriaInputEnvelope
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutCategoriasNestedInput = {
    create?: XOR<UsuarioCreateWithoutCategoriasInput, UsuarioUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCategoriasInput
    upsert?: UsuarioUpsertWithoutCategoriasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCategoriasInput, UsuarioUpdateWithoutCategoriasInput>, UsuarioUncheckedUpdateWithoutCategoriasInput>
  }

  export type TareaUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<TareaCreateWithoutCategoriaInput, TareaUncheckedCreateWithoutCategoriaInput> | TareaCreateWithoutCategoriaInput[] | TareaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutCategoriaInput | TareaCreateOrConnectWithoutCategoriaInput[]
    upsert?: TareaUpsertWithWhereUniqueWithoutCategoriaInput | TareaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: TareaCreateManyCategoriaInputEnvelope
    set?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    disconnect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    delete?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    update?: TareaUpdateWithWhereUniqueWithoutCategoriaInput | TareaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: TareaUpdateManyWithWhereWithoutCategoriaInput | TareaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: TareaScalarWhereInput | TareaScalarWhereInput[]
  }

  export type TareaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<TareaCreateWithoutCategoriaInput, TareaUncheckedCreateWithoutCategoriaInput> | TareaCreateWithoutCategoriaInput[] | TareaUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: TareaCreateOrConnectWithoutCategoriaInput | TareaCreateOrConnectWithoutCategoriaInput[]
    upsert?: TareaUpsertWithWhereUniqueWithoutCategoriaInput | TareaUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: TareaCreateManyCategoriaInputEnvelope
    set?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    disconnect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    delete?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    connect?: TareaWhereUniqueInput | TareaWhereUniqueInput[]
    update?: TareaUpdateWithWhereUniqueWithoutCategoriaInput | TareaUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: TareaUpdateManyWithWhereWithoutCategoriaInput | TareaUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: TareaScalarWhereInput | TareaScalarWhereInput[]
  }

  export type SubTareaCreateNestedManyWithoutTareaInput = {
    create?: XOR<SubTareaCreateWithoutTareaInput, SubTareaUncheckedCreateWithoutTareaInput> | SubTareaCreateWithoutTareaInput[] | SubTareaUncheckedCreateWithoutTareaInput[]
    connectOrCreate?: SubTareaCreateOrConnectWithoutTareaInput | SubTareaCreateOrConnectWithoutTareaInput[]
    createMany?: SubTareaCreateManyTareaInputEnvelope
    connect?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
  }

  export type UsuarioCreateNestedOneWithoutTareasInput = {
    create?: XOR<UsuarioCreateWithoutTareasInput, UsuarioUncheckedCreateWithoutTareasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTareasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type CategoriaCreateNestedOneWithoutTareasInput = {
    create?: XOR<CategoriaCreateWithoutTareasInput, CategoriaUncheckedCreateWithoutTareasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutTareasInput
    connect?: CategoriaWhereUniqueInput
  }

  export type SubTareaUncheckedCreateNestedManyWithoutTareaInput = {
    create?: XOR<SubTareaCreateWithoutTareaInput, SubTareaUncheckedCreateWithoutTareaInput> | SubTareaCreateWithoutTareaInput[] | SubTareaUncheckedCreateWithoutTareaInput[]
    connectOrCreate?: SubTareaCreateOrConnectWithoutTareaInput | SubTareaCreateOrConnectWithoutTareaInput[]
    createMany?: SubTareaCreateManyTareaInputEnvelope
    connect?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SubTareaUpdateManyWithoutTareaNestedInput = {
    create?: XOR<SubTareaCreateWithoutTareaInput, SubTareaUncheckedCreateWithoutTareaInput> | SubTareaCreateWithoutTareaInput[] | SubTareaUncheckedCreateWithoutTareaInput[]
    connectOrCreate?: SubTareaCreateOrConnectWithoutTareaInput | SubTareaCreateOrConnectWithoutTareaInput[]
    upsert?: SubTareaUpsertWithWhereUniqueWithoutTareaInput | SubTareaUpsertWithWhereUniqueWithoutTareaInput[]
    createMany?: SubTareaCreateManyTareaInputEnvelope
    set?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    disconnect?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    delete?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    connect?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    update?: SubTareaUpdateWithWhereUniqueWithoutTareaInput | SubTareaUpdateWithWhereUniqueWithoutTareaInput[]
    updateMany?: SubTareaUpdateManyWithWhereWithoutTareaInput | SubTareaUpdateManyWithWhereWithoutTareaInput[]
    deleteMany?: SubTareaScalarWhereInput | SubTareaScalarWhereInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutTareasNestedInput = {
    create?: XOR<UsuarioCreateWithoutTareasInput, UsuarioUncheckedCreateWithoutTareasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTareasInput
    upsert?: UsuarioUpsertWithoutTareasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTareasInput, UsuarioUpdateWithoutTareasInput>, UsuarioUncheckedUpdateWithoutTareasInput>
  }

  export type CategoriaUpdateOneRequiredWithoutTareasNestedInput = {
    create?: XOR<CategoriaCreateWithoutTareasInput, CategoriaUncheckedCreateWithoutTareasInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutTareasInput
    upsert?: CategoriaUpsertWithoutTareasInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutTareasInput, CategoriaUpdateWithoutTareasInput>, CategoriaUncheckedUpdateWithoutTareasInput>
  }

  export type SubTareaUncheckedUpdateManyWithoutTareaNestedInput = {
    create?: XOR<SubTareaCreateWithoutTareaInput, SubTareaUncheckedCreateWithoutTareaInput> | SubTareaCreateWithoutTareaInput[] | SubTareaUncheckedCreateWithoutTareaInput[]
    connectOrCreate?: SubTareaCreateOrConnectWithoutTareaInput | SubTareaCreateOrConnectWithoutTareaInput[]
    upsert?: SubTareaUpsertWithWhereUniqueWithoutTareaInput | SubTareaUpsertWithWhereUniqueWithoutTareaInput[]
    createMany?: SubTareaCreateManyTareaInputEnvelope
    set?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    disconnect?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    delete?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    connect?: SubTareaWhereUniqueInput | SubTareaWhereUniqueInput[]
    update?: SubTareaUpdateWithWhereUniqueWithoutTareaInput | SubTareaUpdateWithWhereUniqueWithoutTareaInput[]
    updateMany?: SubTareaUpdateManyWithWhereWithoutTareaInput | SubTareaUpdateManyWithWhereWithoutTareaInput[]
    deleteMany?: SubTareaScalarWhereInput | SubTareaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutSubtareasInput = {
    create?: XOR<UsuarioCreateWithoutSubtareasInput, UsuarioUncheckedCreateWithoutSubtareasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSubtareasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type TareaCreateNestedOneWithoutSubtareasInput = {
    create?: XOR<TareaCreateWithoutSubtareasInput, TareaUncheckedCreateWithoutSubtareasInput>
    connectOrCreate?: TareaCreateOrConnectWithoutSubtareasInput
    connect?: TareaWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutSubtareasNestedInput = {
    create?: XOR<UsuarioCreateWithoutSubtareasInput, UsuarioUncheckedCreateWithoutSubtareasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSubtareasInput
    upsert?: UsuarioUpsertWithoutSubtareasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSubtareasInput, UsuarioUpdateWithoutSubtareasInput>, UsuarioUncheckedUpdateWithoutSubtareasInput>
  }

  export type TareaUpdateOneRequiredWithoutSubtareasNestedInput = {
    create?: XOR<TareaCreateWithoutSubtareasInput, TareaUncheckedCreateWithoutSubtareasInput>
    connectOrCreate?: TareaCreateOrConnectWithoutSubtareasInput
    upsert?: TareaUpsertWithoutSubtareasInput
    connect?: TareaWhereUniqueInput
    update?: XOR<XOR<TareaUpdateToOneWithWhereWithoutSubtareasInput, TareaUpdateWithoutSubtareasInput>, TareaUncheckedUpdateWithoutSubtareasInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TareaCreateWithoutUsuarioInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    progress?: number
    subtareas?: SubTareaCreateNestedManyWithoutTareaInput
    categoria: CategoriaCreateNestedOneWithoutTareasInput
  }

  export type TareaUncheckedCreateWithoutUsuarioInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    progress?: number
    categoriaId: string
    subtareas?: SubTareaUncheckedCreateNestedManyWithoutTareaInput
  }

  export type TareaCreateOrConnectWithoutUsuarioInput = {
    where: TareaWhereUniqueInput
    create: XOR<TareaCreateWithoutUsuarioInput, TareaUncheckedCreateWithoutUsuarioInput>
  }

  export type TareaCreateManyUsuarioInputEnvelope = {
    data: TareaCreateManyUsuarioInput | TareaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaCreateWithoutUsuarioInput = {
    id: string
    name: string
    active?: boolean
    tareas?: TareaCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutUsuarioInput = {
    id: string
    name: string
    active?: boolean
    tareas?: TareaUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutUsuarioInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutUsuarioInput, CategoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type CategoriaCreateManyUsuarioInputEnvelope = {
    data: CategoriaCreateManyUsuarioInput | CategoriaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type SubTareaCreateWithoutUsuarioInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    tarea: TareaCreateNestedOneWithoutSubtareasInput
  }

  export type SubTareaUncheckedCreateWithoutUsuarioInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    tareaId: string
  }

  export type SubTareaCreateOrConnectWithoutUsuarioInput = {
    where: SubTareaWhereUniqueInput
    create: XOR<SubTareaCreateWithoutUsuarioInput, SubTareaUncheckedCreateWithoutUsuarioInput>
  }

  export type SubTareaCreateManyUsuarioInputEnvelope = {
    data: SubTareaCreateManyUsuarioInput | SubTareaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type TareaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: TareaWhereUniqueInput
    update: XOR<TareaUpdateWithoutUsuarioInput, TareaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<TareaCreateWithoutUsuarioInput, TareaUncheckedCreateWithoutUsuarioInput>
  }

  export type TareaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: TareaWhereUniqueInput
    data: XOR<TareaUpdateWithoutUsuarioInput, TareaUncheckedUpdateWithoutUsuarioInput>
  }

  export type TareaUpdateManyWithWhereWithoutUsuarioInput = {
    where: TareaScalarWhereInput
    data: XOR<TareaUpdateManyMutationInput, TareaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type TareaScalarWhereInput = {
    AND?: TareaScalarWhereInput | TareaScalarWhereInput[]
    OR?: TareaScalarWhereInput[]
    NOT?: TareaScalarWhereInput | TareaScalarWhereInput[]
    id?: StringFilter<"Tarea"> | string
    title?: StringFilter<"Tarea"> | string
    description?: StringNullableFilter<"Tarea"> | string | null
    active?: BoolFilter<"Tarea"> | boolean
    status?: EnumStatusFilter<"Tarea"> | $Enums.Status
    createdAt?: DateTimeFilter<"Tarea"> | Date | string
    lastStatusChanged?: DateTimeFilter<"Tarea"> | Date | string
    progress?: IntFilter<"Tarea"> | number
    usuarioId?: StringFilter<"Tarea"> | string
    categoriaId?: StringFilter<"Tarea"> | string
  }

  export type CategoriaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: CategoriaWhereUniqueInput
    update: XOR<CategoriaUpdateWithoutUsuarioInput, CategoriaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<CategoriaCreateWithoutUsuarioInput, CategoriaUncheckedCreateWithoutUsuarioInput>
  }

  export type CategoriaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: CategoriaWhereUniqueInput
    data: XOR<CategoriaUpdateWithoutUsuarioInput, CategoriaUncheckedUpdateWithoutUsuarioInput>
  }

  export type CategoriaUpdateManyWithWhereWithoutUsuarioInput = {
    where: CategoriaScalarWhereInput
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type CategoriaScalarWhereInput = {
    AND?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    OR?: CategoriaScalarWhereInput[]
    NOT?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    id?: StringFilter<"Categoria"> | string
    name?: StringFilter<"Categoria"> | string
    usuarioId?: StringFilter<"Categoria"> | string
    active?: BoolFilter<"Categoria"> | boolean
  }

  export type SubTareaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: SubTareaWhereUniqueInput
    update: XOR<SubTareaUpdateWithoutUsuarioInput, SubTareaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<SubTareaCreateWithoutUsuarioInput, SubTareaUncheckedCreateWithoutUsuarioInput>
  }

  export type SubTareaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: SubTareaWhereUniqueInput
    data: XOR<SubTareaUpdateWithoutUsuarioInput, SubTareaUncheckedUpdateWithoutUsuarioInput>
  }

  export type SubTareaUpdateManyWithWhereWithoutUsuarioInput = {
    where: SubTareaScalarWhereInput
    data: XOR<SubTareaUpdateManyMutationInput, SubTareaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type SubTareaScalarWhereInput = {
    AND?: SubTareaScalarWhereInput | SubTareaScalarWhereInput[]
    OR?: SubTareaScalarWhereInput[]
    NOT?: SubTareaScalarWhereInput | SubTareaScalarWhereInput[]
    id?: StringFilter<"SubTarea"> | string
    title?: StringFilter<"SubTarea"> | string
    description?: StringNullableFilter<"SubTarea"> | string | null
    active?: BoolFilter<"SubTarea"> | boolean
    status?: EnumStatusFilter<"SubTarea"> | $Enums.Status
    createdAt?: DateTimeFilter<"SubTarea"> | Date | string
    lastStatusChanged?: DateTimeFilter<"SubTarea"> | Date | string
    usuarioId?: StringFilter<"SubTarea"> | string
    tareaId?: StringFilter<"SubTarea"> | string
  }

  export type UsuarioCreateWithoutCategoriasInput = {
    id: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    sendNotifications?: boolean
    timeBeforeNotification?: number | null
    emailValidated?: boolean
    tareas?: TareaCreateNestedManyWithoutUsuarioInput
    subtareas?: SubTareaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutCategoriasInput = {
    id: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    sendNotifications?: boolean
    timeBeforeNotification?: number | null
    emailValidated?: boolean
    tareas?: TareaUncheckedCreateNestedManyWithoutUsuarioInput
    subtareas?: SubTareaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutCategoriasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCategoriasInput, UsuarioUncheckedCreateWithoutCategoriasInput>
  }

  export type TareaCreateWithoutCategoriaInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    progress?: number
    subtareas?: SubTareaCreateNestedManyWithoutTareaInput
    usuario: UsuarioCreateNestedOneWithoutTareasInput
  }

  export type TareaUncheckedCreateWithoutCategoriaInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    progress?: number
    usuarioId: string
    subtareas?: SubTareaUncheckedCreateNestedManyWithoutTareaInput
  }

  export type TareaCreateOrConnectWithoutCategoriaInput = {
    where: TareaWhereUniqueInput
    create: XOR<TareaCreateWithoutCategoriaInput, TareaUncheckedCreateWithoutCategoriaInput>
  }

  export type TareaCreateManyCategoriaInputEnvelope = {
    data: TareaCreateManyCategoriaInput | TareaCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutCategoriasInput = {
    update: XOR<UsuarioUpdateWithoutCategoriasInput, UsuarioUncheckedUpdateWithoutCategoriasInput>
    create: XOR<UsuarioCreateWithoutCategoriasInput, UsuarioUncheckedCreateWithoutCategoriasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCategoriasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCategoriasInput, UsuarioUncheckedUpdateWithoutCategoriasInput>
  }

  export type UsuarioUpdateWithoutCategoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendNotifications?: BoolFieldUpdateOperationsInput | boolean
    timeBeforeNotification?: NullableIntFieldUpdateOperationsInput | number | null
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    tareas?: TareaUpdateManyWithoutUsuarioNestedInput
    subtareas?: SubTareaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCategoriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendNotifications?: BoolFieldUpdateOperationsInput | boolean
    timeBeforeNotification?: NullableIntFieldUpdateOperationsInput | number | null
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    tareas?: TareaUncheckedUpdateManyWithoutUsuarioNestedInput
    subtareas?: SubTareaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type TareaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: TareaWhereUniqueInput
    update: XOR<TareaUpdateWithoutCategoriaInput, TareaUncheckedUpdateWithoutCategoriaInput>
    create: XOR<TareaCreateWithoutCategoriaInput, TareaUncheckedCreateWithoutCategoriaInput>
  }

  export type TareaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: TareaWhereUniqueInput
    data: XOR<TareaUpdateWithoutCategoriaInput, TareaUncheckedUpdateWithoutCategoriaInput>
  }

  export type TareaUpdateManyWithWhereWithoutCategoriaInput = {
    where: TareaScalarWhereInput
    data: XOR<TareaUpdateManyMutationInput, TareaUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type SubTareaCreateWithoutTareaInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    usuario: UsuarioCreateNestedOneWithoutSubtareasInput
  }

  export type SubTareaUncheckedCreateWithoutTareaInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    usuarioId: string
  }

  export type SubTareaCreateOrConnectWithoutTareaInput = {
    where: SubTareaWhereUniqueInput
    create: XOR<SubTareaCreateWithoutTareaInput, SubTareaUncheckedCreateWithoutTareaInput>
  }

  export type SubTareaCreateManyTareaInputEnvelope = {
    data: SubTareaCreateManyTareaInput | SubTareaCreateManyTareaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioCreateWithoutTareasInput = {
    id: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    sendNotifications?: boolean
    timeBeforeNotification?: number | null
    emailValidated?: boolean
    categorias?: CategoriaCreateNestedManyWithoutUsuarioInput
    subtareas?: SubTareaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutTareasInput = {
    id: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    sendNotifications?: boolean
    timeBeforeNotification?: number | null
    emailValidated?: boolean
    categorias?: CategoriaUncheckedCreateNestedManyWithoutUsuarioInput
    subtareas?: SubTareaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutTareasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTareasInput, UsuarioUncheckedCreateWithoutTareasInput>
  }

  export type CategoriaCreateWithoutTareasInput = {
    id: string
    name: string
    active?: boolean
    usuario: UsuarioCreateNestedOneWithoutCategoriasInput
  }

  export type CategoriaUncheckedCreateWithoutTareasInput = {
    id: string
    name: string
    usuarioId: string
    active?: boolean
  }

  export type CategoriaCreateOrConnectWithoutTareasInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutTareasInput, CategoriaUncheckedCreateWithoutTareasInput>
  }

  export type SubTareaUpsertWithWhereUniqueWithoutTareaInput = {
    where: SubTareaWhereUniqueInput
    update: XOR<SubTareaUpdateWithoutTareaInput, SubTareaUncheckedUpdateWithoutTareaInput>
    create: XOR<SubTareaCreateWithoutTareaInput, SubTareaUncheckedCreateWithoutTareaInput>
  }

  export type SubTareaUpdateWithWhereUniqueWithoutTareaInput = {
    where: SubTareaWhereUniqueInput
    data: XOR<SubTareaUpdateWithoutTareaInput, SubTareaUncheckedUpdateWithoutTareaInput>
  }

  export type SubTareaUpdateManyWithWhereWithoutTareaInput = {
    where: SubTareaScalarWhereInput
    data: XOR<SubTareaUpdateManyMutationInput, SubTareaUncheckedUpdateManyWithoutTareaInput>
  }

  export type UsuarioUpsertWithoutTareasInput = {
    update: XOR<UsuarioUpdateWithoutTareasInput, UsuarioUncheckedUpdateWithoutTareasInput>
    create: XOR<UsuarioCreateWithoutTareasInput, UsuarioUncheckedCreateWithoutTareasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTareasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTareasInput, UsuarioUncheckedUpdateWithoutTareasInput>
  }

  export type UsuarioUpdateWithoutTareasInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendNotifications?: BoolFieldUpdateOperationsInput | boolean
    timeBeforeNotification?: NullableIntFieldUpdateOperationsInput | number | null
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    categorias?: CategoriaUpdateManyWithoutUsuarioNestedInput
    subtareas?: SubTareaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTareasInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendNotifications?: BoolFieldUpdateOperationsInput | boolean
    timeBeforeNotification?: NullableIntFieldUpdateOperationsInput | number | null
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    categorias?: CategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
    subtareas?: SubTareaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type CategoriaUpsertWithoutTareasInput = {
    update: XOR<CategoriaUpdateWithoutTareasInput, CategoriaUncheckedUpdateWithoutTareasInput>
    create: XOR<CategoriaCreateWithoutTareasInput, CategoriaUncheckedCreateWithoutTareasInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutTareasInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutTareasInput, CategoriaUncheckedUpdateWithoutTareasInput>
  }

  export type CategoriaUpdateWithoutTareasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutCategoriasNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutTareasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    usuarioId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UsuarioCreateWithoutSubtareasInput = {
    id: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    sendNotifications?: boolean
    timeBeforeNotification?: number | null
    emailValidated?: boolean
    tareas?: TareaCreateNestedManyWithoutUsuarioInput
    categorias?: CategoriaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutSubtareasInput = {
    id: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    sendNotifications?: boolean
    timeBeforeNotification?: number | null
    emailValidated?: boolean
    tareas?: TareaUncheckedCreateNestedManyWithoutUsuarioInput
    categorias?: CategoriaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutSubtareasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSubtareasInput, UsuarioUncheckedCreateWithoutSubtareasInput>
  }

  export type TareaCreateWithoutSubtareasInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    progress?: number
    usuario: UsuarioCreateNestedOneWithoutTareasInput
    categoria: CategoriaCreateNestedOneWithoutTareasInput
  }

  export type TareaUncheckedCreateWithoutSubtareasInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    progress?: number
    usuarioId: string
    categoriaId: string
  }

  export type TareaCreateOrConnectWithoutSubtareasInput = {
    where: TareaWhereUniqueInput
    create: XOR<TareaCreateWithoutSubtareasInput, TareaUncheckedCreateWithoutSubtareasInput>
  }

  export type UsuarioUpsertWithoutSubtareasInput = {
    update: XOR<UsuarioUpdateWithoutSubtareasInput, UsuarioUncheckedUpdateWithoutSubtareasInput>
    create: XOR<UsuarioCreateWithoutSubtareasInput, UsuarioUncheckedCreateWithoutSubtareasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSubtareasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSubtareasInput, UsuarioUncheckedUpdateWithoutSubtareasInput>
  }

  export type UsuarioUpdateWithoutSubtareasInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendNotifications?: BoolFieldUpdateOperationsInput | boolean
    timeBeforeNotification?: NullableIntFieldUpdateOperationsInput | number | null
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    tareas?: TareaUpdateManyWithoutUsuarioNestedInput
    categorias?: CategoriaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSubtareasInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sendNotifications?: BoolFieldUpdateOperationsInput | boolean
    timeBeforeNotification?: NullableIntFieldUpdateOperationsInput | number | null
    emailValidated?: BoolFieldUpdateOperationsInput | boolean
    tareas?: TareaUncheckedUpdateManyWithoutUsuarioNestedInput
    categorias?: CategoriaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type TareaUpsertWithoutSubtareasInput = {
    update: XOR<TareaUpdateWithoutSubtareasInput, TareaUncheckedUpdateWithoutSubtareasInput>
    create: XOR<TareaCreateWithoutSubtareasInput, TareaUncheckedCreateWithoutSubtareasInput>
    where?: TareaWhereInput
  }

  export type TareaUpdateToOneWithWhereWithoutSubtareasInput = {
    where?: TareaWhereInput
    data: XOR<TareaUpdateWithoutSubtareasInput, TareaUncheckedUpdateWithoutSubtareasInput>
  }

  export type TareaUpdateWithoutSubtareasInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    usuario?: UsuarioUpdateOneRequiredWithoutTareasNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutTareasNestedInput
  }

  export type TareaUncheckedUpdateWithoutSubtareasInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    categoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type TareaCreateManyUsuarioInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    progress?: number
    categoriaId: string
  }

  export type CategoriaCreateManyUsuarioInput = {
    id: string
    name: string
    active?: boolean
  }

  export type SubTareaCreateManyUsuarioInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    tareaId: string
  }

  export type TareaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    subtareas?: SubTareaUpdateManyWithoutTareaNestedInput
    categoria?: CategoriaUpdateOneRequiredWithoutTareasNestedInput
  }

  export type TareaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    categoriaId?: StringFieldUpdateOperationsInput | string
    subtareas?: SubTareaUncheckedUpdateManyWithoutTareaNestedInput
  }

  export type TareaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    categoriaId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoriaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    tareas?: TareaUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    tareas?: TareaUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubTareaUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    tarea?: TareaUpdateOneRequiredWithoutSubtareasNestedInput
  }

  export type SubTareaUncheckedUpdateWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    tareaId?: StringFieldUpdateOperationsInput | string
  }

  export type SubTareaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    tareaId?: StringFieldUpdateOperationsInput | string
  }

  export type TareaCreateManyCategoriaInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    progress?: number
    usuarioId: string
  }

  export type TareaUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    subtareas?: SubTareaUpdateManyWithoutTareaNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutTareasNestedInput
  }

  export type TareaUncheckedUpdateWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
    subtareas?: SubTareaUncheckedUpdateManyWithoutTareaNestedInput
  }

  export type TareaUncheckedUpdateManyWithoutCategoriaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type SubTareaCreateManyTareaInput = {
    id: string
    title: string
    description?: string | null
    active?: boolean
    status?: $Enums.Status
    createdAt?: Date | string
    lastStatusChanged: Date | string
    usuarioId: string
  }

  export type SubTareaUpdateWithoutTareaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutSubtareasNestedInput
  }

  export type SubTareaUncheckedUpdateWithoutTareaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type SubTareaUncheckedUpdateManyWithoutTareaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastStatusChanged?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: StringFieldUpdateOperationsInput | string
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