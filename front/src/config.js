const BASE_URL_PROD = "https://api.plusmed.cloud";
const BASE_URL_DEV = "https://localhost:8081";
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
}

// export function hello() {
//   console.log(`hello`)
// }