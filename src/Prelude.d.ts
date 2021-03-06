export declare function min<T>(a: T, b: T): T;
export declare function max<T>(a: T, b: T): T;
export declare function curry<A, B, C>(f: (x: A, y: B) => C): (x: A) => (y: B) => C;
export declare function uncurry<A, B, C>(f: (x: A) => (y: B) => C): (x: A, y: B) => C;
export declare function id<A>(x: A): A;
export declare function constant<A, B>(x: A): (x: B) => A;
export declare function flip<A, B, C>(f: (x: A) => (y: B) => C): (y: B) => (x: A) => C;
export declare function flip2<A, B, C>(f: (x: A, y: B) => C): (y: B, x: A) => C;
export declare function compose<A, B, C>(g: (x: B) => C, f: (x: A) => B): (x: A) => C;
export declare function gcd(a: number, b: number): number;
