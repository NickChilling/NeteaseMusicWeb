export const getCount = (count)=>{
    let tenK = Math.floor(count / 1e4);
    let hundB = Math.floor(count / 1e8);
    if(count<0) return;
    if(count<1e4){
        return count;
    } else if (tenK && !hundB) return tenK+"万";
    else{
        return hundB + "亿";
    }
}