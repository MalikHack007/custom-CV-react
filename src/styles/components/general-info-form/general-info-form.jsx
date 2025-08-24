import { Input } from '../input/input.jsx';

export function GeneralInfoForm(props){

    const { genIn, setGenIn } = props;

    const handleGenInChange = (e)=>{
        let { name, value } = e.target;
        setGenIn({...genIn, [name]: value});
    }

    
    return(
        <div className="general-info-form">
                <h2>General Information</h2>
                <div className="input-group">
                    <label htmlFor="fullName" className="label">
                        <span>Full Name</span>
                    </label>
                    <Input type="text" name="fullName" placeholder="Full Name" value={genIn.fullName} onChange={handleGenInChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="emailAddress" className="label">
                        <span>Email</span>
                    </label>
                    <Input type="email" name="emailAddress" placeholder="abcd@email.com" value={genIn.emailAddress} onChange={handleGenInChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="linkedInProfile" className="label">
                        <span>LinkedIn Profile</span>
                    </label>
                    <Input type="text" name="linkedInProfile" placeholder="full-name/in" value={genIn.linkedInProfile} onChange={handleGenInChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="phoneNumber" className="label">
                        <span>Phone Number</span>
                    </label>
                    <Input type="text" name="phoneNumber" placeholder="123-456-7890" value={genIn.phoneNumber} onChange={handleGenInChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="city" className="label">
                        <span>City</span>
                    </label>
                    <Input type="text" name="city" placeholder="Austin" value={genIn.city} onChange={handleGenInChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="state" className="label">
                        <span>State</span>
                    </label>
                    <Input type="text" name="state" placeholder="Texas" value={genIn.state} onChange={handleGenInChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="country" className="label">
                        <span>Country</span>
                    </label>
                    <Input type="text" name="country" placeholder="U.S." value={genIn.country} onChange={handleGenInChange}/>
                </div>

        </div>
    );
}