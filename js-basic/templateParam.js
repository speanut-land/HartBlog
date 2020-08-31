var template = "{{name}}很厉害，才{{age}}岁";
var context = { name: "bottle", age: "15" };
function render(template, context) {
  return template.replace(/{{(.*?)}}/g, (match, key) => context[key.trim()]);
}
console.log(render(template, context));
