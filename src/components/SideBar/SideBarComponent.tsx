import React, { useState, useEffect } from 'react'
import styles from './SideBar.styles.css'

export interface SideBarComponentProps {
  side?: 'left' | 'right'
  sidebar: React.ReactNode
  content: React.ReactNode
  width?: number;
  button?: React.ReactNode
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
      {props.button ||
        <button
          className={styles.sidebarButton}
          onClick={() => setSideBarOpen(!sideBarOpen)}
          style={{
            [props.side || defaultProps.side]: sideBarOpen ? props.width : 0
          }}
        >
          {sideBarOpen ? 'Close' : 'Open'}
        </button>}
    </div>
  )
}

SideBar.defaultProps = defaultProps

export default SideBar