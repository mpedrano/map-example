export default function Banner({
    name = "none",
    department ="none",
    position = "none",
    colour = "white"
}) {
    return(
        <div style={{
            backgroundColor: colour, 
            borderRadius: "20px",
            width: "300px",
            textAlign: "center"
        }}>
            {
                name === "Sandy" ? <img src={'icon/sandy.png'} width="300"/> :
                name === "Dusty" ? <img src={'icon/dusty.png'} width="300"/> :
                name === "Cactus Rocker" ? <img src={'icon/cactusrocker.png'} width="300" /> :
                <></>                                
            }
            
            <div style={{
                fontSize: "x-large",
                fontWeight: "bold",
                padding: "10px"
                }}>
                {name}
            </div>

            <div style={{
                fontSize: "large",
                padding: "20px"
                }}>
                {department}
            </div>

            <div style={{
                fontSize: "large",
                paddingBottom: "30px"
                }}>
                {position}
            </div>
        </div>
    )
 }