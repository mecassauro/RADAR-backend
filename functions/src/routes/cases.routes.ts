import { Router } from 'express';
import ensureAuthenticateUser from '../middleware/ensureAuthenticateUser';
import FirebaseProvider from '../services/Firebase'

const casesRouter = Router();

casesRouter.get('/', ensureAuthenticateUser , async (request, response) => {
  const firebase = FirebaseProvider()
  const casesRef = firebase.database()
  var allCasos:any = []
 
  await casesRef.ref('/Mapa/Sudoeste').once('value', async (snapshot:any) =>{
  const casos = snapshot.val()
   for (let [key, value] of Object.entries(casos)) {
     allCasos.push({[key]: value})}
//    id: caso,
//     data: casos[caso].Data2,
//     lat: casos[caso].latitude,
//     long: casos[caso].longitude,
//     regiao: casos[caso].RA,
//       })
// 	}
  })
  response.send(allCasos)

  });


export default casesRouter;
