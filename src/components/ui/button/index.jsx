import classNames from "classnames";

function Button(
    {
        children,
        size = 'md',
        onClick = () => {},
        property = 'primary',
        rounded = false,
        roundedFull = false
    }
) {
    return (
        <button 
        onClick={e => onClick(e)}
        className={classNames(
            [`btn-${property}`, `btn-${size}`],
            {
                'btn': true,
                'btn-rounded': rounded && !roundedFull,
                'btn-rounded-full': !rounded && roundedFull,
            }
        )}>
            {children}
        </button>
    );
}

export default Button;