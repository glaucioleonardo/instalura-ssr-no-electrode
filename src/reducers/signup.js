export function signup(state = [], action){
    if(action.type === 'VALIDATE-LOGIN' || action.type === 'VALIDATE-PASSWORD' || 
        action.type === 'VALIDATE-PROFILE') {
        let errorList = [...action.result]
        .reduce((x, y) => x.includes(y) ? x : [...x, y], []);
        errorList.sort();
        state = errorList.sort();
        return errorList;
    }

    if(action.type === 'ERROR-MESSAGE') {
        return [action.message];
    }

    return state;
}