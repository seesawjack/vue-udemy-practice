const data={
    message:'hello!',
    longMessage:'hello world~'
}
const handler={
    set(target,key,value){
        if(key=="message"){
            target.longMessage = value + 'world!!~'
        }
        target.message=value
    }
}

const proxy = new Proxy(data,handler)

console.log("第一次"+proxy.longMessage)

proxy.message = "Hi World~ "

console.log("第二次"+proxy.longMessage)
