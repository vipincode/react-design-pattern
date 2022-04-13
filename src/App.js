import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({name}) => {
  return <h1 style={{ backgroundColor: 'green' }}>{name}</h1>;
};

const RighttHandComponent = ({message}) => {
  return <h1 style={{ backgroundColor: 'red' }}>{message}</h1>;
};

function App() {
  return (
    <div className="App">
      {/* passing weight props here, 1/3 form */}
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Vipin Singh" />
        <RighttHandComponent message="Hello!" />
      </SplitScreen>
    </div>
  );
}

export default App;
