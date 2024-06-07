import ReactPlayer from 'react-player'

function VideoPlayer(Props) {

    return(
        <div className="VideoPlayer">
            <h1>videoplayer</h1>
            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'></ReactPlayer>
        </div>
    )
}

export default VideoPlayer