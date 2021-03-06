import axios from 'axios';
import { api } from '../../../../api';
import { logger } from '../../../../logging/LoggingService';

export function bookEvent(body, callback) {
  console.log(body)
  axios.post(api['booking'] + '/booking', body)
    .then(res => {
      logger.debug('[UI | event booking]: Booked (event ID): ' + body['eventId']
        + ' (email): ' + body['email']);
      callback(res);
    })
    .catch(error => {
      logger.error('[UI | event booking | ' + body['eventId'] + ']: ' + error);
      callback(error);
    });
}