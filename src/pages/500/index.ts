import archive from "src/archive.json";
import Error from "src/components/Error/Error";

export const ServerError = Error({
  error: archive.errorPages.server.error,
  errorMessage: archive.errorPages.server.description,
});
