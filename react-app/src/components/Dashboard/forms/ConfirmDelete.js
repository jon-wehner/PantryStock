export default function ConfirmDelete({id}) {
  const handleSubmit = e=>{
    e.preventDefault()

  }
  return (
    <form onSubmit={handleSubmit}>
      <p>Are you sure you want to delete this list?</p>
      <button className="stdbutton" style={{backgroundColor : 'red'}}>Delete</button>
    </form>
  )
}
