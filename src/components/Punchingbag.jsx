import { useState } from "react";
import Hp from "./HP/hp";
import Bag from "./Bag/bag";
import Punch from "./Punch/punch";

export default function Punchingbag(){
const maxhealth = 100
const [health, setHealth] = useState(maxhealth)
const[isDestroyed,setIsDestroyed] = useState(false)

const HandlePunch = () =>{
    const newhealth = Math.max(0,health-10)
    if (newhealth === 0){
        setIsDestroyed(true)
    }
}

const HandleRestart = ()=>{
    setHealth(maxhealth)
    setIsDestroyed(false)

}
    return(
        <>
            <div  className="text-white">
                <h1>Sac de frappe</h1>
                <Bag isDestroyed={isDestroyed} />
                <div className="w-full mb-4">
                    <div className="textvie flex justify-between mb-1">
                    <span className="text-sm font-medium">Points de vie:</span>
                    <span className="pv text-sm font-medium ">{health}/{maxhealth} PV</span>
                    </div>
                    <Hp vie={health} maxpv={maxhealth} />
                </div>
                <div>
                    {isDestroyed ?(
                        <Punch onclick={HandlePunch} text="PUNCH" className="btn-punch"/>
                    ):( <Punch onclick={HandleRestart} text="Recommencer" className="btn-restart"/>
                    )}
                </div>
            </div>
        </>
    )
}