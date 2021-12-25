import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

export default function News(props) {

    const [results, setresults] = useState([])
    const [totalresults, settotalresults] = useState(0)
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(true)
    useEffect(() => {
        let c = (p) => props.setprogress(p)
        c(5)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.API_KEY}&page=1&pageSize=12`
        const fetchData = async () => {
            try {
                const data = await fetch(url)
                c(50)
                const json = await data.json()
                c(100)
                setresults(json.articles)
                setloading(false)
                settotalresults(json.totalResults)
                setpage(1)

            } catch (error) {
                console.log(error)
            }
            // props.setprogress(100)
        }
        fetchData()
        // eslint-disable-next-line
    },[])
    const prev = () => {
        setloading(true)
        let c = (p) => props.setprogress(p)
        c(5)
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.API_KEY}&page=${page - 1}&pageSize=12`
        const fetchData = async () => {
            try {
                const data = await fetch(url)
                c(30)
                const json = await data.json()
                c(50)
                setresults(json.articles)
                c(70)
                setloading(false)
                setpage((page - 1))
                c(100)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }
    const next = () => {
        // console.log(totalresults)
        setloading(true)
        let c = (p) => props.setprogress(p)
        c(5)
        const fetchData = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.API_KEY}&page=${page + 1}&pageSize=12`
            try {
                const data = await fetch(url)
                c(30)
                const json = await data.json()
                c(50)
                setresults(json.articles)
                c(70)
                setloading(false)
                setpage(page + 1)
                c(100)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()


    }
    return (
        <div className="container-md my-3">
           {!loading && <div className="row">

                {
                    results && results.map(result => {
                        return <div key={result.url} className="col-sm-6 col-lg-3 p-3"><NewsItem imageurl={result.urlToImage} title={result.title ? result.title.slice(0, 50) : ''} description={result.description ? result.description.slice(0, 60) : ""} link={result.url} date={result.publishedAt} /></div>
                    })
                }
            </div>}
            <button disabled={page <= 1} className="btn btn-outline-success float-start my-3" onClick={prev}>&larr; Previous</button>
            <button disabled={(page + 1) > Math.ceil(totalresults / 20)} className="btn btn-outline-success float-end my-3" onClick={next}>Next &rarr;</button>
        </div>
    )
}
