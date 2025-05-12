import './hp.css'

const  Hp = ({vie, maxpv})=>{
const pourcentage = (vie/maxpv )* 100;
    return(
        <div
    className="progress"
    role="progressbar"
    aria-label="Danger example"
    aria-valuenow={100}
    aria-valuemin={0}
    aria-valuemax={100}
    >
    <div className="progress-bar text-bg-danger" style={{ width: `${pourcentage}%`}}>
    </div>
    </div>

    )
}
export default  Hp