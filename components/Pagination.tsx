import Paginate from 'react-paginate'
import { memo, useMemo } from 'react'
import { Meta } from '@/models/character'

interface Props {
  meta: Meta
  onPageChange: (page) => void
}

const Pagination = ({ meta, onPageChange }: Props) => {
  const currentPage = useMemo(() => {
    if (!meta.prev) {
      return 0
    } else {
      const query = new URLSearchParams(meta.prev.split('?')[1])
      return Number(query.get('page'))
    }
  }, [meta])

  return (
    <div>
      <Paginate 
        pageCount={meta.pages}
        forcePage={currentPage}
        pageRangeDisplayed={5}
        marginPagesDisplayed={3}
        containerClassName="flex justify-center my-5"

        pageLinkClassName="px-3 py-2 border border-green-300"
        breakLinkClassName="px-3 py-2 text-gray-600 border border-green-300"
        
        disabledClassName="opacity-50"
        activeLinkClassName="text-white bg-green-600"

        previousLinkClassName="px-3 py-2 bg-green-600 text-white"
        nextLinkClassName="px-3 py-2 bg-green-600 text-white border-green-600"

        onPageChange={onPageChange}
      />
    </div>
  )
}

export default memo(Pagination)