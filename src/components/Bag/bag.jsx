import './bag.css'

 const Bag =({isDestroyed})=>{


    return(

        <>
            <section id="bag">
                {isDestroyed ? (
                     <img className='bag bag-dead' src="../../src/assets/images/bag-burst.png" alt="" />
                ) : (
                     <img className='bag bag-life' src="../../src/assets/images/bag.png" alt="" />
               
                )}
               
               
            </section>
        </>
    )
}

export default Bag