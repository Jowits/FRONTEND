import React from 'react'

const PageNotFound = ({history}) => {
    setTimeout(() => history.push("/"), 3000)
    return(
        <h1>PageNotFound</h1>
    )
}
export default PageNotFound