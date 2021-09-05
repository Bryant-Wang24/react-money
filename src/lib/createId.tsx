
    let id = parseInt(localStorage.getItem('idMax')||'0')
    const createId = ()=>{
        id+=1
        localStorage.setItem('idMax',JSON.stringify(id))
        return id
    }

    export {createId}
