import React from 'react';
import { default as BootstrapButton } from 'react-bootstrap/Button';
import styles from './button.module.css';

export function Button(props) {
    const { title, onClick, variant } = props;

    return (
        <BootstrapButton classname={styles.Button} title={title} onClick={onClick} variant={variant}>
            {title}
        </BootstrapButton>
    )
}