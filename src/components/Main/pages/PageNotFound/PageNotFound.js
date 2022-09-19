import { StyledPageContainer, StyledPageTitle } from './PageNotFound.style'
import GoBackTo from '../../../GoBackTo'
import Icon from '../../../Icon'
import React from 'react'

export default function PageNotFound() {  
  return (
    <StyledPageContainer>
        <StyledPageTitle>404</StyledPageTitle>
        <p>
          Well, this is awkward. We could not find what you were looking for.
        </p>
        <GoBackTo path={"/"} text={"Back to home page"} children={<Icon iconType={"goBack"}></Icon>}></GoBackTo>
    </StyledPageContainer>
  )
}
