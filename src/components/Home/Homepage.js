import "./Home.css"

/* HOME PAGE - ADD THE ANIMATION */

export const HomePage = () => {

    return <>
        <div className="img-container">
            <img className="camera-image" src={process.env.PUBLIC_URL + "/Images/Camera_Image.jpg"} alt ="photographer" />
        </div>

        <section className="container">
            <div className="row">
                <h1 className="flow-header">
        
                <span>F</span>
                <span>O</span>
                <span>C</span>
                <span>U</span>
                <span>S</span>&nbsp;&nbsp;
             
              
                <span>F</span>
                <span>L</span>
                <span>O</span>
                <span>W</span>
            
            </h1>
            </div>
        </section>

    </>
}