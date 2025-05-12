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
    setHealth(newhealth)
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
                      <Punch onclick={HandleRestart} text="Recommencer" ClassName="btn-restart"/>
                    ):(   <Punch onclick={HandlePunch} text="PUNCH" ClassName="btn-punch"/>
                    )}
                </div>
            </div>
        </>
    )
}