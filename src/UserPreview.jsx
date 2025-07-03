import './User.css'
function UserPreview({ companyname, companyslogan, name, position, mobile, email, website, address }) {

    return (
        <div class="wh">
            <div class="head">
                <h2>{companyname}</h2>
                <h3>{companyslogan}</h3>
            </div><hr></hr>
            <img src="https://www.kindpng.com/picc/m/643-6430001_no-profile-picture-girl-hd-png-download.png"></img>

            <div class="names">
                <p>{name}</p>
                <p>{position}</p>
                <p>{mobile}</p>
                <p>{email}</p>
                <p>{address}</p>
            </div><hr></hr>
            <div class="na">
                 <p>{website}</p>
            </div>


        </div>
    )
}
export default UserPreview