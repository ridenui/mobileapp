import type { Service } from 'react-native-zeroconf';
import axios from 'axios';
import cheerio from 'cheerio';

export type ValidValidatedInstance = {
  isValid: true;
  ssh: {
    hostname: string;
    port: number;
    username: 'root';
  };
  name: string;
  description?: string;
};

type InvalidValidatedInstance = {
  isValid: false;
  ssh?: undefined;
  name?: undefined;
  description?: undefined;
};

type ValidatedInstance = ValidValidatedInstance | InvalidValidatedInstance;

export async function validateInstance(service: Service): Promise<ValidatedInstance> {
  try {
    const { data } = await axios.get('http://' + service.addresses[0]);
    const $ = cheerio.load(data);
    const serverDescription = $('.content > h2').text().trim();
    return {
      isValid: true,
      name: service.name,
      description: serverDescription,
      ssh: {
        hostname: service.addresses[0],
        port: service.port || 22,
        username: 'root',
      },
    };
  } catch (e) {
    return {
      isValid: false,
    };
  }
}
