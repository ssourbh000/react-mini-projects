import React from 'react'

function Netflix(props) {
    return (
        <div className='cards'>
            <div className='card'>
                <img src={props.imgsrc} alt="darkpic" className='card-image' />
                <div className='description'>
                    <span className='card_category'> {props.title} </span>
                    <h3 className='card-title'> {props.sname} </h3>
                    <a href={props.link} target='_blank'>
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Netflix
