export const APIS = {
  getDoctors: 'https://api.plusmed.cloud/getDoctors',
  signUp: 'https://api.plusmed.cloud/signUp',
  login: 'https://api.plusmed.cloud/signIn',
  
  doctor: {
    allMyAppointments: 'https://api.plusmed.cloud/doctor/getAllMyAppointments?id=',
    getMyUsers: 'https://api.plusmed.cloud/doctor/getMyUsers?id='
  },
  user: {
    bookAppointment: 'https://api.plusmed.cloud/user/bookAppointment',
    allDoctorAppointments: 'https://api.plusmed.cloud/user/getAllDoctorAppointments?id=',
    pastVisits: 'https://api.plusmed.cloud/user/getMyPastAppointments/?id=',
    futureVisits: 'https://api.plusmed.cloud/user/getMyFutureAppointments/?id='
  },
  reception: {
    allDoctorAppointments: 'https://api.plusmed.cloud/reception/getAllDoctorAppointments?id=',
    getAllUsers: 'https://api.plusmed.cloud/reception/getAllUsers'
  },
}

// export function hello() {
//   console.log('hello')
// }