import Hero from '../components/home/Hero';
// import Stats from '../components/home/Stats';
import Features from '../components/home/Features';
import Specializations from '../components/home/Specializations';
import Showcase from '../components/home/Showcase';
import Sustainability from '../components/home/Sustainability';
import FeaturedProducts from '../components/home/FeaturedProducts';
import OurStory from '../components/home/OurStory';

const Home = () => {
    return (
        <div className="bg-white">
            <Hero />
            <OurStory />
            {/* <Stats /> */}
            <FeaturedProducts />
            <Features />
            <Specializations />
            <Showcase />
            <Sustainability />
        </div>
    );
};

export default Home;
