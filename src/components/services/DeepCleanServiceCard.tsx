import ServicePreviewCard from './ServicePreviewCard';
import { ServiceId } from './serviceDefinitions';

type DeepCleanServiceCardProps = {
  onSelect: (serviceId: ServiceId) => void;
};

export default function DeepCleanServiceCard({
  onSelect,
}: DeepCleanServiceCardProps) {
  return <ServicePreviewCard serviceId='deep_clean' onSelect={onSelect} />;
}
