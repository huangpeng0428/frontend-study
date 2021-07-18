//类型别名

type Name = string
type NameResolver = () => string
type NameOrResolver = Name | NameResolver

const getName = (n: NameOrResolver): Name => {
    if(typeof n === 'string') {
        return n
    }
    return n()
 }