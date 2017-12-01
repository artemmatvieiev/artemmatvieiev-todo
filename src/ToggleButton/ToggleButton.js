export const ToggleButton = ({
  clickHandler,
  activeText,
  classToggleButton,
  text,
  toggleText,
  classToggleComponent,
  textToggleComponent,
  active
}) => (
  <div>
    <button
      onClick={() => clickHandler(activeText)}
      className={`${classToggleButton || ''} ${active ? 'active' : ''}`}
    >
      { `${(!active && text) || (active && toggleText) || 'Button'} ` }
    </button>
    <span className={`${classToggleComponent || ''} ${active ? 'active' : ''}`}>
      { textToggleComponent }
    </span>
  </div>
);
