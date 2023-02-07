function Title(props){
    return(
      <div style={{
        textAlign: "center",
        fontWeight: 1.5,
        color: "black",
        backgroundColor: "#04AA6D",
        borderRadius: "22px"
        }}>
        <h1 className="font-extrabold text-2xl subpixel-antialiased">{props.appname}</h1>
      </div>
    );
}

export default Title;