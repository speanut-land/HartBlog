import Subject from './subject';

class State extends Subject {
  state: object;
  constructor() {
    super();
    this.state = {};
  }

  //Update the state,call the update method on each observe
  update(data = {}) {
    this.state = Object.assign(this.state, data);
    this.notify(this.state);
  }

  get() {
    return this.state;
  }
}

export default State;
