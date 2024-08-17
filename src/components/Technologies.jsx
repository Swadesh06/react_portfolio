import { SiCplusplus } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaMicrochip } from "react-icons/fa";
import { SiOpencv } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import {SiLangchain } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    intial: {y: -10},
    animate: {
        y:[-10,10],
        transition : {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    },

})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">

            <motion.div 
                variants={iconVariants(2)}
                inital="inital"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(6)}
            inital="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4 ">
                <SiTensorflow className="text-7xl text-orange-400"/>
            </motion.div>  
            <motion.div 
            variants={iconVariants(2.5)}
            inital="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPytorch className="text-7xl text-red-700"/>
            </motion.div>    
            <motion.div 
            variants={iconVariants(5)}
            inital="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiLangchain className="text-7xl text-green-500"/>
            </motion.div>   
            <motion.div 
            variants={iconVariants(3)}
            inital="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiOpencv className="text-7xl text-sky-700"/>
            </motion.div>          
            <motion.div 
            variants={iconVariants(5.5)}
            inital="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiCplusplus className="text-7xl text-purple-800"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(3.5)}
            inital="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-orange-700"/>
            </motion.div>
            <motion.div 
            variants={iconVariants(2)}
            inital="inital"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaMicrochip className="text-7xl text-blue-600"/>
            </motion.div>            
        </motion.div>
    </div>
  )
}

export default Technologies