const User = require('../models/User');

module.exports = {
    getNearestTaxis: () => {
        try {
            /*let nearestTaxis = await User.find({
                location: {
                    $near: {
                        $geometry: {
                            type: "Point",
                            coordinates: [longitude, latitude]
                        },
                        $maxDistance: 1000
                    }
                }
            });*/

            nearestTaxis = [
                {
                    longitude: 10.2176856,
                    latitude: 36.891768
                },

                {
                    longitude: 10.2135856,
                    latitude: 36.894768
                },

                {
                    longitude: 10.2138856,
                    latitude: 36.897768
                },

                {
                    longitude: 10.2139856,
                    latitude: 36.878768
                }
            ];
            return nearestTaxis;

        } catch(errors) {
            return errors;
        }
    }
}
