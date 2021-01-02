const SeriesItemFooter = (props) => {
    return (
        <footer>
        <div className="row avail">
            <div className="col-auto green">
                %{props.es} Eşleşme
            </div>
            <div className="col-auto age">{props.yas}</div>
        </div>
        <div className="row ctg">
            <div className="">Sürükleyici</div>
            <div className="">Heyecan Verici</div>
            <div className="">Korku</div>
        </div>
        </footer>
    );
  };
  
  export default SeriesItemFooter;
  