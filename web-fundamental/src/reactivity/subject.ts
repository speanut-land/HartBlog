class Subject {
  observers: any[];
  constructor() {
    this.observers = [];
  }

  //Add an observer to this.observers
  addObserver(observer) {
    this.observers.push(observer);
  }

  //Remove an observer to this.observers
  removeObserve(observer) {
    const removeIndex = this.observers.findIndex(obs => obs === observer);
    removeIndex !== -1 && this.observers.splice(removeIndex, 1);
  }

  notify(data) {
    this.observers.length && this.observers.forEach(obs => obs.update(data));
  }
}

export default Subject;
