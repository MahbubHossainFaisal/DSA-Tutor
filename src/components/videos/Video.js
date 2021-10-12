import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../../styles/Video.module.css'
import Button from '../Form/Button'

const Video = ({title,id,noq,pathname,videoTitle}) => {
    return (
       
          
            <div className={classes.video}>
              <img src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
              <p>{title}</p>
              <div className={classes.qmeta}>
                <p>{noq} Questions</p>
                <p>Total points : {noq*5}</p>
             
              </div>
              <div className={classes.buttonParent}>

                  <Link to={{ 
                    pathname: pathname,
                    state: {
                        videoTitle: videoTitle
                    }
                 }}> <button className={classes.button}>Give Quiz</button> 
                </Link>
                
               
                
                  <a href={`https://youtube.com/watch?v=${id}`}>
                   <button className={classes.button}>watch video</button>
                </a>
                
              </div>
             
            </div>
      
        
    )
}

export default Video
