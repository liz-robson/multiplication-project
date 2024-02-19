import React from 'react'
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";


type Props = {}

export default function SelectionBox({}: Props) {
  return (
    <>
    <ImCheckboxChecked />
    <ImCheckboxUnchecked />
    </>
  )
}