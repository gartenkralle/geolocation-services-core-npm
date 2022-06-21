import { 
    getCollection, 
    getDetails 
} from '@geolocation-services/nextparkinglot-package'


var parkingLots = 
    await getCollection(47.81044, 50.0704, 8.43979, 12.08176, 9);

parkingLots.forEach(parkingLot => console.log(`
    Id: ${parkingLot.Id}
    Latitude: ${parkingLot.Latitude}
    Longitude: ${parkingLot.Longitude}
`));


var details = await getDetails(28588151);

details.forEach(detail => console.log(`
    Key: ${detail.Key}
    Value: ${detail.Value}
`));
