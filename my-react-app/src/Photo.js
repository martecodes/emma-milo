import './Photo.css'

let num = Math.ceil(Math.random() * 46)
const img = `/photos/${num}.jpg`

function Photo() {
    return (
        <div>
            <h1>Photo of the Day</h1>

            <div className="flex">
                <img src={img} />
            </div>

        </div>
    )
}

export default Photo;