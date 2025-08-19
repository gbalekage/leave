
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
 * Model Utilisateurs
 * 
 */
export type Utilisateurs = $Result.DefaultSelection<Prisma.$UtilisateursPayload>
/**
 * Model Conge
 * 
 */
export type Conge = $Result.DefaultSelection<Prisma.$CongePayload>
/**
 * Model BalanceConge
 * 
 */
export type BalanceConge = $Result.DefaultSelection<Prisma.$BalanceCongePayload>
/**
 * Model HistoriqueConge
 * 
 */
export type HistoriqueConge = $Result.DefaultSelection<Prisma.$HistoriqueCongePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LeaveType: {
  ANNUEL: 'ANNUEL',
  EXCEPTIONNEL: 'EXCEPTIONNEL',
  MATERNITE: 'MATERNITE',
  PATERNITE: 'PATERNITE'
};

export type LeaveType = (typeof LeaveType)[keyof typeof LeaveType]


export const LeaveStatus: {
  EN_ATTENTE: 'EN_ATTENTE',
  APPROUVE: 'APPROUVE',
  REJETE: 'REJETE',
  ANNULE: 'ANNULE',
  REPOUSSE: 'REPOUSSE'
};

export type LeaveStatus = (typeof LeaveStatus)[keyof typeof LeaveStatus]


export const HistoryAction: {
  CREE: 'CREE',
  MODIFIE: 'MODIFIE',
  APPROUVE: 'APPROUVE',
  REJETE: 'REJETE',
  ANNULE: 'ANNULE',
  REPOUSSE: 'REPOUSSE'
};

export type HistoryAction = (typeof HistoryAction)[keyof typeof HistoryAction]


export const Role: {
  RH: 'RH',
  EMPLOYEE: 'EMPLOYEE'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Sexe: {
  MASCULIN: 'MASCULIN',
  FEMININ: 'FEMININ'
};

export type Sexe = (typeof Sexe)[keyof typeof Sexe]

}

export type LeaveType = $Enums.LeaveType

export const LeaveType: typeof $Enums.LeaveType

export type LeaveStatus = $Enums.LeaveStatus

export const LeaveStatus: typeof $Enums.LeaveStatus

export type HistoryAction = $Enums.HistoryAction

export const HistoryAction: typeof $Enums.HistoryAction

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Sexe = $Enums.Sexe

