import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
// need handleSubmit
// input-state
// redirect vis navigate

const HeaderForm = () => {
    const [category, setCategory] = useState();
    const [id, setId] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate(`/${category}/${id}`) 
        // using back ticks and we can use template literals
        clearForm() 
    }

    const clearForm =()=>{
        setId("")
        setCategory("")
    }


    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <p> 
                    Search for:
                    <select name='category' value={category}
                        onChange={e => setCategory(e.target.value)}>
                            <option hidden> Choose a category</option>
                            <option value="person"> People </option>
                            <option value ="planet"> Planet</option>
                        </select>
                        <input type="text" name="id" value={id}
                        onChange={ e => setId (e.target.value)} />

                        <button type='submit'> Search </button>
                        {/* on submit redirect to view pages  */}
                </p> 
            </form>
        </div>  
    )
}

export default HeaderForm