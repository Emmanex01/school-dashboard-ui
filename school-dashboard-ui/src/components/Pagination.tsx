import React from 'react'

type paginationProps = {
    prevPage: () => void,
    nextPage: () => void,
    pageNumber: number[],
    currentPage: number,
    setCurrentPage: (number: number) => void,
}

const Pagination: React.FC<paginationProps> = ({prevPage, nextPage, pageNumber, currentPage, setCurrentPage}) => {
    const paginate = (number: number) => {
        setCurrentPage(number)
      }
  return (
    <div className='flex justify-between items-center p-4'>
        <button disabled={true} onClick={prevPage} className='bg-gray-300 px-4 py-2 rounded-md text-gray-400'>Prev</button>
        <div className='flex items-center gap-5 justify-center'>
        {pageNumber.map((item, index) => (
            <span onClick={() => paginate(item)} className={`p-2 ${currentPage == item ? 'bg-green-300' : 'bg-white'} cursor-pointer`} key={index}>{item}</span>
        ))}
        </div>
        <button onClick={nextPage} className='bg-gray-300 px-4 py-2 rounded-md text-gray-400'>Next</button>
    </div>
  )
}

export default Pagination
