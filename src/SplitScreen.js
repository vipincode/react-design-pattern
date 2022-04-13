import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  /* these value comes from pane props */
  flex: ${props => props.weight}; 
`;

// destructuring property `leftWeight=1, rightWeight=1` thse are defalut value for `weight, 1`
export function SplitScreen({ children, leftWeight=1, rightWeight=1 }) {
  // here children accep multiple component, so declare t array, see in App.js how to pass children
  const [left, right] = children
  return (
    <Container>
      {/* access props props in styled css */}
      <Pane weight={leftWeight}> 
        {left}
      </Pane>
      <Pane weight={rightWeight}>
        {right}
      </Pane>
    </Container>
  );
}
