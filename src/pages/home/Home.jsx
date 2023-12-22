import Banner from "./banner/Banner";
import WhoCanUse from "./whoCanUse/WhoCanUse";


const Home = () => {
    return (
        <>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <WhoCanUse></WhoCanUse>
            </section>
        </>
    );
};

export default Home;