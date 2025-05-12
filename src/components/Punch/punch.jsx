import './punch.css'

const Punch= ({onclick, text, ClassName})=>{
    return(
        <> 
            <div className="btn-holder" onClick={onclick}>
                <button className={`btn ${ClassName}`}>{text}</button>
            </div>
            
        </>

    )

}
export default Punch