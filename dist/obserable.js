"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe;
  }
  pipe(...operator) {
    console.log(this);
    return operator.reduce((prev, fn) => fn(prev), this);
  }
  subscribe(observer) {
    const defaultObserver = {
      next: () => {},
      error: () => {},
      complete: () => {},
    };
    if (typeof observer === "function") {
      return this._subscribe(
        Object.assign(Object.assign({}, defaultObserver), { next: observer })
      );
    } else {
      return this._subscribe(
        Object.assign(Object.assign({}, defaultObserver), observer)
      );
    }
  }
}
exports.Observable = Observable;
function map(fn) {
  return (observer) =>
    new Observable((observer) => {
      observer.subscribe({
        next: (val) => (fn(val) ? observer.next(val) : () => {}),
        error: (err) => observer.error(err),
        complete: observer.complete(),
      });
    });
}
exports.map = map;
function tap(fn) {
  return (observable) =>
    new Observable((observer) => {
      return observable.subscribe({
        next: (val) => {
          fn(val);
          observer.next(val);
        },
        error: (err) => observer.error(err),
        complete: () => observer.complete(),
      });
    });
}
exports.tap = tap;
function take(num) {
  return (observable) =>
    new Observable((observer) => {
      let times = 0;
      const subscription = observable.subscribe({
        next: (val) => {
          times++;
          if (num >= times) {
            observer.next(val);
          } else {
            observer.complete();
            setTimeout(() => {
              subscription.unsubscribe();
            });
          }
        },
        error: (err) => observer.error(err),
        complete: () => observer.complete(),
      });
      return subscription;
    });
}
exports.take = take;
function filter(fn) {
  return (observer) =>
    new Observable((observer) => {
      observer.subscribe({
        next: (val) => observer.next(fn(val)),
        complete: () => observer.complete(),
        error: (err) => observer.error(err),
      });
    });
}
exports.filter = filter;
function of(...args) {
  return new Observable((observer) => {
    args.forEach((arg) => {
      observer.next(arg);
    });
    observer.complete();
    return {
      unsubscribe: () => {},
    };
  });
}
exports.of = of;
function fromEvent(elem, event) {
  return new Observable((observer) => {
    const handler = (e) => observer.next(e);
    elem.addEventListener(event, handler);
    return {
      unsubscribe: () => elem.removeEventListener(event, handler),
    };
  });
}
exports.fromEvent = fromEvent;
function interval(delay) {
  return new Observable((observer) => {
    let index = 0;
    setInterval(() => {
      observer.next(index++);
    }, delay);
  });
}
exports.interval = interval;
function timer(delay) {
  return new Observable((observer) => {
    setTimeout(() => {
      observer.next(0);
    }, delay);
  });
}
exports.timer = timer;
function from(param) {
  if (Array.isArray(param)) {
    return new Observable((observer) => {
      param.forEach((val) => observer.next(val));
      observer.complete();
      return {
        unsubscribe: () => {},
      };
    });
  }
  return new Observable((observer) => {
    Promise.resolve(param)
      .then((val) => {
        observer.next(val);
        observer.complete();
      })
      .catch((e) => observer.error(e));
  });
}
exports.from = from;
