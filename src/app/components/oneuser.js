// import {RandomUser} from "../random_user"
import { useEffect, useState } from "react"
import axios from "axios";


function Oneuser() {    

const url = "https://random-data-api.com/api/users/random_user";

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setUser(response.data);
                // console.log(response)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading new user...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
            <div>
               <div className="flex flex-row bg-slate-600 font-serif text-white rounded-2xl">
                <div><img src={user.avatar}></img></div>
                <div className="font-bold">{user.first_name} {user.last_name}</div>
               </div>
                <div className="font-bold">info</div>
               <div className="flex flex-row">
                <div>email: {user.email}</div>
                <div>phone number: {user.phone_number}</div>
                <div>date of birth: {user.date_of_birth}</div>
                </div>
                <div className="font-bold">employment</div>
               <div className="flex flex-row">
                <div>title: {user.employment.title}</div>
                <div>key skill: {user.employment.key_skill}</div>
                </div>
                <div className="font-bold">subscription</div>
               <div className="flex flex-row">
                <div>plan: {user.subscription.plan}</div>
                <div>status: {user.subscription.status}</div>
                <div>payment method: {user.subscription.payment_method}</div>
                <div>term: {user.subscription.term}</div>
                </div>
        </div>)
}

export default Oneuser


// {"id":3611,
// "uid":"2302a557-021b-451f-bb6b-659ed7f75a20",
// "password":"sDoSxRMVnT",
// "first_name":"Malik",
// "last_name":"Vandervort",
// "username":"malik.vandervort",
// "email":"malik.vandervort@email.com",
// "avatar":"https://robohash.org/quietconsequuntur.png?size=300x300\u0026set=set1",
// "gender":"Genderfluid",
// "phone_number":"+230 760-866-0526 x7641",
// "social_insurance_number":"517886958",
// "date_of_birth":"1970-05-12",
// "employment":{"title":"Internal Technology Developer","key_skill":"Technical savvy"},
// "address":{"city":"New Saulland","street_name":"Fritz Glens","street_address":"8856 Blick Stravenue","zip_code":"21798","state":"Massachusetts","country":"United States",
// "coordinates":{"lat":-29.32332955667932,"lng":48.30877235907067}},
// "credit_card":{"cc_number":"4306-9777-5048-0933"},
// "subscription":{"plan":"Platinum","status":"Active","payment_method":"Cash","term":"Payment in advance"}}