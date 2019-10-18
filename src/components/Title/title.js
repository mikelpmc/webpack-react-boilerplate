import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

Title.propTypes = {
  children: PropTypes.node.isRequired
};

export default Title;
