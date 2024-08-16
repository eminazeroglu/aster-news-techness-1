import { FiPocket, FiShare } from "react-icons/fi";
import { Link } from "react-router-dom";

function NewsItem() {
    return (
        <article className="p-[17px] relative bg-white rounded-[4px] shadow-[0px_2px_20px_0px_#0000000A]">
            <Link to={'/'} className="absolute top-0 left-0 right-0 z-10 bottom-0"/>
            <div className="flex gap-x-[18px]">
                <div>
                    <h4 className="text-[17px] font-semibold line-clamp-2 mb-[9px]">Battlegrounds Mobile India iOS release date</h4>
                    <p className="line-clamp-4 text-[#6A8193] text-[14px] leading-[22px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium at possimus a sequi consectetur, delectus commodi cum molestiae corporis? Architecto ipsa maxime commodi quos maiores similique at ratione impedit ducimus?</p>
                </div>

                <figure className="aspect-[1/1]">
                    <img className="size-full object-cover" src="https://s3-alpha-sig.figma.com/img/c6e6/6b14/0b20a050ebd24f5d88945e5617785125?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGAzi-ommTFdhiT6321by8WAwzegme1j4KT~rbZezXZzjwf7YGw6uq6wNZagQmG53~vMa22xHLqqYBZk3MaIQf6ggONmUKhrGisH2otWLY2BhWJauXUBrjDbMS13Iw9X1BQB1xZ-RDzj97x9EJiqOFzlXD6K-pn9Emfw1pTRT4ig5Tm4N2MIm1sspM2N64lmmMbuUXwkHH9gPshnFFMc6VF4QilmXrYnZMZU5Z0-JIMZERDxBQhut2GAVr3~610zhIKsQpCtd5nLsNoY-P3Qse3lrv~n8Pj5d~vHMiHLGyTX~ML-O6ykXFc1rKRb-s6WMeR~UPhKkXBhnF0pv7NASQ__" alt="" />
                </figure>
            </div>

            <div className="pt-[20px] flex items-center justify-between">
                <div className="flex items-center gap-x-[10px] text-[#9CABB7] text-[12px]">
                    <span>Radar 52</span>
                    <span className="text-[8px]">●</span>
                    <span>1 hour ago</span>
                </div>

                <div className="flex relative z-[20] items-center gap-x-[25px]">
                    <button className="flex items-center gap-x-[8px] text-[#0768B5] text-[12px]">
                        <span><FiShare/></span>
                        <span>Share</span>
                    </button>

                    <button className="flex items-center gap-x-[8px] text-[#0768B5] text-[12px]">
                        <span><FiPocket/></span>
                        <span>Read Later</span>
                    </button>
                </div>
            </div>
        </article>
    );
}

export default NewsItem;