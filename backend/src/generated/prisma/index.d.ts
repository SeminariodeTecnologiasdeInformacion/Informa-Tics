
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
 * Model Rol
 * 
 */
export type Rol = $Result.DefaultSelection<Prisma.$RolPayload>
/**
 * Model Permiso
 * 
 */
export type Permiso = $Result.DefaultSelection<Prisma.$PermisoPayload>
/**
 * Model PermisoPorRol
 * 
 */
export type PermisoPorRol = $Result.DefaultSelection<Prisma.$PermisoPorRolPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Platillo
 * 
 */
export type Platillo = $Result.DefaultSelection<Prisma.$PlatilloPayload>
/**
 * Model HistorialModificacion
 * 
 */
export type HistorialModificacion = $Result.DefaultSelection<Prisma.$HistorialModificacionPayload>
/**
 * Model Orden
 * 
 */
export type Orden = $Result.DefaultSelection<Prisma.$OrdenPayload>
/**
 * Model OrdenItem
 * 
 */
export type OrdenItem = $Result.DefaultSelection<Prisma.$OrdenItemPayload>
/**
 * Model CocinaChef
 * 
 */
export type CocinaChef = $Result.DefaultSelection<Prisma.$CocinaChefPayload>

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.rol`: Exposes CRUD operations for the **Rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.RolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permiso`: Exposes CRUD operations for the **Permiso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permisos
    * const permisos = await prisma.permiso.findMany()
    * ```
    */
  get permiso(): Prisma.PermisoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permisoPorRol`: Exposes CRUD operations for the **PermisoPorRol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PermisoPorRols
    * const permisoPorRols = await prisma.permisoPorRol.findMany()
    * ```
    */
  get permisoPorRol(): Prisma.PermisoPorRolDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.platillo`: Exposes CRUD operations for the **Platillo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platillos
    * const platillos = await prisma.platillo.findMany()
    * ```
    */
  get platillo(): Prisma.PlatilloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historialModificacion`: Exposes CRUD operations for the **HistorialModificacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistorialModificacions
    * const historialModificacions = await prisma.historialModificacion.findMany()
    * ```
    */
  get historialModificacion(): Prisma.HistorialModificacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orden`: Exposes CRUD operations for the **Orden** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ordens
    * const ordens = await prisma.orden.findMany()
    * ```
    */
  get orden(): Prisma.OrdenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ordenItem`: Exposes CRUD operations for the **OrdenItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrdenItems
    * const ordenItems = await prisma.ordenItem.findMany()
    * ```
    */
  get ordenItem(): Prisma.OrdenItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cocinaChef`: Exposes CRUD operations for the **CocinaChef** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CocinaChefs
    * const cocinaChefs = await prisma.cocinaChef.findMany()
    * ```
    */
  get cocinaChef(): Prisma.CocinaChefDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    Rol: 'Rol',
    Permiso: 'Permiso',
    PermisoPorRol: 'PermisoPorRol',
    Categoria: 'Categoria',
    Platillo: 'Platillo',
    HistorialModificacion: 'HistorialModificacion',
    Orden: 'Orden',
    OrdenItem: 'OrdenItem',
    CocinaChef: 'CocinaChef'
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
      modelProps: "usuario" | "rol" | "permiso" | "permisoPorRol" | "categoria" | "platillo" | "historialModificacion" | "orden" | "ordenItem" | "cocinaChef"
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
      Rol: {
        payload: Prisma.$RolPayload<ExtArgs>
        fields: Prisma.RolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findFirst: {
            args: Prisma.RolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          findMany: {
            args: Prisma.RolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          create: {
            args: Prisma.RolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          createMany: {
            args: Prisma.RolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          delete: {
            args: Prisma.RolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          update: {
            args: Prisma.RolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          deleteMany: {
            args: Prisma.RolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>[]
          }
          upsert: {
            args: Prisma.RolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.RolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      Permiso: {
        payload: Prisma.$PermisoPayload<ExtArgs>
        fields: Prisma.PermisoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermisoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermisoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findFirst: {
            args: Prisma.PermisoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermisoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          findMany: {
            args: Prisma.PermisoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          create: {
            args: Prisma.PermisoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          createMany: {
            args: Prisma.PermisoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermisoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          delete: {
            args: Prisma.PermisoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          update: {
            args: Prisma.PermisoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          deleteMany: {
            args: Prisma.PermisoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermisoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermisoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>[]
          }
          upsert: {
            args: Prisma.PermisoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPayload>
          }
          aggregate: {
            args: Prisma.PermisoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermiso>
          }
          groupBy: {
            args: Prisma.PermisoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermisoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermisoCountArgs<ExtArgs>
            result: $Utils.Optional<PermisoCountAggregateOutputType> | number
          }
        }
      }
      PermisoPorRol: {
        payload: Prisma.$PermisoPorRolPayload<ExtArgs>
        fields: Prisma.PermisoPorRolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermisoPorRolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPorRolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermisoPorRolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPorRolPayload>
          }
          findFirst: {
            args: Prisma.PermisoPorRolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPorRolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermisoPorRolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPorRolPayload>
          }
          findMany: {
            args: Prisma.PermisoPorRolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPorRolPayload>[]
          }
          create: {
            args: Prisma.PermisoPorRolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPorRolPayload>
          }
          createMany: {
            args: Prisma.PermisoPorRolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermisoPorRolCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPorRolPayload>[]
          }
          delete: {
            args: Prisma.PermisoPorRolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPorRolPayload>
          }
          update: {
            args: Prisma.PermisoPorRolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPorRolPayload>
          }
          deleteMany: {
            args: Prisma.PermisoPorRolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermisoPorRolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermisoPorRolUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPorRolPayload>[]
          }
          upsert: {
            args: Prisma.PermisoPorRolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermisoPorRolPayload>
          }
          aggregate: {
            args: Prisma.PermisoPorRolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermisoPorRol>
          }
          groupBy: {
            args: Prisma.PermisoPorRolGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermisoPorRolGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermisoPorRolCountArgs<ExtArgs>
            result: $Utils.Optional<PermisoPorRolCountAggregateOutputType> | number
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
      Platillo: {
        payload: Prisma.$PlatilloPayload<ExtArgs>
        fields: Prisma.PlatilloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatilloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatilloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatilloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatilloPayload>
          }
          findFirst: {
            args: Prisma.PlatilloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatilloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatilloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatilloPayload>
          }
          findMany: {
            args: Prisma.PlatilloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatilloPayload>[]
          }
          create: {
            args: Prisma.PlatilloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatilloPayload>
          }
          createMany: {
            args: Prisma.PlatilloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatilloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatilloPayload>[]
          }
          delete: {
            args: Prisma.PlatilloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatilloPayload>
          }
          update: {
            args: Prisma.PlatilloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatilloPayload>
          }
          deleteMany: {
            args: Prisma.PlatilloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatilloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatilloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatilloPayload>[]
          }
          upsert: {
            args: Prisma.PlatilloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatilloPayload>
          }
          aggregate: {
            args: Prisma.PlatilloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatillo>
          }
          groupBy: {
            args: Prisma.PlatilloGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatilloGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatilloCountArgs<ExtArgs>
            result: $Utils.Optional<PlatilloCountAggregateOutputType> | number
          }
        }
      }
      HistorialModificacion: {
        payload: Prisma.$HistorialModificacionPayload<ExtArgs>
        fields: Prisma.HistorialModificacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistorialModificacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialModificacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistorialModificacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialModificacionPayload>
          }
          findFirst: {
            args: Prisma.HistorialModificacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialModificacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistorialModificacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialModificacionPayload>
          }
          findMany: {
            args: Prisma.HistorialModificacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialModificacionPayload>[]
          }
          create: {
            args: Prisma.HistorialModificacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialModificacionPayload>
          }
          createMany: {
            args: Prisma.HistorialModificacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistorialModificacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialModificacionPayload>[]
          }
          delete: {
            args: Prisma.HistorialModificacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialModificacionPayload>
          }
          update: {
            args: Prisma.HistorialModificacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialModificacionPayload>
          }
          deleteMany: {
            args: Prisma.HistorialModificacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistorialModificacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistorialModificacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialModificacionPayload>[]
          }
          upsert: {
            args: Prisma.HistorialModificacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistorialModificacionPayload>
          }
          aggregate: {
            args: Prisma.HistorialModificacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorialModificacion>
          }
          groupBy: {
            args: Prisma.HistorialModificacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistorialModificacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistorialModificacionCountArgs<ExtArgs>
            result: $Utils.Optional<HistorialModificacionCountAggregateOutputType> | number
          }
        }
      }
      Orden: {
        payload: Prisma.$OrdenPayload<ExtArgs>
        fields: Prisma.OrdenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          findFirst: {
            args: Prisma.OrdenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          findMany: {
            args: Prisma.OrdenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>[]
          }
          create: {
            args: Prisma.OrdenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          createMany: {
            args: Prisma.OrdenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>[]
          }
          delete: {
            args: Prisma.OrdenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          update: {
            args: Prisma.OrdenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          deleteMany: {
            args: Prisma.OrdenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>[]
          }
          upsert: {
            args: Prisma.OrdenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenPayload>
          }
          aggregate: {
            args: Prisma.OrdenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrden>
          }
          groupBy: {
            args: Prisma.OrdenGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdenGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdenCountArgs<ExtArgs>
            result: $Utils.Optional<OrdenCountAggregateOutputType> | number
          }
        }
      }
      OrdenItem: {
        payload: Prisma.$OrdenItemPayload<ExtArgs>
        fields: Prisma.OrdenItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdenItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdenItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>
          }
          findFirst: {
            args: Prisma.OrdenItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdenItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>
          }
          findMany: {
            args: Prisma.OrdenItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>[]
          }
          create: {
            args: Prisma.OrdenItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>
          }
          createMany: {
            args: Prisma.OrdenItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdenItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>[]
          }
          delete: {
            args: Prisma.OrdenItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>
          }
          update: {
            args: Prisma.OrdenItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>
          }
          deleteMany: {
            args: Prisma.OrdenItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdenItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdenItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>[]
          }
          upsert: {
            args: Prisma.OrdenItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdenItemPayload>
          }
          aggregate: {
            args: Prisma.OrdenItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrdenItem>
          }
          groupBy: {
            args: Prisma.OrdenItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdenItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdenItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrdenItemCountAggregateOutputType> | number
          }
        }
      }
      CocinaChef: {
        payload: Prisma.$CocinaChefPayload<ExtArgs>
        fields: Prisma.CocinaChefFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CocinaChefFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CocinaChefPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CocinaChefFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CocinaChefPayload>
          }
          findFirst: {
            args: Prisma.CocinaChefFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CocinaChefPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CocinaChefFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CocinaChefPayload>
          }
          findMany: {
            args: Prisma.CocinaChefFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CocinaChefPayload>[]
          }
          create: {
            args: Prisma.CocinaChefCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CocinaChefPayload>
          }
          createMany: {
            args: Prisma.CocinaChefCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CocinaChefCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CocinaChefPayload>[]
          }
          delete: {
            args: Prisma.CocinaChefDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CocinaChefPayload>
          }
          update: {
            args: Prisma.CocinaChefUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CocinaChefPayload>
          }
          deleteMany: {
            args: Prisma.CocinaChefDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CocinaChefUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CocinaChefUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CocinaChefPayload>[]
          }
          upsert: {
            args: Prisma.CocinaChefUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CocinaChefPayload>
          }
          aggregate: {
            args: Prisma.CocinaChefAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCocinaChef>
          }
          groupBy: {
            args: Prisma.CocinaChefGroupByArgs<ExtArgs>
            result: $Utils.Optional<CocinaChefGroupByOutputType>[]
          }
          count: {
            args: Prisma.CocinaChefCountArgs<ExtArgs>
            result: $Utils.Optional<CocinaChefCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    rol?: RolOmit
    permiso?: PermisoOmit
    permisoPorRol?: PermisoPorRolOmit
    categoria?: CategoriaOmit
    platillo?: PlatilloOmit
    historialModificacion?: HistorialModificacionOmit
    orden?: OrdenOmit
    ordenItem?: OrdenItemOmit
    cocinaChef?: CocinaChefOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    historialModificaciones: number
    historialResponsable: number
    ordenesMesero: number
    itemsAsignados: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historialModificaciones?: boolean | UsuarioCountOutputTypeCountHistorialModificacionesArgs
    historialResponsable?: boolean | UsuarioCountOutputTypeCountHistorialResponsableArgs
    ordenesMesero?: boolean | UsuarioCountOutputTypeCountOrdenesMeseroArgs
    itemsAsignados?: boolean | UsuarioCountOutputTypeCountItemsAsignadosArgs
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
  export type UsuarioCountOutputTypeCountHistorialModificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialModificacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountHistorialResponsableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialModificacionWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountOrdenesMeseroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountItemsAsignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenItemWhereInput
  }


  /**
   * Count Type RolCountOutputType
   */

  export type RolCountOutputType = {
    usuarios: number
    permisos: number
  }

  export type RolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs
    permisos?: boolean | RolCountOutputTypeCountPermisosArgs
  }

  // Custom InputTypes
  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolCountOutputType
     */
    select?: RolCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }

  /**
   * RolCountOutputType without action
   */
  export type RolCountOutputTypeCountPermisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermisoPorRolWhereInput
  }


  /**
   * Count Type PermisoCountOutputType
   */

  export type PermisoCountOutputType = {
    roles: number
  }

  export type PermisoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermisoCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermisoCountOutputType without action
   */
  export type PermisoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoCountOutputType
     */
    select?: PermisoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermisoCountOutputType without action
   */
  export type PermisoCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermisoPorRolWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    platillos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platillos?: boolean | CategoriaCountOutputTypeCountPlatillosArgs
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
  export type CategoriaCountOutputTypeCountPlatillosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatilloWhereInput
  }


  /**
   * Count Type PlatilloCountOutputType
   */

  export type PlatilloCountOutputType = {
    historialModificaciones: number
  }

  export type PlatilloCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historialModificaciones?: boolean | PlatilloCountOutputTypeCountHistorialModificacionesArgs
  }

  // Custom InputTypes
  /**
   * PlatilloCountOutputType without action
   */
  export type PlatilloCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlatilloCountOutputType
     */
    select?: PlatilloCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlatilloCountOutputType without action
   */
  export type PlatilloCountOutputTypeCountHistorialModificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialModificacionWhereInput
  }


  /**
   * Count Type OrdenCountOutputType
   */

  export type OrdenCountOutputType = {
    items: number
  }

  export type OrdenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | OrdenCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * OrdenCountOutputType without action
   */
  export type OrdenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenCountOutputType
     */
    select?: OrdenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdenCountOutputType without action
   */
  export type OrdenCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenItemWhereInput
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
    id: number | null
    rolId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    rolId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    usuario: string | null
    correo: string | null
    contrasena: string | null
    estado: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
    rolId: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    usuario: string | null
    correo: string | null
    contrasena: string | null
    estado: boolean | null
    creadoEn: Date | null
    actualizadoEn: Date | null
    rolId: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    usuario: number
    correo: number
    contrasena: number
    estado: number
    creadoEn: number
    actualizadoEn: number
    rolId: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    rolId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    rolId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    usuario?: true
    correo?: true
    contrasena?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
    rolId?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    usuario?: true
    correo?: true
    contrasena?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
    rolId?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    usuario?: true
    correo?: true
    contrasena?: true
    estado?: true
    creadoEn?: true
    actualizadoEn?: true
    rolId?: true
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
    id: number
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado: boolean
    creadoEn: Date
    actualizadoEn: Date
    rolId: number
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
    nombre?: boolean
    usuario?: boolean
    correo?: boolean
    contrasena?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    rolId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
    historialModificaciones?: boolean | Usuario$historialModificacionesArgs<ExtArgs>
    historialResponsable?: boolean | Usuario$historialResponsableArgs<ExtArgs>
    ordenesMesero?: boolean | Usuario$ordenesMeseroArgs<ExtArgs>
    itemsAsignados?: boolean | Usuario$itemsAsignadosArgs<ExtArgs>
    cocinaEstado?: boolean | Usuario$cocinaEstadoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuario?: boolean
    correo?: boolean
    contrasena?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    rolId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuario?: boolean
    correo?: boolean
    contrasena?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    rolId?: boolean
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    usuario?: boolean
    correo?: boolean
    contrasena?: boolean
    estado?: boolean
    creadoEn?: boolean
    actualizadoEn?: boolean
    rolId?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "usuario" | "correo" | "contrasena" | "estado" | "creadoEn" | "actualizadoEn" | "rolId", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
    historialModificaciones?: boolean | Usuario$historialModificacionesArgs<ExtArgs>
    historialResponsable?: boolean | Usuario$historialResponsableArgs<ExtArgs>
    ordenesMesero?: boolean | Usuario$ordenesMeseroArgs<ExtArgs>
    itemsAsignados?: boolean | Usuario$itemsAsignadosArgs<ExtArgs>
    cocinaEstado?: boolean | Usuario$cocinaEstadoArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      rol: Prisma.$RolPayload<ExtArgs>
      historialModificaciones: Prisma.$HistorialModificacionPayload<ExtArgs>[]
      historialResponsable: Prisma.$HistorialModificacionPayload<ExtArgs>[]
      ordenesMesero: Prisma.$OrdenPayload<ExtArgs>[]
      itemsAsignados: Prisma.$OrdenItemPayload<ExtArgs>[]
      cocinaEstado: Prisma.$CocinaChefPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      usuario: string
      correo: string
      contrasena: string
      estado: boolean
      creadoEn: Date
      actualizadoEn: Date
      rolId: number
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
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    historialModificaciones<T extends Usuario$historialModificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$historialModificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialModificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    historialResponsable<T extends Usuario$historialResponsableArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$historialResponsableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialModificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ordenesMesero<T extends Usuario$ordenesMeseroArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$ordenesMeseroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    itemsAsignados<T extends Usuario$itemsAsignadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$itemsAsignadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cocinaEstado<T extends Usuario$cocinaEstadoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$cocinaEstadoArgs<ExtArgs>>): Prisma__CocinaChefClient<$Result.GetResult<Prisma.$CocinaChefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly usuario: FieldRef<"Usuario", 'String'>
    readonly correo: FieldRef<"Usuario", 'String'>
    readonly contrasena: FieldRef<"Usuario", 'String'>
    readonly estado: FieldRef<"Usuario", 'Boolean'>
    readonly creadoEn: FieldRef<"Usuario", 'DateTime'>
    readonly actualizadoEn: FieldRef<"Usuario", 'DateTime'>
    readonly rolId: FieldRef<"Usuario", 'Int'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Usuario.historialModificaciones
   */
  export type Usuario$historialModificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionInclude<ExtArgs> | null
    where?: HistorialModificacionWhereInput
    orderBy?: HistorialModificacionOrderByWithRelationInput | HistorialModificacionOrderByWithRelationInput[]
    cursor?: HistorialModificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistorialModificacionScalarFieldEnum | HistorialModificacionScalarFieldEnum[]
  }

  /**
   * Usuario.historialResponsable
   */
  export type Usuario$historialResponsableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionInclude<ExtArgs> | null
    where?: HistorialModificacionWhereInput
    orderBy?: HistorialModificacionOrderByWithRelationInput | HistorialModificacionOrderByWithRelationInput[]
    cursor?: HistorialModificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistorialModificacionScalarFieldEnum | HistorialModificacionScalarFieldEnum[]
  }

  /**
   * Usuario.ordenesMesero
   */
  export type Usuario$ordenesMeseroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    where?: OrdenWhereInput
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    cursor?: OrdenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Usuario.itemsAsignados
   */
  export type Usuario$itemsAsignadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    where?: OrdenItemWhereInput
    orderBy?: OrdenItemOrderByWithRelationInput | OrdenItemOrderByWithRelationInput[]
    cursor?: OrdenItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenItemScalarFieldEnum | OrdenItemScalarFieldEnum[]
  }

  /**
   * Usuario.cocinaEstado
   */
  export type Usuario$cocinaEstadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CocinaChef
     */
    select?: CocinaChefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CocinaChef
     */
    omit?: CocinaChefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CocinaChefInclude<ExtArgs> | null
    where?: CocinaChefWhereInput
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
   * Model Rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id: number | null
  }

  export type RolSumAggregateOutputType = {
    id: number | null
  }

  export type RolMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type RolMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id?: true
  }

  export type RolSumAggregateInputType = {
    id?: true
  }

  export type RolMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rol to aggregate.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type RolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolWhereInput
    orderBy?: RolOrderByWithAggregationInput | RolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: RolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: number
    nombre: string
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type RolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    permisos?: boolean | Rol$permisosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rol"]>

  export type RolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>

  export type RolSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type RolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["rol"]>
  export type RolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Rol$usuariosArgs<ExtArgs>
    permisos?: boolean | Rol$permisosArgs<ExtArgs>
    _count?: boolean | RolCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rol"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
      permisos: Prisma.$PermisoPorRolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = $Result.GetResult<Prisma.$RolPayload, S>

  type RolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface RolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rol'], meta: { name: 'Rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {RolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolFindUniqueArgs>(args: SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolFindFirstArgs>(args?: SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolFindManyArgs>(args?: SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {RolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends RolCreateArgs>(args: SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {RolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolCreateManyArgs>(args?: SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rols and returns the data saved in the database.
     * @param {RolCreateManyAndReturnArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rol.
     * @param {RolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends RolDeleteArgs>(args: SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {RolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolUpdateArgs>(args: SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {RolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolDeleteManyArgs>(args?: SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolUpdateManyArgs>(args: SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols and returns the data updated in the database.
     * @param {RolUpdateManyAndReturnArgs} args - Arguments to update many Rols.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rols and only return the `id`
     * const rolWithIdOnly = await prisma.rol.updateManyAndReturn({
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
    updateManyAndReturn<T extends RolUpdateManyAndReturnArgs>(args: SelectSubset<T, RolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rol.
     * @param {RolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends RolUpsertArgs>(args: SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends RolCountArgs>(
      args?: Subset<T, RolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolGroupByArgs} args - Group by arguments.
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
      T extends RolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolGroupByArgs['orderBy'] }
        : { orderBy?: RolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rol model
   */
  readonly fields: RolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends Rol$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permisos<T extends Rol$permisosArgs<ExtArgs> = {}>(args?: Subset<T, Rol$permisosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPorRolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rol model
   */
  interface RolFieldRefs {
    readonly id: FieldRef<"Rol", 'Int'>
    readonly nombre: FieldRef<"Rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rol findUnique
   */
  export type RolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findUniqueOrThrow
   */
  export type RolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol findFirst
   */
  export type RolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findFirstOrThrow
   */
  export type RolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rol to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol findMany
   */
  export type RolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter, which Rols to fetch.
     */
    where?: RolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rols to fetch.
     */
    orderBy?: RolOrderByWithRelationInput | RolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rols.
     */
    cursor?: RolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * Rol create
   */
  export type RolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to create a Rol.
     */
    data: XOR<RolCreateInput, RolUncheckedCreateInput>
  }

  /**
   * Rol createMany
   */
  export type RolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol createManyAndReturn
   */
  export type RolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to create many Rols.
     */
    data: RolCreateManyInput | RolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rol update
   */
  export type RolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The data needed to update a Rol.
     */
    data: XOR<RolUpdateInput, RolUncheckedUpdateInput>
    /**
     * Choose, which Rol to update.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol updateMany
   */
  export type RolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol updateManyAndReturn
   */
  export type RolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * The data used to update Rols.
     */
    data: XOR<RolUpdateManyMutationInput, RolUncheckedUpdateManyInput>
    /**
     * Filter which Rols to update
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to update.
     */
    limit?: number
  }

  /**
   * Rol upsert
   */
  export type RolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * The filter to search for the Rol to update in case it exists.
     */
    where: RolWhereUniqueInput
    /**
     * In case the Rol found by the `where` argument doesn't exist, create a new Rol with this data.
     */
    create: XOR<RolCreateInput, RolUncheckedCreateInput>
    /**
     * In case the Rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolUpdateInput, RolUncheckedUpdateInput>
  }

  /**
   * Rol delete
   */
  export type RolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
    /**
     * Filter which Rol to delete.
     */
    where: RolWhereUniqueInput
  }

  /**
   * Rol deleteMany
   */
  export type RolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rols to delete
     */
    where?: RolWhereInput
    /**
     * Limit how many Rols to delete.
     */
    limit?: number
  }

  /**
   * Rol.usuarios
   */
  export type Rol$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Rol.permisos
   */
  export type Rol$permisosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoPorRol
     */
    select?: PermisoPorRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermisoPorRol
     */
    omit?: PermisoPorRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoPorRolInclude<ExtArgs> | null
    where?: PermisoPorRolWhereInput
    orderBy?: PermisoPorRolOrderByWithRelationInput | PermisoPorRolOrderByWithRelationInput[]
    cursor?: PermisoPorRolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermisoPorRolScalarFieldEnum | PermisoPorRolScalarFieldEnum[]
  }

  /**
   * Rol without action
   */
  export type RolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rol
     */
    select?: RolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rol
     */
    omit?: RolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolInclude<ExtArgs> | null
  }


  /**
   * Model Permiso
   */

  export type AggregatePermiso = {
    _count: PermisoCountAggregateOutputType | null
    _avg: PermisoAvgAggregateOutputType | null
    _sum: PermisoSumAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  export type PermisoAvgAggregateOutputType = {
    id: number | null
  }

  export type PermisoSumAggregateOutputType = {
    id: number | null
  }

  export type PermisoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type PermisoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type PermisoCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type PermisoAvgAggregateInputType = {
    id?: true
  }

  export type PermisoSumAggregateInputType = {
    id?: true
  }

  export type PermisoMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type PermisoMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type PermisoCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type PermisoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permiso to aggregate.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permisos
    **/
    _count?: true | PermisoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermisoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermisoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermisoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermisoMaxAggregateInputType
  }

  export type GetPermisoAggregateType<T extends PermisoAggregateArgs> = {
        [P in keyof T & keyof AggregatePermiso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermiso[P]>
      : GetScalarType<T[P], AggregatePermiso[P]>
  }




  export type PermisoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermisoWhereInput
    orderBy?: PermisoOrderByWithAggregationInput | PermisoOrderByWithAggregationInput[]
    by: PermisoScalarFieldEnum[] | PermisoScalarFieldEnum
    having?: PermisoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermisoCountAggregateInputType | true
    _avg?: PermisoAvgAggregateInputType
    _sum?: PermisoSumAggregateInputType
    _min?: PermisoMinAggregateInputType
    _max?: PermisoMaxAggregateInputType
  }

  export type PermisoGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    _count: PermisoCountAggregateOutputType | null
    _avg: PermisoAvgAggregateOutputType | null
    _sum: PermisoSumAggregateOutputType | null
    _min: PermisoMinAggregateOutputType | null
    _max: PermisoMaxAggregateOutputType | null
  }

  type GetPermisoGroupByPayload<T extends PermisoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermisoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermisoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermisoGroupByOutputType[P]>
            : GetScalarType<T[P], PermisoGroupByOutputType[P]>
        }
      >
    >


  export type PermisoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    roles?: boolean | Permiso$rolesArgs<ExtArgs>
    _count?: boolean | PermisoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["permiso"]>

  export type PermisoSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type PermisoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion", ExtArgs["result"]["permiso"]>
  export type PermisoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Permiso$rolesArgs<ExtArgs>
    _count?: boolean | PermisoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermisoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermisoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermisoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permiso"
    objects: {
      roles: Prisma.$PermisoPorRolPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["permiso"]>
    composites: {}
  }

  type PermisoGetPayload<S extends boolean | null | undefined | PermisoDefaultArgs> = $Result.GetResult<Prisma.$PermisoPayload, S>

  type PermisoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermisoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermisoCountAggregateInputType | true
    }

  export interface PermisoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permiso'], meta: { name: 'Permiso' } }
    /**
     * Find zero or one Permiso that matches the filter.
     * @param {PermisoFindUniqueArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermisoFindUniqueArgs>(args: SelectSubset<T, PermisoFindUniqueArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permiso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermisoFindUniqueOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermisoFindUniqueOrThrowArgs>(args: SelectSubset<T, PermisoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permiso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermisoFindFirstArgs>(args?: SelectSubset<T, PermisoFindFirstArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permiso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindFirstOrThrowArgs} args - Arguments to find a Permiso
     * @example
     * // Get one Permiso
     * const permiso = await prisma.permiso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermisoFindFirstOrThrowArgs>(args?: SelectSubset<T, PermisoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permisos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permisos
     * const permisos = await prisma.permiso.findMany()
     * 
     * // Get first 10 Permisos
     * const permisos = await prisma.permiso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permisoWithIdOnly = await prisma.permiso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermisoFindManyArgs>(args?: SelectSubset<T, PermisoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permiso.
     * @param {PermisoCreateArgs} args - Arguments to create a Permiso.
     * @example
     * // Create one Permiso
     * const Permiso = await prisma.permiso.create({
     *   data: {
     *     // ... data to create a Permiso
     *   }
     * })
     * 
     */
    create<T extends PermisoCreateArgs>(args: SelectSubset<T, PermisoCreateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permisos.
     * @param {PermisoCreateManyArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermisoCreateManyArgs>(args?: SelectSubset<T, PermisoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permisos and returns the data saved in the database.
     * @param {PermisoCreateManyAndReturnArgs} args - Arguments to create many Permisos.
     * @example
     * // Create many Permisos
     * const permiso = await prisma.permiso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permisos and only return the `id`
     * const permisoWithIdOnly = await prisma.permiso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermisoCreateManyAndReturnArgs>(args?: SelectSubset<T, PermisoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permiso.
     * @param {PermisoDeleteArgs} args - Arguments to delete one Permiso.
     * @example
     * // Delete one Permiso
     * const Permiso = await prisma.permiso.delete({
     *   where: {
     *     // ... filter to delete one Permiso
     *   }
     * })
     * 
     */
    delete<T extends PermisoDeleteArgs>(args: SelectSubset<T, PermisoDeleteArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permiso.
     * @param {PermisoUpdateArgs} args - Arguments to update one Permiso.
     * @example
     * // Update one Permiso
     * const permiso = await prisma.permiso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermisoUpdateArgs>(args: SelectSubset<T, PermisoUpdateArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permisos.
     * @param {PermisoDeleteManyArgs} args - Arguments to filter Permisos to delete.
     * @example
     * // Delete a few Permisos
     * const { count } = await prisma.permiso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermisoDeleteManyArgs>(args?: SelectSubset<T, PermisoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permisos
     * const permiso = await prisma.permiso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermisoUpdateManyArgs>(args: SelectSubset<T, PermisoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permisos and returns the data updated in the database.
     * @param {PermisoUpdateManyAndReturnArgs} args - Arguments to update many Permisos.
     * @example
     * // Update many Permisos
     * const permiso = await prisma.permiso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permisos and only return the `id`
     * const permisoWithIdOnly = await prisma.permiso.updateManyAndReturn({
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
    updateManyAndReturn<T extends PermisoUpdateManyAndReturnArgs>(args: SelectSubset<T, PermisoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permiso.
     * @param {PermisoUpsertArgs} args - Arguments to update or create a Permiso.
     * @example
     * // Update or create a Permiso
     * const permiso = await prisma.permiso.upsert({
     *   create: {
     *     // ... data to create a Permiso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permiso we want to update
     *   }
     * })
     */
    upsert<T extends PermisoUpsertArgs>(args: SelectSubset<T, PermisoUpsertArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permisos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoCountArgs} args - Arguments to filter Permisos to count.
     * @example
     * // Count the number of Permisos
     * const count = await prisma.permiso.count({
     *   where: {
     *     // ... the filter for the Permisos we want to count
     *   }
     * })
    **/
    count<T extends PermisoCountArgs>(
      args?: Subset<T, PermisoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermisoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermisoAggregateArgs>(args: Subset<T, PermisoAggregateArgs>): Prisma.PrismaPromise<GetPermisoAggregateType<T>>

    /**
     * Group by Permiso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoGroupByArgs} args - Group by arguments.
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
      T extends PermisoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermisoGroupByArgs['orderBy'] }
        : { orderBy?: PermisoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermisoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermisoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permiso model
   */
  readonly fields: PermisoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permiso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermisoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Permiso$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permiso$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPorRolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Permiso model
   */
  interface PermisoFieldRefs {
    readonly id: FieldRef<"Permiso", 'Int'>
    readonly nombre: FieldRef<"Permiso", 'String'>
    readonly descripcion: FieldRef<"Permiso", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permiso findUnique
   */
  export type PermisoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findUniqueOrThrow
   */
  export type PermisoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso findFirst
   */
  export type PermisoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findFirstOrThrow
   */
  export type PermisoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permiso to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permisos.
     */
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso findMany
   */
  export type PermisoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter, which Permisos to fetch.
     */
    where?: PermisoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permisos to fetch.
     */
    orderBy?: PermisoOrderByWithRelationInput | PermisoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permisos.
     */
    cursor?: PermisoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permisos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permisos.
     */
    skip?: number
    distinct?: PermisoScalarFieldEnum | PermisoScalarFieldEnum[]
  }

  /**
   * Permiso create
   */
  export type PermisoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to create a Permiso.
     */
    data: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
  }

  /**
   * Permiso createMany
   */
  export type PermisoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permiso createManyAndReturn
   */
  export type PermisoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * The data used to create many Permisos.
     */
    data: PermisoCreateManyInput | PermisoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permiso update
   */
  export type PermisoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The data needed to update a Permiso.
     */
    data: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
    /**
     * Choose, which Permiso to update.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso updateMany
   */
  export type PermisoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
  }

  /**
   * Permiso updateManyAndReturn
   */
  export type PermisoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * The data used to update Permisos.
     */
    data: XOR<PermisoUpdateManyMutationInput, PermisoUncheckedUpdateManyInput>
    /**
     * Filter which Permisos to update
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to update.
     */
    limit?: number
  }

  /**
   * Permiso upsert
   */
  export type PermisoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * The filter to search for the Permiso to update in case it exists.
     */
    where: PermisoWhereUniqueInput
    /**
     * In case the Permiso found by the `where` argument doesn't exist, create a new Permiso with this data.
     */
    create: XOR<PermisoCreateInput, PermisoUncheckedCreateInput>
    /**
     * In case the Permiso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermisoUpdateInput, PermisoUncheckedUpdateInput>
  }

  /**
   * Permiso delete
   */
  export type PermisoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
    /**
     * Filter which Permiso to delete.
     */
    where: PermisoWhereUniqueInput
  }

  /**
   * Permiso deleteMany
   */
  export type PermisoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permisos to delete
     */
    where?: PermisoWhereInput
    /**
     * Limit how many Permisos to delete.
     */
    limit?: number
  }

  /**
   * Permiso.roles
   */
  export type Permiso$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoPorRol
     */
    select?: PermisoPorRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermisoPorRol
     */
    omit?: PermisoPorRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoPorRolInclude<ExtArgs> | null
    where?: PermisoPorRolWhereInput
    orderBy?: PermisoPorRolOrderByWithRelationInput | PermisoPorRolOrderByWithRelationInput[]
    cursor?: PermisoPorRolWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermisoPorRolScalarFieldEnum | PermisoPorRolScalarFieldEnum[]
  }

  /**
   * Permiso without action
   */
  export type PermisoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permiso
     */
    select?: PermisoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permiso
     */
    omit?: PermisoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoInclude<ExtArgs> | null
  }


  /**
   * Model PermisoPorRol
   */

  export type AggregatePermisoPorRol = {
    _count: PermisoPorRolCountAggregateOutputType | null
    _avg: PermisoPorRolAvgAggregateOutputType | null
    _sum: PermisoPorRolSumAggregateOutputType | null
    _min: PermisoPorRolMinAggregateOutputType | null
    _max: PermisoPorRolMaxAggregateOutputType | null
  }

  export type PermisoPorRolAvgAggregateOutputType = {
    id: number | null
    permisoId: number | null
    rolId: number | null
  }

  export type PermisoPorRolSumAggregateOutputType = {
    id: number | null
    permisoId: number | null
    rolId: number | null
  }

  export type PermisoPorRolMinAggregateOutputType = {
    id: number | null
    permisoId: number | null
    rolId: number | null
  }

  export type PermisoPorRolMaxAggregateOutputType = {
    id: number | null
    permisoId: number | null
    rolId: number | null
  }

  export type PermisoPorRolCountAggregateOutputType = {
    id: number
    permisoId: number
    rolId: number
    _all: number
  }


  export type PermisoPorRolAvgAggregateInputType = {
    id?: true
    permisoId?: true
    rolId?: true
  }

  export type PermisoPorRolSumAggregateInputType = {
    id?: true
    permisoId?: true
    rolId?: true
  }

  export type PermisoPorRolMinAggregateInputType = {
    id?: true
    permisoId?: true
    rolId?: true
  }

  export type PermisoPorRolMaxAggregateInputType = {
    id?: true
    permisoId?: true
    rolId?: true
  }

  export type PermisoPorRolCountAggregateInputType = {
    id?: true
    permisoId?: true
    rolId?: true
    _all?: true
  }

  export type PermisoPorRolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermisoPorRol to aggregate.
     */
    where?: PermisoPorRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermisoPorRols to fetch.
     */
    orderBy?: PermisoPorRolOrderByWithRelationInput | PermisoPorRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermisoPorRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermisoPorRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermisoPorRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PermisoPorRols
    **/
    _count?: true | PermisoPorRolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermisoPorRolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermisoPorRolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermisoPorRolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermisoPorRolMaxAggregateInputType
  }

  export type GetPermisoPorRolAggregateType<T extends PermisoPorRolAggregateArgs> = {
        [P in keyof T & keyof AggregatePermisoPorRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermisoPorRol[P]>
      : GetScalarType<T[P], AggregatePermisoPorRol[P]>
  }




  export type PermisoPorRolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermisoPorRolWhereInput
    orderBy?: PermisoPorRolOrderByWithAggregationInput | PermisoPorRolOrderByWithAggregationInput[]
    by: PermisoPorRolScalarFieldEnum[] | PermisoPorRolScalarFieldEnum
    having?: PermisoPorRolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermisoPorRolCountAggregateInputType | true
    _avg?: PermisoPorRolAvgAggregateInputType
    _sum?: PermisoPorRolSumAggregateInputType
    _min?: PermisoPorRolMinAggregateInputType
    _max?: PermisoPorRolMaxAggregateInputType
  }

  export type PermisoPorRolGroupByOutputType = {
    id: number
    permisoId: number
    rolId: number
    _count: PermisoPorRolCountAggregateOutputType | null
    _avg: PermisoPorRolAvgAggregateOutputType | null
    _sum: PermisoPorRolSumAggregateOutputType | null
    _min: PermisoPorRolMinAggregateOutputType | null
    _max: PermisoPorRolMaxAggregateOutputType | null
  }

  type GetPermisoPorRolGroupByPayload<T extends PermisoPorRolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermisoPorRolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermisoPorRolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermisoPorRolGroupByOutputType[P]>
            : GetScalarType<T[P], PermisoPorRolGroupByOutputType[P]>
        }
      >
    >


  export type PermisoPorRolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    permisoId?: boolean
    rolId?: boolean
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permisoPorRol"]>

  export type PermisoPorRolSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    permisoId?: boolean
    rolId?: boolean
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permisoPorRol"]>

  export type PermisoPorRolSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    permisoId?: boolean
    rolId?: boolean
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permisoPorRol"]>

  export type PermisoPorRolSelectScalar = {
    id?: boolean
    permisoId?: boolean
    rolId?: boolean
  }

  export type PermisoPorRolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "permisoId" | "rolId", ExtArgs["result"]["permisoPorRol"]>
  export type PermisoPorRolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type PermisoPorRolIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }
  export type PermisoPorRolIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permiso?: boolean | PermisoDefaultArgs<ExtArgs>
    rol?: boolean | RolDefaultArgs<ExtArgs>
  }

  export type $PermisoPorRolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PermisoPorRol"
    objects: {
      permiso: Prisma.$PermisoPayload<ExtArgs>
      rol: Prisma.$RolPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      permisoId: number
      rolId: number
    }, ExtArgs["result"]["permisoPorRol"]>
    composites: {}
  }

  type PermisoPorRolGetPayload<S extends boolean | null | undefined | PermisoPorRolDefaultArgs> = $Result.GetResult<Prisma.$PermisoPorRolPayload, S>

  type PermisoPorRolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermisoPorRolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermisoPorRolCountAggregateInputType | true
    }

  export interface PermisoPorRolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PermisoPorRol'], meta: { name: 'PermisoPorRol' } }
    /**
     * Find zero or one PermisoPorRol that matches the filter.
     * @param {PermisoPorRolFindUniqueArgs} args - Arguments to find a PermisoPorRol
     * @example
     * // Get one PermisoPorRol
     * const permisoPorRol = await prisma.permisoPorRol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermisoPorRolFindUniqueArgs>(args: SelectSubset<T, PermisoPorRolFindUniqueArgs<ExtArgs>>): Prisma__PermisoPorRolClient<$Result.GetResult<Prisma.$PermisoPorRolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PermisoPorRol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermisoPorRolFindUniqueOrThrowArgs} args - Arguments to find a PermisoPorRol
     * @example
     * // Get one PermisoPorRol
     * const permisoPorRol = await prisma.permisoPorRol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermisoPorRolFindUniqueOrThrowArgs>(args: SelectSubset<T, PermisoPorRolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermisoPorRolClient<$Result.GetResult<Prisma.$PermisoPorRolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PermisoPorRol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoPorRolFindFirstArgs} args - Arguments to find a PermisoPorRol
     * @example
     * // Get one PermisoPorRol
     * const permisoPorRol = await prisma.permisoPorRol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermisoPorRolFindFirstArgs>(args?: SelectSubset<T, PermisoPorRolFindFirstArgs<ExtArgs>>): Prisma__PermisoPorRolClient<$Result.GetResult<Prisma.$PermisoPorRolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PermisoPorRol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoPorRolFindFirstOrThrowArgs} args - Arguments to find a PermisoPorRol
     * @example
     * // Get one PermisoPorRol
     * const permisoPorRol = await prisma.permisoPorRol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermisoPorRolFindFirstOrThrowArgs>(args?: SelectSubset<T, PermisoPorRolFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermisoPorRolClient<$Result.GetResult<Prisma.$PermisoPorRolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PermisoPorRols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoPorRolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PermisoPorRols
     * const permisoPorRols = await prisma.permisoPorRol.findMany()
     * 
     * // Get first 10 PermisoPorRols
     * const permisoPorRols = await prisma.permisoPorRol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permisoPorRolWithIdOnly = await prisma.permisoPorRol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermisoPorRolFindManyArgs>(args?: SelectSubset<T, PermisoPorRolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPorRolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PermisoPorRol.
     * @param {PermisoPorRolCreateArgs} args - Arguments to create a PermisoPorRol.
     * @example
     * // Create one PermisoPorRol
     * const PermisoPorRol = await prisma.permisoPorRol.create({
     *   data: {
     *     // ... data to create a PermisoPorRol
     *   }
     * })
     * 
     */
    create<T extends PermisoPorRolCreateArgs>(args: SelectSubset<T, PermisoPorRolCreateArgs<ExtArgs>>): Prisma__PermisoPorRolClient<$Result.GetResult<Prisma.$PermisoPorRolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PermisoPorRols.
     * @param {PermisoPorRolCreateManyArgs} args - Arguments to create many PermisoPorRols.
     * @example
     * // Create many PermisoPorRols
     * const permisoPorRol = await prisma.permisoPorRol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermisoPorRolCreateManyArgs>(args?: SelectSubset<T, PermisoPorRolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PermisoPorRols and returns the data saved in the database.
     * @param {PermisoPorRolCreateManyAndReturnArgs} args - Arguments to create many PermisoPorRols.
     * @example
     * // Create many PermisoPorRols
     * const permisoPorRol = await prisma.permisoPorRol.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PermisoPorRols and only return the `id`
     * const permisoPorRolWithIdOnly = await prisma.permisoPorRol.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermisoPorRolCreateManyAndReturnArgs>(args?: SelectSubset<T, PermisoPorRolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPorRolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PermisoPorRol.
     * @param {PermisoPorRolDeleteArgs} args - Arguments to delete one PermisoPorRol.
     * @example
     * // Delete one PermisoPorRol
     * const PermisoPorRol = await prisma.permisoPorRol.delete({
     *   where: {
     *     // ... filter to delete one PermisoPorRol
     *   }
     * })
     * 
     */
    delete<T extends PermisoPorRolDeleteArgs>(args: SelectSubset<T, PermisoPorRolDeleteArgs<ExtArgs>>): Prisma__PermisoPorRolClient<$Result.GetResult<Prisma.$PermisoPorRolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PermisoPorRol.
     * @param {PermisoPorRolUpdateArgs} args - Arguments to update one PermisoPorRol.
     * @example
     * // Update one PermisoPorRol
     * const permisoPorRol = await prisma.permisoPorRol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermisoPorRolUpdateArgs>(args: SelectSubset<T, PermisoPorRolUpdateArgs<ExtArgs>>): Prisma__PermisoPorRolClient<$Result.GetResult<Prisma.$PermisoPorRolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PermisoPorRols.
     * @param {PermisoPorRolDeleteManyArgs} args - Arguments to filter PermisoPorRols to delete.
     * @example
     * // Delete a few PermisoPorRols
     * const { count } = await prisma.permisoPorRol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermisoPorRolDeleteManyArgs>(args?: SelectSubset<T, PermisoPorRolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermisoPorRols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoPorRolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PermisoPorRols
     * const permisoPorRol = await prisma.permisoPorRol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermisoPorRolUpdateManyArgs>(args: SelectSubset<T, PermisoPorRolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PermisoPorRols and returns the data updated in the database.
     * @param {PermisoPorRolUpdateManyAndReturnArgs} args - Arguments to update many PermisoPorRols.
     * @example
     * // Update many PermisoPorRols
     * const permisoPorRol = await prisma.permisoPorRol.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PermisoPorRols and only return the `id`
     * const permisoPorRolWithIdOnly = await prisma.permisoPorRol.updateManyAndReturn({
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
    updateManyAndReturn<T extends PermisoPorRolUpdateManyAndReturnArgs>(args: SelectSubset<T, PermisoPorRolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermisoPorRolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PermisoPorRol.
     * @param {PermisoPorRolUpsertArgs} args - Arguments to update or create a PermisoPorRol.
     * @example
     * // Update or create a PermisoPorRol
     * const permisoPorRol = await prisma.permisoPorRol.upsert({
     *   create: {
     *     // ... data to create a PermisoPorRol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PermisoPorRol we want to update
     *   }
     * })
     */
    upsert<T extends PermisoPorRolUpsertArgs>(args: SelectSubset<T, PermisoPorRolUpsertArgs<ExtArgs>>): Prisma__PermisoPorRolClient<$Result.GetResult<Prisma.$PermisoPorRolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PermisoPorRols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoPorRolCountArgs} args - Arguments to filter PermisoPorRols to count.
     * @example
     * // Count the number of PermisoPorRols
     * const count = await prisma.permisoPorRol.count({
     *   where: {
     *     // ... the filter for the PermisoPorRols we want to count
     *   }
     * })
    **/
    count<T extends PermisoPorRolCountArgs>(
      args?: Subset<T, PermisoPorRolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermisoPorRolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PermisoPorRol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoPorRolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermisoPorRolAggregateArgs>(args: Subset<T, PermisoPorRolAggregateArgs>): Prisma.PrismaPromise<GetPermisoPorRolAggregateType<T>>

    /**
     * Group by PermisoPorRol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermisoPorRolGroupByArgs} args - Group by arguments.
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
      T extends PermisoPorRolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermisoPorRolGroupByArgs['orderBy'] }
        : { orderBy?: PermisoPorRolGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermisoPorRolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermisoPorRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PermisoPorRol model
   */
  readonly fields: PermisoPorRolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PermisoPorRol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermisoPorRolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permiso<T extends PermisoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermisoDefaultArgs<ExtArgs>>): Prisma__PermisoClient<$Result.GetResult<Prisma.$PermisoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rol<T extends RolDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RolDefaultArgs<ExtArgs>>): Prisma__RolClient<$Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PermisoPorRol model
   */
  interface PermisoPorRolFieldRefs {
    readonly id: FieldRef<"PermisoPorRol", 'Int'>
    readonly permisoId: FieldRef<"PermisoPorRol", 'Int'>
    readonly rolId: FieldRef<"PermisoPorRol", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PermisoPorRol findUnique
   */
  export type PermisoPorRolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoPorRol
     */
    select?: PermisoPorRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermisoPorRol
     */
    omit?: PermisoPorRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoPorRolInclude<ExtArgs> | null
    /**
     * Filter, which PermisoPorRol to fetch.
     */
    where: PermisoPorRolWhereUniqueInput
  }

  /**
   * PermisoPorRol findUniqueOrThrow
   */
  export type PermisoPorRolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoPorRol
     */
    select?: PermisoPorRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermisoPorRol
     */
    omit?: PermisoPorRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoPorRolInclude<ExtArgs> | null
    /**
     * Filter, which PermisoPorRol to fetch.
     */
    where: PermisoPorRolWhereUniqueInput
  }

  /**
   * PermisoPorRol findFirst
   */
  export type PermisoPorRolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoPorRol
     */
    select?: PermisoPorRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermisoPorRol
     */
    omit?: PermisoPorRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoPorRolInclude<ExtArgs> | null
    /**
     * Filter, which PermisoPorRol to fetch.
     */
    where?: PermisoPorRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermisoPorRols to fetch.
     */
    orderBy?: PermisoPorRolOrderByWithRelationInput | PermisoPorRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermisoPorRols.
     */
    cursor?: PermisoPorRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermisoPorRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermisoPorRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermisoPorRols.
     */
    distinct?: PermisoPorRolScalarFieldEnum | PermisoPorRolScalarFieldEnum[]
  }

  /**
   * PermisoPorRol findFirstOrThrow
   */
  export type PermisoPorRolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoPorRol
     */
    select?: PermisoPorRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermisoPorRol
     */
    omit?: PermisoPorRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoPorRolInclude<ExtArgs> | null
    /**
     * Filter, which PermisoPorRol to fetch.
     */
    where?: PermisoPorRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermisoPorRols to fetch.
     */
    orderBy?: PermisoPorRolOrderByWithRelationInput | PermisoPorRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PermisoPorRols.
     */
    cursor?: PermisoPorRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermisoPorRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermisoPorRols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PermisoPorRols.
     */
    distinct?: PermisoPorRolScalarFieldEnum | PermisoPorRolScalarFieldEnum[]
  }

  /**
   * PermisoPorRol findMany
   */
  export type PermisoPorRolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoPorRol
     */
    select?: PermisoPorRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermisoPorRol
     */
    omit?: PermisoPorRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoPorRolInclude<ExtArgs> | null
    /**
     * Filter, which PermisoPorRols to fetch.
     */
    where?: PermisoPorRolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PermisoPorRols to fetch.
     */
    orderBy?: PermisoPorRolOrderByWithRelationInput | PermisoPorRolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PermisoPorRols.
     */
    cursor?: PermisoPorRolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PermisoPorRols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PermisoPorRols.
     */
    skip?: number
    distinct?: PermisoPorRolScalarFieldEnum | PermisoPorRolScalarFieldEnum[]
  }

  /**
   * PermisoPorRol create
   */
  export type PermisoPorRolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoPorRol
     */
    select?: PermisoPorRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermisoPorRol
     */
    omit?: PermisoPorRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoPorRolInclude<ExtArgs> | null
    /**
     * The data needed to create a PermisoPorRol.
     */
    data: XOR<PermisoPorRolCreateInput, PermisoPorRolUncheckedCreateInput>
  }

  /**
   * PermisoPorRol createMany
   */
  export type PermisoPorRolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PermisoPorRols.
     */
    data: PermisoPorRolCreateManyInput | PermisoPorRolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PermisoPorRol createManyAndReturn
   */
  export type PermisoPorRolCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoPorRol
     */
    select?: PermisoPorRolSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PermisoPorRol
     */
    omit?: PermisoPorRolOmit<ExtArgs> | null
    /**
     * The data used to create many PermisoPorRols.
     */
    data: PermisoPorRolCreateManyInput | PermisoPorRolCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoPorRolIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PermisoPorRol update
   */
  export type PermisoPorRolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoPorRol
     */
    select?: PermisoPorRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermisoPorRol
     */
    omit?: PermisoPorRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoPorRolInclude<ExtArgs> | null
    /**
     * The data needed to update a PermisoPorRol.
     */
    data: XOR<PermisoPorRolUpdateInput, PermisoPorRolUncheckedUpdateInput>
    /**
     * Choose, which PermisoPorRol to update.
     */
    where: PermisoPorRolWhereUniqueInput
  }

  /**
   * PermisoPorRol updateMany
   */
  export type PermisoPorRolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PermisoPorRols.
     */
    data: XOR<PermisoPorRolUpdateManyMutationInput, PermisoPorRolUncheckedUpdateManyInput>
    /**
     * Filter which PermisoPorRols to update
     */
    where?: PermisoPorRolWhereInput
    /**
     * Limit how many PermisoPorRols to update.
     */
    limit?: number
  }

  /**
   * PermisoPorRol updateManyAndReturn
   */
  export type PermisoPorRolUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoPorRol
     */
    select?: PermisoPorRolSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PermisoPorRol
     */
    omit?: PermisoPorRolOmit<ExtArgs> | null
    /**
     * The data used to update PermisoPorRols.
     */
    data: XOR<PermisoPorRolUpdateManyMutationInput, PermisoPorRolUncheckedUpdateManyInput>
    /**
     * Filter which PermisoPorRols to update
     */
    where?: PermisoPorRolWhereInput
    /**
     * Limit how many PermisoPorRols to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoPorRolIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PermisoPorRol upsert
   */
  export type PermisoPorRolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoPorRol
     */
    select?: PermisoPorRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermisoPorRol
     */
    omit?: PermisoPorRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoPorRolInclude<ExtArgs> | null
    /**
     * The filter to search for the PermisoPorRol to update in case it exists.
     */
    where: PermisoPorRolWhereUniqueInput
    /**
     * In case the PermisoPorRol found by the `where` argument doesn't exist, create a new PermisoPorRol with this data.
     */
    create: XOR<PermisoPorRolCreateInput, PermisoPorRolUncheckedCreateInput>
    /**
     * In case the PermisoPorRol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermisoPorRolUpdateInput, PermisoPorRolUncheckedUpdateInput>
  }

  /**
   * PermisoPorRol delete
   */
  export type PermisoPorRolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoPorRol
     */
    select?: PermisoPorRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermisoPorRol
     */
    omit?: PermisoPorRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoPorRolInclude<ExtArgs> | null
    /**
     * Filter which PermisoPorRol to delete.
     */
    where: PermisoPorRolWhereUniqueInput
  }

  /**
   * PermisoPorRol deleteMany
   */
  export type PermisoPorRolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PermisoPorRols to delete
     */
    where?: PermisoPorRolWhereInput
    /**
     * Limit how many PermisoPorRols to delete.
     */
    limit?: number
  }

  /**
   * PermisoPorRol without action
   */
  export type PermisoPorRolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermisoPorRol
     */
    select?: PermisoPorRolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PermisoPorRol
     */
    omit?: PermisoPorRolOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermisoPorRolInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    activo: boolean | null
    creadoEn: Date | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    activo: boolean | null
    creadoEn: Date | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nombre: number
    activo: number
    creadoEn: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nombre?: true
    activo?: true
    creadoEn?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nombre?: true
    activo?: true
    creadoEn?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nombre?: true
    activo?: true
    creadoEn?: true
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
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
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
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nombre: string
    activo: boolean
    creadoEn: Date
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
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
    nombre?: boolean
    activo?: boolean
    creadoEn?: boolean
    platillos?: boolean | Categoria$platillosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    activo?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    activo?: boolean
    creadoEn?: boolean
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nombre?: boolean
    activo?: boolean
    creadoEn?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "activo" | "creadoEn", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    platillos?: boolean | Categoria$platillosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      platillos: Prisma.$PlatilloPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      activo: boolean
      creadoEn: Date
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
    platillos<T extends Categoria$platillosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$platillosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatilloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nombre: FieldRef<"Categoria", 'String'>
    readonly activo: FieldRef<"Categoria", 'Boolean'>
    readonly creadoEn: FieldRef<"Categoria", 'DateTime'>
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
   * Categoria.platillos
   */
  export type Categoria$platillosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platillo
     */
    select?: PlatilloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platillo
     */
    omit?: PlatilloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatilloInclude<ExtArgs> | null
    where?: PlatilloWhereInput
    orderBy?: PlatilloOrderByWithRelationInput | PlatilloOrderByWithRelationInput[]
    cursor?: PlatilloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlatilloScalarFieldEnum | PlatilloScalarFieldEnum[]
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
   * Model Platillo
   */

  export type AggregatePlatillo = {
    _count: PlatilloCountAggregateOutputType | null
    _avg: PlatilloAvgAggregateOutputType | null
    _sum: PlatilloSumAggregateOutputType | null
    _min: PlatilloMinAggregateOutputType | null
    _max: PlatilloMaxAggregateOutputType | null
  }

  export type PlatilloAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    categoriaId: number | null
  }

  export type PlatilloSumAggregateOutputType = {
    id: number | null
    precio: number | null
    categoriaId: number | null
  }

  export type PlatilloMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    creadoEn: Date | null
    disponible: boolean | null
    imagenUrl: string | null
    categoriaId: number | null
  }

  export type PlatilloMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    creadoEn: Date | null
    disponible: boolean | null
    imagenUrl: string | null
    categoriaId: number | null
  }

  export type PlatilloCountAggregateOutputType = {
    id: number
    nombre: number
    precio: number
    creadoEn: number
    disponible: number
    imagenUrl: number
    categoriaId: number
    _all: number
  }


  export type PlatilloAvgAggregateInputType = {
    id?: true
    precio?: true
    categoriaId?: true
  }

  export type PlatilloSumAggregateInputType = {
    id?: true
    precio?: true
    categoriaId?: true
  }

  export type PlatilloMinAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    creadoEn?: true
    disponible?: true
    imagenUrl?: true
    categoriaId?: true
  }

  export type PlatilloMaxAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    creadoEn?: true
    disponible?: true
    imagenUrl?: true
    categoriaId?: true
  }

  export type PlatilloCountAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    creadoEn?: true
    disponible?: true
    imagenUrl?: true
    categoriaId?: true
    _all?: true
  }

  export type PlatilloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platillo to aggregate.
     */
    where?: PlatilloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platillos to fetch.
     */
    orderBy?: PlatilloOrderByWithRelationInput | PlatilloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatilloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platillos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platillos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platillos
    **/
    _count?: true | PlatilloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlatilloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlatilloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatilloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatilloMaxAggregateInputType
  }

  export type GetPlatilloAggregateType<T extends PlatilloAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatillo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatillo[P]>
      : GetScalarType<T[P], AggregatePlatillo[P]>
  }




  export type PlatilloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatilloWhereInput
    orderBy?: PlatilloOrderByWithAggregationInput | PlatilloOrderByWithAggregationInput[]
    by: PlatilloScalarFieldEnum[] | PlatilloScalarFieldEnum
    having?: PlatilloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatilloCountAggregateInputType | true
    _avg?: PlatilloAvgAggregateInputType
    _sum?: PlatilloSumAggregateInputType
    _min?: PlatilloMinAggregateInputType
    _max?: PlatilloMaxAggregateInputType
  }

  export type PlatilloGroupByOutputType = {
    id: number
    nombre: string
    precio: number
    creadoEn: Date
    disponible: boolean
    imagenUrl: string | null
    categoriaId: number
    _count: PlatilloCountAggregateOutputType | null
    _avg: PlatilloAvgAggregateOutputType | null
    _sum: PlatilloSumAggregateOutputType | null
    _min: PlatilloMinAggregateOutputType | null
    _max: PlatilloMaxAggregateOutputType | null
  }

  type GetPlatilloGroupByPayload<T extends PlatilloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatilloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatilloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatilloGroupByOutputType[P]>
            : GetScalarType<T[P], PlatilloGroupByOutputType[P]>
        }
      >
    >


  export type PlatilloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    creadoEn?: boolean
    disponible?: boolean
    imagenUrl?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    historialModificaciones?: boolean | Platillo$historialModificacionesArgs<ExtArgs>
    _count?: boolean | PlatilloCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platillo"]>

  export type PlatilloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    creadoEn?: boolean
    disponible?: boolean
    imagenUrl?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platillo"]>

  export type PlatilloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    creadoEn?: boolean
    disponible?: boolean
    imagenUrl?: boolean
    categoriaId?: boolean
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["platillo"]>

  export type PlatilloSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio?: boolean
    creadoEn?: boolean
    disponible?: boolean
    imagenUrl?: boolean
    categoriaId?: boolean
  }

  export type PlatilloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "precio" | "creadoEn" | "disponible" | "imagenUrl" | "categoriaId", ExtArgs["result"]["platillo"]>
  export type PlatilloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
    historialModificaciones?: boolean | Platillo$historialModificacionesArgs<ExtArgs>
    _count?: boolean | PlatilloCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlatilloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }
  export type PlatilloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | CategoriaDefaultArgs<ExtArgs>
  }

  export type $PlatilloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Platillo"
    objects: {
      categoria: Prisma.$CategoriaPayload<ExtArgs>
      historialModificaciones: Prisma.$HistorialModificacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      precio: number
      creadoEn: Date
      disponible: boolean
      imagenUrl: string | null
      categoriaId: number
    }, ExtArgs["result"]["platillo"]>
    composites: {}
  }

  type PlatilloGetPayload<S extends boolean | null | undefined | PlatilloDefaultArgs> = $Result.GetResult<Prisma.$PlatilloPayload, S>

  type PlatilloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatilloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatilloCountAggregateInputType | true
    }

  export interface PlatilloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Platillo'], meta: { name: 'Platillo' } }
    /**
     * Find zero or one Platillo that matches the filter.
     * @param {PlatilloFindUniqueArgs} args - Arguments to find a Platillo
     * @example
     * // Get one Platillo
     * const platillo = await prisma.platillo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatilloFindUniqueArgs>(args: SelectSubset<T, PlatilloFindUniqueArgs<ExtArgs>>): Prisma__PlatilloClient<$Result.GetResult<Prisma.$PlatilloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Platillo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatilloFindUniqueOrThrowArgs} args - Arguments to find a Platillo
     * @example
     * // Get one Platillo
     * const platillo = await prisma.platillo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatilloFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatilloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatilloClient<$Result.GetResult<Prisma.$PlatilloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platillo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatilloFindFirstArgs} args - Arguments to find a Platillo
     * @example
     * // Get one Platillo
     * const platillo = await prisma.platillo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatilloFindFirstArgs>(args?: SelectSubset<T, PlatilloFindFirstArgs<ExtArgs>>): Prisma__PlatilloClient<$Result.GetResult<Prisma.$PlatilloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platillo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatilloFindFirstOrThrowArgs} args - Arguments to find a Platillo
     * @example
     * // Get one Platillo
     * const platillo = await prisma.platillo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatilloFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatilloFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatilloClient<$Result.GetResult<Prisma.$PlatilloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platillos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatilloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platillos
     * const platillos = await prisma.platillo.findMany()
     * 
     * // Get first 10 Platillos
     * const platillos = await prisma.platillo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platilloWithIdOnly = await prisma.platillo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatilloFindManyArgs>(args?: SelectSubset<T, PlatilloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatilloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Platillo.
     * @param {PlatilloCreateArgs} args - Arguments to create a Platillo.
     * @example
     * // Create one Platillo
     * const Platillo = await prisma.platillo.create({
     *   data: {
     *     // ... data to create a Platillo
     *   }
     * })
     * 
     */
    create<T extends PlatilloCreateArgs>(args: SelectSubset<T, PlatilloCreateArgs<ExtArgs>>): Prisma__PlatilloClient<$Result.GetResult<Prisma.$PlatilloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platillos.
     * @param {PlatilloCreateManyArgs} args - Arguments to create many Platillos.
     * @example
     * // Create many Platillos
     * const platillo = await prisma.platillo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatilloCreateManyArgs>(args?: SelectSubset<T, PlatilloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Platillos and returns the data saved in the database.
     * @param {PlatilloCreateManyAndReturnArgs} args - Arguments to create many Platillos.
     * @example
     * // Create many Platillos
     * const platillo = await prisma.platillo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Platillos and only return the `id`
     * const platilloWithIdOnly = await prisma.platillo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatilloCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatilloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatilloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Platillo.
     * @param {PlatilloDeleteArgs} args - Arguments to delete one Platillo.
     * @example
     * // Delete one Platillo
     * const Platillo = await prisma.platillo.delete({
     *   where: {
     *     // ... filter to delete one Platillo
     *   }
     * })
     * 
     */
    delete<T extends PlatilloDeleteArgs>(args: SelectSubset<T, PlatilloDeleteArgs<ExtArgs>>): Prisma__PlatilloClient<$Result.GetResult<Prisma.$PlatilloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Platillo.
     * @param {PlatilloUpdateArgs} args - Arguments to update one Platillo.
     * @example
     * // Update one Platillo
     * const platillo = await prisma.platillo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatilloUpdateArgs>(args: SelectSubset<T, PlatilloUpdateArgs<ExtArgs>>): Prisma__PlatilloClient<$Result.GetResult<Prisma.$PlatilloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platillos.
     * @param {PlatilloDeleteManyArgs} args - Arguments to filter Platillos to delete.
     * @example
     * // Delete a few Platillos
     * const { count } = await prisma.platillo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatilloDeleteManyArgs>(args?: SelectSubset<T, PlatilloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platillos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatilloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platillos
     * const platillo = await prisma.platillo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatilloUpdateManyArgs>(args: SelectSubset<T, PlatilloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platillos and returns the data updated in the database.
     * @param {PlatilloUpdateManyAndReturnArgs} args - Arguments to update many Platillos.
     * @example
     * // Update many Platillos
     * const platillo = await prisma.platillo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Platillos and only return the `id`
     * const platilloWithIdOnly = await prisma.platillo.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlatilloUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatilloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatilloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Platillo.
     * @param {PlatilloUpsertArgs} args - Arguments to update or create a Platillo.
     * @example
     * // Update or create a Platillo
     * const platillo = await prisma.platillo.upsert({
     *   create: {
     *     // ... data to create a Platillo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Platillo we want to update
     *   }
     * })
     */
    upsert<T extends PlatilloUpsertArgs>(args: SelectSubset<T, PlatilloUpsertArgs<ExtArgs>>): Prisma__PlatilloClient<$Result.GetResult<Prisma.$PlatilloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platillos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatilloCountArgs} args - Arguments to filter Platillos to count.
     * @example
     * // Count the number of Platillos
     * const count = await prisma.platillo.count({
     *   where: {
     *     // ... the filter for the Platillos we want to count
     *   }
     * })
    **/
    count<T extends PlatilloCountArgs>(
      args?: Subset<T, PlatilloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatilloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Platillo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatilloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlatilloAggregateArgs>(args: Subset<T, PlatilloAggregateArgs>): Prisma.PrismaPromise<GetPlatilloAggregateType<T>>

    /**
     * Group by Platillo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatilloGroupByArgs} args - Group by arguments.
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
      T extends PlatilloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatilloGroupByArgs['orderBy'] }
        : { orderBy?: PlatilloGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlatilloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatilloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Platillo model
   */
  readonly fields: PlatilloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Platillo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatilloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoria<T extends CategoriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriaDefaultArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    historialModificaciones<T extends Platillo$historialModificacionesArgs<ExtArgs> = {}>(args?: Subset<T, Platillo$historialModificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialModificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Platillo model
   */
  interface PlatilloFieldRefs {
    readonly id: FieldRef<"Platillo", 'Int'>
    readonly nombre: FieldRef<"Platillo", 'String'>
    readonly precio: FieldRef<"Platillo", 'Float'>
    readonly creadoEn: FieldRef<"Platillo", 'DateTime'>
    readonly disponible: FieldRef<"Platillo", 'Boolean'>
    readonly imagenUrl: FieldRef<"Platillo", 'String'>
    readonly categoriaId: FieldRef<"Platillo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Platillo findUnique
   */
  export type PlatilloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platillo
     */
    select?: PlatilloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platillo
     */
    omit?: PlatilloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatilloInclude<ExtArgs> | null
    /**
     * Filter, which Platillo to fetch.
     */
    where: PlatilloWhereUniqueInput
  }

  /**
   * Platillo findUniqueOrThrow
   */
  export type PlatilloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platillo
     */
    select?: PlatilloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platillo
     */
    omit?: PlatilloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatilloInclude<ExtArgs> | null
    /**
     * Filter, which Platillo to fetch.
     */
    where: PlatilloWhereUniqueInput
  }

  /**
   * Platillo findFirst
   */
  export type PlatilloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platillo
     */
    select?: PlatilloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platillo
     */
    omit?: PlatilloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatilloInclude<ExtArgs> | null
    /**
     * Filter, which Platillo to fetch.
     */
    where?: PlatilloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platillos to fetch.
     */
    orderBy?: PlatilloOrderByWithRelationInput | PlatilloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platillos.
     */
    cursor?: PlatilloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platillos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platillos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platillos.
     */
    distinct?: PlatilloScalarFieldEnum | PlatilloScalarFieldEnum[]
  }

  /**
   * Platillo findFirstOrThrow
   */
  export type PlatilloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platillo
     */
    select?: PlatilloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platillo
     */
    omit?: PlatilloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatilloInclude<ExtArgs> | null
    /**
     * Filter, which Platillo to fetch.
     */
    where?: PlatilloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platillos to fetch.
     */
    orderBy?: PlatilloOrderByWithRelationInput | PlatilloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platillos.
     */
    cursor?: PlatilloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platillos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platillos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platillos.
     */
    distinct?: PlatilloScalarFieldEnum | PlatilloScalarFieldEnum[]
  }

  /**
   * Platillo findMany
   */
  export type PlatilloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platillo
     */
    select?: PlatilloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platillo
     */
    omit?: PlatilloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatilloInclude<ExtArgs> | null
    /**
     * Filter, which Platillos to fetch.
     */
    where?: PlatilloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platillos to fetch.
     */
    orderBy?: PlatilloOrderByWithRelationInput | PlatilloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platillos.
     */
    cursor?: PlatilloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platillos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platillos.
     */
    skip?: number
    distinct?: PlatilloScalarFieldEnum | PlatilloScalarFieldEnum[]
  }

  /**
   * Platillo create
   */
  export type PlatilloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platillo
     */
    select?: PlatilloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platillo
     */
    omit?: PlatilloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatilloInclude<ExtArgs> | null
    /**
     * The data needed to create a Platillo.
     */
    data: XOR<PlatilloCreateInput, PlatilloUncheckedCreateInput>
  }

  /**
   * Platillo createMany
   */
  export type PlatilloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platillos.
     */
    data: PlatilloCreateManyInput | PlatilloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platillo createManyAndReturn
   */
  export type PlatilloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platillo
     */
    select?: PlatilloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platillo
     */
    omit?: PlatilloOmit<ExtArgs> | null
    /**
     * The data used to create many Platillos.
     */
    data: PlatilloCreateManyInput | PlatilloCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatilloIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Platillo update
   */
  export type PlatilloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platillo
     */
    select?: PlatilloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platillo
     */
    omit?: PlatilloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatilloInclude<ExtArgs> | null
    /**
     * The data needed to update a Platillo.
     */
    data: XOR<PlatilloUpdateInput, PlatilloUncheckedUpdateInput>
    /**
     * Choose, which Platillo to update.
     */
    where: PlatilloWhereUniqueInput
  }

  /**
   * Platillo updateMany
   */
  export type PlatilloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platillos.
     */
    data: XOR<PlatilloUpdateManyMutationInput, PlatilloUncheckedUpdateManyInput>
    /**
     * Filter which Platillos to update
     */
    where?: PlatilloWhereInput
    /**
     * Limit how many Platillos to update.
     */
    limit?: number
  }

  /**
   * Platillo updateManyAndReturn
   */
  export type PlatilloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platillo
     */
    select?: PlatilloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platillo
     */
    omit?: PlatilloOmit<ExtArgs> | null
    /**
     * The data used to update Platillos.
     */
    data: XOR<PlatilloUpdateManyMutationInput, PlatilloUncheckedUpdateManyInput>
    /**
     * Filter which Platillos to update
     */
    where?: PlatilloWhereInput
    /**
     * Limit how many Platillos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatilloIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Platillo upsert
   */
  export type PlatilloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platillo
     */
    select?: PlatilloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platillo
     */
    omit?: PlatilloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatilloInclude<ExtArgs> | null
    /**
     * The filter to search for the Platillo to update in case it exists.
     */
    where: PlatilloWhereUniqueInput
    /**
     * In case the Platillo found by the `where` argument doesn't exist, create a new Platillo with this data.
     */
    create: XOR<PlatilloCreateInput, PlatilloUncheckedCreateInput>
    /**
     * In case the Platillo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatilloUpdateInput, PlatilloUncheckedUpdateInput>
  }

  /**
   * Platillo delete
   */
  export type PlatilloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platillo
     */
    select?: PlatilloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platillo
     */
    omit?: PlatilloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatilloInclude<ExtArgs> | null
    /**
     * Filter which Platillo to delete.
     */
    where: PlatilloWhereUniqueInput
  }

  /**
   * Platillo deleteMany
   */
  export type PlatilloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platillos to delete
     */
    where?: PlatilloWhereInput
    /**
     * Limit how many Platillos to delete.
     */
    limit?: number
  }

  /**
   * Platillo.historialModificaciones
   */
  export type Platillo$historialModificacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionInclude<ExtArgs> | null
    where?: HistorialModificacionWhereInput
    orderBy?: HistorialModificacionOrderByWithRelationInput | HistorialModificacionOrderByWithRelationInput[]
    cursor?: HistorialModificacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistorialModificacionScalarFieldEnum | HistorialModificacionScalarFieldEnum[]
  }

  /**
   * Platillo without action
   */
  export type PlatilloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platillo
     */
    select?: PlatilloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platillo
     */
    omit?: PlatilloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatilloInclude<ExtArgs> | null
  }


  /**
   * Model HistorialModificacion
   */

  export type AggregateHistorialModificacion = {
    _count: HistorialModificacionCountAggregateOutputType | null
    _avg: HistorialModificacionAvgAggregateOutputType | null
    _sum: HistorialModificacionSumAggregateOutputType | null
    _min: HistorialModificacionMinAggregateOutputType | null
    _max: HistorialModificacionMaxAggregateOutputType | null
  }

  export type HistorialModificacionAvgAggregateOutputType = {
    id: number | null
    responsableId: number | null
    usuarioId: number | null
    platilloId: number | null
  }

  export type HistorialModificacionSumAggregateOutputType = {
    id: number | null
    responsableId: number | null
    usuarioId: number | null
    platilloId: number | null
  }

  export type HistorialModificacionMinAggregateOutputType = {
    id: number | null
    campo: string | null
    valorAnterior: string | null
    valorNuevo: string | null
    fecha: Date | null
    accion: string | null
    responsableId: number | null
    usuarioId: number | null
    platilloId: number | null
  }

  export type HistorialModificacionMaxAggregateOutputType = {
    id: number | null
    campo: string | null
    valorAnterior: string | null
    valorNuevo: string | null
    fecha: Date | null
    accion: string | null
    responsableId: number | null
    usuarioId: number | null
    platilloId: number | null
  }

  export type HistorialModificacionCountAggregateOutputType = {
    id: number
    campo: number
    valorAnterior: number
    valorNuevo: number
    fecha: number
    accion: number
    responsableId: number
    usuarioId: number
    platilloId: number
    _all: number
  }


  export type HistorialModificacionAvgAggregateInputType = {
    id?: true
    responsableId?: true
    usuarioId?: true
    platilloId?: true
  }

  export type HistorialModificacionSumAggregateInputType = {
    id?: true
    responsableId?: true
    usuarioId?: true
    platilloId?: true
  }

  export type HistorialModificacionMinAggregateInputType = {
    id?: true
    campo?: true
    valorAnterior?: true
    valorNuevo?: true
    fecha?: true
    accion?: true
    responsableId?: true
    usuarioId?: true
    platilloId?: true
  }

  export type HistorialModificacionMaxAggregateInputType = {
    id?: true
    campo?: true
    valorAnterior?: true
    valorNuevo?: true
    fecha?: true
    accion?: true
    responsableId?: true
    usuarioId?: true
    platilloId?: true
  }

  export type HistorialModificacionCountAggregateInputType = {
    id?: true
    campo?: true
    valorAnterior?: true
    valorNuevo?: true
    fecha?: true
    accion?: true
    responsableId?: true
    usuarioId?: true
    platilloId?: true
    _all?: true
  }

  export type HistorialModificacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialModificacion to aggregate.
     */
    where?: HistorialModificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialModificacions to fetch.
     */
    orderBy?: HistorialModificacionOrderByWithRelationInput | HistorialModificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistorialModificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialModificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialModificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistorialModificacions
    **/
    _count?: true | HistorialModificacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistorialModificacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorialModificacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistorialModificacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistorialModificacionMaxAggregateInputType
  }

  export type GetHistorialModificacionAggregateType<T extends HistorialModificacionAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorialModificacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorialModificacion[P]>
      : GetScalarType<T[P], AggregateHistorialModificacion[P]>
  }




  export type HistorialModificacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistorialModificacionWhereInput
    orderBy?: HistorialModificacionOrderByWithAggregationInput | HistorialModificacionOrderByWithAggregationInput[]
    by: HistorialModificacionScalarFieldEnum[] | HistorialModificacionScalarFieldEnum
    having?: HistorialModificacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistorialModificacionCountAggregateInputType | true
    _avg?: HistorialModificacionAvgAggregateInputType
    _sum?: HistorialModificacionSumAggregateInputType
    _min?: HistorialModificacionMinAggregateInputType
    _max?: HistorialModificacionMaxAggregateInputType
  }

  export type HistorialModificacionGroupByOutputType = {
    id: number
    campo: string
    valorAnterior: string | null
    valorNuevo: string | null
    fecha: Date
    accion: string
    responsableId: number
    usuarioId: number | null
    platilloId: number | null
    _count: HistorialModificacionCountAggregateOutputType | null
    _avg: HistorialModificacionAvgAggregateOutputType | null
    _sum: HistorialModificacionSumAggregateOutputType | null
    _min: HistorialModificacionMinAggregateOutputType | null
    _max: HistorialModificacionMaxAggregateOutputType | null
  }

  type GetHistorialModificacionGroupByPayload<T extends HistorialModificacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistorialModificacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistorialModificacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistorialModificacionGroupByOutputType[P]>
            : GetScalarType<T[P], HistorialModificacionGroupByOutputType[P]>
        }
      >
    >


  export type HistorialModificacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campo?: boolean
    valorAnterior?: boolean
    valorNuevo?: boolean
    fecha?: boolean
    accion?: boolean
    responsableId?: boolean
    usuarioId?: boolean
    platilloId?: boolean
    responsable?: boolean | UsuarioDefaultArgs<ExtArgs>
    usuario?: boolean | HistorialModificacion$usuarioArgs<ExtArgs>
    platillo?: boolean | HistorialModificacion$platilloArgs<ExtArgs>
  }, ExtArgs["result"]["historialModificacion"]>

  export type HistorialModificacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campo?: boolean
    valorAnterior?: boolean
    valorNuevo?: boolean
    fecha?: boolean
    accion?: boolean
    responsableId?: boolean
    usuarioId?: boolean
    platilloId?: boolean
    responsable?: boolean | UsuarioDefaultArgs<ExtArgs>
    usuario?: boolean | HistorialModificacion$usuarioArgs<ExtArgs>
    platillo?: boolean | HistorialModificacion$platilloArgs<ExtArgs>
  }, ExtArgs["result"]["historialModificacion"]>

  export type HistorialModificacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campo?: boolean
    valorAnterior?: boolean
    valorNuevo?: boolean
    fecha?: boolean
    accion?: boolean
    responsableId?: boolean
    usuarioId?: boolean
    platilloId?: boolean
    responsable?: boolean | UsuarioDefaultArgs<ExtArgs>
    usuario?: boolean | HistorialModificacion$usuarioArgs<ExtArgs>
    platillo?: boolean | HistorialModificacion$platilloArgs<ExtArgs>
  }, ExtArgs["result"]["historialModificacion"]>

  export type HistorialModificacionSelectScalar = {
    id?: boolean
    campo?: boolean
    valorAnterior?: boolean
    valorNuevo?: boolean
    fecha?: boolean
    accion?: boolean
    responsableId?: boolean
    usuarioId?: boolean
    platilloId?: boolean
  }

  export type HistorialModificacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campo" | "valorAnterior" | "valorNuevo" | "fecha" | "accion" | "responsableId" | "usuarioId" | "platilloId", ExtArgs["result"]["historialModificacion"]>
  export type HistorialModificacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsable?: boolean | UsuarioDefaultArgs<ExtArgs>
    usuario?: boolean | HistorialModificacion$usuarioArgs<ExtArgs>
    platillo?: boolean | HistorialModificacion$platilloArgs<ExtArgs>
  }
  export type HistorialModificacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsable?: boolean | UsuarioDefaultArgs<ExtArgs>
    usuario?: boolean | HistorialModificacion$usuarioArgs<ExtArgs>
    platillo?: boolean | HistorialModificacion$platilloArgs<ExtArgs>
  }
  export type HistorialModificacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsable?: boolean | UsuarioDefaultArgs<ExtArgs>
    usuario?: boolean | HistorialModificacion$usuarioArgs<ExtArgs>
    platillo?: boolean | HistorialModificacion$platilloArgs<ExtArgs>
  }

  export type $HistorialModificacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistorialModificacion"
    objects: {
      responsable: Prisma.$UsuarioPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
      platillo: Prisma.$PlatilloPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      campo: string
      valorAnterior: string | null
      valorNuevo: string | null
      fecha: Date
      accion: string
      responsableId: number
      usuarioId: number | null
      platilloId: number | null
    }, ExtArgs["result"]["historialModificacion"]>
    composites: {}
  }

  type HistorialModificacionGetPayload<S extends boolean | null | undefined | HistorialModificacionDefaultArgs> = $Result.GetResult<Prisma.$HistorialModificacionPayload, S>

  type HistorialModificacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistorialModificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistorialModificacionCountAggregateInputType | true
    }

  export interface HistorialModificacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistorialModificacion'], meta: { name: 'HistorialModificacion' } }
    /**
     * Find zero or one HistorialModificacion that matches the filter.
     * @param {HistorialModificacionFindUniqueArgs} args - Arguments to find a HistorialModificacion
     * @example
     * // Get one HistorialModificacion
     * const historialModificacion = await prisma.historialModificacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistorialModificacionFindUniqueArgs>(args: SelectSubset<T, HistorialModificacionFindUniqueArgs<ExtArgs>>): Prisma__HistorialModificacionClient<$Result.GetResult<Prisma.$HistorialModificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistorialModificacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistorialModificacionFindUniqueOrThrowArgs} args - Arguments to find a HistorialModificacion
     * @example
     * // Get one HistorialModificacion
     * const historialModificacion = await prisma.historialModificacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistorialModificacionFindUniqueOrThrowArgs>(args: SelectSubset<T, HistorialModificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistorialModificacionClient<$Result.GetResult<Prisma.$HistorialModificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistorialModificacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialModificacionFindFirstArgs} args - Arguments to find a HistorialModificacion
     * @example
     * // Get one HistorialModificacion
     * const historialModificacion = await prisma.historialModificacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistorialModificacionFindFirstArgs>(args?: SelectSubset<T, HistorialModificacionFindFirstArgs<ExtArgs>>): Prisma__HistorialModificacionClient<$Result.GetResult<Prisma.$HistorialModificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistorialModificacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialModificacionFindFirstOrThrowArgs} args - Arguments to find a HistorialModificacion
     * @example
     * // Get one HistorialModificacion
     * const historialModificacion = await prisma.historialModificacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistorialModificacionFindFirstOrThrowArgs>(args?: SelectSubset<T, HistorialModificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistorialModificacionClient<$Result.GetResult<Prisma.$HistorialModificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistorialModificacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialModificacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistorialModificacions
     * const historialModificacions = await prisma.historialModificacion.findMany()
     * 
     * // Get first 10 HistorialModificacions
     * const historialModificacions = await prisma.historialModificacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historialModificacionWithIdOnly = await prisma.historialModificacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistorialModificacionFindManyArgs>(args?: SelectSubset<T, HistorialModificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialModificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistorialModificacion.
     * @param {HistorialModificacionCreateArgs} args - Arguments to create a HistorialModificacion.
     * @example
     * // Create one HistorialModificacion
     * const HistorialModificacion = await prisma.historialModificacion.create({
     *   data: {
     *     // ... data to create a HistorialModificacion
     *   }
     * })
     * 
     */
    create<T extends HistorialModificacionCreateArgs>(args: SelectSubset<T, HistorialModificacionCreateArgs<ExtArgs>>): Prisma__HistorialModificacionClient<$Result.GetResult<Prisma.$HistorialModificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistorialModificacions.
     * @param {HistorialModificacionCreateManyArgs} args - Arguments to create many HistorialModificacions.
     * @example
     * // Create many HistorialModificacions
     * const historialModificacion = await prisma.historialModificacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistorialModificacionCreateManyArgs>(args?: SelectSubset<T, HistorialModificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistorialModificacions and returns the data saved in the database.
     * @param {HistorialModificacionCreateManyAndReturnArgs} args - Arguments to create many HistorialModificacions.
     * @example
     * // Create many HistorialModificacions
     * const historialModificacion = await prisma.historialModificacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistorialModificacions and only return the `id`
     * const historialModificacionWithIdOnly = await prisma.historialModificacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistorialModificacionCreateManyAndReturnArgs>(args?: SelectSubset<T, HistorialModificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialModificacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistorialModificacion.
     * @param {HistorialModificacionDeleteArgs} args - Arguments to delete one HistorialModificacion.
     * @example
     * // Delete one HistorialModificacion
     * const HistorialModificacion = await prisma.historialModificacion.delete({
     *   where: {
     *     // ... filter to delete one HistorialModificacion
     *   }
     * })
     * 
     */
    delete<T extends HistorialModificacionDeleteArgs>(args: SelectSubset<T, HistorialModificacionDeleteArgs<ExtArgs>>): Prisma__HistorialModificacionClient<$Result.GetResult<Prisma.$HistorialModificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistorialModificacion.
     * @param {HistorialModificacionUpdateArgs} args - Arguments to update one HistorialModificacion.
     * @example
     * // Update one HistorialModificacion
     * const historialModificacion = await prisma.historialModificacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistorialModificacionUpdateArgs>(args: SelectSubset<T, HistorialModificacionUpdateArgs<ExtArgs>>): Prisma__HistorialModificacionClient<$Result.GetResult<Prisma.$HistorialModificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistorialModificacions.
     * @param {HistorialModificacionDeleteManyArgs} args - Arguments to filter HistorialModificacions to delete.
     * @example
     * // Delete a few HistorialModificacions
     * const { count } = await prisma.historialModificacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistorialModificacionDeleteManyArgs>(args?: SelectSubset<T, HistorialModificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistorialModificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialModificacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistorialModificacions
     * const historialModificacion = await prisma.historialModificacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistorialModificacionUpdateManyArgs>(args: SelectSubset<T, HistorialModificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistorialModificacions and returns the data updated in the database.
     * @param {HistorialModificacionUpdateManyAndReturnArgs} args - Arguments to update many HistorialModificacions.
     * @example
     * // Update many HistorialModificacions
     * const historialModificacion = await prisma.historialModificacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistorialModificacions and only return the `id`
     * const historialModificacionWithIdOnly = await prisma.historialModificacion.updateManyAndReturn({
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
    updateManyAndReturn<T extends HistorialModificacionUpdateManyAndReturnArgs>(args: SelectSubset<T, HistorialModificacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistorialModificacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistorialModificacion.
     * @param {HistorialModificacionUpsertArgs} args - Arguments to update or create a HistorialModificacion.
     * @example
     * // Update or create a HistorialModificacion
     * const historialModificacion = await prisma.historialModificacion.upsert({
     *   create: {
     *     // ... data to create a HistorialModificacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistorialModificacion we want to update
     *   }
     * })
     */
    upsert<T extends HistorialModificacionUpsertArgs>(args: SelectSubset<T, HistorialModificacionUpsertArgs<ExtArgs>>): Prisma__HistorialModificacionClient<$Result.GetResult<Prisma.$HistorialModificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistorialModificacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialModificacionCountArgs} args - Arguments to filter HistorialModificacions to count.
     * @example
     * // Count the number of HistorialModificacions
     * const count = await prisma.historialModificacion.count({
     *   where: {
     *     // ... the filter for the HistorialModificacions we want to count
     *   }
     * })
    **/
    count<T extends HistorialModificacionCountArgs>(
      args?: Subset<T, HistorialModificacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistorialModificacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistorialModificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialModificacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistorialModificacionAggregateArgs>(args: Subset<T, HistorialModificacionAggregateArgs>): Prisma.PrismaPromise<GetHistorialModificacionAggregateType<T>>

    /**
     * Group by HistorialModificacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistorialModificacionGroupByArgs} args - Group by arguments.
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
      T extends HistorialModificacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistorialModificacionGroupByArgs['orderBy'] }
        : { orderBy?: HistorialModificacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistorialModificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorialModificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistorialModificacion model
   */
  readonly fields: HistorialModificacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistorialModificacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistorialModificacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responsable<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends HistorialModificacion$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, HistorialModificacion$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    platillo<T extends HistorialModificacion$platilloArgs<ExtArgs> = {}>(args?: Subset<T, HistorialModificacion$platilloArgs<ExtArgs>>): Prisma__PlatilloClient<$Result.GetResult<Prisma.$PlatilloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistorialModificacion model
   */
  interface HistorialModificacionFieldRefs {
    readonly id: FieldRef<"HistorialModificacion", 'Int'>
    readonly campo: FieldRef<"HistorialModificacion", 'String'>
    readonly valorAnterior: FieldRef<"HistorialModificacion", 'String'>
    readonly valorNuevo: FieldRef<"HistorialModificacion", 'String'>
    readonly fecha: FieldRef<"HistorialModificacion", 'DateTime'>
    readonly accion: FieldRef<"HistorialModificacion", 'String'>
    readonly responsableId: FieldRef<"HistorialModificacion", 'Int'>
    readonly usuarioId: FieldRef<"HistorialModificacion", 'Int'>
    readonly platilloId: FieldRef<"HistorialModificacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * HistorialModificacion findUnique
   */
  export type HistorialModificacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionInclude<ExtArgs> | null
    /**
     * Filter, which HistorialModificacion to fetch.
     */
    where: HistorialModificacionWhereUniqueInput
  }

  /**
   * HistorialModificacion findUniqueOrThrow
   */
  export type HistorialModificacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionInclude<ExtArgs> | null
    /**
     * Filter, which HistorialModificacion to fetch.
     */
    where: HistorialModificacionWhereUniqueInput
  }

  /**
   * HistorialModificacion findFirst
   */
  export type HistorialModificacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionInclude<ExtArgs> | null
    /**
     * Filter, which HistorialModificacion to fetch.
     */
    where?: HistorialModificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialModificacions to fetch.
     */
    orderBy?: HistorialModificacionOrderByWithRelationInput | HistorialModificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistorialModificacions.
     */
    cursor?: HistorialModificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialModificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialModificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialModificacions.
     */
    distinct?: HistorialModificacionScalarFieldEnum | HistorialModificacionScalarFieldEnum[]
  }

  /**
   * HistorialModificacion findFirstOrThrow
   */
  export type HistorialModificacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionInclude<ExtArgs> | null
    /**
     * Filter, which HistorialModificacion to fetch.
     */
    where?: HistorialModificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialModificacions to fetch.
     */
    orderBy?: HistorialModificacionOrderByWithRelationInput | HistorialModificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistorialModificacions.
     */
    cursor?: HistorialModificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialModificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialModificacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistorialModificacions.
     */
    distinct?: HistorialModificacionScalarFieldEnum | HistorialModificacionScalarFieldEnum[]
  }

  /**
   * HistorialModificacion findMany
   */
  export type HistorialModificacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionInclude<ExtArgs> | null
    /**
     * Filter, which HistorialModificacions to fetch.
     */
    where?: HistorialModificacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistorialModificacions to fetch.
     */
    orderBy?: HistorialModificacionOrderByWithRelationInput | HistorialModificacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistorialModificacions.
     */
    cursor?: HistorialModificacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistorialModificacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistorialModificacions.
     */
    skip?: number
    distinct?: HistorialModificacionScalarFieldEnum | HistorialModificacionScalarFieldEnum[]
  }

  /**
   * HistorialModificacion create
   */
  export type HistorialModificacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionInclude<ExtArgs> | null
    /**
     * The data needed to create a HistorialModificacion.
     */
    data: XOR<HistorialModificacionCreateInput, HistorialModificacionUncheckedCreateInput>
  }

  /**
   * HistorialModificacion createMany
   */
  export type HistorialModificacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistorialModificacions.
     */
    data: HistorialModificacionCreateManyInput | HistorialModificacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistorialModificacion createManyAndReturn
   */
  export type HistorialModificacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * The data used to create many HistorialModificacions.
     */
    data: HistorialModificacionCreateManyInput | HistorialModificacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistorialModificacion update
   */
  export type HistorialModificacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionInclude<ExtArgs> | null
    /**
     * The data needed to update a HistorialModificacion.
     */
    data: XOR<HistorialModificacionUpdateInput, HistorialModificacionUncheckedUpdateInput>
    /**
     * Choose, which HistorialModificacion to update.
     */
    where: HistorialModificacionWhereUniqueInput
  }

  /**
   * HistorialModificacion updateMany
   */
  export type HistorialModificacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistorialModificacions.
     */
    data: XOR<HistorialModificacionUpdateManyMutationInput, HistorialModificacionUncheckedUpdateManyInput>
    /**
     * Filter which HistorialModificacions to update
     */
    where?: HistorialModificacionWhereInput
    /**
     * Limit how many HistorialModificacions to update.
     */
    limit?: number
  }

  /**
   * HistorialModificacion updateManyAndReturn
   */
  export type HistorialModificacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * The data used to update HistorialModificacions.
     */
    data: XOR<HistorialModificacionUpdateManyMutationInput, HistorialModificacionUncheckedUpdateManyInput>
    /**
     * Filter which HistorialModificacions to update
     */
    where?: HistorialModificacionWhereInput
    /**
     * Limit how many HistorialModificacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistorialModificacion upsert
   */
  export type HistorialModificacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionInclude<ExtArgs> | null
    /**
     * The filter to search for the HistorialModificacion to update in case it exists.
     */
    where: HistorialModificacionWhereUniqueInput
    /**
     * In case the HistorialModificacion found by the `where` argument doesn't exist, create a new HistorialModificacion with this data.
     */
    create: XOR<HistorialModificacionCreateInput, HistorialModificacionUncheckedCreateInput>
    /**
     * In case the HistorialModificacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistorialModificacionUpdateInput, HistorialModificacionUncheckedUpdateInput>
  }

  /**
   * HistorialModificacion delete
   */
  export type HistorialModificacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionInclude<ExtArgs> | null
    /**
     * Filter which HistorialModificacion to delete.
     */
    where: HistorialModificacionWhereUniqueInput
  }

  /**
   * HistorialModificacion deleteMany
   */
  export type HistorialModificacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistorialModificacions to delete
     */
    where?: HistorialModificacionWhereInput
    /**
     * Limit how many HistorialModificacions to delete.
     */
    limit?: number
  }

  /**
   * HistorialModificacion.usuario
   */
  export type HistorialModificacion$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UsuarioWhereInput
  }

  /**
   * HistorialModificacion.platillo
   */
  export type HistorialModificacion$platilloArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platillo
     */
    select?: PlatilloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platillo
     */
    omit?: PlatilloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlatilloInclude<ExtArgs> | null
    where?: PlatilloWhereInput
  }

  /**
   * HistorialModificacion without action
   */
  export type HistorialModificacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistorialModificacion
     */
    select?: HistorialModificacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistorialModificacion
     */
    omit?: HistorialModificacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistorialModificacionInclude<ExtArgs> | null
  }


  /**
   * Model Orden
   */

  export type AggregateOrden = {
    _count: OrdenCountAggregateOutputType | null
    _avg: OrdenAvgAggregateOutputType | null
    _sum: OrdenSumAggregateOutputType | null
    _min: OrdenMinAggregateOutputType | null
    _max: OrdenMaxAggregateOutputType | null
  }

  export type OrdenAvgAggregateOutputType = {
    id: number | null
    mesa: number | null
    durationSec: number | null
    meseroId: number | null
  }

  export type OrdenSumAggregateOutputType = {
    id: number | null
    mesa: number | null
    durationSec: number | null
    meseroId: number | null
  }

  export type OrdenMinAggregateOutputType = {
    id: number | null
    codigo: string | null
    mesa: number | null
    fecha: Date | null
    finishedAt: Date | null
    durationSec: number | null
    meseroId: number | null
    estado: string | null
  }

  export type OrdenMaxAggregateOutputType = {
    id: number | null
    codigo: string | null
    mesa: number | null
    fecha: Date | null
    finishedAt: Date | null
    durationSec: number | null
    meseroId: number | null
    estado: string | null
  }

  export type OrdenCountAggregateOutputType = {
    id: number
    codigo: number
    mesa: number
    fecha: number
    finishedAt: number
    durationSec: number
    meseroId: number
    estado: number
    _all: number
  }


  export type OrdenAvgAggregateInputType = {
    id?: true
    mesa?: true
    durationSec?: true
    meseroId?: true
  }

  export type OrdenSumAggregateInputType = {
    id?: true
    mesa?: true
    durationSec?: true
    meseroId?: true
  }

  export type OrdenMinAggregateInputType = {
    id?: true
    codigo?: true
    mesa?: true
    fecha?: true
    finishedAt?: true
    durationSec?: true
    meseroId?: true
    estado?: true
  }

  export type OrdenMaxAggregateInputType = {
    id?: true
    codigo?: true
    mesa?: true
    fecha?: true
    finishedAt?: true
    durationSec?: true
    meseroId?: true
    estado?: true
  }

  export type OrdenCountAggregateInputType = {
    id?: true
    codigo?: true
    mesa?: true
    fecha?: true
    finishedAt?: true
    durationSec?: true
    meseroId?: true
    estado?: true
    _all?: true
  }

  export type OrdenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orden to aggregate.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ordens
    **/
    _count?: true | OrdenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdenMaxAggregateInputType
  }

  export type GetOrdenAggregateType<T extends OrdenAggregateArgs> = {
        [P in keyof T & keyof AggregateOrden]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrden[P]>
      : GetScalarType<T[P], AggregateOrden[P]>
  }




  export type OrdenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenWhereInput
    orderBy?: OrdenOrderByWithAggregationInput | OrdenOrderByWithAggregationInput[]
    by: OrdenScalarFieldEnum[] | OrdenScalarFieldEnum
    having?: OrdenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdenCountAggregateInputType | true
    _avg?: OrdenAvgAggregateInputType
    _sum?: OrdenSumAggregateInputType
    _min?: OrdenMinAggregateInputType
    _max?: OrdenMaxAggregateInputType
  }

  export type OrdenGroupByOutputType = {
    id: number
    codigo: string
    mesa: number
    fecha: Date
    finishedAt: Date | null
    durationSec: number | null
    meseroId: number
    estado: string
    _count: OrdenCountAggregateOutputType | null
    _avg: OrdenAvgAggregateOutputType | null
    _sum: OrdenSumAggregateOutputType | null
    _min: OrdenMinAggregateOutputType | null
    _max: OrdenMaxAggregateOutputType | null
  }

  type GetOrdenGroupByPayload<T extends OrdenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdenGroupByOutputType[P]>
            : GetScalarType<T[P], OrdenGroupByOutputType[P]>
        }
      >
    >


  export type OrdenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    mesa?: boolean
    fecha?: boolean
    finishedAt?: boolean
    durationSec?: boolean
    meseroId?: boolean
    estado?: boolean
    mesero?: boolean | UsuarioDefaultArgs<ExtArgs>
    items?: boolean | Orden$itemsArgs<ExtArgs>
    _count?: boolean | OrdenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orden"]>

  export type OrdenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    mesa?: boolean
    fecha?: boolean
    finishedAt?: boolean
    durationSec?: boolean
    meseroId?: boolean
    estado?: boolean
    mesero?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orden"]>

  export type OrdenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    codigo?: boolean
    mesa?: boolean
    fecha?: boolean
    finishedAt?: boolean
    durationSec?: boolean
    meseroId?: boolean
    estado?: boolean
    mesero?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orden"]>

  export type OrdenSelectScalar = {
    id?: boolean
    codigo?: boolean
    mesa?: boolean
    fecha?: boolean
    finishedAt?: boolean
    durationSec?: boolean
    meseroId?: boolean
    estado?: boolean
  }

  export type OrdenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "codigo" | "mesa" | "fecha" | "finishedAt" | "durationSec" | "meseroId" | "estado", ExtArgs["result"]["orden"]>
  export type OrdenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesero?: boolean | UsuarioDefaultArgs<ExtArgs>
    items?: boolean | Orden$itemsArgs<ExtArgs>
    _count?: boolean | OrdenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesero?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type OrdenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mesero?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $OrdenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orden"
    objects: {
      mesero: Prisma.$UsuarioPayload<ExtArgs>
      items: Prisma.$OrdenItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      codigo: string
      mesa: number
      fecha: Date
      finishedAt: Date | null
      durationSec: number | null
      meseroId: number
      estado: string
    }, ExtArgs["result"]["orden"]>
    composites: {}
  }

  type OrdenGetPayload<S extends boolean | null | undefined | OrdenDefaultArgs> = $Result.GetResult<Prisma.$OrdenPayload, S>

  type OrdenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdenCountAggregateInputType | true
    }

  export interface OrdenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orden'], meta: { name: 'Orden' } }
    /**
     * Find zero or one Orden that matches the filter.
     * @param {OrdenFindUniqueArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdenFindUniqueArgs>(args: SelectSubset<T, OrdenFindUniqueArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orden that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdenFindUniqueOrThrowArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdenFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orden that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenFindFirstArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdenFindFirstArgs>(args?: SelectSubset<T, OrdenFindFirstArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orden that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenFindFirstOrThrowArgs} args - Arguments to find a Orden
     * @example
     * // Get one Orden
     * const orden = await prisma.orden.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdenFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdenFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ordens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ordens
     * const ordens = await prisma.orden.findMany()
     * 
     * // Get first 10 Ordens
     * const ordens = await prisma.orden.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordenWithIdOnly = await prisma.orden.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdenFindManyArgs>(args?: SelectSubset<T, OrdenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orden.
     * @param {OrdenCreateArgs} args - Arguments to create a Orden.
     * @example
     * // Create one Orden
     * const Orden = await prisma.orden.create({
     *   data: {
     *     // ... data to create a Orden
     *   }
     * })
     * 
     */
    create<T extends OrdenCreateArgs>(args: SelectSubset<T, OrdenCreateArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ordens.
     * @param {OrdenCreateManyArgs} args - Arguments to create many Ordens.
     * @example
     * // Create many Ordens
     * const orden = await prisma.orden.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdenCreateManyArgs>(args?: SelectSubset<T, OrdenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ordens and returns the data saved in the database.
     * @param {OrdenCreateManyAndReturnArgs} args - Arguments to create many Ordens.
     * @example
     * // Create many Ordens
     * const orden = await prisma.orden.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ordens and only return the `id`
     * const ordenWithIdOnly = await prisma.orden.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdenCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orden.
     * @param {OrdenDeleteArgs} args - Arguments to delete one Orden.
     * @example
     * // Delete one Orden
     * const Orden = await prisma.orden.delete({
     *   where: {
     *     // ... filter to delete one Orden
     *   }
     * })
     * 
     */
    delete<T extends OrdenDeleteArgs>(args: SelectSubset<T, OrdenDeleteArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orden.
     * @param {OrdenUpdateArgs} args - Arguments to update one Orden.
     * @example
     * // Update one Orden
     * const orden = await prisma.orden.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdenUpdateArgs>(args: SelectSubset<T, OrdenUpdateArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ordens.
     * @param {OrdenDeleteManyArgs} args - Arguments to filter Ordens to delete.
     * @example
     * // Delete a few Ordens
     * const { count } = await prisma.orden.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdenDeleteManyArgs>(args?: SelectSubset<T, OrdenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ordens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ordens
     * const orden = await prisma.orden.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdenUpdateManyArgs>(args: SelectSubset<T, OrdenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ordens and returns the data updated in the database.
     * @param {OrdenUpdateManyAndReturnArgs} args - Arguments to update many Ordens.
     * @example
     * // Update many Ordens
     * const orden = await prisma.orden.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ordens and only return the `id`
     * const ordenWithIdOnly = await prisma.orden.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrdenUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orden.
     * @param {OrdenUpsertArgs} args - Arguments to update or create a Orden.
     * @example
     * // Update or create a Orden
     * const orden = await prisma.orden.upsert({
     *   create: {
     *     // ... data to create a Orden
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orden we want to update
     *   }
     * })
     */
    upsert<T extends OrdenUpsertArgs>(args: SelectSubset<T, OrdenUpsertArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ordens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenCountArgs} args - Arguments to filter Ordens to count.
     * @example
     * // Count the number of Ordens
     * const count = await prisma.orden.count({
     *   where: {
     *     // ... the filter for the Ordens we want to count
     *   }
     * })
    **/
    count<T extends OrdenCountArgs>(
      args?: Subset<T, OrdenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdenAggregateArgs>(args: Subset<T, OrdenAggregateArgs>): Prisma.PrismaPromise<GetOrdenAggregateType<T>>

    /**
     * Group by Orden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenGroupByArgs} args - Group by arguments.
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
      T extends OrdenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdenGroupByArgs['orderBy'] }
        : { orderBy?: OrdenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orden model
   */
  readonly fields: OrdenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orden.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mesero<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Orden$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Orden$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Orden model
   */
  interface OrdenFieldRefs {
    readonly id: FieldRef<"Orden", 'Int'>
    readonly codigo: FieldRef<"Orden", 'String'>
    readonly mesa: FieldRef<"Orden", 'Int'>
    readonly fecha: FieldRef<"Orden", 'DateTime'>
    readonly finishedAt: FieldRef<"Orden", 'DateTime'>
    readonly durationSec: FieldRef<"Orden", 'Int'>
    readonly meseroId: FieldRef<"Orden", 'Int'>
    readonly estado: FieldRef<"Orden", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Orden findUnique
   */
  export type OrdenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden findUniqueOrThrow
   */
  export type OrdenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden findFirst
   */
  export type OrdenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ordens.
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ordens.
     */
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Orden findFirstOrThrow
   */
  export type OrdenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Orden to fetch.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ordens.
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ordens.
     */
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Orden findMany
   */
  export type OrdenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter, which Ordens to fetch.
     */
    where?: OrdenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ordens to fetch.
     */
    orderBy?: OrdenOrderByWithRelationInput | OrdenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ordens.
     */
    cursor?: OrdenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ordens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ordens.
     */
    skip?: number
    distinct?: OrdenScalarFieldEnum | OrdenScalarFieldEnum[]
  }

  /**
   * Orden create
   */
  export type OrdenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * The data needed to create a Orden.
     */
    data: XOR<OrdenCreateInput, OrdenUncheckedCreateInput>
  }

  /**
   * Orden createMany
   */
  export type OrdenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ordens.
     */
    data: OrdenCreateManyInput | OrdenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orden createManyAndReturn
   */
  export type OrdenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * The data used to create many Ordens.
     */
    data: OrdenCreateManyInput | OrdenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orden update
   */
  export type OrdenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * The data needed to update a Orden.
     */
    data: XOR<OrdenUpdateInput, OrdenUncheckedUpdateInput>
    /**
     * Choose, which Orden to update.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden updateMany
   */
  export type OrdenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ordens.
     */
    data: XOR<OrdenUpdateManyMutationInput, OrdenUncheckedUpdateManyInput>
    /**
     * Filter which Ordens to update
     */
    where?: OrdenWhereInput
    /**
     * Limit how many Ordens to update.
     */
    limit?: number
  }

  /**
   * Orden updateManyAndReturn
   */
  export type OrdenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * The data used to update Ordens.
     */
    data: XOR<OrdenUpdateManyMutationInput, OrdenUncheckedUpdateManyInput>
    /**
     * Filter which Ordens to update
     */
    where?: OrdenWhereInput
    /**
     * Limit how many Ordens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orden upsert
   */
  export type OrdenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * The filter to search for the Orden to update in case it exists.
     */
    where: OrdenWhereUniqueInput
    /**
     * In case the Orden found by the `where` argument doesn't exist, create a new Orden with this data.
     */
    create: XOR<OrdenCreateInput, OrdenUncheckedCreateInput>
    /**
     * In case the Orden was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdenUpdateInput, OrdenUncheckedUpdateInput>
  }

  /**
   * Orden delete
   */
  export type OrdenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
    /**
     * Filter which Orden to delete.
     */
    where: OrdenWhereUniqueInput
  }

  /**
   * Orden deleteMany
   */
  export type OrdenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ordens to delete
     */
    where?: OrdenWhereInput
    /**
     * Limit how many Ordens to delete.
     */
    limit?: number
  }

  /**
   * Orden.items
   */
  export type Orden$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    where?: OrdenItemWhereInput
    orderBy?: OrdenItemOrderByWithRelationInput | OrdenItemOrderByWithRelationInput[]
    cursor?: OrdenItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdenItemScalarFieldEnum | OrdenItemScalarFieldEnum[]
  }

  /**
   * Orden without action
   */
  export type OrdenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orden
     */
    select?: OrdenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orden
     */
    omit?: OrdenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenInclude<ExtArgs> | null
  }


  /**
   * Model OrdenItem
   */

  export type AggregateOrdenItem = {
    _count: OrdenItemCountAggregateOutputType | null
    _avg: OrdenItemAvgAggregateOutputType | null
    _sum: OrdenItemSumAggregateOutputType | null
    _min: OrdenItemMinAggregateOutputType | null
    _max: OrdenItemMaxAggregateOutputType | null
  }

  export type OrdenItemAvgAggregateOutputType = {
    id: number | null
    precio: number | null
    prioridad: number | null
    ordenId: number | null
    chefId: number | null
  }

  export type OrdenItemSumAggregateOutputType = {
    id: number | null
    precio: number | null
    prioridad: number | null
    ordenId: number | null
    chefId: number | null
  }

  export type OrdenItemMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    nota: string | null
    tipo: string | null
    estado: string | null
    creadoEn: Date | null
    asignadoEn: Date | null
    finalizadoEn: Date | null
    prioridad: number | null
    ordenId: number | null
    chefId: number | null
  }

  export type OrdenItemMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    precio: number | null
    nota: string | null
    tipo: string | null
    estado: string | null
    creadoEn: Date | null
    asignadoEn: Date | null
    finalizadoEn: Date | null
    prioridad: number | null
    ordenId: number | null
    chefId: number | null
  }

  export type OrdenItemCountAggregateOutputType = {
    id: number
    nombre: number
    precio: number
    nota: number
    tipo: number
    estado: number
    creadoEn: number
    asignadoEn: number
    finalizadoEn: number
    prioridad: number
    ordenId: number
    chefId: number
    _all: number
  }


  export type OrdenItemAvgAggregateInputType = {
    id?: true
    precio?: true
    prioridad?: true
    ordenId?: true
    chefId?: true
  }

  export type OrdenItemSumAggregateInputType = {
    id?: true
    precio?: true
    prioridad?: true
    ordenId?: true
    chefId?: true
  }

  export type OrdenItemMinAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    nota?: true
    tipo?: true
    estado?: true
    creadoEn?: true
    asignadoEn?: true
    finalizadoEn?: true
    prioridad?: true
    ordenId?: true
    chefId?: true
  }

  export type OrdenItemMaxAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    nota?: true
    tipo?: true
    estado?: true
    creadoEn?: true
    asignadoEn?: true
    finalizadoEn?: true
    prioridad?: true
    ordenId?: true
    chefId?: true
  }

  export type OrdenItemCountAggregateInputType = {
    id?: true
    nombre?: true
    precio?: true
    nota?: true
    tipo?: true
    estado?: true
    creadoEn?: true
    asignadoEn?: true
    finalizadoEn?: true
    prioridad?: true
    ordenId?: true
    chefId?: true
    _all?: true
  }

  export type OrdenItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenItem to aggregate.
     */
    where?: OrdenItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenItems to fetch.
     */
    orderBy?: OrdenItemOrderByWithRelationInput | OrdenItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdenItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrdenItems
    **/
    _count?: true | OrdenItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdenItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdenItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdenItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdenItemMaxAggregateInputType
  }

  export type GetOrdenItemAggregateType<T extends OrdenItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrdenItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrdenItem[P]>
      : GetScalarType<T[P], AggregateOrdenItem[P]>
  }




  export type OrdenItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdenItemWhereInput
    orderBy?: OrdenItemOrderByWithAggregationInput | OrdenItemOrderByWithAggregationInput[]
    by: OrdenItemScalarFieldEnum[] | OrdenItemScalarFieldEnum
    having?: OrdenItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdenItemCountAggregateInputType | true
    _avg?: OrdenItemAvgAggregateInputType
    _sum?: OrdenItemSumAggregateInputType
    _min?: OrdenItemMinAggregateInputType
    _max?: OrdenItemMaxAggregateInputType
  }

  export type OrdenItemGroupByOutputType = {
    id: number
    nombre: string
    precio: number
    nota: string | null
    tipo: string
    estado: string
    creadoEn: Date
    asignadoEn: Date | null
    finalizadoEn: Date | null
    prioridad: number | null
    ordenId: number
    chefId: number | null
    _count: OrdenItemCountAggregateOutputType | null
    _avg: OrdenItemAvgAggregateOutputType | null
    _sum: OrdenItemSumAggregateOutputType | null
    _min: OrdenItemMinAggregateOutputType | null
    _max: OrdenItemMaxAggregateOutputType | null
  }

  type GetOrdenItemGroupByPayload<T extends OrdenItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdenItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdenItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdenItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrdenItemGroupByOutputType[P]>
        }
      >
    >


  export type OrdenItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    nota?: boolean
    tipo?: boolean
    estado?: boolean
    creadoEn?: boolean
    asignadoEn?: boolean
    finalizadoEn?: boolean
    prioridad?: boolean
    ordenId?: boolean
    chefId?: boolean
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    chef?: boolean | OrdenItem$chefArgs<ExtArgs>
  }, ExtArgs["result"]["ordenItem"]>

  export type OrdenItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    nota?: boolean
    tipo?: boolean
    estado?: boolean
    creadoEn?: boolean
    asignadoEn?: boolean
    finalizadoEn?: boolean
    prioridad?: boolean
    ordenId?: boolean
    chefId?: boolean
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    chef?: boolean | OrdenItem$chefArgs<ExtArgs>
  }, ExtArgs["result"]["ordenItem"]>

  export type OrdenItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    precio?: boolean
    nota?: boolean
    tipo?: boolean
    estado?: boolean
    creadoEn?: boolean
    asignadoEn?: boolean
    finalizadoEn?: boolean
    prioridad?: boolean
    ordenId?: boolean
    chefId?: boolean
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    chef?: boolean | OrdenItem$chefArgs<ExtArgs>
  }, ExtArgs["result"]["ordenItem"]>

  export type OrdenItemSelectScalar = {
    id?: boolean
    nombre?: boolean
    precio?: boolean
    nota?: boolean
    tipo?: boolean
    estado?: boolean
    creadoEn?: boolean
    asignadoEn?: boolean
    finalizadoEn?: boolean
    prioridad?: boolean
    ordenId?: boolean
    chefId?: boolean
  }

  export type OrdenItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "precio" | "nota" | "tipo" | "estado" | "creadoEn" | "asignadoEn" | "finalizadoEn" | "prioridad" | "ordenId" | "chefId", ExtArgs["result"]["ordenItem"]>
  export type OrdenItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    chef?: boolean | OrdenItem$chefArgs<ExtArgs>
  }
  export type OrdenItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    chef?: boolean | OrdenItem$chefArgs<ExtArgs>
  }
  export type OrdenItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orden?: boolean | OrdenDefaultArgs<ExtArgs>
    chef?: boolean | OrdenItem$chefArgs<ExtArgs>
  }

  export type $OrdenItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrdenItem"
    objects: {
      orden: Prisma.$OrdenPayload<ExtArgs>
      chef: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      precio: number
      nota: string | null
      tipo: string
      estado: string
      creadoEn: Date
      asignadoEn: Date | null
      finalizadoEn: Date | null
      prioridad: number | null
      ordenId: number
      chefId: number | null
    }, ExtArgs["result"]["ordenItem"]>
    composites: {}
  }

  type OrdenItemGetPayload<S extends boolean | null | undefined | OrdenItemDefaultArgs> = $Result.GetResult<Prisma.$OrdenItemPayload, S>

  type OrdenItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdenItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdenItemCountAggregateInputType | true
    }

  export interface OrdenItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrdenItem'], meta: { name: 'OrdenItem' } }
    /**
     * Find zero or one OrdenItem that matches the filter.
     * @param {OrdenItemFindUniqueArgs} args - Arguments to find a OrdenItem
     * @example
     * // Get one OrdenItem
     * const ordenItem = await prisma.ordenItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdenItemFindUniqueArgs>(args: SelectSubset<T, OrdenItemFindUniqueArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrdenItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdenItemFindUniqueOrThrowArgs} args - Arguments to find a OrdenItem
     * @example
     * // Get one OrdenItem
     * const ordenItem = await prisma.ordenItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdenItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdenItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenItemFindFirstArgs} args - Arguments to find a OrdenItem
     * @example
     * // Get one OrdenItem
     * const ordenItem = await prisma.ordenItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdenItemFindFirstArgs>(args?: SelectSubset<T, OrdenItemFindFirstArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdenItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenItemFindFirstOrThrowArgs} args - Arguments to find a OrdenItem
     * @example
     * // Get one OrdenItem
     * const ordenItem = await prisma.ordenItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdenItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdenItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrdenItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrdenItems
     * const ordenItems = await prisma.ordenItem.findMany()
     * 
     * // Get first 10 OrdenItems
     * const ordenItems = await prisma.ordenItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordenItemWithIdOnly = await prisma.ordenItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdenItemFindManyArgs>(args?: SelectSubset<T, OrdenItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrdenItem.
     * @param {OrdenItemCreateArgs} args - Arguments to create a OrdenItem.
     * @example
     * // Create one OrdenItem
     * const OrdenItem = await prisma.ordenItem.create({
     *   data: {
     *     // ... data to create a OrdenItem
     *   }
     * })
     * 
     */
    create<T extends OrdenItemCreateArgs>(args: SelectSubset<T, OrdenItemCreateArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrdenItems.
     * @param {OrdenItemCreateManyArgs} args - Arguments to create many OrdenItems.
     * @example
     * // Create many OrdenItems
     * const ordenItem = await prisma.ordenItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdenItemCreateManyArgs>(args?: SelectSubset<T, OrdenItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrdenItems and returns the data saved in the database.
     * @param {OrdenItemCreateManyAndReturnArgs} args - Arguments to create many OrdenItems.
     * @example
     * // Create many OrdenItems
     * const ordenItem = await prisma.ordenItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrdenItems and only return the `id`
     * const ordenItemWithIdOnly = await prisma.ordenItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdenItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdenItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrdenItem.
     * @param {OrdenItemDeleteArgs} args - Arguments to delete one OrdenItem.
     * @example
     * // Delete one OrdenItem
     * const OrdenItem = await prisma.ordenItem.delete({
     *   where: {
     *     // ... filter to delete one OrdenItem
     *   }
     * })
     * 
     */
    delete<T extends OrdenItemDeleteArgs>(args: SelectSubset<T, OrdenItemDeleteArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrdenItem.
     * @param {OrdenItemUpdateArgs} args - Arguments to update one OrdenItem.
     * @example
     * // Update one OrdenItem
     * const ordenItem = await prisma.ordenItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdenItemUpdateArgs>(args: SelectSubset<T, OrdenItemUpdateArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrdenItems.
     * @param {OrdenItemDeleteManyArgs} args - Arguments to filter OrdenItems to delete.
     * @example
     * // Delete a few OrdenItems
     * const { count } = await prisma.ordenItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdenItemDeleteManyArgs>(args?: SelectSubset<T, OrdenItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrdenItems
     * const ordenItem = await prisma.ordenItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdenItemUpdateManyArgs>(args: SelectSubset<T, OrdenItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdenItems and returns the data updated in the database.
     * @param {OrdenItemUpdateManyAndReturnArgs} args - Arguments to update many OrdenItems.
     * @example
     * // Update many OrdenItems
     * const ordenItem = await prisma.ordenItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrdenItems and only return the `id`
     * const ordenItemWithIdOnly = await prisma.ordenItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrdenItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdenItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrdenItem.
     * @param {OrdenItemUpsertArgs} args - Arguments to update or create a OrdenItem.
     * @example
     * // Update or create a OrdenItem
     * const ordenItem = await prisma.ordenItem.upsert({
     *   create: {
     *     // ... data to create a OrdenItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrdenItem we want to update
     *   }
     * })
     */
    upsert<T extends OrdenItemUpsertArgs>(args: SelectSubset<T, OrdenItemUpsertArgs<ExtArgs>>): Prisma__OrdenItemClient<$Result.GetResult<Prisma.$OrdenItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrdenItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenItemCountArgs} args - Arguments to filter OrdenItems to count.
     * @example
     * // Count the number of OrdenItems
     * const count = await prisma.ordenItem.count({
     *   where: {
     *     // ... the filter for the OrdenItems we want to count
     *   }
     * })
    **/
    count<T extends OrdenItemCountArgs>(
      args?: Subset<T, OrdenItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdenItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrdenItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdenItemAggregateArgs>(args: Subset<T, OrdenItemAggregateArgs>): Prisma.PrismaPromise<GetOrdenItemAggregateType<T>>

    /**
     * Group by OrdenItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdenItemGroupByArgs} args - Group by arguments.
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
      T extends OrdenItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdenItemGroupByArgs['orderBy'] }
        : { orderBy?: OrdenItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdenItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdenItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrdenItem model
   */
  readonly fields: OrdenItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrdenItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdenItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orden<T extends OrdenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdenDefaultArgs<ExtArgs>>): Prisma__OrdenClient<$Result.GetResult<Prisma.$OrdenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chef<T extends OrdenItem$chefArgs<ExtArgs> = {}>(args?: Subset<T, OrdenItem$chefArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrdenItem model
   */
  interface OrdenItemFieldRefs {
    readonly id: FieldRef<"OrdenItem", 'Int'>
    readonly nombre: FieldRef<"OrdenItem", 'String'>
    readonly precio: FieldRef<"OrdenItem", 'Float'>
    readonly nota: FieldRef<"OrdenItem", 'String'>
    readonly tipo: FieldRef<"OrdenItem", 'String'>
    readonly estado: FieldRef<"OrdenItem", 'String'>
    readonly creadoEn: FieldRef<"OrdenItem", 'DateTime'>
    readonly asignadoEn: FieldRef<"OrdenItem", 'DateTime'>
    readonly finalizadoEn: FieldRef<"OrdenItem", 'DateTime'>
    readonly prioridad: FieldRef<"OrdenItem", 'Int'>
    readonly ordenId: FieldRef<"OrdenItem", 'Int'>
    readonly chefId: FieldRef<"OrdenItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrdenItem findUnique
   */
  export type OrdenItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * Filter, which OrdenItem to fetch.
     */
    where: OrdenItemWhereUniqueInput
  }

  /**
   * OrdenItem findUniqueOrThrow
   */
  export type OrdenItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * Filter, which OrdenItem to fetch.
     */
    where: OrdenItemWhereUniqueInput
  }

  /**
   * OrdenItem findFirst
   */
  export type OrdenItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * Filter, which OrdenItem to fetch.
     */
    where?: OrdenItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenItems to fetch.
     */
    orderBy?: OrdenItemOrderByWithRelationInput | OrdenItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenItems.
     */
    cursor?: OrdenItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenItems.
     */
    distinct?: OrdenItemScalarFieldEnum | OrdenItemScalarFieldEnum[]
  }

  /**
   * OrdenItem findFirstOrThrow
   */
  export type OrdenItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * Filter, which OrdenItem to fetch.
     */
    where?: OrdenItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenItems to fetch.
     */
    orderBy?: OrdenItemOrderByWithRelationInput | OrdenItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdenItems.
     */
    cursor?: OrdenItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdenItems.
     */
    distinct?: OrdenItemScalarFieldEnum | OrdenItemScalarFieldEnum[]
  }

  /**
   * OrdenItem findMany
   */
  export type OrdenItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * Filter, which OrdenItems to fetch.
     */
    where?: OrdenItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdenItems to fetch.
     */
    orderBy?: OrdenItemOrderByWithRelationInput | OrdenItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrdenItems.
     */
    cursor?: OrdenItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdenItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdenItems.
     */
    skip?: number
    distinct?: OrdenItemScalarFieldEnum | OrdenItemScalarFieldEnum[]
  }

  /**
   * OrdenItem create
   */
  export type OrdenItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrdenItem.
     */
    data: XOR<OrdenItemCreateInput, OrdenItemUncheckedCreateInput>
  }

  /**
   * OrdenItem createMany
   */
  export type OrdenItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrdenItems.
     */
    data: OrdenItemCreateManyInput | OrdenItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrdenItem createManyAndReturn
   */
  export type OrdenItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrdenItems.
     */
    data: OrdenItemCreateManyInput | OrdenItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdenItem update
   */
  export type OrdenItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrdenItem.
     */
    data: XOR<OrdenItemUpdateInput, OrdenItemUncheckedUpdateInput>
    /**
     * Choose, which OrdenItem to update.
     */
    where: OrdenItemWhereUniqueInput
  }

  /**
   * OrdenItem updateMany
   */
  export type OrdenItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrdenItems.
     */
    data: XOR<OrdenItemUpdateManyMutationInput, OrdenItemUncheckedUpdateManyInput>
    /**
     * Filter which OrdenItems to update
     */
    where?: OrdenItemWhereInput
    /**
     * Limit how many OrdenItems to update.
     */
    limit?: number
  }

  /**
   * OrdenItem updateManyAndReturn
   */
  export type OrdenItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * The data used to update OrdenItems.
     */
    data: XOR<OrdenItemUpdateManyMutationInput, OrdenItemUncheckedUpdateManyInput>
    /**
     * Filter which OrdenItems to update
     */
    where?: OrdenItemWhereInput
    /**
     * Limit how many OrdenItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdenItem upsert
   */
  export type OrdenItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrdenItem to update in case it exists.
     */
    where: OrdenItemWhereUniqueInput
    /**
     * In case the OrdenItem found by the `where` argument doesn't exist, create a new OrdenItem with this data.
     */
    create: XOR<OrdenItemCreateInput, OrdenItemUncheckedCreateInput>
    /**
     * In case the OrdenItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdenItemUpdateInput, OrdenItemUncheckedUpdateInput>
  }

  /**
   * OrdenItem delete
   */
  export type OrdenItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
    /**
     * Filter which OrdenItem to delete.
     */
    where: OrdenItemWhereUniqueInput
  }

  /**
   * OrdenItem deleteMany
   */
  export type OrdenItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdenItems to delete
     */
    where?: OrdenItemWhereInput
    /**
     * Limit how many OrdenItems to delete.
     */
    limit?: number
  }

  /**
   * OrdenItem.chef
   */
  export type OrdenItem$chefArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UsuarioWhereInput
  }

  /**
   * OrdenItem without action
   */
  export type OrdenItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdenItem
     */
    select?: OrdenItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdenItem
     */
    omit?: OrdenItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdenItemInclude<ExtArgs> | null
  }


  /**
   * Model CocinaChef
   */

  export type AggregateCocinaChef = {
    _count: CocinaChefCountAggregateOutputType | null
    _avg: CocinaChefAvgAggregateOutputType | null
    _sum: CocinaChefSumAggregateOutputType | null
    _min: CocinaChefMinAggregateOutputType | null
    _max: CocinaChefMaxAggregateOutputType | null
  }

  export type CocinaChefAvgAggregateOutputType = {
    id: number | null
    chefId: number | null
  }

  export type CocinaChefSumAggregateOutputType = {
    id: number | null
    chefId: number | null
  }

  export type CocinaChefMinAggregateOutputType = {
    id: number | null
    chefId: number | null
    activo: boolean | null
    lastSeen: Date | null
  }

  export type CocinaChefMaxAggregateOutputType = {
    id: number | null
    chefId: number | null
    activo: boolean | null
    lastSeen: Date | null
  }

  export type CocinaChefCountAggregateOutputType = {
    id: number
    chefId: number
    activo: number
    lastSeen: number
    _all: number
  }


  export type CocinaChefAvgAggregateInputType = {
    id?: true
    chefId?: true
  }

  export type CocinaChefSumAggregateInputType = {
    id?: true
    chefId?: true
  }

  export type CocinaChefMinAggregateInputType = {
    id?: true
    chefId?: true
    activo?: true
    lastSeen?: true
  }

  export type CocinaChefMaxAggregateInputType = {
    id?: true
    chefId?: true
    activo?: true
    lastSeen?: true
  }

  export type CocinaChefCountAggregateInputType = {
    id?: true
    chefId?: true
    activo?: true
    lastSeen?: true
    _all?: true
  }

  export type CocinaChefAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CocinaChef to aggregate.
     */
    where?: CocinaChefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CocinaChefs to fetch.
     */
    orderBy?: CocinaChefOrderByWithRelationInput | CocinaChefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CocinaChefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CocinaChefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CocinaChefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CocinaChefs
    **/
    _count?: true | CocinaChefCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CocinaChefAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CocinaChefSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CocinaChefMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CocinaChefMaxAggregateInputType
  }

  export type GetCocinaChefAggregateType<T extends CocinaChefAggregateArgs> = {
        [P in keyof T & keyof AggregateCocinaChef]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCocinaChef[P]>
      : GetScalarType<T[P], AggregateCocinaChef[P]>
  }




  export type CocinaChefGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CocinaChefWhereInput
    orderBy?: CocinaChefOrderByWithAggregationInput | CocinaChefOrderByWithAggregationInput[]
    by: CocinaChefScalarFieldEnum[] | CocinaChefScalarFieldEnum
    having?: CocinaChefScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CocinaChefCountAggregateInputType | true
    _avg?: CocinaChefAvgAggregateInputType
    _sum?: CocinaChefSumAggregateInputType
    _min?: CocinaChefMinAggregateInputType
    _max?: CocinaChefMaxAggregateInputType
  }

  export type CocinaChefGroupByOutputType = {
    id: number
    chefId: number
    activo: boolean
    lastSeen: Date
    _count: CocinaChefCountAggregateOutputType | null
    _avg: CocinaChefAvgAggregateOutputType | null
    _sum: CocinaChefSumAggregateOutputType | null
    _min: CocinaChefMinAggregateOutputType | null
    _max: CocinaChefMaxAggregateOutputType | null
  }

  type GetCocinaChefGroupByPayload<T extends CocinaChefGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CocinaChefGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CocinaChefGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CocinaChefGroupByOutputType[P]>
            : GetScalarType<T[P], CocinaChefGroupByOutputType[P]>
        }
      >
    >


  export type CocinaChefSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chefId?: boolean
    activo?: boolean
    lastSeen?: boolean
    chef?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cocinaChef"]>

  export type CocinaChefSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chefId?: boolean
    activo?: boolean
    lastSeen?: boolean
    chef?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cocinaChef"]>

  export type CocinaChefSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chefId?: boolean
    activo?: boolean
    lastSeen?: boolean
    chef?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cocinaChef"]>

  export type CocinaChefSelectScalar = {
    id?: boolean
    chefId?: boolean
    activo?: boolean
    lastSeen?: boolean
  }

  export type CocinaChefOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chefId" | "activo" | "lastSeen", ExtArgs["result"]["cocinaChef"]>
  export type CocinaChefInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chef?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CocinaChefIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chef?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type CocinaChefIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chef?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $CocinaChefPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CocinaChef"
    objects: {
      chef: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chefId: number
      activo: boolean
      lastSeen: Date
    }, ExtArgs["result"]["cocinaChef"]>
    composites: {}
  }

  type CocinaChefGetPayload<S extends boolean | null | undefined | CocinaChefDefaultArgs> = $Result.GetResult<Prisma.$CocinaChefPayload, S>

  type CocinaChefCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CocinaChefFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CocinaChefCountAggregateInputType | true
    }

  export interface CocinaChefDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CocinaChef'], meta: { name: 'CocinaChef' } }
    /**
     * Find zero or one CocinaChef that matches the filter.
     * @param {CocinaChefFindUniqueArgs} args - Arguments to find a CocinaChef
     * @example
     * // Get one CocinaChef
     * const cocinaChef = await prisma.cocinaChef.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CocinaChefFindUniqueArgs>(args: SelectSubset<T, CocinaChefFindUniqueArgs<ExtArgs>>): Prisma__CocinaChefClient<$Result.GetResult<Prisma.$CocinaChefPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CocinaChef that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CocinaChefFindUniqueOrThrowArgs} args - Arguments to find a CocinaChef
     * @example
     * // Get one CocinaChef
     * const cocinaChef = await prisma.cocinaChef.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CocinaChefFindUniqueOrThrowArgs>(args: SelectSubset<T, CocinaChefFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CocinaChefClient<$Result.GetResult<Prisma.$CocinaChefPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CocinaChef that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CocinaChefFindFirstArgs} args - Arguments to find a CocinaChef
     * @example
     * // Get one CocinaChef
     * const cocinaChef = await prisma.cocinaChef.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CocinaChefFindFirstArgs>(args?: SelectSubset<T, CocinaChefFindFirstArgs<ExtArgs>>): Prisma__CocinaChefClient<$Result.GetResult<Prisma.$CocinaChefPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CocinaChef that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CocinaChefFindFirstOrThrowArgs} args - Arguments to find a CocinaChef
     * @example
     * // Get one CocinaChef
     * const cocinaChef = await prisma.cocinaChef.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CocinaChefFindFirstOrThrowArgs>(args?: SelectSubset<T, CocinaChefFindFirstOrThrowArgs<ExtArgs>>): Prisma__CocinaChefClient<$Result.GetResult<Prisma.$CocinaChefPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CocinaChefs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CocinaChefFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CocinaChefs
     * const cocinaChefs = await prisma.cocinaChef.findMany()
     * 
     * // Get first 10 CocinaChefs
     * const cocinaChefs = await prisma.cocinaChef.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cocinaChefWithIdOnly = await prisma.cocinaChef.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CocinaChefFindManyArgs>(args?: SelectSubset<T, CocinaChefFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CocinaChefPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CocinaChef.
     * @param {CocinaChefCreateArgs} args - Arguments to create a CocinaChef.
     * @example
     * // Create one CocinaChef
     * const CocinaChef = await prisma.cocinaChef.create({
     *   data: {
     *     // ... data to create a CocinaChef
     *   }
     * })
     * 
     */
    create<T extends CocinaChefCreateArgs>(args: SelectSubset<T, CocinaChefCreateArgs<ExtArgs>>): Prisma__CocinaChefClient<$Result.GetResult<Prisma.$CocinaChefPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CocinaChefs.
     * @param {CocinaChefCreateManyArgs} args - Arguments to create many CocinaChefs.
     * @example
     * // Create many CocinaChefs
     * const cocinaChef = await prisma.cocinaChef.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CocinaChefCreateManyArgs>(args?: SelectSubset<T, CocinaChefCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CocinaChefs and returns the data saved in the database.
     * @param {CocinaChefCreateManyAndReturnArgs} args - Arguments to create many CocinaChefs.
     * @example
     * // Create many CocinaChefs
     * const cocinaChef = await prisma.cocinaChef.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CocinaChefs and only return the `id`
     * const cocinaChefWithIdOnly = await prisma.cocinaChef.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CocinaChefCreateManyAndReturnArgs>(args?: SelectSubset<T, CocinaChefCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CocinaChefPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CocinaChef.
     * @param {CocinaChefDeleteArgs} args - Arguments to delete one CocinaChef.
     * @example
     * // Delete one CocinaChef
     * const CocinaChef = await prisma.cocinaChef.delete({
     *   where: {
     *     // ... filter to delete one CocinaChef
     *   }
     * })
     * 
     */
    delete<T extends CocinaChefDeleteArgs>(args: SelectSubset<T, CocinaChefDeleteArgs<ExtArgs>>): Prisma__CocinaChefClient<$Result.GetResult<Prisma.$CocinaChefPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CocinaChef.
     * @param {CocinaChefUpdateArgs} args - Arguments to update one CocinaChef.
     * @example
     * // Update one CocinaChef
     * const cocinaChef = await prisma.cocinaChef.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CocinaChefUpdateArgs>(args: SelectSubset<T, CocinaChefUpdateArgs<ExtArgs>>): Prisma__CocinaChefClient<$Result.GetResult<Prisma.$CocinaChefPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CocinaChefs.
     * @param {CocinaChefDeleteManyArgs} args - Arguments to filter CocinaChefs to delete.
     * @example
     * // Delete a few CocinaChefs
     * const { count } = await prisma.cocinaChef.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CocinaChefDeleteManyArgs>(args?: SelectSubset<T, CocinaChefDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CocinaChefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CocinaChefUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CocinaChefs
     * const cocinaChef = await prisma.cocinaChef.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CocinaChefUpdateManyArgs>(args: SelectSubset<T, CocinaChefUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CocinaChefs and returns the data updated in the database.
     * @param {CocinaChefUpdateManyAndReturnArgs} args - Arguments to update many CocinaChefs.
     * @example
     * // Update many CocinaChefs
     * const cocinaChef = await prisma.cocinaChef.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CocinaChefs and only return the `id`
     * const cocinaChefWithIdOnly = await prisma.cocinaChef.updateManyAndReturn({
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
    updateManyAndReturn<T extends CocinaChefUpdateManyAndReturnArgs>(args: SelectSubset<T, CocinaChefUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CocinaChefPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CocinaChef.
     * @param {CocinaChefUpsertArgs} args - Arguments to update or create a CocinaChef.
     * @example
     * // Update or create a CocinaChef
     * const cocinaChef = await prisma.cocinaChef.upsert({
     *   create: {
     *     // ... data to create a CocinaChef
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CocinaChef we want to update
     *   }
     * })
     */
    upsert<T extends CocinaChefUpsertArgs>(args: SelectSubset<T, CocinaChefUpsertArgs<ExtArgs>>): Prisma__CocinaChefClient<$Result.GetResult<Prisma.$CocinaChefPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CocinaChefs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CocinaChefCountArgs} args - Arguments to filter CocinaChefs to count.
     * @example
     * // Count the number of CocinaChefs
     * const count = await prisma.cocinaChef.count({
     *   where: {
     *     // ... the filter for the CocinaChefs we want to count
     *   }
     * })
    **/
    count<T extends CocinaChefCountArgs>(
      args?: Subset<T, CocinaChefCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CocinaChefCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CocinaChef.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CocinaChefAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CocinaChefAggregateArgs>(args: Subset<T, CocinaChefAggregateArgs>): Prisma.PrismaPromise<GetCocinaChefAggregateType<T>>

    /**
     * Group by CocinaChef.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CocinaChefGroupByArgs} args - Group by arguments.
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
      T extends CocinaChefGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CocinaChefGroupByArgs['orderBy'] }
        : { orderBy?: CocinaChefGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CocinaChefGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCocinaChefGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CocinaChef model
   */
  readonly fields: CocinaChefFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CocinaChef.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CocinaChefClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chef<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CocinaChef model
   */
  interface CocinaChefFieldRefs {
    readonly id: FieldRef<"CocinaChef", 'Int'>
    readonly chefId: FieldRef<"CocinaChef", 'Int'>
    readonly activo: FieldRef<"CocinaChef", 'Boolean'>
    readonly lastSeen: FieldRef<"CocinaChef", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CocinaChef findUnique
   */
  export type CocinaChefFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CocinaChef
     */
    select?: CocinaChefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CocinaChef
     */
    omit?: CocinaChefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CocinaChefInclude<ExtArgs> | null
    /**
     * Filter, which CocinaChef to fetch.
     */
    where: CocinaChefWhereUniqueInput
  }

  /**
   * CocinaChef findUniqueOrThrow
   */
  export type CocinaChefFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CocinaChef
     */
    select?: CocinaChefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CocinaChef
     */
    omit?: CocinaChefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CocinaChefInclude<ExtArgs> | null
    /**
     * Filter, which CocinaChef to fetch.
     */
    where: CocinaChefWhereUniqueInput
  }

  /**
   * CocinaChef findFirst
   */
  export type CocinaChefFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CocinaChef
     */
    select?: CocinaChefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CocinaChef
     */
    omit?: CocinaChefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CocinaChefInclude<ExtArgs> | null
    /**
     * Filter, which CocinaChef to fetch.
     */
    where?: CocinaChefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CocinaChefs to fetch.
     */
    orderBy?: CocinaChefOrderByWithRelationInput | CocinaChefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CocinaChefs.
     */
    cursor?: CocinaChefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CocinaChefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CocinaChefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CocinaChefs.
     */
    distinct?: CocinaChefScalarFieldEnum | CocinaChefScalarFieldEnum[]
  }

  /**
   * CocinaChef findFirstOrThrow
   */
  export type CocinaChefFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CocinaChef
     */
    select?: CocinaChefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CocinaChef
     */
    omit?: CocinaChefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CocinaChefInclude<ExtArgs> | null
    /**
     * Filter, which CocinaChef to fetch.
     */
    where?: CocinaChefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CocinaChefs to fetch.
     */
    orderBy?: CocinaChefOrderByWithRelationInput | CocinaChefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CocinaChefs.
     */
    cursor?: CocinaChefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CocinaChefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CocinaChefs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CocinaChefs.
     */
    distinct?: CocinaChefScalarFieldEnum | CocinaChefScalarFieldEnum[]
  }

  /**
   * CocinaChef findMany
   */
  export type CocinaChefFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CocinaChef
     */
    select?: CocinaChefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CocinaChef
     */
    omit?: CocinaChefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CocinaChefInclude<ExtArgs> | null
    /**
     * Filter, which CocinaChefs to fetch.
     */
    where?: CocinaChefWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CocinaChefs to fetch.
     */
    orderBy?: CocinaChefOrderByWithRelationInput | CocinaChefOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CocinaChefs.
     */
    cursor?: CocinaChefWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CocinaChefs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CocinaChefs.
     */
    skip?: number
    distinct?: CocinaChefScalarFieldEnum | CocinaChefScalarFieldEnum[]
  }

  /**
   * CocinaChef create
   */
  export type CocinaChefCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CocinaChef
     */
    select?: CocinaChefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CocinaChef
     */
    omit?: CocinaChefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CocinaChefInclude<ExtArgs> | null
    /**
     * The data needed to create a CocinaChef.
     */
    data: XOR<CocinaChefCreateInput, CocinaChefUncheckedCreateInput>
  }

  /**
   * CocinaChef createMany
   */
  export type CocinaChefCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CocinaChefs.
     */
    data: CocinaChefCreateManyInput | CocinaChefCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CocinaChef createManyAndReturn
   */
  export type CocinaChefCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CocinaChef
     */
    select?: CocinaChefSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CocinaChef
     */
    omit?: CocinaChefOmit<ExtArgs> | null
    /**
     * The data used to create many CocinaChefs.
     */
    data: CocinaChefCreateManyInput | CocinaChefCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CocinaChefIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CocinaChef update
   */
  export type CocinaChefUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CocinaChef
     */
    select?: CocinaChefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CocinaChef
     */
    omit?: CocinaChefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CocinaChefInclude<ExtArgs> | null
    /**
     * The data needed to update a CocinaChef.
     */
    data: XOR<CocinaChefUpdateInput, CocinaChefUncheckedUpdateInput>
    /**
     * Choose, which CocinaChef to update.
     */
    where: CocinaChefWhereUniqueInput
  }

  /**
   * CocinaChef updateMany
   */
  export type CocinaChefUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CocinaChefs.
     */
    data: XOR<CocinaChefUpdateManyMutationInput, CocinaChefUncheckedUpdateManyInput>
    /**
     * Filter which CocinaChefs to update
     */
    where?: CocinaChefWhereInput
    /**
     * Limit how many CocinaChefs to update.
     */
    limit?: number
  }

  /**
   * CocinaChef updateManyAndReturn
   */
  export type CocinaChefUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CocinaChef
     */
    select?: CocinaChefSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CocinaChef
     */
    omit?: CocinaChefOmit<ExtArgs> | null
    /**
     * The data used to update CocinaChefs.
     */
    data: XOR<CocinaChefUpdateManyMutationInput, CocinaChefUncheckedUpdateManyInput>
    /**
     * Filter which CocinaChefs to update
     */
    where?: CocinaChefWhereInput
    /**
     * Limit how many CocinaChefs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CocinaChefIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CocinaChef upsert
   */
  export type CocinaChefUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CocinaChef
     */
    select?: CocinaChefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CocinaChef
     */
    omit?: CocinaChefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CocinaChefInclude<ExtArgs> | null
    /**
     * The filter to search for the CocinaChef to update in case it exists.
     */
    where: CocinaChefWhereUniqueInput
    /**
     * In case the CocinaChef found by the `where` argument doesn't exist, create a new CocinaChef with this data.
     */
    create: XOR<CocinaChefCreateInput, CocinaChefUncheckedCreateInput>
    /**
     * In case the CocinaChef was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CocinaChefUpdateInput, CocinaChefUncheckedUpdateInput>
  }

  /**
   * CocinaChef delete
   */
  export type CocinaChefDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CocinaChef
     */
    select?: CocinaChefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CocinaChef
     */
    omit?: CocinaChefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CocinaChefInclude<ExtArgs> | null
    /**
     * Filter which CocinaChef to delete.
     */
    where: CocinaChefWhereUniqueInput
  }

  /**
   * CocinaChef deleteMany
   */
  export type CocinaChefDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CocinaChefs to delete
     */
    where?: CocinaChefWhereInput
    /**
     * Limit how many CocinaChefs to delete.
     */
    limit?: number
  }

  /**
   * CocinaChef without action
   */
  export type CocinaChefDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CocinaChef
     */
    select?: CocinaChefSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CocinaChef
     */
    omit?: CocinaChefOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CocinaChefInclude<ExtArgs> | null
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
    nombre: 'nombre',
    usuario: 'usuario',
    correo: 'correo',
    contrasena: 'contrasena',
    estado: 'estado',
    creadoEn: 'creadoEn',
    actualizadoEn: 'actualizadoEn',
    rolId: 'rolId'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const PermisoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type PermisoScalarFieldEnum = (typeof PermisoScalarFieldEnum)[keyof typeof PermisoScalarFieldEnum]


  export const PermisoPorRolScalarFieldEnum: {
    id: 'id',
    permisoId: 'permisoId',
    rolId: 'rolId'
  };

  export type PermisoPorRolScalarFieldEnum = (typeof PermisoPorRolScalarFieldEnum)[keyof typeof PermisoPorRolScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    activo: 'activo',
    creadoEn: 'creadoEn'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const PlatilloScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    precio: 'precio',
    creadoEn: 'creadoEn',
    disponible: 'disponible',
    imagenUrl: 'imagenUrl',
    categoriaId: 'categoriaId'
  };

  export type PlatilloScalarFieldEnum = (typeof PlatilloScalarFieldEnum)[keyof typeof PlatilloScalarFieldEnum]


  export const HistorialModificacionScalarFieldEnum: {
    id: 'id',
    campo: 'campo',
    valorAnterior: 'valorAnterior',
    valorNuevo: 'valorNuevo',
    fecha: 'fecha',
    accion: 'accion',
    responsableId: 'responsableId',
    usuarioId: 'usuarioId',
    platilloId: 'platilloId'
  };

  export type HistorialModificacionScalarFieldEnum = (typeof HistorialModificacionScalarFieldEnum)[keyof typeof HistorialModificacionScalarFieldEnum]


  export const OrdenScalarFieldEnum: {
    id: 'id',
    codigo: 'codigo',
    mesa: 'mesa',
    fecha: 'fecha',
    finishedAt: 'finishedAt',
    durationSec: 'durationSec',
    meseroId: 'meseroId',
    estado: 'estado'
  };

  export type OrdenScalarFieldEnum = (typeof OrdenScalarFieldEnum)[keyof typeof OrdenScalarFieldEnum]


  export const OrdenItemScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    precio: 'precio',
    nota: 'nota',
    tipo: 'tipo',
    estado: 'estado',
    creadoEn: 'creadoEn',
    asignadoEn: 'asignadoEn',
    finalizadoEn: 'finalizadoEn',
    prioridad: 'prioridad',
    ordenId: 'ordenId',
    chefId: 'chefId'
  };

  export type OrdenItemScalarFieldEnum = (typeof OrdenItemScalarFieldEnum)[keyof typeof OrdenItemScalarFieldEnum]


  export const CocinaChefScalarFieldEnum: {
    id: 'id',
    chefId: 'chefId',
    activo: 'activo',
    lastSeen: 'lastSeen'
  };

  export type CocinaChefScalarFieldEnum = (typeof CocinaChefScalarFieldEnum)[keyof typeof CocinaChefScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    usuario?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    estado?: BoolFilter<"Usuario"> | boolean
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Usuario"> | Date | string
    rolId?: IntFilter<"Usuario"> | number
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    historialModificaciones?: HistorialModificacionListRelationFilter
    historialResponsable?: HistorialModificacionListRelationFilter
    ordenesMesero?: OrdenListRelationFilter
    itemsAsignados?: OrdenItemListRelationFilter
    cocinaEstado?: XOR<CocinaChefNullableScalarRelationFilter, CocinaChefWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    rolId?: SortOrder
    rol?: RolOrderByWithRelationInput
    historialModificaciones?: HistorialModificacionOrderByRelationAggregateInput
    historialResponsable?: HistorialModificacionOrderByRelationAggregateInput
    ordenesMesero?: OrdenOrderByRelationAggregateInput
    itemsAsignados?: OrdenItemOrderByRelationAggregateInput
    cocinaEstado?: CocinaChefOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuario?: string
    correo?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    estado?: BoolFilter<"Usuario"> | boolean
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Usuario"> | Date | string
    rolId?: IntFilter<"Usuario"> | number
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
    historialModificaciones?: HistorialModificacionListRelationFilter
    historialResponsable?: HistorialModificacionListRelationFilter
    ordenesMesero?: OrdenListRelationFilter
    itemsAsignados?: OrdenItemListRelationFilter
    cocinaEstado?: XOR<CocinaChefNullableScalarRelationFilter, CocinaChefWhereInput> | null
  }, "id" | "usuario" | "correo">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    rolId?: SortOrder
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
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    usuario?: StringWithAggregatesFilter<"Usuario"> | string
    correo?: StringWithAggregatesFilter<"Usuario"> | string
    contrasena?: StringWithAggregatesFilter<"Usuario"> | string
    estado?: BoolWithAggregatesFilter<"Usuario"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    rolId?: IntWithAggregatesFilter<"Usuario"> | number
  }

  export type RolWhereInput = {
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    id?: IntFilter<"Rol"> | number
    nombre?: StringFilter<"Rol"> | string
    usuarios?: UsuarioListRelationFilter
    permisos?: PermisoPorRolListRelationFilter
  }

  export type RolOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
    permisos?: PermisoPorRolOrderByRelationAggregateInput
  }

  export type RolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: RolWhereInput | RolWhereInput[]
    OR?: RolWhereInput[]
    NOT?: RolWhereInput | RolWhereInput[]
    usuarios?: UsuarioListRelationFilter
    permisos?: PermisoPorRolListRelationFilter
  }, "id" | "nombre">

  export type RolOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: RolCountOrderByAggregateInput
    _avg?: RolAvgOrderByAggregateInput
    _max?: RolMaxOrderByAggregateInput
    _min?: RolMinOrderByAggregateInput
    _sum?: RolSumOrderByAggregateInput
  }

  export type RolScalarWhereWithAggregatesInput = {
    AND?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    OR?: RolScalarWhereWithAggregatesInput[]
    NOT?: RolScalarWhereWithAggregatesInput | RolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rol"> | number
    nombre?: StringWithAggregatesFilter<"Rol"> | string
  }

  export type PermisoWhereInput = {
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    id?: IntFilter<"Permiso"> | number
    nombre?: StringFilter<"Permiso"> | string
    descripcion?: StringNullableFilter<"Permiso"> | string | null
    roles?: PermisoPorRolListRelationFilter
  }

  export type PermisoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    roles?: PermisoPorRolOrderByRelationAggregateInput
  }

  export type PermisoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: PermisoWhereInput | PermisoWhereInput[]
    OR?: PermisoWhereInput[]
    NOT?: PermisoWhereInput | PermisoWhereInput[]
    descripcion?: StringNullableFilter<"Permiso"> | string | null
    roles?: PermisoPorRolListRelationFilter
  }, "id" | "nombre">

  export type PermisoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: PermisoCountOrderByAggregateInput
    _avg?: PermisoAvgOrderByAggregateInput
    _max?: PermisoMaxOrderByAggregateInput
    _min?: PermisoMinOrderByAggregateInput
    _sum?: PermisoSumOrderByAggregateInput
  }

  export type PermisoScalarWhereWithAggregatesInput = {
    AND?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    OR?: PermisoScalarWhereWithAggregatesInput[]
    NOT?: PermisoScalarWhereWithAggregatesInput | PermisoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Permiso"> | number
    nombre?: StringWithAggregatesFilter<"Permiso"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Permiso"> | string | null
  }

  export type PermisoPorRolWhereInput = {
    AND?: PermisoPorRolWhereInput | PermisoPorRolWhereInput[]
    OR?: PermisoPorRolWhereInput[]
    NOT?: PermisoPorRolWhereInput | PermisoPorRolWhereInput[]
    id?: IntFilter<"PermisoPorRol"> | number
    permisoId?: IntFilter<"PermisoPorRol"> | number
    rolId?: IntFilter<"PermisoPorRol"> | number
    permiso?: XOR<PermisoScalarRelationFilter, PermisoWhereInput>
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
  }

  export type PermisoPorRolOrderByWithRelationInput = {
    id?: SortOrder
    permisoId?: SortOrder
    rolId?: SortOrder
    permiso?: PermisoOrderByWithRelationInput
    rol?: RolOrderByWithRelationInput
  }

  export type PermisoPorRolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    permisoId_rolId?: PermisoPorRolPermisoIdRolIdCompoundUniqueInput
    AND?: PermisoPorRolWhereInput | PermisoPorRolWhereInput[]
    OR?: PermisoPorRolWhereInput[]
    NOT?: PermisoPorRolWhereInput | PermisoPorRolWhereInput[]
    permisoId?: IntFilter<"PermisoPorRol"> | number
    rolId?: IntFilter<"PermisoPorRol"> | number
    permiso?: XOR<PermisoScalarRelationFilter, PermisoWhereInput>
    rol?: XOR<RolScalarRelationFilter, RolWhereInput>
  }, "id" | "permisoId_rolId">

  export type PermisoPorRolOrderByWithAggregationInput = {
    id?: SortOrder
    permisoId?: SortOrder
    rolId?: SortOrder
    _count?: PermisoPorRolCountOrderByAggregateInput
    _avg?: PermisoPorRolAvgOrderByAggregateInput
    _max?: PermisoPorRolMaxOrderByAggregateInput
    _min?: PermisoPorRolMinOrderByAggregateInput
    _sum?: PermisoPorRolSumOrderByAggregateInput
  }

  export type PermisoPorRolScalarWhereWithAggregatesInput = {
    AND?: PermisoPorRolScalarWhereWithAggregatesInput | PermisoPorRolScalarWhereWithAggregatesInput[]
    OR?: PermisoPorRolScalarWhereWithAggregatesInput[]
    NOT?: PermisoPorRolScalarWhereWithAggregatesInput | PermisoPorRolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PermisoPorRol"> | number
    permisoId?: IntWithAggregatesFilter<"PermisoPorRol"> | number
    rolId?: IntWithAggregatesFilter<"PermisoPorRol"> | number
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nombre?: StringFilter<"Categoria"> | string
    activo?: BoolFilter<"Categoria"> | boolean
    creadoEn?: DateTimeFilter<"Categoria"> | Date | string
    platillos?: PlatilloListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    platillos?: PlatilloOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    activo?: BoolFilter<"Categoria"> | boolean
    creadoEn?: DateTimeFilter<"Categoria"> | Date | string
    platillos?: PlatilloListRelationFilter
  }, "id" | "nombre">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nombre?: StringWithAggregatesFilter<"Categoria"> | string
    activo?: BoolWithAggregatesFilter<"Categoria"> | boolean
    creadoEn?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
  }

  export type PlatilloWhereInput = {
    AND?: PlatilloWhereInput | PlatilloWhereInput[]
    OR?: PlatilloWhereInput[]
    NOT?: PlatilloWhereInput | PlatilloWhereInput[]
    id?: IntFilter<"Platillo"> | number
    nombre?: StringFilter<"Platillo"> | string
    precio?: FloatFilter<"Platillo"> | number
    creadoEn?: DateTimeFilter<"Platillo"> | Date | string
    disponible?: BoolFilter<"Platillo"> | boolean
    imagenUrl?: StringNullableFilter<"Platillo"> | string | null
    categoriaId?: IntFilter<"Platillo"> | number
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    historialModificaciones?: HistorialModificacionListRelationFilter
  }

  export type PlatilloOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    creadoEn?: SortOrder
    disponible?: SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    categoriaId?: SortOrder
    categoria?: CategoriaOrderByWithRelationInput
    historialModificaciones?: HistorialModificacionOrderByRelationAggregateInput
  }

  export type PlatilloWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: PlatilloWhereInput | PlatilloWhereInput[]
    OR?: PlatilloWhereInput[]
    NOT?: PlatilloWhereInput | PlatilloWhereInput[]
    precio?: FloatFilter<"Platillo"> | number
    creadoEn?: DateTimeFilter<"Platillo"> | Date | string
    disponible?: BoolFilter<"Platillo"> | boolean
    imagenUrl?: StringNullableFilter<"Platillo"> | string | null
    categoriaId?: IntFilter<"Platillo"> | number
    categoria?: XOR<CategoriaScalarRelationFilter, CategoriaWhereInput>
    historialModificaciones?: HistorialModificacionListRelationFilter
  }, "id" | "nombre">

  export type PlatilloOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    creadoEn?: SortOrder
    disponible?: SortOrder
    imagenUrl?: SortOrderInput | SortOrder
    categoriaId?: SortOrder
    _count?: PlatilloCountOrderByAggregateInput
    _avg?: PlatilloAvgOrderByAggregateInput
    _max?: PlatilloMaxOrderByAggregateInput
    _min?: PlatilloMinOrderByAggregateInput
    _sum?: PlatilloSumOrderByAggregateInput
  }

  export type PlatilloScalarWhereWithAggregatesInput = {
    AND?: PlatilloScalarWhereWithAggregatesInput | PlatilloScalarWhereWithAggregatesInput[]
    OR?: PlatilloScalarWhereWithAggregatesInput[]
    NOT?: PlatilloScalarWhereWithAggregatesInput | PlatilloScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Platillo"> | number
    nombre?: StringWithAggregatesFilter<"Platillo"> | string
    precio?: FloatWithAggregatesFilter<"Platillo"> | number
    creadoEn?: DateTimeWithAggregatesFilter<"Platillo"> | Date | string
    disponible?: BoolWithAggregatesFilter<"Platillo"> | boolean
    imagenUrl?: StringNullableWithAggregatesFilter<"Platillo"> | string | null
    categoriaId?: IntWithAggregatesFilter<"Platillo"> | number
  }

  export type HistorialModificacionWhereInput = {
    AND?: HistorialModificacionWhereInput | HistorialModificacionWhereInput[]
    OR?: HistorialModificacionWhereInput[]
    NOT?: HistorialModificacionWhereInput | HistorialModificacionWhereInput[]
    id?: IntFilter<"HistorialModificacion"> | number
    campo?: StringFilter<"HistorialModificacion"> | string
    valorAnterior?: StringNullableFilter<"HistorialModificacion"> | string | null
    valorNuevo?: StringNullableFilter<"HistorialModificacion"> | string | null
    fecha?: DateTimeFilter<"HistorialModificacion"> | Date | string
    accion?: StringFilter<"HistorialModificacion"> | string
    responsableId?: IntFilter<"HistorialModificacion"> | number
    usuarioId?: IntNullableFilter<"HistorialModificacion"> | number | null
    platilloId?: IntNullableFilter<"HistorialModificacion"> | number | null
    responsable?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    platillo?: XOR<PlatilloNullableScalarRelationFilter, PlatilloWhereInput> | null
  }

  export type HistorialModificacionOrderByWithRelationInput = {
    id?: SortOrder
    campo?: SortOrder
    valorAnterior?: SortOrderInput | SortOrder
    valorNuevo?: SortOrderInput | SortOrder
    fecha?: SortOrder
    accion?: SortOrder
    responsableId?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    platilloId?: SortOrderInput | SortOrder
    responsable?: UsuarioOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    platillo?: PlatilloOrderByWithRelationInput
  }

  export type HistorialModificacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistorialModificacionWhereInput | HistorialModificacionWhereInput[]
    OR?: HistorialModificacionWhereInput[]
    NOT?: HistorialModificacionWhereInput | HistorialModificacionWhereInput[]
    campo?: StringFilter<"HistorialModificacion"> | string
    valorAnterior?: StringNullableFilter<"HistorialModificacion"> | string | null
    valorNuevo?: StringNullableFilter<"HistorialModificacion"> | string | null
    fecha?: DateTimeFilter<"HistorialModificacion"> | Date | string
    accion?: StringFilter<"HistorialModificacion"> | string
    responsableId?: IntFilter<"HistorialModificacion"> | number
    usuarioId?: IntNullableFilter<"HistorialModificacion"> | number | null
    platilloId?: IntNullableFilter<"HistorialModificacion"> | number | null
    responsable?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    platillo?: XOR<PlatilloNullableScalarRelationFilter, PlatilloWhereInput> | null
  }, "id">

  export type HistorialModificacionOrderByWithAggregationInput = {
    id?: SortOrder
    campo?: SortOrder
    valorAnterior?: SortOrderInput | SortOrder
    valorNuevo?: SortOrderInput | SortOrder
    fecha?: SortOrder
    accion?: SortOrder
    responsableId?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    platilloId?: SortOrderInput | SortOrder
    _count?: HistorialModificacionCountOrderByAggregateInput
    _avg?: HistorialModificacionAvgOrderByAggregateInput
    _max?: HistorialModificacionMaxOrderByAggregateInput
    _min?: HistorialModificacionMinOrderByAggregateInput
    _sum?: HistorialModificacionSumOrderByAggregateInput
  }

  export type HistorialModificacionScalarWhereWithAggregatesInput = {
    AND?: HistorialModificacionScalarWhereWithAggregatesInput | HistorialModificacionScalarWhereWithAggregatesInput[]
    OR?: HistorialModificacionScalarWhereWithAggregatesInput[]
    NOT?: HistorialModificacionScalarWhereWithAggregatesInput | HistorialModificacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"HistorialModificacion"> | number
    campo?: StringWithAggregatesFilter<"HistorialModificacion"> | string
    valorAnterior?: StringNullableWithAggregatesFilter<"HistorialModificacion"> | string | null
    valorNuevo?: StringNullableWithAggregatesFilter<"HistorialModificacion"> | string | null
    fecha?: DateTimeWithAggregatesFilter<"HistorialModificacion"> | Date | string
    accion?: StringWithAggregatesFilter<"HistorialModificacion"> | string
    responsableId?: IntWithAggregatesFilter<"HistorialModificacion"> | number
    usuarioId?: IntNullableWithAggregatesFilter<"HistorialModificacion"> | number | null
    platilloId?: IntNullableWithAggregatesFilter<"HistorialModificacion"> | number | null
  }

  export type OrdenWhereInput = {
    AND?: OrdenWhereInput | OrdenWhereInput[]
    OR?: OrdenWhereInput[]
    NOT?: OrdenWhereInput | OrdenWhereInput[]
    id?: IntFilter<"Orden"> | number
    codigo?: StringFilter<"Orden"> | string
    mesa?: IntFilter<"Orden"> | number
    fecha?: DateTimeFilter<"Orden"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Orden"> | Date | string | null
    durationSec?: IntNullableFilter<"Orden"> | number | null
    meseroId?: IntFilter<"Orden"> | number
    estado?: StringFilter<"Orden"> | string
    mesero?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    items?: OrdenItemListRelationFilter
  }

  export type OrdenOrderByWithRelationInput = {
    id?: SortOrder
    codigo?: SortOrder
    mesa?: SortOrder
    fecha?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    durationSec?: SortOrderInput | SortOrder
    meseroId?: SortOrder
    estado?: SortOrder
    mesero?: UsuarioOrderByWithRelationInput
    items?: OrdenItemOrderByRelationAggregateInput
  }

  export type OrdenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    codigo?: string
    AND?: OrdenWhereInput | OrdenWhereInput[]
    OR?: OrdenWhereInput[]
    NOT?: OrdenWhereInput | OrdenWhereInput[]
    mesa?: IntFilter<"Orden"> | number
    fecha?: DateTimeFilter<"Orden"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Orden"> | Date | string | null
    durationSec?: IntNullableFilter<"Orden"> | number | null
    meseroId?: IntFilter<"Orden"> | number
    estado?: StringFilter<"Orden"> | string
    mesero?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    items?: OrdenItemListRelationFilter
  }, "id" | "codigo">

  export type OrdenOrderByWithAggregationInput = {
    id?: SortOrder
    codigo?: SortOrder
    mesa?: SortOrder
    fecha?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    durationSec?: SortOrderInput | SortOrder
    meseroId?: SortOrder
    estado?: SortOrder
    _count?: OrdenCountOrderByAggregateInput
    _avg?: OrdenAvgOrderByAggregateInput
    _max?: OrdenMaxOrderByAggregateInput
    _min?: OrdenMinOrderByAggregateInput
    _sum?: OrdenSumOrderByAggregateInput
  }

  export type OrdenScalarWhereWithAggregatesInput = {
    AND?: OrdenScalarWhereWithAggregatesInput | OrdenScalarWhereWithAggregatesInput[]
    OR?: OrdenScalarWhereWithAggregatesInput[]
    NOT?: OrdenScalarWhereWithAggregatesInput | OrdenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Orden"> | number
    codigo?: StringWithAggregatesFilter<"Orden"> | string
    mesa?: IntWithAggregatesFilter<"Orden"> | number
    fecha?: DateTimeWithAggregatesFilter<"Orden"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Orden"> | Date | string | null
    durationSec?: IntNullableWithAggregatesFilter<"Orden"> | number | null
    meseroId?: IntWithAggregatesFilter<"Orden"> | number
    estado?: StringWithAggregatesFilter<"Orden"> | string
  }

  export type OrdenItemWhereInput = {
    AND?: OrdenItemWhereInput | OrdenItemWhereInput[]
    OR?: OrdenItemWhereInput[]
    NOT?: OrdenItemWhereInput | OrdenItemWhereInput[]
    id?: IntFilter<"OrdenItem"> | number
    nombre?: StringFilter<"OrdenItem"> | string
    precio?: FloatFilter<"OrdenItem"> | number
    nota?: StringNullableFilter<"OrdenItem"> | string | null
    tipo?: StringFilter<"OrdenItem"> | string
    estado?: StringFilter<"OrdenItem"> | string
    creadoEn?: DateTimeFilter<"OrdenItem"> | Date | string
    asignadoEn?: DateTimeNullableFilter<"OrdenItem"> | Date | string | null
    finalizadoEn?: DateTimeNullableFilter<"OrdenItem"> | Date | string | null
    prioridad?: IntNullableFilter<"OrdenItem"> | number | null
    ordenId?: IntFilter<"OrdenItem"> | number
    chefId?: IntNullableFilter<"OrdenItem"> | number | null
    orden?: XOR<OrdenScalarRelationFilter, OrdenWhereInput>
    chef?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }

  export type OrdenItemOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    nota?: SortOrderInput | SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    asignadoEn?: SortOrderInput | SortOrder
    finalizadoEn?: SortOrderInput | SortOrder
    prioridad?: SortOrderInput | SortOrder
    ordenId?: SortOrder
    chefId?: SortOrderInput | SortOrder
    orden?: OrdenOrderByWithRelationInput
    chef?: UsuarioOrderByWithRelationInput
  }

  export type OrdenItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrdenItemWhereInput | OrdenItemWhereInput[]
    OR?: OrdenItemWhereInput[]
    NOT?: OrdenItemWhereInput | OrdenItemWhereInput[]
    nombre?: StringFilter<"OrdenItem"> | string
    precio?: FloatFilter<"OrdenItem"> | number
    nota?: StringNullableFilter<"OrdenItem"> | string | null
    tipo?: StringFilter<"OrdenItem"> | string
    estado?: StringFilter<"OrdenItem"> | string
    creadoEn?: DateTimeFilter<"OrdenItem"> | Date | string
    asignadoEn?: DateTimeNullableFilter<"OrdenItem"> | Date | string | null
    finalizadoEn?: DateTimeNullableFilter<"OrdenItem"> | Date | string | null
    prioridad?: IntNullableFilter<"OrdenItem"> | number | null
    ordenId?: IntFilter<"OrdenItem"> | number
    chefId?: IntNullableFilter<"OrdenItem"> | number | null
    orden?: XOR<OrdenScalarRelationFilter, OrdenWhereInput>
    chef?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
  }, "id">

  export type OrdenItemOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    nota?: SortOrderInput | SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    asignadoEn?: SortOrderInput | SortOrder
    finalizadoEn?: SortOrderInput | SortOrder
    prioridad?: SortOrderInput | SortOrder
    ordenId?: SortOrder
    chefId?: SortOrderInput | SortOrder
    _count?: OrdenItemCountOrderByAggregateInput
    _avg?: OrdenItemAvgOrderByAggregateInput
    _max?: OrdenItemMaxOrderByAggregateInput
    _min?: OrdenItemMinOrderByAggregateInput
    _sum?: OrdenItemSumOrderByAggregateInput
  }

  export type OrdenItemScalarWhereWithAggregatesInput = {
    AND?: OrdenItemScalarWhereWithAggregatesInput | OrdenItemScalarWhereWithAggregatesInput[]
    OR?: OrdenItemScalarWhereWithAggregatesInput[]
    NOT?: OrdenItemScalarWhereWithAggregatesInput | OrdenItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrdenItem"> | number
    nombre?: StringWithAggregatesFilter<"OrdenItem"> | string
    precio?: FloatWithAggregatesFilter<"OrdenItem"> | number
    nota?: StringNullableWithAggregatesFilter<"OrdenItem"> | string | null
    tipo?: StringWithAggregatesFilter<"OrdenItem"> | string
    estado?: StringWithAggregatesFilter<"OrdenItem"> | string
    creadoEn?: DateTimeWithAggregatesFilter<"OrdenItem"> | Date | string
    asignadoEn?: DateTimeNullableWithAggregatesFilter<"OrdenItem"> | Date | string | null
    finalizadoEn?: DateTimeNullableWithAggregatesFilter<"OrdenItem"> | Date | string | null
    prioridad?: IntNullableWithAggregatesFilter<"OrdenItem"> | number | null
    ordenId?: IntWithAggregatesFilter<"OrdenItem"> | number
    chefId?: IntNullableWithAggregatesFilter<"OrdenItem"> | number | null
  }

  export type CocinaChefWhereInput = {
    AND?: CocinaChefWhereInput | CocinaChefWhereInput[]
    OR?: CocinaChefWhereInput[]
    NOT?: CocinaChefWhereInput | CocinaChefWhereInput[]
    id?: IntFilter<"CocinaChef"> | number
    chefId?: IntFilter<"CocinaChef"> | number
    activo?: BoolFilter<"CocinaChef"> | boolean
    lastSeen?: DateTimeFilter<"CocinaChef"> | Date | string
    chef?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type CocinaChefOrderByWithRelationInput = {
    id?: SortOrder
    chefId?: SortOrder
    activo?: SortOrder
    lastSeen?: SortOrder
    chef?: UsuarioOrderByWithRelationInput
  }

  export type CocinaChefWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    chefId?: number
    AND?: CocinaChefWhereInput | CocinaChefWhereInput[]
    OR?: CocinaChefWhereInput[]
    NOT?: CocinaChefWhereInput | CocinaChefWhereInput[]
    activo?: BoolFilter<"CocinaChef"> | boolean
    lastSeen?: DateTimeFilter<"CocinaChef"> | Date | string
    chef?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "chefId">

  export type CocinaChefOrderByWithAggregationInput = {
    id?: SortOrder
    chefId?: SortOrder
    activo?: SortOrder
    lastSeen?: SortOrder
    _count?: CocinaChefCountOrderByAggregateInput
    _avg?: CocinaChefAvgOrderByAggregateInput
    _max?: CocinaChefMaxOrderByAggregateInput
    _min?: CocinaChefMinOrderByAggregateInput
    _sum?: CocinaChefSumOrderByAggregateInput
  }

  export type CocinaChefScalarWhereWithAggregatesInput = {
    AND?: CocinaChefScalarWhereWithAggregatesInput | CocinaChefScalarWhereWithAggregatesInput[]
    OR?: CocinaChefScalarWhereWithAggregatesInput[]
    NOT?: CocinaChefScalarWhereWithAggregatesInput | CocinaChefScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CocinaChef"> | number
    chefId?: IntWithAggregatesFilter<"CocinaChef"> | number
    activo?: BoolWithAggregatesFilter<"CocinaChef"> | boolean
    lastSeen?: DateTimeWithAggregatesFilter<"CocinaChef"> | Date | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
    historialModificaciones?: HistorialModificacionCreateNestedManyWithoutUsuarioInput
    historialResponsable?: HistorialModificacionCreateNestedManyWithoutResponsableInput
    ordenesMesero?: OrdenCreateNestedManyWithoutMeseroInput
    itemsAsignados?: OrdenItemCreateNestedManyWithoutChefInput
    cocinaEstado?: CocinaChefCreateNestedOneWithoutChefInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rolId: number
    historialModificaciones?: HistorialModificacionUncheckedCreateNestedManyWithoutUsuarioInput
    historialResponsable?: HistorialModificacionUncheckedCreateNestedManyWithoutResponsableInput
    ordenesMesero?: OrdenUncheckedCreateNestedManyWithoutMeseroInput
    itemsAsignados?: OrdenItemUncheckedCreateNestedManyWithoutChefInput
    cocinaEstado?: CocinaChefUncheckedCreateNestedOneWithoutChefInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    historialModificaciones?: HistorialModificacionUpdateManyWithoutUsuarioNestedInput
    historialResponsable?: HistorialModificacionUpdateManyWithoutResponsableNestedInput
    ordenesMesero?: OrdenUpdateManyWithoutMeseroNestedInput
    itemsAsignados?: OrdenItemUpdateManyWithoutChefNestedInput
    cocinaEstado?: CocinaChefUpdateOneWithoutChefNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: IntFieldUpdateOperationsInput | number
    historialModificaciones?: HistorialModificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    historialResponsable?: HistorialModificacionUncheckedUpdateManyWithoutResponsableNestedInput
    ordenesMesero?: OrdenUncheckedUpdateManyWithoutMeseroNestedInput
    itemsAsignados?: OrdenItemUncheckedUpdateManyWithoutChefNestedInput
    cocinaEstado?: CocinaChefUncheckedUpdateOneWithoutChefNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rolId: number
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type RolCreateInput = {
    nombre: string
    usuarios?: UsuarioCreateNestedManyWithoutRolInput
    permisos?: PermisoPorRolCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRolInput
    permisos?: PermisoPorRolUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutRolNestedInput
    permisos?: PermisoPorRolUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutRolNestedInput
    permisos?: PermisoPorRolUncheckedUpdateManyWithoutRolNestedInput
  }

  export type RolCreateManyInput = {
    id?: number
    nombre: string
  }

  export type RolUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type RolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PermisoCreateInput = {
    nombre: string
    descripcion?: string | null
    roles?: PermisoPorRolCreateNestedManyWithoutPermisoInput
  }

  export type PermisoUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    roles?: PermisoPorRolUncheckedCreateNestedManyWithoutPermisoInput
  }

  export type PermisoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: PermisoPorRolUpdateManyWithoutPermisoNestedInput
  }

  export type PermisoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: PermisoPorRolUncheckedUpdateManyWithoutPermisoNestedInput
  }

  export type PermisoCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type PermisoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermisoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermisoPorRolCreateInput = {
    permiso: PermisoCreateNestedOneWithoutRolesInput
    rol: RolCreateNestedOneWithoutPermisosInput
  }

  export type PermisoPorRolUncheckedCreateInput = {
    id?: number
    permisoId: number
    rolId: number
  }

  export type PermisoPorRolUpdateInput = {
    permiso?: PermisoUpdateOneRequiredWithoutRolesNestedInput
    rol?: RolUpdateOneRequiredWithoutPermisosNestedInput
  }

  export type PermisoPorRolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type PermisoPorRolCreateManyInput = {
    id?: number
    permisoId: number
    rolId: number
  }

  export type PermisoPorRolUpdateManyMutationInput = {

  }

  export type PermisoPorRolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoriaCreateInput = {
    nombre: string
    activo?: boolean
    creadoEn?: Date | string
    platillos?: PlatilloCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nombre: string
    activo?: boolean
    creadoEn?: Date | string
    platillos?: PlatilloUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    platillos?: PlatilloUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    platillos?: PlatilloUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nombre: string
    activo?: boolean
    creadoEn?: Date | string
  }

  export type CategoriaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatilloCreateInput = {
    nombre: string
    precio: number
    creadoEn?: Date | string
    disponible?: boolean
    imagenUrl?: string | null
    categoria: CategoriaCreateNestedOneWithoutPlatillosInput
    historialModificaciones?: HistorialModificacionCreateNestedManyWithoutPlatilloInput
  }

  export type PlatilloUncheckedCreateInput = {
    id?: number
    nombre: string
    precio: number
    creadoEn?: Date | string
    disponible?: boolean
    imagenUrl?: string | null
    categoriaId: number
    historialModificaciones?: HistorialModificacionUncheckedCreateNestedManyWithoutPlatilloInput
  }

  export type PlatilloUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutPlatillosNestedInput
    historialModificaciones?: HistorialModificacionUpdateManyWithoutPlatilloNestedInput
  }

  export type PlatilloUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: IntFieldUpdateOperationsInput | number
    historialModificaciones?: HistorialModificacionUncheckedUpdateManyWithoutPlatilloNestedInput
  }

  export type PlatilloCreateManyInput = {
    id?: number
    nombre: string
    precio: number
    creadoEn?: Date | string
    disponible?: boolean
    imagenUrl?: string | null
    categoriaId: number
  }

  export type PlatilloUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlatilloUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type HistorialModificacionCreateInput = {
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fecha?: Date | string
    accion: string
    responsable: UsuarioCreateNestedOneWithoutHistorialResponsableInput
    usuario?: UsuarioCreateNestedOneWithoutHistorialModificacionesInput
    platillo?: PlatilloCreateNestedOneWithoutHistorialModificacionesInput
  }

  export type HistorialModificacionUncheckedCreateInput = {
    id?: number
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fecha?: Date | string
    accion: string
    responsableId: number
    usuarioId?: number | null
    platilloId?: number | null
  }

  export type HistorialModificacionUpdateInput = {
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    responsable?: UsuarioUpdateOneRequiredWithoutHistorialResponsableNestedInput
    usuario?: UsuarioUpdateOneWithoutHistorialModificacionesNestedInput
    platillo?: PlatilloUpdateOneWithoutHistorialModificacionesNestedInput
  }

  export type HistorialModificacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    responsableId?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    platilloId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistorialModificacionCreateManyInput = {
    id?: number
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fecha?: Date | string
    accion: string
    responsableId: number
    usuarioId?: number | null
    platilloId?: number | null
  }

  export type HistorialModificacionUpdateManyMutationInput = {
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
  }

  export type HistorialModificacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    responsableId?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    platilloId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdenCreateInput = {
    codigo?: string
    mesa: number
    fecha?: Date | string
    finishedAt?: Date | string | null
    durationSec?: number | null
    estado?: string
    mesero: UsuarioCreateNestedOneWithoutOrdenesMeseroInput
    items?: OrdenItemCreateNestedManyWithoutOrdenInput
  }

  export type OrdenUncheckedCreateInput = {
    id?: number
    codigo?: string
    mesa: number
    fecha?: Date | string
    finishedAt?: Date | string | null
    durationSec?: number | null
    meseroId: number
    estado?: string
    items?: OrdenItemUncheckedCreateNestedManyWithoutOrdenInput
  }

  export type OrdenUpdateInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    mesa?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    mesero?: UsuarioUpdateOneRequiredWithoutOrdenesMeseroNestedInput
    items?: OrdenItemUpdateManyWithoutOrdenNestedInput
  }

  export type OrdenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    mesa?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    meseroId?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    items?: OrdenItemUncheckedUpdateManyWithoutOrdenNestedInput
  }

  export type OrdenCreateManyInput = {
    id?: number
    codigo?: string
    mesa: number
    fecha?: Date | string
    finishedAt?: Date | string | null
    durationSec?: number | null
    meseroId: number
    estado?: string
  }

  export type OrdenUpdateManyMutationInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    mesa?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type OrdenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    mesa?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    meseroId?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type OrdenItemCreateInput = {
    nombre: string
    precio: number
    nota?: string | null
    tipo: string
    estado: string
    creadoEn?: Date | string
    asignadoEn?: Date | string | null
    finalizadoEn?: Date | string | null
    prioridad?: number | null
    orden: OrdenCreateNestedOneWithoutItemsInput
    chef?: UsuarioCreateNestedOneWithoutItemsAsignadosInput
  }

  export type OrdenItemUncheckedCreateInput = {
    id?: number
    nombre: string
    precio: number
    nota?: string | null
    tipo: string
    estado: string
    creadoEn?: Date | string
    asignadoEn?: Date | string | null
    finalizadoEn?: Date | string | null
    prioridad?: number | null
    ordenId: number
    chefId?: number | null
  }

  export type OrdenItemUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asignadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalizadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    orden?: OrdenUpdateOneRequiredWithoutItemsNestedInput
    chef?: UsuarioUpdateOneWithoutItemsAsignadosNestedInput
  }

  export type OrdenItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asignadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalizadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    ordenId?: IntFieldUpdateOperationsInput | number
    chefId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdenItemCreateManyInput = {
    id?: number
    nombre: string
    precio: number
    nota?: string | null
    tipo: string
    estado: string
    creadoEn?: Date | string
    asignadoEn?: Date | string | null
    finalizadoEn?: Date | string | null
    prioridad?: number | null
    ordenId: number
    chefId?: number | null
  }

  export type OrdenItemUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asignadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalizadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridad?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdenItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asignadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalizadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    ordenId?: IntFieldUpdateOperationsInput | number
    chefId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CocinaChefCreateInput = {
    activo?: boolean
    lastSeen?: Date | string
    chef: UsuarioCreateNestedOneWithoutCocinaEstadoInput
  }

  export type CocinaChefUncheckedCreateInput = {
    id?: number
    chefId: number
    activo?: boolean
    lastSeen?: Date | string
  }

  export type CocinaChefUpdateInput = {
    activo?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
    chef?: UsuarioUpdateOneRequiredWithoutCocinaEstadoNestedInput
  }

  export type CocinaChefUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chefId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CocinaChefCreateManyInput = {
    id?: number
    chefId: number
    activo?: boolean
    lastSeen?: Date | string
  }

  export type CocinaChefUpdateManyMutationInput = {
    activo?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CocinaChefUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chefId?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type RolScalarRelationFilter = {
    is?: RolWhereInput
    isNot?: RolWhereInput
  }

  export type HistorialModificacionListRelationFilter = {
    every?: HistorialModificacionWhereInput
    some?: HistorialModificacionWhereInput
    none?: HistorialModificacionWhereInput
  }

  export type OrdenListRelationFilter = {
    every?: OrdenWhereInput
    some?: OrdenWhereInput
    none?: OrdenWhereInput
  }

  export type OrdenItemListRelationFilter = {
    every?: OrdenItemWhereInput
    some?: OrdenItemWhereInput
    none?: OrdenItemWhereInput
  }

  export type CocinaChefNullableScalarRelationFilter = {
    is?: CocinaChefWhereInput | null
    isNot?: CocinaChefWhereInput | null
  }

  export type HistorialModificacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdenItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    usuario?: SortOrder
    correo?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    actualizadoEn?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    rolId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type PermisoPorRolListRelationFilter = {
    every?: PermisoPorRolWhereInput
    some?: PermisoPorRolWhereInput
    none?: PermisoPorRolWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PermisoPorRolOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RolCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RolMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type RolSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PermisoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type PermisoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PermisoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type PermisoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type PermisoSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type PermisoScalarRelationFilter = {
    is?: PermisoWhereInput
    isNot?: PermisoWhereInput
  }

  export type PermisoPorRolPermisoIdRolIdCompoundUniqueInput = {
    permisoId: number
    rolId: number
  }

  export type PermisoPorRolCountOrderByAggregateInput = {
    id?: SortOrder
    permisoId?: SortOrder
    rolId?: SortOrder
  }

  export type PermisoPorRolAvgOrderByAggregateInput = {
    id?: SortOrder
    permisoId?: SortOrder
    rolId?: SortOrder
  }

  export type PermisoPorRolMaxOrderByAggregateInput = {
    id?: SortOrder
    permisoId?: SortOrder
    rolId?: SortOrder
  }

  export type PermisoPorRolMinOrderByAggregateInput = {
    id?: SortOrder
    permisoId?: SortOrder
    rolId?: SortOrder
  }

  export type PermisoPorRolSumOrderByAggregateInput = {
    id?: SortOrder
    permisoId?: SortOrder
    rolId?: SortOrder
  }

  export type PlatilloListRelationFilter = {
    every?: PlatilloWhereInput
    some?: PlatilloWhereInput
    none?: PlatilloWhereInput
  }

  export type PlatilloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    activo?: SortOrder
    creadoEn?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CategoriaScalarRelationFilter = {
    is?: CategoriaWhereInput
    isNot?: CategoriaWhereInput
  }

  export type PlatilloCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    creadoEn?: SortOrder
    disponible?: SortOrder
    imagenUrl?: SortOrder
    categoriaId?: SortOrder
  }

  export type PlatilloAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    categoriaId?: SortOrder
  }

  export type PlatilloMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    creadoEn?: SortOrder
    disponible?: SortOrder
    imagenUrl?: SortOrder
    categoriaId?: SortOrder
  }

  export type PlatilloMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    creadoEn?: SortOrder
    disponible?: SortOrder
    imagenUrl?: SortOrder
    categoriaId?: SortOrder
  }

  export type PlatilloSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    categoriaId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type PlatilloNullableScalarRelationFilter = {
    is?: PlatilloWhereInput | null
    isNot?: PlatilloWhereInput | null
  }

  export type HistorialModificacionCountOrderByAggregateInput = {
    id?: SortOrder
    campo?: SortOrder
    valorAnterior?: SortOrder
    valorNuevo?: SortOrder
    fecha?: SortOrder
    accion?: SortOrder
    responsableId?: SortOrder
    usuarioId?: SortOrder
    platilloId?: SortOrder
  }

  export type HistorialModificacionAvgOrderByAggregateInput = {
    id?: SortOrder
    responsableId?: SortOrder
    usuarioId?: SortOrder
    platilloId?: SortOrder
  }

  export type HistorialModificacionMaxOrderByAggregateInput = {
    id?: SortOrder
    campo?: SortOrder
    valorAnterior?: SortOrder
    valorNuevo?: SortOrder
    fecha?: SortOrder
    accion?: SortOrder
    responsableId?: SortOrder
    usuarioId?: SortOrder
    platilloId?: SortOrder
  }

  export type HistorialModificacionMinOrderByAggregateInput = {
    id?: SortOrder
    campo?: SortOrder
    valorAnterior?: SortOrder
    valorNuevo?: SortOrder
    fecha?: SortOrder
    accion?: SortOrder
    responsableId?: SortOrder
    usuarioId?: SortOrder
    platilloId?: SortOrder
  }

  export type HistorialModificacionSumOrderByAggregateInput = {
    id?: SortOrder
    responsableId?: SortOrder
    usuarioId?: SortOrder
    platilloId?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type OrdenCountOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    mesa?: SortOrder
    fecha?: SortOrder
    finishedAt?: SortOrder
    durationSec?: SortOrder
    meseroId?: SortOrder
    estado?: SortOrder
  }

  export type OrdenAvgOrderByAggregateInput = {
    id?: SortOrder
    mesa?: SortOrder
    durationSec?: SortOrder
    meseroId?: SortOrder
  }

  export type OrdenMaxOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    mesa?: SortOrder
    fecha?: SortOrder
    finishedAt?: SortOrder
    durationSec?: SortOrder
    meseroId?: SortOrder
    estado?: SortOrder
  }

  export type OrdenMinOrderByAggregateInput = {
    id?: SortOrder
    codigo?: SortOrder
    mesa?: SortOrder
    fecha?: SortOrder
    finishedAt?: SortOrder
    durationSec?: SortOrder
    meseroId?: SortOrder
    estado?: SortOrder
  }

  export type OrdenSumOrderByAggregateInput = {
    id?: SortOrder
    mesa?: SortOrder
    durationSec?: SortOrder
    meseroId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OrdenScalarRelationFilter = {
    is?: OrdenWhereInput
    isNot?: OrdenWhereInput
  }

  export type OrdenItemCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    nota?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    asignadoEn?: SortOrder
    finalizadoEn?: SortOrder
    prioridad?: SortOrder
    ordenId?: SortOrder
    chefId?: SortOrder
  }

  export type OrdenItemAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    prioridad?: SortOrder
    ordenId?: SortOrder
    chefId?: SortOrder
  }

  export type OrdenItemMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    nota?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    asignadoEn?: SortOrder
    finalizadoEn?: SortOrder
    prioridad?: SortOrder
    ordenId?: SortOrder
    chefId?: SortOrder
  }

  export type OrdenItemMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    precio?: SortOrder
    nota?: SortOrder
    tipo?: SortOrder
    estado?: SortOrder
    creadoEn?: SortOrder
    asignadoEn?: SortOrder
    finalizadoEn?: SortOrder
    prioridad?: SortOrder
    ordenId?: SortOrder
    chefId?: SortOrder
  }

  export type OrdenItemSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
    prioridad?: SortOrder
    ordenId?: SortOrder
    chefId?: SortOrder
  }

  export type CocinaChefCountOrderByAggregateInput = {
    id?: SortOrder
    chefId?: SortOrder
    activo?: SortOrder
    lastSeen?: SortOrder
  }

  export type CocinaChefAvgOrderByAggregateInput = {
    id?: SortOrder
    chefId?: SortOrder
  }

  export type CocinaChefMaxOrderByAggregateInput = {
    id?: SortOrder
    chefId?: SortOrder
    activo?: SortOrder
    lastSeen?: SortOrder
  }

  export type CocinaChefMinOrderByAggregateInput = {
    id?: SortOrder
    chefId?: SortOrder
    activo?: SortOrder
    lastSeen?: SortOrder
  }

  export type CocinaChefSumOrderByAggregateInput = {
    id?: SortOrder
    chefId?: SortOrder
  }

  export type RolCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    connect?: RolWhereUniqueInput
  }

  export type HistorialModificacionCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<HistorialModificacionCreateWithoutUsuarioInput, HistorialModificacionUncheckedCreateWithoutUsuarioInput> | HistorialModificacionCreateWithoutUsuarioInput[] | HistorialModificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialModificacionCreateOrConnectWithoutUsuarioInput | HistorialModificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: HistorialModificacionCreateManyUsuarioInputEnvelope
    connect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
  }

  export type HistorialModificacionCreateNestedManyWithoutResponsableInput = {
    create?: XOR<HistorialModificacionCreateWithoutResponsableInput, HistorialModificacionUncheckedCreateWithoutResponsableInput> | HistorialModificacionCreateWithoutResponsableInput[] | HistorialModificacionUncheckedCreateWithoutResponsableInput[]
    connectOrCreate?: HistorialModificacionCreateOrConnectWithoutResponsableInput | HistorialModificacionCreateOrConnectWithoutResponsableInput[]
    createMany?: HistorialModificacionCreateManyResponsableInputEnvelope
    connect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
  }

  export type OrdenCreateNestedManyWithoutMeseroInput = {
    create?: XOR<OrdenCreateWithoutMeseroInput, OrdenUncheckedCreateWithoutMeseroInput> | OrdenCreateWithoutMeseroInput[] | OrdenUncheckedCreateWithoutMeseroInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutMeseroInput | OrdenCreateOrConnectWithoutMeseroInput[]
    createMany?: OrdenCreateManyMeseroInputEnvelope
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
  }

  export type OrdenItemCreateNestedManyWithoutChefInput = {
    create?: XOR<OrdenItemCreateWithoutChefInput, OrdenItemUncheckedCreateWithoutChefInput> | OrdenItemCreateWithoutChefInput[] | OrdenItemUncheckedCreateWithoutChefInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutChefInput | OrdenItemCreateOrConnectWithoutChefInput[]
    createMany?: OrdenItemCreateManyChefInputEnvelope
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
  }

  export type CocinaChefCreateNestedOneWithoutChefInput = {
    create?: XOR<CocinaChefCreateWithoutChefInput, CocinaChefUncheckedCreateWithoutChefInput>
    connectOrCreate?: CocinaChefCreateOrConnectWithoutChefInput
    connect?: CocinaChefWhereUniqueInput
  }

  export type HistorialModificacionUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<HistorialModificacionCreateWithoutUsuarioInput, HistorialModificacionUncheckedCreateWithoutUsuarioInput> | HistorialModificacionCreateWithoutUsuarioInput[] | HistorialModificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialModificacionCreateOrConnectWithoutUsuarioInput | HistorialModificacionCreateOrConnectWithoutUsuarioInput[]
    createMany?: HistorialModificacionCreateManyUsuarioInputEnvelope
    connect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
  }

  export type HistorialModificacionUncheckedCreateNestedManyWithoutResponsableInput = {
    create?: XOR<HistorialModificacionCreateWithoutResponsableInput, HistorialModificacionUncheckedCreateWithoutResponsableInput> | HistorialModificacionCreateWithoutResponsableInput[] | HistorialModificacionUncheckedCreateWithoutResponsableInput[]
    connectOrCreate?: HistorialModificacionCreateOrConnectWithoutResponsableInput | HistorialModificacionCreateOrConnectWithoutResponsableInput[]
    createMany?: HistorialModificacionCreateManyResponsableInputEnvelope
    connect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
  }

  export type OrdenUncheckedCreateNestedManyWithoutMeseroInput = {
    create?: XOR<OrdenCreateWithoutMeseroInput, OrdenUncheckedCreateWithoutMeseroInput> | OrdenCreateWithoutMeseroInput[] | OrdenUncheckedCreateWithoutMeseroInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutMeseroInput | OrdenCreateOrConnectWithoutMeseroInput[]
    createMany?: OrdenCreateManyMeseroInputEnvelope
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
  }

  export type OrdenItemUncheckedCreateNestedManyWithoutChefInput = {
    create?: XOR<OrdenItemCreateWithoutChefInput, OrdenItemUncheckedCreateWithoutChefInput> | OrdenItemCreateWithoutChefInput[] | OrdenItemUncheckedCreateWithoutChefInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutChefInput | OrdenItemCreateOrConnectWithoutChefInput[]
    createMany?: OrdenItemCreateManyChefInputEnvelope
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
  }

  export type CocinaChefUncheckedCreateNestedOneWithoutChefInput = {
    create?: XOR<CocinaChefCreateWithoutChefInput, CocinaChefUncheckedCreateWithoutChefInput>
    connectOrCreate?: CocinaChefCreateOrConnectWithoutChefInput
    connect?: CocinaChefWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: RolCreateOrConnectWithoutUsuariosInput
    upsert?: RolUpsertWithoutUsuariosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutUsuariosInput, RolUpdateWithoutUsuariosInput>, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type HistorialModificacionUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<HistorialModificacionCreateWithoutUsuarioInput, HistorialModificacionUncheckedCreateWithoutUsuarioInput> | HistorialModificacionCreateWithoutUsuarioInput[] | HistorialModificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialModificacionCreateOrConnectWithoutUsuarioInput | HistorialModificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: HistorialModificacionUpsertWithWhereUniqueWithoutUsuarioInput | HistorialModificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: HistorialModificacionCreateManyUsuarioInputEnvelope
    set?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    disconnect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    delete?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    connect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    update?: HistorialModificacionUpdateWithWhereUniqueWithoutUsuarioInput | HistorialModificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: HistorialModificacionUpdateManyWithWhereWithoutUsuarioInput | HistorialModificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: HistorialModificacionScalarWhereInput | HistorialModificacionScalarWhereInput[]
  }

  export type HistorialModificacionUpdateManyWithoutResponsableNestedInput = {
    create?: XOR<HistorialModificacionCreateWithoutResponsableInput, HistorialModificacionUncheckedCreateWithoutResponsableInput> | HistorialModificacionCreateWithoutResponsableInput[] | HistorialModificacionUncheckedCreateWithoutResponsableInput[]
    connectOrCreate?: HistorialModificacionCreateOrConnectWithoutResponsableInput | HistorialModificacionCreateOrConnectWithoutResponsableInput[]
    upsert?: HistorialModificacionUpsertWithWhereUniqueWithoutResponsableInput | HistorialModificacionUpsertWithWhereUniqueWithoutResponsableInput[]
    createMany?: HistorialModificacionCreateManyResponsableInputEnvelope
    set?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    disconnect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    delete?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    connect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    update?: HistorialModificacionUpdateWithWhereUniqueWithoutResponsableInput | HistorialModificacionUpdateWithWhereUniqueWithoutResponsableInput[]
    updateMany?: HistorialModificacionUpdateManyWithWhereWithoutResponsableInput | HistorialModificacionUpdateManyWithWhereWithoutResponsableInput[]
    deleteMany?: HistorialModificacionScalarWhereInput | HistorialModificacionScalarWhereInput[]
  }

  export type OrdenUpdateManyWithoutMeseroNestedInput = {
    create?: XOR<OrdenCreateWithoutMeseroInput, OrdenUncheckedCreateWithoutMeseroInput> | OrdenCreateWithoutMeseroInput[] | OrdenUncheckedCreateWithoutMeseroInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutMeseroInput | OrdenCreateOrConnectWithoutMeseroInput[]
    upsert?: OrdenUpsertWithWhereUniqueWithoutMeseroInput | OrdenUpsertWithWhereUniqueWithoutMeseroInput[]
    createMany?: OrdenCreateManyMeseroInputEnvelope
    set?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    disconnect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    delete?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    update?: OrdenUpdateWithWhereUniqueWithoutMeseroInput | OrdenUpdateWithWhereUniqueWithoutMeseroInput[]
    updateMany?: OrdenUpdateManyWithWhereWithoutMeseroInput | OrdenUpdateManyWithWhereWithoutMeseroInput[]
    deleteMany?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
  }

  export type OrdenItemUpdateManyWithoutChefNestedInput = {
    create?: XOR<OrdenItemCreateWithoutChefInput, OrdenItemUncheckedCreateWithoutChefInput> | OrdenItemCreateWithoutChefInput[] | OrdenItemUncheckedCreateWithoutChefInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutChefInput | OrdenItemCreateOrConnectWithoutChefInput[]
    upsert?: OrdenItemUpsertWithWhereUniqueWithoutChefInput | OrdenItemUpsertWithWhereUniqueWithoutChefInput[]
    createMany?: OrdenItemCreateManyChefInputEnvelope
    set?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    disconnect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    delete?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    update?: OrdenItemUpdateWithWhereUniqueWithoutChefInput | OrdenItemUpdateWithWhereUniqueWithoutChefInput[]
    updateMany?: OrdenItemUpdateManyWithWhereWithoutChefInput | OrdenItemUpdateManyWithWhereWithoutChefInput[]
    deleteMany?: OrdenItemScalarWhereInput | OrdenItemScalarWhereInput[]
  }

  export type CocinaChefUpdateOneWithoutChefNestedInput = {
    create?: XOR<CocinaChefCreateWithoutChefInput, CocinaChefUncheckedCreateWithoutChefInput>
    connectOrCreate?: CocinaChefCreateOrConnectWithoutChefInput
    upsert?: CocinaChefUpsertWithoutChefInput
    disconnect?: CocinaChefWhereInput | boolean
    delete?: CocinaChefWhereInput | boolean
    connect?: CocinaChefWhereUniqueInput
    update?: XOR<XOR<CocinaChefUpdateToOneWithWhereWithoutChefInput, CocinaChefUpdateWithoutChefInput>, CocinaChefUncheckedUpdateWithoutChefInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type HistorialModificacionUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<HistorialModificacionCreateWithoutUsuarioInput, HistorialModificacionUncheckedCreateWithoutUsuarioInput> | HistorialModificacionCreateWithoutUsuarioInput[] | HistorialModificacionUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: HistorialModificacionCreateOrConnectWithoutUsuarioInput | HistorialModificacionCreateOrConnectWithoutUsuarioInput[]
    upsert?: HistorialModificacionUpsertWithWhereUniqueWithoutUsuarioInput | HistorialModificacionUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: HistorialModificacionCreateManyUsuarioInputEnvelope
    set?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    disconnect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    delete?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    connect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    update?: HistorialModificacionUpdateWithWhereUniqueWithoutUsuarioInput | HistorialModificacionUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: HistorialModificacionUpdateManyWithWhereWithoutUsuarioInput | HistorialModificacionUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: HistorialModificacionScalarWhereInput | HistorialModificacionScalarWhereInput[]
  }

  export type HistorialModificacionUncheckedUpdateManyWithoutResponsableNestedInput = {
    create?: XOR<HistorialModificacionCreateWithoutResponsableInput, HistorialModificacionUncheckedCreateWithoutResponsableInput> | HistorialModificacionCreateWithoutResponsableInput[] | HistorialModificacionUncheckedCreateWithoutResponsableInput[]
    connectOrCreate?: HistorialModificacionCreateOrConnectWithoutResponsableInput | HistorialModificacionCreateOrConnectWithoutResponsableInput[]
    upsert?: HistorialModificacionUpsertWithWhereUniqueWithoutResponsableInput | HistorialModificacionUpsertWithWhereUniqueWithoutResponsableInput[]
    createMany?: HistorialModificacionCreateManyResponsableInputEnvelope
    set?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    disconnect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    delete?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    connect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    update?: HistorialModificacionUpdateWithWhereUniqueWithoutResponsableInput | HistorialModificacionUpdateWithWhereUniqueWithoutResponsableInput[]
    updateMany?: HistorialModificacionUpdateManyWithWhereWithoutResponsableInput | HistorialModificacionUpdateManyWithWhereWithoutResponsableInput[]
    deleteMany?: HistorialModificacionScalarWhereInput | HistorialModificacionScalarWhereInput[]
  }

  export type OrdenUncheckedUpdateManyWithoutMeseroNestedInput = {
    create?: XOR<OrdenCreateWithoutMeseroInput, OrdenUncheckedCreateWithoutMeseroInput> | OrdenCreateWithoutMeseroInput[] | OrdenUncheckedCreateWithoutMeseroInput[]
    connectOrCreate?: OrdenCreateOrConnectWithoutMeseroInput | OrdenCreateOrConnectWithoutMeseroInput[]
    upsert?: OrdenUpsertWithWhereUniqueWithoutMeseroInput | OrdenUpsertWithWhereUniqueWithoutMeseroInput[]
    createMany?: OrdenCreateManyMeseroInputEnvelope
    set?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    disconnect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    delete?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    connect?: OrdenWhereUniqueInput | OrdenWhereUniqueInput[]
    update?: OrdenUpdateWithWhereUniqueWithoutMeseroInput | OrdenUpdateWithWhereUniqueWithoutMeseroInput[]
    updateMany?: OrdenUpdateManyWithWhereWithoutMeseroInput | OrdenUpdateManyWithWhereWithoutMeseroInput[]
    deleteMany?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
  }

  export type OrdenItemUncheckedUpdateManyWithoutChefNestedInput = {
    create?: XOR<OrdenItemCreateWithoutChefInput, OrdenItemUncheckedCreateWithoutChefInput> | OrdenItemCreateWithoutChefInput[] | OrdenItemUncheckedCreateWithoutChefInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutChefInput | OrdenItemCreateOrConnectWithoutChefInput[]
    upsert?: OrdenItemUpsertWithWhereUniqueWithoutChefInput | OrdenItemUpsertWithWhereUniqueWithoutChefInput[]
    createMany?: OrdenItemCreateManyChefInputEnvelope
    set?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    disconnect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    delete?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    update?: OrdenItemUpdateWithWhereUniqueWithoutChefInput | OrdenItemUpdateWithWhereUniqueWithoutChefInput[]
    updateMany?: OrdenItemUpdateManyWithWhereWithoutChefInput | OrdenItemUpdateManyWithWhereWithoutChefInput[]
    deleteMany?: OrdenItemScalarWhereInput | OrdenItemScalarWhereInput[]
  }

  export type CocinaChefUncheckedUpdateOneWithoutChefNestedInput = {
    create?: XOR<CocinaChefCreateWithoutChefInput, CocinaChefUncheckedCreateWithoutChefInput>
    connectOrCreate?: CocinaChefCreateOrConnectWithoutChefInput
    upsert?: CocinaChefUpsertWithoutChefInput
    disconnect?: CocinaChefWhereInput | boolean
    delete?: CocinaChefWhereInput | boolean
    connect?: CocinaChefWhereUniqueInput
    update?: XOR<XOR<CocinaChefUpdateToOneWithWhereWithoutChefInput, CocinaChefUpdateWithoutChefInput>, CocinaChefUncheckedUpdateWithoutChefInput>
  }

  export type UsuarioCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type PermisoPorRolCreateNestedManyWithoutRolInput = {
    create?: XOR<PermisoPorRolCreateWithoutRolInput, PermisoPorRolUncheckedCreateWithoutRolInput> | PermisoPorRolCreateWithoutRolInput[] | PermisoPorRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: PermisoPorRolCreateOrConnectWithoutRolInput | PermisoPorRolCreateOrConnectWithoutRolInput[]
    createMany?: PermisoPorRolCreateManyRolInputEnvelope
    connect?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type PermisoPorRolUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<PermisoPorRolCreateWithoutRolInput, PermisoPorRolUncheckedCreateWithoutRolInput> | PermisoPorRolCreateWithoutRolInput[] | PermisoPorRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: PermisoPorRolCreateOrConnectWithoutRolInput | PermisoPorRolCreateOrConnectWithoutRolInput[]
    createMany?: PermisoPorRolCreateManyRolInputEnvelope
    connect?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PermisoPorRolUpdateManyWithoutRolNestedInput = {
    create?: XOR<PermisoPorRolCreateWithoutRolInput, PermisoPorRolUncheckedCreateWithoutRolInput> | PermisoPorRolCreateWithoutRolInput[] | PermisoPorRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: PermisoPorRolCreateOrConnectWithoutRolInput | PermisoPorRolCreateOrConnectWithoutRolInput[]
    upsert?: PermisoPorRolUpsertWithWhereUniqueWithoutRolInput | PermisoPorRolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: PermisoPorRolCreateManyRolInputEnvelope
    set?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    disconnect?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    delete?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    connect?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    update?: PermisoPorRolUpdateWithWhereUniqueWithoutRolInput | PermisoPorRolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: PermisoPorRolUpdateManyWithWhereWithoutRolInput | PermisoPorRolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: PermisoPorRolScalarWhereInput | PermisoPorRolScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput> | UsuarioCreateWithoutRolInput[] | UsuarioUncheckedCreateWithoutRolInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput | UsuarioCreateOrConnectWithoutRolInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutRolInput | UsuarioUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: UsuarioCreateManyRolInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutRolInput | UsuarioUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutRolInput | UsuarioUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type PermisoPorRolUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<PermisoPorRolCreateWithoutRolInput, PermisoPorRolUncheckedCreateWithoutRolInput> | PermisoPorRolCreateWithoutRolInput[] | PermisoPorRolUncheckedCreateWithoutRolInput[]
    connectOrCreate?: PermisoPorRolCreateOrConnectWithoutRolInput | PermisoPorRolCreateOrConnectWithoutRolInput[]
    upsert?: PermisoPorRolUpsertWithWhereUniqueWithoutRolInput | PermisoPorRolUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: PermisoPorRolCreateManyRolInputEnvelope
    set?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    disconnect?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    delete?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    connect?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    update?: PermisoPorRolUpdateWithWhereUniqueWithoutRolInput | PermisoPorRolUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: PermisoPorRolUpdateManyWithWhereWithoutRolInput | PermisoPorRolUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: PermisoPorRolScalarWhereInput | PermisoPorRolScalarWhereInput[]
  }

  export type PermisoPorRolCreateNestedManyWithoutPermisoInput = {
    create?: XOR<PermisoPorRolCreateWithoutPermisoInput, PermisoPorRolUncheckedCreateWithoutPermisoInput> | PermisoPorRolCreateWithoutPermisoInput[] | PermisoPorRolUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: PermisoPorRolCreateOrConnectWithoutPermisoInput | PermisoPorRolCreateOrConnectWithoutPermisoInput[]
    createMany?: PermisoPorRolCreateManyPermisoInputEnvelope
    connect?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
  }

  export type PermisoPorRolUncheckedCreateNestedManyWithoutPermisoInput = {
    create?: XOR<PermisoPorRolCreateWithoutPermisoInput, PermisoPorRolUncheckedCreateWithoutPermisoInput> | PermisoPorRolCreateWithoutPermisoInput[] | PermisoPorRolUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: PermisoPorRolCreateOrConnectWithoutPermisoInput | PermisoPorRolCreateOrConnectWithoutPermisoInput[]
    createMany?: PermisoPorRolCreateManyPermisoInputEnvelope
    connect?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PermisoPorRolUpdateManyWithoutPermisoNestedInput = {
    create?: XOR<PermisoPorRolCreateWithoutPermisoInput, PermisoPorRolUncheckedCreateWithoutPermisoInput> | PermisoPorRolCreateWithoutPermisoInput[] | PermisoPorRolUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: PermisoPorRolCreateOrConnectWithoutPermisoInput | PermisoPorRolCreateOrConnectWithoutPermisoInput[]
    upsert?: PermisoPorRolUpsertWithWhereUniqueWithoutPermisoInput | PermisoPorRolUpsertWithWhereUniqueWithoutPermisoInput[]
    createMany?: PermisoPorRolCreateManyPermisoInputEnvelope
    set?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    disconnect?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    delete?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    connect?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    update?: PermisoPorRolUpdateWithWhereUniqueWithoutPermisoInput | PermisoPorRolUpdateWithWhereUniqueWithoutPermisoInput[]
    updateMany?: PermisoPorRolUpdateManyWithWhereWithoutPermisoInput | PermisoPorRolUpdateManyWithWhereWithoutPermisoInput[]
    deleteMany?: PermisoPorRolScalarWhereInput | PermisoPorRolScalarWhereInput[]
  }

  export type PermisoPorRolUncheckedUpdateManyWithoutPermisoNestedInput = {
    create?: XOR<PermisoPorRolCreateWithoutPermisoInput, PermisoPorRolUncheckedCreateWithoutPermisoInput> | PermisoPorRolCreateWithoutPermisoInput[] | PermisoPorRolUncheckedCreateWithoutPermisoInput[]
    connectOrCreate?: PermisoPorRolCreateOrConnectWithoutPermisoInput | PermisoPorRolCreateOrConnectWithoutPermisoInput[]
    upsert?: PermisoPorRolUpsertWithWhereUniqueWithoutPermisoInput | PermisoPorRolUpsertWithWhereUniqueWithoutPermisoInput[]
    createMany?: PermisoPorRolCreateManyPermisoInputEnvelope
    set?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    disconnect?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    delete?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    connect?: PermisoPorRolWhereUniqueInput | PermisoPorRolWhereUniqueInput[]
    update?: PermisoPorRolUpdateWithWhereUniqueWithoutPermisoInput | PermisoPorRolUpdateWithWhereUniqueWithoutPermisoInput[]
    updateMany?: PermisoPorRolUpdateManyWithWhereWithoutPermisoInput | PermisoPorRolUpdateManyWithWhereWithoutPermisoInput[]
    deleteMany?: PermisoPorRolScalarWhereInput | PermisoPorRolScalarWhereInput[]
  }

  export type PermisoCreateNestedOneWithoutRolesInput = {
    create?: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermisoCreateOrConnectWithoutRolesInput
    connect?: PermisoWhereUniqueInput
  }

  export type RolCreateNestedOneWithoutPermisosInput = {
    create?: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolCreateOrConnectWithoutPermisosInput
    connect?: RolWhereUniqueInput
  }

  export type PermisoUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermisoCreateOrConnectWithoutRolesInput
    upsert?: PermisoUpsertWithoutRolesInput
    connect?: PermisoWhereUniqueInput
    update?: XOR<XOR<PermisoUpdateToOneWithWhereWithoutRolesInput, PermisoUpdateWithoutRolesInput>, PermisoUncheckedUpdateWithoutRolesInput>
  }

  export type RolUpdateOneRequiredWithoutPermisosNestedInput = {
    create?: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    connectOrCreate?: RolCreateOrConnectWithoutPermisosInput
    upsert?: RolUpsertWithoutPermisosInput
    connect?: RolWhereUniqueInput
    update?: XOR<XOR<RolUpdateToOneWithWhereWithoutPermisosInput, RolUpdateWithoutPermisosInput>, RolUncheckedUpdateWithoutPermisosInput>
  }

  export type PlatilloCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PlatilloCreateWithoutCategoriaInput, PlatilloUncheckedCreateWithoutCategoriaInput> | PlatilloCreateWithoutCategoriaInput[] | PlatilloUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PlatilloCreateOrConnectWithoutCategoriaInput | PlatilloCreateOrConnectWithoutCategoriaInput[]
    createMany?: PlatilloCreateManyCategoriaInputEnvelope
    connect?: PlatilloWhereUniqueInput | PlatilloWhereUniqueInput[]
  }

  export type PlatilloUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<PlatilloCreateWithoutCategoriaInput, PlatilloUncheckedCreateWithoutCategoriaInput> | PlatilloCreateWithoutCategoriaInput[] | PlatilloUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PlatilloCreateOrConnectWithoutCategoriaInput | PlatilloCreateOrConnectWithoutCategoriaInput[]
    createMany?: PlatilloCreateManyCategoriaInputEnvelope
    connect?: PlatilloWhereUniqueInput | PlatilloWhereUniqueInput[]
  }

  export type PlatilloUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PlatilloCreateWithoutCategoriaInput, PlatilloUncheckedCreateWithoutCategoriaInput> | PlatilloCreateWithoutCategoriaInput[] | PlatilloUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PlatilloCreateOrConnectWithoutCategoriaInput | PlatilloCreateOrConnectWithoutCategoriaInput[]
    upsert?: PlatilloUpsertWithWhereUniqueWithoutCategoriaInput | PlatilloUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PlatilloCreateManyCategoriaInputEnvelope
    set?: PlatilloWhereUniqueInput | PlatilloWhereUniqueInput[]
    disconnect?: PlatilloWhereUniqueInput | PlatilloWhereUniqueInput[]
    delete?: PlatilloWhereUniqueInput | PlatilloWhereUniqueInput[]
    connect?: PlatilloWhereUniqueInput | PlatilloWhereUniqueInput[]
    update?: PlatilloUpdateWithWhereUniqueWithoutCategoriaInput | PlatilloUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PlatilloUpdateManyWithWhereWithoutCategoriaInput | PlatilloUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PlatilloScalarWhereInput | PlatilloScalarWhereInput[]
  }

  export type PlatilloUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<PlatilloCreateWithoutCategoriaInput, PlatilloUncheckedCreateWithoutCategoriaInput> | PlatilloCreateWithoutCategoriaInput[] | PlatilloUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: PlatilloCreateOrConnectWithoutCategoriaInput | PlatilloCreateOrConnectWithoutCategoriaInput[]
    upsert?: PlatilloUpsertWithWhereUniqueWithoutCategoriaInput | PlatilloUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: PlatilloCreateManyCategoriaInputEnvelope
    set?: PlatilloWhereUniqueInput | PlatilloWhereUniqueInput[]
    disconnect?: PlatilloWhereUniqueInput | PlatilloWhereUniqueInput[]
    delete?: PlatilloWhereUniqueInput | PlatilloWhereUniqueInput[]
    connect?: PlatilloWhereUniqueInput | PlatilloWhereUniqueInput[]
    update?: PlatilloUpdateWithWhereUniqueWithoutCategoriaInput | PlatilloUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: PlatilloUpdateManyWithWhereWithoutCategoriaInput | PlatilloUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: PlatilloScalarWhereInput | PlatilloScalarWhereInput[]
  }

  export type CategoriaCreateNestedOneWithoutPlatillosInput = {
    create?: XOR<CategoriaCreateWithoutPlatillosInput, CategoriaUncheckedCreateWithoutPlatillosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPlatillosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type HistorialModificacionCreateNestedManyWithoutPlatilloInput = {
    create?: XOR<HistorialModificacionCreateWithoutPlatilloInput, HistorialModificacionUncheckedCreateWithoutPlatilloInput> | HistorialModificacionCreateWithoutPlatilloInput[] | HistorialModificacionUncheckedCreateWithoutPlatilloInput[]
    connectOrCreate?: HistorialModificacionCreateOrConnectWithoutPlatilloInput | HistorialModificacionCreateOrConnectWithoutPlatilloInput[]
    createMany?: HistorialModificacionCreateManyPlatilloInputEnvelope
    connect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
  }

  export type HistorialModificacionUncheckedCreateNestedManyWithoutPlatilloInput = {
    create?: XOR<HistorialModificacionCreateWithoutPlatilloInput, HistorialModificacionUncheckedCreateWithoutPlatilloInput> | HistorialModificacionCreateWithoutPlatilloInput[] | HistorialModificacionUncheckedCreateWithoutPlatilloInput[]
    connectOrCreate?: HistorialModificacionCreateOrConnectWithoutPlatilloInput | HistorialModificacionCreateOrConnectWithoutPlatilloInput[]
    createMany?: HistorialModificacionCreateManyPlatilloInputEnvelope
    connect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoriaUpdateOneRequiredWithoutPlatillosNestedInput = {
    create?: XOR<CategoriaCreateWithoutPlatillosInput, CategoriaUncheckedCreateWithoutPlatillosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutPlatillosInput
    upsert?: CategoriaUpsertWithoutPlatillosInput
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutPlatillosInput, CategoriaUpdateWithoutPlatillosInput>, CategoriaUncheckedUpdateWithoutPlatillosInput>
  }

  export type HistorialModificacionUpdateManyWithoutPlatilloNestedInput = {
    create?: XOR<HistorialModificacionCreateWithoutPlatilloInput, HistorialModificacionUncheckedCreateWithoutPlatilloInput> | HistorialModificacionCreateWithoutPlatilloInput[] | HistorialModificacionUncheckedCreateWithoutPlatilloInput[]
    connectOrCreate?: HistorialModificacionCreateOrConnectWithoutPlatilloInput | HistorialModificacionCreateOrConnectWithoutPlatilloInput[]
    upsert?: HistorialModificacionUpsertWithWhereUniqueWithoutPlatilloInput | HistorialModificacionUpsertWithWhereUniqueWithoutPlatilloInput[]
    createMany?: HistorialModificacionCreateManyPlatilloInputEnvelope
    set?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    disconnect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    delete?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    connect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    update?: HistorialModificacionUpdateWithWhereUniqueWithoutPlatilloInput | HistorialModificacionUpdateWithWhereUniqueWithoutPlatilloInput[]
    updateMany?: HistorialModificacionUpdateManyWithWhereWithoutPlatilloInput | HistorialModificacionUpdateManyWithWhereWithoutPlatilloInput[]
    deleteMany?: HistorialModificacionScalarWhereInput | HistorialModificacionScalarWhereInput[]
  }

  export type HistorialModificacionUncheckedUpdateManyWithoutPlatilloNestedInput = {
    create?: XOR<HistorialModificacionCreateWithoutPlatilloInput, HistorialModificacionUncheckedCreateWithoutPlatilloInput> | HistorialModificacionCreateWithoutPlatilloInput[] | HistorialModificacionUncheckedCreateWithoutPlatilloInput[]
    connectOrCreate?: HistorialModificacionCreateOrConnectWithoutPlatilloInput | HistorialModificacionCreateOrConnectWithoutPlatilloInput[]
    upsert?: HistorialModificacionUpsertWithWhereUniqueWithoutPlatilloInput | HistorialModificacionUpsertWithWhereUniqueWithoutPlatilloInput[]
    createMany?: HistorialModificacionCreateManyPlatilloInputEnvelope
    set?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    disconnect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    delete?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    connect?: HistorialModificacionWhereUniqueInput | HistorialModificacionWhereUniqueInput[]
    update?: HistorialModificacionUpdateWithWhereUniqueWithoutPlatilloInput | HistorialModificacionUpdateWithWhereUniqueWithoutPlatilloInput[]
    updateMany?: HistorialModificacionUpdateManyWithWhereWithoutPlatilloInput | HistorialModificacionUpdateManyWithWhereWithoutPlatilloInput[]
    deleteMany?: HistorialModificacionScalarWhereInput | HistorialModificacionScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutHistorialResponsableInput = {
    create?: XOR<UsuarioCreateWithoutHistorialResponsableInput, UsuarioUncheckedCreateWithoutHistorialResponsableInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistorialResponsableInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutHistorialModificacionesInput = {
    create?: XOR<UsuarioCreateWithoutHistorialModificacionesInput, UsuarioUncheckedCreateWithoutHistorialModificacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistorialModificacionesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PlatilloCreateNestedOneWithoutHistorialModificacionesInput = {
    create?: XOR<PlatilloCreateWithoutHistorialModificacionesInput, PlatilloUncheckedCreateWithoutHistorialModificacionesInput>
    connectOrCreate?: PlatilloCreateOrConnectWithoutHistorialModificacionesInput
    connect?: PlatilloWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutHistorialResponsableNestedInput = {
    create?: XOR<UsuarioCreateWithoutHistorialResponsableInput, UsuarioUncheckedCreateWithoutHistorialResponsableInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistorialResponsableInput
    upsert?: UsuarioUpsertWithoutHistorialResponsableInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutHistorialResponsableInput, UsuarioUpdateWithoutHistorialResponsableInput>, UsuarioUncheckedUpdateWithoutHistorialResponsableInput>
  }

  export type UsuarioUpdateOneWithoutHistorialModificacionesNestedInput = {
    create?: XOR<UsuarioCreateWithoutHistorialModificacionesInput, UsuarioUncheckedCreateWithoutHistorialModificacionesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutHistorialModificacionesInput
    upsert?: UsuarioUpsertWithoutHistorialModificacionesInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutHistorialModificacionesInput, UsuarioUpdateWithoutHistorialModificacionesInput>, UsuarioUncheckedUpdateWithoutHistorialModificacionesInput>
  }

  export type PlatilloUpdateOneWithoutHistorialModificacionesNestedInput = {
    create?: XOR<PlatilloCreateWithoutHistorialModificacionesInput, PlatilloUncheckedCreateWithoutHistorialModificacionesInput>
    connectOrCreate?: PlatilloCreateOrConnectWithoutHistorialModificacionesInput
    upsert?: PlatilloUpsertWithoutHistorialModificacionesInput
    disconnect?: PlatilloWhereInput | boolean
    delete?: PlatilloWhereInput | boolean
    connect?: PlatilloWhereUniqueInput
    update?: XOR<XOR<PlatilloUpdateToOneWithWhereWithoutHistorialModificacionesInput, PlatilloUpdateWithoutHistorialModificacionesInput>, PlatilloUncheckedUpdateWithoutHistorialModificacionesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioCreateNestedOneWithoutOrdenesMeseroInput = {
    create?: XOR<UsuarioCreateWithoutOrdenesMeseroInput, UsuarioUncheckedCreateWithoutOrdenesMeseroInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrdenesMeseroInput
    connect?: UsuarioWhereUniqueInput
  }

  export type OrdenItemCreateNestedManyWithoutOrdenInput = {
    create?: XOR<OrdenItemCreateWithoutOrdenInput, OrdenItemUncheckedCreateWithoutOrdenInput> | OrdenItemCreateWithoutOrdenInput[] | OrdenItemUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutOrdenInput | OrdenItemCreateOrConnectWithoutOrdenInput[]
    createMany?: OrdenItemCreateManyOrdenInputEnvelope
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
  }

  export type OrdenItemUncheckedCreateNestedManyWithoutOrdenInput = {
    create?: XOR<OrdenItemCreateWithoutOrdenInput, OrdenItemUncheckedCreateWithoutOrdenInput> | OrdenItemCreateWithoutOrdenInput[] | OrdenItemUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutOrdenInput | OrdenItemCreateOrConnectWithoutOrdenInput[]
    createMany?: OrdenItemCreateManyOrdenInputEnvelope
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneRequiredWithoutOrdenesMeseroNestedInput = {
    create?: XOR<UsuarioCreateWithoutOrdenesMeseroInput, UsuarioUncheckedCreateWithoutOrdenesMeseroInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrdenesMeseroInput
    upsert?: UsuarioUpsertWithoutOrdenesMeseroInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutOrdenesMeseroInput, UsuarioUpdateWithoutOrdenesMeseroInput>, UsuarioUncheckedUpdateWithoutOrdenesMeseroInput>
  }

  export type OrdenItemUpdateManyWithoutOrdenNestedInput = {
    create?: XOR<OrdenItemCreateWithoutOrdenInput, OrdenItemUncheckedCreateWithoutOrdenInput> | OrdenItemCreateWithoutOrdenInput[] | OrdenItemUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutOrdenInput | OrdenItemCreateOrConnectWithoutOrdenInput[]
    upsert?: OrdenItemUpsertWithWhereUniqueWithoutOrdenInput | OrdenItemUpsertWithWhereUniqueWithoutOrdenInput[]
    createMany?: OrdenItemCreateManyOrdenInputEnvelope
    set?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    disconnect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    delete?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    update?: OrdenItemUpdateWithWhereUniqueWithoutOrdenInput | OrdenItemUpdateWithWhereUniqueWithoutOrdenInput[]
    updateMany?: OrdenItemUpdateManyWithWhereWithoutOrdenInput | OrdenItemUpdateManyWithWhereWithoutOrdenInput[]
    deleteMany?: OrdenItemScalarWhereInput | OrdenItemScalarWhereInput[]
  }

  export type OrdenItemUncheckedUpdateManyWithoutOrdenNestedInput = {
    create?: XOR<OrdenItemCreateWithoutOrdenInput, OrdenItemUncheckedCreateWithoutOrdenInput> | OrdenItemCreateWithoutOrdenInput[] | OrdenItemUncheckedCreateWithoutOrdenInput[]
    connectOrCreate?: OrdenItemCreateOrConnectWithoutOrdenInput | OrdenItemCreateOrConnectWithoutOrdenInput[]
    upsert?: OrdenItemUpsertWithWhereUniqueWithoutOrdenInput | OrdenItemUpsertWithWhereUniqueWithoutOrdenInput[]
    createMany?: OrdenItemCreateManyOrdenInputEnvelope
    set?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    disconnect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    delete?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    connect?: OrdenItemWhereUniqueInput | OrdenItemWhereUniqueInput[]
    update?: OrdenItemUpdateWithWhereUniqueWithoutOrdenInput | OrdenItemUpdateWithWhereUniqueWithoutOrdenInput[]
    updateMany?: OrdenItemUpdateManyWithWhereWithoutOrdenInput | OrdenItemUpdateManyWithWhereWithoutOrdenInput[]
    deleteMany?: OrdenItemScalarWhereInput | OrdenItemScalarWhereInput[]
  }

  export type OrdenCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrdenCreateWithoutItemsInput, OrdenUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrdenCreateOrConnectWithoutItemsInput
    connect?: OrdenWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutItemsAsignadosInput = {
    create?: XOR<UsuarioCreateWithoutItemsAsignadosInput, UsuarioUncheckedCreateWithoutItemsAsignadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutItemsAsignadosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type OrdenUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrdenCreateWithoutItemsInput, OrdenUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrdenCreateOrConnectWithoutItemsInput
    upsert?: OrdenUpsertWithoutItemsInput
    connect?: OrdenWhereUniqueInput
    update?: XOR<XOR<OrdenUpdateToOneWithWhereWithoutItemsInput, OrdenUpdateWithoutItemsInput>, OrdenUncheckedUpdateWithoutItemsInput>
  }

  export type UsuarioUpdateOneWithoutItemsAsignadosNestedInput = {
    create?: XOR<UsuarioCreateWithoutItemsAsignadosInput, UsuarioUncheckedCreateWithoutItemsAsignadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutItemsAsignadosInput
    upsert?: UsuarioUpsertWithoutItemsAsignadosInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutItemsAsignadosInput, UsuarioUpdateWithoutItemsAsignadosInput>, UsuarioUncheckedUpdateWithoutItemsAsignadosInput>
  }

  export type UsuarioCreateNestedOneWithoutCocinaEstadoInput = {
    create?: XOR<UsuarioCreateWithoutCocinaEstadoInput, UsuarioUncheckedCreateWithoutCocinaEstadoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCocinaEstadoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutCocinaEstadoNestedInput = {
    create?: XOR<UsuarioCreateWithoutCocinaEstadoInput, UsuarioUncheckedCreateWithoutCocinaEstadoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutCocinaEstadoInput
    upsert?: UsuarioUpsertWithoutCocinaEstadoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutCocinaEstadoInput, UsuarioUpdateWithoutCocinaEstadoInput>, UsuarioUncheckedUpdateWithoutCocinaEstadoInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RolCreateWithoutUsuariosInput = {
    nombre: string
    permisos?: PermisoPorRolCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutUsuariosInput = {
    id?: number
    nombre: string
    permisos?: PermisoPorRolUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutUsuariosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
  }

  export type HistorialModificacionCreateWithoutUsuarioInput = {
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fecha?: Date | string
    accion: string
    responsable: UsuarioCreateNestedOneWithoutHistorialResponsableInput
    platillo?: PlatilloCreateNestedOneWithoutHistorialModificacionesInput
  }

  export type HistorialModificacionUncheckedCreateWithoutUsuarioInput = {
    id?: number
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fecha?: Date | string
    accion: string
    responsableId: number
    platilloId?: number | null
  }

  export type HistorialModificacionCreateOrConnectWithoutUsuarioInput = {
    where: HistorialModificacionWhereUniqueInput
    create: XOR<HistorialModificacionCreateWithoutUsuarioInput, HistorialModificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type HistorialModificacionCreateManyUsuarioInputEnvelope = {
    data: HistorialModificacionCreateManyUsuarioInput | HistorialModificacionCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type HistorialModificacionCreateWithoutResponsableInput = {
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fecha?: Date | string
    accion: string
    usuario?: UsuarioCreateNestedOneWithoutHistorialModificacionesInput
    platillo?: PlatilloCreateNestedOneWithoutHistorialModificacionesInput
  }

  export type HistorialModificacionUncheckedCreateWithoutResponsableInput = {
    id?: number
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fecha?: Date | string
    accion: string
    usuarioId?: number | null
    platilloId?: number | null
  }

  export type HistorialModificacionCreateOrConnectWithoutResponsableInput = {
    where: HistorialModificacionWhereUniqueInput
    create: XOR<HistorialModificacionCreateWithoutResponsableInput, HistorialModificacionUncheckedCreateWithoutResponsableInput>
  }

  export type HistorialModificacionCreateManyResponsableInputEnvelope = {
    data: HistorialModificacionCreateManyResponsableInput | HistorialModificacionCreateManyResponsableInput[]
    skipDuplicates?: boolean
  }

  export type OrdenCreateWithoutMeseroInput = {
    codigo?: string
    mesa: number
    fecha?: Date | string
    finishedAt?: Date | string | null
    durationSec?: number | null
    estado?: string
    items?: OrdenItemCreateNestedManyWithoutOrdenInput
  }

  export type OrdenUncheckedCreateWithoutMeseroInput = {
    id?: number
    codigo?: string
    mesa: number
    fecha?: Date | string
    finishedAt?: Date | string | null
    durationSec?: number | null
    estado?: string
    items?: OrdenItemUncheckedCreateNestedManyWithoutOrdenInput
  }

  export type OrdenCreateOrConnectWithoutMeseroInput = {
    where: OrdenWhereUniqueInput
    create: XOR<OrdenCreateWithoutMeseroInput, OrdenUncheckedCreateWithoutMeseroInput>
  }

  export type OrdenCreateManyMeseroInputEnvelope = {
    data: OrdenCreateManyMeseroInput | OrdenCreateManyMeseroInput[]
    skipDuplicates?: boolean
  }

  export type OrdenItemCreateWithoutChefInput = {
    nombre: string
    precio: number
    nota?: string | null
    tipo: string
    estado: string
    creadoEn?: Date | string
    asignadoEn?: Date | string | null
    finalizadoEn?: Date | string | null
    prioridad?: number | null
    orden: OrdenCreateNestedOneWithoutItemsInput
  }

  export type OrdenItemUncheckedCreateWithoutChefInput = {
    id?: number
    nombre: string
    precio: number
    nota?: string | null
    tipo: string
    estado: string
    creadoEn?: Date | string
    asignadoEn?: Date | string | null
    finalizadoEn?: Date | string | null
    prioridad?: number | null
    ordenId: number
  }

  export type OrdenItemCreateOrConnectWithoutChefInput = {
    where: OrdenItemWhereUniqueInput
    create: XOR<OrdenItemCreateWithoutChefInput, OrdenItemUncheckedCreateWithoutChefInput>
  }

  export type OrdenItemCreateManyChefInputEnvelope = {
    data: OrdenItemCreateManyChefInput | OrdenItemCreateManyChefInput[]
    skipDuplicates?: boolean
  }

  export type CocinaChefCreateWithoutChefInput = {
    activo?: boolean
    lastSeen?: Date | string
  }

  export type CocinaChefUncheckedCreateWithoutChefInput = {
    id?: number
    activo?: boolean
    lastSeen?: Date | string
  }

  export type CocinaChefCreateOrConnectWithoutChefInput = {
    where: CocinaChefWhereUniqueInput
    create: XOR<CocinaChefCreateWithoutChefInput, CocinaChefUncheckedCreateWithoutChefInput>
  }

  export type RolUpsertWithoutUsuariosInput = {
    update: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
    create: XOR<RolCreateWithoutUsuariosInput, RolUncheckedCreateWithoutUsuariosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutUsuariosInput, RolUncheckedUpdateWithoutUsuariosInput>
  }

  export type RolUpdateWithoutUsuariosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    permisos?: PermisoPorRolUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    permisos?: PermisoPorRolUncheckedUpdateManyWithoutRolNestedInput
  }

  export type HistorialModificacionUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: HistorialModificacionWhereUniqueInput
    update: XOR<HistorialModificacionUpdateWithoutUsuarioInput, HistorialModificacionUncheckedUpdateWithoutUsuarioInput>
    create: XOR<HistorialModificacionCreateWithoutUsuarioInput, HistorialModificacionUncheckedCreateWithoutUsuarioInput>
  }

  export type HistorialModificacionUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: HistorialModificacionWhereUniqueInput
    data: XOR<HistorialModificacionUpdateWithoutUsuarioInput, HistorialModificacionUncheckedUpdateWithoutUsuarioInput>
  }

  export type HistorialModificacionUpdateManyWithWhereWithoutUsuarioInput = {
    where: HistorialModificacionScalarWhereInput
    data: XOR<HistorialModificacionUpdateManyMutationInput, HistorialModificacionUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type HistorialModificacionScalarWhereInput = {
    AND?: HistorialModificacionScalarWhereInput | HistorialModificacionScalarWhereInput[]
    OR?: HistorialModificacionScalarWhereInput[]
    NOT?: HistorialModificacionScalarWhereInput | HistorialModificacionScalarWhereInput[]
    id?: IntFilter<"HistorialModificacion"> | number
    campo?: StringFilter<"HistorialModificacion"> | string
    valorAnterior?: StringNullableFilter<"HistorialModificacion"> | string | null
    valorNuevo?: StringNullableFilter<"HistorialModificacion"> | string | null
    fecha?: DateTimeFilter<"HistorialModificacion"> | Date | string
    accion?: StringFilter<"HistorialModificacion"> | string
    responsableId?: IntFilter<"HistorialModificacion"> | number
    usuarioId?: IntNullableFilter<"HistorialModificacion"> | number | null
    platilloId?: IntNullableFilter<"HistorialModificacion"> | number | null
  }

  export type HistorialModificacionUpsertWithWhereUniqueWithoutResponsableInput = {
    where: HistorialModificacionWhereUniqueInput
    update: XOR<HistorialModificacionUpdateWithoutResponsableInput, HistorialModificacionUncheckedUpdateWithoutResponsableInput>
    create: XOR<HistorialModificacionCreateWithoutResponsableInput, HistorialModificacionUncheckedCreateWithoutResponsableInput>
  }

  export type HistorialModificacionUpdateWithWhereUniqueWithoutResponsableInput = {
    where: HistorialModificacionWhereUniqueInput
    data: XOR<HistorialModificacionUpdateWithoutResponsableInput, HistorialModificacionUncheckedUpdateWithoutResponsableInput>
  }

  export type HistorialModificacionUpdateManyWithWhereWithoutResponsableInput = {
    where: HistorialModificacionScalarWhereInput
    data: XOR<HistorialModificacionUpdateManyMutationInput, HistorialModificacionUncheckedUpdateManyWithoutResponsableInput>
  }

  export type OrdenUpsertWithWhereUniqueWithoutMeseroInput = {
    where: OrdenWhereUniqueInput
    update: XOR<OrdenUpdateWithoutMeseroInput, OrdenUncheckedUpdateWithoutMeseroInput>
    create: XOR<OrdenCreateWithoutMeseroInput, OrdenUncheckedCreateWithoutMeseroInput>
  }

  export type OrdenUpdateWithWhereUniqueWithoutMeseroInput = {
    where: OrdenWhereUniqueInput
    data: XOR<OrdenUpdateWithoutMeseroInput, OrdenUncheckedUpdateWithoutMeseroInput>
  }

  export type OrdenUpdateManyWithWhereWithoutMeseroInput = {
    where: OrdenScalarWhereInput
    data: XOR<OrdenUpdateManyMutationInput, OrdenUncheckedUpdateManyWithoutMeseroInput>
  }

  export type OrdenScalarWhereInput = {
    AND?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
    OR?: OrdenScalarWhereInput[]
    NOT?: OrdenScalarWhereInput | OrdenScalarWhereInput[]
    id?: IntFilter<"Orden"> | number
    codigo?: StringFilter<"Orden"> | string
    mesa?: IntFilter<"Orden"> | number
    fecha?: DateTimeFilter<"Orden"> | Date | string
    finishedAt?: DateTimeNullableFilter<"Orden"> | Date | string | null
    durationSec?: IntNullableFilter<"Orden"> | number | null
    meseroId?: IntFilter<"Orden"> | number
    estado?: StringFilter<"Orden"> | string
  }

  export type OrdenItemUpsertWithWhereUniqueWithoutChefInput = {
    where: OrdenItemWhereUniqueInput
    update: XOR<OrdenItemUpdateWithoutChefInput, OrdenItemUncheckedUpdateWithoutChefInput>
    create: XOR<OrdenItemCreateWithoutChefInput, OrdenItemUncheckedCreateWithoutChefInput>
  }

  export type OrdenItemUpdateWithWhereUniqueWithoutChefInput = {
    where: OrdenItemWhereUniqueInput
    data: XOR<OrdenItemUpdateWithoutChefInput, OrdenItemUncheckedUpdateWithoutChefInput>
  }

  export type OrdenItemUpdateManyWithWhereWithoutChefInput = {
    where: OrdenItemScalarWhereInput
    data: XOR<OrdenItemUpdateManyMutationInput, OrdenItemUncheckedUpdateManyWithoutChefInput>
  }

  export type OrdenItemScalarWhereInput = {
    AND?: OrdenItemScalarWhereInput | OrdenItemScalarWhereInput[]
    OR?: OrdenItemScalarWhereInput[]
    NOT?: OrdenItemScalarWhereInput | OrdenItemScalarWhereInput[]
    id?: IntFilter<"OrdenItem"> | number
    nombre?: StringFilter<"OrdenItem"> | string
    precio?: FloatFilter<"OrdenItem"> | number
    nota?: StringNullableFilter<"OrdenItem"> | string | null
    tipo?: StringFilter<"OrdenItem"> | string
    estado?: StringFilter<"OrdenItem"> | string
    creadoEn?: DateTimeFilter<"OrdenItem"> | Date | string
    asignadoEn?: DateTimeNullableFilter<"OrdenItem"> | Date | string | null
    finalizadoEn?: DateTimeNullableFilter<"OrdenItem"> | Date | string | null
    prioridad?: IntNullableFilter<"OrdenItem"> | number | null
    ordenId?: IntFilter<"OrdenItem"> | number
    chefId?: IntNullableFilter<"OrdenItem"> | number | null
  }

  export type CocinaChefUpsertWithoutChefInput = {
    update: XOR<CocinaChefUpdateWithoutChefInput, CocinaChefUncheckedUpdateWithoutChefInput>
    create: XOR<CocinaChefCreateWithoutChefInput, CocinaChefUncheckedCreateWithoutChefInput>
    where?: CocinaChefWhereInput
  }

  export type CocinaChefUpdateToOneWithWhereWithoutChefInput = {
    where?: CocinaChefWhereInput
    data: XOR<CocinaChefUpdateWithoutChefInput, CocinaChefUncheckedUpdateWithoutChefInput>
  }

  export type CocinaChefUpdateWithoutChefInput = {
    activo?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CocinaChefUncheckedUpdateWithoutChefInput = {
    id?: IntFieldUpdateOperationsInput | number
    activo?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateWithoutRolInput = {
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    historialModificaciones?: HistorialModificacionCreateNestedManyWithoutUsuarioInput
    historialResponsable?: HistorialModificacionCreateNestedManyWithoutResponsableInput
    ordenesMesero?: OrdenCreateNestedManyWithoutMeseroInput
    itemsAsignados?: OrdenItemCreateNestedManyWithoutChefInput
    cocinaEstado?: CocinaChefCreateNestedOneWithoutChefInput
  }

  export type UsuarioUncheckedCreateWithoutRolInput = {
    id?: number
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    historialModificaciones?: HistorialModificacionUncheckedCreateNestedManyWithoutUsuarioInput
    historialResponsable?: HistorialModificacionUncheckedCreateNestedManyWithoutResponsableInput
    ordenesMesero?: OrdenUncheckedCreateNestedManyWithoutMeseroInput
    itemsAsignados?: OrdenItemUncheckedCreateNestedManyWithoutChefInput
    cocinaEstado?: CocinaChefUncheckedCreateNestedOneWithoutChefInput
  }

  export type UsuarioCreateOrConnectWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioCreateManyRolInputEnvelope = {
    data: UsuarioCreateManyRolInput | UsuarioCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type PermisoPorRolCreateWithoutRolInput = {
    permiso: PermisoCreateNestedOneWithoutRolesInput
  }

  export type PermisoPorRolUncheckedCreateWithoutRolInput = {
    id?: number
    permisoId: number
  }

  export type PermisoPorRolCreateOrConnectWithoutRolInput = {
    where: PermisoPorRolWhereUniqueInput
    create: XOR<PermisoPorRolCreateWithoutRolInput, PermisoPorRolUncheckedCreateWithoutRolInput>
  }

  export type PermisoPorRolCreateManyRolInputEnvelope = {
    data: PermisoPorRolCreateManyRolInput | PermisoPorRolCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutRolInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutRolInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    usuario?: StringFilter<"Usuario"> | string
    correo?: StringFilter<"Usuario"> | string
    contrasena?: StringFilter<"Usuario"> | string
    estado?: BoolFilter<"Usuario"> | boolean
    creadoEn?: DateTimeFilter<"Usuario"> | Date | string
    actualizadoEn?: DateTimeFilter<"Usuario"> | Date | string
    rolId?: IntFilter<"Usuario"> | number
  }

  export type PermisoPorRolUpsertWithWhereUniqueWithoutRolInput = {
    where: PermisoPorRolWhereUniqueInput
    update: XOR<PermisoPorRolUpdateWithoutRolInput, PermisoPorRolUncheckedUpdateWithoutRolInput>
    create: XOR<PermisoPorRolCreateWithoutRolInput, PermisoPorRolUncheckedCreateWithoutRolInput>
  }

  export type PermisoPorRolUpdateWithWhereUniqueWithoutRolInput = {
    where: PermisoPorRolWhereUniqueInput
    data: XOR<PermisoPorRolUpdateWithoutRolInput, PermisoPorRolUncheckedUpdateWithoutRolInput>
  }

  export type PermisoPorRolUpdateManyWithWhereWithoutRolInput = {
    where: PermisoPorRolScalarWhereInput
    data: XOR<PermisoPorRolUpdateManyMutationInput, PermisoPorRolUncheckedUpdateManyWithoutRolInput>
  }

  export type PermisoPorRolScalarWhereInput = {
    AND?: PermisoPorRolScalarWhereInput | PermisoPorRolScalarWhereInput[]
    OR?: PermisoPorRolScalarWhereInput[]
    NOT?: PermisoPorRolScalarWhereInput | PermisoPorRolScalarWhereInput[]
    id?: IntFilter<"PermisoPorRol"> | number
    permisoId?: IntFilter<"PermisoPorRol"> | number
    rolId?: IntFilter<"PermisoPorRol"> | number
  }

  export type PermisoPorRolCreateWithoutPermisoInput = {
    rol: RolCreateNestedOneWithoutPermisosInput
  }

  export type PermisoPorRolUncheckedCreateWithoutPermisoInput = {
    id?: number
    rolId: number
  }

  export type PermisoPorRolCreateOrConnectWithoutPermisoInput = {
    where: PermisoPorRolWhereUniqueInput
    create: XOR<PermisoPorRolCreateWithoutPermisoInput, PermisoPorRolUncheckedCreateWithoutPermisoInput>
  }

  export type PermisoPorRolCreateManyPermisoInputEnvelope = {
    data: PermisoPorRolCreateManyPermisoInput | PermisoPorRolCreateManyPermisoInput[]
    skipDuplicates?: boolean
  }

  export type PermisoPorRolUpsertWithWhereUniqueWithoutPermisoInput = {
    where: PermisoPorRolWhereUniqueInput
    update: XOR<PermisoPorRolUpdateWithoutPermisoInput, PermisoPorRolUncheckedUpdateWithoutPermisoInput>
    create: XOR<PermisoPorRolCreateWithoutPermisoInput, PermisoPorRolUncheckedCreateWithoutPermisoInput>
  }

  export type PermisoPorRolUpdateWithWhereUniqueWithoutPermisoInput = {
    where: PermisoPorRolWhereUniqueInput
    data: XOR<PermisoPorRolUpdateWithoutPermisoInput, PermisoPorRolUncheckedUpdateWithoutPermisoInput>
  }

  export type PermisoPorRolUpdateManyWithWhereWithoutPermisoInput = {
    where: PermisoPorRolScalarWhereInput
    data: XOR<PermisoPorRolUpdateManyMutationInput, PermisoPorRolUncheckedUpdateManyWithoutPermisoInput>
  }

  export type PermisoCreateWithoutRolesInput = {
    nombre: string
    descripcion?: string | null
  }

  export type PermisoUncheckedCreateWithoutRolesInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type PermisoCreateOrConnectWithoutRolesInput = {
    where: PermisoWhereUniqueInput
    create: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
  }

  export type RolCreateWithoutPermisosInput = {
    nombre: string
    usuarios?: UsuarioCreateNestedManyWithoutRolInput
  }

  export type RolUncheckedCreateWithoutPermisosInput = {
    id?: number
    nombre: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutRolInput
  }

  export type RolCreateOrConnectWithoutPermisosInput = {
    where: RolWhereUniqueInput
    create: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
  }

  export type PermisoUpsertWithoutRolesInput = {
    update: XOR<PermisoUpdateWithoutRolesInput, PermisoUncheckedUpdateWithoutRolesInput>
    create: XOR<PermisoCreateWithoutRolesInput, PermisoUncheckedCreateWithoutRolesInput>
    where?: PermisoWhereInput
  }

  export type PermisoUpdateToOneWithWhereWithoutRolesInput = {
    where?: PermisoWhereInput
    data: XOR<PermisoUpdateWithoutRolesInput, PermisoUncheckedUpdateWithoutRolesInput>
  }

  export type PermisoUpdateWithoutRolesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermisoUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RolUpsertWithoutPermisosInput = {
    update: XOR<RolUpdateWithoutPermisosInput, RolUncheckedUpdateWithoutPermisosInput>
    create: XOR<RolCreateWithoutPermisosInput, RolUncheckedCreateWithoutPermisosInput>
    where?: RolWhereInput
  }

  export type RolUpdateToOneWithWhereWithoutPermisosInput = {
    where?: RolWhereInput
    data: XOR<RolUpdateWithoutPermisosInput, RolUncheckedUpdateWithoutPermisosInput>
  }

  export type RolUpdateWithoutPermisosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutRolNestedInput
  }

  export type RolUncheckedUpdateWithoutPermisosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutRolNestedInput
  }

  export type PlatilloCreateWithoutCategoriaInput = {
    nombre: string
    precio: number
    creadoEn?: Date | string
    disponible?: boolean
    imagenUrl?: string | null
    historialModificaciones?: HistorialModificacionCreateNestedManyWithoutPlatilloInput
  }

  export type PlatilloUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nombre: string
    precio: number
    creadoEn?: Date | string
    disponible?: boolean
    imagenUrl?: string | null
    historialModificaciones?: HistorialModificacionUncheckedCreateNestedManyWithoutPlatilloInput
  }

  export type PlatilloCreateOrConnectWithoutCategoriaInput = {
    where: PlatilloWhereUniqueInput
    create: XOR<PlatilloCreateWithoutCategoriaInput, PlatilloUncheckedCreateWithoutCategoriaInput>
  }

  export type PlatilloCreateManyCategoriaInputEnvelope = {
    data: PlatilloCreateManyCategoriaInput | PlatilloCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type PlatilloUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: PlatilloWhereUniqueInput
    update: XOR<PlatilloUpdateWithoutCategoriaInput, PlatilloUncheckedUpdateWithoutCategoriaInput>
    create: XOR<PlatilloCreateWithoutCategoriaInput, PlatilloUncheckedCreateWithoutCategoriaInput>
  }

  export type PlatilloUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: PlatilloWhereUniqueInput
    data: XOR<PlatilloUpdateWithoutCategoriaInput, PlatilloUncheckedUpdateWithoutCategoriaInput>
  }

  export type PlatilloUpdateManyWithWhereWithoutCategoriaInput = {
    where: PlatilloScalarWhereInput
    data: XOR<PlatilloUpdateManyMutationInput, PlatilloUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type PlatilloScalarWhereInput = {
    AND?: PlatilloScalarWhereInput | PlatilloScalarWhereInput[]
    OR?: PlatilloScalarWhereInput[]
    NOT?: PlatilloScalarWhereInput | PlatilloScalarWhereInput[]
    id?: IntFilter<"Platillo"> | number
    nombre?: StringFilter<"Platillo"> | string
    precio?: FloatFilter<"Platillo"> | number
    creadoEn?: DateTimeFilter<"Platillo"> | Date | string
    disponible?: BoolFilter<"Platillo"> | boolean
    imagenUrl?: StringNullableFilter<"Platillo"> | string | null
    categoriaId?: IntFilter<"Platillo"> | number
  }

  export type CategoriaCreateWithoutPlatillosInput = {
    nombre: string
    activo?: boolean
    creadoEn?: Date | string
  }

  export type CategoriaUncheckedCreateWithoutPlatillosInput = {
    id?: number
    nombre: string
    activo?: boolean
    creadoEn?: Date | string
  }

  export type CategoriaCreateOrConnectWithoutPlatillosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutPlatillosInput, CategoriaUncheckedCreateWithoutPlatillosInput>
  }

  export type HistorialModificacionCreateWithoutPlatilloInput = {
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fecha?: Date | string
    accion: string
    responsable: UsuarioCreateNestedOneWithoutHistorialResponsableInput
    usuario?: UsuarioCreateNestedOneWithoutHistorialModificacionesInput
  }

  export type HistorialModificacionUncheckedCreateWithoutPlatilloInput = {
    id?: number
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fecha?: Date | string
    accion: string
    responsableId: number
    usuarioId?: number | null
  }

  export type HistorialModificacionCreateOrConnectWithoutPlatilloInput = {
    where: HistorialModificacionWhereUniqueInput
    create: XOR<HistorialModificacionCreateWithoutPlatilloInput, HistorialModificacionUncheckedCreateWithoutPlatilloInput>
  }

  export type HistorialModificacionCreateManyPlatilloInputEnvelope = {
    data: HistorialModificacionCreateManyPlatilloInput | HistorialModificacionCreateManyPlatilloInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithoutPlatillosInput = {
    update: XOR<CategoriaUpdateWithoutPlatillosInput, CategoriaUncheckedUpdateWithoutPlatillosInput>
    create: XOR<CategoriaCreateWithoutPlatillosInput, CategoriaUncheckedCreateWithoutPlatillosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutPlatillosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutPlatillosInput, CategoriaUncheckedUpdateWithoutPlatillosInput>
  }

  export type CategoriaUpdateWithoutPlatillosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateWithoutPlatillosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistorialModificacionUpsertWithWhereUniqueWithoutPlatilloInput = {
    where: HistorialModificacionWhereUniqueInput
    update: XOR<HistorialModificacionUpdateWithoutPlatilloInput, HistorialModificacionUncheckedUpdateWithoutPlatilloInput>
    create: XOR<HistorialModificacionCreateWithoutPlatilloInput, HistorialModificacionUncheckedCreateWithoutPlatilloInput>
  }

  export type HistorialModificacionUpdateWithWhereUniqueWithoutPlatilloInput = {
    where: HistorialModificacionWhereUniqueInput
    data: XOR<HistorialModificacionUpdateWithoutPlatilloInput, HistorialModificacionUncheckedUpdateWithoutPlatilloInput>
  }

  export type HistorialModificacionUpdateManyWithWhereWithoutPlatilloInput = {
    where: HistorialModificacionScalarWhereInput
    data: XOR<HistorialModificacionUpdateManyMutationInput, HistorialModificacionUncheckedUpdateManyWithoutPlatilloInput>
  }

  export type UsuarioCreateWithoutHistorialResponsableInput = {
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
    historialModificaciones?: HistorialModificacionCreateNestedManyWithoutUsuarioInput
    ordenesMesero?: OrdenCreateNestedManyWithoutMeseroInput
    itemsAsignados?: OrdenItemCreateNestedManyWithoutChefInput
    cocinaEstado?: CocinaChefCreateNestedOneWithoutChefInput
  }

  export type UsuarioUncheckedCreateWithoutHistorialResponsableInput = {
    id?: number
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rolId: number
    historialModificaciones?: HistorialModificacionUncheckedCreateNestedManyWithoutUsuarioInput
    ordenesMesero?: OrdenUncheckedCreateNestedManyWithoutMeseroInput
    itemsAsignados?: OrdenItemUncheckedCreateNestedManyWithoutChefInput
    cocinaEstado?: CocinaChefUncheckedCreateNestedOneWithoutChefInput
  }

  export type UsuarioCreateOrConnectWithoutHistorialResponsableInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutHistorialResponsableInput, UsuarioUncheckedCreateWithoutHistorialResponsableInput>
  }

  export type UsuarioCreateWithoutHistorialModificacionesInput = {
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
    historialResponsable?: HistorialModificacionCreateNestedManyWithoutResponsableInput
    ordenesMesero?: OrdenCreateNestedManyWithoutMeseroInput
    itemsAsignados?: OrdenItemCreateNestedManyWithoutChefInput
    cocinaEstado?: CocinaChefCreateNestedOneWithoutChefInput
  }

  export type UsuarioUncheckedCreateWithoutHistorialModificacionesInput = {
    id?: number
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rolId: number
    historialResponsable?: HistorialModificacionUncheckedCreateNestedManyWithoutResponsableInput
    ordenesMesero?: OrdenUncheckedCreateNestedManyWithoutMeseroInput
    itemsAsignados?: OrdenItemUncheckedCreateNestedManyWithoutChefInput
    cocinaEstado?: CocinaChefUncheckedCreateNestedOneWithoutChefInput
  }

  export type UsuarioCreateOrConnectWithoutHistorialModificacionesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutHistorialModificacionesInput, UsuarioUncheckedCreateWithoutHistorialModificacionesInput>
  }

  export type PlatilloCreateWithoutHistorialModificacionesInput = {
    nombre: string
    precio: number
    creadoEn?: Date | string
    disponible?: boolean
    imagenUrl?: string | null
    categoria: CategoriaCreateNestedOneWithoutPlatillosInput
  }

  export type PlatilloUncheckedCreateWithoutHistorialModificacionesInput = {
    id?: number
    nombre: string
    precio: number
    creadoEn?: Date | string
    disponible?: boolean
    imagenUrl?: string | null
    categoriaId: number
  }

  export type PlatilloCreateOrConnectWithoutHistorialModificacionesInput = {
    where: PlatilloWhereUniqueInput
    create: XOR<PlatilloCreateWithoutHistorialModificacionesInput, PlatilloUncheckedCreateWithoutHistorialModificacionesInput>
  }

  export type UsuarioUpsertWithoutHistorialResponsableInput = {
    update: XOR<UsuarioUpdateWithoutHistorialResponsableInput, UsuarioUncheckedUpdateWithoutHistorialResponsableInput>
    create: XOR<UsuarioCreateWithoutHistorialResponsableInput, UsuarioUncheckedCreateWithoutHistorialResponsableInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutHistorialResponsableInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutHistorialResponsableInput, UsuarioUncheckedUpdateWithoutHistorialResponsableInput>
  }

  export type UsuarioUpdateWithoutHistorialResponsableInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    historialModificaciones?: HistorialModificacionUpdateManyWithoutUsuarioNestedInput
    ordenesMesero?: OrdenUpdateManyWithoutMeseroNestedInput
    itemsAsignados?: OrdenItemUpdateManyWithoutChefNestedInput
    cocinaEstado?: CocinaChefUpdateOneWithoutChefNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutHistorialResponsableInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: IntFieldUpdateOperationsInput | number
    historialModificaciones?: HistorialModificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    ordenesMesero?: OrdenUncheckedUpdateManyWithoutMeseroNestedInput
    itemsAsignados?: OrdenItemUncheckedUpdateManyWithoutChefNestedInput
    cocinaEstado?: CocinaChefUncheckedUpdateOneWithoutChefNestedInput
  }

  export type UsuarioUpsertWithoutHistorialModificacionesInput = {
    update: XOR<UsuarioUpdateWithoutHistorialModificacionesInput, UsuarioUncheckedUpdateWithoutHistorialModificacionesInput>
    create: XOR<UsuarioCreateWithoutHistorialModificacionesInput, UsuarioUncheckedCreateWithoutHistorialModificacionesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutHistorialModificacionesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutHistorialModificacionesInput, UsuarioUncheckedUpdateWithoutHistorialModificacionesInput>
  }

  export type UsuarioUpdateWithoutHistorialModificacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    historialResponsable?: HistorialModificacionUpdateManyWithoutResponsableNestedInput
    ordenesMesero?: OrdenUpdateManyWithoutMeseroNestedInput
    itemsAsignados?: OrdenItemUpdateManyWithoutChefNestedInput
    cocinaEstado?: CocinaChefUpdateOneWithoutChefNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutHistorialModificacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: IntFieldUpdateOperationsInput | number
    historialResponsable?: HistorialModificacionUncheckedUpdateManyWithoutResponsableNestedInput
    ordenesMesero?: OrdenUncheckedUpdateManyWithoutMeseroNestedInput
    itemsAsignados?: OrdenItemUncheckedUpdateManyWithoutChefNestedInput
    cocinaEstado?: CocinaChefUncheckedUpdateOneWithoutChefNestedInput
  }

  export type PlatilloUpsertWithoutHistorialModificacionesInput = {
    update: XOR<PlatilloUpdateWithoutHistorialModificacionesInput, PlatilloUncheckedUpdateWithoutHistorialModificacionesInput>
    create: XOR<PlatilloCreateWithoutHistorialModificacionesInput, PlatilloUncheckedCreateWithoutHistorialModificacionesInput>
    where?: PlatilloWhereInput
  }

  export type PlatilloUpdateToOneWithWhereWithoutHistorialModificacionesInput = {
    where?: PlatilloWhereInput
    data: XOR<PlatilloUpdateWithoutHistorialModificacionesInput, PlatilloUncheckedUpdateWithoutHistorialModificacionesInput>
  }

  export type PlatilloUpdateWithoutHistorialModificacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoria?: CategoriaUpdateOneRequiredWithoutPlatillosNestedInput
  }

  export type PlatilloUncheckedUpdateWithoutHistorialModificacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    categoriaId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateWithoutOrdenesMeseroInput = {
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
    historialModificaciones?: HistorialModificacionCreateNestedManyWithoutUsuarioInput
    historialResponsable?: HistorialModificacionCreateNestedManyWithoutResponsableInput
    itemsAsignados?: OrdenItemCreateNestedManyWithoutChefInput
    cocinaEstado?: CocinaChefCreateNestedOneWithoutChefInput
  }

  export type UsuarioUncheckedCreateWithoutOrdenesMeseroInput = {
    id?: number
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rolId: number
    historialModificaciones?: HistorialModificacionUncheckedCreateNestedManyWithoutUsuarioInput
    historialResponsable?: HistorialModificacionUncheckedCreateNestedManyWithoutResponsableInput
    itemsAsignados?: OrdenItemUncheckedCreateNestedManyWithoutChefInput
    cocinaEstado?: CocinaChefUncheckedCreateNestedOneWithoutChefInput
  }

  export type UsuarioCreateOrConnectWithoutOrdenesMeseroInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutOrdenesMeseroInput, UsuarioUncheckedCreateWithoutOrdenesMeseroInput>
  }

  export type OrdenItemCreateWithoutOrdenInput = {
    nombre: string
    precio: number
    nota?: string | null
    tipo: string
    estado: string
    creadoEn?: Date | string
    asignadoEn?: Date | string | null
    finalizadoEn?: Date | string | null
    prioridad?: number | null
    chef?: UsuarioCreateNestedOneWithoutItemsAsignadosInput
  }

  export type OrdenItemUncheckedCreateWithoutOrdenInput = {
    id?: number
    nombre: string
    precio: number
    nota?: string | null
    tipo: string
    estado: string
    creadoEn?: Date | string
    asignadoEn?: Date | string | null
    finalizadoEn?: Date | string | null
    prioridad?: number | null
    chefId?: number | null
  }

  export type OrdenItemCreateOrConnectWithoutOrdenInput = {
    where: OrdenItemWhereUniqueInput
    create: XOR<OrdenItemCreateWithoutOrdenInput, OrdenItemUncheckedCreateWithoutOrdenInput>
  }

  export type OrdenItemCreateManyOrdenInputEnvelope = {
    data: OrdenItemCreateManyOrdenInput | OrdenItemCreateManyOrdenInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutOrdenesMeseroInput = {
    update: XOR<UsuarioUpdateWithoutOrdenesMeseroInput, UsuarioUncheckedUpdateWithoutOrdenesMeseroInput>
    create: XOR<UsuarioCreateWithoutOrdenesMeseroInput, UsuarioUncheckedCreateWithoutOrdenesMeseroInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutOrdenesMeseroInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutOrdenesMeseroInput, UsuarioUncheckedUpdateWithoutOrdenesMeseroInput>
  }

  export type UsuarioUpdateWithoutOrdenesMeseroInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    historialModificaciones?: HistorialModificacionUpdateManyWithoutUsuarioNestedInput
    historialResponsable?: HistorialModificacionUpdateManyWithoutResponsableNestedInput
    itemsAsignados?: OrdenItemUpdateManyWithoutChefNestedInput
    cocinaEstado?: CocinaChefUpdateOneWithoutChefNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutOrdenesMeseroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: IntFieldUpdateOperationsInput | number
    historialModificaciones?: HistorialModificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    historialResponsable?: HistorialModificacionUncheckedUpdateManyWithoutResponsableNestedInput
    itemsAsignados?: OrdenItemUncheckedUpdateManyWithoutChefNestedInput
    cocinaEstado?: CocinaChefUncheckedUpdateOneWithoutChefNestedInput
  }

  export type OrdenItemUpsertWithWhereUniqueWithoutOrdenInput = {
    where: OrdenItemWhereUniqueInput
    update: XOR<OrdenItemUpdateWithoutOrdenInput, OrdenItemUncheckedUpdateWithoutOrdenInput>
    create: XOR<OrdenItemCreateWithoutOrdenInput, OrdenItemUncheckedCreateWithoutOrdenInput>
  }

  export type OrdenItemUpdateWithWhereUniqueWithoutOrdenInput = {
    where: OrdenItemWhereUniqueInput
    data: XOR<OrdenItemUpdateWithoutOrdenInput, OrdenItemUncheckedUpdateWithoutOrdenInput>
  }

  export type OrdenItemUpdateManyWithWhereWithoutOrdenInput = {
    where: OrdenItemScalarWhereInput
    data: XOR<OrdenItemUpdateManyMutationInput, OrdenItemUncheckedUpdateManyWithoutOrdenInput>
  }

  export type OrdenCreateWithoutItemsInput = {
    codigo?: string
    mesa: number
    fecha?: Date | string
    finishedAt?: Date | string | null
    durationSec?: number | null
    estado?: string
    mesero: UsuarioCreateNestedOneWithoutOrdenesMeseroInput
  }

  export type OrdenUncheckedCreateWithoutItemsInput = {
    id?: number
    codigo?: string
    mesa: number
    fecha?: Date | string
    finishedAt?: Date | string | null
    durationSec?: number | null
    meseroId: number
    estado?: string
  }

  export type OrdenCreateOrConnectWithoutItemsInput = {
    where: OrdenWhereUniqueInput
    create: XOR<OrdenCreateWithoutItemsInput, OrdenUncheckedCreateWithoutItemsInput>
  }

  export type UsuarioCreateWithoutItemsAsignadosInput = {
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
    historialModificaciones?: HistorialModificacionCreateNestedManyWithoutUsuarioInput
    historialResponsable?: HistorialModificacionCreateNestedManyWithoutResponsableInput
    ordenesMesero?: OrdenCreateNestedManyWithoutMeseroInput
    cocinaEstado?: CocinaChefCreateNestedOneWithoutChefInput
  }

  export type UsuarioUncheckedCreateWithoutItemsAsignadosInput = {
    id?: number
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rolId: number
    historialModificaciones?: HistorialModificacionUncheckedCreateNestedManyWithoutUsuarioInput
    historialResponsable?: HistorialModificacionUncheckedCreateNestedManyWithoutResponsableInput
    ordenesMesero?: OrdenUncheckedCreateNestedManyWithoutMeseroInput
    cocinaEstado?: CocinaChefUncheckedCreateNestedOneWithoutChefInput
  }

  export type UsuarioCreateOrConnectWithoutItemsAsignadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutItemsAsignadosInput, UsuarioUncheckedCreateWithoutItemsAsignadosInput>
  }

  export type OrdenUpsertWithoutItemsInput = {
    update: XOR<OrdenUpdateWithoutItemsInput, OrdenUncheckedUpdateWithoutItemsInput>
    create: XOR<OrdenCreateWithoutItemsInput, OrdenUncheckedCreateWithoutItemsInput>
    where?: OrdenWhereInput
  }

  export type OrdenUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrdenWhereInput
    data: XOR<OrdenUpdateWithoutItemsInput, OrdenUncheckedUpdateWithoutItemsInput>
  }

  export type OrdenUpdateWithoutItemsInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    mesa?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    mesero?: UsuarioUpdateOneRequiredWithoutOrdenesMeseroNestedInput
  }

  export type OrdenUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    mesa?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    meseroId?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUpsertWithoutItemsAsignadosInput = {
    update: XOR<UsuarioUpdateWithoutItemsAsignadosInput, UsuarioUncheckedUpdateWithoutItemsAsignadosInput>
    create: XOR<UsuarioCreateWithoutItemsAsignadosInput, UsuarioUncheckedCreateWithoutItemsAsignadosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutItemsAsignadosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutItemsAsignadosInput, UsuarioUncheckedUpdateWithoutItemsAsignadosInput>
  }

  export type UsuarioUpdateWithoutItemsAsignadosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    historialModificaciones?: HistorialModificacionUpdateManyWithoutUsuarioNestedInput
    historialResponsable?: HistorialModificacionUpdateManyWithoutResponsableNestedInput
    ordenesMesero?: OrdenUpdateManyWithoutMeseroNestedInput
    cocinaEstado?: CocinaChefUpdateOneWithoutChefNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutItemsAsignadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: IntFieldUpdateOperationsInput | number
    historialModificaciones?: HistorialModificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    historialResponsable?: HistorialModificacionUncheckedUpdateManyWithoutResponsableNestedInput
    ordenesMesero?: OrdenUncheckedUpdateManyWithoutMeseroNestedInput
    cocinaEstado?: CocinaChefUncheckedUpdateOneWithoutChefNestedInput
  }

  export type UsuarioCreateWithoutCocinaEstadoInput = {
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rol: RolCreateNestedOneWithoutUsuariosInput
    historialModificaciones?: HistorialModificacionCreateNestedManyWithoutUsuarioInput
    historialResponsable?: HistorialModificacionCreateNestedManyWithoutResponsableInput
    ordenesMesero?: OrdenCreateNestedManyWithoutMeseroInput
    itemsAsignados?: OrdenItemCreateNestedManyWithoutChefInput
  }

  export type UsuarioUncheckedCreateWithoutCocinaEstadoInput = {
    id?: number
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
    rolId: number
    historialModificaciones?: HistorialModificacionUncheckedCreateNestedManyWithoutUsuarioInput
    historialResponsable?: HistorialModificacionUncheckedCreateNestedManyWithoutResponsableInput
    ordenesMesero?: OrdenUncheckedCreateNestedManyWithoutMeseroInput
    itemsAsignados?: OrdenItemUncheckedCreateNestedManyWithoutChefInput
  }

  export type UsuarioCreateOrConnectWithoutCocinaEstadoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutCocinaEstadoInput, UsuarioUncheckedCreateWithoutCocinaEstadoInput>
  }

  export type UsuarioUpsertWithoutCocinaEstadoInput = {
    update: XOR<UsuarioUpdateWithoutCocinaEstadoInput, UsuarioUncheckedUpdateWithoutCocinaEstadoInput>
    create: XOR<UsuarioCreateWithoutCocinaEstadoInput, UsuarioUncheckedCreateWithoutCocinaEstadoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutCocinaEstadoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutCocinaEstadoInput, UsuarioUncheckedUpdateWithoutCocinaEstadoInput>
  }

  export type UsuarioUpdateWithoutCocinaEstadoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RolUpdateOneRequiredWithoutUsuariosNestedInput
    historialModificaciones?: HistorialModificacionUpdateManyWithoutUsuarioNestedInput
    historialResponsable?: HistorialModificacionUpdateManyWithoutResponsableNestedInput
    ordenesMesero?: OrdenUpdateManyWithoutMeseroNestedInput
    itemsAsignados?: OrdenItemUpdateManyWithoutChefNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutCocinaEstadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    rolId?: IntFieldUpdateOperationsInput | number
    historialModificaciones?: HistorialModificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    historialResponsable?: HistorialModificacionUncheckedUpdateManyWithoutResponsableNestedInput
    ordenesMesero?: OrdenUncheckedUpdateManyWithoutMeseroNestedInput
    itemsAsignados?: OrdenItemUncheckedUpdateManyWithoutChefNestedInput
  }

  export type HistorialModificacionCreateManyUsuarioInput = {
    id?: number
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fecha?: Date | string
    accion: string
    responsableId: number
    platilloId?: number | null
  }

  export type HistorialModificacionCreateManyResponsableInput = {
    id?: number
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fecha?: Date | string
    accion: string
    usuarioId?: number | null
    platilloId?: number | null
  }

  export type OrdenCreateManyMeseroInput = {
    id?: number
    codigo?: string
    mesa: number
    fecha?: Date | string
    finishedAt?: Date | string | null
    durationSec?: number | null
    estado?: string
  }

  export type OrdenItemCreateManyChefInput = {
    id?: number
    nombre: string
    precio: number
    nota?: string | null
    tipo: string
    estado: string
    creadoEn?: Date | string
    asignadoEn?: Date | string | null
    finalizadoEn?: Date | string | null
    prioridad?: number | null
    ordenId: number
  }

  export type HistorialModificacionUpdateWithoutUsuarioInput = {
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    responsable?: UsuarioUpdateOneRequiredWithoutHistorialResponsableNestedInput
    platillo?: PlatilloUpdateOneWithoutHistorialModificacionesNestedInput
  }

  export type HistorialModificacionUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    responsableId?: IntFieldUpdateOperationsInput | number
    platilloId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistorialModificacionUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    responsableId?: IntFieldUpdateOperationsInput | number
    platilloId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistorialModificacionUpdateWithoutResponsableInput = {
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneWithoutHistorialModificacionesNestedInput
    platillo?: PlatilloUpdateOneWithoutHistorialModificacionesNestedInput
  }

  export type HistorialModificacionUncheckedUpdateWithoutResponsableInput = {
    id?: IntFieldUpdateOperationsInput | number
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    platilloId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistorialModificacionUncheckedUpdateManyWithoutResponsableInput = {
    id?: IntFieldUpdateOperationsInput | number
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    platilloId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdenUpdateWithoutMeseroInput = {
    codigo?: StringFieldUpdateOperationsInput | string
    mesa?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    items?: OrdenItemUpdateManyWithoutOrdenNestedInput
  }

  export type OrdenUncheckedUpdateWithoutMeseroInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    mesa?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
    items?: OrdenItemUncheckedUpdateManyWithoutOrdenNestedInput
  }

  export type OrdenUncheckedUpdateManyWithoutMeseroInput = {
    id?: IntFieldUpdateOperationsInput | number
    codigo?: StringFieldUpdateOperationsInput | string
    mesa?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSec?: NullableIntFieldUpdateOperationsInput | number | null
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type OrdenItemUpdateWithoutChefInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asignadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalizadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    orden?: OrdenUpdateOneRequiredWithoutItemsNestedInput
  }

  export type OrdenItemUncheckedUpdateWithoutChefInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asignadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalizadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    ordenId?: IntFieldUpdateOperationsInput | number
  }

  export type OrdenItemUncheckedUpdateManyWithoutChefInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asignadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalizadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    ordenId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateManyRolInput = {
    id?: number
    nombre: string
    usuario: string
    correo: string
    contrasena: string
    estado?: boolean
    creadoEn?: Date | string
    actualizadoEn?: Date | string
  }

  export type PermisoPorRolCreateManyRolInput = {
    id?: number
    permisoId: number
  }

  export type UsuarioUpdateWithoutRolInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    historialModificaciones?: HistorialModificacionUpdateManyWithoutUsuarioNestedInput
    historialResponsable?: HistorialModificacionUpdateManyWithoutResponsableNestedInput
    ordenesMesero?: OrdenUpdateManyWithoutMeseroNestedInput
    itemsAsignados?: OrdenItemUpdateManyWithoutChefNestedInput
    cocinaEstado?: CocinaChefUpdateOneWithoutChefNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    historialModificaciones?: HistorialModificacionUncheckedUpdateManyWithoutUsuarioNestedInput
    historialResponsable?: HistorialModificacionUncheckedUpdateManyWithoutResponsableNestedInput
    ordenesMesero?: OrdenUncheckedUpdateManyWithoutMeseroNestedInput
    itemsAsignados?: OrdenItemUncheckedUpdateManyWithoutChefNestedInput
    cocinaEstado?: CocinaChefUncheckedUpdateOneWithoutChefNestedInput
  }

  export type UsuarioUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    usuario?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    actualizadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermisoPorRolUpdateWithoutRolInput = {
    permiso?: PermisoUpdateOneRequiredWithoutRolesNestedInput
  }

  export type PermisoPorRolUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type PermisoPorRolUncheckedUpdateManyWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    permisoId?: IntFieldUpdateOperationsInput | number
  }

  export type PermisoPorRolCreateManyPermisoInput = {
    id?: number
    rolId: number
  }

  export type PermisoPorRolUpdateWithoutPermisoInput = {
    rol?: RolUpdateOneRequiredWithoutPermisosNestedInput
  }

  export type PermisoPorRolUncheckedUpdateWithoutPermisoInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type PermisoPorRolUncheckedUpdateManyWithoutPermisoInput = {
    id?: IntFieldUpdateOperationsInput | number
    rolId?: IntFieldUpdateOperationsInput | number
  }

  export type PlatilloCreateManyCategoriaInput = {
    id?: number
    nombre: string
    precio: number
    creadoEn?: Date | string
    disponible?: boolean
    imagenUrl?: string | null
  }

  export type PlatilloUpdateWithoutCategoriaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    historialModificaciones?: HistorialModificacionUpdateManyWithoutPlatilloNestedInput
  }

  export type PlatilloUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
    historialModificaciones?: HistorialModificacionUncheckedUpdateManyWithoutPlatilloNestedInput
  }

  export type PlatilloUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    imagenUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistorialModificacionCreateManyPlatilloInput = {
    id?: number
    campo: string
    valorAnterior?: string | null
    valorNuevo?: string | null
    fecha?: Date | string
    accion: string
    responsableId: number
    usuarioId?: number | null
  }

  export type HistorialModificacionUpdateWithoutPlatilloInput = {
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    responsable?: UsuarioUpdateOneRequiredWithoutHistorialResponsableNestedInput
    usuario?: UsuarioUpdateOneWithoutHistorialModificacionesNestedInput
  }

  export type HistorialModificacionUncheckedUpdateWithoutPlatilloInput = {
    id?: IntFieldUpdateOperationsInput | number
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    responsableId?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HistorialModificacionUncheckedUpdateManyWithoutPlatilloInput = {
    id?: IntFieldUpdateOperationsInput | number
    campo?: StringFieldUpdateOperationsInput | string
    valorAnterior?: NullableStringFieldUpdateOperationsInput | string | null
    valorNuevo?: NullableStringFieldUpdateOperationsInput | string | null
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    accion?: StringFieldUpdateOperationsInput | string
    responsableId?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdenItemCreateManyOrdenInput = {
    id?: number
    nombre: string
    precio: number
    nota?: string | null
    tipo: string
    estado: string
    creadoEn?: Date | string
    asignadoEn?: Date | string | null
    finalizadoEn?: Date | string | null
    prioridad?: number | null
    chefId?: number | null
  }

  export type OrdenItemUpdateWithoutOrdenInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asignadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalizadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    chef?: UsuarioUpdateOneWithoutItemsAsignadosNestedInput
  }

  export type OrdenItemUncheckedUpdateWithoutOrdenInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asignadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalizadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    chefId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrdenItemUncheckedUpdateManyWithoutOrdenInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    precio?: FloatFieldUpdateOperationsInput | number
    nota?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    creadoEn?: DateTimeFieldUpdateOperationsInput | Date | string
    asignadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finalizadoEn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prioridad?: NullableIntFieldUpdateOperationsInput | number | null
    chefId?: NullableIntFieldUpdateOperationsInput | number | null
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