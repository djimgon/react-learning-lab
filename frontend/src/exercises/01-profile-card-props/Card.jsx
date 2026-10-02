export function Card({name, title, bio}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p className="card-title">{title}</p>
      <p className="bio">{bio}</p>
    </div>
  );
}
