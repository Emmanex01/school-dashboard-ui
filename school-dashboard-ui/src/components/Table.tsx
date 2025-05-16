import React from 'react'

type tableProps = {
    column: {
        header: string,
        accessor: string,
        className?: string,
    } [],
    renderRow: (item: any) => React.ReactNode,
    teachersData: any [],
    indexOfFirstItem: number,
    indexOfLastItem: number
}

const Table = ({column, renderRow, teachersData, indexOfFirstItem, indexOfLastItem}: tableProps) => {
  return (
    <table className='w-full'>
        <thead>
            <tr className='text-left text-gray-500'>
                {column.map((item) => (
                    <td key={item.accessor} className={`p-2 ${item.className} font-semibold`}>{item.header}</td>
                ))}
            </tr>
        </thead>
        <tbody>
           {teachersData.slice(indexOfFirstItem, indexOfLastItem).map((item) => renderRow(item))} 
        </tbody>
    </table>
  )
}

export default Table
