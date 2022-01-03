import React, { useState, useContext } from 'react';
import styles from './Auth.module.scss';
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVk } from '@fortawesome/free-brands-svg-icons';
import { AuthFormContext } from '../../context';

import Button from '../../components/UI/Button';
import { Link } from 'react-router-dom';

const Auth = () => {
  const { authForm } = useContext(AuthFormContext);

  return (
    <div className={cn(styles.wrapper)}>
      <div
        className={cn(styles.container, {
          [styles.right__panel__active]: authForm === true,
        })}
        id="container">
        <div className={cn(styles.form__container, styles.sign__up__container)}>
          <form action="#">
            <h1>Регистрация</h1>
            <div className={cn(styles.social__container)}>
              <a href="/" className={cn(styles.social)}>
                <FontAwesomeIcon icon={faVk} />
              </a>
              <a href="/" className={cn(styles.social)}>
                <FontAwesomeIcon icon={faVk} />
              </a>
              <a href="/" className={cn(styles.social)}>
                <FontAwesomeIcon icon={faVk} />
              </a>
            </div>
            <span>или используйте свои данные</span>
            <input type="text" placeholder="Имя" />
            <input type="email" placeholder="Почта" />
            <input type="password" placeholder="Пароль" />
            <Button styles="fill">Продолжить</Button>
          </form>
        </div>
        <div className={cn(styles.form__container, styles.sign__in__container)}>
          <form action="#">
            <h1>Вход</h1>
            <div className={cn(styles.social__container)}>
              <a href="/" className={cn(styles.social)}>
                <FontAwesomeIcon icon={faVk} />
              </a>
              <a href="/" className={cn(styles.social)}>
                <FontAwesomeIcon icon={faVk} />
              </a>
              <a href="/" className={cn(styles.social)}>
                <FontAwesomeIcon icon={faVk} />
              </a>
            </div>
            <span>или используйте свои данные</span>
            <input type="email" placeholder="Почта" />
            <input type="password" placeholder="Пароль" />
            <a href="/">Забыли свой пароль?</a>
            <Button styles="fill">Вход</Button>
          </form>
        </div>
        <div className={cn(styles.overlay__container)}>
          <div className={cn(styles.overlay)}>
            <div className={cn(styles.overlay__panel, styles.overlay__left)}>
              <h1>Добро пожаловать</h1>
              <p>Чтобы оставаться на связи с нами, войдите в свой аккаунт</p>

              <Button type="ghost" route="/login">
                Войти
              </Button>
            </div>
            <div className={cn(styles.overlay__panel, styles.overlay__right)}>
              <h1>Привет друг!</h1>
              <p>Введи свои авторизационные данные и отправляйся в путешествия вместе с нами</p>

              <Button type="ghost" route="/register">
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
