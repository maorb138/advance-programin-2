import './Register.css';


function Register() {
    const foo = () => {
        let x = document.getElementById("formFile");
        console.log("image uploaded");
        console.log(x.files[0]);
    }
    return (
        <form id='form1' className="row g-3">
            <div className="header1"> Sign-up</div>

            <div className="md-4">
                <label className="form-label">Username:</label>
                <input type="text" className="form-control inp" required></input>
            </div>
                <div className="md-4">
                <label className="form-label">Nickname:</label>
                <input type="text" className="form-control inp"  required></input>
                </div>
            <div className="mb-3">
                <label className="form-label">image:</label>
                <input onChange={foo} className="form-control" type="file" id="formFile" accept="image/*" required></input>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary mb-1">Sign-up</button><br></br>
            </div><br></br>
        </form>
    );
}

export default Register;