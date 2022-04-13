
export function LargePersonListItem({person}) {
  const {name, age, hairColor, hobbies} = person
  return (
    <>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Hair color: {hairColor}</p>
      <h2>Hobbies</h2>
      <ul>
        {hobbies.map( (hobby, index)=> (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </>
  );
};