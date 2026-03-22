import ServicePreviewCard from './ServicePreviewCard';
import { ServiceId } from './serviceDefinitions';

type ExtraServiceCardProps = {
  onSelect: (serviceId: ServiceId) => void;
};

export default function ExtraServiceCard({ onSelect }: ExtraServiceCardProps) {
  return <ServicePreviewCard serviceId='extra' onSelect={onSelect} />;
}
