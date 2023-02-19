import React, { useState } from 'react'
import styles from './SideBar.styles.css'
import ButtonComponent from '../Button/ButtonComponent'

export interface SideBarComponentProps {
  side?: 'left' | 'right'
  sidebar: React.ReactNode
  content: React.ReactNode
  width?: number;
  openButton?: React.ReactNode
  closeButton?: React.ReactNode
}

const defaultProps = {
  side: 'left',
  width: 200
}

const SideBar = (props: SideBarComponentProps) => {
  const [sideBarOpen, setSideBarOpen] = useState(true)

  return (
    <div
      className={styles.sidebarWrapper}
      style={{
        flexDirection: props.side === 'left' ? 'row' : 'row-reverse'
      }}
    >
      <div
        className={styles.sidebar}
        style={{
          display: sideBarOpen ? 'block' : 'none',
          width: sideBarOpen ? `${props.width}px` : 0
        }}
      >
        {sideBarOpen &&
          ((props.closeButton ?
            <button
              onClick={() => setSideBarOpen(false)}
              className={styles.sidebarButton}
              style={{
                float: props.side === 'left' ? 'right' : 'left'
              }}
            >{props.closeButton}</button> :
            <ButtonComponent
              color='dark'
              onClick={() => setSideBarOpen(false)}
              className={styles.sidebarButtonClose}
              small
              style={{
                float: props.side === 'left' ? 'right' : 'left',
                borderTopRightRadius: props.side === 'left' ? '0' : '8px',
                borderBottomRightRadius: props.side === 'left' ? '0' : '8px',
                borderTopLeftRadius: props.side === 'left' ? '8px' : '0',
                borderBottomLeftRadius: props.side === 'left' ? '8px' : '0'
              }}
            >{props.side === 'left' ? '<' : '>'}</ButtonComponent>))}
        {props.sidebar}
      </div>
      <div
        className={styles.content}
        style={{
          width: sideBarOpen ? `calc(100% - ${props.width}px)` : '100vw'
        }}
      >
        {props.content}
      </div>
      {!sideBarOpen &&
        ((props.openButton ?
          <button
            onClick={() => setSideBarOpen(true)}
            className={styles.sidebarButton}
            style={{
              float: props.side === 'left' ? 'right' : 'left',
              position: 'absolute',
              [props.side || defaultProps.side]: '0'
            }}
          >{props.openButton}</button> :
          <ButtonComponent
            color='dark'
            onClick={() => setSideBarOpen(true)}
            className={styles.sidebarButtonOpen}
            small
            style={{
              float: props.side === 'left' ? 'right' : 'left',
              [props.side || defaultProps.side]: '0px',
              position: 'absolute',
              borderTopRightRadius: props.side === 'left' ? '8px' : '0',
              borderBottomRightRadius: props.side === 'left' ? '8px' : '0',
              borderTopLeftRadius: props.side === 'left' ? '0' : '8px',
              borderBottomLeftRadius: props.side === 'left' ? '0' : '8px',
            }}
          >{props.side === 'left' ? '>' : '<'}</ButtonComponent>))}
    </div>
  )
}

SideBar.defaultProps = defaultProps

export default SideBar