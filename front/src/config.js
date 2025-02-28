const BASE_URL_PROD = "https://api.plusmed.cloud";

const BASE_URL_DEV = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
const PAYMENT_API = process.env.REACT_APP_PAYMENT_URL || "http://localhost:4000";

/**
 * Set proxy in package.json
 * 
 * To use local server in development:
 * "proxy": "http://localhost:8081/",
 * 
 * To use remote server in production:
 * "proxy": "https://api.plusmed.cloud:60443/",
 */

export const APIS = {
  getDoctors: `${BASE_URL_DEV}/getDoctors`,
  signUp: `${BASE_URL_DEV}/signUp`,
  login: `${BASE_URL_DEV}/signIn`,
  
  doctor: {
    allMyAppointments: `${BASE_URL_DEV}/doctor/getAllMyAppointments?id=`,
    getMyUsers: `${BASE_URL_DEV}/doctor/getMyUsers?id=`
  },
  user: {
    bookAppointment: `${BASE_URL_DEV}/user/bookAppointment`,
    allDoctorAppointments: `${BASE_URL_DEV}/user/getAllDoctorAppointments?id=`,
    pastVisits: `${BASE_URL_DEV}/user/getMyPastAppointments/?id=`,
    futureVisits: `${BASE_URL_DEV}/user/getMyFutureAppointments/?id=`
  },
  reception: {
    allDoctorAppointments: `${BASE_URL_DEV}/reception/getAllDoctorAppointments?id=`,
    getAllUsers: `${BASE_URL_DEV}/reception/getAllUsers`
  },
  payment: {
    base: `${PAYMENT_API}`,
    transaction: `${PAYMENT_API}/transaction/`
  }
}

// export function hello() {
//   console.log(`hello`)
// }