export const Sexe: typeof $Enums.Sexe

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Utilisateurs
 * const utilisateurs = await prisma.utilisateurs.findMany()
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
   * // Fetch zero or more Utilisateurs
   * const utilisateurs = await prisma.utilisateurs.findMany()
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
   * `prisma.utilisateurs`: Exposes CRUD operations for the **Utilisateurs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateurs.findMany()
    * ```
    */
  get utilisateurs(): Prisma.UtilisateursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conge`: Exposes CRUD operations for the **Conge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conges
    * const conges = await prisma.conge.findMany()
    * ```
    */
  get conge(): Prisma.CongeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balanceConge`: Exposes CRUD operations for the **BalanceConge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BalanceConges
    * const balanceConges = await prisma.balanceConge.findMany()
    * ```
    */
  get balanceConge(): Prisma.BalanceCongeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historiqueConge`: Exposes CRUD operations for the **HistoriqueConge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoriqueConges
    * const historiqueConges = await prisma.historiqueConge.findMany()
    * ```
    */
  get historiqueConge(): Prisma.HistoriqueCongeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
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
    Utilisateurs: 'Utilisateurs',
    Conge: 'Conge',
    BalanceConge: 'BalanceConge',
    HistoriqueConge: 'HistoriqueConge'
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
      modelProps: "utilisateurs" | "conge" | "balanceConge" | "historiqueConge"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Utilisateurs: {
        payload: Prisma.$UtilisateursPayload<ExtArgs>
        fields: Prisma.UtilisateursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>
          }
          findFirst: {
            args: Prisma.UtilisateursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>
          }
          findMany: {
            args: Prisma.UtilisateursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>[]
          }
          create: {
            args: Prisma.UtilisateursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>
          }
          createMany: {
            args: Prisma.UtilisateursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisateursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>[]
          }
          delete: {
            args: Prisma.UtilisateursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>
          }
          update: {
            args: Prisma.UtilisateursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisateursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>[]
          }
          upsert: {
            args: Prisma.UtilisateursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateursPayload>
          }
          aggregate: {
            args: Prisma.UtilisateursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateurs>
          }
          groupBy: {
            args: Prisma.UtilisateursGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateursGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateursCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateursCountAggregateOutputType> | number
          }
        }
      }
      Conge: {
        payload: Prisma.$CongePayload<ExtArgs>
        fields: Prisma.CongeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CongeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CongeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongePayload>
          }
          findFirst: {
            args: Prisma.CongeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CongeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongePayload>
          }
          findMany: {
            args: Prisma.CongeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongePayload>[]
          }
          create: {
            args: Prisma.CongeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongePayload>
          }
          createMany: {
            args: Prisma.CongeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CongeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongePayload>[]
          }
          delete: {
            args: Prisma.CongeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongePayload>
          }
          update: {
            args: Prisma.CongeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongePayload>
          }
          deleteMany: {
            args: Prisma.CongeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CongeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CongeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongePayload>[]
          }
          upsert: {
            args: Prisma.CongeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongePayload>
          }
          aggregate: {
            args: Prisma.CongeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConge>
          }
          groupBy: {
            args: Prisma.CongeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CongeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CongeCountArgs<ExtArgs>
            result: $Utils.Optional<CongeCountAggregateOutputType> | number
          }
        }
      }
      BalanceConge: {
        payload: Prisma.$BalanceCongePayload<ExtArgs>
        fields: Prisma.BalanceCongeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BalanceCongeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceCongePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BalanceCongeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceCongePayload>
          }
          findFirst: {
            args: Prisma.BalanceCongeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceCongePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BalanceCongeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceCongePayload>
          }
          findMany: {
            args: Prisma.BalanceCongeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceCongePayload>[]
          }
          create: {
            args: Prisma.BalanceCongeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceCongePayload>
          }
          createMany: {
            args: Prisma.BalanceCongeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BalanceCongeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceCongePayload>[]
          }
          delete: {
            args: Prisma.BalanceCongeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceCongePayload>
          }
          update: {
            args: Prisma.BalanceCongeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceCongePayload>
          }
          deleteMany: {
            args: Prisma.BalanceCongeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BalanceCongeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BalanceCongeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceCongePayload>[]
          }
          upsert: {
            args: Prisma.BalanceCongeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalanceCongePayload>
          }
          aggregate: {
            args: Prisma.BalanceCongeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalanceConge>
          }
          groupBy: {
            args: Prisma.BalanceCongeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalanceCongeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BalanceCongeCountArgs<ExtArgs>
            result: $Utils.Optional<BalanceCongeCountAggregateOutputType> | number
          }
        }
      }
      HistoriqueConge: {
        payload: Prisma.$HistoriqueCongePayload<ExtArgs>
        fields: Prisma.HistoriqueCongeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoriqueCongeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueCongePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoriqueCongeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueCongePayload>
          }
          findFirst: {
            args: Prisma.HistoriqueCongeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueCongePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoriqueCongeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueCongePayload>
          }
          findMany: {
            args: Prisma.HistoriqueCongeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueCongePayload>[]
          }
          create: {
            args: Prisma.HistoriqueCongeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueCongePayload>
          }
          createMany: {
            args: Prisma.HistoriqueCongeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoriqueCongeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueCongePayload>[]
          }
          delete: {
            args: Prisma.HistoriqueCongeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueCongePayload>
          }
          update: {
            args: Prisma.HistoriqueCongeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueCongePayload>
          }
          deleteMany: {
            args: Prisma.HistoriqueCongeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoriqueCongeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoriqueCongeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueCongePayload>[]
          }
          upsert: {
            args: Prisma.HistoriqueCongeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoriqueCongePayload>
          }
          aggregate: {
            args: Prisma.HistoriqueCongeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoriqueConge>
          }
          groupBy: {
            args: Prisma.HistoriqueCongeGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoriqueCongeGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoriqueCongeCountArgs<ExtArgs>
            result: $Utils.Optional<HistoriqueCongeCountAggregateOutputType> | number
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
    utilisateurs?: UtilisateursOmit
    conge?: CongeOmit
    balanceConge?: BalanceCongeOmit
    historiqueConge?: HistoriqueCongeOmit
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
   * Count Type UtilisateursCountOutputType
   */

  export type UtilisateursCountOutputType = {
    leaves: number
    balances: number
    reviews: number
    LeaveHistory: number
  }

  export type UtilisateursCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaves?: boolean | UtilisateursCountOutputTypeCountLeavesArgs
    balances?: boolean | UtilisateursCountOutputTypeCountBalancesArgs
    reviews?: boolean | UtilisateursCountOutputTypeCountReviewsArgs
    LeaveHistory?: boolean | UtilisateursCountOutputTypeCountLeaveHistoryArgs
  }

  // Custom InputTypes
  /**
   * UtilisateursCountOutputType without action
   */
  export type UtilisateursCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateursCountOutputType
     */
    select?: UtilisateursCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateursCountOutputType without action
   */
  export type UtilisateursCountOutputTypeCountLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CongeWhereInput
  }

  /**
   * UtilisateursCountOutputType without action
   */
  export type UtilisateursCountOutputTypeCountBalancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceCongeWhereInput
  }

  /**
   * UtilisateursCountOutputType without action
   */
  export type UtilisateursCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CongeWhereInput
  }

  /**
   * UtilisateursCountOutputType without action
   */
  export type UtilisateursCountOutputTypeCountLeaveHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriqueCongeWhereInput
  }


  /**
   * Count Type CongeCountOutputType
   */

  export type CongeCountOutputType = {
    history: number
  }

  export type CongeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | CongeCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * CongeCountOutputType without action
   */
  export type CongeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CongeCountOutputType
     */
    select?: CongeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CongeCountOutputType without action
   */
  export type CongeCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriqueCongeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Utilisateurs
   */

  export type AggregateUtilisateurs = {
    _count: UtilisateursCountAggregateOutputType | null
    _min: UtilisateursMinAggregateOutputType | null
    _max: UtilisateursMaxAggregateOutputType | null
  }

  export type UtilisateursMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    matricule: string | null
    password: string | null
    address: string | null
    phone: string | null
    dateNaissance: Date | null
    verificationCode: string | null
    verificationExpiration: Date | null
    resetToken: string | null
    resetTokenExpiration: Date | null
    isVerified: boolean | null
    lastLogin: Date | null
    role: $Enums.Role | null
    sexe: $Enums.Sexe | null
    createdAt: Date | null
  }

  export type UtilisateursMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    matricule: string | null
    password: string | null
    address: string | null
    phone: string | null
    dateNaissance: Date | null
    verificationCode: string | null
    verificationExpiration: Date | null
    resetToken: string | null
    resetTokenExpiration: Date | null
    isVerified: boolean | null
    lastLogin: Date | null
    role: $Enums.Role | null
    sexe: $Enums.Sexe | null
    createdAt: Date | null
  }

  export type UtilisateursCountAggregateOutputType = {
    id: number
    name: number
    email: number
    matricule: number
    password: number
    address: number
    phone: number
    dateNaissance: number
    verificationCode: number
    verificationExpiration: number
    resetToken: number
    resetTokenExpiration: number
    isVerified: number
    lastLogin: number
    role: number
    sexe: number
    createdAt: number
    _all: number
  }


  export type UtilisateursMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    matricule?: true
    password?: true
    address?: true
    phone?: true
    dateNaissance?: true
    verificationCode?: true
    verificationExpiration?: true
    resetToken?: true
    resetTokenExpiration?: true
    isVerified?: true
    lastLogin?: true
    role?: true
    sexe?: true
    createdAt?: true
  }

  export type UtilisateursMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    matricule?: true
    password?: true
    address?: true
    phone?: true
    dateNaissance?: true
    verificationCode?: true
    verificationExpiration?: true
    resetToken?: true
    resetTokenExpiration?: true
    isVerified?: true
    lastLogin?: true
    role?: true
    sexe?: true
    createdAt?: true
  }

  export type UtilisateursCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    matricule?: true
    password?: true
    address?: true
    phone?: true
    dateNaissance?: true
    verificationCode?: true
    verificationExpiration?: true
    resetToken?: true
    resetTokenExpiration?: true
    isVerified?: true
    lastLogin?: true
    role?: true
    sexe?: true
    createdAt?: true
    _all?: true
  }

  export type UtilisateursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to aggregate.
     */
    where?: UtilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateursOrderByWithRelationInput | UtilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateursMaxAggregateInputType
  }

  export type GetUtilisateursAggregateType<T extends UtilisateursAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateurs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateurs[P]>
      : GetScalarType<T[P], AggregateUtilisateurs[P]>
  }




  export type UtilisateursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateursWhereInput
    orderBy?: UtilisateursOrderByWithAggregationInput | UtilisateursOrderByWithAggregationInput[]
    by: UtilisateursScalarFieldEnum[] | UtilisateursScalarFieldEnum
    having?: UtilisateursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateursCountAggregateInputType | true
    _min?: UtilisateursMinAggregateInputType
    _max?: UtilisateursMaxAggregateInputType
  }

  export type UtilisateursGroupByOutputType = {
    id: string
    name: string
    email: string
    matricule: string
    password: string
    address: string
    phone: string
    dateNaissance: Date
    verificationCode: string | null
    verificationExpiration: Date | null
    resetToken: string | null
    resetTokenExpiration: Date | null
    isVerified: boolean
    lastLogin: Date
    role: $Enums.Role
    sexe: $Enums.Sexe | null
    createdAt: Date
    _count: UtilisateursCountAggregateOutputType | null
    _min: UtilisateursMinAggregateOutputType | null
    _max: UtilisateursMaxAggregateOutputType | null
  }

  type GetUtilisateursGroupByPayload<T extends UtilisateursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateursGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateursGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    matricule?: boolean
    password?: boolean
    address?: boolean
    phone?: boolean
    dateNaissance?: boolean
    verificationCode?: boolean
    verificationExpiration?: boolean
    resetToken?: boolean
    resetTokenExpiration?: boolean
    isVerified?: boolean
    lastLogin?: boolean
    role?: boolean
    sexe?: boolean
    createdAt?: boolean
    leaves?: boolean | Utilisateurs$leavesArgs<ExtArgs>
    balances?: boolean | Utilisateurs$balancesArgs<ExtArgs>
    reviews?: boolean | Utilisateurs$reviewsArgs<ExtArgs>
    LeaveHistory?: boolean | Utilisateurs$LeaveHistoryArgs<ExtArgs>
    _count?: boolean | UtilisateursCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateurs"]>

  export type UtilisateursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    matricule?: boolean
    password?: boolean
    address?: boolean
    phone?: boolean
    dateNaissance?: boolean
    verificationCode?: boolean
    verificationExpiration?: boolean
    resetToken?: boolean
    resetTokenExpiration?: boolean
    isVerified?: boolean
    lastLogin?: boolean
    role?: boolean
    sexe?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["utilisateurs"]>

  export type UtilisateursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    matricule?: boolean
    password?: boolean
    address?: boolean
    phone?: boolean
    dateNaissance?: boolean
    verificationCode?: boolean
    verificationExpiration?: boolean
    resetToken?: boolean
    resetTokenExpiration?: boolean
    isVerified?: boolean
    lastLogin?: boolean
    role?: boolean
    sexe?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["utilisateurs"]>

  export type UtilisateursSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    matricule?: boolean
    password?: boolean
    address?: boolean
    phone?: boolean
    dateNaissance?: boolean
    verificationCode?: boolean
    verificationExpiration?: boolean
    resetToken?: boolean
    resetTokenExpiration?: boolean
    isVerified?: boolean
    lastLogin?: boolean
    role?: boolean
    sexe?: boolean
    createdAt?: boolean
  }

  export type UtilisateursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "matricule" | "password" | "address" | "phone" | "dateNaissance" | "verificationCode" | "verificationExpiration" | "resetToken" | "resetTokenExpiration" | "isVerified" | "lastLogin" | "role" | "sexe" | "createdAt", ExtArgs["result"]["utilisateurs"]>
  export type UtilisateursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaves?: boolean | Utilisateurs$leavesArgs<ExtArgs>
    balances?: boolean | Utilisateurs$balancesArgs<ExtArgs>
    reviews?: boolean | Utilisateurs$reviewsArgs<ExtArgs>
    LeaveHistory?: boolean | Utilisateurs$LeaveHistoryArgs<ExtArgs>
    _count?: boolean | UtilisateursCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtilisateursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtilisateursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtilisateursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateurs"
    objects: {
      leaves: Prisma.$CongePayload<ExtArgs>[]
      balances: Prisma.$BalanceCongePayload<ExtArgs>[]
      reviews: Prisma.$CongePayload<ExtArgs>[]
      LeaveHistory: Prisma.$HistoriqueCongePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      matricule: string
      password: string
      address: string
      phone: string
      dateNaissance: Date
      verificationCode: string | null
      verificationExpiration: Date | null
      resetToken: string | null
      resetTokenExpiration: Date | null
      isVerified: boolean
      lastLogin: Date
      role: $Enums.Role
      sexe: $Enums.Sexe | null
      createdAt: Date
    }, ExtArgs["result"]["utilisateurs"]>
    composites: {}
  }

  type UtilisateursGetPayload<S extends boolean | null | undefined | UtilisateursDefaultArgs> = $Result.GetResult<Prisma.$UtilisateursPayload, S>

  type UtilisateursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateursCountAggregateInputType | true
    }

  export interface UtilisateursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateurs'], meta: { name: 'Utilisateurs' } }
    /**
     * Find zero or one Utilisateurs that matches the filter.
     * @param {UtilisateursFindUniqueArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateursFindUniqueArgs>(args: SelectSubset<T, UtilisateursFindUniqueArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateurs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateursFindUniqueOrThrowArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateursFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursFindFirstArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateursFindFirstArgs>(args?: SelectSubset<T, UtilisateursFindFirstArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateurs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursFindFirstOrThrowArgs} args - Arguments to find a Utilisateurs
     * @example
     * // Get one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateursFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateursFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateursWithIdOnly = await prisma.utilisateurs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateursFindManyArgs>(args?: SelectSubset<T, UtilisateursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateurs.
     * @param {UtilisateursCreateArgs} args - Arguments to create a Utilisateurs.
     * @example
     * // Create one Utilisateurs
     * const Utilisateurs = await prisma.utilisateurs.create({
     *   data: {
     *     // ... data to create a Utilisateurs
     *   }
     * })
     * 
     */
    create<T extends UtilisateursCreateArgs>(args: SelectSubset<T, UtilisateursCreateArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateursCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateursCreateManyArgs>(args?: SelectSubset<T, UtilisateursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {UtilisateursCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateursWithIdOnly = await prisma.utilisateurs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisateursCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisateursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateurs.
     * @param {UtilisateursDeleteArgs} args - Arguments to delete one Utilisateurs.
     * @example
     * // Delete one Utilisateurs
     * const Utilisateurs = await prisma.utilisateurs.delete({
     *   where: {
     *     // ... filter to delete one Utilisateurs
     *   }
     * })
     * 
     */
    delete<T extends UtilisateursDeleteArgs>(args: SelectSubset<T, UtilisateursDeleteArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateurs.
     * @param {UtilisateursUpdateArgs} args - Arguments to update one Utilisateurs.
     * @example
     * // Update one Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateursUpdateArgs>(args: SelectSubset<T, UtilisateursUpdateArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateursDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateurs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateursDeleteManyArgs>(args?: SelectSubset<T, UtilisateursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateursUpdateManyArgs>(args: SelectSubset<T, UtilisateursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {UtilisateursUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateursWithIdOnly = await prisma.utilisateurs.updateManyAndReturn({
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
    updateManyAndReturn<T extends UtilisateursUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisateursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateurs.
     * @param {UtilisateursUpsertArgs} args - Arguments to update or create a Utilisateurs.
     * @example
     * // Update or create a Utilisateurs
     * const utilisateurs = await prisma.utilisateurs.upsert({
     *   create: {
     *     // ... data to create a Utilisateurs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateurs we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateursUpsertArgs>(args: SelectSubset<T, UtilisateursUpsertArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateurs.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateursCountArgs>(
      args?: Subset<T, UtilisateursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisateursAggregateArgs>(args: Subset<T, UtilisateursAggregateArgs>): Prisma.PrismaPromise<GetUtilisateursAggregateType<T>>

    /**
     * Group by Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateursGroupByArgs} args - Group by arguments.
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
      T extends UtilisateursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateursGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilisateursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateurs model
   */
  readonly fields: UtilisateursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateurs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leaves<T extends Utilisateurs$leavesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateurs$leavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CongePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    balances<T extends Utilisateurs$balancesArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateurs$balancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceCongePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Utilisateurs$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateurs$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CongePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    LeaveHistory<T extends Utilisateurs$LeaveHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateurs$LeaveHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriqueCongePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Utilisateurs model
   */
  interface UtilisateursFieldRefs {
    readonly id: FieldRef<"Utilisateurs", 'String'>
    readonly name: FieldRef<"Utilisateurs", 'String'>
    readonly email: FieldRef<"Utilisateurs", 'String'>
    readonly matricule: FieldRef<"Utilisateurs", 'String'>
    readonly password: FieldRef<"Utilisateurs", 'String'>
    readonly address: FieldRef<"Utilisateurs", 'String'>
    readonly phone: FieldRef<"Utilisateurs", 'String'>
    readonly dateNaissance: FieldRef<"Utilisateurs", 'DateTime'>
    readonly verificationCode: FieldRef<"Utilisateurs", 'String'>
    readonly verificationExpiration: FieldRef<"Utilisateurs", 'DateTime'>
    readonly resetToken: FieldRef<"Utilisateurs", 'String'>
    readonly resetTokenExpiration: FieldRef<"Utilisateurs", 'DateTime'>
    readonly isVerified: FieldRef<"Utilisateurs", 'Boolean'>
    readonly lastLogin: FieldRef<"Utilisateurs", 'DateTime'>
    readonly role: FieldRef<"Utilisateurs", 'Role'>
    readonly sexe: FieldRef<"Utilisateurs", 'Sexe'>
    readonly createdAt: FieldRef<"Utilisateurs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateurs findUnique
   */
  export type UtilisateursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where: UtilisateursWhereUniqueInput
  }

  /**
   * Utilisateurs findUniqueOrThrow
   */
  export type UtilisateursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where: UtilisateursWhereUniqueInput
  }

  /**
   * Utilisateurs findFirst
   */
  export type UtilisateursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateursOrderByWithRelationInput | UtilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateursScalarFieldEnum | UtilisateursScalarFieldEnum[]
  }

  /**
   * Utilisateurs findFirstOrThrow
   */
  export type UtilisateursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateursOrderByWithRelationInput | UtilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateursScalarFieldEnum | UtilisateursScalarFieldEnum[]
  }

  /**
   * Utilisateurs findMany
   */
  export type UtilisateursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateursOrderByWithRelationInput | UtilisateursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateursScalarFieldEnum | UtilisateursScalarFieldEnum[]
  }

  /**
   * Utilisateurs create
   */
  export type UtilisateursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateurs.
     */
    data: XOR<UtilisateursCreateInput, UtilisateursUncheckedCreateInput>
  }

  /**
   * Utilisateurs createMany
   */
  export type UtilisateursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateursCreateManyInput | UtilisateursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateurs createManyAndReturn
   */
  export type UtilisateursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateursCreateManyInput | UtilisateursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateurs update
   */
  export type UtilisateursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateurs.
     */
    data: XOR<UtilisateursUpdateInput, UtilisateursUncheckedUpdateInput>
    /**
     * Choose, which Utilisateurs to update.
     */
    where: UtilisateursWhereUniqueInput
  }

  /**
   * Utilisateurs updateMany
   */
  export type UtilisateursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateursUpdateManyMutationInput, UtilisateursUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateursWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateurs updateManyAndReturn
   */
  export type UtilisateursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateursUpdateManyMutationInput, UtilisateursUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateursWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateurs upsert
   */
  export type UtilisateursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateurs to update in case it exists.
     */
    where: UtilisateursWhereUniqueInput
    /**
     * In case the Utilisateurs found by the `where` argument doesn't exist, create a new Utilisateurs with this data.
     */
    create: XOR<UtilisateursCreateInput, UtilisateursUncheckedCreateInput>
    /**
     * In case the Utilisateurs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateursUpdateInput, UtilisateursUncheckedUpdateInput>
  }

  /**
   * Utilisateurs delete
   */
  export type UtilisateursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    /**
     * Filter which Utilisateurs to delete.
     */
    where: UtilisateursWhereUniqueInput
  }

  /**
   * Utilisateurs deleteMany
   */
  export type UtilisateursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateursWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateurs.leaves
   */
  export type Utilisateurs$leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conge
     */
    select?: CongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conge
     */
    omit?: CongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongeInclude<ExtArgs> | null
    where?: CongeWhereInput
    orderBy?: CongeOrderByWithRelationInput | CongeOrderByWithRelationInput[]
    cursor?: CongeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CongeScalarFieldEnum | CongeScalarFieldEnum[]
  }

  /**
   * Utilisateurs.balances
   */
  export type Utilisateurs$balancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceConge
     */
    select?: BalanceCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceConge
     */
    omit?: BalanceCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceCongeInclude<ExtArgs> | null
    where?: BalanceCongeWhereInput
    orderBy?: BalanceCongeOrderByWithRelationInput | BalanceCongeOrderByWithRelationInput[]
    cursor?: BalanceCongeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BalanceCongeScalarFieldEnum | BalanceCongeScalarFieldEnum[]
  }

  /**
   * Utilisateurs.reviews
   */
  export type Utilisateurs$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conge
     */
    select?: CongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conge
     */
    omit?: CongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongeInclude<ExtArgs> | null
    where?: CongeWhereInput
    orderBy?: CongeOrderByWithRelationInput | CongeOrderByWithRelationInput[]
    cursor?: CongeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CongeScalarFieldEnum | CongeScalarFieldEnum[]
  }

  /**
   * Utilisateurs.LeaveHistory
   */
  export type Utilisateurs$LeaveHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueConge
     */
    select?: HistoriqueCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueConge
     */
    omit?: HistoriqueCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueCongeInclude<ExtArgs> | null
    where?: HistoriqueCongeWhereInput
    orderBy?: HistoriqueCongeOrderByWithRelationInput | HistoriqueCongeOrderByWithRelationInput[]
    cursor?: HistoriqueCongeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoriqueCongeScalarFieldEnum | HistoriqueCongeScalarFieldEnum[]
  }

  /**
   * Utilisateurs without action
   */
  export type UtilisateursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
  }


  /**
   * Model Conge
   */

  export type AggregateConge = {
    _count: CongeCountAggregateOutputType | null
    _avg: CongeAvgAggregateOutputType | null
    _sum: CongeSumAggregateOutputType | null
    _min: CongeMinAggregateOutputType | null
    _max: CongeMaxAggregateOutputType | null
  }

  export type CongeAvgAggregateOutputType = {
    duration: number | null
  }

  export type CongeSumAggregateOutputType = {
    duration: number | null
  }

  export type CongeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.LeaveType | null
    startDate: Date | null
    endDate: Date | null
    duration: number | null
    reason: string | null
    status: $Enums.LeaveStatus | null
    reviewedBy: string | null
    letterUrl: string | null
    comment: string | null
    documentUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CongeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.LeaveType | null
    startDate: Date | null
    endDate: Date | null
    duration: number | null
    reason: string | null
    status: $Enums.LeaveStatus | null
    reviewedBy: string | null
    letterUrl: string | null
    comment: string | null
    documentUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CongeCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    startDate: number
    endDate: number
    duration: number
    reason: number
    status: number
    reviewedBy: number
    letterUrl: number
    comment: number
    documentUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CongeAvgAggregateInputType = {
    duration?: true
  }

  export type CongeSumAggregateInputType = {
    duration?: true
  }

  export type CongeMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    startDate?: true
    endDate?: true
    duration?: true
    reason?: true
    status?: true
    reviewedBy?: true
    letterUrl?: true
    comment?: true
    documentUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CongeMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    startDate?: true
    endDate?: true
    duration?: true
    reason?: true
    status?: true
    reviewedBy?: true
    letterUrl?: true
    comment?: true
    documentUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CongeCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    startDate?: true
    endDate?: true
    duration?: true
    reason?: true
    status?: true
    reviewedBy?: true
    letterUrl?: true
    comment?: true
    documentUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CongeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conge to aggregate.
     */
    where?: CongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conges to fetch.
     */
    orderBy?: CongeOrderByWithRelationInput | CongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conges
    **/
    _count?: true | CongeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CongeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CongeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CongeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CongeMaxAggregateInputType
  }

  export type GetCongeAggregateType<T extends CongeAggregateArgs> = {
        [P in keyof T & keyof AggregateConge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConge[P]>
      : GetScalarType<T[P], AggregateConge[P]>
  }




  export type CongeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CongeWhereInput
    orderBy?: CongeOrderByWithAggregationInput | CongeOrderByWithAggregationInput[]
    by: CongeScalarFieldEnum[] | CongeScalarFieldEnum
    having?: CongeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CongeCountAggregateInputType | true
    _avg?: CongeAvgAggregateInputType
    _sum?: CongeSumAggregateInputType
    _min?: CongeMinAggregateInputType
    _max?: CongeMaxAggregateInputType
  }

  export type CongeGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.LeaveType
    startDate: Date
    endDate: Date
    duration: number
    reason: string
    status: $Enums.LeaveStatus
    reviewedBy: string | null
    letterUrl: string | null
    comment: string | null
    documentUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: CongeCountAggregateOutputType | null
    _avg: CongeAvgAggregateOutputType | null
    _sum: CongeSumAggregateOutputType | null
    _min: CongeMinAggregateOutputType | null
    _max: CongeMaxAggregateOutputType | null
  }

  type GetCongeGroupByPayload<T extends CongeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CongeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CongeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CongeGroupByOutputType[P]>
            : GetScalarType<T[P], CongeGroupByOutputType[P]>
        }
      >
    >


  export type CongeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    reason?: boolean
    status?: boolean
    reviewedBy?: boolean
    letterUrl?: boolean
    comment?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UtilisateursDefaultArgs<ExtArgs>
    reviewer?: boolean | Conge$reviewerArgs<ExtArgs>
    history?: boolean | Conge$historyArgs<ExtArgs>
    _count?: boolean | CongeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conge"]>

  export type CongeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    reason?: boolean
    status?: boolean
    reviewedBy?: boolean
    letterUrl?: boolean
    comment?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UtilisateursDefaultArgs<ExtArgs>
    reviewer?: boolean | Conge$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["conge"]>

  export type CongeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    reason?: boolean
    status?: boolean
    reviewedBy?: boolean
    letterUrl?: boolean
    comment?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UtilisateursDefaultArgs<ExtArgs>
    reviewer?: boolean | Conge$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["conge"]>

  export type CongeSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    duration?: boolean
    reason?: boolean
    status?: boolean
    reviewedBy?: boolean
    letterUrl?: boolean
    comment?: boolean
    documentUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CongeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "startDate" | "endDate" | "duration" | "reason" | "status" | "reviewedBy" | "letterUrl" | "comment" | "documentUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["conge"]>
  export type CongeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UtilisateursDefaultArgs<ExtArgs>
    reviewer?: boolean | Conge$reviewerArgs<ExtArgs>
    history?: boolean | Conge$historyArgs<ExtArgs>
    _count?: boolean | CongeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CongeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UtilisateursDefaultArgs<ExtArgs>
    reviewer?: boolean | Conge$reviewerArgs<ExtArgs>
  }
  export type CongeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UtilisateursDefaultArgs<ExtArgs>
    reviewer?: boolean | Conge$reviewerArgs<ExtArgs>
  }

  export type $CongePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conge"
    objects: {
      user: Prisma.$UtilisateursPayload<ExtArgs>
      reviewer: Prisma.$UtilisateursPayload<ExtArgs> | null
      history: Prisma.$HistoriqueCongePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.LeaveType
      startDate: Date
      endDate: Date
      duration: number
      reason: string
      status: $Enums.LeaveStatus
      reviewedBy: string | null
      letterUrl: string | null
      comment: string | null
      documentUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["conge"]>
    composites: {}
  }

  type CongeGetPayload<S extends boolean | null | undefined | CongeDefaultArgs> = $Result.GetResult<Prisma.$CongePayload, S>

  type CongeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CongeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CongeCountAggregateInputType | true
    }

  export interface CongeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conge'], meta: { name: 'Conge' } }
    /**
     * Find zero or one Conge that matches the filter.
     * @param {CongeFindUniqueArgs} args - Arguments to find a Conge
     * @example
     * // Get one Conge
     * const conge = await prisma.conge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CongeFindUniqueArgs>(args: SelectSubset<T, CongeFindUniqueArgs<ExtArgs>>): Prisma__CongeClient<$Result.GetResult<Prisma.$CongePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CongeFindUniqueOrThrowArgs} args - Arguments to find a Conge
     * @example
     * // Get one Conge
     * const conge = await prisma.conge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CongeFindUniqueOrThrowArgs>(args: SelectSubset<T, CongeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CongeClient<$Result.GetResult<Prisma.$CongePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongeFindFirstArgs} args - Arguments to find a Conge
     * @example
     * // Get one Conge
     * const conge = await prisma.conge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CongeFindFirstArgs>(args?: SelectSubset<T, CongeFindFirstArgs<ExtArgs>>): Prisma__CongeClient<$Result.GetResult<Prisma.$CongePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongeFindFirstOrThrowArgs} args - Arguments to find a Conge
     * @example
     * // Get one Conge
     * const conge = await prisma.conge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CongeFindFirstOrThrowArgs>(args?: SelectSubset<T, CongeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CongeClient<$Result.GetResult<Prisma.$CongePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conges
     * const conges = await prisma.conge.findMany()
     * 
     * // Get first 10 Conges
     * const conges = await prisma.conge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const congeWithIdOnly = await prisma.conge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CongeFindManyArgs>(args?: SelectSubset<T, CongeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CongePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conge.
     * @param {CongeCreateArgs} args - Arguments to create a Conge.
     * @example
     * // Create one Conge
     * const Conge = await prisma.conge.create({
     *   data: {
     *     // ... data to create a Conge
     *   }
     * })
     * 
     */
    create<T extends CongeCreateArgs>(args: SelectSubset<T, CongeCreateArgs<ExtArgs>>): Prisma__CongeClient<$Result.GetResult<Prisma.$CongePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conges.
     * @param {CongeCreateManyArgs} args - Arguments to create many Conges.
     * @example
     * // Create many Conges
     * const conge = await prisma.conge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CongeCreateManyArgs>(args?: SelectSubset<T, CongeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conges and returns the data saved in the database.
     * @param {CongeCreateManyAndReturnArgs} args - Arguments to create many Conges.
     * @example
     * // Create many Conges
     * const conge = await prisma.conge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conges and only return the `id`
     * const congeWithIdOnly = await prisma.conge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CongeCreateManyAndReturnArgs>(args?: SelectSubset<T, CongeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CongePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conge.
     * @param {CongeDeleteArgs} args - Arguments to delete one Conge.
     * @example
     * // Delete one Conge
     * const Conge = await prisma.conge.delete({
     *   where: {
     *     // ... filter to delete one Conge
     *   }
     * })
     * 
     */
    delete<T extends CongeDeleteArgs>(args: SelectSubset<T, CongeDeleteArgs<ExtArgs>>): Prisma__CongeClient<$Result.GetResult<Prisma.$CongePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conge.
     * @param {CongeUpdateArgs} args - Arguments to update one Conge.
     * @example
     * // Update one Conge
     * const conge = await prisma.conge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CongeUpdateArgs>(args: SelectSubset<T, CongeUpdateArgs<ExtArgs>>): Prisma__CongeClient<$Result.GetResult<Prisma.$CongePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conges.
     * @param {CongeDeleteManyArgs} args - Arguments to filter Conges to delete.
     * @example
     * // Delete a few Conges
     * const { count } = await prisma.conge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CongeDeleteManyArgs>(args?: SelectSubset<T, CongeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conges
     * const conge = await prisma.conge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CongeUpdateManyArgs>(args: SelectSubset<T, CongeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conges and returns the data updated in the database.
     * @param {CongeUpdateManyAndReturnArgs} args - Arguments to update many Conges.
     * @example
     * // Update many Conges
     * const conge = await prisma.conge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conges and only return the `id`
     * const congeWithIdOnly = await prisma.conge.updateManyAndReturn({
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
    updateManyAndReturn<T extends CongeUpdateManyAndReturnArgs>(args: SelectSubset<T, CongeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CongePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conge.
     * @param {CongeUpsertArgs} args - Arguments to update or create a Conge.
     * @example
     * // Update or create a Conge
     * const conge = await prisma.conge.upsert({
     *   create: {
     *     // ... data to create a Conge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conge we want to update
     *   }
     * })
     */
    upsert<T extends CongeUpsertArgs>(args: SelectSubset<T, CongeUpsertArgs<ExtArgs>>): Prisma__CongeClient<$Result.GetResult<Prisma.$CongePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongeCountArgs} args - Arguments to filter Conges to count.
     * @example
     * // Count the number of Conges
     * const count = await prisma.conge.count({
     *   where: {
     *     // ... the filter for the Conges we want to count
     *   }
     * })
    **/
    count<T extends CongeCountArgs>(
      args?: Subset<T, CongeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CongeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CongeAggregateArgs>(args: Subset<T, CongeAggregateArgs>): Prisma.PrismaPromise<GetCongeAggregateType<T>>

    /**
     * Group by Conge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongeGroupByArgs} args - Group by arguments.
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
      T extends CongeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CongeGroupByArgs['orderBy'] }
        : { orderBy?: CongeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CongeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCongeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conge model
   */
  readonly fields: CongeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CongeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UtilisateursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateursDefaultArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends Conge$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, Conge$reviewerArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    history<T extends Conge$historyArgs<ExtArgs> = {}>(args?: Subset<T, Conge$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriqueCongePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conge model
   */
  interface CongeFieldRefs {
    readonly id: FieldRef<"Conge", 'String'>
    readonly userId: FieldRef<"Conge", 'String'>
    readonly type: FieldRef<"Conge", 'LeaveType'>
    readonly startDate: FieldRef<"Conge", 'DateTime'>
    readonly endDate: FieldRef<"Conge", 'DateTime'>
    readonly duration: FieldRef<"Conge", 'Int'>
    readonly reason: FieldRef<"Conge", 'String'>
    readonly status: FieldRef<"Conge", 'LeaveStatus'>
    readonly reviewedBy: FieldRef<"Conge", 'String'>
    readonly letterUrl: FieldRef<"Conge", 'String'>
    readonly comment: FieldRef<"Conge", 'String'>
    readonly documentUrl: FieldRef<"Conge", 'String'>
    readonly createdAt: FieldRef<"Conge", 'DateTime'>
    readonly updatedAt: FieldRef<"Conge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Conge findUnique
   */
  export type CongeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conge
     */
    select?: CongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conge
     */
    omit?: CongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongeInclude<ExtArgs> | null
    /**
     * Filter, which Conge to fetch.
     */
    where: CongeWhereUniqueInput
  }

  /**
   * Conge findUniqueOrThrow
   */
  export type CongeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conge
     */
    select?: CongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conge
     */
    omit?: CongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongeInclude<ExtArgs> | null
    /**
     * Filter, which Conge to fetch.
     */
    where: CongeWhereUniqueInput
  }

  /**
   * Conge findFirst
   */
  export type CongeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conge
     */
    select?: CongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conge
     */
    omit?: CongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongeInclude<ExtArgs> | null
    /**
     * Filter, which Conge to fetch.
     */
    where?: CongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conges to fetch.
     */
    orderBy?: CongeOrderByWithRelationInput | CongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conges.
     */
    cursor?: CongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conges.
     */
    distinct?: CongeScalarFieldEnum | CongeScalarFieldEnum[]
  }

  /**
   * Conge findFirstOrThrow
   */
  export type CongeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conge
     */
    select?: CongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conge
     */
    omit?: CongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongeInclude<ExtArgs> | null
    /**
     * Filter, which Conge to fetch.
     */
    where?: CongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conges to fetch.
     */
    orderBy?: CongeOrderByWithRelationInput | CongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conges.
     */
    cursor?: CongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conges.
     */
    distinct?: CongeScalarFieldEnum | CongeScalarFieldEnum[]
  }

  /**
   * Conge findMany
   */
  export type CongeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conge
     */
    select?: CongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conge
     */
    omit?: CongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongeInclude<ExtArgs> | null
    /**
     * Filter, which Conges to fetch.
     */
    where?: CongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conges to fetch.
     */
    orderBy?: CongeOrderByWithRelationInput | CongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conges.
     */
    cursor?: CongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conges.
     */
    skip?: number
    distinct?: CongeScalarFieldEnum | CongeScalarFieldEnum[]
  }

  /**
   * Conge create
   */
  export type CongeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conge
     */
    select?: CongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conge
     */
    omit?: CongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongeInclude<ExtArgs> | null
    /**
     * The data needed to create a Conge.
     */
    data: XOR<CongeCreateInput, CongeUncheckedCreateInput>
  }

  /**
   * Conge createMany
   */
  export type CongeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conges.
     */
    data: CongeCreateManyInput | CongeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conge createManyAndReturn
   */
  export type CongeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conge
     */
    select?: CongeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conge
     */
    omit?: CongeOmit<ExtArgs> | null
    /**
     * The data used to create many Conges.
     */
    data: CongeCreateManyInput | CongeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conge update
   */
  export type CongeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conge
     */
    select?: CongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conge
     */
    omit?: CongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongeInclude<ExtArgs> | null
    /**
     * The data needed to update a Conge.
     */
    data: XOR<CongeUpdateInput, CongeUncheckedUpdateInput>
    /**
     * Choose, which Conge to update.
     */
    where: CongeWhereUniqueInput
  }

  /**
   * Conge updateMany
   */
  export type CongeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conges.
     */
    data: XOR<CongeUpdateManyMutationInput, CongeUncheckedUpdateManyInput>
    /**
     * Filter which Conges to update
     */
    where?: CongeWhereInput
    /**
     * Limit how many Conges to update.
     */
    limit?: number
  }

  /**
   * Conge updateManyAndReturn
   */
  export type CongeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conge
     */
    select?: CongeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conge
     */
    omit?: CongeOmit<ExtArgs> | null
    /**
     * The data used to update Conges.
     */
    data: XOR<CongeUpdateManyMutationInput, CongeUncheckedUpdateManyInput>
    /**
     * Filter which Conges to update
     */
    where?: CongeWhereInput
    /**
     * Limit how many Conges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Conge upsert
   */
  export type CongeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conge
     */
    select?: CongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conge
     */
    omit?: CongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongeInclude<ExtArgs> | null
    /**
     * The filter to search for the Conge to update in case it exists.
     */
    where: CongeWhereUniqueInput
    /**
     * In case the Conge found by the `where` argument doesn't exist, create a new Conge with this data.
     */
    create: XOR<CongeCreateInput, CongeUncheckedCreateInput>
    /**
     * In case the Conge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CongeUpdateInput, CongeUncheckedUpdateInput>
  }

  /**
   * Conge delete
   */
  export type CongeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conge
     */
    select?: CongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conge
     */
    omit?: CongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongeInclude<ExtArgs> | null
    /**
     * Filter which Conge to delete.
     */
    where: CongeWhereUniqueInput
  }

  /**
   * Conge deleteMany
   */
  export type CongeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conges to delete
     */
    where?: CongeWhereInput
    /**
     * Limit how many Conges to delete.
     */
    limit?: number
  }

  /**
   * Conge.reviewer
   */
  export type Conge$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateurs
     */
    select?: UtilisateursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateurs
     */
    omit?: UtilisateursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateursInclude<ExtArgs> | null
    where?: UtilisateursWhereInput
  }

  /**
   * Conge.history
   */
  export type Conge$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueConge
     */
    select?: HistoriqueCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueConge
     */
    omit?: HistoriqueCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueCongeInclude<ExtArgs> | null
    where?: HistoriqueCongeWhereInput
    orderBy?: HistoriqueCongeOrderByWithRelationInput | HistoriqueCongeOrderByWithRelationInput[]
    cursor?: HistoriqueCongeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoriqueCongeScalarFieldEnum | HistoriqueCongeScalarFieldEnum[]
  }

  /**
   * Conge without action
   */
  export type CongeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conge
     */
    select?: CongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conge
     */
    omit?: CongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongeInclude<ExtArgs> | null
  }


  /**
   * Model BalanceConge
   */

  export type AggregateBalanceConge = {
    _count: BalanceCongeCountAggregateOutputType | null
    _avg: BalanceCongeAvgAggregateOutputType | null
    _sum: BalanceCongeSumAggregateOutputType | null
    _min: BalanceCongeMinAggregateOutputType | null
    _max: BalanceCongeMaxAggregateOutputType | null
  }

  export type BalanceCongeAvgAggregateOutputType = {
    year: number | null
    total: number | null
    used: number | null
  }

  export type BalanceCongeSumAggregateOutputType = {
    year: number | null
    total: number | null
    used: number | null
  }

  export type BalanceCongeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.LeaveType | null
    year: number | null
    total: number | null
    used: number | null
  }

  export type BalanceCongeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.LeaveType | null
    year: number | null
    total: number | null
    used: number | null
  }

  export type BalanceCongeCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    year: number
    total: number
    used: number
    _all: number
  }


  export type BalanceCongeAvgAggregateInputType = {
    year?: true
    total?: true
    used?: true
  }

  export type BalanceCongeSumAggregateInputType = {
    year?: true
    total?: true
    used?: true
  }

  export type BalanceCongeMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    year?: true
    total?: true
    used?: true
  }

  export type BalanceCongeMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    year?: true
    total?: true
    used?: true
  }

  export type BalanceCongeCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    year?: true
    total?: true
    used?: true
    _all?: true
  }

  export type BalanceCongeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BalanceConge to aggregate.
     */
    where?: BalanceCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceConges to fetch.
     */
    orderBy?: BalanceCongeOrderByWithRelationInput | BalanceCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BalanceCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BalanceConges
    **/
    _count?: true | BalanceCongeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceCongeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceCongeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceCongeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceCongeMaxAggregateInputType
  }

  export type GetBalanceCongeAggregateType<T extends BalanceCongeAggregateArgs> = {
        [P in keyof T & keyof AggregateBalanceConge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalanceConge[P]>
      : GetScalarType<T[P], AggregateBalanceConge[P]>
  }




  export type BalanceCongeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceCongeWhereInput
    orderBy?: BalanceCongeOrderByWithAggregationInput | BalanceCongeOrderByWithAggregationInput[]
    by: BalanceCongeScalarFieldEnum[] | BalanceCongeScalarFieldEnum
    having?: BalanceCongeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceCongeCountAggregateInputType | true
    _avg?: BalanceCongeAvgAggregateInputType
    _sum?: BalanceCongeSumAggregateInputType
    _min?: BalanceCongeMinAggregateInputType
    _max?: BalanceCongeMaxAggregateInputType
  }

  export type BalanceCongeGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.LeaveType
    year: number
    total: number
    used: number
    _count: BalanceCongeCountAggregateOutputType | null
    _avg: BalanceCongeAvgAggregateOutputType | null
    _sum: BalanceCongeSumAggregateOutputType | null
    _min: BalanceCongeMinAggregateOutputType | null
    _max: BalanceCongeMaxAggregateOutputType | null
  }

  type GetBalanceCongeGroupByPayload<T extends BalanceCongeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceCongeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceCongeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceCongeGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceCongeGroupByOutputType[P]>
        }
      >
    >


  export type BalanceCongeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    year?: boolean
    total?: boolean
    used?: boolean
    user?: boolean | UtilisateursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balanceConge"]>

  export type BalanceCongeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    year?: boolean
    total?: boolean
    used?: boolean
    user?: boolean | UtilisateursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balanceConge"]>

  export type BalanceCongeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    year?: boolean
    total?: boolean
    used?: boolean
    user?: boolean | UtilisateursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balanceConge"]>

  export type BalanceCongeSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    year?: boolean
    total?: boolean
    used?: boolean
  }

  export type BalanceCongeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "year" | "total" | "used", ExtArgs["result"]["balanceConge"]>
  export type BalanceCongeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UtilisateursDefaultArgs<ExtArgs>
  }
  export type BalanceCongeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UtilisateursDefaultArgs<ExtArgs>
  }
  export type BalanceCongeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UtilisateursDefaultArgs<ExtArgs>
  }

  export type $BalanceCongePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BalanceConge"
    objects: {
      user: Prisma.$UtilisateursPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.LeaveType
      year: number
      total: number
      used: number
    }, ExtArgs["result"]["balanceConge"]>
    composites: {}
  }

  type BalanceCongeGetPayload<S extends boolean | null | undefined | BalanceCongeDefaultArgs> = $Result.GetResult<Prisma.$BalanceCongePayload, S>

  type BalanceCongeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BalanceCongeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BalanceCongeCountAggregateInputType | true
    }

  export interface BalanceCongeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BalanceConge'], meta: { name: 'BalanceConge' } }
    /**
     * Find zero or one BalanceConge that matches the filter.
     * @param {BalanceCongeFindUniqueArgs} args - Arguments to find a BalanceConge
     * @example
     * // Get one BalanceConge
     * const balanceConge = await prisma.balanceConge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BalanceCongeFindUniqueArgs>(args: SelectSubset<T, BalanceCongeFindUniqueArgs<ExtArgs>>): Prisma__BalanceCongeClient<$Result.GetResult<Prisma.$BalanceCongePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BalanceConge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BalanceCongeFindUniqueOrThrowArgs} args - Arguments to find a BalanceConge
     * @example
     * // Get one BalanceConge
     * const balanceConge = await prisma.balanceConge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BalanceCongeFindUniqueOrThrowArgs>(args: SelectSubset<T, BalanceCongeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BalanceCongeClient<$Result.GetResult<Prisma.$BalanceCongePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BalanceConge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCongeFindFirstArgs} args - Arguments to find a BalanceConge
     * @example
     * // Get one BalanceConge
     * const balanceConge = await prisma.balanceConge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BalanceCongeFindFirstArgs>(args?: SelectSubset<T, BalanceCongeFindFirstArgs<ExtArgs>>): Prisma__BalanceCongeClient<$Result.GetResult<Prisma.$BalanceCongePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BalanceConge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCongeFindFirstOrThrowArgs} args - Arguments to find a BalanceConge
     * @example
     * // Get one BalanceConge
     * const balanceConge = await prisma.balanceConge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BalanceCongeFindFirstOrThrowArgs>(args?: SelectSubset<T, BalanceCongeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BalanceCongeClient<$Result.GetResult<Prisma.$BalanceCongePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BalanceConges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCongeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BalanceConges
     * const balanceConges = await prisma.balanceConge.findMany()
     * 
     * // Get first 10 BalanceConges
     * const balanceConges = await prisma.balanceConge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceCongeWithIdOnly = await prisma.balanceConge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BalanceCongeFindManyArgs>(args?: SelectSubset<T, BalanceCongeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceCongePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BalanceConge.
     * @param {BalanceCongeCreateArgs} args - Arguments to create a BalanceConge.
     * @example
     * // Create one BalanceConge
     * const BalanceConge = await prisma.balanceConge.create({
     *   data: {
     *     // ... data to create a BalanceConge
     *   }
     * })
     * 
     */
    create<T extends BalanceCongeCreateArgs>(args: SelectSubset<T, BalanceCongeCreateArgs<ExtArgs>>): Prisma__BalanceCongeClient<$Result.GetResult<Prisma.$BalanceCongePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BalanceConges.
     * @param {BalanceCongeCreateManyArgs} args - Arguments to create many BalanceConges.
     * @example
     * // Create many BalanceConges
     * const balanceConge = await prisma.balanceConge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BalanceCongeCreateManyArgs>(args?: SelectSubset<T, BalanceCongeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BalanceConges and returns the data saved in the database.
     * @param {BalanceCongeCreateManyAndReturnArgs} args - Arguments to create many BalanceConges.
     * @example
     * // Create many BalanceConges
     * const balanceConge = await prisma.balanceConge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BalanceConges and only return the `id`
     * const balanceCongeWithIdOnly = await prisma.balanceConge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BalanceCongeCreateManyAndReturnArgs>(args?: SelectSubset<T, BalanceCongeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceCongePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BalanceConge.
     * @param {BalanceCongeDeleteArgs} args - Arguments to delete one BalanceConge.
     * @example
     * // Delete one BalanceConge
     * const BalanceConge = await prisma.balanceConge.delete({
     *   where: {
     *     // ... filter to delete one BalanceConge
     *   }
     * })
     * 
     */
    delete<T extends BalanceCongeDeleteArgs>(args: SelectSubset<T, BalanceCongeDeleteArgs<ExtArgs>>): Prisma__BalanceCongeClient<$Result.GetResult<Prisma.$BalanceCongePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BalanceConge.
     * @param {BalanceCongeUpdateArgs} args - Arguments to update one BalanceConge.
     * @example
     * // Update one BalanceConge
     * const balanceConge = await prisma.balanceConge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BalanceCongeUpdateArgs>(args: SelectSubset<T, BalanceCongeUpdateArgs<ExtArgs>>): Prisma__BalanceCongeClient<$Result.GetResult<Prisma.$BalanceCongePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BalanceConges.
     * @param {BalanceCongeDeleteManyArgs} args - Arguments to filter BalanceConges to delete.
     * @example
     * // Delete a few BalanceConges
     * const { count } = await prisma.balanceConge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BalanceCongeDeleteManyArgs>(args?: SelectSubset<T, BalanceCongeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BalanceConges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCongeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BalanceConges
     * const balanceConge = await prisma.balanceConge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BalanceCongeUpdateManyArgs>(args: SelectSubset<T, BalanceCongeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BalanceConges and returns the data updated in the database.
     * @param {BalanceCongeUpdateManyAndReturnArgs} args - Arguments to update many BalanceConges.
     * @example
     * // Update many BalanceConges
     * const balanceConge = await prisma.balanceConge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BalanceConges and only return the `id`
     * const balanceCongeWithIdOnly = await prisma.balanceConge.updateManyAndReturn({
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
    updateManyAndReturn<T extends BalanceCongeUpdateManyAndReturnArgs>(args: SelectSubset<T, BalanceCongeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalanceCongePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BalanceConge.
     * @param {BalanceCongeUpsertArgs} args - Arguments to update or create a BalanceConge.
     * @example
     * // Update or create a BalanceConge
     * const balanceConge = await prisma.balanceConge.upsert({
     *   create: {
     *     // ... data to create a BalanceConge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BalanceConge we want to update
     *   }
     * })
     */
    upsert<T extends BalanceCongeUpsertArgs>(args: SelectSubset<T, BalanceCongeUpsertArgs<ExtArgs>>): Prisma__BalanceCongeClient<$Result.GetResult<Prisma.$BalanceCongePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BalanceConges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCongeCountArgs} args - Arguments to filter BalanceConges to count.
     * @example
     * // Count the number of BalanceConges
     * const count = await prisma.balanceConge.count({
     *   where: {
     *     // ... the filter for the BalanceConges we want to count
     *   }
     * })
    **/
    count<T extends BalanceCongeCountArgs>(
      args?: Subset<T, BalanceCongeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceCongeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BalanceConge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCongeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BalanceCongeAggregateArgs>(args: Subset<T, BalanceCongeAggregateArgs>): Prisma.PrismaPromise<GetBalanceCongeAggregateType<T>>

    /**
     * Group by BalanceConge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCongeGroupByArgs} args - Group by arguments.
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
      T extends BalanceCongeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BalanceCongeGroupByArgs['orderBy'] }
        : { orderBy?: BalanceCongeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BalanceCongeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceCongeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BalanceConge model
   */
  readonly fields: BalanceCongeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BalanceConge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BalanceCongeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UtilisateursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateursDefaultArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BalanceConge model
   */
  interface BalanceCongeFieldRefs {
    readonly id: FieldRef<"BalanceConge", 'String'>
    readonly userId: FieldRef<"BalanceConge", 'String'>
    readonly type: FieldRef<"BalanceConge", 'LeaveType'>
    readonly year: FieldRef<"BalanceConge", 'Int'>
    readonly total: FieldRef<"BalanceConge", 'Int'>
    readonly used: FieldRef<"BalanceConge", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BalanceConge findUnique
   */
  export type BalanceCongeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceConge
     */
    select?: BalanceCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceConge
     */
    omit?: BalanceCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceCongeInclude<ExtArgs> | null
    /**
     * Filter, which BalanceConge to fetch.
     */
    where: BalanceCongeWhereUniqueInput
  }

  /**
   * BalanceConge findUniqueOrThrow
   */
  export type BalanceCongeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceConge
     */
    select?: BalanceCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceConge
     */
    omit?: BalanceCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceCongeInclude<ExtArgs> | null
    /**
     * Filter, which BalanceConge to fetch.
     */
    where: BalanceCongeWhereUniqueInput
  }

  /**
   * BalanceConge findFirst
   */
  export type BalanceCongeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceConge
     */
    select?: BalanceCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceConge
     */
    omit?: BalanceCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceCongeInclude<ExtArgs> | null
    /**
     * Filter, which BalanceConge to fetch.
     */
    where?: BalanceCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceConges to fetch.
     */
    orderBy?: BalanceCongeOrderByWithRelationInput | BalanceCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BalanceConges.
     */
    cursor?: BalanceCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BalanceConges.
     */
    distinct?: BalanceCongeScalarFieldEnum | BalanceCongeScalarFieldEnum[]
  }

  /**
   * BalanceConge findFirstOrThrow
   */
  export type BalanceCongeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceConge
     */
    select?: BalanceCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceConge
     */
    omit?: BalanceCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceCongeInclude<ExtArgs> | null
    /**
     * Filter, which BalanceConge to fetch.
     */
    where?: BalanceCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceConges to fetch.
     */
    orderBy?: BalanceCongeOrderByWithRelationInput | BalanceCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BalanceConges.
     */
    cursor?: BalanceCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BalanceConges.
     */
    distinct?: BalanceCongeScalarFieldEnum | BalanceCongeScalarFieldEnum[]
  }

  /**
   * BalanceConge findMany
   */
  export type BalanceCongeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceConge
     */
    select?: BalanceCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceConge
     */
    omit?: BalanceCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceCongeInclude<ExtArgs> | null
    /**
     * Filter, which BalanceConges to fetch.
     */
    where?: BalanceCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BalanceConges to fetch.
     */
    orderBy?: BalanceCongeOrderByWithRelationInput | BalanceCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BalanceConges.
     */
    cursor?: BalanceCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BalanceConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BalanceConges.
     */
    skip?: number
    distinct?: BalanceCongeScalarFieldEnum | BalanceCongeScalarFieldEnum[]
  }

  /**
   * BalanceConge create
   */
  export type BalanceCongeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceConge
     */
    select?: BalanceCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceConge
     */
    omit?: BalanceCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceCongeInclude<ExtArgs> | null
    /**
     * The data needed to create a BalanceConge.
     */
    data: XOR<BalanceCongeCreateInput, BalanceCongeUncheckedCreateInput>
  }

  /**
   * BalanceConge createMany
   */
  export type BalanceCongeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BalanceConges.
     */
    data: BalanceCongeCreateManyInput | BalanceCongeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BalanceConge createManyAndReturn
   */
  export type BalanceCongeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceConge
     */
    select?: BalanceCongeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceConge
     */
    omit?: BalanceCongeOmit<ExtArgs> | null
    /**
     * The data used to create many BalanceConges.
     */
    data: BalanceCongeCreateManyInput | BalanceCongeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceCongeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BalanceConge update
   */
  export type BalanceCongeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceConge
     */
    select?: BalanceCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceConge
     */
    omit?: BalanceCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceCongeInclude<ExtArgs> | null
    /**
     * The data needed to update a BalanceConge.
     */
    data: XOR<BalanceCongeUpdateInput, BalanceCongeUncheckedUpdateInput>
    /**
     * Choose, which BalanceConge to update.
     */
    where: BalanceCongeWhereUniqueInput
  }

  /**
   * BalanceConge updateMany
   */
  export type BalanceCongeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BalanceConges.
     */
    data: XOR<BalanceCongeUpdateManyMutationInput, BalanceCongeUncheckedUpdateManyInput>
    /**
     * Filter which BalanceConges to update
     */
    where?: BalanceCongeWhereInput
    /**
     * Limit how many BalanceConges to update.
     */
    limit?: number
  }

  /**
   * BalanceConge updateManyAndReturn
   */
  export type BalanceCongeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceConge
     */
    select?: BalanceCongeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceConge
     */
    omit?: BalanceCongeOmit<ExtArgs> | null
    /**
     * The data used to update BalanceConges.
     */
    data: XOR<BalanceCongeUpdateManyMutationInput, BalanceCongeUncheckedUpdateManyInput>
    /**
     * Filter which BalanceConges to update
     */
    where?: BalanceCongeWhereInput
    /**
     * Limit how many BalanceConges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceCongeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BalanceConge upsert
   */
  export type BalanceCongeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceConge
     */
    select?: BalanceCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceConge
     */
    omit?: BalanceCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceCongeInclude<ExtArgs> | null
    /**
     * The filter to search for the BalanceConge to update in case it exists.
     */
    where: BalanceCongeWhereUniqueInput
    /**
     * In case the BalanceConge found by the `where` argument doesn't exist, create a new BalanceConge with this data.
     */
    create: XOR<BalanceCongeCreateInput, BalanceCongeUncheckedCreateInput>
    /**
     * In case the BalanceConge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BalanceCongeUpdateInput, BalanceCongeUncheckedUpdateInput>
  }

  /**
   * BalanceConge delete
   */
  export type BalanceCongeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceConge
     */
    select?: BalanceCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceConge
     */
    omit?: BalanceCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceCongeInclude<ExtArgs> | null
    /**
     * Filter which BalanceConge to delete.
     */
    where: BalanceCongeWhereUniqueInput
  }

  /**
   * BalanceConge deleteMany
   */
  export type BalanceCongeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BalanceConges to delete
     */
    where?: BalanceCongeWhereInput
    /**
     * Limit how many BalanceConges to delete.
     */
    limit?: number
  }

  /**
   * BalanceConge without action
   */
  export type BalanceCongeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BalanceConge
     */
    select?: BalanceCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BalanceConge
     */
    omit?: BalanceCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceCongeInclude<ExtArgs> | null
  }


  /**
   * Model HistoriqueConge
   */

  export type AggregateHistoriqueConge = {
    _count: HistoriqueCongeCountAggregateOutputType | null
    _min: HistoriqueCongeMinAggregateOutputType | null
    _max: HistoriqueCongeMaxAggregateOutputType | null
  }

  export type HistoriqueCongeMinAggregateOutputType = {
    id: string | null
    leaveId: string | null
    action: $Enums.HistoryAction | null
    byUserId: string | null
    createdAt: Date | null
    note: string | null
  }

  export type HistoriqueCongeMaxAggregateOutputType = {
    id: string | null
    leaveId: string | null
    action: $Enums.HistoryAction | null
    byUserId: string | null
    createdAt: Date | null
    note: string | null
  }

  export type HistoriqueCongeCountAggregateOutputType = {
    id: number
    leaveId: number
    action: number
    byUserId: number
    createdAt: number
    note: number
    _all: number
  }


  export type HistoriqueCongeMinAggregateInputType = {
    id?: true
    leaveId?: true
    action?: true
    byUserId?: true
    createdAt?: true
    note?: true
  }

  export type HistoriqueCongeMaxAggregateInputType = {
    id?: true
    leaveId?: true
    action?: true
    byUserId?: true
    createdAt?: true
    note?: true
  }

  export type HistoriqueCongeCountAggregateInputType = {
    id?: true
    leaveId?: true
    action?: true
    byUserId?: true
    createdAt?: true
    note?: true
    _all?: true
  }

  export type HistoriqueCongeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoriqueConge to aggregate.
     */
    where?: HistoriqueCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriqueConges to fetch.
     */
    orderBy?: HistoriqueCongeOrderByWithRelationInput | HistoriqueCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoriqueCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriqueConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriqueConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoriqueConges
    **/
    _count?: true | HistoriqueCongeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoriqueCongeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoriqueCongeMaxAggregateInputType
  }

  export type GetHistoriqueCongeAggregateType<T extends HistoriqueCongeAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoriqueConge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoriqueConge[P]>
      : GetScalarType<T[P], AggregateHistoriqueConge[P]>
  }




  export type HistoriqueCongeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoriqueCongeWhereInput
    orderBy?: HistoriqueCongeOrderByWithAggregationInput | HistoriqueCongeOrderByWithAggregationInput[]
    by: HistoriqueCongeScalarFieldEnum[] | HistoriqueCongeScalarFieldEnum
    having?: HistoriqueCongeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoriqueCongeCountAggregateInputType | true
    _min?: HistoriqueCongeMinAggregateInputType
    _max?: HistoriqueCongeMaxAggregateInputType
  }

  export type HistoriqueCongeGroupByOutputType = {
    id: string
    leaveId: string
    action: $Enums.HistoryAction
    byUserId: string
    createdAt: Date
    note: string | null
    _count: HistoriqueCongeCountAggregateOutputType | null
    _min: HistoriqueCongeMinAggregateOutputType | null
    _max: HistoriqueCongeMaxAggregateOutputType | null
  }

  type GetHistoriqueCongeGroupByPayload<T extends HistoriqueCongeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoriqueCongeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoriqueCongeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoriqueCongeGroupByOutputType[P]>
            : GetScalarType<T[P], HistoriqueCongeGroupByOutputType[P]>
        }
      >
    >


  export type HistoriqueCongeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveId?: boolean
    action?: boolean
    byUserId?: boolean
    createdAt?: boolean
    note?: boolean
    leave?: boolean | CongeDefaultArgs<ExtArgs>
    byUser?: boolean | UtilisateursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiqueConge"]>

  export type HistoriqueCongeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveId?: boolean
    action?: boolean
    byUserId?: boolean
    createdAt?: boolean
    note?: boolean
    leave?: boolean | CongeDefaultArgs<ExtArgs>
    byUser?: boolean | UtilisateursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiqueConge"]>

  export type HistoriqueCongeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveId?: boolean
    action?: boolean
    byUserId?: boolean
    createdAt?: boolean
    note?: boolean
    leave?: boolean | CongeDefaultArgs<ExtArgs>
    byUser?: boolean | UtilisateursDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historiqueConge"]>

  export type HistoriqueCongeSelectScalar = {
    id?: boolean
    leaveId?: boolean
    action?: boolean
    byUserId?: boolean
    createdAt?: boolean
    note?: boolean
  }

  export type HistoriqueCongeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leaveId" | "action" | "byUserId" | "createdAt" | "note", ExtArgs["result"]["historiqueConge"]>
  export type HistoriqueCongeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave?: boolean | CongeDefaultArgs<ExtArgs>
    byUser?: boolean | UtilisateursDefaultArgs<ExtArgs>
  }
  export type HistoriqueCongeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave?: boolean | CongeDefaultArgs<ExtArgs>
    byUser?: boolean | UtilisateursDefaultArgs<ExtArgs>
  }
  export type HistoriqueCongeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leave?: boolean | CongeDefaultArgs<ExtArgs>
    byUser?: boolean | UtilisateursDefaultArgs<ExtArgs>
  }

  export type $HistoriqueCongePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoriqueConge"
    objects: {
      leave: Prisma.$CongePayload<ExtArgs>
      byUser: Prisma.$UtilisateursPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leaveId: string
      action: $Enums.HistoryAction
      byUserId: string
      createdAt: Date
      note: string | null
    }, ExtArgs["result"]["historiqueConge"]>
    composites: {}
  }

  type HistoriqueCongeGetPayload<S extends boolean | null | undefined | HistoriqueCongeDefaultArgs> = $Result.GetResult<Prisma.$HistoriqueCongePayload, S>

  type HistoriqueCongeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoriqueCongeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoriqueCongeCountAggregateInputType | true
    }

  export interface HistoriqueCongeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoriqueConge'], meta: { name: 'HistoriqueConge' } }
    /**
     * Find zero or one HistoriqueConge that matches the filter.
     * @param {HistoriqueCongeFindUniqueArgs} args - Arguments to find a HistoriqueConge
     * @example
     * // Get one HistoriqueConge
     * const historiqueConge = await prisma.historiqueConge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoriqueCongeFindUniqueArgs>(args: SelectSubset<T, HistoriqueCongeFindUniqueArgs<ExtArgs>>): Prisma__HistoriqueCongeClient<$Result.GetResult<Prisma.$HistoriqueCongePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HistoriqueConge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoriqueCongeFindUniqueOrThrowArgs} args - Arguments to find a HistoriqueConge
     * @example
     * // Get one HistoriqueConge
     * const historiqueConge = await prisma.historiqueConge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoriqueCongeFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoriqueCongeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoriqueCongeClient<$Result.GetResult<Prisma.$HistoriqueCongePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoriqueConge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueCongeFindFirstArgs} args - Arguments to find a HistoriqueConge
     * @example
     * // Get one HistoriqueConge
     * const historiqueConge = await prisma.historiqueConge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoriqueCongeFindFirstArgs>(args?: SelectSubset<T, HistoriqueCongeFindFirstArgs<ExtArgs>>): Prisma__HistoriqueCongeClient<$Result.GetResult<Prisma.$HistoriqueCongePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HistoriqueConge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueCongeFindFirstOrThrowArgs} args - Arguments to find a HistoriqueConge
     * @example
     * // Get one HistoriqueConge
     * const historiqueConge = await prisma.historiqueConge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoriqueCongeFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoriqueCongeFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoriqueCongeClient<$Result.GetResult<Prisma.$HistoriqueCongePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HistoriqueConges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueCongeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoriqueConges
     * const historiqueConges = await prisma.historiqueConge.findMany()
     * 
     * // Get first 10 HistoriqueConges
     * const historiqueConges = await prisma.historiqueConge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historiqueCongeWithIdOnly = await prisma.historiqueConge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoriqueCongeFindManyArgs>(args?: SelectSubset<T, HistoriqueCongeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriqueCongePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HistoriqueConge.
     * @param {HistoriqueCongeCreateArgs} args - Arguments to create a HistoriqueConge.
     * @example
     * // Create one HistoriqueConge
     * const HistoriqueConge = await prisma.historiqueConge.create({
     *   data: {
     *     // ... data to create a HistoriqueConge
     *   }
     * })
     * 
     */
    create<T extends HistoriqueCongeCreateArgs>(args: SelectSubset<T, HistoriqueCongeCreateArgs<ExtArgs>>): Prisma__HistoriqueCongeClient<$Result.GetResult<Prisma.$HistoriqueCongePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HistoriqueConges.
     * @param {HistoriqueCongeCreateManyArgs} args - Arguments to create many HistoriqueConges.
     * @example
     * // Create many HistoriqueConges
     * const historiqueConge = await prisma.historiqueConge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoriqueCongeCreateManyArgs>(args?: SelectSubset<T, HistoriqueCongeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HistoriqueConges and returns the data saved in the database.
     * @param {HistoriqueCongeCreateManyAndReturnArgs} args - Arguments to create many HistoriqueConges.
     * @example
     * // Create many HistoriqueConges
     * const historiqueConge = await prisma.historiqueConge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HistoriqueConges and only return the `id`
     * const historiqueCongeWithIdOnly = await prisma.historiqueConge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoriqueCongeCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoriqueCongeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriqueCongePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HistoriqueConge.
     * @param {HistoriqueCongeDeleteArgs} args - Arguments to delete one HistoriqueConge.
     * @example
     * // Delete one HistoriqueConge
     * const HistoriqueConge = await prisma.historiqueConge.delete({
     *   where: {
     *     // ... filter to delete one HistoriqueConge
     *   }
     * })
     * 
     */
    delete<T extends HistoriqueCongeDeleteArgs>(args: SelectSubset<T, HistoriqueCongeDeleteArgs<ExtArgs>>): Prisma__HistoriqueCongeClient<$Result.GetResult<Prisma.$HistoriqueCongePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HistoriqueConge.
     * @param {HistoriqueCongeUpdateArgs} args - Arguments to update one HistoriqueConge.
     * @example
     * // Update one HistoriqueConge
     * const historiqueConge = await prisma.historiqueConge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoriqueCongeUpdateArgs>(args: SelectSubset<T, HistoriqueCongeUpdateArgs<ExtArgs>>): Prisma__HistoriqueCongeClient<$Result.GetResult<Prisma.$HistoriqueCongePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HistoriqueConges.
     * @param {HistoriqueCongeDeleteManyArgs} args - Arguments to filter HistoriqueConges to delete.
     * @example
     * // Delete a few HistoriqueConges
     * const { count } = await prisma.historiqueConge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoriqueCongeDeleteManyArgs>(args?: SelectSubset<T, HistoriqueCongeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoriqueConges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueCongeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoriqueConges
     * const historiqueConge = await prisma.historiqueConge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoriqueCongeUpdateManyArgs>(args: SelectSubset<T, HistoriqueCongeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoriqueConges and returns the data updated in the database.
     * @param {HistoriqueCongeUpdateManyAndReturnArgs} args - Arguments to update many HistoriqueConges.
     * @example
     * // Update many HistoriqueConges
     * const historiqueConge = await prisma.historiqueConge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HistoriqueConges and only return the `id`
     * const historiqueCongeWithIdOnly = await prisma.historiqueConge.updateManyAndReturn({
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
    updateManyAndReturn<T extends HistoriqueCongeUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoriqueCongeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoriqueCongePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HistoriqueConge.
     * @param {HistoriqueCongeUpsertArgs} args - Arguments to update or create a HistoriqueConge.
     * @example
     * // Update or create a HistoriqueConge
     * const historiqueConge = await prisma.historiqueConge.upsert({
     *   create: {
     *     // ... data to create a HistoriqueConge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoriqueConge we want to update
     *   }
     * })
     */
    upsert<T extends HistoriqueCongeUpsertArgs>(args: SelectSubset<T, HistoriqueCongeUpsertArgs<ExtArgs>>): Prisma__HistoriqueCongeClient<$Result.GetResult<Prisma.$HistoriqueCongePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HistoriqueConges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueCongeCountArgs} args - Arguments to filter HistoriqueConges to count.
     * @example
     * // Count the number of HistoriqueConges
     * const count = await prisma.historiqueConge.count({
     *   where: {
     *     // ... the filter for the HistoriqueConges we want to count
     *   }
     * })
    **/
    count<T extends HistoriqueCongeCountArgs>(
      args?: Subset<T, HistoriqueCongeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoriqueCongeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoriqueConge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueCongeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoriqueCongeAggregateArgs>(args: Subset<T, HistoriqueCongeAggregateArgs>): Prisma.PrismaPromise<GetHistoriqueCongeAggregateType<T>>

    /**
     * Group by HistoriqueConge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoriqueCongeGroupByArgs} args - Group by arguments.
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
      T extends HistoriqueCongeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoriqueCongeGroupByArgs['orderBy'] }
        : { orderBy?: HistoriqueCongeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoriqueCongeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoriqueCongeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoriqueConge model
   */
  readonly fields: HistoriqueCongeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoriqueConge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoriqueCongeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    leave<T extends CongeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CongeDefaultArgs<ExtArgs>>): Prisma__CongeClient<$Result.GetResult<Prisma.$CongePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    byUser<T extends UtilisateursDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateursDefaultArgs<ExtArgs>>): Prisma__UtilisateursClient<$Result.GetResult<Prisma.$UtilisateursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the HistoriqueConge model
   */
  interface HistoriqueCongeFieldRefs {
    readonly id: FieldRef<"HistoriqueConge", 'String'>
    readonly leaveId: FieldRef<"HistoriqueConge", 'String'>
    readonly action: FieldRef<"HistoriqueConge", 'HistoryAction'>
    readonly byUserId: FieldRef<"HistoriqueConge", 'String'>
    readonly createdAt: FieldRef<"HistoriqueConge", 'DateTime'>
    readonly note: FieldRef<"HistoriqueConge", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HistoriqueConge findUnique
   */
  export type HistoriqueCongeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueConge
     */
    select?: HistoriqueCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueConge
     */
    omit?: HistoriqueCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueCongeInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueConge to fetch.
     */
    where: HistoriqueCongeWhereUniqueInput
  }

  /**
   * HistoriqueConge findUniqueOrThrow
   */
  export type HistoriqueCongeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueConge
     */
    select?: HistoriqueCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueConge
     */
    omit?: HistoriqueCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueCongeInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueConge to fetch.
     */
    where: HistoriqueCongeWhereUniqueInput
  }

  /**
   * HistoriqueConge findFirst
   */
  export type HistoriqueCongeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueConge
     */
    select?: HistoriqueCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueConge
     */
    omit?: HistoriqueCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueCongeInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueConge to fetch.
     */
    where?: HistoriqueCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriqueConges to fetch.
     */
    orderBy?: HistoriqueCongeOrderByWithRelationInput | HistoriqueCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoriqueConges.
     */
    cursor?: HistoriqueCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriqueConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriqueConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriqueConges.
     */
    distinct?: HistoriqueCongeScalarFieldEnum | HistoriqueCongeScalarFieldEnum[]
  }

  /**
   * HistoriqueConge findFirstOrThrow
   */
  export type HistoriqueCongeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueConge
     */
    select?: HistoriqueCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueConge
     */
    omit?: HistoriqueCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueCongeInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueConge to fetch.
     */
    where?: HistoriqueCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriqueConges to fetch.
     */
    orderBy?: HistoriqueCongeOrderByWithRelationInput | HistoriqueCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoriqueConges.
     */
    cursor?: HistoriqueCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriqueConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriqueConges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoriqueConges.
     */
    distinct?: HistoriqueCongeScalarFieldEnum | HistoriqueCongeScalarFieldEnum[]
  }

  /**
   * HistoriqueConge findMany
   */
  export type HistoriqueCongeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueConge
     */
    select?: HistoriqueCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueConge
     */
    omit?: HistoriqueCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueCongeInclude<ExtArgs> | null
    /**
     * Filter, which HistoriqueConges to fetch.
     */
    where?: HistoriqueCongeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoriqueConges to fetch.
     */
    orderBy?: HistoriqueCongeOrderByWithRelationInput | HistoriqueCongeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoriqueConges.
     */
    cursor?: HistoriqueCongeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoriqueConges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoriqueConges.
     */
    skip?: number
    distinct?: HistoriqueCongeScalarFieldEnum | HistoriqueCongeScalarFieldEnum[]
  }

  /**
   * HistoriqueConge create
   */
  export type HistoriqueCongeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueConge
     */
    select?: HistoriqueCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueConge
     */
    omit?: HistoriqueCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueCongeInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoriqueConge.
     */
    data: XOR<HistoriqueCongeCreateInput, HistoriqueCongeUncheckedCreateInput>
  }

  /**
   * HistoriqueConge createMany
   */
  export type HistoriqueCongeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoriqueConges.
     */
    data: HistoriqueCongeCreateManyInput | HistoriqueCongeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HistoriqueConge createManyAndReturn
   */
  export type HistoriqueCongeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueConge
     */
    select?: HistoriqueCongeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueConge
     */
    omit?: HistoriqueCongeOmit<ExtArgs> | null
    /**
     * The data used to create many HistoriqueConges.
     */
    data: HistoriqueCongeCreateManyInput | HistoriqueCongeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueCongeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoriqueConge update
   */
  export type HistoriqueCongeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueConge
     */
    select?: HistoriqueCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueConge
     */
    omit?: HistoriqueCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueCongeInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoriqueConge.
     */
    data: XOR<HistoriqueCongeUpdateInput, HistoriqueCongeUncheckedUpdateInput>
    /**
     * Choose, which HistoriqueConge to update.
     */
    where: HistoriqueCongeWhereUniqueInput
  }

  /**
   * HistoriqueConge updateMany
   */
  export type HistoriqueCongeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoriqueConges.
     */
    data: XOR<HistoriqueCongeUpdateManyMutationInput, HistoriqueCongeUncheckedUpdateManyInput>
    /**
     * Filter which HistoriqueConges to update
     */
    where?: HistoriqueCongeWhereInput
    /**
     * Limit how many HistoriqueConges to update.
     */
    limit?: number
  }

  /**
   * HistoriqueConge updateManyAndReturn
   */
  export type HistoriqueCongeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueConge
     */
    select?: HistoriqueCongeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueConge
     */
    omit?: HistoriqueCongeOmit<ExtArgs> | null
    /**
     * The data used to update HistoriqueConges.
     */
    data: XOR<HistoriqueCongeUpdateManyMutationInput, HistoriqueCongeUncheckedUpdateManyInput>
    /**
     * Filter which HistoriqueConges to update
     */
    where?: HistoriqueCongeWhereInput
    /**
     * Limit how many HistoriqueConges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueCongeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HistoriqueConge upsert
   */
  export type HistoriqueCongeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueConge
     */
    select?: HistoriqueCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueConge
     */
    omit?: HistoriqueCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueCongeInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoriqueConge to update in case it exists.
     */
    where: HistoriqueCongeWhereUniqueInput
    /**
     * In case the HistoriqueConge found by the `where` argument doesn't exist, create a new HistoriqueConge with this data.
     */
    create: XOR<HistoriqueCongeCreateInput, HistoriqueCongeUncheckedCreateInput>
    /**
     * In case the HistoriqueConge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoriqueCongeUpdateInput, HistoriqueCongeUncheckedUpdateInput>
  }

  /**
   * HistoriqueConge delete
   */
  export type HistoriqueCongeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueConge
     */
    select?: HistoriqueCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueConge
     */
    omit?: HistoriqueCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueCongeInclude<ExtArgs> | null
    /**
     * Filter which HistoriqueConge to delete.
     */
    where: HistoriqueCongeWhereUniqueInput
  }

  /**
   * HistoriqueConge deleteMany
   */
  export type HistoriqueCongeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoriqueConges to delete
     */
    where?: HistoriqueCongeWhereInput
    /**
     * Limit how many HistoriqueConges to delete.
     */
    limit?: number
  }

  /**
   * HistoriqueConge without action
   */
  export type HistoriqueCongeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoriqueConge
     */
    select?: HistoriqueCongeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HistoriqueConge
     */
    omit?: HistoriqueCongeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoriqueCongeInclude<ExtArgs> | null
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


  export const UtilisateursScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    matricule: 'matricule',
    password: 'password',
    address: 'address',
    phone: 'phone',
    dateNaissance: 'dateNaissance',
    verificationCode: 'verificationCode',
    verificationExpiration: 'verificationExpiration',
    resetToken: 'resetToken',
    resetTokenExpiration: 'resetTokenExpiration',
    isVerified: 'isVerified',
    lastLogin: 'lastLogin',
    role: 'role',
    sexe: 'sexe',
    createdAt: 'createdAt'
  };

  export type UtilisateursScalarFieldEnum = (typeof UtilisateursScalarFieldEnum)[keyof typeof UtilisateursScalarFieldEnum]


  export const CongeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    startDate: 'startDate',
    endDate: 'endDate',
    duration: 'duration',
    reason: 'reason',
    status: 'status',
    reviewedBy: 'reviewedBy',
    letterUrl: 'letterUrl',
    comment: 'comment',
    documentUrl: 'documentUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CongeScalarFieldEnum = (typeof CongeScalarFieldEnum)[keyof typeof CongeScalarFieldEnum]


  export const BalanceCongeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    year: 'year',
    total: 'total',
    used: 'used'
  };

  export type BalanceCongeScalarFieldEnum = (typeof BalanceCongeScalarFieldEnum)[keyof typeof BalanceCongeScalarFieldEnum]


  export const HistoriqueCongeScalarFieldEnum: {
    id: 'id',
    leaveId: 'leaveId',
    action: 'action',
    byUserId: 'byUserId',
    createdAt: 'createdAt',
    note: 'note'
  };

  export type HistoriqueCongeScalarFieldEnum = (typeof HistoriqueCongeScalarFieldEnum)[keyof typeof HistoriqueCongeScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Sexe'
   */
  export type EnumSexeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexe'>
    


  /**
   * Reference to a field of type 'Sexe[]'
   */
  export type ListEnumSexeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sexe[]'>
    


  /**
   * Reference to a field of type 'LeaveType'
   */
  export type EnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType'>
    


  /**
   * Reference to a field of type 'LeaveType[]'
   */
  export type ListEnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'LeaveStatus'
   */
  export type EnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus'>
    


  /**
   * Reference to a field of type 'LeaveStatus[]'
   */
  export type ListEnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus[]'>
    


  /**
   * Reference to a field of type 'HistoryAction'
   */
  export type EnumHistoryActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HistoryAction'>
    


  /**
   * Reference to a field of type 'HistoryAction[]'
   */
  export type ListEnumHistoryActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HistoryAction[]'>
    


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


  export type UtilisateursWhereInput = {
    AND?: UtilisateursWhereInput | UtilisateursWhereInput[]
    OR?: UtilisateursWhereInput[]
    NOT?: UtilisateursWhereInput | UtilisateursWhereInput[]
    id?: UuidFilter<"Utilisateurs"> | string
    name?: StringFilter<"Utilisateurs"> | string
    email?: StringFilter<"Utilisateurs"> | string
    matricule?: StringFilter<"Utilisateurs"> | string
    password?: StringFilter<"Utilisateurs"> | string
    address?: StringFilter<"Utilisateurs"> | string
    phone?: StringFilter<"Utilisateurs"> | string
    dateNaissance?: DateTimeFilter<"Utilisateurs"> | Date | string
    verificationCode?: StringNullableFilter<"Utilisateurs"> | string | null
    verificationExpiration?: DateTimeNullableFilter<"Utilisateurs"> | Date | string | null
    resetToken?: StringNullableFilter<"Utilisateurs"> | string | null
    resetTokenExpiration?: DateTimeNullableFilter<"Utilisateurs"> | Date | string | null
    isVerified?: BoolFilter<"Utilisateurs"> | boolean
    lastLogin?: DateTimeFilter<"Utilisateurs"> | Date | string
    role?: EnumRoleFilter<"Utilisateurs"> | $Enums.Role
    sexe?: EnumSexeNullableFilter<"Utilisateurs"> | $Enums.Sexe | null
    createdAt?: DateTimeFilter<"Utilisateurs"> | Date | string
    leaves?: CongeListRelationFilter
    balances?: BalanceCongeListRelationFilter
    reviews?: CongeListRelationFilter
    LeaveHistory?: HistoriqueCongeListRelationFilter
  }

  export type UtilisateursOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    matricule?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    dateNaissance?: SortOrder
    verificationCode?: SortOrderInput | SortOrder
    verificationExpiration?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiration?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
    sexe?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    leaves?: CongeOrderByRelationAggregateInput
    balances?: BalanceCongeOrderByRelationAggregateInput
    reviews?: CongeOrderByRelationAggregateInput
    LeaveHistory?: HistoriqueCongeOrderByRelationAggregateInput
  }

  export type UtilisateursWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    matricule?: string
    AND?: UtilisateursWhereInput | UtilisateursWhereInput[]
    OR?: UtilisateursWhereInput[]
    NOT?: UtilisateursWhereInput | UtilisateursWhereInput[]
    name?: StringFilter<"Utilisateurs"> | string
    password?: StringFilter<"Utilisateurs"> | string
    address?: StringFilter<"Utilisateurs"> | string
    phone?: StringFilter<"Utilisateurs"> | string
    dateNaissance?: DateTimeFilter<"Utilisateurs"> | Date | string
    verificationCode?: StringNullableFilter<"Utilisateurs"> | string | null
    verificationExpiration?: DateTimeNullableFilter<"Utilisateurs"> | Date | string | null
    resetToken?: StringNullableFilter<"Utilisateurs"> | string | null
    resetTokenExpiration?: DateTimeNullableFilter<"Utilisateurs"> | Date | string | null
    isVerified?: BoolFilter<"Utilisateurs"> | boolean
    lastLogin?: DateTimeFilter<"Utilisateurs"> | Date | string
    role?: EnumRoleFilter<"Utilisateurs"> | $Enums.Role
    sexe?: EnumSexeNullableFilter<"Utilisateurs"> | $Enums.Sexe | null
    createdAt?: DateTimeFilter<"Utilisateurs"> | Date | string
    leaves?: CongeListRelationFilter
    balances?: BalanceCongeListRelationFilter
    reviews?: CongeListRelationFilter
    LeaveHistory?: HistoriqueCongeListRelationFilter
  }, "id" | "email" | "matricule">

  export type UtilisateursOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    matricule?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    dateNaissance?: SortOrder
    verificationCode?: SortOrderInput | SortOrder
    verificationExpiration?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiration?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
    sexe?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UtilisateursCountOrderByAggregateInput
    _max?: UtilisateursMaxOrderByAggregateInput
    _min?: UtilisateursMinOrderByAggregateInput
  }

  export type UtilisateursScalarWhereWithAggregatesInput = {
    AND?: UtilisateursScalarWhereWithAggregatesInput | UtilisateursScalarWhereWithAggregatesInput[]
    OR?: UtilisateursScalarWhereWithAggregatesInput[]
    NOT?: UtilisateursScalarWhereWithAggregatesInput | UtilisateursScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Utilisateurs"> | string
    name?: StringWithAggregatesFilter<"Utilisateurs"> | string
    email?: StringWithAggregatesFilter<"Utilisateurs"> | string
    matricule?: StringWithAggregatesFilter<"Utilisateurs"> | string
    password?: StringWithAggregatesFilter<"Utilisateurs"> | string
    address?: StringWithAggregatesFilter<"Utilisateurs"> | string
    phone?: StringWithAggregatesFilter<"Utilisateurs"> | string
    dateNaissance?: DateTimeWithAggregatesFilter<"Utilisateurs"> | Date | string
    verificationCode?: StringNullableWithAggregatesFilter<"Utilisateurs"> | string | null
    verificationExpiration?: DateTimeNullableWithAggregatesFilter<"Utilisateurs"> | Date | string | null
    resetToken?: StringNullableWithAggregatesFilter<"Utilisateurs"> | string | null
    resetTokenExpiration?: DateTimeNullableWithAggregatesFilter<"Utilisateurs"> | Date | string | null
    isVerified?: BoolWithAggregatesFilter<"Utilisateurs"> | boolean
    lastLogin?: DateTimeWithAggregatesFilter<"Utilisateurs"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"Utilisateurs"> | $Enums.Role
    sexe?: EnumSexeNullableWithAggregatesFilter<"Utilisateurs"> | $Enums.Sexe | null
    createdAt?: DateTimeWithAggregatesFilter<"Utilisateurs"> | Date | string
  }

  export type CongeWhereInput = {
    AND?: CongeWhereInput | CongeWhereInput[]
    OR?: CongeWhereInput[]
    NOT?: CongeWhereInput | CongeWhereInput[]
    id?: UuidFilter<"Conge"> | string
    userId?: UuidFilter<"Conge"> | string
    type?: EnumLeaveTypeFilter<"Conge"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"Conge"> | Date | string
    endDate?: DateTimeFilter<"Conge"> | Date | string
    duration?: IntFilter<"Conge"> | number
    reason?: StringFilter<"Conge"> | string
    status?: EnumLeaveStatusFilter<"Conge"> | $Enums.LeaveStatus
    reviewedBy?: UuidNullableFilter<"Conge"> | string | null
    letterUrl?: StringNullableFilter<"Conge"> | string | null
    comment?: StringNullableFilter<"Conge"> | string | null
    documentUrl?: StringNullableFilter<"Conge"> | string | null
    createdAt?: DateTimeFilter<"Conge"> | Date | string
    updatedAt?: DateTimeFilter<"Conge"> | Date | string
    user?: XOR<UtilisateursScalarRelationFilter, UtilisateursWhereInput>
    reviewer?: XOR<UtilisateursNullableScalarRelationFilter, UtilisateursWhereInput> | null
    history?: HistoriqueCongeListRelationFilter
  }

  export type CongeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    letterUrl?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UtilisateursOrderByWithRelationInput
    reviewer?: UtilisateursOrderByWithRelationInput
    history?: HistoriqueCongeOrderByRelationAggregateInput
  }

  export type CongeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CongeWhereInput | CongeWhereInput[]
    OR?: CongeWhereInput[]
    NOT?: CongeWhereInput | CongeWhereInput[]
    userId?: UuidFilter<"Conge"> | string
    type?: EnumLeaveTypeFilter<"Conge"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"Conge"> | Date | string
    endDate?: DateTimeFilter<"Conge"> | Date | string
    duration?: IntFilter<"Conge"> | number
    reason?: StringFilter<"Conge"> | string
    status?: EnumLeaveStatusFilter<"Conge"> | $Enums.LeaveStatus
    reviewedBy?: UuidNullableFilter<"Conge"> | string | null
    letterUrl?: StringNullableFilter<"Conge"> | string | null
    comment?: StringNullableFilter<"Conge"> | string | null
    documentUrl?: StringNullableFilter<"Conge"> | string | null
    createdAt?: DateTimeFilter<"Conge"> | Date | string
    updatedAt?: DateTimeFilter<"Conge"> | Date | string
    user?: XOR<UtilisateursScalarRelationFilter, UtilisateursWhereInput>
    reviewer?: XOR<UtilisateursNullableScalarRelationFilter, UtilisateursWhereInput> | null
    history?: HistoriqueCongeListRelationFilter
  }, "id">

  export type CongeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrderInput | SortOrder
    letterUrl?: SortOrderInput | SortOrder
    comment?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CongeCountOrderByAggregateInput
    _avg?: CongeAvgOrderByAggregateInput
    _max?: CongeMaxOrderByAggregateInput
    _min?: CongeMinOrderByAggregateInput
    _sum?: CongeSumOrderByAggregateInput
  }

  export type CongeScalarWhereWithAggregatesInput = {
    AND?: CongeScalarWhereWithAggregatesInput | CongeScalarWhereWithAggregatesInput[]
    OR?: CongeScalarWhereWithAggregatesInput[]
    NOT?: CongeScalarWhereWithAggregatesInput | CongeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Conge"> | string
    userId?: UuidWithAggregatesFilter<"Conge"> | string
    type?: EnumLeaveTypeWithAggregatesFilter<"Conge"> | $Enums.LeaveType
    startDate?: DateTimeWithAggregatesFilter<"Conge"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Conge"> | Date | string
    duration?: IntWithAggregatesFilter<"Conge"> | number
    reason?: StringWithAggregatesFilter<"Conge"> | string
    status?: EnumLeaveStatusWithAggregatesFilter<"Conge"> | $Enums.LeaveStatus
    reviewedBy?: UuidNullableWithAggregatesFilter<"Conge"> | string | null
    letterUrl?: StringNullableWithAggregatesFilter<"Conge"> | string | null
    comment?: StringNullableWithAggregatesFilter<"Conge"> | string | null
    documentUrl?: StringNullableWithAggregatesFilter<"Conge"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Conge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Conge"> | Date | string
  }

  export type BalanceCongeWhereInput = {
    AND?: BalanceCongeWhereInput | BalanceCongeWhereInput[]
    OR?: BalanceCongeWhereInput[]
    NOT?: BalanceCongeWhereInput | BalanceCongeWhereInput[]
    id?: UuidFilter<"BalanceConge"> | string
    userId?: UuidFilter<"BalanceConge"> | string
    type?: EnumLeaveTypeFilter<"BalanceConge"> | $Enums.LeaveType
    year?: IntFilter<"BalanceConge"> | number
    total?: IntFilter<"BalanceConge"> | number
    used?: IntFilter<"BalanceConge"> | number
    user?: XOR<UtilisateursScalarRelationFilter, UtilisateursWhereInput>
  }

  export type BalanceCongeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    year?: SortOrder
    total?: SortOrder
    used?: SortOrder
    user?: UtilisateursOrderByWithRelationInput
  }

  export type BalanceCongeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BalanceCongeWhereInput | BalanceCongeWhereInput[]
    OR?: BalanceCongeWhereInput[]
    NOT?: BalanceCongeWhereInput | BalanceCongeWhereInput[]
    userId?: UuidFilter<"BalanceConge"> | string
    type?: EnumLeaveTypeFilter<"BalanceConge"> | $Enums.LeaveType
    year?: IntFilter<"BalanceConge"> | number
    total?: IntFilter<"BalanceConge"> | number
    used?: IntFilter<"BalanceConge"> | number
    user?: XOR<UtilisateursScalarRelationFilter, UtilisateursWhereInput>
  }, "id">

  export type BalanceCongeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    year?: SortOrder
    total?: SortOrder
    used?: SortOrder
    _count?: BalanceCongeCountOrderByAggregateInput
    _avg?: BalanceCongeAvgOrderByAggregateInput
    _max?: BalanceCongeMaxOrderByAggregateInput
    _min?: BalanceCongeMinOrderByAggregateInput
    _sum?: BalanceCongeSumOrderByAggregateInput
  }

  export type BalanceCongeScalarWhereWithAggregatesInput = {
    AND?: BalanceCongeScalarWhereWithAggregatesInput | BalanceCongeScalarWhereWithAggregatesInput[]
    OR?: BalanceCongeScalarWhereWithAggregatesInput[]
    NOT?: BalanceCongeScalarWhereWithAggregatesInput | BalanceCongeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"BalanceConge"> | string
    userId?: UuidWithAggregatesFilter<"BalanceConge"> | string
    type?: EnumLeaveTypeWithAggregatesFilter<"BalanceConge"> | $Enums.LeaveType
    year?: IntWithAggregatesFilter<"BalanceConge"> | number
    total?: IntWithAggregatesFilter<"BalanceConge"> | number
    used?: IntWithAggregatesFilter<"BalanceConge"> | number
  }

  export type HistoriqueCongeWhereInput = {
    AND?: HistoriqueCongeWhereInput | HistoriqueCongeWhereInput[]
    OR?: HistoriqueCongeWhereInput[]
    NOT?: HistoriqueCongeWhereInput | HistoriqueCongeWhereInput[]
    id?: UuidFilter<"HistoriqueConge"> | string
    leaveId?: UuidFilter<"HistoriqueConge"> | string
    action?: EnumHistoryActionFilter<"HistoriqueConge"> | $Enums.HistoryAction
    byUserId?: UuidFilter<"HistoriqueConge"> | string
    createdAt?: DateTimeFilter<"HistoriqueConge"> | Date | string
    note?: StringNullableFilter<"HistoriqueConge"> | string | null
    leave?: XOR<CongeScalarRelationFilter, CongeWhereInput>
    byUser?: XOR<UtilisateursScalarRelationFilter, UtilisateursWhereInput>
  }

  export type HistoriqueCongeOrderByWithRelationInput = {
    id?: SortOrder
    leaveId?: SortOrder
    action?: SortOrder
    byUserId?: SortOrder
    createdAt?: SortOrder
    note?: SortOrderInput | SortOrder
    leave?: CongeOrderByWithRelationInput
    byUser?: UtilisateursOrderByWithRelationInput
  }

  export type HistoriqueCongeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoriqueCongeWhereInput | HistoriqueCongeWhereInput[]
    OR?: HistoriqueCongeWhereInput[]
    NOT?: HistoriqueCongeWhereInput | HistoriqueCongeWhereInput[]
    leaveId?: UuidFilter<"HistoriqueConge"> | string
    action?: EnumHistoryActionFilter<"HistoriqueConge"> | $Enums.HistoryAction
    byUserId?: UuidFilter<"HistoriqueConge"> | string
    createdAt?: DateTimeFilter<"HistoriqueConge"> | Date | string
    note?: StringNullableFilter<"HistoriqueConge"> | string | null
    leave?: XOR<CongeScalarRelationFilter, CongeWhereInput>
    byUser?: XOR<UtilisateursScalarRelationFilter, UtilisateursWhereInput>
  }, "id">

  export type HistoriqueCongeOrderByWithAggregationInput = {
    id?: SortOrder
    leaveId?: SortOrder
    action?: SortOrder
    byUserId?: SortOrder
    createdAt?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: HistoriqueCongeCountOrderByAggregateInput
    _max?: HistoriqueCongeMaxOrderByAggregateInput
    _min?: HistoriqueCongeMinOrderByAggregateInput
  }

  export type HistoriqueCongeScalarWhereWithAggregatesInput = {
    AND?: HistoriqueCongeScalarWhereWithAggregatesInput | HistoriqueCongeScalarWhereWithAggregatesInput[]
    OR?: HistoriqueCongeScalarWhereWithAggregatesInput[]
    NOT?: HistoriqueCongeScalarWhereWithAggregatesInput | HistoriqueCongeScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"HistoriqueConge"> | string
    leaveId?: UuidWithAggregatesFilter<"HistoriqueConge"> | string
    action?: EnumHistoryActionWithAggregatesFilter<"HistoriqueConge"> | $Enums.HistoryAction
    byUserId?: UuidWithAggregatesFilter<"HistoriqueConge"> | string
    createdAt?: DateTimeWithAggregatesFilter<"HistoriqueConge"> | Date | string
    note?: StringNullableWithAggregatesFilter<"HistoriqueConge"> | string | null
  }

  export type UtilisateursCreateInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    address: string
    phone: string
    dateNaissance: Date | string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    sexe?: $Enums.Sexe | null
    createdAt?: Date | string
    leaves?: CongeCreateNestedManyWithoutUserInput
    balances?: BalanceCongeCreateNestedManyWithoutUserInput
    reviews?: CongeCreateNestedManyWithoutReviewerInput
    LeaveHistory?: HistoriqueCongeCreateNestedManyWithoutByUserInput
  }

  export type UtilisateursUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    address: string
    phone: string
    dateNaissance: Date | string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    sexe?: $Enums.Sexe | null
    createdAt?: Date | string
    leaves?: CongeUncheckedCreateNestedManyWithoutUserInput
    balances?: BalanceCongeUncheckedCreateNestedManyWithoutUserInput
    reviews?: CongeUncheckedCreateNestedManyWithoutReviewerInput
    LeaveHistory?: HistoriqueCongeUncheckedCreateNestedManyWithoutByUserInput
  }

  export type UtilisateursUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: CongeUpdateManyWithoutUserNestedInput
    balances?: BalanceCongeUpdateManyWithoutUserNestedInput
    reviews?: CongeUpdateManyWithoutReviewerNestedInput
    LeaveHistory?: HistoriqueCongeUpdateManyWithoutByUserNestedInput
  }

  export type UtilisateursUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: CongeUncheckedUpdateManyWithoutUserNestedInput
    balances?: BalanceCongeUncheckedUpdateManyWithoutUserNestedInput
    reviews?: CongeUncheckedUpdateManyWithoutReviewerNestedInput
    LeaveHistory?: HistoriqueCongeUncheckedUpdateManyWithoutByUserNestedInput
  }

  export type UtilisateursCreateManyInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    address: string
    phone: string
    dateNaissance: Date | string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    sexe?: $Enums.Sexe | null
    createdAt?: Date | string
  }

  export type UtilisateursUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateursUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CongeCreateInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    letterUrl?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UtilisateursCreateNestedOneWithoutLeavesInput
    reviewer?: UtilisateursCreateNestedOneWithoutReviewsInput
    history?: HistoriqueCongeCreateNestedManyWithoutLeaveInput
  }

  export type CongeUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    reviewedBy?: string | null
    letterUrl?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: HistoriqueCongeUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type CongeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    letterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UtilisateursUpdateOneRequiredWithoutLeavesNestedInput
    reviewer?: UtilisateursUpdateOneWithoutReviewsNestedInput
    history?: HistoriqueCongeUpdateManyWithoutLeaveNestedInput
  }

  export type CongeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    letterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: HistoriqueCongeUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type CongeCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    reviewedBy?: string | null
    letterUrl?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CongeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    letterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CongeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    letterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceCongeCreateInput = {
    id?: string
    type: $Enums.LeaveType
    year: number
    total: number
    used?: number
    user: UtilisateursCreateNestedOneWithoutBalancesInput
  }

  export type BalanceCongeUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.LeaveType
    year: number
    total: number
    used?: number
  }

  export type BalanceCongeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    year?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
    user?: UtilisateursUpdateOneRequiredWithoutBalancesNestedInput
  }

  export type BalanceCongeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    year?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceCongeCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.LeaveType
    year: number
    total: number
    used?: number
  }

  export type BalanceCongeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    year?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceCongeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    year?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
  }

  export type HistoriqueCongeCreateInput = {
    id?: string
    action: $Enums.HistoryAction
    createdAt?: Date | string
    note?: string | null
    leave: CongeCreateNestedOneWithoutHistoryInput
    byUser: UtilisateursCreateNestedOneWithoutLeaveHistoryInput
  }

  export type HistoriqueCongeUncheckedCreateInput = {
    id?: string
    leaveId: string
    action: $Enums.HistoryAction
    byUserId: string
    createdAt?: Date | string
    note?: string | null
  }

  export type HistoriqueCongeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    leave?: CongeUpdateOneRequiredWithoutHistoryNestedInput
    byUser?: UtilisateursUpdateOneRequiredWithoutLeaveHistoryNestedInput
  }

  export type HistoriqueCongeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    byUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoriqueCongeCreateManyInput = {
    id?: string
    leaveId: string
    action: $Enums.HistoryAction
    byUserId: string
    createdAt?: Date | string
    note?: string | null
  }

  export type HistoriqueCongeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoriqueCongeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    byUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumSexeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexe | EnumSexeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexeNullableFilter<$PrismaModel> | $Enums.Sexe | null
  }

  export type CongeListRelationFilter = {
    every?: CongeWhereInput
    some?: CongeWhereInput
    none?: CongeWhereInput
  }

  export type BalanceCongeListRelationFilter = {
    every?: BalanceCongeWhereInput
    some?: BalanceCongeWhereInput
    none?: BalanceCongeWhereInput
  }

  export type HistoriqueCongeListRelationFilter = {
    every?: HistoriqueCongeWhereInput
    some?: HistoriqueCongeWhereInput
    none?: HistoriqueCongeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CongeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BalanceCongeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoriqueCongeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateursCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    matricule?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    dateNaissance?: SortOrder
    verificationCode?: SortOrder
    verificationExpiration?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiration?: SortOrder
    isVerified?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
    sexe?: SortOrder
    createdAt?: SortOrder
  }

  export type UtilisateursMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    matricule?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    dateNaissance?: SortOrder
    verificationCode?: SortOrder
    verificationExpiration?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiration?: SortOrder
    isVerified?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
    sexe?: SortOrder
    createdAt?: SortOrder
  }

  export type UtilisateursMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    matricule?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    dateNaissance?: SortOrder
    verificationCode?: SortOrder
    verificationExpiration?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiration?: SortOrder
    isVerified?: SortOrder
    lastLogin?: SortOrder
    role?: SortOrder
    sexe?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumSexeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexe | EnumSexeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sexe | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexeNullableFilter<$PrismaModel>
    _max?: NestedEnumSexeNullableFilter<$PrismaModel>
  }

  export type EnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
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

  export type EnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UtilisateursScalarRelationFilter = {
    is?: UtilisateursWhereInput
    isNot?: UtilisateursWhereInput
  }

  export type UtilisateursNullableScalarRelationFilter = {
    is?: UtilisateursWhereInput | null
    isNot?: UtilisateursWhereInput | null
  }

  export type CongeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    letterUrl?: SortOrder
    comment?: SortOrder
    documentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CongeAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type CongeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    letterUrl?: SortOrder
    comment?: SortOrder
    documentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CongeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    duration?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    reviewedBy?: SortOrder
    letterUrl?: SortOrder
    comment?: SortOrder
    documentUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CongeSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
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

  export type EnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BalanceCongeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    year?: SortOrder
    total?: SortOrder
    used?: SortOrder
  }

  export type BalanceCongeAvgOrderByAggregateInput = {
    year?: SortOrder
    total?: SortOrder
    used?: SortOrder
  }

  export type BalanceCongeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    year?: SortOrder
    total?: SortOrder
    used?: SortOrder
  }

  export type BalanceCongeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    year?: SortOrder
    total?: SortOrder
    used?: SortOrder
  }

  export type BalanceCongeSumOrderByAggregateInput = {
    year?: SortOrder
    total?: SortOrder
    used?: SortOrder
  }

  export type EnumHistoryActionFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryAction | EnumHistoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryActionFilter<$PrismaModel> | $Enums.HistoryAction
  }

  export type CongeScalarRelationFilter = {
    is?: CongeWhereInput
    isNot?: CongeWhereInput
  }

  export type HistoriqueCongeCountOrderByAggregateInput = {
    id?: SortOrder
    leaveId?: SortOrder
    action?: SortOrder
    byUserId?: SortOrder
    createdAt?: SortOrder
    note?: SortOrder
  }

  export type HistoriqueCongeMaxOrderByAggregateInput = {
    id?: SortOrder
    leaveId?: SortOrder
    action?: SortOrder
    byUserId?: SortOrder
    createdAt?: SortOrder
    note?: SortOrder
  }

  export type HistoriqueCongeMinOrderByAggregateInput = {
    id?: SortOrder
    leaveId?: SortOrder
    action?: SortOrder
    byUserId?: SortOrder
    createdAt?: SortOrder
    note?: SortOrder
  }

  export type EnumHistoryActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryAction | EnumHistoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryActionWithAggregatesFilter<$PrismaModel> | $Enums.HistoryAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHistoryActionFilter<$PrismaModel>
    _max?: NestedEnumHistoryActionFilter<$PrismaModel>
  }

  export type CongeCreateNestedManyWithoutUserInput = {
    create?: XOR<CongeCreateWithoutUserInput, CongeUncheckedCreateWithoutUserInput> | CongeCreateWithoutUserInput[] | CongeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CongeCreateOrConnectWithoutUserInput | CongeCreateOrConnectWithoutUserInput[]
    createMany?: CongeCreateManyUserInputEnvelope
    connect?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
  }

  export type BalanceCongeCreateNestedManyWithoutUserInput = {
    create?: XOR<BalanceCongeCreateWithoutUserInput, BalanceCongeUncheckedCreateWithoutUserInput> | BalanceCongeCreateWithoutUserInput[] | BalanceCongeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCongeCreateOrConnectWithoutUserInput | BalanceCongeCreateOrConnectWithoutUserInput[]
    createMany?: BalanceCongeCreateManyUserInputEnvelope
    connect?: BalanceCongeWhereUniqueInput | BalanceCongeWhereUniqueInput[]
  }

  export type CongeCreateNestedManyWithoutReviewerInput = {
    create?: XOR<CongeCreateWithoutReviewerInput, CongeUncheckedCreateWithoutReviewerInput> | CongeCreateWithoutReviewerInput[] | CongeUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: CongeCreateOrConnectWithoutReviewerInput | CongeCreateOrConnectWithoutReviewerInput[]
    createMany?: CongeCreateManyReviewerInputEnvelope
    connect?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
  }

  export type HistoriqueCongeCreateNestedManyWithoutByUserInput = {
    create?: XOR<HistoriqueCongeCreateWithoutByUserInput, HistoriqueCongeUncheckedCreateWithoutByUserInput> | HistoriqueCongeCreateWithoutByUserInput[] | HistoriqueCongeUncheckedCreateWithoutByUserInput[]
    connectOrCreate?: HistoriqueCongeCreateOrConnectWithoutByUserInput | HistoriqueCongeCreateOrConnectWithoutByUserInput[]
    createMany?: HistoriqueCongeCreateManyByUserInputEnvelope
    connect?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
  }

  export type CongeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CongeCreateWithoutUserInput, CongeUncheckedCreateWithoutUserInput> | CongeCreateWithoutUserInput[] | CongeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CongeCreateOrConnectWithoutUserInput | CongeCreateOrConnectWithoutUserInput[]
    createMany?: CongeCreateManyUserInputEnvelope
    connect?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
  }

  export type BalanceCongeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BalanceCongeCreateWithoutUserInput, BalanceCongeUncheckedCreateWithoutUserInput> | BalanceCongeCreateWithoutUserInput[] | BalanceCongeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCongeCreateOrConnectWithoutUserInput | BalanceCongeCreateOrConnectWithoutUserInput[]
    createMany?: BalanceCongeCreateManyUserInputEnvelope
    connect?: BalanceCongeWhereUniqueInput | BalanceCongeWhereUniqueInput[]
  }

  export type CongeUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<CongeCreateWithoutReviewerInput, CongeUncheckedCreateWithoutReviewerInput> | CongeCreateWithoutReviewerInput[] | CongeUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: CongeCreateOrConnectWithoutReviewerInput | CongeCreateOrConnectWithoutReviewerInput[]
    createMany?: CongeCreateManyReviewerInputEnvelope
    connect?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
  }

  export type HistoriqueCongeUncheckedCreateNestedManyWithoutByUserInput = {
    create?: XOR<HistoriqueCongeCreateWithoutByUserInput, HistoriqueCongeUncheckedCreateWithoutByUserInput> | HistoriqueCongeCreateWithoutByUserInput[] | HistoriqueCongeUncheckedCreateWithoutByUserInput[]
    connectOrCreate?: HistoriqueCongeCreateOrConnectWithoutByUserInput | HistoriqueCongeCreateOrConnectWithoutByUserInput[]
    createMany?: HistoriqueCongeCreateManyByUserInputEnvelope
    connect?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableEnumSexeFieldUpdateOperationsInput = {
    set?: $Enums.Sexe | null
  }

  export type CongeUpdateManyWithoutUserNestedInput = {
    create?: XOR<CongeCreateWithoutUserInput, CongeUncheckedCreateWithoutUserInput> | CongeCreateWithoutUserInput[] | CongeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CongeCreateOrConnectWithoutUserInput | CongeCreateOrConnectWithoutUserInput[]
    upsert?: CongeUpsertWithWhereUniqueWithoutUserInput | CongeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CongeCreateManyUserInputEnvelope
    set?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    disconnect?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    delete?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    connect?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    update?: CongeUpdateWithWhereUniqueWithoutUserInput | CongeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CongeUpdateManyWithWhereWithoutUserInput | CongeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CongeScalarWhereInput | CongeScalarWhereInput[]
  }

  export type BalanceCongeUpdateManyWithoutUserNestedInput = {
    create?: XOR<BalanceCongeCreateWithoutUserInput, BalanceCongeUncheckedCreateWithoutUserInput> | BalanceCongeCreateWithoutUserInput[] | BalanceCongeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCongeCreateOrConnectWithoutUserInput | BalanceCongeCreateOrConnectWithoutUserInput[]
    upsert?: BalanceCongeUpsertWithWhereUniqueWithoutUserInput | BalanceCongeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BalanceCongeCreateManyUserInputEnvelope
    set?: BalanceCongeWhereUniqueInput | BalanceCongeWhereUniqueInput[]
    disconnect?: BalanceCongeWhereUniqueInput | BalanceCongeWhereUniqueInput[]
    delete?: BalanceCongeWhereUniqueInput | BalanceCongeWhereUniqueInput[]
    connect?: BalanceCongeWhereUniqueInput | BalanceCongeWhereUniqueInput[]
    update?: BalanceCongeUpdateWithWhereUniqueWithoutUserInput | BalanceCongeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BalanceCongeUpdateManyWithWhereWithoutUserInput | BalanceCongeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BalanceCongeScalarWhereInput | BalanceCongeScalarWhereInput[]
  }

  export type CongeUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<CongeCreateWithoutReviewerInput, CongeUncheckedCreateWithoutReviewerInput> | CongeCreateWithoutReviewerInput[] | CongeUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: CongeCreateOrConnectWithoutReviewerInput | CongeCreateOrConnectWithoutReviewerInput[]
    upsert?: CongeUpsertWithWhereUniqueWithoutReviewerInput | CongeUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: CongeCreateManyReviewerInputEnvelope
    set?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    disconnect?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    delete?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    connect?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    update?: CongeUpdateWithWhereUniqueWithoutReviewerInput | CongeUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: CongeUpdateManyWithWhereWithoutReviewerInput | CongeUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: CongeScalarWhereInput | CongeScalarWhereInput[]
  }

  export type HistoriqueCongeUpdateManyWithoutByUserNestedInput = {
    create?: XOR<HistoriqueCongeCreateWithoutByUserInput, HistoriqueCongeUncheckedCreateWithoutByUserInput> | HistoriqueCongeCreateWithoutByUserInput[] | HistoriqueCongeUncheckedCreateWithoutByUserInput[]
    connectOrCreate?: HistoriqueCongeCreateOrConnectWithoutByUserInput | HistoriqueCongeCreateOrConnectWithoutByUserInput[]
    upsert?: HistoriqueCongeUpsertWithWhereUniqueWithoutByUserInput | HistoriqueCongeUpsertWithWhereUniqueWithoutByUserInput[]
    createMany?: HistoriqueCongeCreateManyByUserInputEnvelope
    set?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    disconnect?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    delete?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    connect?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    update?: HistoriqueCongeUpdateWithWhereUniqueWithoutByUserInput | HistoriqueCongeUpdateWithWhereUniqueWithoutByUserInput[]
    updateMany?: HistoriqueCongeUpdateManyWithWhereWithoutByUserInput | HistoriqueCongeUpdateManyWithWhereWithoutByUserInput[]
    deleteMany?: HistoriqueCongeScalarWhereInput | HistoriqueCongeScalarWhereInput[]
  }

  export type CongeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CongeCreateWithoutUserInput, CongeUncheckedCreateWithoutUserInput> | CongeCreateWithoutUserInput[] | CongeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CongeCreateOrConnectWithoutUserInput | CongeCreateOrConnectWithoutUserInput[]
    upsert?: CongeUpsertWithWhereUniqueWithoutUserInput | CongeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CongeCreateManyUserInputEnvelope
    set?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    disconnect?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    delete?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    connect?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    update?: CongeUpdateWithWhereUniqueWithoutUserInput | CongeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CongeUpdateManyWithWhereWithoutUserInput | CongeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CongeScalarWhereInput | CongeScalarWhereInput[]
  }

  export type BalanceCongeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BalanceCongeCreateWithoutUserInput, BalanceCongeUncheckedCreateWithoutUserInput> | BalanceCongeCreateWithoutUserInput[] | BalanceCongeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCongeCreateOrConnectWithoutUserInput | BalanceCongeCreateOrConnectWithoutUserInput[]
    upsert?: BalanceCongeUpsertWithWhereUniqueWithoutUserInput | BalanceCongeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BalanceCongeCreateManyUserInputEnvelope
    set?: BalanceCongeWhereUniqueInput | BalanceCongeWhereUniqueInput[]
    disconnect?: BalanceCongeWhereUniqueInput | BalanceCongeWhereUniqueInput[]
    delete?: BalanceCongeWhereUniqueInput | BalanceCongeWhereUniqueInput[]
    connect?: BalanceCongeWhereUniqueInput | BalanceCongeWhereUniqueInput[]
    update?: BalanceCongeUpdateWithWhereUniqueWithoutUserInput | BalanceCongeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BalanceCongeUpdateManyWithWhereWithoutUserInput | BalanceCongeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BalanceCongeScalarWhereInput | BalanceCongeScalarWhereInput[]
  }

  export type CongeUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<CongeCreateWithoutReviewerInput, CongeUncheckedCreateWithoutReviewerInput> | CongeCreateWithoutReviewerInput[] | CongeUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: CongeCreateOrConnectWithoutReviewerInput | CongeCreateOrConnectWithoutReviewerInput[]
    upsert?: CongeUpsertWithWhereUniqueWithoutReviewerInput | CongeUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: CongeCreateManyReviewerInputEnvelope
    set?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    disconnect?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    delete?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    connect?: CongeWhereUniqueInput | CongeWhereUniqueInput[]
    update?: CongeUpdateWithWhereUniqueWithoutReviewerInput | CongeUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: CongeUpdateManyWithWhereWithoutReviewerInput | CongeUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: CongeScalarWhereInput | CongeScalarWhereInput[]
  }

  export type HistoriqueCongeUncheckedUpdateManyWithoutByUserNestedInput = {
    create?: XOR<HistoriqueCongeCreateWithoutByUserInput, HistoriqueCongeUncheckedCreateWithoutByUserInput> | HistoriqueCongeCreateWithoutByUserInput[] | HistoriqueCongeUncheckedCreateWithoutByUserInput[]
    connectOrCreate?: HistoriqueCongeCreateOrConnectWithoutByUserInput | HistoriqueCongeCreateOrConnectWithoutByUserInput[]
    upsert?: HistoriqueCongeUpsertWithWhereUniqueWithoutByUserInput | HistoriqueCongeUpsertWithWhereUniqueWithoutByUserInput[]
    createMany?: HistoriqueCongeCreateManyByUserInputEnvelope
    set?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    disconnect?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    delete?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    connect?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    update?: HistoriqueCongeUpdateWithWhereUniqueWithoutByUserInput | HistoriqueCongeUpdateWithWhereUniqueWithoutByUserInput[]
    updateMany?: HistoriqueCongeUpdateManyWithWhereWithoutByUserInput | HistoriqueCongeUpdateManyWithWhereWithoutByUserInput[]
    deleteMany?: HistoriqueCongeScalarWhereInput | HistoriqueCongeScalarWhereInput[]
  }

  export type UtilisateursCreateNestedOneWithoutLeavesInput = {
    create?: XOR<UtilisateursCreateWithoutLeavesInput, UtilisateursUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: UtilisateursCreateOrConnectWithoutLeavesInput
    connect?: UtilisateursWhereUniqueInput
  }

  export type UtilisateursCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UtilisateursCreateWithoutReviewsInput, UtilisateursUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UtilisateursCreateOrConnectWithoutReviewsInput
    connect?: UtilisateursWhereUniqueInput
  }

  export type HistoriqueCongeCreateNestedManyWithoutLeaveInput = {
    create?: XOR<HistoriqueCongeCreateWithoutLeaveInput, HistoriqueCongeUncheckedCreateWithoutLeaveInput> | HistoriqueCongeCreateWithoutLeaveInput[] | HistoriqueCongeUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: HistoriqueCongeCreateOrConnectWithoutLeaveInput | HistoriqueCongeCreateOrConnectWithoutLeaveInput[]
    createMany?: HistoriqueCongeCreateManyLeaveInputEnvelope
    connect?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
  }

  export type HistoriqueCongeUncheckedCreateNestedManyWithoutLeaveInput = {
    create?: XOR<HistoriqueCongeCreateWithoutLeaveInput, HistoriqueCongeUncheckedCreateWithoutLeaveInput> | HistoriqueCongeCreateWithoutLeaveInput[] | HistoriqueCongeUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: HistoriqueCongeCreateOrConnectWithoutLeaveInput | HistoriqueCongeCreateOrConnectWithoutLeaveInput[]
    createMany?: HistoriqueCongeCreateManyLeaveInputEnvelope
    connect?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
  }

  export type EnumLeaveTypeFieldUpdateOperationsInput = {
    set?: $Enums.LeaveType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumLeaveStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeaveStatus
  }

  export type UtilisateursUpdateOneRequiredWithoutLeavesNestedInput = {
    create?: XOR<UtilisateursCreateWithoutLeavesInput, UtilisateursUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: UtilisateursCreateOrConnectWithoutLeavesInput
    upsert?: UtilisateursUpsertWithoutLeavesInput
    connect?: UtilisateursWhereUniqueInput
    update?: XOR<XOR<UtilisateursUpdateToOneWithWhereWithoutLeavesInput, UtilisateursUpdateWithoutLeavesInput>, UtilisateursUncheckedUpdateWithoutLeavesInput>
  }

  export type UtilisateursUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<UtilisateursCreateWithoutReviewsInput, UtilisateursUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UtilisateursCreateOrConnectWithoutReviewsInput
    upsert?: UtilisateursUpsertWithoutReviewsInput
    disconnect?: UtilisateursWhereInput | boolean
    delete?: UtilisateursWhereInput | boolean
    connect?: UtilisateursWhereUniqueInput
    update?: XOR<XOR<UtilisateursUpdateToOneWithWhereWithoutReviewsInput, UtilisateursUpdateWithoutReviewsInput>, UtilisateursUncheckedUpdateWithoutReviewsInput>
  }

  export type HistoriqueCongeUpdateManyWithoutLeaveNestedInput = {
    create?: XOR<HistoriqueCongeCreateWithoutLeaveInput, HistoriqueCongeUncheckedCreateWithoutLeaveInput> | HistoriqueCongeCreateWithoutLeaveInput[] | HistoriqueCongeUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: HistoriqueCongeCreateOrConnectWithoutLeaveInput | HistoriqueCongeCreateOrConnectWithoutLeaveInput[]
    upsert?: HistoriqueCongeUpsertWithWhereUniqueWithoutLeaveInput | HistoriqueCongeUpsertWithWhereUniqueWithoutLeaveInput[]
    createMany?: HistoriqueCongeCreateManyLeaveInputEnvelope
    set?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    disconnect?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    delete?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    connect?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    update?: HistoriqueCongeUpdateWithWhereUniqueWithoutLeaveInput | HistoriqueCongeUpdateWithWhereUniqueWithoutLeaveInput[]
    updateMany?: HistoriqueCongeUpdateManyWithWhereWithoutLeaveInput | HistoriqueCongeUpdateManyWithWhereWithoutLeaveInput[]
    deleteMany?: HistoriqueCongeScalarWhereInput | HistoriqueCongeScalarWhereInput[]
  }

  export type HistoriqueCongeUncheckedUpdateManyWithoutLeaveNestedInput = {
    create?: XOR<HistoriqueCongeCreateWithoutLeaveInput, HistoriqueCongeUncheckedCreateWithoutLeaveInput> | HistoriqueCongeCreateWithoutLeaveInput[] | HistoriqueCongeUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: HistoriqueCongeCreateOrConnectWithoutLeaveInput | HistoriqueCongeCreateOrConnectWithoutLeaveInput[]
    upsert?: HistoriqueCongeUpsertWithWhereUniqueWithoutLeaveInput | HistoriqueCongeUpsertWithWhereUniqueWithoutLeaveInput[]
    createMany?: HistoriqueCongeCreateManyLeaveInputEnvelope
    set?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    disconnect?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    delete?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    connect?: HistoriqueCongeWhereUniqueInput | HistoriqueCongeWhereUniqueInput[]
    update?: HistoriqueCongeUpdateWithWhereUniqueWithoutLeaveInput | HistoriqueCongeUpdateWithWhereUniqueWithoutLeaveInput[]
    updateMany?: HistoriqueCongeUpdateManyWithWhereWithoutLeaveInput | HistoriqueCongeUpdateManyWithWhereWithoutLeaveInput[]
    deleteMany?: HistoriqueCongeScalarWhereInput | HistoriqueCongeScalarWhereInput[]
  }

  export type UtilisateursCreateNestedOneWithoutBalancesInput = {
    create?: XOR<UtilisateursCreateWithoutBalancesInput, UtilisateursUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: UtilisateursCreateOrConnectWithoutBalancesInput
    connect?: UtilisateursWhereUniqueInput
  }

  export type UtilisateursUpdateOneRequiredWithoutBalancesNestedInput = {
    create?: XOR<UtilisateursCreateWithoutBalancesInput, UtilisateursUncheckedCreateWithoutBalancesInput>
    connectOrCreate?: UtilisateursCreateOrConnectWithoutBalancesInput
    upsert?: UtilisateursUpsertWithoutBalancesInput
    connect?: UtilisateursWhereUniqueInput
    update?: XOR<XOR<UtilisateursUpdateToOneWithWhereWithoutBalancesInput, UtilisateursUpdateWithoutBalancesInput>, UtilisateursUncheckedUpdateWithoutBalancesInput>
  }

  export type CongeCreateNestedOneWithoutHistoryInput = {
    create?: XOR<CongeCreateWithoutHistoryInput, CongeUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: CongeCreateOrConnectWithoutHistoryInput
    connect?: CongeWhereUniqueInput
  }

  export type UtilisateursCreateNestedOneWithoutLeaveHistoryInput = {
    create?: XOR<UtilisateursCreateWithoutLeaveHistoryInput, UtilisateursUncheckedCreateWithoutLeaveHistoryInput>
    connectOrCreate?: UtilisateursCreateOrConnectWithoutLeaveHistoryInput
    connect?: UtilisateursWhereUniqueInput
  }

  export type EnumHistoryActionFieldUpdateOperationsInput = {
    set?: $Enums.HistoryAction
  }

  export type CongeUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<CongeCreateWithoutHistoryInput, CongeUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: CongeCreateOrConnectWithoutHistoryInput
    upsert?: CongeUpsertWithoutHistoryInput
    connect?: CongeWhereUniqueInput
    update?: XOR<XOR<CongeUpdateToOneWithWhereWithoutHistoryInput, CongeUpdateWithoutHistoryInput>, CongeUncheckedUpdateWithoutHistoryInput>
  }

  export type UtilisateursUpdateOneRequiredWithoutLeaveHistoryNestedInput = {
    create?: XOR<UtilisateursCreateWithoutLeaveHistoryInput, UtilisateursUncheckedCreateWithoutLeaveHistoryInput>
    connectOrCreate?: UtilisateursCreateOrConnectWithoutLeaveHistoryInput
    upsert?: UtilisateursUpsertWithoutLeaveHistoryInput
    connect?: UtilisateursWhereUniqueInput
    update?: XOR<XOR<UtilisateursUpdateToOneWithWhereWithoutLeaveHistoryInput, UtilisateursUpdateWithoutLeaveHistoryInput>, UtilisateursUncheckedUpdateWithoutLeaveHistoryInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumSexeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexe | EnumSexeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexeNullableFilter<$PrismaModel> | $Enums.Sexe | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumSexeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sexe | EnumSexeFieldRefInput<$PrismaModel> | null
    in?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Sexe[] | ListEnumSexeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSexeNullableWithAggregatesFilter<$PrismaModel> | $Enums.Sexe | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSexeNullableFilter<$PrismaModel>
    _max?: NestedEnumSexeNullableFilter<$PrismaModel>
  }

  export type NestedEnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type NestedEnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
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

  export type NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumHistoryActionFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryAction | EnumHistoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryActionFilter<$PrismaModel> | $Enums.HistoryAction
  }

  export type NestedEnumHistoryActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryAction | EnumHistoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryActionWithAggregatesFilter<$PrismaModel> | $Enums.HistoryAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHistoryActionFilter<$PrismaModel>
    _max?: NestedEnumHistoryActionFilter<$PrismaModel>
  }

  export type CongeCreateWithoutUserInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    letterUrl?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer?: UtilisateursCreateNestedOneWithoutReviewsInput
    history?: HistoriqueCongeCreateNestedManyWithoutLeaveInput
  }

  export type CongeUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    reviewedBy?: string | null
    letterUrl?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: HistoriqueCongeUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type CongeCreateOrConnectWithoutUserInput = {
    where: CongeWhereUniqueInput
    create: XOR<CongeCreateWithoutUserInput, CongeUncheckedCreateWithoutUserInput>
  }

  export type CongeCreateManyUserInputEnvelope = {
    data: CongeCreateManyUserInput | CongeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BalanceCongeCreateWithoutUserInput = {
    id?: string
    type: $Enums.LeaveType
    year: number
    total: number
    used?: number
  }

  export type BalanceCongeUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.LeaveType
    year: number
    total: number
    used?: number
  }

  export type BalanceCongeCreateOrConnectWithoutUserInput = {
    where: BalanceCongeWhereUniqueInput
    create: XOR<BalanceCongeCreateWithoutUserInput, BalanceCongeUncheckedCreateWithoutUserInput>
  }

  export type BalanceCongeCreateManyUserInputEnvelope = {
    data: BalanceCongeCreateManyUserInput | BalanceCongeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CongeCreateWithoutReviewerInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    letterUrl?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UtilisateursCreateNestedOneWithoutLeavesInput
    history?: HistoriqueCongeCreateNestedManyWithoutLeaveInput
  }

  export type CongeUncheckedCreateWithoutReviewerInput = {
    id?: string
    userId: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    letterUrl?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: HistoriqueCongeUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type CongeCreateOrConnectWithoutReviewerInput = {
    where: CongeWhereUniqueInput
    create: XOR<CongeCreateWithoutReviewerInput, CongeUncheckedCreateWithoutReviewerInput>
  }

  export type CongeCreateManyReviewerInputEnvelope = {
    data: CongeCreateManyReviewerInput | CongeCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type HistoriqueCongeCreateWithoutByUserInput = {
    id?: string
    action: $Enums.HistoryAction
    createdAt?: Date | string
    note?: string | null
    leave: CongeCreateNestedOneWithoutHistoryInput
  }

  export type HistoriqueCongeUncheckedCreateWithoutByUserInput = {
    id?: string
    leaveId: string
    action: $Enums.HistoryAction
    createdAt?: Date | string
    note?: string | null
  }

  export type HistoriqueCongeCreateOrConnectWithoutByUserInput = {
    where: HistoriqueCongeWhereUniqueInput
    create: XOR<HistoriqueCongeCreateWithoutByUserInput, HistoriqueCongeUncheckedCreateWithoutByUserInput>
  }

  export type HistoriqueCongeCreateManyByUserInputEnvelope = {
    data: HistoriqueCongeCreateManyByUserInput | HistoriqueCongeCreateManyByUserInput[]
    skipDuplicates?: boolean
  }

  export type CongeUpsertWithWhereUniqueWithoutUserInput = {
    where: CongeWhereUniqueInput
    update: XOR<CongeUpdateWithoutUserInput, CongeUncheckedUpdateWithoutUserInput>
    create: XOR<CongeCreateWithoutUserInput, CongeUncheckedCreateWithoutUserInput>
  }

  export type CongeUpdateWithWhereUniqueWithoutUserInput = {
    where: CongeWhereUniqueInput
    data: XOR<CongeUpdateWithoutUserInput, CongeUncheckedUpdateWithoutUserInput>
  }

  export type CongeUpdateManyWithWhereWithoutUserInput = {
    where: CongeScalarWhereInput
    data: XOR<CongeUpdateManyMutationInput, CongeUncheckedUpdateManyWithoutUserInput>
  }

  export type CongeScalarWhereInput = {
    AND?: CongeScalarWhereInput | CongeScalarWhereInput[]
    OR?: CongeScalarWhereInput[]
    NOT?: CongeScalarWhereInput | CongeScalarWhereInput[]
    id?: UuidFilter<"Conge"> | string
    userId?: UuidFilter<"Conge"> | string
    type?: EnumLeaveTypeFilter<"Conge"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"Conge"> | Date | string
    endDate?: DateTimeFilter<"Conge"> | Date | string
    duration?: IntFilter<"Conge"> | number
    reason?: StringFilter<"Conge"> | string
    status?: EnumLeaveStatusFilter<"Conge"> | $Enums.LeaveStatus
    reviewedBy?: UuidNullableFilter<"Conge"> | string | null
    letterUrl?: StringNullableFilter<"Conge"> | string | null
    comment?: StringNullableFilter<"Conge"> | string | null
    documentUrl?: StringNullableFilter<"Conge"> | string | null
    createdAt?: DateTimeFilter<"Conge"> | Date | string
    updatedAt?: DateTimeFilter<"Conge"> | Date | string
  }

  export type BalanceCongeUpsertWithWhereUniqueWithoutUserInput = {
    where: BalanceCongeWhereUniqueInput
    update: XOR<BalanceCongeUpdateWithoutUserInput, BalanceCongeUncheckedUpdateWithoutUserInput>
    create: XOR<BalanceCongeCreateWithoutUserInput, BalanceCongeUncheckedCreateWithoutUserInput>
  }

  export type BalanceCongeUpdateWithWhereUniqueWithoutUserInput = {
    where: BalanceCongeWhereUniqueInput
    data: XOR<BalanceCongeUpdateWithoutUserInput, BalanceCongeUncheckedUpdateWithoutUserInput>
  }

  export type BalanceCongeUpdateManyWithWhereWithoutUserInput = {
    where: BalanceCongeScalarWhereInput
    data: XOR<BalanceCongeUpdateManyMutationInput, BalanceCongeUncheckedUpdateManyWithoutUserInput>
  }

  export type BalanceCongeScalarWhereInput = {
    AND?: BalanceCongeScalarWhereInput | BalanceCongeScalarWhereInput[]
    OR?: BalanceCongeScalarWhereInput[]
    NOT?: BalanceCongeScalarWhereInput | BalanceCongeScalarWhereInput[]
    id?: UuidFilter<"BalanceConge"> | string
    userId?: UuidFilter<"BalanceConge"> | string
    type?: EnumLeaveTypeFilter<"BalanceConge"> | $Enums.LeaveType
    year?: IntFilter<"BalanceConge"> | number
    total?: IntFilter<"BalanceConge"> | number
    used?: IntFilter<"BalanceConge"> | number
  }

  export type CongeUpsertWithWhereUniqueWithoutReviewerInput = {
    where: CongeWhereUniqueInput
    update: XOR<CongeUpdateWithoutReviewerInput, CongeUncheckedUpdateWithoutReviewerInput>
    create: XOR<CongeCreateWithoutReviewerInput, CongeUncheckedCreateWithoutReviewerInput>
  }

  export type CongeUpdateWithWhereUniqueWithoutReviewerInput = {
    where: CongeWhereUniqueInput
    data: XOR<CongeUpdateWithoutReviewerInput, CongeUncheckedUpdateWithoutReviewerInput>
  }

  export type CongeUpdateManyWithWhereWithoutReviewerInput = {
    where: CongeScalarWhereInput
    data: XOR<CongeUpdateManyMutationInput, CongeUncheckedUpdateManyWithoutReviewerInput>
  }

  export type HistoriqueCongeUpsertWithWhereUniqueWithoutByUserInput = {
    where: HistoriqueCongeWhereUniqueInput
    update: XOR<HistoriqueCongeUpdateWithoutByUserInput, HistoriqueCongeUncheckedUpdateWithoutByUserInput>
    create: XOR<HistoriqueCongeCreateWithoutByUserInput, HistoriqueCongeUncheckedCreateWithoutByUserInput>
  }

  export type HistoriqueCongeUpdateWithWhereUniqueWithoutByUserInput = {
    where: HistoriqueCongeWhereUniqueInput
    data: XOR<HistoriqueCongeUpdateWithoutByUserInput, HistoriqueCongeUncheckedUpdateWithoutByUserInput>
  }

  export type HistoriqueCongeUpdateManyWithWhereWithoutByUserInput = {
    where: HistoriqueCongeScalarWhereInput
    data: XOR<HistoriqueCongeUpdateManyMutationInput, HistoriqueCongeUncheckedUpdateManyWithoutByUserInput>
  }

  export type HistoriqueCongeScalarWhereInput = {
    AND?: HistoriqueCongeScalarWhereInput | HistoriqueCongeScalarWhereInput[]
    OR?: HistoriqueCongeScalarWhereInput[]
    NOT?: HistoriqueCongeScalarWhereInput | HistoriqueCongeScalarWhereInput[]
    id?: UuidFilter<"HistoriqueConge"> | string
    leaveId?: UuidFilter<"HistoriqueConge"> | string
    action?: EnumHistoryActionFilter<"HistoriqueConge"> | $Enums.HistoryAction
    byUserId?: UuidFilter<"HistoriqueConge"> | string
    createdAt?: DateTimeFilter<"HistoriqueConge"> | Date | string
    note?: StringNullableFilter<"HistoriqueConge"> | string | null
  }

  export type UtilisateursCreateWithoutLeavesInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    address: string
    phone: string
    dateNaissance: Date | string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    sexe?: $Enums.Sexe | null
    createdAt?: Date | string
    balances?: BalanceCongeCreateNestedManyWithoutUserInput
    reviews?: CongeCreateNestedManyWithoutReviewerInput
    LeaveHistory?: HistoriqueCongeCreateNestedManyWithoutByUserInput
  }

  export type UtilisateursUncheckedCreateWithoutLeavesInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    address: string
    phone: string
    dateNaissance: Date | string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    sexe?: $Enums.Sexe | null
    createdAt?: Date | string
    balances?: BalanceCongeUncheckedCreateNestedManyWithoutUserInput
    reviews?: CongeUncheckedCreateNestedManyWithoutReviewerInput
    LeaveHistory?: HistoriqueCongeUncheckedCreateNestedManyWithoutByUserInput
  }

  export type UtilisateursCreateOrConnectWithoutLeavesInput = {
    where: UtilisateursWhereUniqueInput
    create: XOR<UtilisateursCreateWithoutLeavesInput, UtilisateursUncheckedCreateWithoutLeavesInput>
  }

  export type UtilisateursCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    address: string
    phone: string
    dateNaissance: Date | string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    sexe?: $Enums.Sexe | null
    createdAt?: Date | string
    leaves?: CongeCreateNestedManyWithoutUserInput
    balances?: BalanceCongeCreateNestedManyWithoutUserInput
    LeaveHistory?: HistoriqueCongeCreateNestedManyWithoutByUserInput
  }

  export type UtilisateursUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    address: string
    phone: string
    dateNaissance: Date | string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    sexe?: $Enums.Sexe | null
    createdAt?: Date | string
    leaves?: CongeUncheckedCreateNestedManyWithoutUserInput
    balances?: BalanceCongeUncheckedCreateNestedManyWithoutUserInput
    LeaveHistory?: HistoriqueCongeUncheckedCreateNestedManyWithoutByUserInput
  }

  export type UtilisateursCreateOrConnectWithoutReviewsInput = {
    where: UtilisateursWhereUniqueInput
    create: XOR<UtilisateursCreateWithoutReviewsInput, UtilisateursUncheckedCreateWithoutReviewsInput>
  }

  export type HistoriqueCongeCreateWithoutLeaveInput = {
    id?: string
    action: $Enums.HistoryAction
    createdAt?: Date | string
    note?: string | null
    byUser: UtilisateursCreateNestedOneWithoutLeaveHistoryInput
  }

  export type HistoriqueCongeUncheckedCreateWithoutLeaveInput = {
    id?: string
    action: $Enums.HistoryAction
    byUserId: string
    createdAt?: Date | string
    note?: string | null
  }

  export type HistoriqueCongeCreateOrConnectWithoutLeaveInput = {
    where: HistoriqueCongeWhereUniqueInput
    create: XOR<HistoriqueCongeCreateWithoutLeaveInput, HistoriqueCongeUncheckedCreateWithoutLeaveInput>
  }

  export type HistoriqueCongeCreateManyLeaveInputEnvelope = {
    data: HistoriqueCongeCreateManyLeaveInput | HistoriqueCongeCreateManyLeaveInput[]
    skipDuplicates?: boolean
  }

  export type UtilisateursUpsertWithoutLeavesInput = {
    update: XOR<UtilisateursUpdateWithoutLeavesInput, UtilisateursUncheckedUpdateWithoutLeavesInput>
    create: XOR<UtilisateursCreateWithoutLeavesInput, UtilisateursUncheckedCreateWithoutLeavesInput>
    where?: UtilisateursWhereInput
  }

  export type UtilisateursUpdateToOneWithWhereWithoutLeavesInput = {
    where?: UtilisateursWhereInput
    data: XOR<UtilisateursUpdateWithoutLeavesInput, UtilisateursUncheckedUpdateWithoutLeavesInput>
  }

  export type UtilisateursUpdateWithoutLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: BalanceCongeUpdateManyWithoutUserNestedInput
    reviews?: CongeUpdateManyWithoutReviewerNestedInput
    LeaveHistory?: HistoriqueCongeUpdateManyWithoutByUserNestedInput
  }

  export type UtilisateursUncheckedUpdateWithoutLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    balances?: BalanceCongeUncheckedUpdateManyWithoutUserNestedInput
    reviews?: CongeUncheckedUpdateManyWithoutReviewerNestedInput
    LeaveHistory?: HistoriqueCongeUncheckedUpdateManyWithoutByUserNestedInput
  }

  export type UtilisateursUpsertWithoutReviewsInput = {
    update: XOR<UtilisateursUpdateWithoutReviewsInput, UtilisateursUncheckedUpdateWithoutReviewsInput>
    create: XOR<UtilisateursCreateWithoutReviewsInput, UtilisateursUncheckedCreateWithoutReviewsInput>
    where?: UtilisateursWhereInput
  }

  export type UtilisateursUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UtilisateursWhereInput
    data: XOR<UtilisateursUpdateWithoutReviewsInput, UtilisateursUncheckedUpdateWithoutReviewsInput>
  }

  export type UtilisateursUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: CongeUpdateManyWithoutUserNestedInput
    balances?: BalanceCongeUpdateManyWithoutUserNestedInput
    LeaveHistory?: HistoriqueCongeUpdateManyWithoutByUserNestedInput
  }

  export type UtilisateursUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: CongeUncheckedUpdateManyWithoutUserNestedInput
    balances?: BalanceCongeUncheckedUpdateManyWithoutUserNestedInput
    LeaveHistory?: HistoriqueCongeUncheckedUpdateManyWithoutByUserNestedInput
  }

  export type HistoriqueCongeUpsertWithWhereUniqueWithoutLeaveInput = {
    where: HistoriqueCongeWhereUniqueInput
    update: XOR<HistoriqueCongeUpdateWithoutLeaveInput, HistoriqueCongeUncheckedUpdateWithoutLeaveInput>
    create: XOR<HistoriqueCongeCreateWithoutLeaveInput, HistoriqueCongeUncheckedCreateWithoutLeaveInput>
  }

  export type HistoriqueCongeUpdateWithWhereUniqueWithoutLeaveInput = {
    where: HistoriqueCongeWhereUniqueInput
    data: XOR<HistoriqueCongeUpdateWithoutLeaveInput, HistoriqueCongeUncheckedUpdateWithoutLeaveInput>
  }

  export type HistoriqueCongeUpdateManyWithWhereWithoutLeaveInput = {
    where: HistoriqueCongeScalarWhereInput
    data: XOR<HistoriqueCongeUpdateManyMutationInput, HistoriqueCongeUncheckedUpdateManyWithoutLeaveInput>
  }

  export type UtilisateursCreateWithoutBalancesInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    address: string
    phone: string
    dateNaissance: Date | string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    sexe?: $Enums.Sexe | null
    createdAt?: Date | string
    leaves?: CongeCreateNestedManyWithoutUserInput
    reviews?: CongeCreateNestedManyWithoutReviewerInput
    LeaveHistory?: HistoriqueCongeCreateNestedManyWithoutByUserInput
  }

  export type UtilisateursUncheckedCreateWithoutBalancesInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    address: string
    phone: string
    dateNaissance: Date | string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    sexe?: $Enums.Sexe | null
    createdAt?: Date | string
    leaves?: CongeUncheckedCreateNestedManyWithoutUserInput
    reviews?: CongeUncheckedCreateNestedManyWithoutReviewerInput
    LeaveHistory?: HistoriqueCongeUncheckedCreateNestedManyWithoutByUserInput
  }

  export type UtilisateursCreateOrConnectWithoutBalancesInput = {
    where: UtilisateursWhereUniqueInput
    create: XOR<UtilisateursCreateWithoutBalancesInput, UtilisateursUncheckedCreateWithoutBalancesInput>
  }

  export type UtilisateursUpsertWithoutBalancesInput = {
    update: XOR<UtilisateursUpdateWithoutBalancesInput, UtilisateursUncheckedUpdateWithoutBalancesInput>
    create: XOR<UtilisateursCreateWithoutBalancesInput, UtilisateursUncheckedCreateWithoutBalancesInput>
    where?: UtilisateursWhereInput
  }

  export type UtilisateursUpdateToOneWithWhereWithoutBalancesInput = {
    where?: UtilisateursWhereInput
    data: XOR<UtilisateursUpdateWithoutBalancesInput, UtilisateursUncheckedUpdateWithoutBalancesInput>
  }

  export type UtilisateursUpdateWithoutBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: CongeUpdateManyWithoutUserNestedInput
    reviews?: CongeUpdateManyWithoutReviewerNestedInput
    LeaveHistory?: HistoriqueCongeUpdateManyWithoutByUserNestedInput
  }

  export type UtilisateursUncheckedUpdateWithoutBalancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: CongeUncheckedUpdateManyWithoutUserNestedInput
    reviews?: CongeUncheckedUpdateManyWithoutReviewerNestedInput
    LeaveHistory?: HistoriqueCongeUncheckedUpdateManyWithoutByUserNestedInput
  }

  export type CongeCreateWithoutHistoryInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    letterUrl?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UtilisateursCreateNestedOneWithoutLeavesInput
    reviewer?: UtilisateursCreateNestedOneWithoutReviewsInput
  }

  export type CongeUncheckedCreateWithoutHistoryInput = {
    id?: string
    userId: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    reviewedBy?: string | null
    letterUrl?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CongeCreateOrConnectWithoutHistoryInput = {
    where: CongeWhereUniqueInput
    create: XOR<CongeCreateWithoutHistoryInput, CongeUncheckedCreateWithoutHistoryInput>
  }

  export type UtilisateursCreateWithoutLeaveHistoryInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    address: string
    phone: string
    dateNaissance: Date | string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    sexe?: $Enums.Sexe | null
    createdAt?: Date | string
    leaves?: CongeCreateNestedManyWithoutUserInput
    balances?: BalanceCongeCreateNestedManyWithoutUserInput
    reviews?: CongeCreateNestedManyWithoutReviewerInput
  }

  export type UtilisateursUncheckedCreateWithoutLeaveHistoryInput = {
    id?: string
    name: string
    email: string
    matricule: string
    password: string
    address: string
    phone: string
    dateNaissance: Date | string
    verificationCode?: string | null
    verificationExpiration?: Date | string | null
    resetToken?: string | null
    resetTokenExpiration?: Date | string | null
    isVerified?: boolean
    lastLogin?: Date | string
    role?: $Enums.Role
    sexe?: $Enums.Sexe | null
    createdAt?: Date | string
    leaves?: CongeUncheckedCreateNestedManyWithoutUserInput
    balances?: BalanceCongeUncheckedCreateNestedManyWithoutUserInput
    reviews?: CongeUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UtilisateursCreateOrConnectWithoutLeaveHistoryInput = {
    where: UtilisateursWhereUniqueInput
    create: XOR<UtilisateursCreateWithoutLeaveHistoryInput, UtilisateursUncheckedCreateWithoutLeaveHistoryInput>
  }

  export type CongeUpsertWithoutHistoryInput = {
    update: XOR<CongeUpdateWithoutHistoryInput, CongeUncheckedUpdateWithoutHistoryInput>
    create: XOR<CongeCreateWithoutHistoryInput, CongeUncheckedCreateWithoutHistoryInput>
    where?: CongeWhereInput
  }

  export type CongeUpdateToOneWithWhereWithoutHistoryInput = {
    where?: CongeWhereInput
    data: XOR<CongeUpdateWithoutHistoryInput, CongeUncheckedUpdateWithoutHistoryInput>
  }

  export type CongeUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    letterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UtilisateursUpdateOneRequiredWithoutLeavesNestedInput
    reviewer?: UtilisateursUpdateOneWithoutReviewsNestedInput
  }

  export type CongeUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    letterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateursUpsertWithoutLeaveHistoryInput = {
    update: XOR<UtilisateursUpdateWithoutLeaveHistoryInput, UtilisateursUncheckedUpdateWithoutLeaveHistoryInput>
    create: XOR<UtilisateursCreateWithoutLeaveHistoryInput, UtilisateursUncheckedCreateWithoutLeaveHistoryInput>
    where?: UtilisateursWhereInput
  }

  export type UtilisateursUpdateToOneWithWhereWithoutLeaveHistoryInput = {
    where?: UtilisateursWhereInput
    data: XOR<UtilisateursUpdateWithoutLeaveHistoryInput, UtilisateursUncheckedUpdateWithoutLeaveHistoryInput>
  }

  export type UtilisateursUpdateWithoutLeaveHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: CongeUpdateManyWithoutUserNestedInput
    balances?: BalanceCongeUpdateManyWithoutUserNestedInput
    reviews?: CongeUpdateManyWithoutReviewerNestedInput
  }

  export type UtilisateursUncheckedUpdateWithoutLeaveHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    matricule?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    verificationCode?: NullableStringFieldUpdateOperationsInput | string | null
    verificationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    sexe?: NullableEnumSexeFieldUpdateOperationsInput | $Enums.Sexe | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leaves?: CongeUncheckedUpdateManyWithoutUserNestedInput
    balances?: BalanceCongeUncheckedUpdateManyWithoutUserNestedInput
    reviews?: CongeUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type CongeCreateManyUserInput = {
    id?: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    reviewedBy?: string | null
    letterUrl?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BalanceCongeCreateManyUserInput = {
    id?: string
    type: $Enums.LeaveType
    year: number
    total: number
    used?: number
  }

  export type CongeCreateManyReviewerInput = {
    id?: string
    userId: string
    type: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    duration: number
    reason: string
    status?: $Enums.LeaveStatus
    letterUrl?: string | null
    comment?: string | null
    documentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HistoriqueCongeCreateManyByUserInput = {
    id?: string
    leaveId: string
    action: $Enums.HistoryAction
    createdAt?: Date | string
    note?: string | null
  }

  export type CongeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    letterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UtilisateursUpdateOneWithoutReviewsNestedInput
    history?: HistoriqueCongeUpdateManyWithoutLeaveNestedInput
  }

  export type CongeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    letterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: HistoriqueCongeUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type CongeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    reviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    letterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceCongeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    year?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceCongeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    year?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceCongeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    year?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    used?: IntFieldUpdateOperationsInput | number
  }

  export type CongeUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    letterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UtilisateursUpdateOneRequiredWithoutLeavesNestedInput
    history?: HistoriqueCongeUpdateManyWithoutLeaveNestedInput
  }

  export type CongeUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    letterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: HistoriqueCongeUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type CongeUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    letterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoriqueCongeUpdateWithoutByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    leave?: CongeUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type HistoriqueCongeUncheckedUpdateWithoutByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoriqueCongeUncheckedUpdateManyWithoutByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoriqueCongeCreateManyLeaveInput = {
    id?: string
    action: $Enums.HistoryAction
    byUserId: string
    createdAt?: Date | string
    note?: string | null
  }

  export type HistoriqueCongeUpdateWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    byUser?: UtilisateursUpdateOneRequiredWithoutLeaveHistoryNestedInput
  }

  export type HistoriqueCongeUncheckedUpdateWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    byUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HistoriqueCongeUncheckedUpdateManyWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    byUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
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