
import { createContext, useRef,useEffect, useState } from "react";
import { songsData } from "../assets/assets";
export const Playercontext = createContext();

const playercontextprovider = ({children})=>{
    const audiaref = useRef();
    const seekbgref = useRef();
    const seekbarref = useRef();
    const [track,settrack] = useState(songsData[0])
    const [playstatus, setplaystatus] = useState(false)
    const [time, settime] = useState({
        currenttime:{
            second:0,
            minute:0,
        },
        totaltime:{
            second:0, 
            minute:0,
        }
    })
    const prev = async ()=>{
        if(track.id>0){
          await settrack(songsData[track.id-1])
          audiaref.current.play();
          setplaystatus(true)
        }
        
    }
    const next = async ()=>{
        if(track.id < songsData.length-1){
          await settrack(songsData[track.id+1])
          audiaref.current.play();
          setplaystatus(true)
        }
        
    }
     const play = ()=>{
        audiaref.current.play();
        setplaystatus(true)
    }
    const pause = ()=>{
        audiaref.current.pause();
        setplaystatus(false)
    }
    const playwithid = async (id)=>{
             await settrack(songsData[id])
             await audiaref.current.play();
             setplaystatus(true)
    } 
    const seeksong = async (e)=>{
          audiaref.current.currentTime = ((e.nativeEvent.offsetX/seekbgref.current.offsetWidth) * audiaref.current.duration)
    }
  useEffect(() => {
         setTimeout(() => {
             audiaref.current.ontimeupdate = ()=>{
                seekbarref.current.style.width = (Math.floor(audiaref.current.currentTime/audiaref.current.duration * 100 )) + "%" ;
                settime({
                    currenttime:{
                        second:Math.floor(audiaref.current.currentTime % 60),
                        minute:Math.floor(audiaref.current.currentTime / 60),
                    },
                    totaltime:{
                        second:Math.floor(audiaref.current.duration % 60),
                        minute:Math.floor(audiaref.current.duration / 60),
                    }
                })
             }
         }, 1000);
  }, [audiaref])
  
    const contextvalue = {
             audiaref,
             seekbgref,
             seekbarref,
             track,
             settrack,
             playstatus,setplaystatus,
             time,settime,
             play,pause,
             prev,next,
             playwithid,
             seeksong,
    }
   
           return (
            <Playercontext.Provider value={contextvalue}>
         {children}
            </Playercontext.Provider>
           )
}
export default playercontextprovider;