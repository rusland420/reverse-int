module.exports = function reverse (n) {
    let nn=Math.abs(n)
    let x=nn.toString();
    const arr=[...x];
    const arrRev=arr.reverse();
    console.log(arrRev);
    let str='';
    for(let i=0;i<arrRev.length;i++){
        str+=arrRev[i]; 
    }
    const result=Number(str);
    console.log(result);
    return result;
}
