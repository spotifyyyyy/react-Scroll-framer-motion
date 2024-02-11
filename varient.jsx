{/*  Create a folder inside src and past this code*/ }

export const fadeIn = (direction,delay)=>{
return {
    hidden:{
        y:direction ==='up' ? 40 : direction === 'down' ? -40 : 0,
        x:direction ==='left' ? 40 : direction === 'right' ? -40 : 0,

    },
    show:{
        y:0,
        x:0,
        opacity:1,
        transition:{
            type:'tween',
            duration:1.2,
            delay:delay,
            ease:[0.25,0.25,0.25,0.75],

        }
    }
}
}

{/* motion.div-------

 install framer motion and import =====1)import {motion}  from 'framer-motion';  2) import {fadeIn} from '../varient'

  <motion.div

  variants={fadeIn("down",0.3)}
  initial="hidden"
  whileInView={"show"}
  viewport={{once: false,amount:0.7}}
  
   </motion.div>

*/}


