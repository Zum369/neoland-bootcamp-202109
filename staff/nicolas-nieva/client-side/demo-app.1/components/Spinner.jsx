function Spinner() {
    logger.info('Spinner -> render')

    return <div className="spinner container container--vertical container--full">
        <img className="spinner__image" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" />
    </div>
}