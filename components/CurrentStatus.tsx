import clx from 'classnames'

interface Props {
  type: string
  message: string
}
const CurrentStatus = ({type, message}: Props) => {
  const classes = clx(
    ['font-bold', 'text-center', 'py-3', 'px-5', 'bg-gray-50', 'text-gray-600'], {
    'bg-red-300 text-red-600': type === 'error',
  })
  return (
    <div className={classes}>
      {message}
    </div>
  )
}

export default CurrentStatus