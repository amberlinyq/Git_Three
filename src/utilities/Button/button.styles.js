import styled from 'styled-components';
import { color, space } from 'styled-system';
import { getButtonBorder, getButtonColor, getButtonSize } from './helper';

const ButtonBase = ({ buttonType, buttonSize, children, onClick }) => {
	const padding = getButtonSize(buttonSize);
	const background = getButtonColor(buttonType);
	const border = getButtonBorder(buttonType);

	const StyledButton = styled.button`
		color: black;
		background: ${background};
		padding: ${padding};
		margin: 0;
		font-size: 14px;
		border-radius: 5px;
		border: ${border};
		outline: none;
		display: flex;
		cursor: pointer;
		${space}
	`;

	return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export { ButtonBase };
