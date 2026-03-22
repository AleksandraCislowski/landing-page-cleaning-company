import HouseIcon from '@mui/icons-material/House';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';

import cardphoto1 from '../../assets/card1.png';
import cardphoto2 from '../../assets/card2.png';
import cardphoto3 from '../../assets/card3.png';
import cardphoto4 from '../../assets/card4.png';

export type ServiceId = 'residential' | 'deep_clean' | 'window_clean' | 'extra';

export type ServiceDefinition = {
  id: ServiceId;
  icon: React.ReactElement;
  image: string;
  nameKey: string;
  descKey: string;
  detailKey: string;
};

export const serviceDefinitions: Record<ServiceId, ServiceDefinition> = {
  residential: {
    id: 'residential',
    icon: (
      <HouseIcon
        sx={{ color: (theme) => theme.palette.primary.main, fontSize: 48 }}
      />
    ),
    image: cardphoto1,
    nameKey: 'services.residential',
    descKey: 'services.residential_desc',
    detailKey: 'services.residential_detail',
  },
  deep_clean: {
    id: 'deep_clean',
    icon: (
      <LocalLaundryServiceIcon
        sx={{ color: (theme) => theme.palette.primary.main, fontSize: 48 }}
      />
    ),
    image: cardphoto2,
    nameKey: 'services.deep_clean',
    descKey: 'services.deep_clean_desc',
    detailKey: 'services.deep_clean_detail',
  },
  window_clean: {
    id: 'window_clean',
    icon: (
      <AutoAwesomeIcon
        sx={{ color: (theme) => theme.palette.primary.main, fontSize: 48 }}
      />
    ),
    image: cardphoto3,
    nameKey: 'services.window_clean',
    descKey: 'services.window_clean_desc',
    detailKey: 'services.window_clean_detail',
  },
  extra: {
    id: 'extra',
    icon: (
      <DryCleaningIcon
        sx={{ color: (theme) => theme.palette.primary.main, fontSize: 48 }}
      />
    ),
    image: cardphoto4,
    nameKey: 'services.extra',
    descKey: 'services.extra_desc',
    detailKey: 'services.extra_detail',
  },
};
