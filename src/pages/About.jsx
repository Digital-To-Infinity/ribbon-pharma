import PageHeader from '../components/ui/PageHeader';
import Values from '../components/about/Values';
import Timeline from '../components/about/Timeline';
import WhoWeAre from '../components/about/WhoWeAre';
import Compliance from '../components/about/Compliance';
import QualityControl from '../components/about/QualityControl';

const About = () => {
    return (
        <div className="bg-white max-[769px]:-mt-3">
            <PageHeader
                title="About Us"
                subtitle="Dedicated to excellence in pharmaceutical manufacturing and global healthcare."
                image="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            />
            <WhoWeAre />
            <Compliance />
            <Values />
            <QualityControl />
            <Timeline />
        </div>
    );
};

export default About;
