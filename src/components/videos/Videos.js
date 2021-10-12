import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link } from 'react-router-dom'
import UseVideoList from '../../hooks/UseVideoList'
import Video from './Video'
const Videos = () => {
    
    const [page,setPage] = useState(1)
    const {loading,error,videos,hasMore} = UseVideoList(page)

    return (
        <div>
            {videos.length > 0 && 
            (<InfiniteScroll dataLength={videos.length}
             hasMore={hasMore} loader={<h3>Loading...</h3>} next={()=>setPage(page+4)}>
            {
                videos.map(video => 
                video.noq > 0 ? (
                
                 <Video title={video.title} id={video.youtubeID} noq={video.noq} pathname={`/quiz/${video.youtubeID}`} videoTitle={video.title} />
                 
                ) : (
                 <Video key={video.youtubeID} title={video.title} id={video.youtubeID} noq={video.noq} />
            ))}

            </InfiniteScroll>)}
            {!loading && videos.length === 0 && (
                <div> No data found! </div>
            )}
            {error &&  (
                <div> There was an error </div>
            )}
            {loading && <h3>Loading...</h3>}
        </div>
    )
}

export default Videos
