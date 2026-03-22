import ServicePreviewCard from './ServicePreviewCard';
import { ServiceId } from './serviceDefinitions';

type ResidentialServiceCardProps = {
  onSelect: (serviceId: ServiceId) => void;
};

export default function ResidentialServiceCard({
  onSelect,
}: ResidentialServiceCardProps) {
  return <ServicePreviewCard serviceId='residential' onSelect={onSelect} />;
}
