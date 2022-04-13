
export function SmallPersonListItem({person}) {
  const {name, age} = person
  return (
    <div>
      <p>Name: {name}, Age: {age}</p>
    </div>
  );
};