export function Date(props) {
    return(
        <>
            {props.allign === "top" && (<div style={{margin:20}}>
                <label for="start">Od</label><br/>

                <input type="date" id="start" name="trip-start"
                    value="2023-01-01"
                min="2023-01-01" max="2023-12-31"/>
                </div>)}
            {props.allign === "bottom" && (<div style={{margin:20, position:"absolute", bottom:"12%"}}>
                <label for="start">Do</label><br/>

                <input type="date" id="start" name="trip-start"
                    value="2023-01-01"
                min="2023-01-01" max="2023-12-31"/>
                </div>)}
        </>
    )

       
    
}