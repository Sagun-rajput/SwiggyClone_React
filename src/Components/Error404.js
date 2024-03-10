import {useRouteError} from 'react-router-dom'

const Error404 = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div className='pd10'>
            <h1>Opppssss!</h1>
            <h2>Error occurred! Please try after some time.</h2>
            <h4><span>{err.status} :</span>{err.statusText}</h4>
            {/* <div style={{"color":"red"}}>{err.error.message}</div> */}
        </div>
    )
}

export default Error404;