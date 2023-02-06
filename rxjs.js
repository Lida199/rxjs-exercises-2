"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
// სავარჯიშო 1
const people1 = [
    { name: "John", age: 30 },
    { name: "Tom", age: 25 },
    { name: "Jim", age: 35 },
];
const people2 = [
    { name: "Jill", age: 28 },
    { name: "Jack", age: 32 },
    { name: "Kate", age: 40 },
];
const obs$ = (0, rxjs_1.from)([people1, people2]).pipe((0, rxjs_1.map)((x) => x.filter((y) => y.name.startsWith("J"))), (0, rxjs_1.map)((x) => x.reduce((acc, cur) => acc + cur.age, 0)), (0, rxjs_1.toArray)());
obs$.subscribe((x) => console.log(x)); // [65, 60]
// სავარჯიშო 2
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const signal = (0, rxjs_1.timer)(6000);
(0, rxjs_1.zip)((0, rxjs_1.from)(number), (0, rxjs_1.interval)(1000), (val, i) => val)
    .pipe((0, rxjs_1.takeUntil)(signal))
    .subscribe((x) => console.log(x));
// სავარჯიშო 3
const numbers = [1, 2, 3, 4, 5];
const obs2$ = (0, rxjs_1.from)(numbers).pipe((0, rxjs_1.tap)((x) => console.log(`Emitting number: ${x}`)), (0, rxjs_1.scan)((acc, curr) => acc + curr, 0), (0, rxjs_1.startWith)(0));
obs2$.subscribe((sum) => console.log(`The sum is: ${sum}`));
