/**
 * 第一个TS程序（注释用于代码提示）
 * @param <msg 字符串类型>
 * @return (字符串)
 */
function helloWord(msg) {
    return 'Hello, ' + msg;
}
var msg = 'My First TypeScript';
document.body.innerHTML = helloWord(msg);