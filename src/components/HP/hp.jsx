import './hp.css'

export default function Hp(){

    return(
        <div
    className="progress"
    role="progressbar"
    aria-label="Danger example"
    aria-valuenow={100}
    aria-valuemin={0}
    aria-valuemax={100}
    >
    <div className="progress-bar text-bg-danger" style={{ width: "100%" }}>
        100/100     
    </div>
    </div>

    )
}