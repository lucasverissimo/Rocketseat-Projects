import React from 'react'
import { ColumnType, ColumnContainerDiv } from './style'

export const ColumnContainer: React.FC<ColumnType> = ({
  width,
  widthtablet,
  widthmobile,
  children,
}) => {
  return (
    <ColumnContainerDiv
      width={width}
      widthtablet={widthtablet || 100}
      widthmobile={widthmobile || 100}
    >
      {children}
    </ColumnContainerDiv>
  )
}
