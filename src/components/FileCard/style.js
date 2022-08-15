import Heading from "components/Heading"
import Icon from "components/Icon"
import Paragraph from "components/Paragraph"
import Popover from "components/Popover"
import styled from "styled-components";



const StyledFileCard = styled.div``;


const FileIcon = styled(Icon).attrs({
	width: 60,
	height: 60,
})``

const FileName = styled(Heading).attrs({level:2})``

const FileSize = styled(Paragraph).attrs({size:'secondary'})``

const Time = styled(Paragraph).attrs({size:'secondary'})``

const Options = styled(Popover)``



export default StyledFileCard;
export {FileName,FileIcon,FileSize,Time,Options};