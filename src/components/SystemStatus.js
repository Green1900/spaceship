function SystemStatus({ status, name }) {
    if (status === "online") {
        return (
            <>
            <h1 style={{color:"green"}}>Sucess</h1>
            <h2>Engine 1 works, {name}</h2>
            </>
        )
    } else {
        return (
            <>
            <h1 style={{color: "red"}}>Access Denied</h1>
            <h2>Error</h2>
            </>
        )
    }
}

export default SystemStatus;
