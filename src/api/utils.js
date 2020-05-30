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

export const getRankIndex = (rankList)=>{
    if(!rankList.length) return;
    for(let i = 0; i < rankList.length; i++){
        console.log(i.tracks);
        if(!rankList[i].tracks || !rankList[i].tracks.length){
            return i;
        }
    }
    throw Error("rankList 请求到的数据都有tracks")
}
export const getName = list=>{
    let str = "";
    list.map((item,index)=>{
        str += index===0? item.name : "/"+item.name;
        return item;
    });
    return str;
}
export const isEmpty = obj=>{
    for(let i in obj){
        return false;
    }
    return true;
}