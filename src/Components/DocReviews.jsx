import React from 'react'

function DocReviews({ reviews }) {
    return (
        <div>
            <div>
                {reviews && Array.isArray(reviews) ?
                    (
                        reviews.map((item, index) => (
                            <div key={index}>
                                <br />
                                <p><strong>" {item.patient_name} " ( {item.date} )</strong></p>
                                <p>- {item.comments}</p>
                                <p>&nbsp; Rating : <i class="fa-solid fa-star" style={{ color: "#E4A11B" }}></i> {item.rating}</p>
                            </div>
                        ))
                    )
                    :
                    (
                        <p>No reviews available</p>
                    )}
            </div>
        </div>
    )
}

export default DocReviews