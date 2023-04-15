import React, {useEffect, useState} from 'react'
import axios from "axios";
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNew = async ()=> {
        var options = {
            method: 'GET',
            url: 'https://api.newscatcherapi.com/v2/search',
            params: {q: 'Bitcoin', lang: 'en', sort_by: 'relevancy', page: '${page}'},
            headers: {
              'x-api-key': 'L2byAO7CcU58d7baRDGa-r4oCe_G32sc5rWc39m2lDY'
            }
          };
          axios.reponse(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        

    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - Daily-Dose News`;
        updateNew(); 
        // eslint-disable-next-line
    }, [])
 
    const fetchMoreData = async () => {   
        // const url = `https://api.newscatcherapi.com/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=L2byAO7CcU58d7baRDGa-r4oCe_G32sc5rWc39m2lDY&page=${page+1}&pageSize=${props.pageSize}`;
        const url = `curl -XGET 'https://api.newscatcherapi.com/v2/search?q=Tesla' -H 'x-api-key: L2byAO7CcU58d7baRDGa-r4oCe_G32sc5rWc39m2lDY'`
        setPage(page+1) 
        let data = await fetch(url)
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className={`text-center bg-${props.mode}`} style={{ margin: '35px 0px',marginTop:'90px', color : props.mode === 'dark'?'white':'yellow' }}>Daily-Dose News - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0,50) : ""} description={element.description ? element.description.slice(0,75) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>

            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 15,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News