console.log("Java JavaScript PHP C++ C".match(/Java(Script)?|C(\+\+)?|PHP/g));

let str = `
  [b]hello![/b]
  [quote]
    [url]http://google.com[/url]
  [/quote]
`;
let regexp = /\[(b|url|quote)\][\s\S]*?\[\/\1\]/g;
console.log(str.match(regexp));

let reg = /<(style|style\s.*)>/g; // /<style(>|\s.*?>)/g
console.log('<style> <styler> <style test="...">'.match(reg));

console.log("0 12 -5 123 -18".match(/(?<!-)(?<!\d)\d+/g));
