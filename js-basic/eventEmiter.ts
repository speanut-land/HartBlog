class EventEmitter {
  cache = new Map<string, any[]>();
  on(keyword, fn: () => void) {
    if (this.cache.has(keyword)) {
      this.cache.get(keyword).push(fn);
    } else {
      this.cache.set(keyword, [fn]);
    }
  }
  once(keyword, fn) {
    function onceFn(...args) {
      fn.apply(null, args);
      this.removeListener(event, fn);
  }
    if (this.cache.has(keyword)) {
      this.cache.get(keyword).push(fn);
    } else {
      this.cache.set(keyword, [fn]);
    }
  }
}
