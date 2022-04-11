import { SplitScreen } from './SplitScreen';

const LeftHandComponent = () => {
  return <h1 style={{ backgroundColor: 'green' }}>Left!</h1>;
};

const RighttHandComponent = () => {
  return <h1 style={{ backgroundColor: 'red' }}>Right!</h1>;
};

function App() {
  return (
    <div className="App">
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent />
        <RighttHandComponent />
      </SplitScreen>
    </div>
  );
}

export default App;
