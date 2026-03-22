import StandardServiceDialogContent from './StandardServiceDialogContent';
import { serviceDefinitions } from './serviceDefinitions';

export default function ExtraServiceDialogContent() {
  return <StandardServiceDialogContent service={serviceDefinitions.extra} />;
}
