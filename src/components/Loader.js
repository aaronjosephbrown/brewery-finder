export const Loader = () => {
  return (
    <div className='flex justify-center h-screen items-center'>
      <div className='loader'></div>
    </div>
  )
}

export const LoaderListView = () => {
  return (
    <div className='overflow-hidden bg-accent shadow sm:rounded-lg animate-pulse '>
      <div className='px-4 py-5 sm:px-6'>
        <h3 className='text-base font-semibold leading-6'>Loading...</h3>
        <p className='mt-1 max-w-2xl text-sm'></p>
      </div>
    </div>
  )
}
