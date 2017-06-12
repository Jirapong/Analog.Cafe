// styles
import styled from "styled-components"


// css
export const ListDescription = styled.section`
	
	${ props => props.theme.typography.text.auto }
	${ props => props.theme.size.font.auto }
	
	margin: 		0 auto;
	max-width: 	${ props => props.theme.size.block.column.maxwidth.m };
	position: 	relative;
	z-index: 		${ props => props.theme.layer.up + 1 };
	
	span {
		text-align: 	center;
    display: 			block;
    font-size: 		${ props => props.theme.size.font.make.smaller }em;
    padding: 			${ props => props.theme.size.block.column.safety }em;
    q { background: ${ props => props.theme.color.background }; }
  }
`
export const BrandName = styled.strong`
	${ props => props.theme.typography.title.auto }
	text-align: 	center;
	display: 			block;
	font-size: 		${ props => props.theme.size.font.make.smaller }em;
`