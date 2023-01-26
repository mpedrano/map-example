export default function Card({
    degree="none",
    colour="white",
    firstName = ""
}) {
    return(
        <div style={{
            backgroundColor: colour, 
            borderRadius: "20px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            width: "600px",
            }}>
            {
                firstName === "Person 1" ? <img src={'icon/riposino.png'} width='100'/> :
                firstName === "Person 2" ? <img src={'icon/polpettina.png'} width='100'/> :
                firstName === "Person 3" ? <img src={'icon/cactusdog.png'} width='100'/> :
                firstName === "Person 4" ? <img src={'icon/tortellino.png'} width='100'/> :
                firstName === "Person 5" ? <img src={'icon/malandrino.png'} width='100'/> :
                <></>
            }
            <div style={{
                fontSize: "large",
                paddingLeft: "20px",
                }}>
                {degree}
            </div>

        </div>
    )
}