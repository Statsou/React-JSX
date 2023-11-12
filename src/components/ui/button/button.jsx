import { StyledButton } from './style';

function Button({ children, minWidth, link, className, onClick, ...props }) {
  return (
  <>
  <StyledButton
    $minWidth={minWidth}
    {...(link ? { to: link } : { as: 'button', onClick, type: 'button'})}
    className={className}
    {...props}
  >
    {children}
  </StyledButton>
  </>
  );
}

export default Button;
