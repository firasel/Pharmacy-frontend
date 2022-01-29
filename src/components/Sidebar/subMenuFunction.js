export default function subMenuFunction(state,currentKey){
    const [expandKey, setExpandKey] = state;
    if(expandKey===currentKey){
        setExpandKey(0);
    }else{
        setExpandKey(currentKey);
    }
    console.log(expandKey);
}