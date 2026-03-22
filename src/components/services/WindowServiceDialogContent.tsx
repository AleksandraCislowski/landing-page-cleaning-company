import StandardServiceDialogContent from './StandardServiceDialogContent';
import { serviceDefinitions } from './serviceDefinitions';

export default function WindowServiceDialogContent() {
  return (
    <StandardServiceDialogContent service={serviceDefinitions.window_clean} />
  );
}
