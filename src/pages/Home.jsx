import NewsItem from "../components/ui/news-item";

function Home() {
    return (
        <div>
            <div className="grid grid-cols-2 gap-[20px]">
                <NewsItem/>
                <NewsItem/>
            </div>
        </div>
    );
}

export default Home;