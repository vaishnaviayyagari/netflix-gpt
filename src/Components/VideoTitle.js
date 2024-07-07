const VideoTitle = ({title,overview}) => {

    return(
        <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black ">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-3/12">{overview}</p>
            <div className="flex justify-around w-3/12 pt-20">
                <button className="bg-white text-black p-4 px-14 rounded-lg text-xl hover:bg-opacity-80">
                    ▶
                    Play</button>
                <button className="bg-gray-500 text-white p-4 px-14 rounded-lg text-xl opacity-50">
                    ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;