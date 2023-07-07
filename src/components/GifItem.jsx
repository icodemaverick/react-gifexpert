export const GifItem = ({title, url}) => {

    return (
        <div className="card">
            <img src={url} alr={title} />
            <p>{title}</p>
        </div>
    )
}
