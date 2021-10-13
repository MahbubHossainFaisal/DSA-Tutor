import React from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../../menu/Menu'
import Videos from '../videos/Videos'

const Home = () => {
    const {id} = useParams()
    return (
        <div>
            <Videos type={id} />
        </div>
    )
}

export default Home
