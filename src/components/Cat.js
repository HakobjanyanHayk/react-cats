import React, {useState, useEffect} from "react"
import axios from "axios"
import { Row } from "react-bootstrap"
import ActionBtn from "./ActionBtn"

const Cat = () => {
    const [urls, setUrls] = useState([])
    const [liked, setLiked] = useState([])
    const types = [
        {
            type: 1,
            label: 'Like'
        },
        {
            type: 0,
            label: "Dislike",
        }
    ]

    useEffect(() => {
        setLiked(JSON.parse(localStorage.getItem('liked')) || [])
        setUrls(JSON.parse(localStorage.getItem('urls')) || [])

        if(!JSON.parse(localStorage.getItem('urls'))) getCat(15)
        else if(JSON.parse(localStorage.getItem('urls')).length < 15) getCat(15 - urls.length)
    }, [])

    useEffect(() => {
        localStorage.setItem('urls', JSON.stringify(urls))
    }, [urls])

    useEffect(() => {
        console.log('liked changed', liked);
        localStorage.setItem('liked', JSON.stringify(liked))
    }, [liked])

    const getCat = (count = 1) => {
        for(let i =0; i<count; i++) {
            axios.get('https://api.thecatapi.com/v1/images/search')
                .then((res) => {
                    setUrls(oldUrls => [...oldUrls, res.data[0].url]);
                })
        }
    }
    const click = (type) => {
        const urlsCopy = [...urls]
        const likedImage = urlsCopy.splice(0, 1)
        setUrls(urlsCopy);
        getCat()

        if (type === 1) {
            setLiked(oldLiked => [...oldLiked, likedImage[0]])
        }
    }

    return (
        <>
            <div className="cat-holder">
                {urls.map((url, index) =>
                    <img src={url} style={{zIndex : 15-index}} key={url}/>
                )}
            </div>
            <div className="actions-holder mt-3">
                <Row>
                    {types.map((type) =>
                        <ActionBtn key={type.type} type={type.type} click={click}/>
                    )}
                </Row>
            </div>
        </>
    )
}

export default Cat