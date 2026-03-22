import ServicePreviewCard from './ServicePreviewCard';
import { ServiceId } from './serviceDefinitions';

type WindowServiceCardProps = {
  onSelect: (serviceId: ServiceId) => void;
};

export default function WindowServiceCard({
  onSelect,
}: WindowServiceCardProps) {
  return <ServicePreviewCard serviceId='window_clean' onSelect={onSelect} />;
}
