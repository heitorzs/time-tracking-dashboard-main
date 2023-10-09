import React from 'react'

function TimeBox({ children, time }) {
    let timeData = ''
    let last = ''
    if (time === 'daily') {
        timeData = children.daily;
        last = 'Last day'
    } else if (time === 'weekly') {
        timeData = children.weekly
        last = 'Last week'

    } else if (time === 'monthly') {
        timeData = children.monthly;
        last = 'Last month'
    } else {
        return
    }

    return (
        <>
            <div className={`header-${children.title}`}>
                <div className='img-box'>
                    <div></div>
                    <img className='img-func' src={children.img} alt='time' />
                </div>
                <div className='content'>
                    <div className='title'>
                        {children.title}
                        <p>...</p>
                    </div>
                    <h1>{timeData.now}</h1>
                    <p>{last} - {timeData.previous}</p>
                </div>

            </div>
        </>
    )
}

export default TimeBox