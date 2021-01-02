import Netflix from "../NetflixSimple.json";
import SeriesItem from "./SeriesItem";
import Slider from "react-slick";

var getMoviedata = function(itemNumber,itemEnd) {
    var MovieData = [];
    Object.values(Netflix.jsonGraph.videos).forEach((data, key) => {
        if(key < itemNumber){
            return false;
        }
        if(key > (itemNumber + itemEnd)) {
            return false;
        }
        if(data.availability != undefined
            && data.boxarts != undefined){
            MovieData.push({
                avail:Object.values(data.availability)[1],
                img:Object.values(data.boxarts)[0].webp.value.url
            })
        }
    });
    console.log(MovieData)
    return MovieData;
}


const Series = ({ title, rand }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoPlay: true,
        slidesToShow: 5,
        className: "center",
        centerPadding: "60px",
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className="container-fluid seriesList">
            <div className="row">
               
                <h2>{title}</h2>
            </div>
            <div className="_row items__row">
                    <Slider {...settings}>
                        {Object.values(getMoviedata(rand,10)).map((item,data) => 
                            <SeriesItem key={data.toString()} 
                            img={item.img} 
                            avail={item.avail} 
                            eldata={item} />
                        )}
                    </Slider>
            </div>
        </div>
    );
};

export default Series;
