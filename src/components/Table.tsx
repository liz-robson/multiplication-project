import React from 'react'

type Props = {}

export default function Table({}: Props) {
  return (
    <div className="bg-gray-100 p-4">
  <div className="container mx-auto">
    <div className="grid grid-cols-12 gap-4">
      <div className="bg-gray-300 p-4">1</div>
      <div className="bg-gray-300 p-4">2</div>
      <div className="bg-gray-300 p-4">3</div>
      <div className="bg-gray-300 p-4">4</div>
      <div className="bg-gray-300 p-4">5</div>
      <div className="bg-gray-300 p-4">6</div>
      <div className="bg-gray-300 p-4">1</div>
      <div className="bg-gray-300 p-4">2</div>
      <div className="bg-gray-300 p-4">3</div>
      <div className="bg-gray-300 p-4">4</div>
      <div className="bg-gray-300 p-4">5</div>
      <div className="bg-gray-300 p-4">6</div>
    </div>
  </div>
</div>
  )
}