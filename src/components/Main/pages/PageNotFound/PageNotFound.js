import React from 'react'
import GoBackTo from '../../../GoBackTo'
import { StyledPageContainer, StyledPageTitle, StyledPageContent } from './PageNotFound.style'

export default function PageNotFound() {
  return (
    <StyledPageContainer>
        <StyledPageTitle>404</StyledPageTitle>
        <StyledPageContent>
            Well, this is awkward..
            We couldn't find what you were looking for.
            <GoBackTo path={'/'} text={'Go back to home page'}/>
        </StyledPageContent>
    </StyledPageContainer>
  )
}
