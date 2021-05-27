import '../assets/staffList.scss';
const StaffList = () => {
    const handleView = () => {
        console.log("View popover")
    }

    const handleEdit = () => {
        console.log('Edit popover')
    }
    
    return (
        <>
            <h3>Staff list  page</h3>

            <table className="table">
                <thead>
                    <tr>
                        <td>Staff ID</td>
                        <td>Staff name</td>
                        <td>Staff member Email</td>
                        <td>Actions</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>First Last</td>
                        <td>staff@mail.test</td>
                        <td>
                            <div className="button-group">
                                <button onClick={handleView}>View</button>
                                <button onClick={handleEdit}>Edit</button>
                                <button>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default StaffList;