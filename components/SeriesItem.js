import SeriesItemFooter from './SeriesItemFooter'
const SeriesItem = (props) => {
    return (
        <div className="__parent_Items">
            <div className="Items">
                <a>
                    <img src={props.img} /> 
                </a>
                <SeriesItemFooter 
                es={props.avail}
                yas="18"
                />
            </div>
        </div>
    );
  };
  
  export default SeriesItem;
  