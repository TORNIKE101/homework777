import { useState } from 'react'
import './App.css'
import downloadImage from './assets/images/download-removebg-preview.png';


function App() {


    const [selectedRating, setSelectedrating] = useState(null)
    const [submitted, setSubmitted] = useState(false)

    const handleSelect = (rating) => {
        setSelectedrating(rating)
    }
    const handleSubmit = () => {
        if (selectedRating) {
            setSubmitted(true)
        }
    }

    return (
        <div className='main'>
            {!submitted ? (
                <>
                    <div className='rating'>


                        <i class="fa-solid fa-star"></i>
                        <div className='desc'>
                            <h2 className='how'>How did we do?</h2>
                            <p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque ab id tempora? Quisquam, aut ducimus?</p>
                        </div>
                        <div className="buttons">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <button
                                    key={rating}
                                    onClick={() => handleSelect(rating)}
                                    style={{
                                        backgroundColor: selectedRating === rating ? 'orange' : "  rgb(100, 100, 100)   ",
                                        border: "none",
                                        margin: "10px",
                                        padding: "15px 20px",
                                        borderRadius: "50%",
                                        textAlign: "center",
                                        color: "aliceblue",
                                        fontSize: "16px",
                                        fontWeight: "500"
                                    }}>
                                    {rating}
                                </button>

                            ))}
                        </div>

                        <button
                            className='submit'
                            onClick={handleSubmit}
                            disabled={!selectedRating}
                            style={{ backgroundColor: selectedRating ? "orange" : "gray" }}>
                            Submit
                        </button>
                    </div>

                </>
            ) : (
                <>

                    <div className="back">
                        <img
                            src={downloadImage}
                            alt="Thank You"
                            style={{ width: '200px', height: 'auto' }}
                        />
                        <p className='thanks'> you selected {selectedRating} out of 5</p>
                        <h2>Thank you</h2>
                        <p className='random'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta minima nemo accusantium quod cumque minus corrupti. Sint, quibusdam! Autem, ut. </p>
                    </div>
                </>
            )}
        </div>
    )
}
export default App


