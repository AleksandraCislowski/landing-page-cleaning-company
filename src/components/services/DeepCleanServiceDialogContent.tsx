import StandardServiceDialogContent from './StandardServiceDialogContent';
import { serviceDefinitions } from './serviceDefinitions';

export default function DeepCleanServiceDialogContent() {
  return (
    <StandardServiceDialogContent service={serviceDefinitions.deep_clean} />
  );
}
