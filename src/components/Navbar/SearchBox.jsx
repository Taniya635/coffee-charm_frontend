import { CgSearch } from 'react-icons/cg';
import styled from 'styled-components';

const ResponsiveBox = styled.div`
  display: flex;
  border: 1px solid grey;
  border-radius: 0.5rem;
  @media (max-width: 600px) {
    // flex-direction: column;
    align-items: stretch;
  }
`;

const ResponsiveInput = styled.input`
  flex: 1;
  border-radius: 0;
  border: none;
  border-right: 1px solid grey;
  @media (max-width: 600px) {
    border-right: none;
    border-bottom: 1px solid grey;
    border-radius: 0.5rem;
  }
`;

const ResponsiveButton = styled.button`
  border-left: transparent;
  border-left-radius: 0;
  @media (max-width: 600px) {
    border-radius: 0.5rem;
    // border-top-right-radius: 0.5rem;
    // border-left: 1px solid grey;
    // border-top: none;
    width: 100%;
  }
`;

const SearchBox = () => {
  return (
    <ResponsiveBox ml={60} w={'400px'}>
      <ResponsiveInput type="text" placeholder="search..." />
      <ResponsiveButton>
        <CgSearch fontSize="25px" />
      </ResponsiveButton>
    </ResponsiveBox>
  );
};
export default SearchBox
