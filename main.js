const x2 = parseInt(prompt('Nhập x2'));
const x = parseInt(prompt('Nhập x'));
const c = parseInt(prompt('Nhập c'));

try {
    if (x2 == "" || x == "" || c == "") throw 'Không được bỏ trống';
    if (isNaN(x2) || isNaN(x) || isNaN(c)) throw 'Vui lòng nhập số';
    var resultMessage = caculate(x2, x, c);
    console.log(resultMessage);

} catch (error) {
    console.log(error);
}


function caculate(x, y, z) {
    if (x == 0) {
        return "phương trình có nghiệm là " + (-c / y)
    }
    var delta = Math.pow(y, 2) - (4 * x * z);
    if (delta < 0) {
        return "Phương trình vô nghiệm";
    }
    else if (delta == 0) {
        return "Phương trình có nghiệm kép x1=x2= " + (-y / (2 ^ x));
    }
    else {
        var x1 = (-y - Math.sqrt(delta)) / (2 * x);
        var x2 = (-y + Math.sqrt(delta)) / (2 * x);
        return "Phương trình có 2 nghiệm phân biệt x1= " + x1 + ", x2= " + x2;
    }
}
