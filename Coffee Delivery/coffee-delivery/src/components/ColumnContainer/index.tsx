import React from 'react'
import { ColumnType, ColumnContainerDiv } from './style'

export const ColumnContainer: React.FC<ColumnType> = ({
  width,
  widthTablet,
  widthMobile,
  children,
}) => {
  return (
    <ColumnContainerDiv
      width={width}
      widthTablet={widthTablet || 100}
      widthMobile={widthMobile || 100}
    >
      {children}
    </ColumnContainerDiv>
  )
}
