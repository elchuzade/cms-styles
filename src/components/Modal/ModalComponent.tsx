import React from 'react'
import { getCustomizableComponentStyles } from '../../utils/styleUtils'
import styles from './Modal.styles.css'

export interface ModalComponentProps extends CustomizableComponentProps {
  children: React.ReactNode
  onClose: () => void
  opened: boolean
  width?: number
  hideCloseButton?: boolean
}

const ModalComponent = (props: ModalComponentProps) => {
  if (!props.opened) return null

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modalCover} onClick={props.onClose} />
      <div
        id={props.id || undefined}
        className={`${styles.modal} ${props.className || ''}`}
        style={{
          width: props.width ? `${props.width}px` : '400px',
          ...getCustomizableComponentStyles(props),
          ...props.style
        }}
        {...props.tagProps}
      >
        {!props.hideCloseButton && <button className={styles.modalCloseButton} onClick={props.onClose}>X</button>}
        {props.children}
      </div>
    </div>
  )
}

export default ModalComponent