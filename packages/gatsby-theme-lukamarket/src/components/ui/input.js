/**@jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';

const Input = ({
  name,
  required,
  value,
  type,
  placeholder,
  label,
  disabled,
  hidden,
  ariaAutocomplete,
  ariaControls,
  handleChange,
  handleModal,
  handleKeyDown,
  focus,
}) => {
  const [active, setActive] = useState(false);

  return (
    <label
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textTransform: 'uppercase',
        p: '2px 16px',
        background: 'white',
        borderRadius: '4px',
        height: !hidden && '56px',
        mb: 3,
        border: (t) =>
          active
            ? `2px solid ${t.colors.primary}`
            : `2px solid ${t.colors.light[4]}`,
        boxShadow: (t) => active && `inset 0px 0.5px 4px ${t.colors.dark[1]}`,
        transition: '0.4s',
      }}
    >
      <span sx={{ fontSize: 2 }}>{label}</span>
      {type === 'button' && !value && (
        <p sx={{ m: 0, textTransform: 'capitalize' }}>{placeholder}</p>
      )}
      <input
        aria-label={name}
        id={name}
        name={name}
        required={required}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
        onKeyDown={handleKeyDown}
        aria-autocomplete={ariaAutocomplete}
        aria-controls={ariaControls}
        onFocus={
          name === 'address'
            ? handleModal
            : () => {
                focus && focus();
                setActive(true);
              }
        }
        onBlur={() => setActive(false)}
        sx={{
          border: 'transparent',
          bg: 'transparent',
          outline: 'none',
          fontSize: !value && !active ? 1 : 2,
          fontWeight: (value || active) && 700,
          mt: '4px',
          textAlign: 'left',
        }}
      />
    </label>
  );
};

export default Input;
