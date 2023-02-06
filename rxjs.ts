import {
  from,
  map,
  toArray,
  scan,
  tap,
  zip,
  interval,
  startWith,
  takeUntil,
  Subject,
  delay,
  timer,
} from "rxjs";

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

const obs$ = from([people1, people2]).pipe(
  map((x) => x.filter((y) => y.name.startsWith("J"))),
  map((x) => x.reduce((acc, cur) => acc + cur.age, 0)),
  toArray()
);

obs$.subscribe((x) => console.log(x)); // [65, 60]

// სავარჯიშო 2

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const signal = timer(6000);

zip(from(number), interval(1000), (val, i) => val)
  .pipe(takeUntil(signal))
  .subscribe((x) => console.log(x));

// სავარჯიშო 3

const numbers = [1, 2, 3, 4, 5];

const obs2$ = from(numbers).pipe(
  tap((x) => console.log(`Emitting number: ${x}`)),
  scan((acc, curr) => acc + curr, 0),
  startWith(0)
);

obs2$.subscribe((sum) => console.log(`The sum is: ${sum}`));
