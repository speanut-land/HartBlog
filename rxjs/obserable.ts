export class Observable {
  _subscribe;
  constructor(subscribe) {
    this._subscribe = subscribe;
  }

  pipe(...operator) {
    return operator.reduce((prev, fn) => fn(prev), this);
  }

  subscribe(observer) {
    const defaultObserver = {
      next: () => {},
      error: () => {},
      complete: () => {},
    };
    if (typeof observer === "function") {
      return this._subscribe({ ...defaultObserver, next: observer });
    } else {
      return this._subscribe({ ...defaultObserver, ...observer });
    }
  }
}

export function map(fn) {
  return (observer) =>
    new Observable((observer) => {
      observer.subscribe({
        next: (val) => (fn(val) ? observer.next(val) : () => {}),
        error: (err) => observer.error(err),
        complete: observer.complete(),
      });
    });
}

export function tap(fn) {
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

export function take(num) {
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

export function filter(fn) {
  return (observer) =>
    new Observable((observer) => {
      observer.subscribe({
        next: (val) => observer.next(fn(val)),
        complete: () => observer.complete(),
        error: (err) => observer.error(err),
      });
    });
}

export function of(...args) {
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

export function fromEvent(elem, event) {
  return new Observable((observer) => {
    const handler = (e) => observer.next(e);
    elem.addEventListener(event, handler);
    return {
      unsubscribe: () => elem.removeEventListener(event, handler),
    };
  });
}

export function interval(delay) {
  return new Observable((observer) => {
    let index = 0;
    setInterval(() => {
      observer.next(index++);
    }, delay);
  });
}

export function timer(delay) {
  return new Observable((observer) => {
    setTimeout(() => {
      observer.next(0);
    }, delay);
  });
}

export function from(param) {
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
