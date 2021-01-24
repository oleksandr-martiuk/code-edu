var f = function() {
    this.x = 5;
    (function() {
        this.x = 3;
    })();
    console.log(this.x);
};

var obj = {x: 4, m: function() {
    console.log(this.x);
}};


f();
// 3
new f();
// 5
obj.m();
// 4
new obj.m();
// undefined
f.call(f);
// 5
obj.m.call(f);
// 5
