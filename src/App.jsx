import { useState } from 'react'
import { FaArrowDown, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

function App() {
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click);
  }

 
  



  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });

  const myDate = new Date()
  const currentYear = myDate.getFullYear();


  const calculateAge = () => {
    setTimeout(()=> {
      if ((inputValue, inputValue2, inputValue3).trim() !== "" ) {
        if (!isNaN(inputValue, inputValue2, inputValue3)) { 
          if (inputValue < 31 ) {
            if (inputValue2 > 0 || inputValue2 < 12) {
              if (inputValue3 < currentYear) {
                const birthdateDate = new Date(inputValue3, inputValue2 - 1, inputValue  );
                const currentDate = new Date();

                const ageInMilliseconds = currentDate - birthdateDate;
                const ageDate = new Date(ageInMilliseconds);

                const years = ageDate.getUTCFullYear() - 1970;
                const months = ageDate.getUTCMonth();
                const days = ageDate.getUTCDate() - 1;

                setAge({years, months, days})
                       
              } else {
                //
              }
            } else {
                //alert(" Enter a month between 1 and")
            }
          } else {
           // alert("Enter a number of days between 1 and 31")
          }
        } else {
          //alert("Enter a number")
        }
      } else {
       alert("Fields are empty. Enter a date of birth.")

      }
     
      


    },2000)

    }

  return (
    <>
     <div className={!click ? "overflow-hidden h-screen w-full bg-slate-300 bg-no-repeat bg-cover flex items-center p-10 justify-center" : "overflow-hidden h-screen w-full bg-slate-800 bg-no-repeat bg-cover flex items-center p-10 justify-center"} >
        
        <motion.div 
        initial={{y: "-100" }}
        animate={{y: 0}}
        transition={{ type: "spring", stiffness:120}}
        drag
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileHover={{boxShadow: "0px 0px 14 px rgb(255,255,255)"}}
        className={!click ? "bg-slate-700 rounded-3xl p-8 w-[680px] flex flex-col md:space-y-12 space-y-24 h-[550px] rounded-br-[120px]" : "bg-slate-300 rounded-3xl p-8 w-[680px] flex flex-col md:space-y-12 space-y-24 h-[550px] rounded-br-[120px]"} >
          <div className="flex space-x-4 justify-between">
              <div className="flex relative flex-col space-y-1">
                <h1 className="text-slate-500 peer-focus:text-lime-500 text-lg">Day</h1>
                <input
                id="Day"
                
                onChange={(e) => setInputValue(e.target.value)}
                 type="text"  className="border focus:outline-fuchsia-500 rounded-lg h-[50px] foc w-[80px] pl-2 pr-4 py-2" />
                 { inputValue > 31 ? ( 
                <p className=" absolute top-[76px] right-[0px]left-[] whitespace-nowrap text-red-400  text-xs  text-left">Enter valid days.</p>
                ) : null}
                { isNaN(inputValue) ? ( 
                <p className=" absolute top-[76px] left-[0px] whitespace-nowrap text-red-400  text-xs  text-left"> Enter a number.</p>
                ) : null}

              </div>
              <div className="flex relative flex-col space-y-1">
                <h1 className="text-slate-500 text-lg">Month</h1>
                <input 
                onChange={(e)=> setInputValue2(e.target.value)}
                type="text"  className="border focus:outline-fuchsia-500 rounded-lg h-[50px] w-[80px] pl-2 pr-4 py-2" />
                { inputValue2 === 0 || inputValue2 > 12 ? ( 
                <p className=" absolute top-[76px] left-[0px] whitespace-nowrap text-red-400  text-xs  text-left"> Enter valid month.</p>
                ) : null}
                { isNaN(inputValue2) ? ( 
                <p className=" absolute top-[76px] left-[0px] whitespace-nowrap text-red-400  text-xs  text-left"> Enter a number.</p>
                ) : null}

              </div>
              <div className="flex relative  flex-col space-y-1">
                <h1 className="text-slate-500 text-lg">Year</h1>
                <input 
                onChange={(e)=> setInputValue3(e.target.value)}
                type="text"  className="border focus:outline-fuchsia-500 invalid:outline-red-400  rounded-lg h-[50px] w-[80px] pl-2 pr-4 py-2" />
                { inputValue3 > currentYear ? ( 
                <p className=" absolute top-[76px] left-0 text-[12px] whitespace-nowrap  text-red-400  text-xs  text-left">Enter valid year.</p>
                ) : null}
                { isNaN(inputValue3) ? ( 
                <p className=" absolute top-[76px] left-[0px] whitespace-nowrap text-red-400  text-xs  text-left"> Enter a number.</p>
                ) : null}

              </div>
          </div>
          <div className="flex relative items-center md:justify-end justify-center">
               <button onClick={calculateAge} className="bg-fuchsia-500 absolute p-6 rounded-full active:bg-fuchsia-900 active:animate-pulse"> 
                <FaArrowDown size={14} className="text-white "/>
              </button>
              
              <span className="border-b-4 w-full"></span>
              
          </div>
          <div className="md:px-12 px-6 space-y-8 md:space-y-0 ">
              <div  className="flex space-x-4 md:justify-end  ">
                  <p className="text-4xl   md:text-8xl text-fuchsia-500  font-extrabold italic">{age.years}</p>
                  <motion.h1 className="text-4xl md:text-8xl font-extrabold italic">Years</motion.h1>
              </div>
              <div className="flex space-x-4 md:justify-end " >
                <p className="text-4xl  md:text-8xl text-fuchsia-500 font-extrabold italic">{age.months}</p>
                <motion.h1 className="text-4xl md:text-8xl font-extrabold italic">Months</motion.h1>
              </div>
              <div className="flex space-x-4  md:justify-end md:text-9xl"> 
                <p className="text-4xl  md:text-8xl text-fuchsia-500 font-extrabold italic">{age.days}</p>
                <motion.h1 className="text-4xl md:text-8xl font-extrabold italic">Days</motion.h1>
              </div>
              
              
              
          </div>
        </motion.div>

        <motion.button
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ delay:4}}
        
        onClick={handleClick} className="bg-fuchsia-800 rounded-full p-6 absolute left-2 bottom-2">
            <FaMoon className={!click ? "text-white" : "text-black"} />
        </motion.button>
        
         {}
        
      

    </div>
    </>
  )
}

export default App
