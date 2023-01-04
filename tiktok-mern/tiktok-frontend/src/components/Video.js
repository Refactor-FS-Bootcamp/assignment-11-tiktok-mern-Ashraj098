import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import './Video.css'

const Video = ({ url, channel, description, song, likes, shares, messages }) => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }
    return (
        <div className="video">
            <video className='video_player'
                loop
                ref={videoRef}
                onClick={handleVideoPress}
                src={url}
            />

            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />

            <VideoSidebar
                likes={likes}
                shares={shares}
                messages={messages}
            />
        </div>
    )
}

export default Video