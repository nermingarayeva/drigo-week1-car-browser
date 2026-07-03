function CarCard({ car }) {
    return (
      <div className="card">
        <h2>{car.name}</h2>
  
        <p>
          <strong>Type:</strong> {car.type}
        </p>
  
        <p>
          <strong>Transmission:</strong> {car.transmission}
        </p>
  
        <p>
          <strong>Seats:</strong> {car.seats}
        </p>
  
        <p>
          <strong>${car.pricePerDay}</strong> / day
        </p>
  
        <span className={car.available ? "available" : "unavailable"}>
          {car.available ? "Available" : "Unavailable"}
        </span>
      </div>
    );
  }
  
  export default CarCard;