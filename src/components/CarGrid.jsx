import CarCard from "./CarCard";

function CarGrid({ cars }) {
  return (
    <div className="grid">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

export default CarGrid;