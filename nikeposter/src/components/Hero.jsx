export default function Hero(){
    return (
        <div className="hero container">
            <div className="hero-contant">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shooping">
                    <p>Also Availabel On</p>
                    <div className="brand-icons">
                        <img src="/images/flipkart.png" alt="flipkart-icon"/>
                        <img src="/images/amazon.png" alt="amazon-icon" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="shoe-image"/>
            </div>
        </div>
    )
}