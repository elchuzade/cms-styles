import React from 'react'
import styles from './Title.styles.css'

export interface TitleComponentProps {
  children: React.ReactNode;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

const defaultProps = {
  size: 3
}

const TitleComponent = (props: TitleComponentProps) => {
  switch (props.size) {
    case 1:
      return <h1 className={`${styles.title} ${styles['title-1']}`}>{props.children}</h1>
    case 2:
      return <h2 className={`${styles.title} ${styles['title-2']}`}>{props.children}</h2>
    case 3:
      return <h3 className={`${styles.title} ${styles['title-3']}`}>{props.children}</h3>
    default:
      return <h3 className={`${styles.title} ${styles['title-3']}`}>{props.children}</h3>
  }
}

TitleComponent.defaultProps = defaultProps;

export default TitleComponent