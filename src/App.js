import { RegularList } from './RegularList';
import { SmallPersonListItem } from './people/SmallPersonListItem';
import { LargePersonListItem } from './people/LargePersonListItem';

const people = [
  {
    name: 'Rajesh',
    age: 30,
    hairColor: '',
    hobbies: ['swimming', 'bicycling', 'video games'],
  },
  {
    name: 'Vimal',
    age: 54,
    hairColor: '',
    hobbies: ['reading', 'bicycling', 'golf'],
  },
  {
    name: 'Ajay',
    age: 30,
    hairColor: '',
    hobbies: ['mathmatics', 'travelling', 'movies'],
  },
]

const products = [
  {
    name: 'Flat-Screen TV',
    price: '$300',
    descripion: 'Huge LCD screen, a great deal',
    rating: 4.5,
  },
  {
    name: 'Basketball',
    price: '$10',
    descripion: 'Just like the pros use',
    rating: 3.6,
  },
  {
    name: 'Running shooes',
    price: '$120',
    descripion: 'State-of-the-technology for optimum running',
    rating: 4.2,
  },
]

function App() {
  return (
    <>
     <RegularList items={people} resourceName="person" itemComponent={SmallPersonListItem} />
     <RegularList items={people} resourceName="person" itemComponent={LargePersonListItem} />
    </>
  );
}

export default App;
