const globalFetchParams = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    // *default, no-cache, reload, force-cache, only-if-cached
    cache: 'no-cache', 
    redirect: 'follow', // manual, *follow, error
}

/**
 * Zapouzdrujici funkce pro fetch, vytvari mezi vrstvu pro komunikace ze serverem
 * @param {*} path 
 * @param {*} params 
 * @returns 
 */
export const authorizedFetch = (path, params) => {
    // allow owerwrite default parameters (globalFetchParams)
    const newParams = {...globalFetchParams, ...params} 
    const overridenPath = '/api/gql'
    return (
        //params.header should be extended with Authorization TOKEN
        fetch(overridenPath, newParams) 
    )
}
