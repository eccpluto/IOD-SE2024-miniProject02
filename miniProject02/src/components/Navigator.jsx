import ReactPlayer from 'react-player'

/**
 * 
 * @param {Object} Props 
 * @returns The Navigator component, this encapsulates several child components that allow the user to Navigate
 * queries.
 */
function Navigator({query}, children) {

    return (
        <div className="Navigator">
            <h1>videoplayer</h1>
            <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ'></ReactPlayer>
        </div>
    )
}

export default Navigator