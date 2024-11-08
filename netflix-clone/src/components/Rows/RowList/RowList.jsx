import React from 'react'
import Row from '../Row/Row';
import requests, { requestArr } from '../../../utils/requests';

function RowList() {
  return (
    <>
      {/* <Row
        // isLargeRow={true}
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRatedMovies} />
      <Row title={"TV Show"} fetchUrl={requests.fetchTvShow} /> */}



      {
        requestArr.map((value, index) => {

          const str = value[0].replace(/^fetch/, '')

          return <Row key={index} title={str} fetchUrl={value[1]} />
        })}

    </>
  )
}

export default RowList;