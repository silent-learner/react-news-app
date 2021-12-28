import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

export default function News(props) {

    const [results, setresults] = useState([])
    const [totalresults, settotalresults] = useState(18014)
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(false)
    useEffect(() => {
        props.setprogress(10)
        let url = `${process.env.REACT_APP_NEWS_API__BASE_URL}&category=${props.category}&page=${page}&country=in,us,pk&language=en`
        const fetchData = async () => {
            try {
                const data = await fetch(url)
                props.setprogress(50)
                const json = await data.json()
                const resultswith_image = (json.results).filter(news => {return news.image_url})
                setresults(resultswith_image)
                props.setprogress(100)
                setloading(false)
                settotalresults(json.totalResults)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
        // eslint-disable-next-line
    }, [page])
    const prev = () => {
        setpage(prevpage => prevpage - 1)
    }
    const next = () => {
        setpage(prevpage => prevpage + 1)
    }
    return (
        <div className="container-fluid p-3">
            {!loading && <div className="row justify-content-center">

                {
                    results && results.map(result => {
                        return <div key={result.link} className="col-sm-6 col-lg-3 p-3"><NewsItem imageurl={result.image_url} title={result.title ? result.title.slice(0, 50) : ''} description={result.full_description ? result.full_description.slice(0, 60) : ""} link={result.link} date={result.pubDate} /></div>
                    })
                }
            </div>}
            <button disabled={page <= 1} className="btn btn-outline-light float-start my-3" onClick={prev}>&larr; Previous</button>
            <button disabled={(page + 1) > Math.ceil(totalresults / 10)} className="btn btn-outline-light float-end my-3" onClick={next}>Next &rarr;</button>
        </div>
    )
}
