// //Ý tưởng: Chuyển số N thành 1 string, sau đó đếm số ký tự của string bằng function .length
// Chỉ tìm đúng với số có ít hơn 20 chữ số ??? ko biết vì sao luôn :C
var N = 213124514;
if ((N < 0)||((N%1)!=0)){ //Kiểm tra xem N có phải là 1 số tự nhiên hay không
     console.log(N + " không phải là một số tự nhiên")
}
 else{
    var sochuso = N.toString().length;
    console.log(sochuso)
}

//Cách 2: Sử dụng hàm logarit thập phân(cơ số 10)
// var sochuso = Math.floor(Math.log(N) / Math.LN10 + 1)
// console.log(sochuso)