import { TITLE } from '../../config/constant';
import { StyledTitle } from './Title.styles';

/**
 * This component renders the title of the page
 */

const Title = () => {
    return (
        <StyledTitle>
            {TITLE}
        </StyledTitle>
    )
}

export default Title;