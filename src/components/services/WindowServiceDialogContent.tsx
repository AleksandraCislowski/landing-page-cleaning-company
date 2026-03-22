import StandardServiceDialogContent from './StandardServiceDialogContent';
import { serviceDefinitions } from './serviceDefinitions';

export default function WindowServiceDialogContent() {
  return (
    <StandardServiceDialogContent
      service={serviceDefinitions.window_clean}
      contentKey='services.window_clean_modal_content'
    />
  );
}
