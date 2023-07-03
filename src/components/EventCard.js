function EventCard({ name, description, location, address, time, date }) {
  return (
    <div className="Events card">
      <p style={{ maxWidth: "400px" }}>{name} </p>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      <p style={{ maxWidth: "400px" }}>{location} </p>
      <p style={{ maxWidth: "400px" }}>{address} </p>
      <p style={{ maxWidth: "400px" }}>{time} </p>
      <p style={{ maxWidth: "400px" }}>{date} </p>
    </div>
  );
}
export default EventCard;