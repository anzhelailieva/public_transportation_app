import {StyledButton, StyledButtonContainer} from './Filter.styled'
import {FILTERS} from '../../shared/CONSTANT'
import { mapActions } from "../../store/map-slice";
import { useDispatch } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();
  return (
    <StyledButtonContainer>
      <StyledButton onClick={() => dispatch(mapActions.filterByTransportType(FILTERS.ALL))}>Всички линии</StyledButton>
      <StyledButton onClick={() => dispatch(mapActions.filterByTransportType(FILTERS.A))}>Автобус</StyledButton>
      <StyledButton onClick={() => dispatch(mapActions.filterByTransportType(FILTERS.TB))}>Тролей</StyledButton>
      <StyledButton onClick={() => dispatch(mapActions.filterByTransportType(FILTERS.TM))}>Метро</StyledButton>
    </StyledButtonContainer>
  );
}
