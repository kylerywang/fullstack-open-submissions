const Filter =({filter, handleFilterOnChange}) =>{
    return(
    <form>
        <div>
          filter shown with <input value={filter} onChange={handleFilterOnChange}></input>
        </div>
    </form>
    )
  }

export default Filter