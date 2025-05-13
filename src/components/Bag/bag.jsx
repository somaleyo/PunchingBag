import './bag.css'
import sac from '/src/assets/images/bag-burst.png'
import sacasse from '/src/assets/images/bag.png'
 const Bag =({isDestroyed ,Scale})=>{


    return(

        <>
            <section id="bag">
                {isDestroyed ? (
                     <img className='bag bag-dead' src={sac} alt="" />
                ) : (
                     <img className='bag bag-life' src={sacasse} alt="" style={{scale: `${Scale}`}} />
               
                )}
               
               
            </section>
        </>
    )
}

export default Bag