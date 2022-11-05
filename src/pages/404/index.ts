import archive from 'src/archive.json';
import Error from 'src/components/Error/Error';

export const ClientError = Error({
  error: archive.errorPages.client.error,
  errorMessage: archive.errorPages.client.description,
});
