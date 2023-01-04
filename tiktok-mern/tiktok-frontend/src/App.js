import Video from './components/Video'
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from './components/axios'

function App() {
  const [videos, setVideos]= useState([])

  useEffect(() => {
    async function fetchData(){
      const res = await axios.get("/v2/posts")
      setVideos(res.data)
      return res
    }
    fetchData()
  }, [])
  console.log(videos)

  return (
    <div className="app">
      <div className='app_videos'>
        {videos.map(({url, channel, description, song, likes, shares, messages})=> (
            <Video
              key={url}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
            />
        ))}
        {/* <Video
        url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
          channel="AshishRaj098"
          description="This is my window levovo ideapad laptop"
          song="This is the day"
          likes={284}
          shares={54}
          messages={125}
        />
        <Video
        url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
          channel="AshishRaj0982"
          description="This is my window levovo ideapad laptop 2"
          song="This is the day 2"
          likes={2841}
          shares={514}
          messages={1225}
        /> */}
      </div>      
    </div>
  );
}

export default App;

