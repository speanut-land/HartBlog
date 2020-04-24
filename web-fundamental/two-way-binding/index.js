function Binding(b) {
  _this = this;
  this.element = b.element;
  this.value = b.object[b.property];
  this.attribute = b.attribute;
  this.valueGetter = function () {
    return _this.value;
  };
  this.valueSetter = function (val) {
    _this.value = val;
    _this.element[_this.attribute] = val;
  };

  Object.defineProperty(b.object, b.property, {
    get: this.valueGetter,
    set: this.valueSetter,
  });
  b.object[b.property] = this.value;

  this.element[this.attribute] = this.value;
}

var obj = { a: 123 };
var myElement = document.getElementById('myDomElement');
new Binding({
  object: obj,
  property: 'a',
  element: myElement,
  attribute: 'innerHTML',
});

obj.a = 234234;
