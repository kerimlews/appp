import config from './config';

export const get = async (url: string, options?: RequestInit): Promise<{ data?: any; error?: any }> => {
  try {
    const result = await fetch(`${config.backendApi}/${url}`, options);
    const data = await result.json();
    return { data };
  } catch (error) {
    return { error };
  }
};
