import data from "../assets/travel-plans.json";
function TravelList() {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id} className="travel-container">
            <div className="img-container">
              <img src={item.image} alt={item.destination} />
            </div>
            <div>
              <h3>
                {item.destination} ({item.days} Days)
              </h3>
              <p>
                <i>{item.description}</i>
              </p>
              <h4>Price: {item.totalCost}$</h4>
              <div className="labels">
                {item.totalCost <= 350 && (
                  <div className="deal">Great Deal</div>
                )}
                {item.totalCost >= 1500 && (
                  <div className="premium">Premium</div>
                )}
                {item.allInclusive && (
                  <div className="all-inclusive">All Inclusive</div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
