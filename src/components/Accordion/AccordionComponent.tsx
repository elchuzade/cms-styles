import React, { useState } from 'react'
import { getCustomizableComponentStyles } from '../../utils/styleUtils';
import styles from './Accordion.styles.css'

interface AccordionItemProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionComponentProps extends CustomizableComponentProps {
  children: Array<AccordionItemProps>;
  width?: number;
}

const AccordionComponet = (props: AccordionComponentProps) => {
  const [activeChildIndex, setActiveChildIndex] = useState(0)
  return (
    <div
      id={props.id || undefined}
      className={`${styles.accordion} ${props.className || ''}`}
      style={{
        width: props.width || '',
        ...getCustomizableComponentStyles(props),
        ...props.style
      }}
      {...props.tagProps}
    >
      {props.children?.map((child, i) =>
        <div className={styles.accordionChild}>
          <div
            onClick={() => setActiveChildIndex(i)}
            className={`${styles.accordionChildTitle} ${i === 0 ? styles.accordionTopRadius : ''} ${i === props.children.length - 1 ? styles.accordionBottomRadius : ''}`}
          >
            {child.title}
          </div>
          {activeChildIndex === i &&
            <div
              className={`${styles.accordionChildContent} ${i === props.children.length - 1 ? styles.accordionBottomRadius : ''}`}
            >
              {child.content}
            </div>
          }
        </div>
      )}
    </div>
  )
}

export default AccordionComponet