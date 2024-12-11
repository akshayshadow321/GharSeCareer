import React from 'react'

function AddCourse() {
  return (
    <div style={{height:'500px',backgroundColor:'violet',textAlign:'center'}}>
        New Course
        <form>
            <div>
                <label style={{
                    paddingRight:'20px'
                }}>Name</label>
                <input
                name='courseName'
                
                />
            
            </div>
        </form>
    </div>
  )
}

export default AddCourse