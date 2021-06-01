import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AddLink from '../components/AddLink'

const HomeScreen = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1>More than just shorter links</h1>
                <div>Build your brand's recognition and get detailed insights on how your links are performing</div>
                <button>Get Started</button>
            </div>
            <div>
                <div>insert image</div>
            </div>
            <AddLink />
            <h2>Advanced Statistics</h2>
            <div>Track how your links are performing across the web with our advanced statistics dashboard.</div>
            <div>
                <div>
                    <div>circle with logo</div>
                    <h5>Brand Recognition</h5>
                    <div>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</div>
                </div>
                <div>
                    <div>circle with logo</div>
                    <h5>Brand Recognition</h5>
                    <div>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</div>
                </div>
                <div>
                    <div>circle with logo</div>
                    <h5>Brand Recognition</h5>
                    <div>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomeScreen;