import {StyledButton, StyledButtonContainer} from './Filter.styled'
import { mapActions, filters } from "../../store/map-slice";
import { useDispatch } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <StyledButtonContainer>
      <StyledButton onClick={() => dispatch(mapActions.filterByTransportType(filters.ALL))}>All</StyledButton>
      <StyledButton onClick={() => dispatch(mapActions.filterByTransportType(filters.A))}>Buses</StyledButton>
      <StyledButton onClick={() => dispatch(mapActions.filterByTransportType(filters.TB))}>TrolleyBusses</StyledButton>
      <StyledButton onClick={() => dispatch(mapActions.filterByTransportType(filters.TM))}>Metro</StyledButton>
    </StyledButtonContainer>
  );
}
