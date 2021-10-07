import React,{useState, useRef} from 'react'
import image from '../../assets/images/3.jpg'
import classes from '../../styles/MiniPlayer.module.css'
import ReactPlayer from 'react-player/youtube'
const MiniPlayer = ({id,title}) => {
    const buttonRef = useRef()
    const [status,setStatus] = useState(false)
    const videoUrl = `https://youtube.com/watch?v=${id}`
    const toggleMiniPlayer = () =>{
        if(!status){
            buttonRef.current.classList.remove(classes.floatingBtn)
            setStatus(true)
        }
        else{
            buttonRef.current.classList.add(classes.floatingBtn)
            setStatus(false)
        }
    }
    return (
       <div className={`${classes.miniPlayer} ${classes.floatingBtn}`} 
       ref={buttonRef} onClick={toggleMiniPlayer}>
          <span className={`material-icons-outlined ${classes.open}`}> play_circle_filled </span>
          <span className={`material-icons-outlined ${classes.close}`} onClick={toggleMiniPlayer}> close </span>
          <ReactPlayer url={videoUrl}
           width='300px' height='168px' 
           playing={status} controls className={classes.player} />
          <p>{title}</p>
        </div>
    )
}

export default MiniPlayer
