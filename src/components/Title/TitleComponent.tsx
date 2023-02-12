import React from 'react'
import styles from './Title.styles.css'

export interface TitleComponentProps extends CustomizableComponent {
  children: React.ReactNode;
  size?: 1 | 2 | 3;
}

const defaultProps = {
  size: 3
}

const TitleComponent = (props: TitleComponentProps) => {
  switch (props.size) {
    case 1:
      return <h1
        id={props.id || undefined}
        className={`${styles.title} ${styles['title-1']}`}
        style={{ ...props.style }}
        {...props.tagProps}
      >{props.children}</h1>
    case 2:
      return <h2
        id={props.id || undefined}
        className={`${styles.title} ${styles['title-2']}`}
        style={{ ...props.style }}
        {...props.tagProps}
      >{props.children}</h2>
    case 3:
      return <h3
        id={props.id || undefined}
        className={`${styles.title} ${styles['title-3']}`}
        style={{ ...props.style }}
        {...props.tagProps}
      >{props.children}</h3>
    default:
      return <h3
        id={props.id || undefined}
        className={`${styles.title} ${styles['title-3']}`}
        style={{ ...props.style }}
        {...props.tagProps}
      >{props.children}</h3>
  }
}

TitleComponent.defaultProps = defaultProps;

export default TitleComponent