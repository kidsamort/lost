import React, { useContext } from 'react';
import cn from 'classnames';
import styles from './button.module.scss';
import { AuthFormContext } from '../../../context';
import { Link } from 'react-router-dom';

const Button = ({ children, type, route = 'fill', ...props }) => {
  const { authForm, setAuthForm } = useContext(AuthFormContext);

  const PanelActive = (e) => {
    if (type === 'ghost') {
      setAuthForm(!authForm);
    }
  };
  return (
    <Link to={route}>
      <button
        onClick={PanelActive}
        className={cn(styles.button, {
          [styles.ghost]: type === 'ghost',
        })}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
